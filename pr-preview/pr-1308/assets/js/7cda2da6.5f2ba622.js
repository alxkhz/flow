"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=u(r),d=i,y=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={description:"Using the sum reduction strategy",sidebar_position:6},s="sum",a={unversionedId:"reference/reduction-strategies/sum",id:"reference/reduction-strategies/sum",title:"sum",description:"Using the sum reduction strategy",source:"@site/docs/reference/reduction-strategies/sum.md",sourceDirName:"reference/reduction-strategies",slug:"/reference/reduction-strategies/sum",permalink:"/pr-preview/pr-1308/reference/reduction-strategies/sum",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/reduction-strategies/sum.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Using the sum reduction strategy",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/pr-preview/pr-1308/reference/reduction-strategies/set"},next:{title:"Composing with conditionals",permalink:"/pr-preview/pr-1308/reference/reduction-strategies/composing-with-conditionals"}},c={},u=[],p={toc:u},l="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sum"},"sum"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sum")," reduces two numbers or integers by adding their values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  - name: example/reductions/sum\n    schema:\n      type: object\n      reduce: { strategy: merge }\n      properties:\n        key: { type: string }\n        value:\n          # Sum only works with types "number" or "integer".\n          # Others will throw an error at build time.\n          type: number\n          reduce: { strategy: sum }\n      required: [key]\n    key: [/key]\n\ntests:\n  "Expect we can sum two numbers":\n    - ingest:\n        collection: example/reductions/sum\n        documents:\n          - { key: "key", value: 5 }\n          - { key: "key", value: -1.2 }\n    - verify:\n        collection: example/reductions/sum\n        documents:\n          - { key: "key", value: 3.8 }\n')))}m.isMDXComponent=!0}}]);