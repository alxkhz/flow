(self.webpackChunksite=self.webpackChunksite||[]).push([[3501],{1504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var i=a(7294),l=a(2764);l.Z.initialize({startOnLoad:!0});const r=e=>{let{chart:t}=e;return(0,i.useEffect)((()=>{l.Z.contentLoaded()}),[]),i.createElement("div",{className:"mermaid"},t)}},7160:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>d});var i=a(7462),l=(a(7294),a(3905)),r=a(1504);const n={sidebar_position:2},o="Edit a draft created in the web app",p={unversionedId:"guides/flowctl/edit-draft-from-webapp",id:"guides/flowctl/edit-draft-from-webapp",title:"Edit a draft created in the web app",description:"When you create or edit tasks in the web app, your work is periodically saved as a draft.",source:"@site/docs/guides/flowctl/edit-draft-from-webapp.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/edit-draft-from-webapp",permalink:"/pr-preview/pr-1119/guides/flowctl/edit-draft-from-webapp",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/edit-draft-from-webapp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Edit a Flow specification locally",permalink:"/pr-preview/pr-1119/guides/flowctl/edit-specification-locally"},next:{title:"Create a derivation with flowctl",permalink:"/pr-preview/pr-1119/guides/flowctl/create-derivation"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Identify the draft and pull it locally",id:"identify-the-draft-and-pull-it-locally",level:2},{value:"Edit the draft and publish",id:"edit-the-draft-and-publish",level:2}],c={toc:d},f="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"edit-a-draft-created-in-the-web-app"},"Edit a draft created in the web app"),(0,l.kt)("p",null,"When you ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/guides/create-dataflow"},"create")," or ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/guides/edit-data-flows"},"edit")," tasks in the web app, your work is periodically saved as a ",(0,l.kt)("strong",{parentName:"p"},"draft"),".\nSpecifically, each time you click the ",(0,l.kt)("strong",{parentName:"p"},"Next")," button to reveal the ",(0,l.kt)("strong",{parentName:"p"},"Save and Publish")," button, a draft is saved."),(0,l.kt)("p",null,"If you navigate away from your workflow in the web app before publishing, or if you simply prefer to finish up with flowctl,\nyou can pull the draft into a local environment, finish making changes, and publish the task."),(0,l.kt)(r.Z,{chart:"\n\tgraph LR;\n    a[Catalog];\n    d[Local files];\n    c[Draft];\n    d-- 2: Author to draft --\x3ec;\n    c-- 1: Pull draft --\x3ed;\n    c-- 3: Publish draft --\x3ea;\n",mdxType:"Mermaid"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"To complete this workflow, you need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"An ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/getting-started/installation"},"Estuary account"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/getting-started/installation#get-started-with-the-flow-cli"},"flowctl installed locally")))),(0,l.kt)("h2",{id:"identify-the-draft-and-pull-it-locally"},"Identify the draft and pull it locally"),(0,l.kt)("p",null,"Drafts aren't currently visible in the Flow web app, but you can get a list with flowctl."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Authorize flowctl."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to the ",(0,l.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/admin/api"},"CLI-API tab of the web app")," and copy your access token.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl auth token --token <paste-token-here>"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl draft list")),(0,l.kt)("p",{parentName:"li"},"flowctl outputs a table of all the drafts to which you have access, from oldest to newest.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the name and timestamp to find the draft you're looking for."),(0,l.kt)("p",{parentName:"li"},"Each draft has an ",(0,l.kt)("strong",{parentName:"p"},"ID"),", and most have a name in the ",(0,l.kt)("strong",{parentName:"p"},"Details")," column. Note the ",(0,l.kt)("strong",{parentName:"p"},"# of Specs")," column.\nFor drafts created in the web app, materialization drafts will always contain one specification.\nA number higher than 1 indicates a capture with its associated collections.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the draft ID.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the draft: ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl draft select --id <paste-id-here>"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pull the draft source files to your working directory: ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl draft develop"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Browse the source files."),(0,l.kt)("p",{parentName:"li"},"The source files and their directory structure will look slightly different depending on the draft.\nRegardless, there will always be a top-level file called ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.yaml")," that ",(0,l.kt)("em",{parentName:"p"},"imports")," all other YAML files,\nwhich you'll find in a subdirectory named for your catalog prefix.\nThese, in turn, contain the specifications you'll want to edit."))),(0,l.kt)("h2",{id:"edit-the-draft-and-publish"},"Edit the draft and publish"),(0,l.kt)("p",null,"Next, you'll make changes to the specification(s), test, and publish the draft."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open the YAML files that contain the specification you want to edit.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make changes. For guidance on how to construct Flow specifications, see the documentation for the entity type:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1119/concepts/captures#specification"},"Captures")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1119/concepts/collections#specification"},"Collections")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1119/concepts/materialization#specification"},"Materializations")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"When you're done, sync the local work to the global draft: ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl draft author --source flow.yaml"),"."),(0,l.kt)("p",{parentName:"li"},"Specifying the top-level ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file as the source ensures that all entities in the draft are imported.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Publish the draft: ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl draft publish"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once this operation completes successfully, check to verify if the entity or entities are live. You can:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Go to the appropriate tab in the Flow web app.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"flowctl catalog list"),", filtering by ",(0,l.kt)("inlineCode",{parentName:"p"},"--name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--prefix"),", or entity type, for example ",(0,l.kt)("inlineCode",{parentName:"p"},"--capture"),"."))))),(0,l.kt)("p",null,"If you're not satisfied with the published entities, you can continue to edit them.\nSee the other guides for help:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1119/guides/edit-data-flows"},"Edit in the web app"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-1119/guides/flowctl/edit-specification-locally"},"Edit with flowctl"),".")))}u.isMDXComponent=!0},1748:(e,t,a)=>{var i={"./locale":9234,"./locale.js":9234};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}l.keys=function(){return Object.keys(i)},l.resolve=r,e.exports=l,l.id=1748}}]);