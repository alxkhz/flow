---
sidebar_position: 3
---
# Datadog HTTP Ingest (Webhook)

The Datadog HTTP Ingest connector allows you to capture data from _incoming_ HTTP requests from Datadog.
A common use case is to capture webhook deliveries, turning them into a Flow collection.

The connector is available for use in the Flow web application. For local development or open-source workflows, [`ghcr.io/estuary/source-http-ingest:dev`](https://ghcr.io/estuary/source-http-ingest:dev) provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions.

## Usage

This connector is distinct from all other capture connectors in that it's not designed to pull data from a specific
system or endpoint. It requires no endpoint-specific configuration, and can accept any and all valid JSON objects from any source.

This is useful primarily if you want to test out Flow or see how your webhook data will come over.

To begin, use the web app to create a capture. Once published, the confirmation dialog displays
a unique URL for your public endpoint.

You're now ready to send data to Flow.

### Send sample data to Flow

1. After publishing the capture, click the endpoint link from the confirmation dialog to open the Swagger UI page for your capture.

2. Expand **POST** or **PUT** and click **Try it out** to send some example JSON documents using the UI. You can also copy the provided `curl` commands to send data via the command line.

3. After sending data, go to the Collections page of the Flow web app and find the collection associated with your capture.
Click **Details** to view the data preview.

### Configure a Datadog webhook

1. In the Datadog Cloud Monitoring Platform, navigate to the Integrations tab and click on the Integrations option in the dropdown.

2. Using the search bar, search for the Webhook Integration and install it.

3. Within the Webhook Integration configuration, select new Webhook and enter in the following information:

| Field | Value | Description |
|---|---|---|
| Name |`your-webhook`| The name of your webhook within Datadog |
| URL | `https://your-unique-webhook-url/your-tenant/webhook-data` | The unique Estuary URL created for ingesting webhook data  |


4. In the Datadog Cloud Monitoring Platform, navigate to Monitors/New Monitor and select Metric for the type.

5. Define the alert conditions and under `Notify your team` select `@your-webhook` from the dropdown.

If you entered `acmeCo/foo` for the capture name, then
your collection name would default to `acmeCo/foo/webhook-data`, and your full webhook URL would be `https://your-unique-hostname/acmeCo/foo/webhook-data`.

### URL Paths

You can customize the URL path for each binding by setting the `path` option in the [resource configuration](#resource-configuration) when creating the capture. For example, if you set the path to `my-webhook.json`,
then the full URL for that collection would be `https://your-unique-hostname/my-webhook.json`. You can even create multiple bindings to the same collection
in order to serve webhooks from different URLs.

### Authentication

The connector can optionally require each request to present an authentication token as part of an `Authorization: Bearer ` HTTP header. To enable authentication, generate a secret and paste it into the "Require Auth Token" field. We recommend using a password manager to generate these values, but keep in mind that not all systems will be able to send values with certain special characters, so you may want to disable special characters when you generate the secret. If you enable authentication, then each incoming request must have an `Authorization` header with the value of your token. For example, if you use an auth token value of `mySecretToken`, then the header on each request must be `Authorization: Bearer mySecretToken`.

**If you don't enable authentication, then anyone who knows the URL will be able to publish data to your collection.** We recommend using authentication whenever possible.

### Webhook signature verification

This connector does not yet support webhook signature verification. If this is a requirement for your use case, please contact [`support@estuary.dev`](mailto://support@estuary.dev) and let us know.

## Endpoint Configuration

| Property | Title | Description | Type | Required/Default |
|---|---|---|---|---|
| **** | EndpointConfig |  | object | Required |
| `/require_auth_token` |  | Optional bearer token to authenticate webhook requests. WARNING: If this is empty or unset, then anyone who knows the URL of the connector will be able to write data to your collections. | null, string | `null` |

## Resource configuration

| Property | Title | Description | Type | Required/Default |
|---|---|---|---|---|
| **** | ResourceConfig |  | object | Required |
| `/idFromHeader` |  | Set the &#x2F;&#x5F;meta&#x2F;webhookId from the given HTTP header in each request. If not set, then a random id will be generated automatically. If set, then each request will be required to have the header, and the header value will be used as the value of &#x60;&#x2F;&#x5F;meta&#x2F;webhookId&#x60;. | null, string |  |
| `/path` |  | The URL path to use for adding documents to this binding. Defaults to the name of the collection. | null, string |  |


