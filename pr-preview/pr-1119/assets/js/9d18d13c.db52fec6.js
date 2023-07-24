"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5997],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8756:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},i="Firebolt",o={unversionedId:"reference/Connectors/materialization-connectors/Firebolt",id:"reference/Connectors/materialization-connectors/Firebolt",title:"Firebolt",description:"This Flow connector materializes delta updates of Flow collections into Firebolt FACT or DIMENSION tables.",source:"@site/docs/reference/Connectors/materialization-connectors/Firebolt.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Firebolt",permalink:"/pr-preview/pr-1119/reference/Connectors/materialization-connectors/Firebolt",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Firebolt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/pr-preview/pr-1119/reference/Connectors/materialization-connectors/Elasticsearch"},next:{title:"Google BigQuery",permalink:"/pr-preview/pr-1119/reference/Connectors/materialization-connectors/BigQuery"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Reserved words",id:"reserved-words",level:2}],m={toc:d},s="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"firebolt"},"Firebolt"),(0,r.kt)("p",null,"This Flow connector materializes ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/concepts/materialization#delta-updates"},"delta updates")," of Flow collections into Firebolt ",(0,r.kt)("inlineCode",{parentName:"p"},"FACT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DIMENSION")," tables."),(0,r.kt)("p",null,"To interface between Flow and Firebolt, the connector uses Firebolt's method for ",(0,r.kt)("a",{parentName:"p",href:"https://docs.firebolt.io/loading-data/loading-data.html"},"loading data"),":\nFirst, it stores data as JSON documents in an S3 bucket.\nIt then references the S3 bucket to create a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.firebolt.io/loading-data/working-with-external-tables.html"},"Firebolt ",(0,r.kt)("em",{parentName:"a"},"external table")),",\nwhich acts as a SQL interface between the JSON documents and the destination table in Firebolt."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-firebolt:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-firebolt:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Firebolt database with at least one ",(0,r.kt)("a",{parentName:"li",href:"https://docs.firebolt.io/working-with-engines/"},"engine"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The engine must be started before creating the materialization."),(0,r.kt)("li",{parentName:"ul"},"It's important that the engine stays up throughout the lifetime of the materialization. To ensure this is the case, select Edit Engine on your engine. In the engine settings, set ",(0,r.kt)("strong",{parentName:"li"},"Auto-stop engine after")," to ",(0,r.kt)("strong",{parentName:"li"},"Always On"),"."))),(0,r.kt)("li",{parentName:"ul"},"An S3 bucket where JSON documents will be stored prior to loading",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The bucket must be in a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.firebolt.io/general-reference/available-regions.html"},"supported AWS region")," matching your Firebolt database."),(0,r.kt)("li",{parentName:"ul"},"The bucket may be public, or may be accessible by an IAM user. To configure your IAM user, see the ",(0,r.kt)("a",{parentName:"li",href:"#setup"},"steps below"),"."))),(0,r.kt)("li",{parentName:"ul"},"At least one Flow ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1119/concepts/collections"},"collection"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"}," If you haven't yet captured your data from its external source,\nstart at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/guides/create-dataflow"},"guide to create a dataflow"),".\nYou'll be referred back to this connector-specific documentation at the appropriate steps.")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"For non-public buckets, you'll need to configure access in AWS IAM."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.firebolt.io/loading-data/configuring-aws-role-to-access-amazon-s3.html"},"Firebolt documentation")," to set up an IAM policy and role, and add it to the external table definition.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console"},"IAM user"),". During setup:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Programmatic")," (access key) access. This ensures that an ",(0,r.kt)("strong",{parentName:"p"},"access key ID")," and ",(0,r.kt)("strong",{parentName:"p"},"secret access key")," are generated. You'll use these to configure the connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Permissions")," page, choose ",(0,r.kt)("strong",{parentName:"p"},"Attach existing policies directly")," and attach the policy you created in step 1.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After creating the user, download the IAM credentials file.\nTake note of the ",(0,r.kt)("strong",{parentName:"p"},"access key ID")," and ",(0,r.kt)("strong",{parentName:"p"},"secret access key")," and use them  to configure the connector.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html"},"Amazon docs")," if you lose your credentials."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Firebolt materialization, which will direct Flow data to your desired Firebolt tables via an external table."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/aws_key_id")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS access key ID for accessing the S3 bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/aws_region")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS region"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS region the bucket is in."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/aws_secret_key")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS secret access key"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS secret key for accessing the S3 bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Firebolt database."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/engine_url"))),(0,r.kt)("td",{parentName:"tr",align:null},"Engine URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Engine URL of the Firebolt database, in the format: ",(0,r.kt)("inlineCode",{parentName:"td"},"<engine-name>.<organization>.<region>.app.firebolt.io"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Firebolt password."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/s3_bucket"))),(0,r.kt)("td",{parentName:"tr",align:null},"S3 bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of S3 bucket where the intermediate files for external table will be stored."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/s3_prefix")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"A prefix for files stored in the bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/username"))),(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Firebolt username."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Firebolt table to store materialized results in. The external table will be named after this table with an ",(0,r.kt)("inlineCode",{parentName:"td"},"_external")," suffix."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table_type"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the Firebolt table to store materialized results in. See the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.firebolt.io/working-with-tables.html"},"Firebolt docs")," for more details."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  ${PREFIX}/${mat_name}:\n      endpoint:\n        connector:\n          config:\n            database: my-db\n            engine_url: my-db-my-engine-name.my-organization.us-east-1.app.firebolt.io\n            password: secret\n            # For public S3 buckets, only the bucket name is required\n            s3_bucket: my-bucket\n            username: firebolt-user\n          # Path to the latest version of the connector, provided as a Docker image\n          image: ghcr.io/estuary/materialize-firebolt:dev\n    # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n      - resource:\n          table: table-name\n          table_type: fact\n      source: ${PREFIX}/${source_collection}\n")),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"Firebolt is an insert-only system; it doesn't support updates or deletes.\nBecause of this, the Firebolt connector operates only in ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/concepts/materialization#delta-updates"},"delta updates")," mode.\nFirebolt stores all deltas \u2014 the unmerged collection documents \u2014 directly."),(0,r.kt)("p",null,"In some cases, this will affect how materialized views look in Firebolt compared to other systems that use standard updates."),(0,r.kt)("h2",{id:"reserved-words"},"Reserved words"),(0,r.kt)("p",null,"Firebolt has a list of reserved words, which my not be used in identifiers.\nCollections with field names that include a reserved word will automatically be quoted as part of a Firebolt materialization."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Reserved words"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"or")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alter"),(0,r.kt)("td",{parentName:"tr",align:null},"fetch"),(0,r.kt)("td",{parentName:"tr",align:null},"order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"and"),(0,r.kt)("td",{parentName:"tr",align:null},"first"),(0,r.kt)("td",{parentName:"tr",align:null},"outer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"over")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"between"),(0,r.kt)("td",{parentName:"tr",align:null},"from"),(0,r.kt)("td",{parentName:"tr",align:null},"partition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"full"),(0,r.kt)("td",{parentName:"tr",align:null},"precision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"generate"),(0,r.kt)("td",{parentName:"tr",align:null},"prepare")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"primary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"both"),(0,r.kt)("td",{parentName:"tr",align:null},"having"),(0,r.kt)("td",{parentName:"tr",align:null},"quarter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"case"),(0,r.kt)("td",{parentName:"tr",align:null},"if"),(0,r.kt)("td",{parentName:"tr",align:null},"right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cast"),(0,r.kt)("td",{parentName:"tr",align:null},"ilike"),(0,r.kt)("td",{parentName:"tr",align:null},"row")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"in"),(0,r.kt)("td",{parentName:"tr",align:null},"rows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"concat"),(0,r.kt)("td",{parentName:"tr",align:null},"inner"),(0,r.kt)("td",{parentName:"tr",align:null},"sample")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy"),(0,r.kt)("td",{parentName:"tr",align:null},"insert"),(0,r.kt)("td",{parentName:"tr",align:null},"select")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cross"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"show")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_date"),(0,r.kt)("td",{parentName:"tr",align:null},"intersect"),(0,r.kt)("td",{parentName:"tr",align:null},"text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"current_timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"isnull"),(0,r.kt)("td",{parentName:"tr",align:null},"top")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"join"),(0,r.kt)("td",{parentName:"tr",align:null},"trailing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"join_type"),(0,r.kt)("td",{parentName:"tr",align:null},"trim")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"leading"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"describe"),(0,r.kt)("td",{parentName:"tr",align:null},"left"),(0,r.kt)("td",{parentName:"tr",align:null},"truncate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distinct"),(0,r.kt)("td",{parentName:"tr",align:null},"like"),(0,r.kt)("td",{parentName:"tr",align:null},"union")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"unknown_char")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doublecolon"),(0,r.kt)("td",{parentName:"tr",align:null},"limit_distinct"),(0,r.kt)("td",{parentName:"tr",align:null},"unnest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dow"),(0,r.kt)("td",{parentName:"tr",align:null},"localtimestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"unterminated_string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doy"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drop"),(0,r.kt)("td",{parentName:"tr",align:null},"natural"),(0,r.kt)("td",{parentName:"tr",align:null},"using")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"empty_identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"next"),(0,r.kt)("td",{parentName:"tr",align:null},"varchar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"epoch"),(0,r.kt)("td",{parentName:"tr",align:null},"not"),(0,r.kt)("td",{parentName:"tr",align:null},"week")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"except"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"when")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"execute"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:null},"where")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exists"),(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"with")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"explain"),(0,r.kt)("td",{parentName:"tr",align:null},"on"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extract"),(0,r.kt)("td",{parentName:"tr",align:null},"only"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);