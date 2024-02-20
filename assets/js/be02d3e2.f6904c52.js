"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7132],{68296:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var n=o(74848),i=o(28453);const r={sidebar_position:3},s="HTTP Ingest (Webhook)",c={id:"reference/Connectors/capture-connectors/http-ingest",title:"HTTP Ingest (Webhook)",description:"The HTTP Ingest connector allows you to capture data from incoming HTTP requests.",source:"@site/docs/reference/Connectors/capture-connectors/http-ingest.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/http-ingest",permalink:"/reference/Connectors/capture-connectors/http-ingest",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/http-ingest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP File",permalink:"/reference/Connectors/capture-connectors/http-file"},next:{title:"Hubspot",permalink:"/reference/Connectors/capture-connectors/hubspot"}},a={},h=[{value:"Usage",id:"usage",level:2},{value:"Send sample data to Flow",id:"send-sample-data-to-flow",level:3},{value:"Configure a webhook",id:"configure-a-webhook",level:3},{value:"URL Paths",id:"url-paths",level:3},{value:"Webhook IDs",id:"webhook-ids",level:3},{value:"Custom collection IDs",id:"custom-collection-ids",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Webhook signature verification",id:"webhook-signature-verification",level:3},{value:"Endpoint Configuration",id:"endpoint-configuration",level:2},{value:"Resource configuration",id:"resource-configuration",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"http-ingest-webhook",children:"HTTP Ingest (Webhook)"}),"\n",(0,n.jsxs)(t.p,{children:["The HTTP Ingest connector allows you to capture data from ",(0,n.jsx)(t.em,{children:"incoming"})," HTTP requests.\nA common use case is to capture webhook deliveries, turning them into a Flow collection."]}),"\n",(0,n.jsxs)(t.p,{children:["If you need to capture a dataset hosted at at HTTP endpoint, see the ",(0,n.jsx)(t.a,{href:"/reference/Connectors/capture-connectors/http-file",children:"HTTP File"})," connector."]}),"\n",(0,n.jsxs)(t.p,{children:["The connector is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.jsx)(t.a,{href:"https://ghcr.io/estuary/source-http-ingest:dev",children:(0,n.jsx)(t.code,{children:"ghcr.io/estuary/source-http-ingest:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"This connector is distinct from all other capture connectors in that it's not designed to pull data from a specific\nsystem or endpoint. It requires no endpoint-specific configuration, and can accept any and all valid JSON objects from any source."}),"\n",(0,n.jsx)(t.p,{children:"This is useful primarily if you want to test out Flow or see how your webhook data will come over."}),"\n",(0,n.jsx)(t.p,{children:"To begin, use the web app to create a capture. Once published, the confirmation dialog displays\na unique URL for your public endpoint."}),"\n",(0,n.jsx)(t.p,{children:"You're now ready to send data to Flow."}),"\n",(0,n.jsx)(t.h3,{id:"send-sample-data-to-flow",children:"Send sample data to Flow"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"After publishing the capture, click the endpoint link from the confirmation dialog to open the Swagger UI page for your capture."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Expand ",(0,n.jsx)(t.strong,{children:"POST"})," or ",(0,n.jsx)(t.strong,{children:"PUT"})," and click ",(0,n.jsx)(t.strong,{children:"Try it out"})," to send some example JSON documents using the UI. You can also copy the provided ",(0,n.jsx)(t.code,{children:"curl"})," commands to send data via the command line."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["After sending data, go to the Collections page of the Flow web app and find the collection associated with your capture.\nClick ",(0,n.jsx)(t.strong,{children:"Details"})," to view the data preview."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"configure-a-webhook",children:"Configure a webhook"}),"\n",(0,n.jsx)(t.p,{children:"To configure a webhook in another service, such as Github, Shopify, or Segment, you'll need to paste a webhook URL into the configuration of their service."}),"\n",(0,n.jsxs)(t.p,{children:["You can copy and paste that URL from the Flow web app into a webhook origination service, appending the full name of the collection of the bound collection. This collection name\nis typically determined automatically when you create the capture in the UI, formatted as ",(0,n.jsx)(t.code,{children:"prefixes/captureName/webhook-data"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, if you entered ",(0,n.jsx)(t.code,{children:"acmeCo/foo"})," for the capture name, then\nyour collection name would default to ",(0,n.jsx)(t.code,{children:"acmeCo/foo/webhook-data"}),", and your full webhook URL would be ",(0,n.jsx)(t.code,{children:"https://<your-unique-hostname>/acmeCo/foo/webhook-data"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"url-paths",children:"URL Paths"}),"\n",(0,n.jsxs)(t.p,{children:["You can customize the URL path for each binding by setting the ",(0,n.jsx)(t.code,{children:"path"})," option in the ",(0,n.jsx)(t.a,{href:"#resource-configuration",children:"resource configuration"})," when creating the capture. For example, if you set the path to ",(0,n.jsx)(t.code,{children:"my-webhook.json"}),",\nthen the full URL for that collection would be ",(0,n.jsx)(t.code,{children:"https://<your-unique-hostname>/my-webhook.json"}),". You can even create multiple bindings to the same collection\nin order to serve webhooks from different URLs."]}),"\n",(0,n.jsx)(t.h3,{id:"webhook-ids",children:"Webhook IDs"}),"\n",(0,n.jsxs)(t.p,{children:['Webhook delivery is typically "at least once". This means that webhooks from common services such as Github, Segment, Shopify, etc. may sometimes be sent multiple times.\nIn order to prevent problems due to duplicate processing of webhooks, these services typically provide either an HTTP header or a field within each document that serves\nas a unique ID for each webhook event. This can be used to deduplicate the events in your ',(0,n.jsx)(t.code,{children:"webhook-data"})," collection. The key of the discovered ",(0,n.jsx)(t.code,{children:"webhook-data"})," collection is ",(0,n.jsx)(t.code,{children:"/_meta/webhookId"}),".\nBy default, this value is generated automatically by the connector, and no-deduplication will be performed.\nYou can set the ",(0,n.jsx)(t.code,{children:"idFromHeader"})," option in the ",(0,n.jsx)(t.a,{href:"#resource-configuration",children:"resource configuration"})," to have the connector automatically assign the value of the given HTTP header to the ",(0,n.jsx)(t.code,{children:"/_meta/webhookId"})," property.\nDoing so means that a materialization of the ",(0,n.jsx)(t.code,{children:"webhook-data"})," collection will automatically deduplicate the webhook events."]}),"\n",(0,n.jsx)(t.p,{children:"Here's a table with some common webhook services and headers that they use:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Service"}),(0,n.jsxs)(t.th,{children:["Value to use for ",(0,n.jsx)(t.code,{children:"idFromHeader"})]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Github"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"X-Github-Event"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Shopify"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"X-Shopify-Webhook-Id"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Zendesk"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"x-zendesk-webhook-id"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Jira"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"X-Atlassian-Webhook-Identifier"})})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"custom-collection-ids",children:"Custom collection IDs"}),"\n",(0,n.jsxs)(t.p,{children:["Some webhooks don't pass a deduplication ID as part of the HTTP headers. That's fine, and you can still easily deduplicate the events.\nTo do so, you'll just need to customize the ",(0,n.jsx)(t.code,{children:"schema"})," and ",(0,n.jsx)(t.code,{children:"key"})," of your webhook-data collection, or bind the webhook to an existing collection that already has the correct ",(0,n.jsx)(t.code,{children:"schema"})," and ",(0,n.jsx)(t.code,{children:"key"}),".\nJust set the ",(0,n.jsx)(t.code,{children:"key"})," to the field(s) within the webhook payload that uniquely identify the event.\nFor example, to capture webhooks from Segment, you'll want to set the ",(0,n.jsx)(t.code,{children:"key"})," to ",(0,n.jsx)(t.code,{children:'["/messageId"]'}),", and ensure that the ",(0,n.jsx)(t.code,{children:"schema"})," requires that property to exist and be a ",(0,n.jsx)(t.code,{children:"string"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsxs)(t.p,{children:["The connector can optionally require each request to present an authentication token as part of an ",(0,n.jsx)(t.code,{children:"Authorization: Bearer "}),' HTTP header. To enable authentication, generate a secret and paste it into the "Require Auth Token" field. We recommend using a password manager to generate these values, but keep in mind that not all systems will be able to send values with certain special characters, so you may want to disable special characters when you generate the secret. If you enable authentication, then each incoming request must have an ',(0,n.jsx)(t.code,{children:"Authorization"})," header with the value of your token. For example, if you use an auth token value of ",(0,n.jsx)(t.code,{children:"mySecretToken"}),", then the header on each request must be ",(0,n.jsx)(t.code,{children:"Authorization: Bearer mySecretToken"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"If you don't enable authentication, then anyone who knows the URL will be able to publish data to your collection."})," We recommend using authentication whenever possible."]}),"\n",(0,n.jsx)(t.h3,{id:"webhook-signature-verification",children:"Webhook signature verification"}),"\n",(0,n.jsxs)(t.p,{children:["This connector does not yet support webhook signature verification. If this is a requirement for your use case, please contact ",(0,n.jsx)(t.a,{href:"mailto://support@estuary.dev",children:(0,n.jsx)(t.code,{children:"support@estuary.dev"})})," and let us know."]}),"\n",(0,n.jsx)(t.h2,{id:"endpoint-configuration",children:"Endpoint Configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Title"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required/Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"****"}),(0,n.jsx)(t.td,{children:"EndpointConfig"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/require_auth_token"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Optional bearer token to authenticate webhook requests. WARNING: If this is empty or unset, then anyone who knows the URL of the connector will be able to write data to your collections."}),(0,n.jsx)(t.td,{children:"null, string"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"resource-configuration",children:"Resource configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Title"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Required/Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"****"}),(0,n.jsx)(t.td,{children:"ResourceConfig"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"object"}),(0,n.jsx)(t.td,{children:"Required"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/idFromHeader"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Set the /_meta/webhookId from the given HTTP header in each request. If not set, then a random id will be generated automatically. If set, then each request will be required to have the header, and the header value will be used as the value of `/_meta/webhookId`."}),(0,n.jsx)(t.td,{children:"null, string"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"/path"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The URL path to use for adding documents to this binding. Defaults to the name of the collection."}),(0,n.jsx)(t.td,{children:"null, string"}),(0,n.jsx)(t.td,{})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>c});var n=o(96540);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);