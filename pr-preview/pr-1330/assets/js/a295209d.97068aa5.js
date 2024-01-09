"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},l="Apache Parquet in S3",o={unversionedId:"reference/Connectors/materialization-connectors/Parquet",id:"reference/Connectors/materialization-connectors/Parquet",title:"Apache Parquet in S3",description:"This connector materializes delta updates of Flow collections into an S3 bucket in the Apache Parquet format.",source:"@site/docs/reference/Connectors/materialization-connectors/Parquet.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Parquet",permalink:"/pr-preview/pr-1330/reference/Connectors/materialization-connectors/Parquet",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Parquet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Amazon DynamoDB",permalink:"/pr-preview/pr-1330/reference/Connectors/materialization-connectors/amazon-dynamodb"},next:{title:"Elasticsearch",permalink:"/pr-preview/pr-1330/reference/Connectors/materialization-connectors/Elasticsearch"}},p={},s=[{value:"Supported field types",id:"supported-field-types",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Materializing arrays and objects",id:"materializing-arrays-and-objects",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apache-parquet-in-s3"},"Apache Parquet in S3"),(0,r.kt)("p",null,"This connector materializes ",(0,r.kt)("a",{parentName:"p",href:"#delta-updates"},"delta updates")," of Flow collections into an S3 bucket in the Apache Parquet format."),(0,r.kt)("p",null,"The delta updates are batched within Flow, converted to Parquet files, and then pushed to the S3 bucket at a time interval that you set."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-s3-parquet:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-s3-parquet:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"supported-field-types"},"Supported field types"),(0,r.kt)("p",null,"All possible field types in Flow collections are materialized into Parquet by default, with the exception of arrays.\nBy default, the connector makes its best effort to flatten fields of type object."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#materializing-arrays-and-objects"},"You can override the default and materialize arrays and objects as JSON strings"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An AWS root or IAM user with access to the S3 bucket. For this user, you'll need the ",(0,r.kt)("strong",{parentName:"li"},"access key")," and ",(0,r.kt)("strong",{parentName:"li"},"secret access key"),".\nSee the ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/"},"AWS blog")," for help finding these credentials."),(0,r.kt)("li",{parentName:"ul"},"At least one Flow collection")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't yet captured your data from its external source, start at the beginning of the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/guides/create-dataflow"},"guide to create a dataflow"),". You'll be referred back to this connector-specific documentation at the appropriate steps.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a  materialization, which will direct the contents of these Flow collections to Parquet files in S3."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"The endpoint URI to connect to. Useful if you","'","re connecting to a S3-compatible API that isn","'","t provided by AWS."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsAccessKeyId"))),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS credential used to connect to S3."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsSecretAccessKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"Secret Access Key"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS credential used to connect to S3."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/bucket"))),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the S3 bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/region"))),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the AWS region where the S3 bucket is located."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/uploadIntervalInSeconds"))),(0,r.kt)("td",{parentName:"tr",align:null},"Upload Interval in Seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"Time interval, in seconds, at which to upload data from Flow to S3."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/compressionType")),(0,r.kt)("td",{parentName:"tr",align:null},"Compression type"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to compress data in Parquet."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/pathPrefix"))),(0,r.kt)("td",{parentName:"tr",align:null},"Path prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"The desired Parquet file path within the bucket as determined by an S3 ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html"},"prefix"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("p",null,"The following compression types are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snappy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gzip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lz4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zstd"))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  PREFIX/mat_name:\n      endpoint:\n        connector:\n          config:\n            awsAccessKeyId: AKIAIOSFODNN7EXAMPLE\n            awsSecretAccessKey: wJalrXUtnFEMI/K7MDENG/bPxRfiCYSECRET\n            bucket: my-bucket\n            uploadIntervalInSeconds: 300\n          # Path to the latest version of the connector, provided as a Docker image\n          image: ghcr.io/estuary/materialize-s3-parquet:dev\n    # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n      - resource:\n          pathPrefix: /my-prefix\n      source: PREFIX/source_collection\n")),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector uses only ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/concepts/materialization#delta-updates"},"delta updates")," mode.\nCollection documents are converted to Parquet format and stored in their unmerged state."),(0,r.kt)("h2",{id:"materializing-arrays-and-objects"},"Materializing arrays and objects"),(0,r.kt)("p",null,"If your collection contains array or object fields, by default, the connector will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Skip arrays."),(0,r.kt)("li",{parentName:"ul"},"Attempt to flatten objects.")),(0,r.kt)("p",null,"Alternatively, you can materialize either of these field types as JSON strings.\nYou do so by editing the materialization specification and adding ",(0,r.kt)("strong",{parentName:"p"},"projected fields"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Projections")," are how Flow maps hierarchical JSON locations into fields.\nBy listing projected fields to include, you override the connector's default behavior."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/concepts/materialization#projected-fields"},"Learn more about how projected fields work"),"."),(0,r.kt)("p",null,"To materialize an array or object as a JSON string, do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/collections"},"collections page of the web app"),",\nlocate the collection to be materialized and view its specification.\nNote the names of arrays or objects you want to materialize as strings."),(0,r.kt)("p",{parentName:"li"},"  For example, the collection ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary/public/wikipedia/recentchange")," (visible to all users in the web app)\nhas many objects, but we want to materialize ",(0,r.kt)("inlineCode",{parentName:"p"},'"length"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"revision'),'" as strings.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Begin to set up your S3 Parquet materialization. After you initiate the connection with S3, the ",(0,r.kt)("strong",{parentName:"p"},"Specification Editor")," becomes available.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Specification Editor, locate the ",(0,r.kt)("strong",{parentName:"p"},"binding")," of the collection with the arrays or objects.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},'"fields"')," object to the binding and list the objects or arrays in the following format:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"bindings": [\n    {\n      "resource": {\n        "pathPrefix": "recentchanges"\n      },\n      "source": "estuary/public/wikipedia/recentchange",\n      "fields": {\n        "include": {\n          "length": {},\n          "revision": {}\n        },\n        "recommended": true\n      }\n    }\n  ],\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Proceed to save and publish the materialization as usual.")))}u.isMDXComponent=!0}}]);