"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5306],{57711:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=i(74848),l=i(28453),r=i(61114);const s={sidebar_position:2},a="Edit a draft created in the web app",d={id:"guides/flowctl/edit-draft-from-webapp",title:"Edit a draft created in the web app",description:"When you create or edit tasks in the web app, your work is periodically saved as a draft.",source:"@site/docs/guides/flowctl/edit-draft-from-webapp.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/edit-draft-from-webapp",permalink:"/pr-preview/pr-1395/guides/flowctl/edit-draft-from-webapp",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/edit-draft-from-webapp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Edit a Flow specification locally",permalink:"/pr-preview/pr-1395/guides/flowctl/edit-specification-locally"},next:{title:"Create a derivation with flowctl",permalink:"/pr-preview/pr-1395/guides/flowctl/create-derivation"}},c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Identify the draft and pull it locally",id:"identify-the-draft-and-pull-it-locally",level:2},{value:"Edit the draft and publish",id:"edit-the-draft-and-publish",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"edit-a-draft-created-in-the-web-app",children:"Edit a draft created in the web app"}),"\n",(0,n.jsxs)(t.p,{children:["When you ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/guides/create-dataflow",children:"create"})," or ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/guides/edit-data-flows",children:"edit"})," tasks in the web app, your work is periodically saved as a ",(0,n.jsx)(t.strong,{children:"draft"}),".\nSpecifically, each time you click the ",(0,n.jsx)(t.strong,{children:"Next"})," button to reveal the ",(0,n.jsx)(t.strong,{children:"Save and Publish"})," button, a draft is saved."]}),"\n",(0,n.jsx)(t.p,{children:"If you navigate away from your workflow in the web app before publishing, or if you simply prefer to finish up with flowctl,\nyou can pull the draft into a local environment, finish making changes, and publish the task."}),"\n",(0,n.jsx)(r.A,{chart:"\n\tgraph LR;\n    a[Catalog];\n    d[Local files];\n    c[Draft];\n    d-- 2: Author to draft --\x3ec;\n    c-- 1: Pull draft --\x3ed;\n    c-- 3: Publish draft --\x3ea;\n"}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"To complete this workflow, you need:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["An ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/getting-started/installation",children:"Estuary account"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/getting-started/installation#get-started-with-the-flow-cli",children:"flowctl installed locally"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"identify-the-draft-and-pull-it-locally",children:"Identify the draft and pull it locally"}),"\n",(0,n.jsx)(t.p,{children:"Drafts aren't currently visible in the Flow web app, but you can get a list with flowctl."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Authorize flowctl."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Go to the ",(0,n.jsx)(t.a,{href:"https://dashboard.estuary.dev/admin/api",children:"CLI-API tab of the web app"})," and copy your access token."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run ",(0,n.jsx)(t.code,{children:"flowctl auth token --token <paste-token-here>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run ",(0,n.jsx)(t.code,{children:"flowctl draft list"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"flowctl outputs a table of all the drafts to which you have access, from oldest to newest."}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Use the name and timestamp to find the draft you're looking for."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Each draft has an ",(0,n.jsx)(t.strong,{children:"ID"}),", and most have a name in the ",(0,n.jsx)(t.strong,{children:"Details"})," column. Note the ",(0,n.jsx)(t.strong,{children:"# of Specs"})," column.\nFor drafts created in the web app, materialization drafts will always contain one specification.\nA number higher than 1 indicates a capture with its associated collections."]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Copy the draft ID."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the draft: ",(0,n.jsx)(t.code,{children:"flowctl draft select --id <paste-id-here>"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Pull the draft source files to your working directory: ",(0,n.jsx)(t.code,{children:"flowctl draft develop"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Browse the source files."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The source files and their directory structure will look slightly different depending on the draft.\nRegardless, there will always be a top-level file called ",(0,n.jsx)(t.code,{children:"flow.yaml"})," that ",(0,n.jsx)(t.em,{children:"imports"})," all other YAML files,\nwhich you'll find in a subdirectory named for your catalog prefix.\nThese, in turn, contain the specifications you'll want to edit."]}),"\n",(0,n.jsx)(t.h2,{id:"edit-the-draft-and-publish",children:"Edit the draft and publish"}),"\n",(0,n.jsx)(t.p,{children:"Next, you'll make changes to the specification(s), test, and publish the draft."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Open the YAML files that contain the specification you want to edit."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Make changes. For guidance on how to construct Flow specifications, see the documentation for the entity type:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/concepts/captures#specification",children:"Captures"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/concepts/collections#specification",children:"Collections"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/concepts/materialization#specification",children:"Materializations"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["When you're done, sync the local work to the global draft: ",(0,n.jsx)(t.code,{children:"flowctl draft author --source flow.yaml"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Specifying the top-level ",(0,n.jsx)(t.code,{children:"flow.yaml"})," file as the source ensures that all entities in the draft are imported."]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Publish the draft: ",(0,n.jsx)(t.code,{children:"flowctl draft publish"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Once this operation completes successfully, check to verify if the entity or entities are live. You can:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Go to the appropriate tab in the Flow web app."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Run ",(0,n.jsx)(t.code,{children:"flowctl catalog list"}),", filtering by ",(0,n.jsx)(t.code,{children:"--name"}),", ",(0,n.jsx)(t.code,{children:"--prefix"}),", or entity type, for example ",(0,n.jsx)(t.code,{children:"--capture"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you're not satisfied with the published entities, you can continue to edit them.\nSee the other guides for help:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/guides/edit-data-flows",children:"Edit in the web app"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/pr-preview/pr-1395/guides/flowctl/edit-specification-locally",children:"Edit with flowctl"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},61114:(e,t,i)=>{i.d(t,{A:()=>s});var n=i(96540),l=i(29880),r=i(74848);l.K.initialize({startOnLoad:!0});const s=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{l.K.contentLoaded()}),[]),(0,r.jsx)("div",{className:"mermaid",children:t})}}}]);