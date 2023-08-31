"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7856],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=n,f=u["".concat(c,".").concat(k)]||u[k]||m[k]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={},o="Materialization connectors",l={unversionedId:"reference/Connectors/materialization-connectors/README",id:"reference/Connectors/materialization-connectors/README",title:"Materialization connectors",description:"Estuary's available materialization connectors are listed in this section. Each connector has a unique set of requirements for configuration; these are linked below the connector name.",source:"@site/docs/reference/Connectors/materialization-connectors/README.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/",permalink:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zendesk Support",permalink:"/pr-preview/pr-1173/reference/Connectors/capture-connectors/zendesk-support"},next:{title:"AlloyDB",permalink:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/alloydb"}},c={},p=[{value:"Available materialization connectors",id:"available-materialization-connectors",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"materialization-connectors"},"Materialization connectors"),(0,n.kt)("p",null,"Estuary's available materialization connectors are listed in this section. Each connector has a unique set of requirements for configuration; these are linked below the connector name."),(0,n.kt)("p",null,"Also listed are links to the most recent Docker images for each connector. You'll need these to write Flow specifications manually (if you're ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1173/concepts/flowctl"},"developing locally"),"). If you're using the Flow web app, they aren't necessary."),(0,n.kt)("p",null,"Estuary is actively developing new connectors, so check back regularly for the latest additions. We\u2019re prioritizing the development of high-scale technological systems, as well as client needs."),(0,n.kt)("p",null,"At this time, all the available materialization connectors are created by Estuary.\nIn the future, other open-source materialization connectors from third parties could be supported."),(0,n.kt)("h2",{id:"available-materialization-connectors"},"Available materialization connectors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AlloyDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/alloydb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/materialize-alloydb:dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon DynamoDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/amazon-dynamodb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/materialize-dynamodb:dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon Redshift",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/amazon-redshift"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/materialize-redshift:dev"))),(0,n.kt)("li",{parentName:"ul"},"Apache Parquet in S3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/Parquet"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/materialize-s3-parquet:dev"))),(0,n.kt)("li",{parentName:"ul"},"Elasticsearch",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/Elasticsearch"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/materialize-elasticsearch:dev"))),(0,n.kt)("li",{parentName:"ul"},"Firebolt",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/Firebolt"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/materialize-firebolt:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google BigQuery",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/BigQuery"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/materialize-bigquery:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Cloud Pub/Sub",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/google-pubsub"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/materialize-google-pubsub:dev"))),(0,n.kt)("li",{parentName:"ul"},"MongoDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/mongodb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/materialize-mongodb:dev"))),(0,n.kt)("li",{parentName:"ul"},"MySQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/mysql"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/materialize-mysql:dev"))),(0,n.kt)("li",{parentName:"ul"},"Pinecone",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/pinecone"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/materialize-pinecone:dev"))),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/PostgreSQL"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/materialize-postgres:dev"))),(0,n.kt)("li",{parentName:"ul"},"Rockset",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/Rockset"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/materialize-rockset:dev"))),(0,n.kt)("li",{parentName:"ul"},"Snowflake",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/Snowflake"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/materialize-snowflake:dev"))),(0,n.kt)("li",{parentName:"ul"},"SQLite",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/SQLite"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/materialize-sqlite:dev"))),(0,n.kt)("li",{parentName:"ul"},"TimescaleDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1173/reference/Connectors/materialization-connectors/timescaledb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/materialize-timescaledb:dev")))))}m.isMDXComponent=!0}}]);