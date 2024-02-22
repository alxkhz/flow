"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8667],{89315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(74848),o=t(28453);const i={sidebar_position:9},r="Tests",c={id:"concepts/tests",title:"Tests",description:"The Flow web application automatically performs basic tests to validate the configurations of captures and materializations.",source:"@site/docs/concepts/tests.md",sourceDirName:"concepts",slug:"/concepts/tests",permalink:"/pr-preview/pr-1392/concepts/tests",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/tests.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Storage mappings",permalink:"/pr-preview/pr-1392/concepts/storage-mappings"},next:{title:"Schema evolution",permalink:"/pr-preview/pr-1392/concepts/advanced/evolutions"}},a={},l=[{value:"Ingest",id:"ingest",level:2},{value:"Verify",id:"verify",level:2},{value:"Partition selectors",id:"partition-selectors",level:3},{value:"Tips",id:"tips",level:2},{value:"Testing reductions",id:"testing-reductions",level:3},{value:"Reusing common fixtures",id:"reusing-common-fixtures",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tests",children:"Tests"}),"\n",(0,s.jsx)(n.p,{children:"The Flow web application automatically performs basic tests to validate the configurations of captures and materializations.\nAs your Data Flows grow in breadth and scope, and as requirements change or new contributors get involved,\nmore robust tests are invaluable for ensuring the correctness of your data products."}),"\n",(0,s.jsx)(n.p,{children:"You can use Flow tests to verify the end-to-end behavior of any modified schemas or derivations included in your Data Flow.\nAt their most basic, you feed example documents into a collection,\nand then verify that documents coming out of a derived collection meet your test's expectation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'tests:\n  acmeCo/tests/greetings:\n    - ingest:\n        description: Add people to greet.\n        collection: acmeCo/people\n        documents:\n          - { userId: 1, name: "Zelda" }\n          - { userId: 2, name: "Link" }\n\n    - verify:\n        description: Ensure people were greeted.\n        collection: acmeCo/greetings\n        documents:\n          - { userId: 1, greeting: "Hello Zelda" }\n          - { userId: 2, greeting: "Hello Link" }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A test is a sequence of one or more steps, each of either an ",(0,s.jsx)(n.code,{children:"ingest"})," or a ",(0,s.jsx)(n.code,{children:"verify"})," type."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ingest"})," steps add one or more documents to a collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"verify"})," steps make assertions about the current contents of a collection."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All steps must complete successfully in order for a test to pass."}),"\n",(0,s.jsx)(n.h2,{id:"ingest",children:"Ingest"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ingest"})," steps add documents to a named collection.\nAll documents must validate against the collection's\n",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/schemas",children:"schema"}),",\nor a catalog build error will be reported."]}),"\n",(0,s.jsxs)(n.p,{children:["All documents from a ",(0,s.jsx)(n.em,{children:"single"})," ",(0,s.jsx)(n.code,{children:"ingest"})," step are added in one transaction.\nThis means that multiple documents with a common key will be combined ",(0,s.jsx)(n.em,{children:"prior"}),"\nto their being appended to the collection. Suppose ",(0,s.jsx)(n.code,{children:"acmeCo/people"})," had key ",(0,s.jsx)(n.code,{children:"[/id]"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'tests:\n  acmeCo/tests/greetings:\n    - ingest:\n        description: Zeldas are combined to one added document.\n        collection: acmeCo/people\n        documents:\n          - { userId: 1, name: "Zelda One" }\n          - { userId: 1, name: "Zelda Two" }\n\n    - verify:\n        description: Only one Zelda is greeted.\n        collection: acmeCo/greetings\n        documents:\n          - { userId: 1, greeting: "Hello Zelda Two" }\n'})}),"\n",(0,s.jsx)(n.h2,{id:"verify",children:"Verify"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"verify"})," steps assert that the current contents of a collection match the provided document fixtures.\nVerified documents are fully reduced, with one document for each unique key, ordered under the key's natural order."]}),"\n",(0,s.jsxs)(n.p,{children:["You can verify the contents of both derivations and captured collections.\nDocuments given in ",(0,s.jsx)(n.code,{children:"verify"})," steps do ",(0,s.jsx)(n.em,{children:"not"})," need to be comprehensive.\nIt is not an error if the actual document has additional locations not present in the document to verify,\nso long as all matched document locations are equal.\nVerified documents also do not need to validate against the collection's schema.\nThey do, however, need to include all fields that are part of the collection's key."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'tests:\n  acmeCo/tests/greetings:\n    - ingest:\n        collection: acmeCo/people\n        documents:\n          - { userId: 1, name: "Zelda" }\n          - { userId: 2, name: "Link" }\n    - ingest:\n        collection: acmeCo/people\n        documents:\n          - { userId: 1, name: "Zelda Again" }\n          - { userId: 3, name: "Pikachu" }\n\n    - verify:\n        collection: acmeCo/greetings\n        documents:\n          # greetings are keyed on /userId, and the second greeting is kept.\n          - { userId: 1, greeting: "Hello Zelda Again" }\n          # `greeting` is "Hello Link", but is not asserted here.\n          - { userId: 2 }\n          - { userId: 3, greeting: "Hello Pikachu" }\n'})}),"\n",(0,s.jsx)(n.h3,{id:"partition-selectors",children:"Partition selectors"}),"\n",(0,s.jsx)(n.p,{children:"Verify steps may include a partition selector to\nverify only documents of a specific partition:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'tests:\n  acmeCo/tests/greetings:\n    - verify:\n        collection: acmeCo/greetings\n        description: Verify only documents which greet Nintendo characters.\n        documents:\n          - { userId: 1, greeting: "Hello Zelda" }\n          - { userId: 3, greeting: "Hello Pikachu" }\n        partitions:\n          include:\n            platform: [Nintendo]\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/advanced/projections#partition-selectors",children:"Learn more about partition selectors"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,s.jsx)(n.p,{children:"The following tips can aid in testing large or complex derivations."}),"\n",(0,s.jsx)(n.h3,{id:"testing-reductions",children:"Testing reductions"}),"\n",(0,s.jsxs)(n.p,{children:["Reduction annotations are expressive and powerful, and their use should thus be tested thoroughly.\nAn easy way to test reduction annotations on captured collections is to write a two-step test that ingests multiple documents with the same key and then verifies the result.\nFor example, the following test might be used to verify the behavior of a simple ",(0,s.jsx)(n.code,{children:"sum"})," reduction:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"tests:\n  acmeCo/tests/sum-reductions:\n    - ingest:\n        description: Ingest documents to be summed.\n        collection: acmeCo/collection\n        documents:\n          - {id: 1, value: 5}\n          - {id: 1, value: 4}\n          - {id: 1, value: -3}\n    - verify:\n        description: Verify value was correctly summed.\n        collection: acmeCo/collection\n        documents:\n          - {id: 1, value: 6}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"reusing-common-fixtures",children:"Reusing common fixtures"}),"\n",(0,s.jsxs)(n.p,{children:["When you write a lot of tests, it can be tedious to repeat documents that are used multiple times.\nYAML supports ",(0,s.jsx)(n.a,{href:"https://blog.daemonl.com/2016/02/yaml.html",children:"anchors and references"}),",\nwhich you can implement to re-use common documents throughout your tests.\nOne nice pattern is to define anchors for common ingest steps in the first test, which can be re-used by subsequent tests. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"tests:\n  acmeCo/tests/one:\n    - ingest: &mySetup\n        collection: acmeCo/collection\n        documents:\n          - {id: 1, ...}\n          - {id: 2, ...}\n          ...\n    - verify: ...\n\n  acmeCo/tests/two:\n    - ingest: *mySetup\n    - verify: ...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This allows all the subsequent tests to re-use the documents from the first ",(0,s.jsx)(n.code,{children:"ingest"})," step without having to duplicate them."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);