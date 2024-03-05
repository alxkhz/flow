"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[233],{86114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(74848),i=t(28453);const o={sidebar_position:5},s="Notion",c={id:"reference/Connectors/capture-connectors/notion",title:"Notion",description:"This connector captures data from Notion into Flow collections via the Notion API.",source:"@site/docs/reference/Connectors/capture-connectors/notion.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/notion",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/notion",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/notion.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"NetSuite",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/netsuite"},next:{title:"Paypal Transaction",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/paypal-transaction"}},a={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup for OAuth authentication",id:"setup-for-oauth-authentication",level:3},{value:"Setup for manual authentication",id:"setup-for-manual-authentication",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"notion",children:"Notion"}),"\n",(0,r.jsxs)(n.p,{children:["This connector captures data from Notion into Flow collections via the ",(0,r.jsx)(n.a,{href:"https://developers.notion.com/reference/intro",children:"Notion API"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-notion:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-notion:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/notion/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,r.jsx)(n.p,{children:"The following data resources are supported:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.notion.com/reference/retrieve-a-block",children:"Blocks"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.notion.com/reference/retrieve-a-database",children:"Databases"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.notion.com/reference/retrieve-a-page",children:"Pages"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://developers.notion.com/reference/get-user",children:"Users"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["To use this connector, you'll need a Notion account with an ",(0,r.jsx)(n.a,{href:"https://developers.notion.com/docs/authorization",children:"integration"})," created to connect with Flow."]}),"\n",(0,r.jsx)(n.p,{children:"Before you create your integration, choose how you'll authenticate with Notion.\nThere are two ways: using OAuth to sign in directly in the web app,\nor manually, using an access token.\nOAuth is recommended in the web app; only manual configuration is supported when using the CLI."}),"\n",(0,r.jsx)(n.h3,{id:"setup-for-oauth-authentication",children:"Setup for OAuth authentication"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://www.notion.so/my-integrations",children:"your integrations page"})," and create a new integration."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["On the new integration's ",(0,r.jsx)(n.strong,{children:"Secrets"})," page, change the integration type to ",(0,r.jsx)(n.strong,{children:"Public"}),". Fill in the required fields."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Redirect URIs: ",(0,r.jsx)(n.a,{href:"http://dashboard.estuary.dev",children:"http://dashboard.estuary.dev"})]}),"\n",(0,r.jsxs)(n.li,{children:["Website homepage: ",(0,r.jsx)(n.a,{href:"http://dashboard.estuary.dev",children:"http://dashboard.estuary.dev"})]}),"\n",(0,r.jsxs)(n.li,{children:["Privacy policy: ",(0,r.jsx)(n.a,{href:"https://www.estuary.dev/privacy-policy/",children:"https://www.estuary.dev/privacy-policy/"})]}),"\n",(0,r.jsxs)(n.li,{children:["Terms of use: ",(0,r.jsx)(n.a,{href:"https://www.estuary.dev/terms/",children:"https://www.estuary.dev/terms/"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"setup-for-manual-authentication",children:"Setup for manual authentication"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://www.notion.so/my-integrations",children:"your integrations page"})," and create a new ",(0,r.jsx)(n.a,{href:"https://developers.notion.com/docs/authorization#integration-types",children:"internal integration"}),". Notion integrations are internal by default."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["During setup, ",(0,r.jsxs)(n.a,{href:"https://www.notion.so/help/create-integrations-with-the-notion-api#granular-integration-permissions",children:["change ",(0,r.jsx)(n.strong,{children:"User Capabilities"})]}),"\nfrom ",(0,r.jsx)(n.strong,{children:"No user information"})," (the default) to ",(0,r.jsx)(n.strong,{children:"Read user information without email address"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy the generated token for use in the connector configuration."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1404/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Notion source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,r.jsx)(n.a,{href:"#setup-for-oauth-authentication",children:"OAuth2"}),",\nso many of these properties aren't required."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/credentials"})})}),(0,r.jsx)(n.td,{children:"Authenticate using"}),(0,r.jsx)(n.td,{children:"Pick an authentication method."}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/credentials/auth_type"})})}),(0,r.jsx)(n.td,{children:"Authentication type"}),(0,r.jsxs)(n.td,{children:["Set to ",(0,r.jsx)(n.code,{children:"token"})," for manual authentication"]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/credentials/token"})}),(0,r.jsx)(n.td,{children:"Access Token"}),(0,r.jsx)(n.td,{children:"Notion API access token"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/start_date"})})}),(0,r.jsx)(n.td,{children:"Start Date"}),(0,r.jsx)(n.td,{children:"UTC date and time in the format 2017-01-25T00:00:00.000Z. Any data before this date will not be replicated."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Notion resource from which a collection is captured."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync Mode"}),(0,r.jsx)(n.td,{children:"Connection method."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-notion:dev\n        config:\n          credentials:\n            auth_type: token\n            token: {secret}\n          start_date: 2021-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: blocks\n          syncMode: incremental\n        target: ${PREFIX}/blocks\n      {...}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);