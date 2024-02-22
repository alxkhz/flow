"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9017],{50822:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=n(74848),s=n(28453);const a={sidebar_position:1},o="Authorizing users and authenticating with Flow",r={id:"reference/authentication",title:"Authorizing users and authenticating with Flow",description:"Read, write, and admin capabilities over Flow catalogs and the collections that comprise them",source:"@site/docs/reference/authentication.md",sourceDirName:"reference",slug:"/reference/authentication",permalink:"/pr-preview/pr-1392/reference/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/authentication.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Materialization Protocol",permalink:"/pr-preview/pr-1392/reference/Connectors/materialization-protocol"},next:{title:"Editing considerations",permalink:"/pr-preview/pr-1392/reference/editing"}},c={},l=[{value:"Subjects, objects, and inherited capabilities",id:"subjects-objects-and-inherited-capabilities",level:2},{value:"Default authorization settings",id:"default-authorization-settings",level:2},{value:"Authenticating Flow in the web app",id:"authenticating-flow-in-the-web-app",level:2},{value:"Authenticating Flow using the CLI",id:"authenticating-flow-using-the-cli",level:2},{value:"Provisioning capabilities",id:"provisioning-capabilities",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"authorizing-users-and-authenticating-with-flow",children:"Authorizing users and authenticating with Flow"}),"\n",(0,t.jsxs)(i.p,{children:["Read, write, and admin capabilities over Flow catalogs and the ",(0,t.jsx)(i.a,{href:"/pr-preview/pr-1392/concepts/collections",children:"collections"})," that comprise them\nare granted to Flow users through ",(0,t.jsx)(i.strong,{children:"capabilities"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Capabilities are granted in terms of ",(0,t.jsx)(i.strong,{children:"prefixes"})," within the Flow ",(0,t.jsx)(i.a,{href:"/pr-preview/pr-1392/concepts/#namespace",children:"namespace"}),".\nBy default, each organization has a unique top-level prefix.\nFor example, if you worked for Acme Co, your assigned organization prefix would be ",(0,t.jsx)(i.code,{children:"acmeCo/"}),".\nYou may further divide your namespace however you'd like; for example ",(0,t.jsx)(i.code,{children:"acmeCo/anvils"})," and ",(0,t.jsx)(i.code,{children:"acmeCo/roadrunners"}),".\nWhen you name a collection, you can customize the prefix, and capabilities can be configured at any prefix level.\nThis allows you to flexibly control access to your Flow data."]}),"\n",(0,t.jsx)(i.p,{children:"The available capabilities are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"read"})}),": Allows the subject to read data from collections of the given prefix."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"write"})}),": Allows the subject to read and write data from collections of the given prefix."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"admin"})}),": Allows the subject to read and write data from collections of the given prefix,\nand to manage storage mappings, catalog specifications, and capability grants within the prefix.\nThe admin capability also inherits capabilities granted to the prefix, as discussed below."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"subjects-objects-and-inherited-capabilities",children:"Subjects, objects, and inherited capabilities"}),"\n",(0,t.jsxs)(i.p,{children:["The entity to which you grant a capability is called the ",(0,t.jsx)(i.strong,{children:"subject"}),", and the entity over which access is granted is called the ",(0,t.jsx)(i.strong,{children:"object"}),".\nThe subject can be either a user or a prefix, and the object is always a prefix. This allows subjects to inherit nested capabilities,\nso long as they are granted ",(0,t.jsx)(i.code,{children:"admin"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["For example, user X of Acme Co has admin access to the ",(0,t.jsx)(i.code,{children:"acmeCo/"})," prefix, and user Y has write access.\nA third party has granted ",(0,t.jsx)(i.code,{children:"acmeCo/"})," read access to shared data at ",(0,t.jsx)(i.code,{children:"outside-org/acmeCo-share/"}),".\nUser X automatically inherits read access to ",(0,t.jsx)(i.code,{children:"outside-org/acmeCo-share/"}),", but user Y does not."]}),"\n",(0,t.jsx)(i.h2,{id:"default-authorization-settings",children:"Default authorization settings"}),"\n",(0,t.jsxs)(i.p,{children:["When you first sign up to use Flow, your organization is provisioned a prefix, and your username is granted admin access to the prefix.\nYour prefix is granted write access to itself and read access to its logs, which are stored under a unique sub-prefix of the global ",(0,t.jsx)(i.code,{children:"ops/"})," prefix."]}),"\n",(0,t.jsxs)(i.p,{children:["Using the same example, say user X signs up on behalf of their company, AcmeCo. User X is automatically granted ",(0,t.jsx)(i.code,{children:"admin"})," access to the ",(0,t.jsx)(i.code,{children:"acmeCo/"})," prefix.\n",(0,t.jsx)(i.code,{children:"acmeCo/"}),", in turn, has write access to ",(0,t.jsx)(i.code,{children:"acmeCo/"})," and read access to ",(0,t.jsx)(i.code,{children:"ops/acmeCo/"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["As more users and prefixes are added, admins can ",(0,t.jsx)(i.a,{href:"#provisioning-capabilities",children:"provision capabilities"})," using the CLI."]}),"\n",(0,t.jsx)(i.h2,{id:"authenticating-flow-in-the-web-app",children:"Authenticating Flow in the web app"}),"\n",(0,t.jsxs)(i.p,{children:["You must sign in to begin a new session using the ",(0,t.jsx)(i.a,{href:"https://dashboard.estuary.dev",children:"Flow web application"}),".\nFor the duration of the session, you'll be able to perform actions depending on the capabilities granted to the user profile."]}),"\n",(0,t.jsxs)(i.p,{children:["You can view the capabilities currently provisioned in your organization on the ",(0,t.jsx)(i.strong,{children:"Admin"})," tab."]}),"\n",(0,t.jsx)(i.h2,{id:"authenticating-flow-using-the-cli",children:"Authenticating Flow using the CLI"}),"\n",(0,t.jsxs)(i.p,{children:["You can use the ",(0,t.jsx)(i.a,{href:"/pr-preview/pr-1392/concepts/flowctl",children:"flowctl"})," CLI to work with your organization's catalogs and drafts in your local development environment."]}),"\n",(0,t.jsx)(i.p,{children:"To authenticate a local development session using the CLI, do the following:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Ensure that you have an Estuary account and have signed into the Flow web app before."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"In the terminal of your local development environment, run:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-console",children:"flowctl auth login\n"})}),"\n",(0,t.jsx)(i.p,{children:"In a browser window, the web app opens to the CLI-API tab."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Copy the access token."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Return to the terminal, paste the access token, and press Enter."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The token will expire after a predetermined duration. Repeat this process to re-authenticate."}),"\n",(0,t.jsx)(i.h2,{id:"provisioning-capabilities",children:"Provisioning capabilities"}),"\n",(0,t.jsxs)(i.p,{children:["As an admin, you can provision capabilities using the CLI with the subcommands of ",(0,t.jsx)(i.code,{children:"flowctl auth roles"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"For example:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"flowctl auth roles list"})," returns a list of all currently provisioned capabilities"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"flowctl auth roles grant --object-role=acmeCo/ --capability=admin --subject-user-id=userZ"})," grants user Z admin access to ",(0,t.jsx)(i.code,{children:"acmeCo"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"flowctl auth roles revoke --object-role=outside-org/acmeCo-share/ --capability=read --subject-role=acmeCo/"})," would be used by an admin of ",(0,t.jsx)(i.code,{children:"outside-org"}),"\nto revoke ",(0,t.jsx)(i.code,{children:"acmeCo/"}),"'s read access to ",(0,t.jsx)(i.code,{children:"outside-org/acmeCo-share/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["You can find detailed help for all subcommands using the ",(0,t.jsx)(i.code,{children:"--help"})," or ",(0,t.jsx)(i.code,{children:"-h"})," flag."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);