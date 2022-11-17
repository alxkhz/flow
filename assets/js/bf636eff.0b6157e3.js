"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},r="Materializations",s={unversionedId:"concepts/materialization",id:"concepts/materialization",title:"Materializations",description:"A materialization is how Flow pushes data to an external destination.",source:"@site/docs/concepts/materialization.md",sourceDirName:"concepts",slug:"/concepts/materialization",permalink:"/concepts/materialization",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/materialization.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Collections",permalink:"/concepts/collections"},next:{title:"Connectors",permalink:"/concepts/connectors"}},l={},c=[{value:"Discovery",id:"discovery",level:2},{value:"Specification",id:"specification",level:2},{value:"How continuous materialization works",id:"how-continuous-materialization-works",level:2},{value:"Projected fields",id:"projected-fields",level:2},{value:"Partition selectors",id:"partition-selectors",level:2},{value:"Destination-specific performance",id:"destination-specific-performance",level:2},{value:"Delta updates",id:"delta-updates",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"materializations"},"Materializations"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"materialization")," is how Flow pushes data to an external destination."),(0,o.kt)("p",null,"Materializations are a type of Flow ",(0,o.kt)("strong",{parentName:"p"},"task"),".\nThey connect to an external destination system,\nor ",(0,o.kt)("strong",{parentName:"p"},"endpoint"),", and bind one or more Flow collections to resources at the endpoint, such as database tables."),(0,o.kt)("p",null,"As documents added to the bound collections,\nthe materialization continuously pushes it to the destination resources, where it is reflected with very low latency.\nMaterializations can process ",(0,o.kt)("a",{parentName:"p",href:"/concepts/collections#documents"},"documents")," up to 16 MB in size."),(0,o.kt)("p",null,"Materializations are the conceptual inverse of ",(0,o.kt)("a",{parentName:"p",href:"/concepts/captures"},"captures"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7454).Z,width:"960",height:"540"})),(0,o.kt)("p",null,"You define and configure materializations in ",(0,o.kt)("strong",{parentName:"p"},"Flow specifications"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/guides/create-dataflow#create-a-materialization"},"See the guide to create a materialization")),(0,o.kt)("h2",{id:"discovery"},"Discovery"),(0,o.kt)("p",null,"Materializations use real-time ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors"},"connectors")," to connect to many endpoint types."),(0,o.kt)("p",null,"When you use a materialization connector in the Flow web app,\nflow helps you configure it through the ",(0,o.kt)("strong",{parentName:"p"},"discovery")," workflow."),(0,o.kt)("p",null,"To begin discovery, you tell Flow the connector you'd like to use, basic information about the endpoint,\nand the collection(s) you'd like to materialize there.\nFlow maps the collection(s) to one or more ",(0,o.kt)("strong",{parentName:"p"},"resources")," \u2014 tables, data streams, or the equivalent \u2014\nthrough one or more ",(0,o.kt)("strong",{parentName:"p"},"bindings"),"."),(0,o.kt)("p",null,"You may then modify the generated configuration as needed before publishing the materialization."),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("p",null,"Materializations are defined in Flow specification files per the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# A set of materializations to include in the catalog.\n# Optional, type: object\nmaterializations:\n  # The name of the materialization.\n  acmeCo/example/database-views:\n    # Endpoint defines how to connect to the destination of the materialization.\n    # Required, type: object\n    endpoint:\n      # This endpoint uses a connector provided as a Docker image.\n      connector:\n        # Docker image that implements the materialization connector.\n        image: ghcr.io/estuary/materialize-postgres:dev\n        # File that provides the connector's required configuration.\n        # Configuration may also be presented inline.\n        config: path/to/connector-config.yaml\n\n    # Bindings define how one or more collections map to materialized endpoint resources.\n    # A single materialization may include many collections and endpoint resources,\n    # each defined as a separate binding.\n    # Required, type: object\n    bindings:\n      - # The source collection to materialize.\n        # This may be defined in a separate, imported specification file.\n        # Required, type: string\n        source: acmeCo/example/collection\n\n        # The resource is additional configuration required by the endpoint\n        # connector to identify and materialize a specific endpoint resource.\n        # The structure and meaning of this configuration is defined by\n        # the specific connector.\n        # Required, type: object\n        resource:\n          # The materialize-postgres connector expects a `table` key\n          # which names a table to materialize into.\n          table: example_table\n")),(0,o.kt)("h2",{id:"how-continuous-materialization-works"},"How continuous materialization works"),(0,o.kt)("p",null,"Flow materializations are ",(0,o.kt)("strong",{parentName:"p"},"continuous materialized views"),".\nThey maintain a representation of the collection within the endpoint system\nthat is updated in near real-time. It's indexed on the\n",(0,o.kt)("a",{parentName:"p",href:"/concepts/collections#collection-keys"},"collection key"),".\nAs the materialization runs, it ensures that all collection documents\nand their accumulated ",(0,o.kt)("a",{parentName:"p",href:"../#reductions"},"reductions")," are reflected in this\nmanaged endpoint resource."),(0,o.kt)("p",null,"When you first publish a materialization,\nFlow back-fills the endpoint resource with the historical documents of the collection.\nOnce caught up, Flow applies new collection documents using incremental and low-latency updates."),(0,o.kt)("p",null,"As collection documents arrive, Flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reads")," previously materialized documents from the endpoint for the relevant keys"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reduces")," new documents into these read documents"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Writes")," updated documents back into the endpoint resource, indexed by their keys")),(0,o.kt)("p",null,"For example, consider a collection and its materialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncollections:\n  acmeCo/colors:\n    key: [/color]\n    schema:\n      type: object\n      required: [color, total]\n      reduce: {strategy: merge}\n      properties:\n        color: {enum: [red, blue, purple]}\n        total:\n          type: integer\n          reduce: {strategy: sum}\n\nmaterializations:\n  acmeCo/example/database-views:\n    endpoint: ...\n    bindings:\n      - source: acmeCo/colors\n        resource: { table: colors }\n")),(0,o.kt)("p",null,"Suppose documents are periodically added to the collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"color": "red", "total": 1}\n{"color": "blue", "total": 2}\n{"color": "blue", "total": 3}\n')),(0,o.kt)("p",null,"Its materialization into a database table will have a single row for each unique color.\nAs documents arrive in the collection, the row ",(0,o.kt)("inlineCode",{parentName:"p"},"total")," is updated within the\nmaterialized table so that it reflects the overall count:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(75).Z,width:"769",height:"322"})),(0,o.kt)("p",null,"Flow does ",(0,o.kt)("em",{parentName:"p"},"not"),' keep separate internal copies of collection or reduction states,\nas some other systems do. The endpoint resource is the one and only place\nwhere state "lives" within a materialization. This makes materializations very\nefficient and scalable to operate. They are able to maintain ',(0,o.kt)("em",{parentName:"p"},"very")," large tables\nstored in highly scaled storage systems like OLAP data warehouses."),(0,o.kt)("h2",{id:"projected-fields"},"Projected fields"),(0,o.kt)("p",null,"Many endpoint systems are document-oriented and can directly work\nwith collections of JSON documents.\nOthers are table-oriented and require an up-front declaration\nof columns and types to be most useful, such as a SQL ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," definition."),(0,o.kt)("p",null,"Flow uses collection ",(0,o.kt)("a",{parentName:"p",href:"/concepts/advanced/projections"},"projections")," to relate locations within\na hierarchical JSON document to equivalent named fields.\nA materialization can in turn select a subset of available projected fields\nwhere, for example, each field becomes a column in a SQL table created by\nthe connector."),(0,o.kt)("p",null,"It would be tedious to explicitly list projections for every materialization,\nthough you certainly can if desired.\nInstead, Flow and the materialization connector ",(0,o.kt)("em",{parentName:"p"},"negotiate")," a recommended field selection\non your behalf, which can be fine-tuned.\nFor example, a SQL database connector will typically ",(0,o.kt)("em",{parentName:"p"},"require")," that fields\ncomprising the primary key be included, and will ",(0,o.kt)("em",{parentName:"p"},"recommend")," that scalar\nvalues be included, but will by default exclude document locations that\ndon't have native SQL representations, such as locations which can have\nmultiple JSON types or are arrays or maps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  acmeCo/example/database-views:\n    endpoint: ...\n    bindings:\n      - source: acmeCo/example/collection\n        resource: { table: example_table }\n\n        # Select (or exclude) projections of the collection for materialization as fields.\n        # If not provided, the recommend fields of the endpoint connector are used.\n        # Optional, type: object\n        fields:\n          # Whether to include fields that are recommended by the endpoint connector.\n          # If false, then fields can still be added using `include`.\n          # Required, type: boolean\n          recommended: true\n\n          # Fields to exclude. This is useful for deselecting a subset of recommended fields.\n          # Default: [], type: array\n          exclude: [myField, otherField]\n\n          # Fields to include. This can supplement recommended fields, or can\n          # designate explicit fields to use if recommended fields are disabled.\n          #\n          # Values of this map are used to customize connector behavior on a per-field basis.\n          # They are passed directly to the connector and are not interpreted by Flow.\n          # Consult your connector's documentation for details of what customizations are available.\n          # This is an advanced feature and is not commonly used.\n          #\n          # default: {}, type: object\n          include:  {goodField: {}, greatField: {}}\n")),(0,o.kt)("h2",{id:"partition-selectors"},"Partition selectors"),(0,o.kt)("p",null,"Partition selectors let you materialize only a subset of a collection that has\n",(0,o.kt)("a",{parentName:"p",href:"/concepts/advanced/projections#logical-partitions"},"logical partitions"),".\nFor example, you might have a large collection that is logically partitioned\non each of your customers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/anvil/orders:\n    key: [/id]\n    schema: orders.schema.yaml\n    projections:\n      customer:\n        location: /order/customer\n        partition: true\n")),(0,o.kt)("p",null,"A large customer asks if you can provide an up-to-date accounting of their orders.\nThis can be accomplished with a partition selector:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'materializations:\n  acmeCo/example/database-views:\n    endpoint: ...\n    bindings:\n      - source: acmeCo/anvil/orders\n        resource: { table: coyote_orders }\n\n        # Process partitions where "Coyote" is the customer.\n        partitions:\n          include:\n            customer: [Coyote]\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/advanced/projections#partition-selectors"},"Learn more about partition selectors"),"."),(0,o.kt)("h2",{id:"destination-specific-performance"},"Destination-specific performance"),(0,o.kt)("p",null,"Flow processes updates in transactions, as quickly as the destination endpoint can handle them.\nThis might be milliseconds in the case of a fast key/value store,\nor many minutes in the case of an OLAP warehouse."),(0,o.kt)("p",null,"If the endpoint is also transactional, Flow integrates its internal transactions\nwith those of the endpoint for integrated end-to-end \u201cexactly once\u201d semantics."),(0,o.kt)("p",null,"The materialization is sensitive to back pressure from the endpoint.\nAs a database gets busy, Flow adaptively batches and combines documents to consolidate updates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In a given transaction, Flow reduces all incoming documents on the collection key.\nMultiple documents combine and result in a single endpoint read and write during the transaction."),(0,o.kt)("li",{parentName:"ul"},"As a target database becomes busier or slower, transactions become larger.\nFlow does more reduction work within each transaction, and each endpoint read or write\naccounts for an increasing volume of collection documents.")),(0,o.kt)("p",null,"This allows you to safely materialize a collection with a high rate of changes into a small database,\nso long as the cardinality of the materialization is of reasonable size."),(0,o.kt)("h2",{id:"delta-updates"},"Delta updates"),(0,o.kt)("p",null,"As described ",(0,o.kt)("a",{parentName:"p",href:"#how-continuous-materialization-works"},"above"),", Flow's standard materialization\nmechanism involves querying the target system for data state before reducing new documents\ndirectly into it."),(0,o.kt)("p",null,"For these standard updates to work, the endpoint must be a stateful system, like a relational database.\nHowever, other systems \u2014 like Webhooks and Pub/Sub \u2014 may also be endpoints.\nNone of these typically provide a state representation that Flow can query.\nThey are write-only in nature, so Flow cannot use their endpoint state\nto help it fully reduce collection documents on their keys.\nEven some stateful systems are incompatible with Flow's standard updates due to their unique\ndesign and architecture."),(0,o.kt)("p",null,"For all of these endpoints, Flow offers a ",(0,o.kt)("strong",{parentName:"p"},"delta-updates"),' mode.\nWhen using delta updates, Flow does not attempt to maintain\nfull reductions of each unique collection key.\nInstead, Flow locally reduces documents within each transaction\n(this is often called a "combine"), and then materializes one\n',(0,o.kt)("em",{parentName:"p"},"delta")," document per key to the endpoint."),(0,o.kt)("p",null,"In other words, when delta updates are used, Flow sends information about data changes by key,\nand further reduction is left up to the endpoint system.\nSome systems may reduce documents similar to Flow; others use a different\nmechanism; still others may not perform reductions at all."),(0,o.kt)("p",null,"A given endpoint may support standard updates, delta updates, or both.\nThis depends on the ",(0,o.kt)("a",{parentName:"p",href:"/reference/Connectors/materialization-connectors/"},"materialization connector"),". Expect that a connector will use\nstandard updates only unless otherwise noted in its documentation."))}p.isMDXComponent=!0},7454:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/materialization-new-bbe45dcc13bded994190ac75f86dc01f.svg"},75:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/materialization-13219c2248a49327c4c97340d0216bed.gif"}}]);