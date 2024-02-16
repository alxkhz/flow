(self.webpackChunksite=self.webpackChunksite||[]).push([[2708],{1504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(7294),o=a(2764);o.Z.initialize({startOnLoad:!0});const s=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{o.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},9683:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),s=a(1504);const i={},r="Concepts",l={unversionedId:"concepts/README",id:"concepts/README",title:"Concepts",description:"Flow helps you define data pipelines, known as Data Flows, that connect multiple data systems, APIs, and storage, and optionally transform data along the way.",source:"@site/docs/concepts/README.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/pr-preview/pr-1383/concepts/",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Schema evolution",permalink:"/pr-preview/pr-1383/guides/schema-evolution"},next:{title:"Catalog",permalink:"/pr-preview/pr-1383/concepts/catalogs"}},c={},p=[{value:"Working with Flow",id:"working-with-flow",level:2},{value:"Web application",id:"web-application",level:3},{value:"flowctl",id:"flowctl",level:3},{value:"Essential concepts",id:"essential-concepts",level:2},{value:"Catalog",id:"catalog",level:3},{value:"Collections",id:"collections",level:3},{value:"Captures",id:"captures",level:3},{value:"Materializations",id:"materializations",level:3},{value:"Endpoints",id:"endpoints",level:3},{value:"Connectors",id:"connectors",level:3},{value:"Intermediate concepts",id:"intermediate-concepts",level:2},{value:"Derivations",id:"derivations",level:3},{value:"Schemas",id:"schemas",level:3},{value:"Reductions",id:"reductions",level:3},{value:"Tests",id:"tests",level:3},{value:"Tasks",id:"tasks",level:3},{value:"Resources and bindings",id:"resources-and-bindings",level:3},{value:"Storage mappings",id:"storage-mappings",level:3},{value:"Advanced concepts",id:"advanced-concepts",level:2},{value:"Journals",id:"journals",level:3},{value:"Task shards",id:"task-shards",level:3},{value:"Projections",id:"projections",level:3}],d={toc:p},u="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"Flow helps you define data pipelines, known as ",(0,o.kt)("strong",{parentName:"p"},"Data Flows"),", that connect multiple data systems, APIs, and storage, and optionally transform data along the way.\nData Flows are defined by a set of ",(0,o.kt)("strong",{parentName:"p"},"Flow specifications")," and deployed using either the web application or the command-line interface."),(0,o.kt)("p",null,"This page introduces concepts and terms that will help you begin working with Flow and better understand its underlying mechanisms.\nThese concepts are discussed in more detail on subsequent pages."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(700).Z,width:"960",height:"540"})),(0,o.kt)("h2",{id:"working-with-flow"},"Working with Flow"),(0,o.kt)("p",null,"There are two main environments in which you can work with Flow:\nthe web application or your preferred local environment using the flowctl command-line tool."),(0,o.kt)("h3",{id:"web-application"},"Web application"),(0,o.kt)("p",null,"The Flow web application is where you'll most likely create, monitor, and update your Data Flows.\nYou can find it at ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev"},"dashboard.estuary.dev"),".\nThe app is backed by secure, cloud-hosted infrastructure that Estuary manages."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/web-app"},"Take a tour of the web app"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/guides/create-dataflow"},"Create your first Data Flow with the web app"),"."),(0,o.kt)("h3",{id:"flowctl"},"flowctl"),(0,o.kt)("p",null,"flowctl is a command-line interface for working with Flow's public API.\nUsing flowctl, developers can inspect, edit, test, and publish Data Flows \u2014 just as with the web application.\nFor example, you can create a Data Flow with the web app, and then use flowctl to fetch it into files that you manage within a Git repo."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/flowctl"},"Learn more about flowctl")),(0,o.kt)("h2",{id:"essential-concepts"},"Essential concepts"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In this section, you'll find the most important Flow terms and concepts. If you're new to Flow, start here.")),(0,o.kt)("p",null,"A complete end-to-end ",(0,o.kt)("strong",{parentName:"p"},"Data Flow")," between two systems has three components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Capture"),": Flow ingests data from an outside source."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Collections"),": Flow maintains the captured data in cloud storage."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Materialization"),": Flow pushes data to an outside destination.")),(0,o.kt)(s.Z,{chart:"\n\tgraph LR;\n\t\tCapture--\x3eCollection;\n        Collection--\x3eMaterialization;\n",mdxType:"Mermaid"}),(0,o.kt)("p",null,"It may also include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Derivations"),": You apply a transformation to data in a collection, resulting in a new collection.")),(0,o.kt)("p",null,"All of these entities are described in the ",(0,o.kt)("strong",{parentName:"p"},"catalog"),"."),(0,o.kt)("h3",{id:"catalog"},"Catalog"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"catalog")," is the set of active entities that comprise all ",(0,o.kt)("strong",{parentName:"p"},"Data Flows"),": captures, materializations, derivations, collections, schemas, tests, and more."),(0,o.kt)("p",null,"All catalog entities are defined in ",(0,o.kt)("strong",{parentName:"p"},"Flow specification files")," \u2014 either manually, by you, or generated by the Flow web app. You create the specifications as ",(0,o.kt)("strong",{parentName:"p"},"drafts"),", and ",(0,o.kt)("strong",{parentName:"p"},"publish")," them to add them to the catalog."),(0,o.kt)("p",null,"You can mix and match catalog entities to create a variety of Data Flows."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/catalogs"},"Learn more about the catalog")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"collections"},"Collections"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Collections")," represent datasets within Flow.\nAll captured documents are written to a collection, and all materialized documents are read from a collection."),(0,o.kt)("p",null,"Collections are a real-time data lake.\nLike a traditional data lake, the documents that make up a collection are stored as plain JSON in your cloud storage bucket.\nUnlike a traditional data lake, updates to the collection are reflected downstream in the data flow\nwithin milliseconds."),(0,o.kt)("p",null,"Documents in collections are stored indefinitely in your cloud storage bucket (or may be managed with your regular bucket lifecycle policies).\nThis means that the full historical content of a collection is available to support future data operations and perform backfills without going back to the source."),(0,o.kt)("p",null,"Each collection has a keyed ",(0,o.kt)("a",{parentName:"p",href:"#schemas"},"schema")," against which incoming documents are validated.\nThis ensures that data is always clean and organized."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/collections"},"Learn more about collections")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"captures"},"Captures"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"capture")," is a Flow task that ingests data from an external source into one or more Flow collections.\nDocuments continuously move from the source into Flow;\nas new documents become available at the source,\nFlow validates their schema and adds them to their corresponding collection.\nCaptures interface with source systems using ",(0,o.kt)("a",{parentName:"p",href:"#connectors"},"connectors"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/captures"},"Learn more about captures")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"materializations"},"Materializations"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"materialization")," is a Flow task that pushes data from one or more collections\nto an external destination.\nDocuments continuously moves from each Flow collection to the destination.\nMaterializations are the conceptual inverse of ",(0,o.kt)("strong",{parentName:"p"},"captures.")),(0,o.kt)("p",null,"As new documents become available within bound collections, the materialization\nkeeps the destination up to date within milliseconds, or as fast as that system allows.\nMaterializations interface with destinations using ",(0,o.kt)("a",{parentName:"p",href:"#connectors"},"connectors"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/materialization"},"Learn more about materializations")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Endpoints")," are the source systems from which Flow captures data and the destination systems to which Flow materializes data. All kinds of data systems can be endpoints, including databases, key/value stores, streaming pub/sub systems, SaaS products, and cloud storage locations."),(0,o.kt)("p",null,"Flow connects to this wide variety of endpoints using ",(0,o.kt)("strong",{parentName:"p"},"connectors"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connectors")," are plugin components that allow Flow to interface with endpoint data systems.\nThey power captures and materializations."),(0,o.kt)("p",null,"Flow uses an open-source connector model.\nMany connectors are made by Estuary, and others are made by third parties.\nBecause connectors are open-source and kept separate from Flow itself,\nnew integrations can be added and updated quickly.\nThis is important, as the landscape of data systems and platforms is constantly evolving."),(0,o.kt)("p",null,"All currently supported connectors are ready to use in the Flow web application.\nThey're also available as Docker images, each encapsulating the details of working with\na particular source or destination system."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/connectors"},"Learn more about connectors")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"intermediate-concepts"},"Intermediate concepts"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"In this section, you'll find important concepts that are optional for basic usage.\nRead this to unlock more powerful workflows.")),(0,o.kt)("h3",{id:"derivations"},"Derivations"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"derivation")," is a collection that results from the transformation of one or more other collections,\nwhich is continuously updated in sync with its source collection(s)."),(0,o.kt)("p",null,"You can use derivations to map, reshape, and filter documents.\nThey can also be used to tackle complex stateful streaming workflows,\nincluding joins and aggregations,\nwithout windowing and scaling limitations."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"derivations/"},"Learn more about derivations")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"schemas"},"Schemas"),(0,o.kt)("p",null,"All collections in Flow have an associated\n",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/"},"JSON schema"),"\nagainst which documents are validated every time they're written or read.\nSchemas are critical to how Flow ensures the integrity of your data.\nFlow validates your documents to ensure that\nbad data doesn't make it into your collections \u2014 or worse,\ninto downstream data products!"),(0,o.kt)("p",null,"JSON schema is a flexible standard for representing structure, invariants,\nand other constraints over your documents.\nSchemas can be very permissive, highly exacting, or somewhere in between."),(0,o.kt)("p",null,"Flow pauses catalog tasks when documents don't match the collection schema,\nalerting you to the mismatch and allowing you to fix it before it creates a bigger problem."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/schemas"},"Learn more about schemas")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"reductions"},"Reductions"),(0,o.kt)("p",null,"Every Flow collection ",(0,o.kt)("a",{parentName:"p",href:"#schemas"},"schema")," includes a  ",(0,o.kt)("strong",{parentName:"p"},"key"),".\nThe key is used to identify collection documents and determine how they are grouped.\nWhen a collection is materialized into a database table, for example, its key becomes\nthe SQL primary key of the materialized table."),(0,o.kt)("p",null,"Flow also uses the key to ",(0,o.kt)("strong",{parentName:"p"},"reduce")," documents in collections, making storage and materializations more efficient.\nIf multiple documents of a given key are added to a collection,\nby default, the most recent document supersedes all previous documents of that key."),(0,o.kt)("p",null,"You can exert more control over your data by changing the default reduction strategy.\nBy doing so, you can deeply merge documents, maintain running counts,\nand achieve other complex aggregation behaviors."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/schemas#reductions"},"Learn more about reductions")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tests"},"Tests"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tests")," become an important part of your Data Flows when you add derivations and customized reduction behavior.\nYou use tests to verify the end-to-end behavior of your collections and derivations."),(0,o.kt)("p",null,"A test is a sequence of ingestion or verification steps.\nIngestion steps ingest one or more document fixtures into a collection,\nand verification steps assert that the contents of another derived collection match a test expectation."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/tests"},"Learn more about tests")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,"Captures, derivations, and materializations are collectively referred to as catalog ",(0,o.kt)("strong",{parentName:"p"},"tasks"),'.\nThey are the "active" components of a Data Flow, each running continuously and reacting to documents\nas they become available.'),(0,o.kt)("p",null,"Collections, by way of comparison, are inert. They reflect data at rest, and are acted upon by\ncatalog tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A capture adds documents to a collection pulled from a source endpoint."),(0,o.kt)("li",{parentName:"ul"},"A derivation updates a collection by applying transformations to other collections."),(0,o.kt)("li",{parentName:"ul"},"A materialization reacts to changes of a collection to update a destination endpoint.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"resources-and-bindings"},"Resources and bindings"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"resource")," is an addressable collection of data within a source or destination system.\nThe exact meaning of a resource is up to the endpoint and its connector. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resources of a database endpoint might be its individual tables."),(0,o.kt)("li",{parentName:"ul"},"Resources of a Kafka cluster might be its topics."),(0,o.kt)("li",{parentName:"ul"},"Resources of a SaaS connector might be its various API feeds.")),(0,o.kt)("p",null,"When you create capture or materialization, it connects a collection to a resource through a ",(0,o.kt)("strong",{parentName:"p"},"binding"),".\nA given capture or materialization may have multiple bindings, which connect multiple collections to different resources."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"storage-mappings"},"Storage mappings"),(0,o.kt)("p",null,"Flow ",(0,o.kt)("a",{parentName:"p",href:"#collections"},"collections")," use cloud storage buckets for the durable storage of data.\nStorage mappings define how Flow maps your various collections into your storage buckets and prefixes."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/storage-mappings"},"Learn more about storage mappings")),(0,o.kt)("h2",{id:"advanced-concepts"},"Advanced concepts"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This section discusses advanced Flow concepts. The information here unlocks\na more technical understanding of how Flow works, and may be helpful in advanced use cases.")),(0,o.kt)("h3",{id:"journals"},"Journals"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Journals")," provide the low-level storage for Flow collections.\nEach logical and physical partition of a collection is backed by a journal."),(0,o.kt)("p",null,"Task ",(0,o.kt)("a",{parentName:"p",href:"#task-shards"},"shards")," also use journals to provide for their durability\nand fault tolerance.\nEach shard has an associated ",(0,o.kt)("strong",{parentName:"p"},"recovery log"),", which is a journal into which\ninternal checkpoint states are written."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/advanced/journals"},"Learn more about journals")),(0,o.kt)("h3",{id:"task-shards"},"Task shards"),(0,o.kt)("p",null,"Task ",(0,o.kt)("strong",{parentName:"p"},"shards")," are the unit of execution for a catalog ",(0,o.kt)("a",{parentName:"p",href:"#tasks"},"task"),".\nA single task can have many shards, which allow the task to scale across\nmany machines to achieve more throughput and parallelism."),(0,o.kt)("p",null,"Shards are created and managed by the Flow runtime.\nEach shard represents a slice of the overall work of the catalog task,\nincluding its processing status and associated internal checkpoints.\nCatalog tasks are created with a single shard,\nwhich can be repeatedly subdivided at any time \u2014 with no downtime \u2014 to\nincrease the processing capacity of the task."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/advanced/shards"},"Learn more about shards")),(0,o.kt)("h3",{id:"projections"},"Projections"),(0,o.kt)("p",null,"Flow leverages your JSON schemas to produce other types of schemas as needed,\nsuch as TypeScript types and SQL ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statements."),(0,o.kt)("p",null,"In many cases these projections provide comprehensive end-to-end type safety\nof Data Flows and their TypeScript transformations, all statically verified\nat build time."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/advanced/projections"},"Learn more about projections")))}h.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function o(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id=1748},700:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/at-a-glance-013b784deb2b72b4632eee51e5b90252.png"}}]);