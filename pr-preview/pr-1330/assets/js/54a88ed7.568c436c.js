"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Amazon Ads",l={unversionedId:"reference/Connectors/capture-connectors/amazon-ads",id:"reference/Connectors/capture-connectors/amazon-ads",title:"Amazon Ads",description:"This connector captures data from Amazon Ads into Flow collections via the Amazon Ads API.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-ads.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-ads",permalink:"/pr-preview/pr-1330/reference/Connectors/capture-connectors/amazon-ads",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-ads.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Alpaca",permalink:"/pr-preview/pr-1330/reference/Connectors/capture-connectors/alpaca"},next:{title:"Amazon DynamoDB",permalink:"/pr-preview/pr-1330/reference/Connectors/capture-connectors/amazon-dynamodb"}},p={},s=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Amazon in the Flow web app",id:"using-oauth2-to-authenticate-with-amazon-in-the-flow-web-app",level:3},{value:"Authenticating manually using the CLI",id:"authenticating-manually-using-the-cli",level:3},{value:"Selecting data region and profiles",id:"selecting-data-region-and-profiles",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-ads"},"Amazon Ads"),(0,r.kt)("p",null,"This connector captures data from Amazon Ads into Flow collections via the ",(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us"},"Amazon Ads API"),"."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-amazon-ads:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-amazon-ads:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/amazon-ads/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"The following data resources are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/reference/2/profiles#/Profiles"},"Profiles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Ad%20groups"},"Sponsored brands ad groups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Campaigns"},"Sponsored brands campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Keywords"},"Sponsored brands keywords")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Reports"},"Sponsored brands report stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-brands/3-0/openapi#/Reports"},"Sponsored brands video report stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Ad%20groups"},"Sponsored display ad groups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Campaigns"},"Sponsored display ad campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Product%20ads"},"Sponsored display product ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Reports"}," Sponsored display report stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-display/3-0/openapi#/Targeting"},"Sponsored display targetings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Ad%20groups"},"Sponsored product ad groups")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Product%20ads"},"Sponsored product ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Campaigns"},"Sponsored product campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Keywords"},"Sponsored product keywords")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Negative%20keywords"},"Sponsored product negative keywords")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Product%20targeting"},"Sponsored product targetings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://advertising.amazon.com/API/docs/en-us/sponsored-products/2-0/openapi#/Reports"},"Sponsored product report stream"))),(0,r.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This connector uses OAuth2 to authenticate with Amazon. You can do this in the Flow web app, or configure manually if you're using the flowctl CLI."),(0,r.kt)("h3",{id:"using-oauth2-to-authenticate-with-amazon-in-the-flow-web-app"},"Using OAuth2 to authenticate with Amazon in the Flow web app"),(0,r.kt)("p",null,"You'll need an Amazon user account with ",(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/help?ref_=a20m_us_blg#GDQVHVQMY9F88PCA"},"access")," to the ",(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/register"},"Amazon Ads account")," from which you wish to capture data."),(0,r.kt)("p",null,"You'll use these credentials to sign in."),(0,r.kt)("h3",{id:"authenticating-manually-using-the-cli"},"Authenticating manually using the CLI"),(0,r.kt)("p",null,"When you configure this connector manually, you provide the same credentials that OAuth2 would automatically\nfetch if you used the web app. These are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Client secret")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Refresh token"))),(0,r.kt)("p",null,"To obtain these credentials:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete the ",(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/onboarding/overview"},"Amazon Ads API onboarding process"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/getting-started/retrieve-access-token#retrieve-your-client-id-and-client-secret"},"Retrieve your client ID and client secret"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/getting-started/retrieve-access-token#call-the-authorization-url-to-request-access-and-refresh-tokens"},"Retrieve a refresh token"),"."))),(0,r.kt)("h2",{id:"selecting-data-region-and-profiles"},"Selecting data region and profiles"),(0,r.kt)("p",null,"When you ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"configure the endpoint")," for this connector, you must choose an Amazon region from which to capture data.\nOptionally, you may also select profiles from which to capture data."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"region")," must be one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NA (North America)"),(0,r.kt)("li",{parentName:"ul"},"EU (European Union)"),(0,r.kt)("li",{parentName:"ul"},"FE (Far East)")),(0,r.kt)("p",null,"These represent the three URL endpoints provided by Amazon through which you can access the marketing API.\nEach region encompasses multiple Amazon marketplaces, which are broken down by country.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/info/api-overview#api-endpoints"},"Amazon docs")," for details."),(0,r.kt)("p",null,"If you run your Amazon ads in multiple marketplaces, you may have separate ",(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/concepts/authorization/profiles"},"profiles")," for each.\nIf this is the case, you can specify the profiles from which you wish to capture data\nby supplying their ",(0,r.kt)("a",{parentName:"p",href:"https://advertising.amazon.com/API/docs/en-us/concepts/authorization/profiles#retrieving-profiles-2"},"profile IDs"),".\nBe sure to specify only profiles that correspond to marketplaces within the region you chose."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Amazon Ads source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,r.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-amazon-in-the-flow-web-app"},"OAuth2"),",\nso many of these properties aren't required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/auth_type")),(0,r.kt)("td",{parentName:"tr",align:null},"Auth Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"oauth2.0")," for manual integration (in this method, you're re-creating the same credentials of the OAuth user interface, but doing so manually)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/client_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The client ID of your Amazon Ads developer application."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/client_secret"))),(0,r.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,r.kt)("td",{parentName:"tr",align:null},"The client secret of your Amazon Ads developer application."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/refresh_token"))),(0,r.kt)("td",{parentName:"tr",align:null},"Refresh Token"),(0,r.kt)("td",{parentName:"tr",align:null},"Amazon Ads refresh token."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/profiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Profile IDs (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#selecting-data-region-and-profiles"},"Profile IDs")," you want to fetch data for."),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/region")),(0,r.kt)("td",{parentName:"tr",align:null},"Region ","*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#selecting-data-region-and-profiles"},"Region")," to pull data from (EU","/","NA","/","FE)."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NA"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/report_generation_max_retries")),(0,r.kt)("td",{parentName:"tr",align:null},"Report Generation Maximum Retries ","*"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum retries the connector will attempt for fetching report data."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/report_wait_timeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Report Wait Timeout ","*"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout duration in minutes for reports."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"60"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The start date for collecting reports, in YYYY-MM-DD format. This should not be more than 60 days in the past."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Amazon Ads resource from which a collection is captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-amazon-ads:dev\n          config:\n            credentials:\n              auth_type: oauth2.0\n              client_id: amzn1.application-oa2-client.XXXXXXXXX\n              client_secret: <secret>\n              refresh_token: Atzr|XXXXXXXXXXXX\n            region: NA\n            report_generation_max_retries: 5\n            report_wait_timeout: 60\n            start_date: 2022-03-01\n\n      bindings:\n        - resource:\n            stream: profiles\n            syncMode: full_refresh\n          target: ${PREFIX}/profiles\n       {}\n")))}c.isMDXComponent=!0}}]);