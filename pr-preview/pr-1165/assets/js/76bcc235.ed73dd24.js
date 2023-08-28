"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={sidebar_position:1},i="Freshdesk",o={unversionedId:"reference/Connectors/capture-connectors/freshdesk",id:"reference/Connectors/capture-connectors/freshdesk",title:"Freshdesk",description:"This connector captures Freshdesk data into Flow collections via the Freshdesk API.",source:"@site/docs/reference/Connectors/capture-connectors/freshdesk.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/freshdesk",permalink:"/pr-preview/pr-1165/reference/Connectors/capture-connectors/freshdesk",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/freshdesk.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Facebook Marketing",permalink:"/pr-preview/pr-1165/reference/Connectors/capture-connectors/facebook-marketing"},next:{title:"GitHub",permalink:"/pr-preview/pr-1165/reference/Connectors/capture-connectors/github"}},l={},p=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"freshdesk"},"Freshdesk"),(0,n.kt)("p",null,"This connector captures Freshdesk data into Flow collections via the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.freshdesk.com/api/#introduction"},"Freshdesk API"),"."),(0,n.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-freshdesk:dev"},(0,n.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-freshdesk:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,n.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/freshdesk/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,n.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,n.kt)("p",null,"The following data resources are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#agents"},"Agents")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#business-hours"},"Business hours")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#list_all_canned_response_folders"},"Canned response folders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#canned-responses"},"Canned responses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#companies"},"Companies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#contacts"},"Contacts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#conversations"},"Conversations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#category_attributes"},"Discussion categories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#comment_attributes"},"Discussion comments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#forum_attributes"},"Discussion forums")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#topic_attributes"},"Discussion topics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#email-configs"},"Email configs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#email-mailboxes"},"Email mailboxes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#groups"},"Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#products"},"Products")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#roles"},"Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#satisfaction-ratings"},"Satisfaction ratings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#scenario-automations"},"Scenario automations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#settings"},"Settings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#skills"},"Skills")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#sla-policies"},"SLA policies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#solution_article_attributes"},"Solution articles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#solution_category_attributes"},"Solution categories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#solution_folder_attributes"},"Solution folders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#surveys"},"Surveys")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#ticket-fields"},"Ticket fields")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#tickets"},"Tickets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/#time-entries"},"Time entries"))),(0,n.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To use this connector, you'll need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("a",{parentName:"li",href:"https://support.freshdesk.com/en/support/solutions/articles/237264-how-do-i-find-my-freshdesk-account-url-using-my-email-address-"},"Freshdesk account URL")),(0,n.kt)("li",{parentName:"ul"},"Your ",(0,n.kt)("a",{parentName:"li",href:"https://support.freshdesk.com/en/support/solutions/articles/215517"},"Freshdesk API key"))),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1165/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Freshdesk source connector."),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"endpoint"},"Endpoint"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/api_key"))),(0,n.kt)("td",{parentName:"tr",align:null},"API Key"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://support.freshdesk.com/en/support/solutions/articles/215517"},"Freshdesk API Key.")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/domain"))),(0,n.kt)("td",{parentName:"tr",align:null},"Domain"),(0,n.kt)("td",{parentName:"tr",align:null},"Freshdesk domain"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/requests_per_minute")),(0,n.kt)("td",{parentName:"tr",align:null},"Requests per minute"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of requests per minute that this source is allowed to use. There is a rate limit of 50 requests per minute per app per account."),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,n.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,n.kt)("td",{parentName:"tr",align:null},"UTC date and time. Any data created after this date will be replicated. If this parameter is not set, all data will be replicated."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"bindings"},"Bindings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,n.kt)("td",{parentName:"tr",align:null},"Stream"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource from the Freshdesk API from which a collection is captured."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,n.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,n.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h3",{id:"sample"},"Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-freshdesk:dev\n        config:\n            api_key: xxxxxxxxxxxxxxxx\n            domain: acmesupport.freshdesk.com\n    bindings:\n      - resource:\n          stream: agents\n          syncMode: incremental\n        target: ${PREFIX}/agents\n      {...}\n")))}u.isMDXComponent=!0}}]);