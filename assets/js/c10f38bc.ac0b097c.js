"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4730],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4912:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},s="Amplitude",p={unversionedId:"reference/Connectors/capture-connectors/amplitude",id:"reference/Connectors/capture-connectors/amplitude",title:"Amplitude",description:"This connector captures data from Amplitude into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/amplitude.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amplitude",permalink:"/reference/Connectors/capture-connectors/amplitude",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amplitude.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Amazon S3",permalink:"/reference/Connectors/capture-connectors/amazon-s3"},next:{title:"Apache Kafka",permalink:"/reference/Connectors/capture-connectors/apache-kafka"}},c={},u=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"amplitude"},"Amplitude"),(0,o.kt)("p",null,"This connector captures data from Amplitude into Flow collections."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/airbyte-source-amplitude:dev"},(0,o.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/airbyte-source-amplitude:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/amplitude/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,o.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,o.kt)("p",null,"The following data resources are supported through the Amplitude APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/dashboard-rest-api#active-and-new-user-counts"},"Active User Counts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/chart-annotations-api#get-all-annotations"},"Annotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/dashboard-rest-api#average-session-length"},"Average Session Length")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/behavioral-cohorts-api#listing-all-cohorts"},"Cohorts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.amplitude.com/docs/export-api#export-api---export-your-projects-event-data"},"Events"))),(0,o.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An Amplitude project with an ",(0,o.kt)("a",{parentName:"li",href:"https://help.amplitude.com/hc/en-us/articles/360058073772-Create-and-manage-organizations-and-projects"},"API Key and Secret Key"))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog spec YAML.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and YAML sample below provide configuration details specific to the Facebook Marketing source connector."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/api_key"))),(0,o.kt)("td",{parentName:"tr",align:null},"API Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Amplitude API Key."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/secret_key"))),(0,o.kt)("td",{parentName:"tr",align:null},"Secret Key"),(0,o.kt)("td",{parentName:"tr",align:null},"Amplitude Secret Key."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,o.kt)("td",{parentName:"tr",align:null},"Replication Start Date"),(0,o.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h4",{id:"bindings"},"Bindings"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,o.kt)("td",{parentName:"tr",align:null},"Stream"),(0,o.kt)("td",{parentName:"tr",align:null},"Resource of your Amplitude project from which collections are captured."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,o.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,o.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/airbyte-source-amplitude:dev\n        config:\n            api_key: <secret>\n            secret_key: <secret>\n            start_date: 2022-06-18T00:00:00Z\n    bindings:\n      - resource:\n          stream: cohorts\n          syncMode: full_refresh\n        target: ${PREFIX}/cohorts\n      - resource:\n          stream: annotations\n          syncMode: full_refresh\n        target: ${PREFIX}/annotations\n      - resource:\n          stream: events\n          syncMode: incremental\n        target: ${PREFIX}/events\n      - resource:\n          stream: active_users\n          syncMode: incremental\n        target: ${PREFIX}/activeusers\n      - resource:\n          stream: average_session_length\n          syncMode: incremental\n        target: ${PREFIX}/averagesessionlength\n")))}m.isMDXComponent=!0}}]);