"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},i="MotherDuck",o={unversionedId:"reference/Connectors/materialization-connectors/motherduck",id:"reference/Connectors/materialization-connectors/motherduck",title:"MotherDuck",description:"This connector materializes Flow collections into tables in a MotherDuck database.",source:"@site/docs/reference/Connectors/materialization-connectors/motherduck.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/motherduck",permalink:"/pr-preview/pr-1331/reference/Connectors/materialization-connectors/motherduck",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/motherduck.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Webhook",permalink:"/pr-preview/pr-1331/reference/Connectors/materialization-connectors/http-webhook"},next:{title:"MySQL HeatWave",permalink:"/pr-preview/pr-1331/reference/Connectors/materialization-connectors/mysql-heatwave"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"motherduck"},"MotherDuck"),(0,r.kt)("p",null,"This connector materializes Flow collections into tables in a MotherDuck database."),(0,r.kt)("p",null,"The connector uses your AWS account to materialize to MotherDuck tables by way of files in an S3\nbucket. The files in the bucket as as a temporary staging area for data storage and retrieval."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-motherduck:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-motherduck:dev")),"\nprovides the latest connector image. You can also follow the link in your browser to see past image\nversions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://motherduck.com/"},"MotherDuck")," account and ",(0,r.kt)("a",{parentName:"li",href:"https://motherduck.com/docs/authenticating-to-motherduck#fetching-the-service-token"},"Service\nToken"),"."),(0,r.kt)("li",{parentName:"ul"},"An S3 bucket for staging temporary files. See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"this\nguide")," for\ninstructions on setting up a new S3 bucket."),(0,r.kt)("li",{parentName:"ul"},"An AWS root or IAM user with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"read and write\naccess"),"\nto the S3 bucket. For this user, you'll need the ",(0,r.kt)("strong",{parentName:"li"},"access key")," and ",(0,r.kt)("strong",{parentName:"li"},"secret access key"),". See the\n",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/"},"AWS blog")," for help finding\nthese credentials.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Use the below properties to configure MotherDuck materialization, which will direct one or\nmore of your Flow collections to your desired tables in the database."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/token"))),(0,r.kt)("td",{parentName:"tr",align:null},"MotherDuck Service Token"),(0,r.kt)("td",{parentName:"tr",align:null},"Service token for authenticating with MotherDuck."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"The database to materialize to."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/schema"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Database schema for bound collection tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/bucket"))),(0,r.kt)("td",{parentName:"tr",align:null},"S3 Staging Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the S3 bucket to use for staging data loads."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsAccessKeyId"))),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Access Key ID for reading and writing data to the S3 staging bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsSecretAccessKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"Secret Access Key"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Secret Access Key for reading and writing data to the S3 staging bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/bucketPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket Path"),(0,r.kt)("td",{parentName:"tr",align:null},"A prefix that will be used to store objects in S3."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database table."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/delta_updates")),(0,r.kt)("td",{parentName:"tr",align:null},"Delta Update"),(0,r.kt)("td",{parentName:"tr",align:null},"Should updates to this table be done via delta updates. Currently this connector only supports delta updates."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/schema")),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative schema for this table (optional)."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/materialize-motherduck:dev"\n        config:\n          token: <motherduck_service_token>\n          database: my_db\n          schema: main\n          bucket: my_bucket\n          awsAccessKeyId: <access_key_id>\n          awsSecretAccessKey: <secret_access_key>\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n')),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector currently supports only ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1331/concepts/materialization#delta-updates"},"delta\nupdates"),". Future support for standard updates is\nplanned."))}d.isMDXComponent=!0}}]);