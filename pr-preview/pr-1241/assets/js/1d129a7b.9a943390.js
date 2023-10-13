"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||a;return r?o.createElement(d,s(s({ref:t},l),{},{components:r})):o.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:8},s="Storage mappings",i={unversionedId:"concepts/storage-mappings",id:"concepts/storage-mappings",title:"Storage mappings",description:"Flow stores the documents that comprise your collections in a cloud storage bucket.",source:"@site/docs/concepts/storage-mappings.md",sourceDirName:"concepts",slug:"/concepts/storage-mappings",permalink:"/pr-preview/pr-1241/concepts/storage-mappings",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/storage-mappings.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Schemas",permalink:"/pr-preview/pr-1241/concepts/schemas"},next:{title:"Tests",permalink:"/pr-preview/pr-1241/concepts/tests"}},p={},c=[{value:"Recovery logs",id:"recovery-logs",level:2}],l={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storage-mappings"},"Storage mappings"),(0,n.kt)("p",null,"Flow stores the documents that comprise your collections in a cloud storage bucket.\nYour ",(0,n.kt)("strong",{parentName:"p"},"storage mapping")," tells Flow which bucket to use."),(0,n.kt)("p",null,"When you first register for Flow, your storage mapping is Estuary's secure Google Cloud Storage bucket.\nData in Flow's cloud storage bucket is deleted 30 days after collection."),(0,n.kt)("p",null,"For production workflows, you should ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1241/getting-started/installation#configuring-your-cloud-storage-bucket-for-use-with-flow"},"set up your own cloud storage bucket as a storage mapping"),"."),(0,n.kt)("p",null,"You may also use apply different storage mappings to different ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1241/concepts/catalogs#namespace"},"catalog prefixes")," within your organization's prefix."),(0,n.kt)("p",null,"You can set up a bucket lifecycle policy to manage data retention in your storage mapping;\nfor example, to remove data after six months."),(0,n.kt)("h2",{id:"recovery-logs"},"Recovery logs"),(0,n.kt)("p",null,"In addition to collection data, Flow uses your storage mapping to temporarily store ",(0,n.kt)("strong",{parentName:"p"},"recovery logs"),"."),(0,n.kt)("p",null,"Flow tasks \u2014 captures, derivations, and materializations \u2014 use recovery logs to durably store their processing context as a backup.\nRecovery logs are an opaque binary log, but may contain user data."),(0,n.kt)("p",null,"The recovery logs of a task are always prefixed by ",(0,n.kt)("inlineCode",{parentName:"p"},"recovery/"),",\nso a task named ",(0,n.kt)("inlineCode",{parentName:"p"},"acmeCo/produce-TNT")," would have a recovery log called ",(0,n.kt)("inlineCode",{parentName:"p"},"recovery/acmeCo/roduce-TNT")),(0,n.kt)("p",null,"Flow prunes data from recovery logs once it is no longer required."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Deleting data from recovery logs while it is still in use can\ncause Flow processing tasks to fail permanently.")))}g.isMDXComponent=!0}}]);