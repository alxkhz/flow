"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9493],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>N});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,N=s["".concat(c,".").concat(m)]||s[m]||k[m]||o;return t?a.createElement(N,i(i({ref:r},u),{},{components:t})):a.createElement(N,i({ref:r},u))}));function N(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6005:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={},i="Capture connectors",l={unversionedId:"reference/Connectors/capture-connectors/README",id:"reference/Connectors/capture-connectors/README",title:"Capture connectors",description:"Estuary's available capture connectors are listed in this section. Each connector has a unique set of requirements for configuration; these are linked below the connector name.",source:"@site/docs/reference/Connectors/capture-connectors/README.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/",permalink:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connectors",permalink:"/pr-preview/pr-1340/reference/Connectors/"},next:{title:"Aircall",permalink:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/aircall"}},c={},p=[{value:"Available capture connectors",id:"available-capture-connectors",level:2},{value:"Estuary connectors",id:"estuary-connectors",level:3},{value:"Third party connectors",id:"third-party-connectors",level:3}],u={toc:p},s="wrapper";function k(e){let{components:r,...t}=e;return(0,n.kt)(s,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"capture-connectors"},"Capture connectors"),(0,n.kt)("p",null,"Estuary's available capture connectors are listed in this section. Each connector has a unique set of requirements for configuration; these are linked below the connector name."),(0,n.kt)("p",null,"Also listed are links to the most recent Docker images for each connector. You'll need these to write Flow specifications manually (if you're ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1340/concepts/flowctl"},"developing locally"),"). If you're using the Flow web app, they aren't necessary."),(0,n.kt)("p",null,"Estuary is actively developing new connectors, so check back regularly for the latest additions. We\u2019re prioritizing the development of high-scale technological systems, as well as client needs."),(0,n.kt)("h2",{id:"available-capture-connectors"},"Available capture connectors"),(0,n.kt)("h3",{id:"estuary-connectors"},"Estuary connectors"),(0,n.kt)("p",null,"These connectors are created by Estuary. We prioritize high-scale technology systems for development."),(0,n.kt)("p",null,"All Estuary connectors capture data in real time, as it appears in the source system"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AlloyDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/alloydb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-alloydb:dev"))),(0,n.kt)("li",{parentName:"ul"},"Alpaca",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/alpaca"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-alpaca:dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon Dynamodb",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/amazon-dynamodb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-dynamodb:dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon Kinesis",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/amazon-kinesis"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-kinesis:dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon S3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/amazon-s3"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-s3:dev"))),(0,n.kt)("li",{parentName:"ul"},"Apache Kafka",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/apache-kafka"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-kafka:dev"))),(0,n.kt)("li",{parentName:"ul"},"BigQuery",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/bigquery-batch"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-bigquery-batch:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Cloud Storage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/gcs"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-gcs:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Firestore",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/google-firestore"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-firestore:dev"))),(0,n.kt)("li",{parentName:"ul"},"HTTP file",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/http-file"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-http-file:dev"))),(0,n.kt)("li",{parentName:"ul"},"HTTP ingest (webhook)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/http-ingest"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-http-ingest:dev"))),(0,n.kt)("li",{parentName:"ul"},"MariaDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/mariadb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mariadb:dev"))),(0,n.kt)("li",{parentName:"ul"},"Microsoft SQL Server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/sqlserver"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-sqlserver:dev"))),(0,n.kt)("li",{parentName:"ul"},"MongoDB",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/mongodb"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mongodb:dev"))),(0,n.kt)("li",{parentName:"ul"},"MySQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/MySQL"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mysql:dev"))),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/PostgreSQL"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package \u2014 ghcr.io/estuary/source-postgres:dev"))),(0,n.kt)("li",{parentName:"ul"},"Salesforce (for real-time data)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/salesforce-real-time"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-salesforce-next:dev"))),(0,n.kt)("li",{parentName:"ul"},"SFTP",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/sftp"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-sftp:dev")))),(0,n.kt)("h3",{id:"third-party-connectors"},"Third party connectors"),(0,n.kt)("p",null,"Estuary supports open-source connectors from third parties. These connectors operate in a ",(0,n.kt)("strong",{parentName:"p"},"batch")," fashion,\ncapturing data in increments. When you run these connectors in Flow, you'll get as close to real time as possible\nwithin the limitations set by the connector itself."),(0,n.kt)("p",null,"Typically, we enable SaaS connectors from third parties to allow more diverse data flows."),(0,n.kt)("p",null,"All the third-party connectors available currently were created by ",(0,n.kt)("a",{parentName:"p",href:"https://airbyte.com/connectors"},"Airbyte"),".\nThe versions made available in Flow have been adapted for compatibility."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Airtable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/airtable"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-airtable.dev"))),(0,n.kt)("li",{parentName:"ul"},"Amazon Ads",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/amazon-ads"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-amazon-ads.dev"))),(0,n.kt)("li",{parentName:"ul"},"Amplitude",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/amplitude"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-amplitude:dev"))),(0,n.kt)("li",{parentName:"ul"},"Bing Ads",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/bing-ads"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-bing-ads:dev"))),(0,n.kt)("li",{parentName:"ul"},"Braintree",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/braintree"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-braintree:dev"))),(0,n.kt)("li",{parentName:"ul"},"Braze",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/braze"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-braze:dev"))),(0,n.kt)("li",{parentName:"ul"},"Chargebee",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/chargebee"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-chargebee.dev"))),(0,n.kt)("li",{parentName:"ul"},"Exchange Rates API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/exchange-rates"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-exchange-rates:dev"))),(0,n.kt)("li",{parentName:"ul"},"Facebook Marketing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/facebook-marketing"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-facebook-marketing:dev"))),(0,n.kt)("li",{parentName:"ul"},"Freshdesk",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/freshdesk"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-freshdesk:dev"))),(0,n.kt)("li",{parentName:"ul"},"GitHub",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/github"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-github:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Ads",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/google-ads"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-ads:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Analytics 4",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/google-analytics-4"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-analytics-data-api:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Universal Analytics",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/google-analytics"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-analytics-ua:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Search Console",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/google-search-console"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-search-console:dev"))),(0,n.kt)("li",{parentName:"ul"},"Google Sheets",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/google-sheets"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-google-sheets:dev"))),(0,n.kt)("li",{parentName:"ul"},"Greenhouse",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/greenhouse"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-greenhouse.dev"))),(0,n.kt)("li",{parentName:"ul"},"Harvest",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/harvest"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-harvest:dev"))),(0,n.kt)("li",{parentName:"ul"},"Hubspot",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/hubspot"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-hubspot:dev"))),(0,n.kt)("li",{parentName:"ul"},"Instagram",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/instagram"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-instagram:dev"))),(0,n.kt)("li",{parentName:"ul"},"Intercom",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/intercom"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-intercom:dev"))),(0,n.kt)("li",{parentName:"ul"},"Iterable",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/iterable"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-iterable.dev"))),(0,n.kt)("li",{parentName:"ul"},"Jira",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/jira"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-jira.dev"))),(0,n.kt)("li",{parentName:"ul"},"Klaviyo",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/klaviyo"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-klaviyo.dev"))),(0,n.kt)("li",{parentName:"ul"},"LinkedIn Ads",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/linkedin-ads"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-linkedin-ads:dev"))),(0,n.kt)("li",{parentName:"ul"},"Mailchimp",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/mailchimp"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-mailchimp:dev"))),(0,n.kt)("li",{parentName:"ul"},"Marketo",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/marketo"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-marketo.dev"))),(0,n.kt)("li",{parentName:"ul"},"MixPanel",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/mixpanel"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-mixpanel.dev"))),(0,n.kt)("li",{parentName:"ul"},"NetSuite",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/netsuite"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-netsuite:dev"))),(0,n.kt)("li",{parentName:"ul"},"Notion",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/notion"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-notion:dev"))),(0,n.kt)("li",{parentName:"ul"},"Paypal Transaction",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/paypal-transaction"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghrc.io/estuary/source-paypal-transaction.dev"))),(0,n.kt)("li",{parentName:"ul"},"Recharge",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/recharge"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-recharge:dev"))),(0,n.kt)("li",{parentName:"ul"},"Salesforce (For historical data)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/salesforce"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-salesforce:dev"))),(0,n.kt)("li",{parentName:"ul"},"SendGrid",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/sendgrid"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-sendgrid:dev"))),(0,n.kt)("li",{parentName:"ul"},"Sentry",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/sentry"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-sentry:dev"))),(0,n.kt)("li",{parentName:"ul"},"Slack",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/slack"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-slack:dev"))),(0,n.kt)("li",{parentName:"ul"},"Snapchat",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/snapchat"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-snapchat:dev"))),(0,n.kt)("li",{parentName:"ul"},"Stripe",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/stripe"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-stripe:dev"))),(0,n.kt)("li",{parentName:"ul"},"SurveyMonkey",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/survey-monkey"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-surveymonkey:dev"))),(0,n.kt)("li",{parentName:"ul"},"Twilio",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/twilio"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-twilio:dev"))),(0,n.kt)("li",{parentName:"ul"},"Zendesk Chat",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/zendesk-chat"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-zendesk-chat:dev"))),(0,n.kt)("li",{parentName:"ul"},"Zendesk Support",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/zendesk-support"},"Configuration")),(0,n.kt)("li",{parentName:"ul"},"Package - ghcr.io/estuary/source-zendesk-support:dev")))))}k.isMDXComponent=!0}}]);