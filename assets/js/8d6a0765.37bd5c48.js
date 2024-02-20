"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6816],{17710:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(74848),t=s(28453);const i={sidebar_position:5},c="NetSuite",o={id:"reference/Connectors/capture-connectors/netsuite",title:"NetSuite",description:"This connector captures data from Oracle NetSuite into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/netsuite.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/netsuite",permalink:"/reference/Connectors/capture-connectors/netsuite",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/netsuite.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"NetSuite",permalink:"/reference/Connectors/capture-connectors/netsuite-odbc"},next:{title:"Notion",permalink:"/reference/Connectors/capture-connectors/notion"}},l={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"netsuite",children:"NetSuite"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from Oracle NetSuite into Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-netsuite:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-netsuite:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,r.jsxs)(n.p,{children:["You can find their documentation ",(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/netsuite/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,r.jsxs)(n.p,{children:["Flow captures collections from any NetSuite object to which you grant access during ",(0,r.jsx)(n.a,{href:"#setup",children:"setup"}),", including ",(0,r.jsx)(n.code,{children:"Transactions"}),", ",(0,r.jsx)(n.code,{children:"Reports"}),", ",(0,r.jsx)(n.code,{children:"Lists"}),", and ",(0,r.jsx)(n.code,{children:"Setup"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Oracle NetSuite ",(0,r.jsx)(n.a,{href:"https://system.netsuite.com/pages/customerlogin.jsp?country=US",children:"account"})]}),"\n",(0,r.jsx)(n.li,{children:"Allowed access to all Account permissions options"}),"\n",(0,r.jsx)(n.li,{children:"A new integration with token-based authentication"}),"\n",(0,r.jsxs)(n.li,{children:["A custom role with access to objects you want to capture. See ",(0,r.jsx)(n.a,{href:"#setup",children:"setup"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"A new user assigned to the custom role"}),"\n",(0,r.jsx)(n.li,{children:"Access token generated for the custom role"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Create a NetSuite account"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an account on the ",(0,r.jsx)(n.a,{href:"https://www.netsuite.com/portal/home.shtml",children:"Oracle NetSuite"})," portal."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Confirm your email address."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Set up your NetSuite account"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Find your ",(0,r.jsx)(n.em,{children:"Realm"}),", or Account ID. You'll use this to connect with Flow."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In your NetSuite portal, go to ",(0,r.jsx)(n.strong,{children:"Setup"})," > ",(0,r.jsx)(n.strong,{children:"Company"})," > ",(0,r.jsx)(n.strong,{children:"Company Information"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Copy your Account ID."}),"\n",(0,r.jsxs)(n.p,{children:["If you have a production account, it will look like ",(0,r.jsx)(n.code,{children:"2345678"}),". If you're using a sandbox, it'll look like ",(0,r.jsx)(n.code,{children:"2345678_SB2"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable the required features."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"Setup"})," > ",(0,r.jsx)(n.strong,{children:"Company"})," > ",(0,r.jsx)(n.strong,{children:"Enable Features"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"SuiteCloud"})," tab."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"SuiteScript"})," section, check the checkboxes labeled ",(0,r.jsx)(n.strong,{children:"CLIENT SUITESCRIPT"})," and ",(0,r.jsx)(n.strong,{children:"SERVER SUITESCRIPT"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Manage Authentication"})," section, check the checkbox labeled ",(0,r.jsx)(n.strong,{children:"TOKEN-BASED AUTHENTICATION"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"SuiteTalk (Web Services)"})," section, check the checkbox labeled ",(0,r.jsx)(n.strong,{children:"REST WEB SERVICES"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a NetSuite ",(0,r.jsx)(n.em,{children:"integration"})," to obtain a Consumer Key and Consumer Secret."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"Setup"})," > ",(0,r.jsx)(n.strong,{children:"Integration"})," > ",(0,r.jsx)(n.strong,{children:"Manage Integrations"})," > ",(0,r.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Give the integration a name, for example, ",(0,r.jsx)(n.code,{children:"estuary-rest-integration"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Make sure the ",(0,r.jsx)(n.strong,{children:"State"})," option is enabled."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Authentication"})," section, check the ",(0,r.jsx)(n.strong,{children:"Token-Based Authentication"})," checkbox."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Your Consumer Key and Consumer Secret will be shown once. Copy them to a safe place."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set up a role for use with Flow."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Setup"})," > ",(0,r.jsx)(n.strong,{children:"Users/Roles"})," > ",(0,r.jsx)(n.strong,{children:"Manage Roles"})," > ",(0,r.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Give the role a name, for example, ",(0,r.jsx)(n.code,{children:"estuary-integration-role"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Scroll to the ",(0,r.jsx)(n.strong,{children:"Permissions"})," section."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(IMPORTANT) Click ",(0,r.jsx)(n.strong,{children:"Transactions"})," and add all the dropdown entities with either ",(0,r.jsx)(n.strong,{children:"full"})," or ",(0,r.jsx)(n.strong,{children:"view"})," access level."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(IMPORTANT) Click ",(0,r.jsx)(n.strong,{children:"Reports"})," and add all the dropdown entities with either ",(0,r.jsx)(n.strong,{children:"full"})," or ",(0,r.jsx)(n.strong,{children:"view"})," access level."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(IMPORTANT) Click ",(0,r.jsx)(n.strong,{children:"Lists"})," and add all the dropdown entities with either ",(0,r.jsx)(n.strong,{children:"full"})," or ",(0,r.jsx)(n.strong,{children:"view"})," access level."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(IMPORTANT) Click ",(0,r.jsx)(n.strong,{children:"Setup"})," an add all the dropdown entities with either ",(0,r.jsx)(n.strong,{children:"full"})," or ",(0,r.jsx)(n.strong,{children:"view"})," access level."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To allow your custom role to reflect future changes, be sure to edit these parameters again when you rename or customize any NetSuite object."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set up user for use with Flow."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Setup"})," > ",(0,r.jsx)(n.strong,{children:"Users/Roles"})," > ",(0,r.jsx)(n.strong,{children:"Manage Users"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Find the user you want to give access to use with Flow. In the ",(0,r.jsx)(n.strong,{children:"Name"})," column, click the user's name. Then, click the ",(0,r.jsx)(n.strong,{children:"Edit"})," button."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Find the ",(0,r.jsx)(n.strong,{children:"Access"})," tab."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["From the dropdown list, select role you created previously; for example, ",(0,r.jsx)(n.code,{children:"estuary-integration-role"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Generate an access token."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Setup"})," > ",(0,r.jsx)(n.strong,{children:"Users/Roles"})," > ",(0,r.jsx)(n.strong,{children:"Access Tokens"})," > ",(0,r.jsx)(n.strong,{children:"New"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Select an ",(0,r.jsx)(n.strong,{children:"Application Name"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.strong,{children:"User"}),", select the user you assigned the role previously."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.strong,{children:"Role"}),", select the role you assigned to the user previously."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Under ",(0,r.jsx)(n.strong,{children:"Token Name"}),",  give a descriptive name to the token you are creating, for example ",(0,r.jsx)(n.code,{children:"estuary-rest-integration-token"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save your changes."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Your Token ID and Token Secret will be shown once. Copy them to a safe place."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You now have a properly configured account with the correct permissions and all the information you need to connect with Flow:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Realm (Account ID)"}),"\n",(0,r.jsx)(n.li,{children:"Consumer Key"}),"\n",(0,r.jsx)(n.li,{children:"Consumer Secret"}),"\n",(0,r.jsx)(n.li,{children:"Token ID"}),"\n",(0,r.jsx)(n.li,{children:"Token Secret"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the NetSuite source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/realm"})}),(0,r.jsx)(n.td,{children:"Realm"}),(0,r.jsxs)(n.td,{children:["Netsuite realm e.g. 2344535, as for ",(0,r.jsx)(n.code,{children:"production"})," or 2344535_SB1, as for the ",(0,r.jsx)(n.code,{children:"sandbox"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/consumer_key"})}),(0,r.jsx)(n.td,{children:"Consumer Key"}),(0,r.jsx)(n.td,{children:"Consumer key associated with your integration."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/consumer_secret"})}),(0,r.jsx)(n.td,{children:"Consumer Secret"}),(0,r.jsx)(n.td,{children:"Consumer secret associated with your integration."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/token_key"})}),(0,r.jsx)(n.td,{children:"Token Key"}),(0,r.jsx)(n.td,{children:"Access token key"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/token_secret"})}),(0,r.jsx)(n.td,{children:"Token Secret"}),(0,r.jsx)(n.td,{children:"Access token secret"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Resource of your NetSuite project from which collections are captured."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync Mode"}),(0,r.jsx)(n.td,{children:"Connection method."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-netsuite:dev\n        config:\n          realm: <your account id>\n          consumer_key: <key>\n          consumer_secret: <secret>\n          token_key: <key>\n          token_secret: <secret>\n    bindings:\n      - resource:\n          stream: items\n          syncMode: full_refresh\n        target: ${PREFIX}/items\n      {...}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);