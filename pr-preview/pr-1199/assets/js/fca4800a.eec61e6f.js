"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Pinecone",l={unversionedId:"reference/Connectors/materialization-connectors/pinecone",id:"reference/Connectors/materialization-connectors/pinecone",title:"Pinecone",description:"This connector materializes Flow collections into namespaces in a Pinecone index.",source:"@site/docs/reference/Connectors/materialization-connectors/pinecone.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/pinecone",permalink:"/pr-preview/pr-1199/reference/Connectors/materialization-connectors/pinecone",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/pinecone.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/pr-preview/pr-1199/reference/Connectors/materialization-connectors/mysql"},next:{title:"Microsoft SQLServer",permalink:"/pr-preview/pr-1199/reference/Connectors/materialization-connectors/sqlserver"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Embedding Input",id:"embedding-input",level:2},{value:"Pinecone Record Metadata",id:"pinecone-record-metadata",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta Updates",id:"delta-updates",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pinecone"},"Pinecone"),(0,r.kt)("p",null,"This connector materializes Flow collections into namespaces in a Pinecone index."),(0,r.kt)("p",null,"The connector uses the ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/embeddings"},"OpenAI Embedding API")," to\ncreate vector embeddings based on the documents in your collections and inserts these vector\nembeddings and associated metadata into Pinecone for storage and retrieval."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/materialize-pinecone:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/materialize-pinecone:dev")),"\nprovides the latest connector image. You can also follow the link in your browser to see past image\nversions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://www.pinecone.io/"},"Pinecone")," account with an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.pinecone.io/docs/quickstart#2-get-and-verify-your-pinecone-api-key"},"API\nKey")," for\nauthentication."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://openai.com/"},"OpenAI")," account with an ",(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/docs/api-reference/authentication"},"API\nKey")," for authentication."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://docs.pinecone.io/docs/indexes"},"Pinecone Index")," created to store materialized vector\nembeddings. When using the embedding model ",(0,r.kt)("inlineCode",{parentName:"li"},"text-embedding-ada-002")," (recommended), the index must\nhave ",(0,r.kt)("inlineCode",{parentName:"li"},"Dimensions")," set to 1536.")),(0,r.kt)("h2",{id:"embedding-input"},"Embedding Input"),(0,r.kt)("p",null,"The materialization creates a vector embedding for each collection document. Its structure is based\non the collection fields."),(0,r.kt)("p",null,"By default, fields of a single scalar type are including in the embedding: strings, integers,\nnumbers, and booleans. You can include additional array or object type fields using ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1199/concepts/materialization#projected-fields"},"projected\nfields"),"."),(0,r.kt)("p",null,"The text generated for the embedding has this structure, with field names and their values separated\nby newlines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"stringField: stringValue\nintField: 3\nnumberField: 1.2\nboolField: false\n")),(0,r.kt)("h2",{id:"pinecone-record-metadata"},"Pinecone Record Metadata"),(0,r.kt)("p",null,"Pinecone supports metadata fields associated with stored vectors that can be used when performing\n",(0,r.kt)("a",{parentName:"p",href:"https://www.pinecone.io/learn/vector-search-filtering/"},"vector queries"),". This materialization will\ninclude the materialized document as a JSON string in the metadata field ",(0,r.kt)("inlineCode",{parentName:"p"},"flow_document")," to enable\nretrieval of the document from vectors returned by Pinecone queries."),(0,r.kt)("p",null,"Pinecone indexes all metadata fields by default. To manage memory usage of the index, use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pinecone.io/docs/manage-indexes#selective-metadata-indexing"},"selective\nmetadata indexing")," to\nexclude the ",(0,r.kt)("inlineCode",{parentName:"p"},"flow_document")," metadata field."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/index"))),(0,r.kt)("td",{parentName:"tr",align:null},"Pinecone Index"),(0,r.kt)("td",{parentName:"tr",align:null},"Pinecone index for this materialization. Must already exist and have appropriate dimensions for the embedding model used."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/environment"))),(0,r.kt)("td",{parentName:"tr",align:null},"Pinecone Environment"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud region for your Pinecone project. Example: us-central1-gcp"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/pineconeApiKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"Pinecone API Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Pinecone API key used for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/openAiApiKey"))),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI API Key"),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI API key used for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/embeddingModel")),(0,r.kt)("td",{parentName:"tr",align:null},"Embedding Model ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Embedding model ID for generating OpenAI bindings. The default text-embedding-ada-002 is recommended."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"text-embedding-ada-002"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advaned/openAiOrg")),(0,r.kt)("td",{parentName:"tr",align:null},"OpenAI Organization"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional organization name for OpenAI requests. Use this if you belong to multiple organizations to specify which organization is used for API requests."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/namespace"))),(0,r.kt)("td",{parentName:"tr",align:null},"Pinecone Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Pinecone namespace that this collection will materialize vectors into."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: "ghcr.io/estuary/materialize-pinecone:dev"\n        config:\n          index: your-index\n          environment: us-central1-gcp\n          pineconeApiKey: <YOUR_PINECONE_API_KEY>\n          openAiApiKey: <YOUR_OPENAI_API_KEY>\n    bindings:\n      - resource:\n          namespace: your-namespace\n        source: ${PREFIX}/${COLLECTION_NAME}\n')),(0,r.kt)("h2",{id:"delta-updates"},"Delta Updates"),(0,r.kt)("p",null,"This connector operates only in ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1199/concepts/materialization#delta-updates"},"delta updates")," mode."),(0,r.kt)("p",null,"Pinecone ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pinecone.io/reference/upsert"},"upserts")," vectors based on their ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\nfor materialized vectors is based on the Flow Collection key."),(0,r.kt)("p",null,"For collections with a a top-level reduction strategy of\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1199/reference/reduction-strategies/merge"},"merge")," and a strategy of\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1199/reference/reduction-strategies/firstwritewins-and-lastwritewins"},"lastWriteWins"),' for all nested\nvalues (this is also the default), collections will be materialized "effectively once", with any\nupdated Flow documents replacing vectors in the Pinecone index if they have the same key.'))}m.isMDXComponent=!0}}]);