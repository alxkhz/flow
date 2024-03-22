"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6914],{40335:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(74848),s=i(28453);const r={sidebar_position:1},o="Amazon DynamoDB",c={id:"reference/Connectors/materialization-connectors/amazon-dynamodb",title:"Amazon DynamoDB",description:"This connector materializes Flow collections into tables in an Amazon DynamoDB.",source:"@site/docs/reference/Connectors/materialization-connectors/amazon-dynamodb.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/amazon-dynamodb",permalink:"/pr-preview/pr-1421/reference/Connectors/materialization-connectors/amazon-dynamodb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/amazon-dynamodb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AlloyDB",permalink:"/pr-preview/pr-1421/reference/Connectors/materialization-connectors/alloydb"},next:{title:"Apache Parquet in S3",permalink:"/pr-preview/pr-1421/reference/Connectors/materialization-connectors/Parquet"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Collection Requirements",id:"collection-requirements",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"amazon-dynamodb",children:"Amazon DynamoDB"}),"\n",(0,t.jsx)(n.p,{children:"This connector materializes Flow collections into tables in an Amazon DynamoDB."}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows,\n",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-dynamodb:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/materialize-dynamodb:dev"})}),"\nprovides the latest version of the connector as a Docker image. You can also follow the link in your\nbrowser to see past image versions."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An IAM user with the following\n",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html",children:"permissions"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BatchGetItem"})," on all resources"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BatchWriteItem"})," on all resources"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CreateTable"})," on all resources"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These permissions should be specified with the ",(0,t.jsx)(n.code,{children:"dynamodb:"})," prefix in an IAM policy document. For\nmore details and examples, see ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/using-identity-based-policies.html",children:"Using identity-based policies with Amazon\nDynamoDB"}),"\nin the Amazon docs."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The AWS ",(0,t.jsx)(n.strong,{children:"access key"})," and ",(0,t.jsx)(n.strong,{children:"secret access key"})," for the user. See the ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS\nblog"})," for help finding these\ncredentials."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"collection-requirements",children:"Collection Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Materialized collections can have at most 2 collection keys."}),"\n",(0,t.jsxs)(n.p,{children:["By default, the materialized tables will include the collection keys as the DynamoDB partition key\nand sort key, and the root document. The root document is materialized as ",(0,t.jsx)(n.code,{children:'"flow_document"'})," unless\nan alternate ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1421/concepts/collections#projections",children:"projection"})," is configured for the source\ncollection. Additional fields may be included, but DynamoDB has a 400KB size limit on an individual\nrow so selecting too many fields of a collection with large documents will cause errors if the row\nsize exceeds that."]}),"\n",(0,t.jsxs)(n.p,{children:["The root document is materialized as a DynamoDB ",(0,t.jsx)(n.code,{children:"Map"})," type, and the fields of the document must be\nvalid DynamoDB ",(0,t.jsx)(n.code,{children:"Map"})," keys."]}),"\n",(0,t.jsxs)(n.p,{children:["To resolve issues with collections with more than 2 keys, excessively large documents, or\nincompatible field names, use a ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1421/concepts/derivations",children:"derivation"})," to derive a new\ncollection and materialize that collection instead."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog\nspecification file. See ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1421/concepts/connectors#using-connectors",children:"connectors"})," to learn more\nabout using connectors. The values and specification sample below provide configuration details\nspecific to the DynamoDB materialization connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/awsAccessKeyId"})})}),(0,t.jsx)(n.td,{children:"Access Key ID"}),(0,t.jsx)(n.td,{children:"AWS Access Key ID for materializing to DynamoDB."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/awsSecretAccessKey"})})}),(0,t.jsx)(n.td,{children:"Secret Access Key"}),(0,t.jsx)(n.td,{children:"AWS Secret Access Key for materializing to DynamoDB."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/region"})})}),(0,t.jsx)(n.td,{children:"AWS Region"}),(0,t.jsx)(n.td,{children:"Region of the materialized tables."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"advanced/endpoint"})}),(0,t.jsx)(n.td,{children:"AWS Endpoint"}),(0,t.jsx)(n.td,{children:"The AWS endpoint URI to connect to. Use if you're materializing to a compatible API that isn't provided by AWS."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/table"})})}),(0,t.jsx)(n.td,{children:"Table Name"}),(0,t.jsx)(n.td,{children:"The name of the table to be materialized to."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/delta_updates"})}),(0,t.jsx)(n.td,{children:"Delta Update"}),(0,t.jsx)(n.td,{children:"Should updates to this table be done via delta updates. Default is false."}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'materializations:\n  ${PREFIX}/${MATERIALIZATION_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-dynamodb:dev\n        config:\n          awsAccessKeyId: "example-aws-access-key-id"\n          awsSecretAccessKey: "example-aws-secret-access-key"\n          region: "us-east-1"\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);