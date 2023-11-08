"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="Configuring task shards",l={unversionedId:"reference/Configuring-task-shards",id:"reference/Configuring-task-shards",title:"Configuring task shards",description:"For some catalog tasks, it's helpful to control the behavior of shards",source:"@site/docs/reference/Configuring-task-shards.md",sourceDirName:"reference",slug:"/reference/Configuring-task-shards",permalink:"/pr-preview/pr-1279/reference/Configuring-task-shards",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Configuring-task-shards.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Editing considerations",permalink:"/pr-preview/pr-1279/reference/editing"},next:{title:"Reduction strategies",permalink:"/pr-preview/pr-1279/reference/reduction-strategies/"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"Sample",id:"sample",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-task-shards"},"Configuring task shards"),(0,a.kt)("p",null,"For some catalog tasks, it's helpful to control the behavior of ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/advanced/shards"},"shards"),"\nYou do this by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"shards")," configuration to the capture or materialization configuration."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/disable")),(0,a.kt)("td",{parentName:"tr",align:null},"Disable"),(0,a.kt)("td",{parentName:"tr",align:null},"Disable processing of the task's shards."),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/logLevel")),(0,a.kt)("td",{parentName:"tr",align:null},"Log level"),(0,a.kt)("td",{parentName:"tr",align:null},'Log levels may currently be \\"error\\", \\"warn\\", \\"info\\", \\"debug\\", or \\"trace\\". If not set, the effective log level is \\"info\\".'),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/maxTxnDuration")),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum transaction duration"),(0,a.kt)("td",{parentName:"tr",align:null},"This duration upper-bounds the amount of time during which a transaction may process documents before it must initiate a commit. Note that it may take some additional time for the commit to complete after it is initiated. The shard may run for less time if there aren't additional ready documents for it to process. If not set, the maximum duration defaults to one second for captures and derivations, and 5 minutes for materializations."),(0,a.kt)("td",{parentName:"tr",align:null},"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/minTxnDuration")),(0,a.kt)("td",{parentName:"tr",align:null},"Minimum transaction duration"),(0,a.kt)("td",{parentName:"tr",align:null},"This duration lower-bounds the amount of time during which a transaction must process documents before it must flush and commit. It may run for more time if additional documents are available. The default value is zero seconds."),(0,a.kt)("td",{parentName:"tr",align:null},"String")))),(0,a.kt)("p",null,"For more information about these controls and when you might need to use them, see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-1279/concepts/advanced/shards#transactions"},"Transactions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-1279/concepts/advanced/logs-stats#log-level"},"Log level"))),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  acmeCo/snowflake-materialization:\n    endpoint:\n      connector:\n        config:\n          account: acmeCo\n          database: acmeCo_db\n          password: secret\n          cloud_provider: aws\n          region: us-east-1\n          schema: acmeCo_flow_schema\n          user: snowflake_user\n          warehouse: acmeCo_warehouse\n        image: ghcr.io/estuary/materialize-snowflake:dev\n    bindings:\n    - resource:\n        table: anvils\n      source: acmeCo/anvils\n    shards:\n      logLevel: debug\n      minTxnDuration: 30s\n      maxTxnDuration: 4m\n")))}d.isMDXComponent=!0}}]);