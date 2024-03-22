"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[993],{20041:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=s(74848),t=s(28453);const i={},c="Amazon Redshift",d={id:"reference/Connectors/capture-connectors/amazon-redshift",title:"Amazon Redshift",description:"This connector captures data from your Amazon Redshift cluster into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-redshift.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-redshift",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/amazon-redshift",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-redshift.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Salesforce \u2014 Real-time data",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/Salesforce/salesforce-real-time"},next:{title:"BigQuery Batch Query Connector",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/bigquery-batch"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"amazon-redshift",children:"Amazon Redshift"}),"\n",(0,n.jsx)(r.p,{children:"This connector captures data from your Amazon Redshift cluster into Flow collections."}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://ghcr.io/estuary/source-redshift:dev",children:(0,n.jsx)(r.code,{children:"ghcr.io/estuary/source-redshift:dev"})})," provides the latest connector image. You can access past image versions by following the link in your browser."]}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(r.p,{children:"To use this connector, you'll need:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Access credentials for connecting to your Amazon Redshift cluster."}),"\n",(0,n.jsx)(r.li,{children:"Properly configured IAM roles for the necessary permissions."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(r.p,{children:["You can configure the Redshift source connector either through the Flow web app or by directly editing the Flow specification file. For more information on using this connector, see our guide on ",(0,n.jsx)(r.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"}),". The values and specification sample below provide configuration details that are specific to the Amazon Redshift source connector."]}),"\n",(0,n.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/host"})})}),(0,n.jsx)(r.td,{children:"Host"}),(0,n.jsx)(r.td,{children:"Hostname or IP address of your Redshift cluster."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/port"})})}),(0,n.jsx)(r.td,{children:"Port"}),(0,n.jsx)(r.td,{children:"Port number for the cluster."}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"Default"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/database"})})}),(0,n.jsx)(r.td,{children:"Database Name"}),(0,n.jsx)(r.td,{children:"Name of the database to capture data from."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/user"})})}),(0,n.jsx)(r.td,{children:"User"}),(0,n.jsx)(r.td,{children:"Database user with necessary permissions."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/password"})})}),(0,n.jsx)(r.td,{children:"Password"}),(0,n.jsx)(r.td,{children:"Password for the specified database user."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/schemas"})})}),(0,n.jsx)(r.td,{children:"Schemas"}),(0,n.jsx)(r.td,{children:"List of schemas to include."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/jdbc_params"})})}),(0,n.jsx)(r.td,{children:"JDBC URL Params"}),(0,n.jsx)(r.td,{children:"Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{})]})]})]}),"\n",(0,n.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/table"})})}),(0,n.jsx)(r.td,{children:"Table Name"}),(0,n.jsx)(r.td,{children:"Name of the table to capture."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/cursor_field"})})}),(0,n.jsx)(r.td,{children:"User-defined Cursor"}),(0,n.jsx)(r.td,{children:"Field for incremental syncs. Uses ascending values to ensure queries are sequential."}),(0,n.jsx)(r.td,{children:"string or integer"}),(0,n.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-redshift:dev\n        config:\n          host: "example-redshift-cluster.us-east-2.redshift.amazonaws.com"\n          port: 5439\n          database: "sample_db"\n          user: "sample_user"\n          password: "sample_password"\n          schemas: "public"\n          jdbc_params: "key1=value1&key2=value2&key3=value3"\n    bindings:\n      - resource:\n          table: users\n          cursor_field: cursor\n        target: ${PREFIX}/users\n'})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>d});var n=s(96540);const t={},i=n.createContext(t);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);