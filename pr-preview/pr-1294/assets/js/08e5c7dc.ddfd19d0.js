"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Confluence",c={unversionedId:"reference/Connectors/capture-connectors/confluence",id:"reference/Connectors/capture-connectors/confluence",title:"Confluence",description:"This connector captures data from Confluence into Flow collections via the Confluence Cloud REST API.",source:"@site/docs/reference/Connectors/capture-connectors/confluence.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/confluence",permalink:"/pr-preview/pr-1294/reference/Connectors/capture-connectors/confluence",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/confluence.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Chargebee",permalink:"/pr-preview/pr-1294/reference/Connectors/capture-connectors/chargebee"},next:{title:"Exchange Rates API",permalink:"/pr-preview/pr-1294/reference/Connectors/capture-connectors/exchange-rates"}},l={},s=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"resources",id:"resources",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Sample",id:"sample",level:3}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"confluence"},"Confluence"),(0,o.kt)("p",null,"This connector captures data from Confluence into Flow collections via the Confluence ",(0,o.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/confluence/rest/v1/intro/#about"},"Cloud REST API"),"."),(0,o.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,o.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-confluence:dev"},(0,o.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-confluence:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/confluence/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,o.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,o.kt)("p",null,"When you ",(0,o.kt)("a",{parentName:"p",href:"#endpoint"},"configure the connector"),", you specify your email, api and domain name"),(0,o.kt)("p",null,"From your selection, the following data resources are captured:"),(0,o.kt)("h3",{id:"resources"},"resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-audit/#api-wiki-rest-api-audit-get"},"Audit")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-content/#api-wiki-rest-api-content-get"},"Blog Posts")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-group/#api-wiki-rest-api-group-get"},"Group")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-content/#api-wiki-rest-api-content-get"},"Pages")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/rest/api-group-space/#api-wiki-rest-api-space-get"},"Space")," ")),(0,o.kt)("p",null,"Each resource is mapped to a Flow collection through a separate binding."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Atlassian API Token"),(0,o.kt)("li",{parentName:"ul"},"Your Confluence domain name"),(0,o.kt)("li",{parentName:"ul"},"Your Confluence login email")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1294/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the GitHub source connector."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an API Token ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For detailed instructions on creating an Atlassian API Token, please refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/"},"official documentation"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Set up the Confluence connector in Estuary Flow")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Log into Estuary Flow and click "Captures".'),(0,o.kt)("li",{parentName:"ul"},'Select "Create Capture" search for and click on "Confluence"'),(0,o.kt)("li",{parentName:"ul"},"Enter a Capture Name"),(0,o.kt)("li",{parentName:"ul"},'In the "API Token" field, enter your Atlassian API Token'),(0,o.kt)("li",{parentName:"ul"},'In the "Domain Name" field, enter your Confluence Domain name'),(0,o.kt)("li",{parentName:"ul"},'In the "Email" field, enter your Confluence login email'),(0,o.kt)("li",{parentName:"ul"},'Click "Save and Publish"')),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-confluence:dev\n          config:\n            credentials:\n              api_token: PAT Credentials\n            domain_name: estuary1.atlassian.net\n            email: dave@estuary.dev\n      bindings:\n        - resource:\n            stream: audit\n            syncMode: full_refresh\n          target: ${PREFIX}/audit\n       {...}\n")))}f.isMDXComponent=!0}}]);