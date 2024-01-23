"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},l="Amazon Redshift",o={unversionedId:"reference/Connectors/materialization-connectors/amazon-redshift",id:"reference/Connectors/materialization-connectors/amazon-redshift",title:"Amazon Redshift",description:"This connector materializes Flow collections into tables in an Amazon Redshift database.",source:"@site/docs/reference/Connectors/materialization-connectors/amazon-redshift.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/amazon-redshift",permalink:"/pr-preview/pr-1350/reference/Connectors/materialization-connectors/amazon-redshift",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/amazon-redshift.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon RDS for SQL Server",permalink:"/pr-preview/pr-1350/reference/Connectors/materialization-connectors/amazon-rds-sqlserver"},next:{title:"Databricks",permalink:"/pr-preview/pr-1350/reference/Connectors/materialization-connectors/databricks"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Setup",id:"setup",level:2},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Maximum record size",id:"maximum-record-size",level:2},{value:"Delta updates",id:"delta-updates",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-redshift"},"Amazon Redshift"),(0,r.kt)("p",null,"This connector materializes Flow collections into tables in an Amazon Redshift database."),(0,r.kt)("p",null,"The connector uses your AWS account to materialize to Redshift tables by way of files in an S3\nbucket. The files in the bucket as as a temporary staging area for data storage and retrieval."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-redshift:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-redshift:dev")),"\nprovides the latest connector image. You can also follow the link in your browser to see past image\nversions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'A Redshift cluster accessible either directly or using an SSH tunnel. The user configured to\nconnect to Redshift must have at least "create table" permissions for the configured schema. The\nconnector will create new tables in the database per your specification. Tables created manually\nin advance are not supported. See ',(0,r.kt)("a",{parentName:"li",href:"#setup"},"setup")," for more information."),(0,r.kt)("li",{parentName:"ul"},"An S3 bucket for staging temporary files. For best performance the bucket should be in the same\nregion as your Redshift cluster. See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"this\nguide")," for\ninstructions on setting up a new S3 bucket."),(0,r.kt)("li",{parentName:"ul"},"An AWS root or IAM user with ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"read and write\naccess"),"\nto the S3 bucket. For this user, you'll need the ",(0,r.kt)("strong",{parentName:"li"},"access key")," and ",(0,r.kt)("strong",{parentName:"li"},"secret access key"),". See the\n",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/"},"AWS blog")," for help finding\nthese credentials.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Use the below properties to configure an Amazon Redshift materialization, which will direct one or\nmore of your Flow collections to your desired tables in the database."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Host and port of the database. Example: red-shift-cluster-name.account.us-east-2.redshift.amazonaws.com:5439"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"Database user to connect as."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/database")),(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the logical database to materialize to. The materialization will attempt to connect to the default database for the provided user if omitted."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/schema")),(0,r.kt)("td",{parentName:"tr",align:null},"Database Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Database schema for bound collection tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"public"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsAccessKeyId"))),(0,r.kt)("td",{parentName:"tr",align:null},"Access Key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Access Key ID for reading and writing data to the S3 staging bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/awsSecretAccessKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"Secret Access Key"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Secret Access Key for reading and writing data to the S3 staging bucket."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/bucket"))),(0,r.kt)("td",{parentName:"tr",align:null},"S3 Staging Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the S3 bucket to use for staging data loads."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/region"))),(0,r.kt)("td",{parentName:"tr",align:null},"Region"),(0,r.kt)("td",{parentName:"tr",align:null},"Region of the S3 staging bucket. For optimal performance this should be in the same region as the Redshift database cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/bucketPath")),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket Path"),(0,r.kt)("td",{parentName:"tr",align:null},"A prefix that will be used to store objects in S3."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/updateDelay")),(0,r.kt)("td",{parentName:"tr",align:null},"Update Delay"),(0,r.kt)("td",{parentName:"tr",align:null},"Potentially reduce active cluster time by increasing the delay between updates. Defaults to 30 minutes if unset."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/table"))),(0,r.kt)("td",{parentName:"tr",align:null},"Table"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database table."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/delta_updates")),(0,r.kt)("td",{parentName:"tr",align:null},"Delta Update"),(0,r.kt)("td",{parentName:"tr",align:null},"Should updates to this table be done via delta updates. Default is false."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/schema")),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative Schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Alternative schema for this table (optional)."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/materialize-redshift:dev"\n        config:\n          address: "redshift-cluster.account.us-east-2.redshift.amazonaws.com:5439"\n          user: user\n          password: password\n          database: db\n          awsAccessKeyId: access_key_id\n          awsSecretAccessKey: secret_access_key\n          bucket: my-bucket\n          region: us-east-2\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n')),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You must configure your cluster to allow connections from Estuary. This can be accomplished by\nmaking your cluster accessible over the internet for Estuary Flow's IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"34.121.207.128"),", or\nusing an SSH tunnel. Connecting to the S3 staging bucket does not use the network tunnel and\nconnects over HTTPS only."),(0,r.kt)("p",null,"Instructions for making a cluster accessible over the internet can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/premiumsupport/knowledge-center/redshift-cluster-private-public/"},"here"),".\nWhen using this option, database connections are made over SSL only."),(0,r.kt)("p",null,"For allowing secure connections via SSH tunneling:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../../../guides/connect-network/"},"guide")," to configure an SSH server on using an\nAWS EC2 instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your connector as described in the ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"configuration")," section above, with\nthe additional of the ",(0,r.kt)("inlineCode",{parentName:"p"},"networkTunnel")," stanza to enable the SSH tunnel, if using. See ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to\nendpoints on secure\nnetworks")," for additional\ndetails and a sample."))),(0,r.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("p",null,"Redshift has requirements for ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_names.html"},"names and\nidentifiers")," and this connector will\nautomatically apply quoting when needed. All table identifiers and column identifiers (corresponding\nto Flow collection fields) are treated as lowercase. Table names for bindings must be unique on a\ncase-insensitive basis, as well as field names of the source collection. If any names are not unique\non a case-insensitive basis (ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"myField")," vs. ",(0,r.kt)("inlineCode",{parentName:"p"},"MyField"),") the materialization will fail to apply."),(0,r.kt)("p",null,"If necessary, you can add ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/advanced/projections"},"projections")," to your\ncollection specification to change field names."),(0,r.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("p",null,"For best performance there should at most one Redshift materialization active per Redshift schema.\nAdditional collections to be materialized should be added as bindings to this single materialization\nrather than creating a separate materialization for each collection."),(0,r.kt)("p",null,"In order to achieve exactly-once processing of collection documents, the materialization creates and\nuses metadata tables located in the schema configured by the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"schema"),' property. To commit a\ntransaction, a table-level lock is acquired on these metadata tables. If there are multiple\nmaterializations using the same metadata tables, they will need to take turns acquiring these locks.\nThis locking behavior prevents "serializable isolation violation" errors in the case of multiple\nmaterializations sharing the same metadata tables at the expense of allowing only a single\nmaterialization to be actively committing a transaction.'),(0,r.kt)("h2",{id:"maximum-record-size"},"Maximum record size"),(0,r.kt)("p",null,"The maximum size of a single input document is 4 MB. Attempting to materialize collections with\ndocuments larger than 4 MB will result in an error. To materialize this data you can use a\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/derivations"},"derivation")," to create a derived collection with smaller\ndocuments, or exclude fields containing excessive amounts of data by ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/guides/customize-materialization-fields#include-desired-fields-in-your-materialization"},"customizing the materialized\nfields"),"."),(0,r.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,r.kt)("p",null,"This connector supports both standard (merge) and ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/materialization#delta-updates"},"delta updates"),".\nThe default is to use standard updates."))}u.isMDXComponent=!0}}]);