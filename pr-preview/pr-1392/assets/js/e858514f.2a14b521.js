"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1859],{57182:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=s(74848),t=s(28453);const i={},o="Google Cloud Firestore to Snowflake",l={id:"guides/system-specific-dataflows/firestore-to-dwh",title:"Google Cloud Firestore to Snowflake",description:"This guide walks you through the process of creating an",source:"@site/docs/guides/system-specific-dataflows/firestore-to-dwh.md",sourceDirName:"guides/system-specific-dataflows",slug:"/guides/system-specific-dataflows/firestore-to-dwh",permalink:"/pr-preview/pr-1392/guides/system-specific-dataflows/firestore-to-dwh",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/system-specific-dataflows/firestore-to-dwh.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"System-specific Data Flows",permalink:"/pr-preview/pr-1392/guides/system-specific-dataflows/"},next:{title:"Amazon S3 to Snowflake",permalink:"/pr-preview/pr-1392/guides/system-specific-dataflows/s3-to-snowflake"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Capture from Firestore",id:"capture-from-firestore",level:2},{value:"Materialize to Snowflake",id:"materialize-to-snowflake",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"google-cloud-firestore-to-snowflake",children:"Google Cloud Firestore to Snowflake"}),"\n",(0,r.jsx)(n.p,{children:"This guide walks you through the process of creating an\nend-to-end real-time Data Flow from Google Cloud Firestore to Snowflake using Estuary Flow."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"You'll need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["(Recommended) understanding of the ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/#essential-concepts",children:"basic Flow concepts"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Access to the ",(0,r.jsx)(n.a,{href:"http://dashboard.estuary.dev",children:(0,r.jsx)(n.strong,{children:"Flow web application"})})," through an Estuary account.\nIf you don't have one, visit the web app to register for free."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"Firestore database"})," that contains the data you'd like to move to Snowflake. You ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/firestore/docs/create-database-web-mobile-client-library",children:"create this as part of a Google Firebase project"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A Google service account with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Read access to your Firestore database, via ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/datastore/docs/access/iam",children:"roles/datastore.viewer"}),".\nYou can assign this role when you ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating",children:"create the service account"}),", or ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#single-role",children:"add it to an existing service account"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A generated ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating",children:"JSON service account key"})," for the account."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A Snowflake account with:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A target ",(0,r.jsx)(n.strong,{children:"database"}),", ",(0,r.jsx)(n.strong,{children:"schema"}),", and virtual ",(0,r.jsx)(n.strong,{children:"warehouse"}),"; and a ",(0,r.jsx)(n.strong,{children:"user"})," with a ",(0,r.jsx)(n.strong,{children:"role"})," assigned that grants the appropriate access levels to these resources.\n",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1392/reference/Connectors/materialization-connectors/Snowflake#setup",children:"You can use a script to quickly create all of these items."})," Have these details on hand for setup with Flow."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The account identifier and host URL noted. ",(0,r.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#where-are-account-identifiers-used",children:"The URL is formatted using the account identifier"}),". For example, you might have the account identifier ",(0,r.jsx)(n.code,{children:"orgname-accountname.snowflakecomputing.com"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:["In Estuary Flow, you create ",(0,r.jsx)(n.strong,{children:"Data Flows"})," to transfer data from ",(0,r.jsx)(n.strong,{children:"source"})," systems to ",(0,r.jsx)(n.strong,{children:"destination"})," systems in real time.\nIn this use case, your source is an Google Cloud Firestore NoSQL database and your destination is a Snowflake data warehouse."]}),"\n",(0,r.jsx)(n.p,{children:"After following this guide, you'll have a Data Flow that comprises:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"capture"}),", which ingests data from Firestore"]}),"\n",(0,r.jsxs)(n.li,{children:["Several ",(0,r.jsx)(n.strong,{children:"collection"}),", cloud-backed copies of ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/firestore/docs/data-model",children:"Firestore collections"})," in the Flow system"]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.strong,{children:"materialization"}),", which pushes the collections to Snowflake"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The capture and materialization rely on plug-in components called ",(0,r.jsx)(n.strong,{children:"connectors"}),".\nWe'll walk through how to configure the ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1392/reference/Connectors/capture-connectors/google-firestore",children:"Firestore"})," and ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1392/reference/Connectors/materialization-connectors/Snowflake",children:"Snowflake"})," connectors to integrate these systems with Flow."]}),"\n",(0,r.jsx)(n.h2,{id:"capture-from-firestore",children:"Capture from Firestore"}),"\n",(0,r.jsxs)(n.p,{children:["You'll first create a capture to connect to your Firestore database, which will yield one Flow collection for each ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/firestore/docs/data-model",children:"Firestore collection"})," in your database."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Go to the Flow web application at ",(0,r.jsx)(n.a,{href:"https://dashboard.estuary.dev/",children:"dashboard.estuary.dev"})," and sign in using the\ncredentials provided by your Estuary account manager."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click the ",(0,r.jsx)(n.strong,{children:"Sources"})," tab and choose ",(0,r.jsx)(n.strong,{children:"New Capture"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Find the ",(0,r.jsx)(n.strong,{children:"Google Firestore"})," tile and click ",(0,r.jsx)(n.strong,{children:"Capture"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A form appears with the properties required for a Firestore capture."}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Type a name for your capture."}),"\n",(0,r.jsxs)(n.p,{children:["Your capture name must begin with a ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/catalogs#namespace",children:"prefix"})," to which you ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1392/reference/authentication",children:"have access"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Name"})," field, use the drop-down to select your prefix.\nAppend a unique capture name after the ",(0,r.jsx)(n.code,{children:"/"})," to create the full name, for example, ",(0,r.jsx)(n.code,{children:"acmeCo/myFirestoreCapture"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Fill out the required properties for Firestore."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Database"}),": Flow can autodetect the database name, but you may optionally specify it here. This is helpful if the service account used has access to multiple Firebase projects. Your database name usually follows the format ",(0,r.jsx)(n.code,{children:"projects/$PROJECTID/databases/(default)"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Credentials"}),": The JSON service account key created per the ",(0,r.jsx)(n.a,{href:"#prerequisites",children:"prerequisites"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Flow uses the provided configuration to initiate a connection with Firestore."}),"\n",(0,r.jsx)(n.p,{children:"It maps each available Firestore collection to a possible Flow collection. It also generates minimal schemas for each collection."}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.strong,{children:"Source Collections"})," browser to remove or modify collections. You'll have the chance to tighten up each collection's JSON schema later, when you materialize to Snowflake."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you make any changes to collections, click ",(0,r.jsx)(n.strong,{children:"Next"})," again."]})}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:["Once you're satisfied with the collections to be captured, click ",(0,r.jsx)(n.strong,{children:"Save and Publish"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You'll see a notification when the capture publishes successfully."}),"\n",(0,r.jsx)(n.p,{children:"The data currently in your Firestore database has been captured, and future updates to it will be captured continuously."}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Materialize Collections"})," to continue."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"materialize-to-snowflake",children:"Materialize to Snowflake"}),"\n",(0,r.jsx)(n.p,{children:"Next, you'll add a Snowflake materialization to connect the captured data to its destination: your data warehouse."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Locate the ",(0,r.jsx)(n.strong,{children:"Snowflake"})," tile and click ",(0,r.jsx)(n.strong,{children:"Materialization"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"A form appears with the properties required for a Snowflake materialization."}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Choose a unique name for your materialization like you did when naming your capture; for example, ",(0,r.jsx)(n.code,{children:"acmeCo/mySnowflakeMaterialization"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fill out the required properties for Snowflake (you should have most of these handy from the ",(0,r.jsx)(n.a,{href:"#prerequisites",children:"prerequisites"}),")."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Host URL"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Account"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"User"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Password"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Database"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Schema"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Warehouse"}),": optional"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Role"}),": optional"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Flow uses the provided configuration to initiate a connection to Snowflake."}),"\n",(0,r.jsxs)(n.p,{children:["You'll be notified if there's an error. In that case, fix the configuration form or Snowflake setup as needed and click ",(0,r.jsx)(n.strong,{children:"Next"})," to try again."]}),"\n",(0,r.jsxs)(n.p,{children:["Once the connection is successful, the Endpoint Config collapses and the ",(0,r.jsx)(n.strong,{children:"Source Collections"})," browser becomes prominent.\nIt shows the collections you captured previously.\nEach of them will be mapped to a Snowflake table."]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.strong,{children:"Source Collections"})," browser, optionally change the name in the ",(0,r.jsx)(n.strong,{children:"Table"})," field for each collection."]}),"\n",(0,r.jsx)(n.p,{children:"These will be the names of the output tables in Snowflake."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For each table, choose whether to ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1392/reference/Connectors/materialization-connectors/Snowflake#delta-updates",children:"enable delta updates"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"For each collection, apply a stricter schema to be used for the materialization."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Firestore has a flat data structure.\nTo materialize data effectively from Firestore to Snowflake, you should apply a schema can translate to a table structure.\nFlow's ",(0,r.jsx)(n.strong,{children:"Schema Inference"})," tool can help."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In the Source Collections browser, choose a collection and click its ",(0,r.jsx)(n.strong,{children:"Collection"})," tab."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Schema Inference"})]}),"\n",(0,r.jsxs)(n.p,{children:["The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,r.jsx)(n.code,{children:"readSchema"}),", to use for the materialization."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Review the new schema and click ",(0,r.jsx)(n.strong,{children:"Apply Inferred Schema"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Next"})," to apply the changes you made to collections."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Click ",(0,r.jsx)(n.strong,{children:"Save and Publish"}),". You'll see a notification when the full Data Flow publishes successfully."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,r.jsx)(n.p,{children:"Your Data Flow has been deployed, and will run continuously until it's stopped. Updates in your Firestore database will be reflected in your Snowflake table as they occur."}),"\n",(0,r.jsxs)(n.p,{children:["You can advance your Data Flow by adding a ",(0,r.jsx)(n.strong,{children:"derivation"}),". Derivations are real-time data transformations.\nSee the ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1392/guides/flowctl/create-derivation",children:"guide to create a derivation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var r=s(96540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);