"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7057],{46116:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=s(74848),i=s(28453);const t={sidebar_position:1},c="Amazon Kinesis",o={id:"reference/Connectors/capture-connectors/amazon-kinesis",title:"Amazon Kinesis",description:"This connector captures data from Amazon Kinesis streams.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-kinesis.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-kinesis",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/amazon-kinesis",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-kinesis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Amazon DynamoDB",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/amazon-dynamodb"},next:{title:"Amazon S3",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/amazon-s3"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"amazon-kinesis",children:"Amazon Kinesis"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from Amazon Kinesis streams."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://github.com/estuary/connectors/pkgs/container/source-kinesis",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-kinesis:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"One or more Amazon Kinesis streams. For a given capture, all streams must:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contain JSON data only"}),"\n",(0,r.jsxs)(n.li,{children:["Be in the same ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions",children:"AWS region"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["An IAM user with the following ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonkinesis.html",children:"permissions"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ListShards"})," on all resources"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GetRecords"})," on all streams used"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GetShardIterator"})," on all streams used"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DescribeStream"})," on all streams used"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"DescribeStreamSummary"})," on all streams used"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["These permissions should be specified with the ",(0,r.jsx)(n.code,{children:"kinesis:"})," prefix in an IAM policy document.\nFor more details and examples, see ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html",children:"Controlling Access to Amazon Kinesis Data"})," in the Amazon docs."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The AWS ",(0,r.jsx)(n.strong,{children:"access key"})," and ",(0,r.jsx)(n.strong,{children:"secret access key"})," for the user.\nSee the ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/",children:"AWS blog"})," for help finding these credentials."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1404/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Amazon Kinesis source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/awsAccessKeyId"})})}),(0,r.jsx)(n.td,{children:"AWS access key ID"}),(0,r.jsx)(n.td,{children:"Part of the AWS credentials that will be used to connect to Kinesis."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Required, ",(0,r.jsx)(n.code,{children:'"example-aws-access-key-id"'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/awsSecretAccessKey"})})}),(0,r.jsx)(n.td,{children:"AWS secret access key"}),(0,r.jsx)(n.td,{children:"Part of the AWS credentials that will be used to connect to Kinesis."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Required, ",(0,r.jsx)(n.code,{children:'"example-aws-secret-access-key"'})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/endpoint"})}),(0,r.jsx)(n.td,{children:"AWS endpoint"}),(0,r.jsx)(n.td,{children:"The AWS endpoint URI to connect to, useful if you're capturing from a kinesis-compatible API that isn't provided by AWS."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/region"})})}),(0,r.jsx)(n.td,{children:"AWS region"}),(0,r.jsx)(n.td,{children:"The name of the AWS region where the Kinesis stream is located."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsxs)(n.td,{children:["Required, ",(0,r.jsx)(n.code,{children:'"us-east-1"'})]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Stream name."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.p,{children:"A minimal capture definition will look like the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-kinesis:dev\n        config:\n          awsAccessKeyId: "example-aws-access-key-id"\n          awsSecretAccessKey: "example-aws-secret-access-key"\n          region: "us-east-1"\n    bindings:\n      - resource:\n          stream: ${STREAM_NAME}\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Your capture definition will likely be more complex, with additional bindings for each Kinesis stream."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/pr-preview/pr-1404/concepts/captures#pull-captures",children:"Learn more about capture definitions."}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);