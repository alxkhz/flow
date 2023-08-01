"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,description:"Get to know Estuary Flow and learn how to get started.",slug:"/"},i="Flow documentation",s={unversionedId:"overview/README",id:"overview/README",title:"Flow documentation",description:"Get to know Estuary Flow and learn how to get started.",source:"@site/docs/overview/README.md",sourceDirName:"overview",slug:"/",permalink:"/pr-preview/pr-1129/",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/overview/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Get to know Estuary Flow and learn how to get started.",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Who should use Flow?",permalink:"/pr-preview/pr-1129/overview/who-should-use-flow"}},l={},u=[{value:"Real-time data and Flow",id:"real-time-data-and-flow",level:2},{value:"Quick start",id:"quick-start",level:3},{value:"<strong>Other resources</strong>",id:"other-resources",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flow-documentation"},"Flow documentation"),(0,n.kt)("p",null,"Estuary Flow is a DataOps platform designed to democratize access to real-time data."),(0,n.kt)("p",null,"With Flow, you build, test, and evolve real-time pipelines (called ",(0,n.kt)("strong",{parentName:"p"},"data flows")," in the Flow ecosystem) that continuously capture, transform, and materialize data across all of your systems."),(0,n.kt)("p",null,"You work with Flow through its intuitive web application or using the command line interface.\nThe system is designed so that whole teams of data stakeholders can collaborate on the same data flows. Business users and analysts can configure data flows to connect disparate systems in minutes,\nand engineers can then refine those data flows, troubleshoot, and configure complex transformations in their preferred environment."),(0,n.kt)("h2",{id:"real-time-data-and-flow"},"Real-time data and Flow"),(0,n.kt)("p",null,"Flow synchronizes your systems \u2013 SaaS, databases, streaming, and more \u2013 around the same datasets, which it stores in the cloud and updates in milliseconds. It combines the easy cross-system integration of an ELT tool and a flexible streaming backbone,\nall while remaining aware of your data's complete history."),(0,n.kt)("p",null,"A few examples of what you can do with Flow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Perform ",(0,n.kt)("em",{parentName:"li"},"change data capture")," from MySQL tables into PostgreSQL or a cloud analytics warehouse"),(0,n.kt)("li",{parentName:"ul"},"Fetch, transform, and load logs from cloud delivery networks (CDNs) into Elasticsearch or BigQuery"),(0,n.kt)("li",{parentName:"ul"},"Instrument real-time analytics over your business events, accessible from current tools like PostgreSQL or even Google Sheets"),(0,n.kt)("li",{parentName:"ul"},"Capture and organize your data from your SaaS vendors (like Hubspot or Facebook), into a Parquet data lake")),(0,n.kt)("p",null,"Under the hood, Flow comprises cloud-native streaming infrastructure, a powerful runtime for data processing,\nand an open-source ecosystem of pluggable connectors for integrating your existing data systems."),(0,n.kt)("h3",{id:"quick-start"},"Quick start"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Want to get up and running ASAP?")),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1129/getting-started/installation"},"get started documentation"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Wondering if Flow is right for you?")),(0,n.kt)("p",null,"If you're unsure if Flow is the right solution for your data integration needs, you can read about the technical benefits and clear comparisons with similar systems that may be familiar to you."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/pr-preview/pr-1129/overview/who-should-use-flow"},"Who should use Flow?"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/pr-preview/pr-1129/overview/comparisons"},"Comparisons with other systems")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Looking to understand the concepts behind Flow at a deeper level?")),(0,n.kt)("p",null,"We recommend starting with a tutorial or ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1129/guides/create-dataflow"},"guide")," to get acquainted with basic Flow concepts in action.\nAfter that, read the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/pr-preview/pr-1129/concepts/"},"Concepts"))," to go deeper."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"other-resources"},(0,n.kt)("strong",{parentName:"h3"},"Other resources")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Our ",(0,n.kt)("a",{parentName:"li",href:"https://www.estuary.dev"},"website")," offers general information about Flow, Estuary, and how we fit into the data infrastructure landscape."),(0,n.kt)("li",{parentName:"ul"},"Our source code lives on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/estuary"},"GitHub"),".")))}d.isMDXComponent=!0}}]);