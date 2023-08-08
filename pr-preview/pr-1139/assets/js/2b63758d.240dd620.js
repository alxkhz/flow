"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="BigQuery",l={unversionedId:"reference/Connectors/capture-connectors/bigquery",id:"reference/Connectors/capture-connectors/bigquery",title:"BigQuery",description:"This connector captures data from BigQuery into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/bigquery.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/bigquery",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/bigquery",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/bigquery.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Apache Kafka",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/apache-kafka"},next:{title:"Bing Ads",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/bing-ads"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Service Account",id:"service-account",level:3},{value:"Service Account Key",id:"service-account-key",level:3},{value:"Set up the BigQuery connector in Estuary Flow",id:"set-up-the-bigquery-connector-in-estuary-flow",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bigquery"},"BigQuery"),(0,o.kt)("p",null,"This connector captures data from BigQuery into Flow collections."),(0,o.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-bigquery:dev provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To set up the BigQuery connector, you need the following prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Google Cloud Project with BigQuery enabled"),(0,o.kt)("li",{parentName:"ul"},'A Google Cloud Service Account with the "BigQuery User" and "BigQuery Data Editor" roles in your GCP project'),(0,o.kt)("li",{parentName:"ul"},"A Service Account Key to authenticate into your Service Account\nSee the setup guide for more information about how to create the required resources.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Follow the steps below to set up the BigQuery connector."),(0,o.kt)("h3",{id:"service-account"},"Service Account"),(0,o.kt)("p",null,'To sync data from BigQuery, you need credentials for a Service Account with the "BigQuery User" and "BigQuery Data Editor" roles. These roles grant the necessary permissions to run BigQuery jobs, write to BigQuery Datasets, and read table metadata. It is recommended to create a dedicated Service Account to facilitate permission management and auditing. However, if you already have a Service Account with the correct permissions, you can use it.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Here's how to create a Service Account:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow Google Cloud Platform's guide for Creating a Service Account."),(0,o.kt)("li",{parentName:"ol"},"Note down the ID of the Service Account as you will need to reference it later when granting roles. Service Account IDs typically follow the format ",(0,o.kt)("inlineCode",{parentName:"li"},"<account-name>@<project-name>.iam.gserviceaccount.com"),"."),(0,o.kt)("li",{parentName:"ol"},'Add the Service Account as a Member in your Google Cloud Project with the "BigQuery User" role. Refer to the instructions for Granting Access in the Google documentation. The email address of the member you add should be the same as the Service Account ID you created earlier.')),(0,o.kt)("p",null,'By now, you should have a Service Account with the "BigQuery User" project-level permission.'),(0,o.kt)("h3",{id:"service-account-key"},"Service Account Key"),(0,o.kt)("p",null,"Service Account Keys are used to authenticate as Google Service Accounts. To be able to utilize the permissions granted to the Service Account in the previous step, you'll need to provide its Service Account Key."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Follow the steps below to create a key:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Refer to the Google documentation for Creating and Managing Service Account Keys."),(0,o.kt)("li",{parentName:"ol"},"Make sure to create the key in JSON format."),(0,o.kt)("li",{parentName:"ol"},"Once you've created the key, download it immediately, as Google will allow you to see its contents only at that moment.")),(0,o.kt)("h3",{id:"set-up-the-bigquery-connector-in-estuary-flow"},"Set up the BigQuery connector in Estuary Flow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into your Estuary Flow account."),(0,o.kt)("li",{parentName:"ol"},'In the left navigation bar, click on "Captures". In the top-left corner, click "Connector Search".'),(0,o.kt)("li",{parentName:"ol"},'Enter the name for the WooCommerce connector and select "BigQuery" from the dropdown.'),(0,o.kt)("li",{parentName:"ol"},"Enter a Primary Key and Cursor Field using the standard form editor.  Note that both should be the same and they currently have to be either strings or timestamps."),(0,o.kt)("li",{parentName:"ol"},"Enter the Project ID and Credentials JSON.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the BigQuery source connector."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/project_id")),(0,o.kt)("td",{parentName:"tr",align:null},"Project ID"),(0,o.kt)("td",{parentName:"tr",align:null},"The GCP project ID for the project containing the target BigQuery dataset"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/credentials_json")),(0,o.kt)("td",{parentName:"tr",align:null},"Credentials JSON"),(0,o.kt)("td",{parentName:"tr",align:null},"The contents of your Service Account Key JSON file."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h4",{id:"bindings"},"Bindings"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,o.kt)("td",{parentName:"tr",align:null},"Stream"),(0,o.kt)("td",{parentName:"tr",align:null},"Resource of your BigQuery project from which collections are captured."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,o.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,o.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "properties": {\n    "project_id": {\n      "order": 1\n    },\n    "credentials_json": {\n      "order": 2,\n      "description": "The contents of your Service Account Key JSON file. See https://go.estuary.dev/bigquery for more information on how to obtain this key.",\n      "multiline": true\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);