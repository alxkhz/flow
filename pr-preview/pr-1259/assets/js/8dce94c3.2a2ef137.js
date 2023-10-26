"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Journals",l={unversionedId:"concepts/advanced/journals",id:"concepts/advanced/journals",title:"Journals",description:"Journals are an advanced concept of Flow.",source:"@site/docs/concepts/advanced/journals.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/journals",permalink:"/pr-preview/pr-1259/concepts/advanced/journals",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/journals.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tests",permalink:"/pr-preview/pr-1259/concepts/tests"},next:{title:"Logs and statistics",permalink:"/pr-preview/pr-1259/concepts/advanced/logs-stats"}},s={},c=[{value:"Specification",id:"specification",level:2},{value:"Physical partitions",id:"physical-partitions",level:2},{value:"Fragment files",id:"fragment-files",level:2},{value:"Hive layouts",id:"hive-layouts",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"journals"},"Journals"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Journals are an advanced concept of Flow.\nYou can use Flow without knowing the details of journals,\nbut this section may help you better understand how Flow works.")),(0,r.kt)("p",null,"Flow collections store their data in one or more ",(0,r.kt)("strong",{parentName:"p"},"journals"),",\nresources resembling files.\nJournals are part of the Gazette project.\n",(0,r.kt)("a",{parentName:"p",href:"https://gazette.readthedocs.io/en/latest/brokers-concepts.html#journals"},"See Gazette's Journal concepts page for details"),".\nThe number of journals that comprise a given collection depends\non how the collection is partitioned."),(0,r.kt)("p",null,"Journals are a real-time data lake.\nHistorical journal data is stored as an organized layout of\n",(0,r.kt)("a",{parentName:"p",href:"#fragment-files"},"fragment files")," in cloud storage.\nFragment files are regular files that collectively hold the journal's content.\nJust-written data is held in a replicated buffer,\nwhere it is immediately available to readers.\nFrom there, buffers are regularly persisted\nto your bucket for long-term storage."),(0,r.kt)("p",null,"Journals may be read from any offset.\nReaders of historical data,\nsuch as a new materialization or derivation task,\nfetch files directly from your bucket for efficiency and throughput.\nThen, as they reach the present, they automatically switch to\nstreaming new documents within milliseconds of their being written."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6200).Z,width:"960",height:"540"})),(0,r.kt)("p",null,"All data of a collection is stored as regular JSON files\nunder a common and unique prefix within your cloud storage bucket.\nFor example, all fragment files of collection ",(0,r.kt)("inlineCode",{parentName:"p"},"acmeCo/orders"),"\nwould live under the storage prefix\n",(0,r.kt)("inlineCode",{parentName:"p"},"s3://acmeCo-bucket/acmeCo/orders"),"."),(0,r.kt)("p",null,"Files are ",(0,r.kt)("strong",{parentName:"p"},"directly accessible")," by other tools.\nThis is an important aspect of Flow's design,\nand it has some major implications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use tools including Snowflake, Spark, Hive, Pandas,\nand many others to read and process the data in your Flow collections."),(0,r.kt)("li",{parentName:"ul"},"You can capture and organize data into Flow collections\nwithout knowing how it will be used quite yet.\nPerform ad-hoc analysis using the collection data lake,\nand layer in ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1259/concepts/derivations"},"derivations"),"\nor ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1259/concepts/materialization"},"materializations")," later,\nor not at all."),(0,r.kt)("li",{parentName:"ul"},"If you ever decide to stop using Flow,\nyour data is still yours.\nThere's no lock-in or need to migrate data out."),(0,r.kt)("li",{parentName:"ul"},"Removing files from your bucket also removes them from your collection.\nApply bucket lifecycle policies or directly delete files to permanently\ndrop their contents from the collection.")),(0,r.kt)("p",null,"Flow collections have one or more\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1259/concepts/advanced/projections#logical-partitions"},"logical partitions"),",\nand each logical partition has one or more\n",(0,r.kt)("a",{parentName:"p",href:"#physical-partitions"},"physical partitions"),".\nEvery physical partition is implemented as a ",(0,r.kt)("strong",{parentName:"p"},"journal"),",\nand a journal may have many ",(0,r.kt)("a",{parentName:"p",href:"#fragment-files"},"fragment files"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Entity"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"acmeCo/orders")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logical Partition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"acmeCo/orders/"),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"category=Anvils")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Physical Partition / Journal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"acmeCo/orders/category=Anvils/"),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"pivot=00")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Journal Storage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"s3://acmeCo-bucket/")),(0,r.kt)("inlineCode",{parentName:"td"},"acmeCo/orders/category=Anvils/pivot=00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fragment File"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s3://acmeCo-bucket/acmeCo/orders/category=Anvils/pivot=00/"),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"utc_date=2022-01-07/utc_hour=19/0000000000000000-00000000201a3f27-1ec69e2de187b7720fb864a8cd6d50bb69cc7f26.gz")))))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,"Flow ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1259/concepts/collections"},"collections")," can control some aspects of how\ntheir contents are mapped into journals through the ",(0,r.kt)("inlineCode",{parentName:"p"},"journals")," stanza:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/orders:\n    schema: orders.schema.yaml\n    key: [/id]\n\n    journals:\n      # Configuration for journal fragments.\n      # Required, type: object.\n      fragments:\n        # Codec used to compress fragment files.\n        # One of ZSTANDARD, SNAPPY, GZIP, or NONE.\n        # Optional. Default is GZIP.\n        compressionCodec: GZIP\n        # Maximum flush delay before in-progress fragment buffers are closed\n        # and persisted. Default uses no flush interval.\n        # Optional. Given as a time duration.\n        flushInterval: 15m\n        # Desired content length of each fragment, in megabytes before compression.\n        # Default is 512MB.\n        # Optional, type: integer.\n        length: 512\n        # Duration for which historical files of the collection should be kept.\n        # Default is forever.\n        # Optional. Given as a time duration.\n        retention: 720h\n")),(0,r.kt)("p",null,"Your ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1259/concepts/storage-mappings"},"storage mappings")," determine\nwhich of your cloud storage buckets is used\nfor storage of collection fragment files."),(0,r.kt)("h2",{id:"physical-partitions"},"Physical partitions"),(0,r.kt)("p",null,"Every logical partition of a Flow collection\nis created with a single physical partition.\nLater and as required, new physical partitions are added\nin order to increase the write throughput of the collection."),(0,r.kt)("p",null,"Each physical partition is responsible for all new writes\ncovering a range of keys occurring in collection documents.\nConceptually, if keys range from ","[A-Z]"," then one partition\nmight cover ","[A-F]"," while another covers ","[G-Z]",".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"pivot")," of a partition reflects the first key\nin its covered range.\nOne physical partition is turned into more partitions\nby subdividing its range of key ownership.\nFor instance, a partition covering ","[A-F]","\nis split into partitions ","[A-C]"," and ","[D-F]","."),(0,r.kt)("p",null,"Physical partitions are journals.\nThe relationship between the journal and\nits specific collection and logical partition are\nencoded within\n",(0,r.kt)("a",{parentName:"p",href:"https://gazette.readthedocs.io/en/latest/brokers-concepts.html#specifications"},"its journal specification"),"."),(0,r.kt)("h2",{id:"fragment-files"},"Fragment files"),(0,r.kt)("p",null,"Journal fragment files each hold a slice of your collection's content,\nstored as a compressed file of newline-delimited JSON documents\nin your cloud storage bucket."),(0,r.kt)("p",null,"Files are flushed to cloud storage periodically,\ntypically after they reach a desired size threshold.\nThey use a content-addressed naming scheme\nwhich allows Flow to understand\nhow each file stitches into the overall journal.\nConsider a fragment file path like:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"s3://acmeCo-bucket/acmeCo/orders/category=Anvils/pivot=00/utc_date=2022-01-07/utc_hour=19/0000000000000000-00000000201a3f27-1ec69e2de187b7720fb864a8cd6d50bb69cc7f26.gz")),(0,r.kt)("p",null,"This path has the following components:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Storage prefix of physical partition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s3://acmeCo-bucket/acmeCo/orders/category=Anvils/pivot=00/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supplemental time pseudo-partitions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"utc_date=2022-01-07/utc_hour=19/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Beginning content offset"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0000000000000000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ending content offset"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"00000000201a3f27"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA content checksum"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1ec69e2de187b7720fb864a8cd6d50bb69cc7f26"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compression codec"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".gz"))))),(0,r.kt)("p",null,"The supplemental ",(0,r.kt)("strong",{parentName:"p"},"time pseudo-partitions")," are not logical partitions,\nbut are added to each fragment file path to facilitate\nintegration with external tools that understand ",(0,r.kt)("strong",{parentName:"p"},"Hive layouts"),"."),(0,r.kt)("h2",{id:"hive-layouts"},"Hive layouts"),(0,r.kt)("p",null,"As we've seen,\ncollection fragment files are written to cloud storage\nwith path components like\n",(0,r.kt)("inlineCode",{parentName:"p"},"/category=Anvils/pivot=00/utc_date=2022-01-07/utc_hour=19/"),"."),(0,r.kt)("p",null,"If you've used tools within the Apache Hive ecosystem, this layout should feel familiar.\nFlow organizes files in this way to make them directly usable\nby tools that understand Hive partitioning, like Spark and Hive itself.\nCollections can also be integrated as Hive-compatible external tables\nin tools like\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/tables-external-intro.html#partitioned-external-tables"},"Snowflake"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/hive-partitioned-queries-gcs"},"BigQuery"),"\nfor ad-hoc analysis."),(0,r.kt)("p",null,"SQL queries against these tables can even utilize ",(0,r.kt)("strong",{parentName:"p"},"predicate push-down"),",\ntaking query predicates over ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"utc_date"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"utc_hour"),"\nand pushing them down into the selection of files that must be read to answer\nthe query \u2014 often offering much faster and more efficient query execution because\nfar less data must be read."))}u.isMDXComponent=!0},6200:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/journals-d78b87f0eda7164e8a9936e36c4d7a0e.svg"}}]);