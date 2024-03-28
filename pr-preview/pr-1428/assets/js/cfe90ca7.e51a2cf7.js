"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4169],{78277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=t(74848),o=t(28453);const s={sidebar_position:2},i="Google Sheets",c={id:"reference/Connectors/capture-connectors/google-sheets",title:"Google Sheets",description:"This connector captures data from a Google Sheets spreadsheet.",source:"@site/docs/reference/Connectors/capture-connectors/google-sheets.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-sheets",permalink:"/pr-preview/pr-1428/reference/Connectors/capture-connectors/google-sheets",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-sheets.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Search Console",permalink:"/pr-preview/pr-1428/reference/Connectors/capture-connectors/google-search-console"},next:{title:"Greenhouse",permalink:"/pr-preview/pr-1428/reference/Connectors/capture-connectors/greenhouse"}},l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Google in the Flow web app",id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually",id:"configuring-the-connector-specification-manually",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"google-sheets",children:"Google Sheets"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from a Google Sheets spreadsheet."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-google-sheets:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-google-sheets:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/google-sheets",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"There are two ways to authenticate with Google when capturing data from a Sheet: using OAuth2, and manually,by generating a service account key.\nTheir prerequisites differ."}),"\n",(0,r.jsx)(n.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe service account key method is the only supported method using the command line."}),"\n",(0,r.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Google in the Flow web app"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A link to a Google spreadsheet. Simply copy the link from your browser."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Your Google account username and password."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configuring-the-connector-specification-manually",children:"Configuring the connector specification manually"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A link to a Google spreadsheet. Simply copy the link from your browser."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Google Sheets and Google Drive APIs enabled on your Google account."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A Google service account with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A JSON key generated."}),"\n",(0,r.jsx)(n.li,{children:"Access to the source spreadsheet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Follow the steps below to meet these prerequisites:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://support.google.com/googleapi/answer/6158841?hl=en",children:"Enable"})," the Google Sheets and Google Drive APIs\nfor the Google ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/projects",children:"project"})," with which your spreadsheet is associated.\n(Unless you actively develop with Google Cloud, you'll likely just have one option)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount",children:"service account and generate a JSON key"}),".\nDuring setup, grant the account the ",(0,r.jsx)(n.strong,{children:"Viewer"})," role on your project.\nYou'll copy the contents of the downloaded key file into the Service Account Credentials parameter when you configure the connector."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Share your Google spreadsheet with the service account. You may either share the sheet so that anyone with the link can view it,\nor share explicitly with the service account's email address."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors.\nThe values and specification sample below provide configuration details specific to the Google Sheets source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsx)(n.p,{children:"The following properties reflect the Service Account Key authentication method."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/credentials"})})}),(0,r.jsx)(n.td,{children:"Credentials"}),(0,r.jsx)(n.td,{children:"Google API Credentials for connecting to Google Sheets and Google Drive APIs"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/credentials/auth_type"})})}),(0,r.jsx)(n.td,{children:"Authentication Type"}),(0,r.jsxs)(n.td,{children:["Authentication method. Set to ",(0,r.jsx)(n.code,{children:"Service"}),"."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"credentials/service_account_info"})})}),(0,r.jsx)(n.td,{children:"Service Account Credentials"}),(0,r.jsx)(n.td,{children:"Contents of the JSON key file generated during setup."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/spreadsheet_id"})})}),(0,r.jsx)(n.td,{children:"Spreadsheet Link"}),(0,r.jsx)(n.td,{children:"The link to your spreadsheet."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Sheet"}),(0,r.jsx)(n.td,{children:"Each sheet in your Google Sheets document."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync mode"}),(0,r.jsxs)(n.td,{children:["Connection method. Always set to ",(0,r.jsx)(n.code,{children:"full_refresh"}),"."]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-sheets:dev\n        config:\n            credentials:\n              auth_type: Service\n              service_account_info: <secret>\n            spreadsheet_id: https://docs.google.com/spreadsheets/...\n    bindings:\n      - resource:\n          stream: Sheet1\n           syncMode: full_refresh\n        target: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/captures#pull-captures",children:"Learn more about capture definitions."})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);