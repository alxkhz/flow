"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Pinterest",l={unversionedId:"reference/Connectors/capture-connectors/pinterest",id:"reference/Connectors/capture-connectors/pinterest",title:"Pinterest",description:"This connector captures data from Pinterest into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/pinterest.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/pinterest",permalink:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/pinterest",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/pinterest.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"OracleDB",permalink:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/oracle-db"},next:{title:"Postgres (Heroku)",permalink:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/postgres-heroku"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance Considerations",id:"performance-considerations",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pinterest"},"Pinterest"),(0,a.kt)("p",null,"This connector captures data from Pinterest into Flow collections."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-pinterest:dev provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To set up the Pinterest source connector, you'll need the following prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pinterest App ID and secret key"),(0,a.kt)("li",{parentName:"ul"},"Refresh Token")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Follow the steps below to set up the Pinterest source connector."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log into your Estuary Flow account."),(0,a.kt)("li",{parentName:"ol"},'Navigate to the "Captures" section'),(0,a.kt)("li",{parentName:"ol"},'For the "Start Date," provide the date in YYYY-MM-DD format. Data added on and after this date will be replicated.'),(0,a.kt)("li",{parentName:"ol"},'Next, go to "Authorization Method"'),(0,a.kt)("li",{parentName:"ol"},'Authenticate your Pinterest account using OAuth2.0 or an Access Token. The OAuth2.0 authorization method is selected by default. For "Client ID" and "Client Secret," enter your Pinterest App ID and secret key. For the "Refresh Token," enter your Pinterest Refresh Token.\nClick "Set up source."')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Pinterest source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,a.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,a.kt)("td",{parentName:"tr",align:null},"A date in the format YYYY-MM-DD. If you have not set a date, it would be defaulted to latest allowed date by api (89 days from today)."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource of your Pinterest project from which collections are captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "required": ["start_date", "credentials"],\n  "properties": {\n    "start_date": {\n      "pattern_descriptor": null\n    },\n    "credentials": {\n      "discriminator": {\n        "propertyName": "auth_method"\n      },\n      "oneOf": [\n        {\n          "title": "OAuth2.0",\n          "type": "object",\n          "x-oauth2-provider": "pinterest",\n          "properties": {\n            "auth_method": {\n              "const": "oauth2.0",\n              "order": 0,\n              "type": "string",\n              "default": "oauth2.0"\n            },\n            "client_id": {\n              "airbyte_secret": true,\n              "description": "The Client ID of your OAuth application",\n              "title": "Client ID",\n              "type": "string"\n            },\n            "client_secret": {\n              "airbyte_secret": true,\n              "description": "The Client Secret of your OAuth application.",\n              "title": "Client Secret",\n              "type": "string"\n            },\n            "refresh_token": {\n              "airbyte_secret": true,\n              "description": "Refresh Token to obtain new Access Token, when it\'s expired.",\n              "title": "Refresh Token",\n              "type": "string"\n            }\n          },\n          "required": [\n            "auth_method",\n            "refresh_token"\n          ]\n        },\n        {\n          "title": "Access Token",\n          "type": "object",\n          "properties": {\n            "access_token": {\n              "airbyte_secret": true,\n              "description": "The Access Token to make authenticated requests.",\n              "title": "Access Token",\n              "type": "string"\n            },\n            "auth_method": {\n              "const": "access_token",\n              "order": 0,\n              "type": "string",\n              "default": "access_token"\n            }\n          },\n          "required": [\n            "auth_method",\n            "access_token"\n          ]\n        }\n      ]\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("p",null,"The Pinterest source connector supports the following streams:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Account analytics (Incremental)"),(0,a.kt)("li",{parentName:"ul"},"Boards (Full table)"),(0,a.kt)("li",{parentName:"ul"},"Board sections (Full table)"),(0,a.kt)("li",{parentName:"ul"},"Pins on board section (Full table)"),(0,a.kt)("li",{parentName:"ul"},"Pins on board (Full table)"),(0,a.kt)("li",{parentName:"ul"},"Ad accounts (Full table)"),(0,a.kt)("li",{parentName:"ul"},"Ad account analytics (Incremental)"),(0,a.kt)("li",{parentName:"ul"},"Campaigns (Incremental)"),(0,a.kt)("li",{parentName:"ul"},"Campaign analytics (Incremental)"),(0,a.kt)("li",{parentName:"ul"},"Ad groups (Incremental)"),(0,a.kt)("li",{parentName:"ul"},"Ad group analytics (Incremental)"),(0,a.kt)("li",{parentName:"ul"},"Ads (Incremental)"),(0,a.kt)("li",{parentName:"ul"},"Ad analytics (Incremental)")),(0,a.kt)("h2",{id:"performance-considerations"},"Performance Considerations"),(0,a.kt)("p",null,"The Pinterest API imposes certain rate limits for the connector. Please take note of the following limits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Analytics streams: 300 calls per day per user"),(0,a.kt)("li",{parentName:"ul"},"Ad accounts streams (Campaigns, Ad groups, Ads): 1000 calls per minute per user per app"),(0,a.kt)("li",{parentName:"ul"},"Boards streams: 10 calls per second per user per app")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For any additional information or troubleshooting, refer to the official Pinterest API documentation.")))}d.isMDXComponent=!0}}]);