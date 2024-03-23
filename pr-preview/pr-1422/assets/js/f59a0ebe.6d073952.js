"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5364],{37951:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(74848),i=r(28453);const s={sidebar_position:1},c="Aircall",l={id:"reference/Connectors/capture-connectors/aircall",title:"Aircall",description:"This connector captures data from Aircall into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/aircall.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/aircall",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/aircall",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/aircall.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Capture connectors",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/"},next:{title:"Airtable",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/airtable"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Set up the Aircall connector in Estuary Flow",id:"set-up-the-aircall-connector-in-estuary-flow",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Supported Streams",id:"supported-streams",level:2},{value:"API Method Example",id:"api-method-example",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aircall",children:"Aircall"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from Aircall into Flow collections."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-aircall",":dev"," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To set up the Aircall connector, you need the following prerequisite:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Access Token: An access token acting as a bearer token is required for the connector to work. You can find the access token in the settings of ",(0,t.jsx)(n.a,{href:"https://dashboard.aircall.io/integrations/api-keys",children:"Aircall"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to set up the Aircall connector."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Obtain an Aircall access token from the Aircall ",(0,t.jsx)(n.a,{href:"https://dashboard.aircall.io/integrations/api-keys",children:"settings"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"set-up-the-aircall-connector-in-estuary-flow",children:"Set up the Aircall connector in Estuary Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Log into your Estuary Flow account."}),"\n",(0,t.jsx)(n.li,{children:'In the left navigation bar, click on "Captures". In the top-left corner, click "Connector Search".'}),"\n",(0,t.jsx)(n.li,{children:'Enter the name for the Aircall connector and select "Aircall" from the dropdown.'}),"\n",(0,t.jsxs)(n.li,{children:["Fill out the following endpoint configurations:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_id"}),": The auto-generated ID."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_token"}),": The access token obtained from Aircall settings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"start_date"}),": Date filter for eligible streams. Enter the desired start date."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,t.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Aircall source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/api_id"})}),(0,t.jsx)(n.td,{children:"API ID"}),(0,t.jsxs)(n.td,{children:["App ID found at ",(0,t.jsx)(n.a,{href:"https://dashboard.aircall.io/integrations/api-keys",children:"settings"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/api_token"})}),(0,t.jsx)(n.td,{children:"API Token"}),(0,t.jsxs)(n.td,{children:["App token found at ",(0,t.jsx)(n.a,{href:"https://dashboard.aircall.io/integrations/api-keys",children:"settings"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/start_date"})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"Date time filter for incremental filter, Specify which date to extract from."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Resource of your Aircall project from which collections are captured."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsx)(n.td,{children:"Connection method."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "properties": {\n    "start_date": {\n      "default": "2023-01-01T00:00:00.000Z",\n      "format": null\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"supported-streams",children:"Supported Streams"}),"\n",(0,t.jsx)(n.p,{children:"The Aircall connector supports the following streams:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"calls"}),"\n",(0,t.jsx)(n.li,{children:"company"}),"\n",(0,t.jsx)(n.li,{children:"contacts"}),"\n",(0,t.jsx)(n.li,{children:"numbers"}),"\n",(0,t.jsx)(n.li,{children:"tags"}),"\n",(0,t.jsx)(n.li,{children:"user_availablity"}),"\n",(0,t.jsx)(n.li,{children:"users"}),"\n",(0,t.jsx)(n.li,{children:"teams"}),"\n",(0,t.jsx)(n.li,{children:"webhooks"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"api-method-example",children:"API Method Example"}),"\n",(0,t.jsx)(n.p,{children:"An example of an API method call for Aircall:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"GET https://api.aircall.io/v1/numbers"})}),"\n",(0,t.jsx)(n.h2,{id:"performance-considerations",children:"Performance Considerations"}),"\n",(0,t.jsx)(n.p,{children:"The Aircall API currently uses v1. The connector defaults to using v1."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);