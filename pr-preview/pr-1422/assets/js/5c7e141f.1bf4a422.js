"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7229],{22:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=t(74848),s=t(28453);const o={sidebar_position:7},i="MongoDB",d={id:"reference/Connectors/materialization-connectors/mongodb",title:"MongoDB",description:"This connector materializes data from your Flow collections to your MongoDB collections.",source:"@site/docs/reference/Connectors/materialization-connectors/mongodb.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/mongodb",permalink:"/pr-preview/pr-1422/reference/Connectors/materialization-connectors/mongodb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/mongodb.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Google Sheets",permalink:"/pr-preview/pr-1422/reference/Connectors/materialization-connectors/Google-sheets"},next:{title:"MySQL",permalink:"/pr-preview/pr-1422/reference/Connectors/materialization-connectors/MySQL/"}},c={},l=[{value:"Data model",id:"data-model",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"SSH Tunneling",id:"ssh-tunneling",level:2},{value:"Delta updates",id:"delta-updates",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mongodb",children:"MongoDB"}),"\n",(0,r.jsx)(n.p,{children:"This connector materializes data from your Flow collections to your MongoDB collections."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-mongodb:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/materialize-mongodb:dev"})})," provides the latest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"data-model",children:"Data model"}),"\n",(0,r.jsxs)(n.p,{children:["MongoDB is a NoSQL database. Its ",(0,r.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/data-modeling-introduction/",children:"data\nmodel"}),"\nconsists of ",(0,r.jsx)(n.strong,{children:"documents"})," (lightweight records that contain mappings of fields\nand values) organized in ",(0,r.jsx)(n.strong,{children:"collections"}),". MongoDB documents have a mandatory\n",(0,r.jsx)(n.code,{children:"_id"})," field that is used as the key of the collection."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"You'll need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Credentials for connecting to your MongoDB instance and database."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Read and write access to your MongoDB database and desired collections. See ",(0,r.jsx)(n.a,{href:"https://www.mongodb.com/docs/manual/core/authorization/",children:"Role-Based Access\nControl"})," for more information."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If you are using MongoDB Atlas, or your MongoDB provider requires whitelisting\nof IPs, you need to whitelist Estuary's IP: ",(0,r.jsx)(n.code,{children:"34.121.207.128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the Flow specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Firestore source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/address"})})}),(0,r.jsx)(n.td,{children:"Address"}),(0,r.jsx)(n.td,{children:"Host and port of the database. Optionally can specify scheme for the URL such as mongodb+srv://host."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/database"})})}),(0,r.jsx)(n.td,{children:"Database"}),(0,r.jsx)(n.td,{children:"Name of the database to capture from."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/user"})})}),(0,r.jsx)(n.td,{children:"User"}),(0,r.jsx)(n.td,{children:"Database user to connect as."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/password"})})}),(0,r.jsx)(n.td,{children:"Password"}),(0,r.jsx)(n.td,{children:"Password for the specified database user."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/collection"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Collection name"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/delta_updates"})}),(0,r.jsx)(n.td,{children:"Delta Update"}),(0,r.jsx)(n.td,{children:"Should updates to this table be done via delta updates."}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'materializations:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-mongodb:dev\n        config:\n          address: "mongo:27017"\n          database: "test"\n          password: "flow"\n          user: "flow"\n    bindings:\n      - resource:\n          collection: users\n          database: test\n        source: ${PREFIX}/users\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ssh-tunneling",children:"SSH Tunneling"}),"\n",(0,r.jsx)(n.p,{children:"As an alternative to connecting to your MongoDB instance directly, you can allow secure connections via SSH tunneling. To do so:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Refer to the ",(0,r.jsx)(n.a,{href:"../../../../guides/connect-network/",children:"guide"})," to configure an SSH server on the cloud platform of your choice."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Configure your connector as described in the ",(0,r.jsx)(n.a,{href:"#configuration",children:"configuration"})," section above, with the addition of the ",(0,r.jsx)(n.code,{children:"networkTunnel"})," stanza to enable the SSH tunnel, if using. See ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,r.jsxs)(n.p,{children:["This connector supports both standard (merge) and ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/materialization#delta-updates",children:"delta updates"}),".\nThe default is to use standard updates."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);