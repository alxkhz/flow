"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1150],{40852:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(74848),t=s(28453);const i={sidebar_position:1},c="Amazon DynamoDB",o={id:"reference/Connectors/capture-connectors/amazon-dynamodb",title:"Amazon DynamoDB",description:"This connector uses DynamoDB streams to continuously capture updates from DynamoDB tables into one or more Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-dynamodb.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-dynamodb",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/amazon-dynamodb",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-dynamodb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Amazon Ads",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/amazon-ads"},next:{title:"Amazon Kinesis",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/amazon-kinesis"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"amazon-dynamodb",children:"Amazon DynamoDB"}),"\n",(0,r.jsx)(n.p,{children:"This connector uses DynamoDB streams to continuously capture updates from DynamoDB tables into one or more Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-dynamodb:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-dynamodb:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"One or more DynamoDB tables with DynamoDB streams enabled. To enable DynamoDB streams for a table:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Select the table in the AWS console"}),"\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.strong,{children:"Exports and streams"})," tab"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Turn on"})," in the DynamoDB stream details section"]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"New and old images"})," for the ",(0,r.jsx)(n.strong,{children:"View type"})]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Turn on stream"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An IAM user with the following ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazondynamodb.html",children:"permissions"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ListTables"})," on all resources"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DescribeTable"})," on all resources"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DescribeStream"})," on all resources"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Scan"})," on all tables used"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GetRecords"})," on all streams used"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GetShardIterator"})," on all streams used"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["These permissions should be specified with the ",(0,r.jsx)(n.code,{children:"dynamodb:"})," prefix in an IAM policy document. For more details and examples, see ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/using-identity-based-policies.html",children:"Using identity-based policies with Amazon DynamoDB"})," in the Amazon docs."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The AWS ",(0,r.jsx)(n.strong,{children:"access key"})," and ",(0,r.jsx)(n.strong,{children:"secret access key"})," for the user. See the ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS blog"})," for help finding these credentials."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1395/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the DynamoDB source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/awsAccessKeyId"})})}),(0,r.jsx)(n.td,{children:"Access Key ID"}),(0,r.jsx)(n.td,{children:"AWS Access Key ID for capturing from DynamoDB tables."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/awsSecretAccessKey"})})}),(0,r.jsx)(n.td,{children:"Secret Access Key"}),(0,r.jsx)(n.td,{children:"AWS Secret Access Key for capturing from DynamoDB tables."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/region"})})}),(0,r.jsx)(n.td,{children:"AWS Region"}),(0,r.jsx)(n.td,{children:"The name of the AWS region where the DynamoDB tables are located."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"advanced/backfillSegments"})}),(0,r.jsx)(n.td,{children:"Backfill Table Segments"}),(0,r.jsx)(n.td,{children:"Number of segments to use for backfill table scans. Has no effect if changed after the backfill has started."}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"advanced/endpoint"})}),(0,r.jsx)(n.td,{children:"AWS Endpoint"}),(0,r.jsx)(n.td,{children:"The AWS endpoint URI to connect to. Use if you're capturing from a compatible API that isn't provided by AWS."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"advanced/scanLimit"})}),(0,r.jsx)(n.td,{children:"Scan Limit"}),(0,r.jsx)(n.td,{children:"Limit the number of items to evaluate for each table backfill scan request."}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/table"})})}),(0,r.jsx)(n.td,{children:"Table Name"}),(0,r.jsx)(n.td,{children:"The name of the table to be captured."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/rcuAllocation"})}),(0,r.jsx)(n.td,{children:"RCU Allocation"}),(0,r.jsx)(n.td,{children:"Read capacity units the capture will attempt to consume during the table backfill. Leave blank to automatically determine based on the provisioned capacity of the table."}),(0,r.jsx)(n.td,{children:"integer"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.p,{children:"A minimal capture definition will look like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-dynamodb:dev\n        config:\n          awsAccessKeyId: "example-aws-access-key-id"\n          awsSecretAccessKey: "example-aws-secret-access-key"\n          region: "us-east-1"\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        target: ${PREFIX}/${COLLECTION_NAME}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Your capture definition may be more complex, with additional bindings for each DynamoDB table."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/pr-preview/pr-1395/concepts/captures#specification",children:"Learn more about capture definitions."})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(96540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);