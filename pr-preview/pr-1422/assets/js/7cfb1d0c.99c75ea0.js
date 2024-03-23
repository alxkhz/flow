"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4753],{18933:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(74848),t=n(28453);const o={},s="Google Drive",c={id:"reference/Connectors/capture-connectors/google-drive",title:"Google Drive",description:"This connector lets you capture data from your Google Drive account into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/google-drive.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-drive",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/google-drive",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-drive.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gladly",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/gladly"},next:{title:"Recharge",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/recharge"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:3},{value:"Sample",id:"sample",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"google-drive",children:"Google Drive"}),"\n",(0,i.jsx)(r.p,{children:"This connector lets you capture data from your Google Drive account into Flow collections."}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsxs)(r.a,{href:"https://ghcr.io/estuary/source-google-drive:dev",children:["ghcr.io/estuary/source-google-drive",":dev"]})," provides the latest connector image. For access to previous image versions, follow the link in your browser."]}),"\n",(0,i.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(r.p,{children:"To use this connector, make sure you have the following:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"An active Google Drive account with access credentials."}),"\n",(0,i.jsx)(r.li,{children:"Properly configured permissions for your Google Drive resources."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Note:"})," This connector is designed specifically for .csv files located in a specified Google Drive folder."]}),"\n",(0,i.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(r.p,{children:["You can set up the Google Drive source connector either through the Flow web app or by editing the Flow specification file directly. For more information on setting up this connector, refer to our guide on using ",(0,i.jsx)(r.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"The values and specification sample below provide configuration details specific to the Google Drive connector."}),"\n",(0,i.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Title"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required/Default"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"/credentials"})})}),(0,i.jsx)(r.td,{children:"Credentials"}),(0,i.jsx)(r.td,{children:"JSON file containing authentication credentials for Google Drive."}),(0,i.jsx)(r.td,{children:"file"}),(0,i.jsx)(r.td,{children:"Required"})]})})]}),"\n",(0,i.jsx)(r.h3,{id:"bindings",children:"Bindings"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Title"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Required/Default"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"/file_id"})})}),(0,i.jsx)(r.td,{children:"File ID"}),(0,i.jsx)(r.td,{children:"Unique identifier of the Google Drive file."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:(0,i.jsx)(r.code,{children:"/path"})})}),(0,i.jsx)(r.td,{children:"Path"}),(0,i.jsx)(r.td,{children:"Path to the file or directory in Google Drive."}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-drive:dev\n        config:\n          credentials: /path/to/your/credentials.json\n    bindings:\n      - resource:\n          file_id: "your_google_drive_file_id"\n          path: "/path/in/google/drive"\n        target: ${PREFIX}/target_name\n'})})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var i=n(96540);const t={},o=i.createContext(t);function s(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);