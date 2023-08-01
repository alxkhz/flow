"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5527],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:2,description:"Common pain points you might have, and how Flow addresses them."},r="Who should use Flow?",s={unversionedId:"overview/who-should-use-flow",id:"overview/who-should-use-flow",title:"Who should use Flow?",description:"Common pain points you might have, and how Flow addresses them.",source:"@site/docs/overview/who-should-use-flow.md",sourceDirName:"overview",slug:"/overview/who-should-use-flow",permalink:"/pr-preview/pr-1129/overview/who-should-use-flow",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/overview/who-should-use-flow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Common pain points you might have, and how Flow addresses them."},sidebar:"tutorialSidebar",previous:{title:"Flow documentation",permalink:"/pr-preview/pr-1129/"},next:{title:"Comparisons",permalink:"/pr-preview/pr-1129/overview/comparisons"}},l={},u=[{value:"Benefits",id:"benefits",level:2},{value:"Fully integrated pipelines",id:"fully-integrated-pipelines",level:3},{value:"Efficient architecture",id:"efficient-architecture",level:3},{value:"Powerful transformations",id:"powerful-transformations",level:3},{value:"Data integrity",id:"data-integrity",level:3},{value:"Dynamic scaling",id:"dynamic-scaling",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"who-should-use-flow"},"Who should use Flow?"),(0,o.kt)("p",null,"Flow is a DataOps platform designed for all members of your data team. Its powerful command-line interface gives backend engineers data integration superpowers.\nAt the same time, Flow allows data analysts and other user cohorts to meaningfully contribute to and manage the same data pipelines, or ",(0,o.kt)("strong",{parentName:"p"},"data flows"),", using the web application."),(0,o.kt)("p",null,'If you answer "yes" to any of the following questions, Flow can help:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do you work with multiple databases and struggle to keep them in sync with one another?"),(0,o.kt)("li",{parentName:"ul"},"Do you issue repeated OLAP queries to your warehouse that are expensive to execute?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Or do you need instant metrics for specific events like Black Friday?"))),(0,o.kt)("li",{parentName:"ul"},"Do you operate separate batch and streaming systems, and grapple with reconciling them?"),(0,o.kt)("li",{parentName:"ul"},"Do you manage continuous processing workflows with tools like Spark,\nFlink, or Google Cloud Dataflow, and want a faster, easier-to-evolve alternative?"),(0,o.kt)("li",{parentName:"ul"},"Is your organization held back by a data engineering bottleneck,\nwhile less-technical stakeholders are blocked from contributing by a high barrier to entry?"),(0,o.kt)("li",{parentName:"ul"},"Are you implementing a new data architecture framework, like a\n",(0,o.kt)("a",{parentName:"li",href:"https://martinfowler.com/articles/data-monolith-to-mesh.html"},"distributed data mesh"),"\nand are seeking a tool to help with orchestration?")),(0,o.kt)("h2",{id:"benefits"},"Benefits"),(0,o.kt)("p",null,"These characteristics set Flow apart from other data integration workflows and address the pain points listed above."),(0,o.kt)("h3",{id:"fully-integrated-pipelines"},"Fully integrated pipelines"),(0,o.kt)("p",null,"With Flow, you can build, test, and evolve pipelines that continuously capture, transform, and materialize data across all of your systems. With one tool, you can power workflows that have historically required you to first piece together services, then integrate and operate them in-house to meet your needs."),(0,o.kt)("p",null,"To achieve comparable capabilities to Flow you would need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A low-latency streaming system, such as AWS Kinesis"),(0,o.kt)("li",{parentName:"ul"},"Data lake build-out, such as Kinesis Firehose to S3"),(0,o.kt)("li",{parentName:"ul"},"Custom ETL application development, such as Spark, Flink, or AWS \u03bb"),(0,o.kt)("li",{parentName:"ul"},"Supplemental data stores for intermediate transformation states"),(0,o.kt)("li",{parentName:"ul"},"ETL job management and execution, such as a self-hosting or Google Cloud Dataflow"),(0,o.kt)("li",{parentName:"ul"},"Custom reconciliation of historical vs streaming datasets, including onerous backfills of new streaming applications from historical data")),(0,o.kt)("p",null,"Flow dramatically simplifies this inherent complexity. It saves you time and costs, catches mistakes before they hit production, and keeps your data fresh across all the places you use it.\nWith both a UI-forward web application and a powerful CLI ,\nmore types of professionals can contribute to what would otherwise require a\nhighly specialized set of technical skills."),(0,o.kt)("h3",{id:"efficient-architecture"},"Efficient architecture"),(0,o.kt)("p",null,"Flow mixes a variety of architectural techniques to deliver great throughput, avoid latency, and minimize operating costs. These include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Leveraging ",(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-1129/concepts/schemas#reductions"},"reductions")," to reduce the amount of data that must be ingested, stored, and processed, often dramatically"),(0,o.kt)("li",{parentName:"ul"},"Executing transformations predominantly in-memory"),(0,o.kt)("li",{parentName:"ul"},"Optimistic pipelining and vectorization of internal remote procedure calls (RPCs) and operations"),(0,o.kt)("li",{parentName:"ul"},"A cloud-native design that optimizes for public cloud pricing models")),(0,o.kt)("p",null,"Flow also makes it easy to ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1129/concepts/materialization"},(0,o.kt)("strong",{parentName:"a"},"materialize"))," focused data views directly into your warehouse, so you don't need to repeatedly query the much larger source datasets. This can dramatically lower warehouse costs."),(0,o.kt)("h3",{id:"powerful-transformations"},"Powerful transformations"),(0,o.kt)("p",null,"With Flow, you can build pipelines that join a current event with an event that happened days, weeks, even years in the past. Flow can model arbitrary stream-to-stream joins without the windowing constraints imposed by other systems, which limit how far back in time you can join."),(0,o.kt)("p",null,"Flow transforms data in durable micro-transactions, meaning that an outcome, once committed, won't be silently re-ordered or changed due to a crash or machine failure. This makes Flow uniquely suited for operational workflows, like assigning a dynamic amount of available inventory to a stream of requests \u2014 decisions that, once made, should not be forgotten. You can also evolve transformations as business requirements change, enriching them with new datasets or behaviors without needing to re-compute from scratch."),(0,o.kt)("h3",{id:"data-integrity"},"Data integrity"),(0,o.kt)("p",null,"Flow is architected to ensure that your data is accurate and that changes don't break pipelines.\nIt supports strong schematization, durable transactions with exactly-once semantics, and easy end-to-end testing."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Required JSON schemas ensure that only clean, consistent data is ingested into Flow or written to external systems. If a document violates its schema, Flow pauses the pipeline, giving you a chance to fix the error."),(0,o.kt)("li",{parentName:"ul"},"Schemas can encode constraints, like that a latitude value must be between +90 and -90 degrees, or that a field must be a valid email address."),(0,o.kt)("li",{parentName:"ul"},"Flow can project JSON schema into other flavors, like TypeScript types or SQL tables. Strong type checking catches bugs before they're applied to production."),(0,o.kt)("li",{parentName:"ul"},"Flow's declarative tests verify the integrated, end-to-end behavior of data flows.")),(0,o.kt)("h3",{id:"dynamic-scaling"},"Dynamic scaling"),(0,o.kt)("p",null,"The Flow runtime scales from a single process up to a large Kubernetes cluster for high-volume production deployments. Processing tasks are quickly reassigned upon any machine failure for high availability."),(0,o.kt)("p",null,"Each process can also be scaled independently, at any time, and without downtime. This is unique to Flow. Comparable systems require that an arbitrary data partitioning be decided upfront, a crucial performance knob that's awkward and expensive to change. Instead, Flow can repeatedly ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1129/concepts/advanced/shards"},"split a running task")," into two new tasks, each half the size, without stopping it or impacting its downstream uses."))}d.isMDXComponent=!0}}]);