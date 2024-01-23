(self.webpackChunksite=self.webpackChunksite||[]).push([[640],{1504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var o=a(7294),n=a(2764);n.Z.initialize({startOnLoad:!0});const i=e=>{let{chart:t}=e;return(0,o.useEffect)((()=>{n.Z.contentLoaded()}),[]),o.createElement("div",{className:"mermaid"},t)}},5418:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=a(7462),n=(a(7294),a(3905)),i=a(1504);const l={},r="Schema evolution",s={unversionedId:"concepts/advanced/evolutions",id:"concepts/advanced/evolutions",title:"Schema evolution",description:"Schema evolutions are a feature you can use to update your whole Data Flow to reflect edits to a collection, preventing your Data Flow from failing due to mismatched components.",source:"@site/docs/concepts/advanced/evolutions.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/evolutions",permalink:"/pr-preview/pr-1350/concepts/advanced/evolutions",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/evolutions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/pr-preview/pr-1350/concepts/tests"},next:{title:"Journals",permalink:"/pr-preview/pr-1350/concepts/advanced/journals"}},c={};(0,n.kt)(i.Z,{chart:"\n  graph LR;\n    Source[Source System]--\x3eCapture;\n\t\tCapture--\x3eCollection;\n    Collection--\x3eMaterialization;\n    Materialization--\x3eDest[Destination System];\n"});const p=[{value:"Introduction",id:"introduction",level:2},{value:"Using evolutions",id:"using-evolutions",level:2},{value:"What do schema evolutions do?",id:"what-do-schema-evolutions-do",level:2},{value:"What causes breaking schema changes?",id:"what-causes-breaking-schema-changes",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"schema-evolution"},"Schema evolution"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Schema evolutions")," are a feature you can use to update your whole Data Flow to reflect edits to a collection, preventing your Data Flow from failing due to mismatched components."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Evolutions are a relatively advanced concept in Flow.\nBefore continuing, you should have a basic understanding of ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/captures"},"Flow captures"),", ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/collections"},"collections"),", ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/schemas"},"schemas"),", and ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/materialization"},"materializations"),".")),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Flow stores your real-times datasets as ",(0,n.kt)("strong",{parentName:"p"},"collections"),", groups of continually updating JSON documents.\n",(0,n.kt)("strong",{parentName:"p"},"Captures")," write data to collections, and ",(0,n.kt)("strong",{parentName:"p"},"materializations")," read data from collections.\nTogether, these three components form a complete Data Flow."),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Derivations can also read data from and write data to collections.\nTo keep things simple in this article, we'll be referring only to captures and materializations.")),(0,n.kt)("p",null,"Each collection and its data are defined by a ",(0,n.kt)("strong",{parentName:"p"},"collection specification"),", or spec.\nThe spec serves as a formal contract between the capture and the materialization, ensuring that data is correctly shaped and moves through the Data Flow without error."),(0,n.kt)("p",null,"The spec includes the collection's ",(0,n.kt)("inlineCode",{parentName:"p"},"key"),", its ",(0,n.kt)("inlineCode",{parentName:"p"},"schema"),", and ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/advanced/projections#logical-partitions"},"logical partitions")," of the collection, if any."),(0,n.kt)("p",null,"When any of these parts change, any capture or materialization writing to or reading from the collection must be updated to approve of the change, otherwise, the Data Flow will fail with an error."),(0,n.kt)("p",null,"You can use Flow's ",(0,n.kt)("strong",{parentName:"p"},"schema evolutions")," feature to quickly and simultaneously update other parts of a Data Flow so you're able to re-start it without error when you introduce a collection change."),(0,n.kt)("p",null,"Collection specs may change for a variety of reasons, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The source system is a database, and someone ran an ",(0,n.kt)("inlineCode",{parentName:"li"},"ALTER TABLE")," statement on a captured table, so you need to update the collection schema (through ",(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-1350/concepts/captures#autodiscover"},"AutoDiscover")," or manually)."),(0,n.kt)("li",{parentName:"ul"},"The source system contains unstructured data, and some data with a different shape was just captured so you need to update the collection schema (through AutoDiscover or manually)."),(0,n.kt)("li",{parentName:"ul"},"Someone manually changed the collection's logical partitions.")),(0,n.kt)("p",null,"Regardless of why or how a spec change is introduced, the effect is the same. Flow will never permit you to publish changes that break this contract between captures and materializations, so you'll need to update the contract."),(0,n.kt)("h2",{id:"using-evolutions"},"Using evolutions"),(0,n.kt)("p",null,"When you attempt to publish a breaking change to a collection in the Flow web app, you get an error message that looks similar to this one:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1649).Z,width:"2498",height:"862"})),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"Apply")," button to trigger an evolution and update all necessary specification to keep your Data Flow functioning. Then, review and publish your draft."),(0,n.kt)("p",null,"If you enabled ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/captures#autodiscover"},"AutoDiscover")," on a capture, any breaking changes that it introduces will trigger an automatic schema evolution, so long as you selected the ",(0,n.kt)("strong",{parentName:"p"},"Breaking change re-versions collections")," option(",(0,n.kt)("inlineCode",{parentName:"p"},"evolveIncompatibleCollections"),")."),(0,n.kt)("h2",{id:"what-do-schema-evolutions-do"},"What do schema evolutions do?"),(0,n.kt)("p",null,"The schema evolution feature is available in the Flow web app when you're editing pre-existing Flow entities.\nIt notices when one of your edit would cause other components of the Data Flow to fail, alerts you, and gives you the option to automatically update the specs of these components to prevent failure."),(0,n.kt)("p",null,"In other words, evolutions happen in the ",(0,n.kt)("em",{parentName:"p"},"draft")," state. Whenever you edit, you create a draft.\nEvolutions add to the draft so that when it is published and updates the active data flow, operations can continue seamlessly."),(0,n.kt)("p",null,"Alternatively, you could manually update all the specs to agree to your edit, but this becomes time-consuming and repetitive."),(0,n.kt)("p",null,"Evolutions can prevent errors resulting from mismatched specs in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Materialize data to a new resource in the endpoint system"),": The evolution updates the affected materialization bindings to increment their ",(0,n.kt)("inlineCode",{parentName:"p"},"backfill")," counter, which causes the materialization to re-create the resource (database table, for example) and backfill it from the beginning."),(0,n.kt)("p",{parentName:"li"}," This is a simpler change, and how evolutions work in most cases.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Re-create the Flow collection with a new name"),": The evolution creates a completely new collection with numerical suffix, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"_v2"),". This collection starts out empty and backfills from the source. The evolution also updates all captures and materializations that reference the old collection to instead reference the new collection, and increments their ",(0,n.kt)("inlineCode",{parentName:"p"},"backfill")," counters."),(0,n.kt)("p",{parentName:"li"}," This is a more complicated change, and evolutions only work this way when necessary: when the collection key or logical partitioning changes."))),(0,n.kt)("p",null,"In either case, the names of the destination resources will remain the same. For example, a materialization to Postgres would drop and re-create the affected tables with the same names they had previously."),(0,n.kt)("p",null,"Also in either case, only the specific bindings that had incompatible changes will be affected. Other bindings will remain untouched, and will not re-backfill."),(0,n.kt)("h2",{id:"what-causes-breaking-schema-changes"},"What causes breaking schema changes?"),(0,n.kt)("p",null,"Though changes to the collection ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," or logical partition can happen, the most common cause of a breaking change is a change to the collection schema."),(0,n.kt)("p",null,"Generally materializations, not captures, require updates following breaking schema changes. This is because the new collection specs are usually discovered from the source, so the capture is edited at the same time as the collection."),(0,n.kt)("p",null,"Consider a collection schema that looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"schema:\n  type: object\n  properties:\n    id: { type: integer }\n    foo: { type: string, format: date-time }\n  required: [id]\nkey: [/id]\n")),(0,n.kt)("p",null,"If you materialized that collection into a relational database table, the table would look something like ",(0,n.kt)("inlineCode",{parentName:"p"},"my_table (id integer primary key, foo timestamptz)"),"."),(0,n.kt)("p",null,"Now, say you edit the collection spec to remove ",(0,n.kt)("inlineCode",{parentName:"p"},"format: date-time")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),". You'd expect the materialized database table to then look like ",(0,n.kt)("inlineCode",{parentName:"p"},"(id integer primary key, foo text)"),". But since the column type of ",(0,n.kt)("inlineCode",{parentName:"p"},"foo")," has changed, this will fail. An easy solution in this case would be to change the name of the table that the collection is materialized into. Evolutions do this by appending a suffix to the original table name. In this case, you'd end up with ",(0,n.kt)("inlineCode",{parentName:"p"},"my_table_v2 (id integer primary key, foo text)"),"."))}d.isMDXComponent=!0},1748:(e,t,a)=>{var o={"./locale":9234,"./locale.js":9234};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=1748},1649:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/ui-evolution-re-create-de574ca2333327fc911cc8ff0e46c5b9.png"}}]);