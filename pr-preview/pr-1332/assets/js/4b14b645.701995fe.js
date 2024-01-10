"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),y=o,f=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},c="MySQL Batch Query Connector",i={unversionedId:"reference/Connectors/capture-connectors/mysql-batch",id:"reference/Connectors/capture-connectors/mysql-batch",title:"MySQL Batch Query Connector",description:"This connector captures data from MySQL into Flow collections by periodically",source:"@site/docs/reference/Connectors/capture-connectors/mysql-batch.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/mysql-batch",permalink:"/pr-preview/pr-1332/reference/Connectors/capture-connectors/mysql-batch",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/mysql-batch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Google Drive",permalink:"/pr-preview/pr-1332/reference/Connectors/capture-connectors/google-drive"},next:{title:"PostgreSQL Batch Query Connector",permalink:"/pr-preview/pr-1332/reference/Connectors/capture-connectors/postgres-batch"}},s={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql-batch-query-connector"},"MySQL Batch Query Connector"),(0,o.kt)("p",null,"This connector captures data from MySQL into Flow collections by periodically\nexecuting queries and translating the results into JSON documents."),(0,o.kt)("p",null,"We recommend using our ",(0,o.kt)("a",{parentName:"p",href:"http://go.estuary.dev/source-mysql"},"MySQL CDC Connector"),"\ninstead where possible. Using CDC provides lower latency data capture, delete and\nupdate events, and usually has a smaller impact on the source database."),(0,o.kt)("p",null,"However there are some circumstances where this might not be feasible. Perhaps you need\nto capture from a managed MySQL instance which doesn't support logical replication. Or\nperhaps you need to capture the contents of a view or the result of an ad-hoc query.\nThat's the sort of situation this connector is intended for."),(0,o.kt)("p",null,"The number one caveat you need to be aware of when using this connector is that ",(0,o.kt)("strong",{parentName:"p"},"it will\nperiodically execute its update query over and over"),". The default polling interval is set\nto 24 hours to minimize the impact of this behavior, but even then it could mean a lot of\nduplicated data being processed depending on the size of your tables."),(0,o.kt)("p",null,"If the dataset has a natural cursor which could be used to identify only new or updated\nrows, this should be specified by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cursor")," property of the binding. Common\nexamples of suitable cursors include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update timestamps, which are usually the best choice if available since they\ncan be used to identify all changed rows, not just updates."),(0,o.kt)("li",{parentName:"ul"},"Creation timestamps, which can be used to identify newly added rows in append-only\ndatasets but can't be used to identify updates."),(0,o.kt)("li",{parentName:"ul"},"Serially increasing IDs can also be used to identify newly added rows.")))}d.isMDXComponent=!0}}]);