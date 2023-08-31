"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const s={sidebar_position:9},i="Tests",a={unversionedId:"concepts/tests",id:"concepts/tests",title:"Tests",description:"The Flow web application automatically performs basic tests to validate the configurations of captures and materializations.",source:"@site/docs/concepts/tests.md",sourceDirName:"concepts",slug:"/concepts/tests",permalink:"/pr-preview/pr-1173/concepts/tests",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/tests.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Storage mappings",permalink:"/pr-preview/pr-1173/concepts/storage-mappings"},next:{title:"Journals",permalink:"/pr-preview/pr-1173/concepts/advanced/journals"}},l={},c=[{value:"Ingest",id:"ingest",level:2},{value:"Verify",id:"verify",level:2},{value:"Partition selectors",id:"partition-selectors",level:3},{value:"Tips",id:"tips",level:2},{value:"Testing reductions",id:"testing-reductions",level:3},{value:"Reusing common fixtures",id:"reusing-common-fixtures",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tests"},"Tests"),(0,r.kt)("p",null,"The Flow web application automatically performs basic tests to validate the configurations of captures and materializations.\nAs your Data Flows grow in breadth and scope, and as requirements change or new contributors get involved,\nmore robust tests are invaluable for ensuring the correctness of your data products."),(0,r.kt)("p",null,"You can use Flow tests to verify the end-to-end behavior of any modified schemas or derivations included in your Data Flow.\nAt their most basic, you feed example documents into a collection,\nand then verify that documents coming out of a derived collection meet your test's expectation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tests:\n  acmeCo/tests/greetings:\n    - ingest:\n        description: Add people to greet.\n        collection: acmeCo/people\n        documents:\n          - { userId: 1, name: "Zelda" }\n          - { userId: 2, name: "Link" }\n\n    - verify:\n        description: Ensure people were greeted.\n        collection: acmeCo/greetings\n        documents:\n          - { userId: 1, greeting: "Hello Zelda" }\n          - { userId: 2, greeting: "Hello Link" }\n')),(0,r.kt)("p",null,"A test is a sequence of one or more steps, each of either an ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," type."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ingest")," steps add one or more documents to a collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verify")," steps make assertions about the current contents of a collection.")),(0,r.kt)("p",null,"All steps must complete successfully in order for a test to pass."),(0,r.kt)("h2",{id:"ingest"},"Ingest"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," steps add documents to a named collection.\nAll documents must validate against the collection's\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1173/concepts/schemas"},"schema"),",\nor a catalog build error will be reported."),(0,r.kt)("p",null,"All documents from a ",(0,r.kt)("em",{parentName:"p"},"single")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," step are added in one transaction.\nThis means that multiple documents with a common key will be combined ",(0,r.kt)("em",{parentName:"p"},"prior"),"\nto their being appended to the collection. Suppose ",(0,r.kt)("inlineCode",{parentName:"p"},"acmeCo/people")," had key ",(0,r.kt)("inlineCode",{parentName:"p"},"[/id]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tests:\n  acmeCo/tests/greetings:\n    - ingest:\n        description: Zeldas are combined to one added document.\n        collection: acmeCo/people\n        documents:\n          - { userId: 1, name: "Zelda One" }\n          - { userId: 1, name: "Zelda Two" }\n\n    - verify:\n        description: Only one Zelda is greeted.\n        collection: acmeCo/greetings\n        documents:\n          - { userId: 1, greeting: "Hello Zelda Two" }\n')),(0,r.kt)("h2",{id:"verify"},"Verify"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"verify")," steps assert that the current contents of a collection match the provided document fixtures.\nVerified documents are fully reduced, with one document for each unique key, ordered under the key's natural order."),(0,r.kt)("p",null,"You can verify the contents of both derivations and captured collections.\nDocuments given in ",(0,r.kt)("inlineCode",{parentName:"p"},"verify")," steps do ",(0,r.kt)("em",{parentName:"p"},"not")," need to be comprehensive.\nIt is not an error if the actual document has additional locations not present in the document to verify,\nso long as all matched document locations are equal.\nVerified documents also do not need to validate against the collection's schema.\nThey do, however, need to include all fields that are part of the collection's key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tests:\n  acmeCo/tests/greetings:\n    - ingest:\n        collection: acmeCo/people\n        documents:\n          - { userId: 1, name: "Zelda" }\n          - { userId: 2, name: "Link" }\n    - ingest:\n        collection: acmeCo/people\n        documents:\n          - { userId: 1, name: "Zelda Again" }\n          - { userId: 3, name: "Pikachu" }\n\n    - verify:\n        collection: acmeCo/greetings\n        documents:\n          # greetings are keyed on /userId, and the second greeting is kept.\n          - { userId: 1, greeting: "Hello Zelda Again" }\n          # `greeting` is "Hello Link", but is not asserted here.\n          - { userId: 2 }\n          - { userId: 3, greeting: "Hello Pikachu" }\n')),(0,r.kt)("h3",{id:"partition-selectors"},"Partition selectors"),(0,r.kt)("p",null,"Verify steps may include a partition selector to\nverify only documents of a specific partition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tests:\n  acmeCo/tests/greetings:\n    - verify:\n        collection: acmeCo/greetings\n        description: Verify only documents which greet Nintendo characters.\n        documents:\n          - { userId: 1, greeting: "Hello Zelda" }\n          - { userId: 3, greeting: "Hello Pikachu" }\n        partitions:\n          include:\n            platform: [Nintendo]\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1173/concepts/advanced/projections#partition-selectors"},"Learn more about partition selectors"),"."),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("p",null,"The following tips can aid in testing large or complex derivations."),(0,r.kt)("h3",{id:"testing-reductions"},"Testing reductions"),(0,r.kt)("p",null,"Reduction annotations are expressive and powerful, and their use should thus be tested thoroughly.\nAn easy way to test reduction annotations on captured collections is to write a two-step test that ingests multiple documents with the same key and then verifies the result.\nFor example, the following test might be used to verify the behavior of a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," reduction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tests:\n  acmeCo/tests/sum-reductions:\n    - ingest:\n        description: Ingest documents to be summed.\n        collection: acmeCo/collection\n        documents:\n          - {id: 1, value: 5}\n          - {id: 1, value: 4}\n          - {id: 1, value: -3}\n    - verify:\n        description: Verify value was correctly summed.\n        collection: acmeCo/collection\n        documents:\n          - {id: 1, value: 6}\n")),(0,r.kt)("h3",{id:"reusing-common-fixtures"},"Reusing common fixtures"),(0,r.kt)("p",null,"When you write a lot of tests, it can be tedious to repeat documents that are used multiple times.\nYAML supports ",(0,r.kt)("a",{parentName:"p",href:"https://blog.daemonl.com/2016/02/yaml.html"},"anchors and references"),",\nwhich you can implement to re-use common documents throughout your tests.\nOne nice pattern is to define anchors for common ingest steps in the first test, which can be re-used by subsequent tests. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tests:\n  acmeCo/tests/one:\n    - ingest: &mySetup\n        collection: acmeCo/collection\n        documents:\n          - {id: 1, ...}\n          - {id: 2, ...}\n          ...\n    - verify: ...\n\n  acmeCo/tests/two:\n    - ingest: *mySetup\n    - verify: ...\n")),(0,r.kt)("p",null,"This allows all the subsequent tests to re-use the documents from the first ",(0,r.kt)("inlineCode",{parentName:"p"},"ingest")," step without having to duplicate them."))}d.isMDXComponent=!0}}]);