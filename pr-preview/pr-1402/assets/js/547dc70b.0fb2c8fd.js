"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[337],{15620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(74848),i=n(28453);const s={description:"Flow's default reduction behaviors and available strategies to customize them"},o="Reduction strategies",a={id:"reference/reduction-strategies/README",title:"Reduction strategies",description:"Flow's default reduction behaviors and available strategies to customize them",source:"@site/docs/reference/reduction-strategies/README.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/",permalink:"/pr-preview/pr-1402/reference/reduction-strategies/",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/README.md",tags:[],version:"current",frontMatter:{description:"Flow's default reduction behaviors and available strategies to customize them"},sidebar:"tutorialSidebar",previous:{title:"Configuring task shards",permalink:"/pr-preview/pr-1402/reference/Configuring-task-shards"},next:{title:"append",permalink:"/pr-preview/pr-1402/reference/reduction-strategies/append"}},c={},d=[{value:"Reduction guarantees",id:"reduction-guarantees",level:3}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"reduction-strategies",children:"Reduction strategies"}),"\n",(0,r.jsxs)(t.p,{children:["Flow uses ",(0,r.jsx)(t.a,{href:"/pr-preview/pr-1402/concepts/schemas#reductions",children:"reductions"}),"\nto aggregate data in the runtime in order to improve endpoint performance.\nReductions tell Flow how two versions of a document can be meaningfully combined. Guarantees that underlie all Flow reduction behavior are explained in depth ",(0,r.jsx)(t.a,{href:"./#reduction-guarantees",children:"below"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Some reductions occur automatically during captures and materializations to optimize performance, but you can define more advanced behavior using reduction annotations in collection schemas."}),"\n",(0,r.jsx)(t.p,{children:"The available strategies are:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/pr-preview/pr-1402/reference/reduction-strategies/append",children:"append"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/pr-preview/pr-1402/reference/reduction-strategies/firstwritewins-and-lastwritewins",children:"firstWriteWins and lastWriteWins"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/pr-preview/pr-1402/reference/reduction-strategies/merge",children:"merge"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/pr-preview/pr-1402/reference/reduction-strategies/minimize-and-maximize",children:"minimize and maximize"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/pr-preview/pr-1402/reference/reduction-strategies/set",children:"set"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/pr-preview/pr-1402/reference/reduction-strategies/sum",children:"sum"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When no other strategy is specified in a schema, Flow defaults to ",(0,r.jsx)(t.code,{children:"lastWriteWins"}),".  For even more customization, you can use ",(0,r.jsx)(t.a,{href:"/pr-preview/pr-1402/reference/reduction-strategies/composing-with-conditionals",children:"conditional statements"}),". "]}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"Estuary has many future plans for reduction annotations:"}),(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"More strategies, including data sketches like HyperLogLogs, T-Digests, and others."}),"\n",(0,r.jsx)(t.li,{children:"Eviction policies and constraints, for bounding the sizes of objects and arrays with fine-grained removal ordering."}),"\n"]}),"\n"]}),(0,r.jsx)(t.p,{children:"What\u2019s here today can be considered a minimal, useful proof-of-concept."})]}),"\n",(0,r.jsx)(t.h3,{id:"reduction-guarantees",children:"Reduction guarantees"}),"\n",(0,r.jsxs)(t.p,{children:["In Flow, documents that share the same collection key and are written to the same logical partition have a ",(0,r.jsx)(t.strong,{children:"total order,"})," meaning that one document is universally understood to have been written before the other."]}),"\n",(0,r.jsx)(t.p,{children:"This isn't true of documents of the same key written to different logical partitions. These documents can be considered \u201cmostly\u201d ordered: Flow uses timestamps to understand the relative ordering of these documents, and while this largely produces the desired outcome, small amounts of re-ordering are possible and even likely."}),"\n",(0,r.jsxs)(t.p,{children:["Flow guarantees ",(0,r.jsx)(t.strong,{children:"exactly-once"})," semantics within derived collections and materializations (so long as the target system supports transactions), and a document reduction will be applied exactly one time."]}),"\n",(0,r.jsxs)(t.p,{children:["Flow does ",(0,r.jsx)(t.em,{children:"not"})," guarantee that documents are reduced in sequential order, directly into a base document. For example, documents of a single Flow capture transaction are combined together into one document per collection key at capture time \u2013 and that document may be again combined with still others, and so on until a final reduction into the base document occurs."]}),"\n",(0,r.jsxs)(t.p,{children:["Taken together, these total-order and exactly-once guarantees mean that reduction strategies must be ",(0,r.jsx)(t.em,{children:"associative"})," [as in (2 + 3) + 4 = 2 + (3 + 4) ], but need not be commutative [ 2 + 3 = 3 + 2 ] or idempotent [ S u S = S ]. They expand the palette of strategies that can be implemented, and allow for more efficient implementations as compared to, for example ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type",children:"CRDTs"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In this documentation, we\u2019ll refer to the \u201cleft-hand side\u201d (LHS) as the preceding document and the \u201cright-hand side\u201d (RHS) as the following one. Keep in mind that both the LHS and RHS may themselves represent a combination of still more ordered documents because, for example, reductions are applied ",(0,r.jsx)(t.em,{children:"associatively"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);