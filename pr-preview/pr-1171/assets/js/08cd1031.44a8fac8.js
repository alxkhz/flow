"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Apache Kafka",l={unversionedId:"reference/Connectors/capture-connectors/apache-kafka",id:"reference/Connectors/capture-connectors/apache-kafka",title:"Apache Kafka",description:"This connector captures streaming data from Apache Kafka topics.",source:"@site/docs/reference/Connectors/capture-connectors/apache-kafka.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/apache-kafka",permalink:"/pr-preview/pr-1171/reference/Connectors/capture-connectors/apache-kafka",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/apache-kafka.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Amplitude",permalink:"/pr-preview/pr-1171/reference/Connectors/capture-connectors/amplitude"},next:{title:"BigQuery",permalink:"/pr-preview/pr-1171/reference/Connectors/capture-connectors/bigquery"}},c={},s=[{value:"Supported data types",id:"supported-data-types",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Authentication and connection security",id:"authentication-and-connection-security",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apache-kafka"},"Apache Kafka"),(0,r.kt)("p",null,"This connector captures streaming data from Apache Kafka topics."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-kafka"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-kafka:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"supported-data-types"},"Supported data types"),(0,r.kt)("p",null,"This connector supports Kafka messages that contain JSON data.\nFlow ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1171/concepts/collections"},"collections")," store data as JSON.\nBefore deploying this connector, you should modify ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1171/concepts/schemas"},"schema(s)"),"\nof the Flow collection(s) you're creating to reflect the structure of your JSON Kafka messages."),(0,r.kt)("p",null,"At this time, the connector does not support other data types in Kafka messages."),(0,r.kt)("admonition",{title:"Beta",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Support for Avro Kafka messages will be added soon. For more information, ",(0,r.kt)("a",{parentName:"p",href:"mailto:info@estuary.dev"},"contact the Estuary team"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Kafka cluster with:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#producerconfigs_bootstrap.servers"},"bootstrap.servers")," configured so that clients may connect via the desired host and port"),(0,r.kt)("li",{parentName:"ul"},"An authentication mechanism of choice set up (highly recommended for production environments)"),(0,r.kt)("li",{parentName:"ul"},"Connection security enabled with TLS (highly recommended for production environments)")))),(0,r.kt)("h3",{id:"authentication-and-connection-security"},"Authentication and connection security"),(0,r.kt)("p",null,"Neither authentication nor connection security are enabled by default in your Kafka cluster, but both are important considerations.\nSimilarly, Flow's Kafka connectors do not strictly require authentication or connection security mechanisms.\nYou may choose to omit them for local development and testing; however, both are strongly encouraged for production environments."),(0,r.kt)("p",null,"A wide ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#security_overview"},"variety of authentication methods")," is available in Kafka clusters.\nFlow supports SASL/SCRAM-SHA-256, SASL/SCRAM-SHA-512, and SASL/PLAIN. Behavior using other authentication methods is not guaranteed.\nWhen authentication details are not provided, the client connection will attempt to use PLAINTEXT (insecure) protocol."),(0,r.kt)("p",null,"If you don't already have authentication enabled on your cluster, Estuary recommends either of listed ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#security_sasl_scram"},"SASL/SCRAM")," methods.\nWith SCRAM, you set up a username and password, making it analogous to the traditional authentication mechanisms\nyou use in other applications."),(0,r.kt)("p",null,'For connection security, Estuary recommends that you enable TLS encryption for your SASL mechanism of choice,\nas well as all other components of your cluster.\nNote that because TLS replaced now-deprecated SSL encryption, Kafka still uses the acronym "SSL" to refer to TLS encryption.\nSee ',(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/kafka/authentication_ssl.html"},"Confluent's documentation")," for details."),(0,r.kt)("admonition",{title:"Beta",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"TLS encryption is currently the only supported connection security mechanism for this connector.\nOther connection security methods may be enabled in the future.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1171/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Apache Kafka source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/bootstrap_servers"))),(0,r.kt)("td",{parentName:"tr",align:null},"Bootstrap servers"),(0,r.kt)("td",{parentName:"tr",align:null},"The initial servers in the Kafka cluster to connect to. The Kafka client will be informed of the rest of the cluster nodes by connecting to one of these nodes."),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/tls"))),(0,r.kt)("td",{parentName:"tr",align:null},"TLS"),(0,r.kt)("td",{parentName:"tr",align:null},"TLS connection settings."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"system_certificates"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/authentication")),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection details used to authenticate a client connection to Kafka via SASL."),(0,r.kt)("td",{parentName:"tr",align:null},"null, object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/authentication/mechanism")),(0,r.kt)("td",{parentName:"tr",align:null},"SASL Mechanism"),(0,r.kt)("td",{parentName:"tr",align:null},"SASL mechanism describing how to exchange and authenticate client servers."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/authentication/password")),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password, if applicable for the authentication mechanism chosen."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/authentication/username")),(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Username, if applicable for the authentication mechanism chosen."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka topic name."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,r.kt)("inlineCode",{parentName:"td"},"incremental")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-kafka:dev\n        config:\n            bootstrap_servers: [localhost:9093]\n            tls: system_certificates\n            authentication:\n                mechanism: SCRAM-SHA-512\n                username: bruce.wayne\n                password: definitely-not-batman\n    bindings:\n      - resource:\n           stream: ${TOPIC_NAME}\n           syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n")),(0,r.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each Kafka topic."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1171/concepts/captures#pull-captures"},"Learn more about capture definitions."),"."))}d.isMDXComponent=!0}}]);