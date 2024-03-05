"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6730],{9706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(74848),i=t(28453);const s={description:"Using the append reduction strategy",sidebar_position:1},a="append",o={id:"reference/reduction-strategies/append",title:"append",description:"Using the append reduction strategy",source:"@site/docs/reference/reduction-strategies/append.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/append",permalink:"/pr-preview/pr-1404/reference/reduction-strategies/append",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/append.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Using the append reduction strategy",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reduction strategies",permalink:"/pr-preview/pr-1404/reference/reduction-strategies/"},next:{title:"firstWriteWins and lastWriteWins",permalink:"/pr-preview/pr-1404/reference/reduction-strategies/firstwritewins-and-lastwritewins"}},d={},c=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"append",children:"append"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"append"})," works with arrays, and extends the left-hand array with items from the right-hand side."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/append\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Append only works with type "array".\n          # Others will throw an error at build time.\n          type: array\n          reduce: { strategy: append }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can append arrays":\n    - ingest:\n        collection: example/reductions/append\n        documents:\n          - { key: "key", value: [1, 2] }\n          - { key: "key", value: [3, null, "abc"] }\n    - verify:\n        collection: example/reductions/append\n        documents:\n          - { key: "key", value: [1, 2, 3, null, "abc"] }\n'})}),"\n",(0,r.jsx)(n.p,{children:"The right-hand side must always be an array. The left-hand side may be null, in which case the reduction is treated as a no-op and its result remains null. This can be combined with schema conditionals to toggle whether reduction-reduction should be done or not."})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);