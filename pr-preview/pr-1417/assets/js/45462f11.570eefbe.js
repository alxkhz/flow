"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3214],{81391:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=r(74848),t=r(28453);const i={},c="Slack",o={id:"reference/Connectors/capture-connectors/slack",title:"Slack",description:"This connector captures data from Slack into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/slack.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/slack",permalink:"/pr-preview/pr-1417/reference/Connectors/capture-connectors/slack",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/slack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SFTP",permalink:"/pr-preview/pr-1417/reference/Connectors/capture-connectors/sftp"},next:{title:"Snapchat Marketing",permalink:"/pr-preview/pr-1417/reference/Connectors/capture-connectors/snapchat"}},l={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"slack",children:"Slack"}),"\n",(0,s.jsx)(n.p,{children:"This connector captures data from Slack into Flow collections."}),"\n",(0,s.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(n.a,{href:"https://ghcr.io/estuary/source-slack:dev",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/source-slack:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,s.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/slack/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,s.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,s.jsx)(n.p,{children:"The following data resources are supported through the Slack APIs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.slack.com/methods/conversations.list",children:"Channels (Conversations)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.slack.com/methods/conversations.members",children:"Channel Members (Conversation Members)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.slack.com/methods/conversations.history",children:"Messages (Conversation History)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.slack.com/methods/users.list",children:"Users"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.slack.com/methods/conversations.replies",children:"Threads (Conversation Replies)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.slack.com/methods/usergroups.list",children:"User Groups"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.slack.com/methods/files.list",children:"Files"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://api.slack.com/methods/files.remote.list",children:"Remote Files"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Slack workspace URL or API token for authentication."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1417/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Slack source connector."]}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/join_channels"})}),(0,s.jsx)(n.td,{children:"Join Channels"}),(0,s.jsx)(n.td,{children:"Whether to join all channels"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/lookback_window"})}),(0,s.jsx)(n.td,{children:"Threads Lookback window (Days)"}),(0,s.jsx)(n.td,{children:"How far into the past to look for messages in threads."}),(0,s.jsx)(n.td,{children:"integer"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/start_date"})}),(0,s.jsx)(n.td,{children:"Start Date"}),(0,s.jsx)(n.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/stream"})})}),(0,s.jsx)(n.td,{children:"Stream"}),(0,s.jsx)(n.td,{children:"Resource of your Slack project from which collections are captured."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/syncMode"})})}),(0,s.jsx)(n.td,{children:"Sync Mode"}),(0,s.jsx)(n.td,{children:"Connection method."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-slack:dev\n        config:\n          credentials:\n            auth_type: OAuth\n            access_token: {secret}\n            client_id: {your_client_id}\n            client_secret: {secret}\n          join_channels: true\n          lookback_window: 7\n          start_date: 2017-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: channel_members\n          syncMode: full_refresh\n        target: ${PREFIX}/channel_members\n      {...}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(96540);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);