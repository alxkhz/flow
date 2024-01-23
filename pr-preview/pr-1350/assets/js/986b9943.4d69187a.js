"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2705],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=d(n),c=r,m=s["".concat(p,".").concat(c)]||s[c]||k[c]||l;return n?a.createElement(m,i(i({ref:e},u),{},{components:n})):a.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3991:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={},i="TikTok Marketing",o={unversionedId:"reference/Connectors/capture-connectors/tiktok",id:"reference/Connectors/capture-connectors/tiktok",title:"TikTok Marketing",description:"This connector captures data from TikTok marketing campaigns and ads into Flow collections via the TikTok API for Business. It supports production as well as sandbox accounts.",source:"@site/docs/reference/Connectors/capture-connectors/tiktok.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/tiktok",permalink:"/pr-preview/pr-1350/reference/Connectors/capture-connectors/tiktok",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/tiktok.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Survey Monkey",permalink:"/pr-preview/pr-1350/reference/Connectors/capture-connectors/survey-monkey"},next:{title:"Twilio",permalink:"/pr-preview/pr-1350/reference/Connectors/capture-connectors/twilio"}},p={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"OAuth authentication in the web app (production accounts)",id:"oauth-authentication-in-the-web-app-production-accounts",level:3},{value:"Sandbox access token authentication in the web app or CLI",id:"sandbox-access-token-authentication-in-the-web-app-or-cli",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Report aggregation",id:"report-aggregation",level:2}],u={toc:d},s="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tiktok-marketing"},"TikTok Marketing"),(0,r.kt)("p",null,"This connector captures data from TikTok marketing campaigns and ads into Flow collections via the ",(0,r.kt)("a",{parentName:"p",href:"https://ads.tiktok.com/marketing_api/docs"},"TikTok API for Business"),". It supports production as well as ",(0,r.kt)("a",{parentName:"p",href:"https://ads.tiktok.com/marketing_api/docs?id=1738855331457026"},"sandbox")," accounts."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-tiktok-marketing:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-tiktok-marketing:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/tiktok-marketing"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"The following data resources are supported:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"Production"),(0,r.kt)("th",{parentName:"tr",align:null},"Sandbox"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advertisers"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Groups"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ads"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Campaigns"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ads Reports Hourly"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ads Reports Daily"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ads Reports Lifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advertisers Reports Hourly"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advertisers Reports Daily"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advertisers Reports Lifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Groups Reports Hourly"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Groups Reports Daily"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Groups Reports Lifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Campaigns Reports Hourly"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Campaigns Reports Daily"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Campaigns Reports Lifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advertisers Audience Reports Hourly"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advertisers Audience Reports Daily"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advertisers Audience Reports Lifetime"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Group Audience Reports Hourly"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ad Group Audience Reports Daily"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ads Audience Reports Hourly"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ads Audience Reports Daily"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Campaigns Audience Reports By Country Hourly"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Campaigns Audience Reports By Country Daily"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"X")))),(0,r.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Prerequisites differ depending on whether you have a production or ",(0,r.kt)("a",{parentName:"p",href:"https://ads.tiktok.com/marketing_api/docs?id=1738855331457026"},"sandbox"),"\nTikTok for Business account, and on whether you'll use the Flow web app or the flowctl CLI."),(0,r.kt)("h3",{id:"oauth-authentication-in-the-web-app-production-accounts"},"OAuth authentication in the web app (production accounts)"),(0,r.kt)("p",null,"If you have a TikTok marketing account in production and will use the Flow web app, you'll be able to quickly log in using OAuth."),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1702715936951297"},"TikTok for Business account")," with one or more active campaigns."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note the username and password used to sign into this account")))),(0,r.kt)("h3",{id:"sandbox-access-token-authentication-in-the-web-app-or-cli"},"Sandbox access token authentication in the web app or CLI"),(0,r.kt)("p",null,"If you're working in a Sandbox TikTok for Business account, you'll authenticate with an access token in both the web app and CLI."),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1702715936951297"},"TikTok for Business account"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1701890920013825"},"Sandbox account")," created under an existing\n",(0,r.kt)("a",{parentName:"p",href:"https://ads.tiktok.com/marketing_api/docs?rid=fgvgaumno25&id=1702716474845185"},"developer application"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generate an access token and note the advertiser ID for the Sandbox.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1350/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the TikTok Marketing source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The properties in the table below reflect the manual authentication method for Sandbox accounts.\nIf you're using a production account, you'll use ",(0,r.kt)("a",{parentName:"p",href:"#oauth-authentication-in-the-web-app-production-accounts"},"OAuth2")," to authenticate in the Flow web app,\nso many of these properties aren't required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication method"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/auth_type"))),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication type"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"sandbox_access_token")," to manually authenticate a Sandbox."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/advertiser_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Advertiser ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The Advertiser ID generated for the developer's Sandbox application."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/access_token")),(0,r.kt)("td",{parentName:"tr",align:null},"Access Token"),(0,r.kt)("td",{parentName:"tr",align:null},"The long-term authorized access token."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/end_date")),(0,r.kt)("td",{parentName:"tr",align:null},"End Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date until which you'd like to replicate data for all incremental streams, in the format YYYY-MM-DD. All data generated between ",(0,r.kt)("inlineCode",{parentName:"td"},"start_date")," and this date will be replicated. Not setting this option will result in always syncing the data till the current date."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/report_granularity")),(0,r.kt)("td",{parentName:"tr",align:null},"Report Aggregation Granularity"),(0,r.kt)("td",{parentName:"tr",align:null},"The granularity used for ",(0,r.kt)("a",{parentName:"td",href:"#report-aggregation"},"aggregating performance data in reports"),". Choose ",(0,r.kt)("inlineCode",{parentName:"td"},"DAY"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LIFETIME"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"HOUR"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Replication Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The Start Date in format: YYYY-MM-DD. Any data before this date will not be replicated. If this parameter is not set, all data will be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"TikTok resource from which a collection is captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample specification reflects the access token method for Sandbox accounts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-tiktok-marketing:dev\n        config:\n          credentials:\n            auth_type: sandbox_access_token\n            access_token: {secret}\n            advertiser_id: {secret}\n          end_date: 2022-01-01\n          report_granularity: DAY\n          start_date: 2020-01-01\n    bindings:\n      - resource:\n          stream: campaigns\n          syncMode: incremental\n        target: ${PREFIX}/campaigns\n      {...}\n")),(0,r.kt)("h2",{id:"report-aggregation"},"Report aggregation"),(0,r.kt)("p",null,"Many of the ",(0,r.kt)("a",{parentName:"p",href:"#supported-data-resources"},"resources")," this connector supports are reports.\nData in these reports is aggregated into rows based on the granularity you select in the ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"configuration"),"."),(0,r.kt)("p",null,"You can choose hourly, daily, or lifetime granularity. For example, if you choose daily granularity, the report will contain one row for each day."))}k.isMDXComponent=!0}}]);