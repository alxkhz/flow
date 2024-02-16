"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},l="Google Search Console",i={unversionedId:"reference/Connectors/capture-connectors/google-search-console",id:"reference/Connectors/capture-connectors/google-search-console",title:"Google Search Console",description:"This connector captures data from Google Search Console into Flow collections via the Google Search Console API.",source:"@site/docs/reference/Connectors/capture-connectors/google-search-console.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-search-console",permalink:"/pr-preview/pr-1383/reference/Connectors/capture-connectors/google-search-console",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-search-console.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Firestore",permalink:"/pr-preview/pr-1383/reference/Connectors/capture-connectors/google-firestore"},next:{title:"Google Sheets",permalink:"/pr-preview/pr-1383/reference/Connectors/capture-connectors/google-sheets"}},s={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Custom reports",id:"custom-reports",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Google in the Flow web app",id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",level:3},{value:"Authenticating manually with a service account key",id:"authenticating-manually-with-a-service-account-key",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"google-search-console"},"Google Search Console"),(0,r.kt)("p",null,"This connector captures data from Google Search Console into Flow collections via the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/webmaster-tools/v1/api_reference_index"},"Google Search Console API"),"."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-google-search-console:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-google-search-console:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/google-search-console/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"The following data resources are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/v1/searchanalytics"},"Search analytics: all fields"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This resource contains all data in for your search analytics, and can be large. The following five collections come from queries applied to this dataset."))),(0,r.kt)("li",{parentName:"ul"},"Search analytics by country"),(0,r.kt)("li",{parentName:"ul"},"Search analytics by date"),(0,r.kt)("li",{parentName:"ul"},"Search analytics by device"),(0,r.kt)("li",{parentName:"ul"},"Search analytics by page"),(0,r.kt)("li",{parentName:"ul"},"Search analytics by query"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/v1/sitemaps"},"Sitemaps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/webmaster-tools/v1/sites"},"Sites"))),(0,r.kt)("p",null,"By default, each resource is mapped to a Flow collection through a separate binding."),(0,r.kt)("h3",{id:"custom-reports"},"Custom reports"),(0,r.kt)("p",null,"In addition to the resources listed above, you can add custom reports created with the ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/analytics/topic/1308589?hl=en&ref_topic=3125765"},"Google Analytics Search Console integration"),".\nYou add these to the ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint configuration")," in the format ",(0,r.kt)("inlineCode",{parentName:"p"},'{"name": "<report-name>", "dimensions": ["<dimension-name>", ...]}'),".\nEach report is mapped to an additional Flow collection."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Custom reports involve an integration with Google Universal Analytics, which Google will deprecate in July 2023.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"There are two ways to authenticate with Google when capturing data from Google Search Console: using OAuth2, and manually, by generating a service account key.\nTheir prerequisites differ."),(0,r.kt)("p",null,"OAuth2 is recommended for simplicity in the Flow web app;\nthe service account key method is the only supported method using the command line."),(0,r.kt)("h3",{id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app"},"Using OAuth2 to authenticate with Google in the Flow web app"),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google credentials with ",(0,r.kt)("a",{parentName:"li",href:"https://support.google.com/webmasters/answer/7687615?hl=en"},"Owner access")," on the Google Search Console property. This can be a user account or a ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/service-accounts"},"service account"),".")),(0,r.kt)("p",null,"You'll use these credentials to log in to Google in the Flow web app."),(0,r.kt)("h3",{id:"authenticating-manually-with-a-service-account-key"},"Authenticating manually with a service account key"),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Google service account with:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A JSON key generated."),(0,r.kt)("li",{parentName:"ul"},"Access to the Google Search Console view through the API.")))),(0,r.kt)("p",null,"Follow the steps below to meet these prerequisites:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount"},"service account and generate a JSON key"),"\nYou'll copy the contents of the downloaded key file into the Service Account Credentials parameter when you configure the connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/workspace/guides/create-credentials#optional_set_up_domain-wide_delegation_for_a_service_account"},"Set up domain-wide delegation for the service account"),"."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"During this process, grant the ",(0,r.kt)("inlineCode",{parentName:"li"},"https://www.googleapis.com/auth/webmasters.readonly")," OAuth scope.")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1383/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Google Search Console source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,r.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-google-in-the-flow-web-app"},"OAuth2"),",\nso many of these properties aren't required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/auth_type"))),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"Service")," for manual authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/service_account_info"))),(0,r.kt)("td",{parentName:"tr",align:null},"Service Account JSON Key"),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON key of the service account to use for authorization."),(0,r.kt)("td",{parentName:"tr",align:null},"Required"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials/email"))),(0,r.kt)("td",{parentName:"tr",align:null},"Admin Email"),(0,r.kt)("td",{parentName:"tr",align:null},"The email of your ",(0,r.kt)("a",{parentName:"td",href:"https://support.google.com/a/answer/182076?hl=en"},"Google Workspace administrator"),". This is likely the account used during setup."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/custom_reports")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom Reports (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"A JSON array describing the ",(0,r.kt)("a",{parentName:"td",href:"#custom-reports"},"custom reports")," you want to sync from Google Search Console."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/end_date")),(0,r.kt)("td",{parentName:"tr",align:null},"End Date"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date in the format 2017-01-25. Any data after this date will not be replicated. Must be greater or equal to the start date field."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/site_urls"))),(0,r.kt)("td",{parentName:"tr",align:null},"Website URL"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://support.google.com/webmasters/answer/34592?hl=en"},"URLs of the website properties")," attached to your GSC account."),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"UTC date in the format 2017-01-25. Any data before this date will not be replicated."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Google Search Consol resource from which a collection is captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-search-console:dev\n          config:\n            credentials:\n              auth_type: Service\n              service_account_info: <secret>\n              email: admin@yourdomain.com\n            site_urls: https://yourdomain.com\n            start_date: 2022-03-01\n\n      bindings:\n        - resource:\n            stream: sites\n            syncMode: full_refresh\n          target: ${PREFIX}/sites\n       {}\n")))}d.isMDXComponent=!0}}]);