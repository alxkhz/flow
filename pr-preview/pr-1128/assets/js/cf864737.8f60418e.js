(self.webpackChunksite=self.webpackChunksite||[]).push([[5786],{1504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var o=a(7294),i=a(2764);i.Z.initialize({startOnLoad:!0});const n=e=>{let{chart:t}=e;return(0,o.useEffect)((()=>{i.Z.contentLoaded()}),[]),o.createElement("div",{className:"mermaid"},t)}},5355:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var o=a(7462),i=(a(7294),a(3905)),n=a(1504);const l={sidebar_position:1},s="Catalog",r={unversionedId:"concepts/catalogs",id:"concepts/catalogs",title:"Catalog",description:"The catalog is the set of published entities that comprise all Data Flows: captures, materializations, derivations, collections, schemas, tests, and more.",source:"@site/docs/concepts/catalogs.md",sourceDirName:"concepts",slug:"/concepts/catalogs",permalink:"/pr-preview/pr-1128/concepts/catalogs",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/catalogs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/pr-preview/pr-1128/concepts/"},next:{title:"Captures",permalink:"/pr-preview/pr-1128/concepts/captures"}},c={},p=[{value:"Data Flows",id:"data-flows",level:2},{value:"Flow specification files",id:"flow-specification-files",level:2},{value:"In the Flow web app",id:"in-the-flow-web-app",level:3},{value:"With flowctl",id:"with-flowctl",level:3},{value:"Namespace",id:"namespace",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"catalog"},"Catalog"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"catalog")," is the set of published entities that comprise all ",(0,i.kt)("strong",{parentName:"p"},"Data Flows"),": captures, materializations, derivations, collections, schemas, tests, and more."),(0,i.kt)("h2",{id:"data-flows"},"Data Flows"),(0,i.kt)("p",null,"You can mix and match catalog entities to create a variety of Data Flows."),(0,i.kt)("p",null,"The simplest Data Flow has just three entities."),(0,i.kt)(n.Z,{chart:"\n\tgraph LR;\n\t\tCapture--\x3eCollection;\n        Collection--\x3eMaterialization;\n",mdxType:"Mermaid"}),(0,i.kt)("p",null,"It may also be more complex, combining multiple entities of each type."),(0,i.kt)(n.Z,{chart:"\n\tgraph LR;\n\t\tcapture/two--\x3ecollection/D;\n\t\tcapture/one--\x3ecollection/C;\n\t\tcapture/one--\x3ecollection/A;\n        collection/A--\x3ederivation/B;\n        collection/D--\x3ederivation/E;\n        collection/C--\x3ederivation/E;\n        derivation/B--\x3ederivation/E;\n\t\tcollection/D--\x3ematerialization/one;\n\t\tderivation/E--\x3ematerialization/two;\n",mdxType:"Mermaid"}),(0,i.kt)("h2",{id:"flow-specification-files"},"Flow specification files"),(0,i.kt)("p",null,"Catalog entities are defined and described in Flow ",(0,i.kt)("strong",{parentName:"p"},"specification files."),"\nThese YAML files contain the configuration details that each entity requires."),(0,i.kt)("p",null,"You work on specification files as ",(0,i.kt)("strong",{parentName:"p"},"drafts")," before you publish them to a catalog."),(0,i.kt)("p",null,"There are two ways to create and work with specification files."),(0,i.kt)("h3",{id:"in-the-flow-web-app"},"In the Flow web app"),(0,i.kt)("p",null,"You don't need to write or edit the specification files directly \u2014 the web app is designed to generate them for you.\nYou do have the option to review and edit the generated specification as you create captures and materializations using the ",(0,i.kt)("strong",{parentName:"p"},"Catalog Editor"),"."),(0,i.kt)("h3",{id:"with-flowctl"},"With flowctl"),(0,i.kt)("p",null,"If you prefer a developer workflow, you can also work with specification files directly in your local environment using ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1128/concepts/flowctl"},"flowctl"),". You then ",(0,i.kt)("strong",{parentName:"p"},"publish")," them back to the catalog."),(0,i.kt)("p",null,"A given Data Flow may be described by one specification file, or by many, so long as a top-level file ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1128/concepts/import"},"imports")," all the others."),(0,i.kt)("p",null,"The files use the extension ",(0,i.kt)("inlineCode",{parentName:"p"},"*.flow.yaml")," or are simply named ",(0,i.kt)("inlineCode",{parentName:"p"},"flow.yaml")," by convention.\nUsing this extension activates Flow's VS Code integration and auto-complete.\nFlow integrates with VS Code for development environment support, like auto-complete,\ntooltips, and inline documentation."),(0,i.kt)("p",null,"Depending on your Data Flow, you may also have TypeScript modules,\nJSON schemas, or test fixtures."),(0,i.kt)("h2",{id:"namespace"},"Namespace"),(0,i.kt)("p",null,"All catalog entities (captures, materializations, and collections) are identified by a ",(0,i.kt)("strong",{parentName:"p"},"name"),"\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/teams/manufacturing/anvils"),". Names have directory-like\nprefixes and every name within Flow is globally unique."),(0,i.kt)("p",null,"If you've ever used database schemas to organize your tables and authorize access,\nyou can think of name prefixes as being akin to database schemas with arbitrary nesting."),(0,i.kt)("p",null,"All catalog entities exist together in a single ",(0,i.kt)("strong",{parentName:"p"},"namespace"),".\nAs a Flow customer, you're provisioned one or more high-level prefixes for your organization.\nFurther division of the namespace into prefixes is up to you."),(0,i.kt)("p",null,"Prefixes of the namespace, like ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/teams/manufacturing/"),",\nare the foundation for Flow's ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1128/reference/authentication"},"authorization model"),"."))}m.isMDXComponent=!0},1748:(e,t,a)=>{var o={"./locale":9234,"./locale.js":9234};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=n,e.exports=i,i.id=1748}}]);