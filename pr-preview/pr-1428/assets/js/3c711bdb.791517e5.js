"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5934],{20441:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=i(74848),s=i(28453);const o={sidebar_position:3},r="Edit Data Flows in the web app",a={id:"guides/edit-data-flows",title:"Edit Data Flows in the web app",description:"You can edit existing captures, collection schemas, and materializations in the Flow web app.",source:"@site/docs/guides/edit-data-flows.md",sourceDirName:"guides",slug:"/guides/edit-data-flows",permalink:"/pr-preview/pr-1428/guides/edit-data-flows",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/edit-data-flows.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Amazon S3 to Snowflake",permalink:"/pr-preview/pr-1428/guides/system-specific-dataflows/s3-to-snowflake"},next:{title:"flowctl guides",permalink:"/pr-preview/pr-1428/guides/flowctl/"}},c={},l=[{value:"Edit a capture",id:"edit-a-capture",level:2},{value:"Advanced editing",id:"advanced-editing",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"edit-data-flows-in-the-web-app",children:"Edit Data Flows in the web app"}),"\n",(0,t.jsxs)(n.p,{children:["You can edit existing captures, collection schemas, and materializations in the Flow web app.\nFor a tour of the web app, ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/web-app",children:"start here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["There are separate workflows for editing ",(0,t.jsx)(n.a,{href:"#edit-a-capture",children:"captures"})," and ",(0,t.jsx)(n.a,{href:"#edit-a-materialization",children:"materializations"}),".\nYou can edit a collection schema using Flow's ",(0,t.jsx)(n.strong,{children:"Schema Inference"})," tool by editing either a capture or materialization associated\nwith that collection."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Although you edit components of your Data Flows separately, they are all connected.\nFlow's ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/advanced/evolutions",children:"schema evolution"})," and ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/captures#automatically-update-captures",children:"AutoDiscover"})," features help prevent common errors, but it's still important to be mindful of your edits' potential effects."]})}),"\n",(0,t.jsx)(n.h2,{id:"edit-a-capture",children:"Edit a capture"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://dashboard.estuary.dev/captures",children:"Sources page"})," of the web app."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Locate the capture you'd like to edit. Click the ",(0,t.jsx)(n.strong,{children:"Options"})," button in its table row, then click ",(0,t.jsx)(n.strong,{children:"Edit specification"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The Edit Capture page opens."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Edit the connection to the destination system, if desired. You can either update fields in the Endpoint Config section or manually update the JSON in the Advanced Specification Editor."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"You may have to re-authenticate with the source system. Be sure to have current credentials on hand before editing the endpoint configuration."})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Output Collections"})," browser to add or remove collections from the capture, if desired."]}),"\n",(0,t.jsxs)(n.p,{children:["To refresh your connection with the source and see an updated list of possible collections, click the ",(0,t.jsx)(n.strong,{children:"Refresh"})," button,\nbut be aware that it will overwrite all existing collection selections."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Schema Inference"})," tool, if desired."]}),"\n",(0,t.jsx)(n.p,{children:"This option is available for source systems with permissive schemas, such as NoSQL databases and cloud storage.\nFlow can help you tighten up the schema to be used for downstream tasks in your Data Flow."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Output Collections browser, choose a collection and click its ",(0,t.jsx)(n.strong,{children:"Collection"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Schema Inference"})]}),"\n",(0,t.jsxs)(n.p,{children:["The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/schemas#write-and-read-schemas",children:(0,t.jsx)(n.code,{children:"readSchema"})}),", to use for\ndownstream tasks like materializations and derivations."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Review the new schema and click ",(0,t.jsx)(n.strong,{children:"Apply Inferred Schema"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When you're done making changes, click ",(0,t.jsx)(n.strong,{children:"Next."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Publish"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Editing a capture only affects how it will work going forward.\nData that was captured before editing will reflect the original configuration."}),"\n",(0,t.jsx)(n.h1,{id:"edit-a-materialization",children:"Edit a materialization"}),"\n",(0,t.jsx)(n.p,{children:"To edit a materialization:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://dashboard.estuary.dev/materializations",children:"Destinations page"})," of the web app."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Locate the materialization you'd like to edit. Click the ",(0,t.jsx)(n.strong,{children:"Options"})," button in its table row, then click ",(0,t.jsx)(n.strong,{children:"Edit specification"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The Edit Materialization page opens."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Edit the connection to the destination system, if desired. You can either update fields in the Endpoint Config section or manually update the JSON in the Advanced Specification Editor."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"You may have to re-authenticate with the destination system. Be sure to have current credentials on hand before editing the endpoint configuration."})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Source Collections"})," browser to add or remove collections from the materialization, if desired."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Optionally apply a stricter schema to each collection to use for the materialization."}),"\n",(0,t.jsx)(n.p,{children:"This option is available for collections captured from source systems with permissive schemas, such as NoSQL databases and cloud storage.\nFlow can help you tighten up the schema to be used for downstream tasks in your Data Flow."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the Source Collections browser, choose a collection and click its ",(0,t.jsx)(n.strong,{children:"Collection"})," tab."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Schema Inference"})]}),"\n",(0,t.jsxs)(n.p,{children:["The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/schemas#write-and-read-schemas",children:(0,t.jsx)(n.code,{children:"readSchema"})}),", to use for the materialization."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Review the new schema and click ",(0,t.jsx)(n.strong,{children:"Apply Inferred Schema"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When you're done making changes, click ",(0,t.jsx)(n.strong,{children:"Next."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save and Publish"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Editing a materialization only affects how it will work going forward.\nData that was materialized before editing will reflect the original configuration."}),"\n",(0,t.jsx)(n.h2,{id:"advanced-editing",children:"Advanced editing"}),"\n",(0,t.jsxs)(n.p,{children:["For more fine-grain control over editing, you can use flowctl and work directly on specification files in your local environment.\n",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1428/guides/flowctl/edit-specification-locally",children:"View the tutorial."})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);