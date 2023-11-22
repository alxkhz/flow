"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="Amazon Redshift",i={unversionedId:"reference/Connectors/capture-connectors/amazon-redshift",id:"reference/Connectors/capture-connectors/amazon-redshift",title:"Amazon Redshift",description:"This connector captures data from your Amazon Redshift cluster into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-redshift.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-redshift",permalink:"/pr-preview/pr-1294/reference/Connectors/capture-connectors/amazon-redshift",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-redshift.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Cloud SQL for SQL Server",permalink:"/pr-preview/pr-1294/reference/Connectors/capture-connectors/google-cloud-sql-sqlserver"},next:{title:"BigQuery Batch Query Connector",permalink:"/pr-preview/pr-1294/reference/Connectors/capture-connectors/bigquery-batch"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amazon-redshift"},"Amazon Redshift"),(0,a.kt)("p",null,"This connector captures data from your Amazon Redshift cluster into Flow collections."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-redshift:dev"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-redshift:dev"))," provides the latest connector image. You can access past image versions by following the link in your browser."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To use this connector, you'll need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access credentials for connecting to your Amazon Redshift cluster."),(0,a.kt)("li",{parentName:"ul"},"Properly configured IAM roles for the necessary permissions.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You can configure the Redshift source connector either through the Flow web app or by directly editing the Flow specification file. For more information on using this connector, see our guide on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"connectors"),". The values and specification sample below provide configuration details that are specific to the Amazon Redshift source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/host"))),(0,a.kt)("td",{parentName:"tr",align:null},"Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Hostname or IP address of your Redshift cluster."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/port"))),(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Port number for the cluster."),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,a.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the database to capture data from."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,a.kt)("td",{parentName:"tr",align:null},"User"),(0,a.kt)("td",{parentName:"tr",align:null},"Database user with necessary permissions."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,a.kt)("td",{parentName:"tr",align:null},"Password"),(0,a.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/schemas"))),(0,a.kt)("td",{parentName:"tr",align:null},"Schemas"),(0,a.kt)("td",{parentName:"tr",align:null},"List of schemas to include."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/jdbc_params"))),(0,a.kt)("td",{parentName:"tr",align:null},"JDBC URL Params"),(0,a.kt)("td",{parentName:"tr",align:null},"Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,a.kt)("td",{parentName:"tr",align:null},"Table Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the table to capture."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/cursor_field"))),(0,a.kt)("td",{parentName:"tr",align:null},"User-defined Cursor"),(0,a.kt)("td",{parentName:"tr",align:null},"Field for incremental syncs. Uses ascending values to ensure queries are sequential."),(0,a.kt)("td",{parentName:"tr",align:null},"string or integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-redshift:dev\n        config:\n          host: "example-redshift-cluster.us-east-2.redshift.amazonaws.com"\n          port: 5439\n          database: "sample_db"\n          user: "sample_user"\n          password: "sample_password"\n          schemas: "public"\n          jdbc_params: "key1=value1&key2=value2&key3=value3"\n    bindings:\n      - resource:\n          table: users\n          cursor_field: cursor\n        target: ${PREFIX}/users\n')))}d.isMDXComponent=!0}}]);