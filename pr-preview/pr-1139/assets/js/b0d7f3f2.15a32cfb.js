"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="Zendesk Chat",s={unversionedId:"reference/Connectors/capture-connectors/zendesk-chat",id:"reference/Connectors/capture-connectors/zendesk-chat",title:"Zendesk Chat",description:"This connector captures data from Zendesk into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/zendesk-chat.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/zendesk-chat",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/zendesk-chat",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/zendesk-chat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"YouTube Analytics",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/youtube-analytics"},next:{title:"Zendesk Support",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/zendesk-support"}},i={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zendesk-chat"},"Zendesk Chat"),(0,a.kt)("p",null,"This connector captures data from Zendesk into Flow collections."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-zendesk-chat:dev"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-zendesk-chat:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/zendesk-chat/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,a.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,a.kt)("p",null,"The following data resources are supported through the Zendesk API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/accounts#show-account"},"Accounts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/agents#list-agents"},"Agents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/incremental_export#incremental-agent-timeline-export"},"Agent Timelines")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/chats#list-chats"},"Chats")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/shortcuts#list-shortcuts"},"Shortcuts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/triggers#list-triggers"},"Triggers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/bans#list-bans"},"Bans")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/departments#list-departments"},"Departments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/goals#list-goals"},"Goals")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/skills#list-skills"},"Skills")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/roles#list-roles"},"Roles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/routing_settings#show-account-routing-settings"},"Routing Settings"))),(0,a.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Zendesk Account with permission to access data from accounts you want to sync."),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("a",{parentName:"li",href:"https://developer.zendesk.com/rest_api/docs/chat/auth"},"Access Token"),". We recommend creating a restricted, read-only key specifically for Estuary access to allow you to control which resources Estuary should be able to access.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification files.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1139/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Zendesk Chat source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,a.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,a.kt)("td",{parentName:"tr",align:null},"The date from which you would like to replicate data for Zendesk Support API, in the format YYYY-MM-DDT00:00:00Z. All data generated after this date will be replicated."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/subdomain"))),(0,a.kt)("td",{parentName:"tr",align:null},"Subdomain"),(0,a.kt)("td",{parentName:"tr",align:null},"This is your Zendesk subdomain that can be found in your account URL."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource in Zendesk from which collections are captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-zendesk-chat:dev\n        config:\n            credentials:\n              access_token: <secret>\n              credentials: access_token\n            start_date: 2022-03-01T00:00:00Z\n            subdomain: my_subdomain\n    bindings:\n      - resource:\n          stream: accounts\n          syncMode: full_refresh\n        target: ${PREFIX}/accounts\n")))}d.isMDXComponent=!0}}]);