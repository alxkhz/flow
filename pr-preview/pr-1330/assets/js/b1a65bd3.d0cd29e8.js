"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8349:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="YouTube Analytics",i={unversionedId:"reference/Connectors/capture-connectors/youtube-analytics",id:"reference/Connectors/capture-connectors/youtube-analytics",title:"YouTube Analytics",description:"This connector captures data from YouTube Analytics into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/youtube-analytics.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/youtube-analytics",permalink:"/pr-preview/pr-1330/reference/Connectors/capture-connectors/youtube-analytics",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/youtube-analytics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Twilio",permalink:"/pr-preview/pr-1330/reference/Connectors/capture-connectors/twilio"},next:{title:"Zendesk Chat",permalink:"/pr-preview/pr-1330/reference/Connectors/capture-connectors/zendesk-chat"}},p={},s=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"youtube-analytics"},"YouTube Analytics"),(0,a.kt)("p",null,"This connector captures data from YouTube Analytics into Flow collections."),(0,a.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,a.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-youtube-analytics:dev"},(0,a.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-youtube-analytics:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,a.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."),(0,a.kt)("p",null,"You can find their documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/youtube-analytics/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,a.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,a.kt)("p",null,"The following data resources are supported through the YouTube Analytics APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-annotations"},"channel_annotations_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-user-activity"},"channel_basic_a2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-cards"},"channel_cards_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-combined"},"channel_combined_a2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-viewer-demographics"},"channel_demographics_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-device-type-and-operating-system"},"channel_device_os_a2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-end-screens"},"channel_end_screens_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-playback-locations"},"channel_playback_location_a2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-province"},"channel_province_a2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-content-sharing"},"channel_sharing_service_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-subtitles"},"channel_subtitles_a2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#video-traffic-sources"},"channel_traffic_source_a2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-user-activity"},"playlist_basic_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-combined"},"playlist_combined_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-device-type-and-operating-system"},"playlist_device_os_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-playback-locations"},"playlist_playback_location_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-province"},"playlist_province_a1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/youtube/reporting/v1/reports/channel_reports#playlist-traffic-sources"},"playlist_traffic_source_a1"))),(0,a.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the YouTube Analytics source connector."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("h4",{id:"endpoint"},"Endpoint"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/client_id"))),(0,a.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Your Client ID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/client_secret"))),(0,a.kt)("td",{parentName:"tr",align:null},"Secret Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Your Client Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/refresh_token"))),(0,a.kt)("td",{parentName:"tr",align:null},"Refresh Token"),(0,a.kt)("td",{parentName:"tr",align:null},"Your Refresh Token"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h4",{id:"bindings"},"Bindings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Title"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,a.kt)("td",{parentName:"tr",align:null},"Stream"),(0,a.kt)("td",{parentName:"tr",align:null},"Resource of your YouTube Analytics project from which collections are captured."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,a.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h3",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-youtube-analytics:dev\n        config:\n          credentials:\n            auth_type: OAuth\n    bindings:\n      - resource:\n          stream: channel_annotations_a1\n          syncMode: incremental\n        target: ${PREFIX}/channel_annotations_a1\n      {...}\n")))}d.isMDXComponent=!0}}]);