"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4134],{61236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(74848),r=n(28453);const a={description:"Using the set reduction strategy",sidebar_position:5},i="set",o={id:"reference/reduction-strategies/set",title:"set",description:"Using the set reduction strategy",source:"@site/docs/reference/reduction-strategies/set.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/set",permalink:"/pr-preview/pr-1428/reference/reduction-strategies/set",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/set.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Using the set reduction strategy",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"minimize and maximize",permalink:"/pr-preview/pr-1428/reference/reduction-strategies/minimize-and-maximize"},next:{title:"sum",permalink:"/pr-preview/pr-1428/reference/reduction-strategies/sum"}},d={},c=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"set",children:"set"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"set"})," interprets the document location as an update to a set."]}),"\n",(0,s.jsx)(t.p,{children:'The location must be an object having only \u201cadd", \u201cintersect", and \u201cremove\u201d properties. Any single \u201cadd", \u201cintersect", or \u201cremove\u201d is always allowed.'}),"\n",(0,s.jsx)(t.p,{children:"A document with \u201cintersect\u201d and \u201cadd\u201d is allowed, and is interpreted as applying the intersection to the left-hand side set, followed by a union with the additions."}),"\n",(0,s.jsx)(t.p,{children:"A document with \u201cremove\u201d and \u201cadd\u201d is also allowed, and is interpreted as applying the removals to the base set, followed by a union with the additions."}),"\n",(0,s.jsx)(t.p,{children:"\u201cremove\u201d and \u201cintersect\u201d within the same document are prohibited."}),"\n",(0,s.jsx)(t.p,{children:"Set additions are deeply merged. This makes sets behave like associative maps, where the \u201cvalue\u201d of a set member can be updated by adding it to the set again, with a reducible update."}),"\n",(0,s.jsx)(t.p,{children:"Sets may be objects, in which case the object property serves as the set item key:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/set\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Sets are always represented as an object.\n          type: object\n          reduce: { strategy: set }\n          # Schema for "add", "intersect", and "remove" properties\n          # (each a map of keys and their associated sums):\n          additionalProperties:\n            type: object\n            additionalProperties:\n              type: number\n              reduce: { strategy: sum }\n            # Flow requires that all parents of locations with a reduce\n            # annotation also have one themselves.\n            # This strategy therefore must (currently) be here, but is ignored.\n            reduce: { strategy: lastWriteWins }\n\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can apply set operations to incrementally build associative maps":\n    - ingest:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 1, "b": 1, "c": 1 } } }\n          - { key: "key", value: { "remove": { "b": 0 } } }\n          - { key: "key", value: { "add": { "a": 1, "d": 1 } } }\n    - verify:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 2, "c": 1, "d": 1 } } }\n    - ingest:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "intersect": { "a": 0, "d": 0 } } }\n          - { key: "key", value: { "add": { "a": 1, "e": 1 } } }\n    - verify:\n        collection: example/reductions/set\n        documents:\n          - { key: "key", value: { "add": { "a": 3, "d": 1, "e": 1 } } }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Sets can also be sorted arrays, which are ordered using a provide ",(0,s.jsx)(t.code,{children:"key"})," extractor. Keys are given as one or more JSON pointers, each relative to the item. As with ",(0,s.jsx)(t.code,{children:"merge"}),", arrays must be pre-sorted and de-duplicated by the key, and set reductions always maintain this invariant."]}),"\n",(0,s.jsxs)(t.p,{children:["Use a key extractor of ",(0,s.jsx)(t.code,{children:"[\u201c\u201d]"})," to apply the natural ordering of scalar values."]}),"\n",(0,s.jsx)(t.p,{children:"Whether array or object types are used, the type must always be consistent across the \u201cadd\u201d / \u201cintersect\u201d / \u201cremove\u201d terms of both sides of the reduction."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'collections:\n  - name: example/reductions/set-array\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Sets are always represented as an object.\n          type: object\n          reduce:\n            strategy: set\n            key: [/0]\n          # Schema for "add", "intersect", & "remove" properties\n          # (each a sorted array of [key, sum] 2-tuples):\n          additionalProperties:\n            type: array\n            # Flow requires that all parents of locations with a reduce\n            # annotation also have one themselves.\n            # This strategy therefore must (currently) be here, but is ignored.\n            reduce: { strategy: lastWriteWins }\n            # Schema for contained [key, sum] 2-tuples:\n            items:\n              type: array\n              items:\n                - type: string\n                - type: number\n                  reduce: { strategy: sum }\n              reduce: { strategy: merge }\n\n      required: [key]\n    key: [/key]\n\ntests:\n  ? "Expect we can apply operations of sorted-array sets to incrementally build associative maps"\n  : - ingest:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 1], ["b", 1], ["c", 1]] } }\n          - { key: "key", value: { "remove": [["b", 0]] } }\n          - { key: "key", value: { "add": [["a", 1], ["d", 1]] } }\n    - verify:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 2], ["c", 1], ["d", 1]] } }\n    - ingest:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "intersect": [["a", 0], ["d", 0]] } }\n          - { key: "key", value: { "add": [["a", 1], ["e", 1]] } }\n    - verify:\n        collection: example/reductions/set-array\n        documents:\n          - { key: "key", value: { "add": [["a", 3], ["d", 1], ["e", 1]] } }\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);