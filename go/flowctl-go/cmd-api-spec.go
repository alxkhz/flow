package main

import (
	"context"
	"encoding/json"
	"os"
	"strings"
	"fmt"

	"github.com/estuary/flow/go/connector"
	"github.com/estuary/flow/go/capture"
	"github.com/estuary/flow/go/flow/ops"
	"github.com/estuary/flow/go/materialize"
	pc "github.com/estuary/flow/go/protocols/capture"
	"github.com/estuary/flow/go/protocols/flow"
	pm "github.com/estuary/flow/go/protocols/materialize"
	"github.com/sirupsen/logrus"
	pb "go.gazette.dev/core/broker/protocol"
	mbp "go.gazette.dev/core/mainboilerplate"
)

type specResponse struct {
	Type               string          `json:"type"`
	DocumentationURL   string          `json:"documentationURL"`
	EndpointSpecSchema json.RawMessage `json:"endpointSpecSchema"`
	ResourceSpecSchema json.RawMessage `json:"resourceSpecSchema"`
}

type apiSpec struct {
	Log         mbp.LogConfig         `group:"Logging" namespace:"log" env-namespace:"LOG"`
	Diagnostics mbp.DiagnosticsConfig `group:"Debug" namespace:"debug" env-namespace:"DEBUG"`
	Image       string                `long:"image" required:"true" description:"Docker image of the connector to use"`
	Network     string                `long:"network" default:"host" description:"The Docker network that connector containers are given access to."`
}

type imageConfig struct {
	Labels map[string]string `json:"Labels"`
}

type imageInspect struct {
	Config imageConfig `json:"Config"`
}

const FLOW_RUNTIME_PROTOCOL_KEY = "FLOW_RUNTIME_PROTOCOL"

func (cmd apiSpec) execute(ctx context.Context) (specResponse, error) {
	var endpointSpec, err = json.Marshal(struct {
		Image  string   `json:"image"`
		Config struct{} `json:"config"`
	}{Image: cmd.Image})

	if err != nil {
		return specResponse{}, err
	}

	// This might be a local image and might fail because of that
	// If the image does not exist locally, the inspectImage will return an error and terminate the workflow.
	err = connector.PullRemoteImage(ctx, cmd.Image, ops.StdLogger())
	if err != nil {
		logrus.WithFields(logrus.Fields{
			"error":    err,
		}).Info("pull remote image does not succeed.")
	}
	inspectOutput, err := connector.InspectImage(ctx, cmd.Image)
	if err != nil {
		return specResponse{}, fmt.Errorf("inspecting image %w", err)
	}
	var parsedInspects []imageInspect
	err = json.Unmarshal(inspectOutput, &parsedInspects)
	if err != nil {
		return specResponse{}, fmt.Errorf("parsing inspect image %w", err)
	}
	labels := parsedInspects[0].Config.Labels

	if protocol_key, ok := labels[FLOW_RUNTIME_PROTOCOL_KEY]; ok {
		if protocol_key == "materialize" {
			return cmd.specMaterialization(ctx, endpointSpec)
		} else if protocol_key == "capture" {
			return cmd.specCapture(ctx, endpointSpec)
		} else {
			return specResponse{}, fmt.Errorf("image labels specify unknown protocol %s=%s", FLOW_RUNTIME_PROTOCOL_KEY, protocol_key)
		}
	} else if strings.HasPrefix(cmd.Image, "ghcr.io/estuary/materialize-") {
		// For backward compatibility with old images that do not have the labels
		return cmd.specMaterialization(ctx, endpointSpec)
	} else {
		return cmd.specCapture(ctx, endpointSpec)
	}
}

func (cmd apiSpec) specCapture(ctx context.Context, spec json.RawMessage) (specResponse, error) {
	var driver, err = capture.NewDriver(ctx,
		flow.EndpointType_AIRBYTE_SOURCE, spec, cmd.Network, ops.StdLogger())
	if err != nil {
		return specResponse{}, err
	}

	resp, err := driver.Spec(ctx, &pc.SpecRequest{
		EndpointType:     flow.EndpointType_AIRBYTE_SOURCE,
		EndpointSpecJson: spec,
	})
	if err != nil {
		return specResponse{}, err
	}

	return specResponse{
		Type:               "capture",
		DocumentationURL:   resp.DocumentationUrl,
		EndpointSpecSchema: resp.EndpointSpecSchemaJson,
		ResourceSpecSchema: resp.ResourceSpecSchemaJson,
	}, nil
}

func (cmd apiSpec) specMaterialization(ctx context.Context, spec json.RawMessage) (specResponse, error) {
	var driver, err = materialize.NewDriver(ctx,
		flow.EndpointType_FLOW_SINK, spec, cmd.Network, ops.StdLogger())
	if err != nil {
		return specResponse{}, err
	}

	resp, err := driver.Spec(ctx, &pm.SpecRequest{
		EndpointType:     flow.EndpointType_FLOW_SINK,
		EndpointSpecJson: spec,
	})
	if err != nil {
		return specResponse{}, err
	}

	return specResponse{
		Type:               "materialization",
		DocumentationURL:   resp.DocumentationUrl,
		EndpointSpecSchema: resp.EndpointSpecSchemaJson,
		ResourceSpecSchema: resp.ResourceSpecSchemaJson,
	}, nil
}

func (cmd apiSpec) Execute(_ []string) error {
	defer mbp.InitDiagnosticsAndRecover(cmd.Diagnostics)()
	mbp.InitLog(cmd.Log)

	logrus.WithFields(logrus.Fields{
		"config":    cmd,
		"version":   mbp.Version,
		"buildDate": mbp.BuildDate,
	}).Info("flowctl configuration")
	pb.RegisterGRPCDispatcher("local")

	var resp, err = cmd.execute(context.Background())
	if err != nil {
		return err
	}
	return json.NewEncoder(os.Stdout).Encode(resp)
}