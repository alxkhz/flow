"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="HTTP Webhook",l={unversionedId:"reference/Connectors/materialization-connectors/http-webhook",id:"reference/Connectors/materialization-connectors/http-webhook",title:"HTTP Webhook",description:"This connector lets you materialize data from Estuary Flow directly to specified HTTP endpoints via webhooks.",source:"@site/docs/reference/Connectors/materialization-connectors/http-webhook.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/http-webhook",permalink:"/pr-preview/pr-1279/reference/Connectors/materialization-connectors/http-webhook",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/http-webhook.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for SQLServer",permalink:"/pr-preview/pr-1279/reference/Connectors/materialization-connectors/google-cloud-sql-sqlserver"},next:{title:"MySQL HeatWave",permalink:"/pr-preview/pr-1279/reference/Connectors/materialization-connectors/mysql-heatwave"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Bindings",id:"bindings",level:3},{value:"Sample",id:"sample",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-webhook"},"HTTP Webhook"),(0,a.kt)("p",null,"This connector lets you materialize data from Estuary Flow directly to specified HTTP endpoints via webhooks."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-webhook:v1"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-webhook:v1"))," provides the latest connector image. For earlier versions, please follow the link in your browser."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To use this materialization connector, you\u2019ll need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A server or service that can accept HTTP requests at the target endpoint."),(0,a.kt)("li",{parentName:"ul"},"At least one Flow collection.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The Webhooks connector is available for use in the Flow web application. To learn more about connectors and setting them up, visit our guide on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"using connectors"),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,a.kt)("td",{parentName:"tr",align:null},"Address"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the endpoint to send data to."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/method"))),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP Method"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP method to use (e.g., ",(0,a.kt)("inlineCode",{parentName:"td"},"POST")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"PUT"),")."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"default: ",(0,a.kt)("inlineCode",{parentName:"td"},"POST"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/headers"))),(0,a.kt)("td",{parentName:"tr",align:null},"Headers"),(0,a.kt)("td",{parentName:"tr",align:null},"Additional headers to include in the HTTP request."),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/relativePath"))),(0,a.kt)("td",{parentName:"tr",align:null},"Relative Path"),(0,a.kt)("td",{parentName:"tr",align:null},"The relative path on the server where data will be sent."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"bindings:\n- source: ProductionData/orders/orderDetails\n  resource:\n    relativePath: webhook/estuary\nendpoint:\n  connector:\n    image: ghcr.io/estuary/materialize-webhook:v1\n    config:\n      address: http://192.168.1.100:3000/\n      method: POST\n      headers:\n        Content-Type: application/json\n        Authorization: Bearer <your_token>\n")))}d.isMDXComponent=!0}}]);