"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9156],{85373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=t(74848),r=t(28453);const s={sidebar_position:2},i="Google Search Console",c={id:"reference/Connectors/capture-connectors/google-search-console",title:"Google Search Console",description:"This connector captures data from Google Search Console into Flow collections via the Google Search Console API.",source:"@site/docs/reference/Connectors/capture-connectors/google-search-console.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-search-console",permalink:"/pr-preview/pr-1402/reference/Connectors/capture-connectors/google-search-console",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-search-console.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Firestore",permalink:"/pr-preview/pr-1402/reference/Connectors/capture-connectors/google-firestore"},next:{title:"Google Sheets",permalink:"/pr-preview/pr-1402/reference/Connectors/capture-connectors/google-sheets"}},l={},a=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Custom reports",id:"custom-reports",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Google in the Flow web app",id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",level:3},{value:"Authenticating manually with a service account key",id:"authenticating-manually-with-a-service-account-key",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"google-search-console",children:"Google Search Console"}),"\n",(0,o.jsxs)(n.p,{children:["This connector captures data from Google Search Console into Flow collections via the ",(0,o.jsx)(n.a,{href:"https://developers.google.com/webmaster-tools/v1/api_reference_index",children:"Google Search Console API"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,o.jsx)(n.a,{href:"https://ghcr.io/estuary/source-google-search-console:dev",children:(0,o.jsx)(n.code,{children:"ghcr.io/estuary/source-google-search-console:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,o.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,o.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/google-search-console/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,o.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,o.jsx)(n.p,{children:"The following data resources are supported:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://developers.google.com/webmaster-tools/v1/searchanalytics",children:"Search analytics: all fields"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This resource contains all data in for your search analytics, and can be large. The following five collections come from queries applied to this dataset."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Search analytics by country"}),"\n",(0,o.jsx)(n.li,{children:"Search analytics by date"}),"\n",(0,o.jsx)(n.li,{children:"Search analytics by device"}),"\n",(0,o.jsx)(n.li,{children:"Search analytics by page"}),"\n",(0,o.jsx)(n.li,{children:"Search analytics by query"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/webmaster-tools/v1/sitemaps",children:"Sitemaps"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://developers.google.com/webmaster-tools/v1/sites",children:"Sites"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,o.jsx)(n.h3,{id:"custom-reports",children:"Custom reports"}),"\n",(0,o.jsxs)(n.p,{children:["In addition to the resources listed above, you can add custom reports created with the ",(0,o.jsx)(n.a,{href:"https://support.google.com/analytics/topic/1308589?hl=en&ref_topic=3125765",children:"Google Analytics Search Console integration"}),".\nYou add these to the ",(0,o.jsx)(n.a,{href:"#endpoint",children:"endpoint configuration"})," in the format ",(0,o.jsx)(n.code,{children:'{"name": "<report-name>", "dimensions": ["<dimension-name>", ...]}'}),".\nEach report is mapped to an additional Flow collection."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Custom reports involve an integration with Google Universal Analytics, which Google will deprecate in July 2023."})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"There are two ways to authenticate with Google when capturing data from Google Search Console: using OAuth2, and manually, by generating a service account key.\nTheir prerequisites differ."}),"\n",(0,o.jsx)(n.p,{children:"OAuth2 is recommended for simplicity in the Flow web app;\nthe service account key method is the only supported method using the command line."}),"\n",(0,o.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Google in the Flow web app"}),"\n",(0,o.jsx)(n.p,{children:"You'll need:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Google credentials with ",(0,o.jsx)(n.a,{href:"https://support.google.com/webmasters/answer/7687615?hl=en",children:"Owner access"})," on the Google Search Console property. This can be a user account or a ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/service-accounts",children:"service account"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You'll use these credentials to log in to Google in the Flow web app."}),"\n",(0,o.jsx)(n.h3,{id:"authenticating-manually-with-a-service-account-key",children:"Authenticating manually with a service account key"}),"\n",(0,o.jsx)(n.p,{children:"You'll need:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A Google service account with:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A JSON key generated."}),"\n",(0,o.jsx)(n.li,{children:"Access to the Google Search Console view through the API."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Follow the steps below to meet these prerequisites:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount",children:"service account and generate a JSON key"}),"\nYou'll copy the contents of the downloaded key file into the Service Account Credentials parameter when you configure the connector."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://developers.google.com/workspace/guides/create-credentials#optional_set_up_domain-wide_delegation_for_a_service_account",children:"Set up domain-wide delegation for the service account"}),"."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["During this process, grant the ",(0,o.jsx)(n.code,{children:"https://www.googleapis.com/auth/webmasters.readonly"})," OAuth scope."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1402/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Google Search Console source connector."]}),"\n",(0,o.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,o.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,o.jsxs)(n.p,{children:["The properties in the table below reflect the manual authentication method.\nIf you're working in the Flow web app, you'll use ",(0,o.jsx)(n.a,{href:"#using-oauth2-to-authenticate-with-google-in-the-flow-web-app",children:"OAuth2"}),",\nso many of these properties aren't required."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Title"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Required/Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/credentials"})})}),(0,o.jsx)(n.td,{children:"Authentication"}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/credentials/auth_type"})})}),(0,o.jsx)(n.td,{children:"Authentication Type"}),(0,o.jsxs)(n.td,{children:["Set to ",(0,o.jsx)(n.code,{children:"Service"})," for manual authentication"]}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/credentials/service_account_info"})})}),(0,o.jsx)(n.td,{children:"Service Account JSON Key"}),(0,o.jsx)(n.td,{children:"The JSON key of the service account to use for authorization."}),(0,o.jsx)(n.td,{children:"Required"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/credentials/email"})})}),(0,o.jsx)(n.td,{children:"Admin Email"}),(0,o.jsxs)(n.td,{children:["The email of your ",(0,o.jsx)(n.a,{href:"https://support.google.com/a/answer/182076?hl=en",children:"Google Workspace administrator"}),". This is likely the account used during setup."]}),(0,o.jsx)(n.td,{}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/custom_reports"})}),(0,o.jsx)(n.td,{children:"Custom Reports (Optional)"}),(0,o.jsxs)(n.td,{children:["A JSON array describing the ",(0,o.jsx)(n.a,{href:"#custom-reports",children:"custom reports"})," you want to sync from Google Search Console."]}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"/end_date"})}),(0,o.jsx)(n.td,{children:"End Date"}),(0,o.jsx)(n.td,{children:"UTC date in the format 2017-01-25. Any data after this date will not be replicated. Must be greater or equal to the start date field."}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/site_urls"})})}),(0,o.jsx)(n.td,{children:"Website URL"}),(0,o.jsxs)(n.td,{children:["The ",(0,o.jsx)(n.a,{href:"https://support.google.com/webmasters/answer/34592?hl=en",children:"URLs of the website properties"})," attached to your GSC account."]}),(0,o.jsx)(n.td,{children:"array"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/start_date"})})}),(0,o.jsx)(n.td,{children:"Start Date"}),(0,o.jsx)(n.td,{children:"UTC date in the format 2017-01-25. Any data before this date will not be replicated."}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Property"}),(0,o.jsx)(n.th,{children:"Title"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Required/Default"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/stream"})})}),(0,o.jsx)(n.td,{children:"Stream"}),(0,o.jsx)(n.td,{children:"Google Search Consol resource from which a collection is captured."}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"/syncMode"})})}),(0,o.jsx)(n.td,{children:"Sync Mode"}),(0,o.jsx)(n.td,{children:"Connection method."}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,o.jsx)(n.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-search-console:dev\n          config:\n            credentials:\n              auth_type: Service\n              service_account_info: <secret>\n              email: admin@yourdomain.com\n            site_urls: https://yourdomain.com\n            start_date: 2022-03-01\n\n      bindings:\n        - resource:\n            stream: sites\n            syncMode: full_refresh\n          target: ${PREFIX}/sites\n       {}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);