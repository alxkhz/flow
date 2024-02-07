"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l="Snapchat Marketing",o={unversionedId:"reference/Connectors/capture-connectors/snapchat",id:"reference/Connectors/capture-connectors/snapchat",title:"Snapchat Marketing",description:"This connector captures data from Snapchat Marketing into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/snapchat.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/snapchat",permalink:"/pr-preview/pr-1369/reference/Connectors/capture-connectors/snapchat",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/snapchat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slack",permalink:"/pr-preview/pr-1369/reference/Connectors/capture-connectors/slack"},next:{title:"Stripe",permalink:"/pr-preview/pr-1369/reference/Connectors/capture-connectors/stripe"}},p={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snapchat-marketing"},"Snapchat Marketing"),(0,r.kt)("p",null,"This connector captures data from Snapchat Marketing into Flow collections."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-snapchat:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-snapchat:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/snapchat/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"This connector can be used to sync the following tables from Snapchat:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adaccounts"),(0,r.kt)("li",{parentName:"ul"},"Ads"),(0,r.kt)("li",{parentName:"ul"},"Adsquads"),(0,r.kt)("li",{parentName:"ul"},"Campaigns"),(0,r.kt)("li",{parentName:"ul"},"Creatives"),(0,r.kt)("li",{parentName:"ul"},"Media"),(0,r.kt)("li",{parentName:"ul"},"Organizations"),(0,r.kt)("li",{parentName:"ul"},"Segments"),(0,r.kt)("li",{parentName:"ul"},"AdaccountsStatsHourly"),(0,r.kt)("li",{parentName:"ul"},"AdaccountsStatsDaily"),(0,r.kt)("li",{parentName:"ul"},"AdaccountsStatsLifetime"),(0,r.kt)("li",{parentName:"ul"},"AdsStatsHourly"),(0,r.kt)("li",{parentName:"ul"},"AdsStatsDaily"),(0,r.kt)("li",{parentName:"ul"},"AdsStatsHourly"),(0,r.kt)("li",{parentName:"ul"},"AdsStatsDaily"),(0,r.kt)("li",{parentName:"ul"},"AdsStatsLifetime"),(0,r.kt)("li",{parentName:"ul"},"AdsquadsStatsDaily"),(0,r.kt)("li",{parentName:"ul"},"AdsquadsStatsLifetime"),(0,r.kt)("li",{parentName:"ul"},"CampaignsStatsHourly"),(0,r.kt)("li",{parentName:"ul"},"CampaignsStatsDaily"),(0,r.kt)("li",{parentName:"ul"},"CampaignsStatsLifetime")),(0,r.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Snapchat Marketing account with permission to access data from accounts you want to sync.")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1369/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Snapchat source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/end_date")),(0,r.kt)("td",{parentName:"tr",align:null},"End Date"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource of your Snapchat project from which collections are captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-snapchat:dev\n        config:\n          start_date: 2017-01-25T00:00:00Z\n          end_date: 2018-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: lists\n          syncMode: full_refresh\n        target: ${PREFIX}/lists\n      {...}\n")))}d.isMDXComponent=!0}}]);