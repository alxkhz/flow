"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[368],{42400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(74848),i=t(28453);const s={},c="Slack",l={id:"reference/Connectors/materialization-connectors/slack",title:"Slack",description:"This connector lets you materialize data from Estuary Flow directly into Slack channels.",source:"@site/docs/reference/Connectors/materialization-connectors/slack.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/slack",permalink:"/pr-preview/pr-1417/reference/Connectors/materialization-connectors/slack",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/slack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pinecone",permalink:"/pr-preview/pr-1417/reference/Connectors/materialization-connectors/pinecone"},next:{title:"Starburst",permalink:"/pr-preview/pr-1417/reference/Connectors/materialization-connectors/starburst"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"slack",children:"Slack"}),"\n",(0,r.jsx)(n.p,{children:"This connector lets you materialize data from Estuary Flow directly into Slack channels."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ghcr.io/estuary/materialize-slack:dev"})," provides the latest connector image. For earlier versions, visit the ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-slack",children:"GitHub Container Registry"})," page."]}),"\n",(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To use this connector, ensure you have the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"An active Slack workspace with appropriate permissions."}),"\n",(0,r.jsx)(n.li,{children:"Slack credentials and access token for authentication."}),"\n",(0,r.jsx)(n.li,{children:"At least one Flow collection."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The Slack connector is available for use in the Flow web application. To learn more about connectors and how to set them up, read our guide on ",(0,r.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"using connectors"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/access_token"}),(0,r.jsx)(n.td,{children:"Access Token"}),(0,r.jsx)(n.td,{children:"The Slack API access token for authentication."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/client_id"}),(0,r.jsx)(n.td,{children:"Client ID"}),(0,r.jsx)(n.td,{children:"Client ID for authentication."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/client_secret"}),(0,r.jsx)(n.td,{children:"Client Secret"}),(0,r.jsx)(n.td,{children:"The Slack API client secret."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/source"}),(0,r.jsx)(n.td,{children:"Source"}),(0,r.jsx)(n.td,{children:"Source data in Flow to be sent to Slack."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/channel"}),(0,r.jsx)(n.td,{children:"Channel"}),(0,r.jsx)(n.td,{children:"The ID of the Slack channel to send messages to."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/display_name"}),(0,r.jsx)(n.td,{children:"Display Name"}),(0,r.jsx)(n.td,{children:"The display name for the sender in Slack."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"/logo_emoji"}),(0,r.jsx)(n.td,{children:"Logo Emoji"}),(0,r.jsx)(n.td,{children:"The emoji to be used."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'materializations:\n  ${PREFIX}/${MATERIALIZATION_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-slack:dev\n        config:\n          credentials:\n            auth_type: OAuth\n            access_token: {secret}\n            client_id: {your_client_id}\n            client_secret: {secret}\n    bindings:\n      - source: ${PREFIX}/source_name\n        resource:\n          channel: "id: C05A95LJHSL"\n          sender_config:\n            display_name: Task Monitor\n            logo_emoji: ":eyes:"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);