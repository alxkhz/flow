"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3073],{23058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(74848),r=t(28453);const i={sidebar_position:1},c="Apache Kafka",o={id:"reference/Connectors/capture-connectors/apache-kafka",title:"Apache Kafka",description:"This connector captures streaming data from Apache Kafka topics.",source:"@site/docs/reference/Connectors/capture-connectors/apache-kafka.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/apache-kafka",permalink:"/reference/Connectors/capture-connectors/apache-kafka",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/apache-kafka.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Amplitude",permalink:"/reference/Connectors/capture-connectors/amplitude"},next:{title:"Bing Ads",permalink:"/reference/Connectors/capture-connectors/bing-ads"}},a={},d=[{value:"Supported data types",id:"supported-data-types",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Authentication and connection security",id:"authentication-and-connection-security",level:3},{value:"AWS Managed Streaming Kafka (MSK)",id:"aws-managed-streaming-kafka-msk",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"apache-kafka",children:"Apache Kafka"}),"\n",(0,s.jsx)(n.p,{children:"This connector captures streaming data from Apache Kafka topics."}),"\n",(0,s.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(n.a,{href:"https://github.com/estuary/connectors/pkgs/container/source-kafka",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/source-kafka:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-data-types",children:"Supported data types"}),"\n",(0,s.jsxs)(n.p,{children:["This connector supports Kafka messages that contain JSON data.\nFlow ",(0,s.jsx)(n.a,{href:"/concepts/collections",children:"collections"})," store data as JSON.\nBefore deploying this connector, you should modify ",(0,s.jsx)(n.a,{href:"/concepts/schemas",children:"schema(s)"}),"\nof the Flow collection(s) you're creating to reflect the structure of your JSON Kafka messages."]}),"\n",(0,s.jsx)(n.p,{children:"At this time, the connector does not support other data types in Kafka messages."}),"\n",(0,s.jsx)(n.admonition,{title:"Beta",type:"info",children:(0,s.jsxs)(n.p,{children:["Support for Avro Kafka messages will be added soon. For more information, ",(0,s.jsx)(n.a,{href:"mailto:info@estuary.dev",children:"contact the Estuary team"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Kafka cluster with:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://kafka.apache.org/documentation/#producerconfigs_bootstrap.servers",children:"bootstrap.servers"})," configured so that clients may connect via the desired host and port"]}),"\n",(0,s.jsx)(n.li,{children:"An authentication mechanism of choice set up (highly recommended for production environments)"}),"\n",(0,s.jsx)(n.li,{children:"Connection security enabled with TLS (highly recommended for production environments)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"authentication-and-connection-security",children:"Authentication and connection security"}),"\n",(0,s.jsx)(n.p,{children:"Neither authentication nor connection security are enabled by default in your Kafka cluster, but both are important considerations.\nSimilarly, Flow's Kafka connectors do not strictly require authentication or connection security mechanisms.\nYou may choose to omit them for local development and testing; however, both are strongly encouraged for production environments."}),"\n",(0,s.jsxs)(n.p,{children:["A wide ",(0,s.jsx)(n.a,{href:"https://kafka.apache.org/documentation/#security_overview",children:"variety of authentication methods"})," is available in Kafka clusters.\nFlow supports SASL/SCRAM-SHA-256, SASL/SCRAM-SHA-512, and SASL/PLAIN. Behavior using other authentication methods is not guaranteed.\nWhen authentication details are not provided, the client connection will attempt to use PLAINTEXT (insecure) protocol."]}),"\n",(0,s.jsxs)(n.p,{children:["If you don't already have authentication enabled on your cluster, Estuary recommends either of listed ",(0,s.jsx)(n.a,{href:"https://kafka.apache.org/documentation/#security_sasl_scram",children:"SASL/SCRAM"})," methods.\nWith SCRAM, you set up a username and password, making it analogous to the traditional authentication mechanisms\nyou use in other applications."]}),"\n",(0,s.jsxs)(n.p,{children:['For connection security, Estuary recommends that you enable TLS encryption for your SASL mechanism of choice,\nas well as all other components of your cluster.\nNote that because TLS replaced now-deprecated SSL encryption, Kafka still uses the acronym "SSL" to refer to TLS encryption.\nSee ',(0,s.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/kafka/authentication_ssl.html",children:"Confluent's documentation"})," for details."]}),"\n",(0,s.jsx)(n.admonition,{title:"Beta",type:"info",children:(0,s.jsx)(n.p,{children:"TLS encryption is currently the only supported connection security mechanism for this connector.\nOther connection security methods may be enabled in the future."})}),"\n",(0,s.jsx)(n.h3,{id:"aws-managed-streaming-kafka-msk",children:"AWS Managed Streaming Kafka (MSK)"}),"\n",(0,s.jsxs)(n.p,{children:["If using AWS Managed Streaming for Apache Kafka (MSK), you can use IAM authentication with our connector. Read more about IAM authentication with MSK in AWS docs: ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html",children:"IAM access control"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, you want to make sure that your VPC configuration allows inbound and outbound requests to Estuary's IP address: ",(0,s.jsx)(n.code,{children:"34.121.207.128"})]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(n.a,{href:"/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Apache Kafka source connector."]}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/bootstrap_servers"})})}),(0,s.jsx)(n.td,{children:"Bootstrap servers"}),(0,s.jsx)(n.td,{children:"The initial servers in the Kafka cluster to connect to, separated by commas. The Kafka client will be informed of the rest of the cluster nodes by connecting to one of these nodes."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/tls"})})}),(0,s.jsx)(n.td,{children:"TLS"}),(0,s.jsx)(n.td,{children:"TLS connection settings."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"system_certificates"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials"})}),(0,s.jsx)(n.td,{children:"Credentials"}),(0,s.jsx)(n.td,{children:"Connection details used to authenticate a client connection to Kafka via SASL."}),(0,s.jsx)(n.td,{children:"null, object"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/auth_type"})}),(0,s.jsx)(n.td,{children:"Authentication type"}),(0,s.jsxs)(n.td,{children:["One of ",(0,s.jsx)(n.code,{children:"UserPassword"})," for SASL or ",(0,s.jsx)(n.code,{children:"AWS"})," for IAM authentication"]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/mechanism"})}),(0,s.jsx)(n.td,{children:"SASL Mechanism"}),(0,s.jsx)(n.td,{children:"SASL mechanism describing how to exchange and authenticate client servers."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/password"})}),(0,s.jsx)(n.td,{children:"Password"}),(0,s.jsx)(n.td,{children:"Password, if applicable for the authentication mechanism chosen."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/username"})}),(0,s.jsx)(n.td,{children:"Username"}),(0,s.jsx)(n.td,{children:"Username, if applicable for the authentication mechanism chosen."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/aws_access_key_id"})}),(0,s.jsx)(n.td,{children:"AWS Access Key ID"}),(0,s.jsx)(n.td,{children:"Supply if using auth_type: AWS"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/aws_secret_access_key"})}),(0,s.jsx)(n.td,{children:"AWS Secret Access Key"}),(0,s.jsx)(n.td,{children:"Supply if using auth_type: AWS"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/region"})}),(0,s.jsx)(n.td,{children:"AWS Region"}),(0,s.jsx)(n.td,{children:"Supply if using auth_type: AWS"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/stream"})})}),(0,s.jsx)(n.td,{children:"Stream"}),(0,s.jsx)(n.td,{children:"Kafka topic name."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/syncMode"})})}),(0,s.jsx)(n.td,{children:"Sync mode"}),(0,s.jsxs)(n.td,{children:["Connection method. Always set to ",(0,s.jsx)(n.code,{children:"incremental"})]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.p,{children:"User and password authentication (SASL):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-kafka:dev\n        config:\n            bootstrap_servers: localhost:9093\n            tls: system_certificates\n            credentials:\n                auth_type: UserPassword\n                mechanism: SCRAM-SHA-512\n                username: bruce.wayne\n                password: definitely-not-batman\n    bindings:\n      - resource:\n           stream: ${TOPIC_NAME}\n           syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,s.jsx)(n.p,{children:"AWS IAM authentication:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-kafka:dev\n        config:\n            bootstrap_servers: localhost:9093\n            tls: system_certificates\n            credentials:\n                auth_type: AWS\n                aws_access_key_id: AK...\n                aws_secret_access_key: secret\n                region: us-east-1\n    bindings:\n      - resource:\n           stream: ${TOPIC_NAME}\n           syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Your capture definition will likely be more complex, with additional bindings for each Kafka topic."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/concepts/captures#pull-captures",children:"Learn more about capture definitions."}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);