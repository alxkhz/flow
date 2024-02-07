"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="Google Sheets",l={unversionedId:"reference/Connectors/materialization-connectors/Google-sheets",id:"reference/Connectors/materialization-connectors/Google-sheets",title:"Google Sheets",description:"This connector materializes Flow collections into sheets in a Google Sheets spreadsheet.",source:"@site/docs/reference/Connectors/materialization-connectors/Google-sheets.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Google-sheets",permalink:"/pr-preview/pr-1369/reference/Connectors/materialization-connectors/Google-sheets",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Google-sheets.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Pub/Sub",permalink:"/pr-preview/pr-1369/reference/Connectors/materialization-connectors/google-pubsub"},next:{title:"MongoDB",permalink:"/pr-preview/pr-1369/reference/Connectors/materialization-connectors/mongodb"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"OAuth authentication using the Flow web app",id:"oauth-authentication-using-the-flow-web-app",level:3},{value:"Manual authentication",id:"manual-authentication",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-sheets"},"Google Sheets"),(0,r.kt)("p",null,"This connector materializes Flow collections into sheets in a Google Sheets spreadsheet."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-google-sheets:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-google-sheets:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"At least one Flow collection."),(0,r.kt)("p",{parentName:"li"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1369/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"For performance reasons, this connector is limited to 1 million cells per materialized sheet.\nIf a bound collection has more than 1 million unique keys, the materialization will fail."),(0,r.kt)("p",{parentName:"admonition"},"If you plan to materialize a collection with an unbounded number of keys,\nyou should first use a ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1369/guides/flowctl/create-derivation"},"derivation")," to summarize it\ninto a collection with a bounded set of keys.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The URL of a Google spreadsheet that ",(0,r.kt)("em",{parentName:"li"},"does not")," contain the output of a prior Flow materialization.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Materializing data to a spreadsheet that already contains the output of another Flow materialization can result in an error.\nUse a new spreadsheet for each materialization, or completely clear the output of prior materializations from the spreadsheet before you continue.")),(0,r.kt)("p",null,"There are two ways to authenticate with Google when using this connector:\nsigning in with Google through OAuth in the web app, and configuring manually with a Google service account key.\nOAuth is simpler, and is recommended when using the web app.\nOnly manual configuration is supported using the CLI."),(0,r.kt)("p",null,"Additional prerequisites depend on the authentication method you choose."),(0,r.kt)("h3",{id:"oauth-authentication-using-the-flow-web-app"},"OAuth authentication using the Flow web app"),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The username and password of a Google account with edit access to the destination spreadsheet.")),(0,r.kt)("h3",{id:"manual-authentication"},"Manual authentication"),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Google Sheets and Google Drive APIs enabled on your Google account.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Google service account with:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A JSON key generated."),(0,r.kt)("li",{parentName:"ul"},"Edit access to the destination spreadsheet.")))),(0,r.kt)("p",null,"Follow the steps below to meet these prerequisites:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleapi/answer/6158841?hl=en"},"Enable")," the Google Sheets and Google Drive APIs\nfor the Google ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/projects"},"project")," with which your spreadsheet is associated.\n(Unless you actively develop with Google Cloud, you'll likely just have one option).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount"},"service account and generate a JSON key"),".\nDuring setup, grant the account the ",(0,r.kt)("strong",{parentName:"p"},"Editor")," role on your project.\nYou'll copy the contents of the downloaded key file into the Service Account JSON parameter when you configure the connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Share your Google spreadsheet with the service account, granting edit access."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Google Sheets materialization."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The following properties reflect the manual authentication method. If you're working in the Flow web app, you can use ",(0,r.kt)("a",{parentName:"p",href:"#oauth-authentication-using-the-flow-web-app"},"OAuth"),", so some of these properties aren't required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials used to authenticate with Google."),(0,r.kt)("td",{parentName:"tr",align:null},"array, boolean, null, number, object, string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/auth_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication type"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Service")," for manual authentication, or use OAuth in the web app."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/credentials_json"))),(0,r.kt)("td",{parentName:"tr",align:null},"Service Account JSON"),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON key of the service account to use for authorization, when using the ",(0,r.kt)("inlineCode",{parentName:"td"},"Service")," authentication method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/spreadsheetURL"))),(0,r.kt)("td",{parentName:"tr",align:null},"Spreadsheet URL"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the spreadsheet to materialize into, which is shared with the service account."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("p",null,"Configure a separate binding for each collection you want to materialize to a sheet.\nNote that the connector will add an addition column to the beginning of each sheet;\nthis is to track the internal state of the data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/sheet"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sheet Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the spreadsheet sheet to materialize into"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample reflects the ",(0,r.kt)("a",{parentName:"p",href:"#manual-authentication"},"manual authentication")," method using the CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  ${PREFIX}/${mat_name}:\n      endpoint:\n        connector:\n          config:\n            credentials:\n              auth_type: Service\n              credentials_json: <secret>\n            spreadsheetURL: `https://docs.google.com/spreadsheets/d/<your_spreadsheet_ID>/edit\n          image: ghcr.io/estuary/materialize-google-sheets:dev\n    # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n      - resource:\n          sheet: my_sheet\n      source: ${PREFIX}/${source_collection}\n")))}h.isMDXComponent=!0}}]);