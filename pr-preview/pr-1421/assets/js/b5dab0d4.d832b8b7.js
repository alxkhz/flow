"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6839],{63445:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(74848),r=s(28453);const i={sidebar_position:2},o="Google Analytics UA",c={id:"reference/Connectors/capture-connectors/google-analytics",title:"Google Analytics UA",description:"This connector captures data from a view in Google Universal Analytics.",source:"@site/docs/reference/Connectors/capture-connectors/google-analytics.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/google-analytics",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/google-analytics",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/google-analytics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Storage",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/gcs"},next:{title:"Google Firestore",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/google-firestore"}},l={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with Google in the Flow web app",id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",level:3},{value:"Authenticating manually with a service account key",id:"authenticating-manually-with-a-service-account-key",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Custom reports",id:"custom-reports",level:3},{value:"Sample",id:"sample",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Data sampling",id:"data-sampling",level:3},{value:"Processing latency",id:"processing-latency",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"google-analytics-ua",children:"Google Analytics UA"}),"\n",(0,t.jsx)(n.p,{children:"This connector captures data from a view in Google Universal Analytics."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"This connector supports Universal Analytics, not Google Analytics 4."}),(0,t.jsxs)(n.p,{children:["Google Analytics 4 is supported by a ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/google-analytics-4",children:"separate connector"}),"."]})]}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-google-analytics-ua:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-google-analytics-ua:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/google-analytics-universal-analytics",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(n.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(n.p,{children:"The following data resources are captured to Flow collections by default:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Website overview"}),"\n",(0,t.jsx)(n.li,{children:"Traffic sources"}),"\n",(0,t.jsx)(n.li,{children:"Pages"}),"\n",(0,t.jsx)(n.li,{children:"Locations"}),"\n",(0,t.jsx)(n.li,{children:"Monthly active users"}),"\n",(0,t.jsx)(n.li,{children:"Four weekly active users"}),"\n",(0,t.jsx)(n.li,{children:"Two weekly active users"}),"\n",(0,t.jsx)(n.li,{children:"Weekly active users"}),"\n",(0,t.jsx)(n.li,{children:"Daily active users"}),"\n",(0,t.jsx)(n.li,{children:"Devices"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsxs)(n.p,{children:["You can also configure ",(0,t.jsx)(n.a,{href:"#custom-reports",children:"custom reports"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to authenticate with Google when capturing data from a Google Analytics view: using OAuth2, and manually, by generating a service account key.\nTheir prerequisites differ."}),"\n",(0,t.jsx)(n.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe service account key method is the only supported method using the command line."}),"\n",(0,t.jsx)(n.h3,{id:"using-oauth2-to-authenticate-with-google-in-the-flow-web-app",children:"Using OAuth2 to authenticate with Google in the Flow web app"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The View ID for your Google Analytics account.\nYou can find this using Google's ",(0,t.jsx)(n.a,{href:"https://ga-dev-tools.web.app/account-explorer/",children:"Account Explorer"})," tool."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Your Google account username and password."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"authenticating-manually-with-a-service-account-key",children:"Authenticating manually with a service account key"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The View ID for your Google Analytics account.\nYou can find this using Google's ",(0,t.jsx)(n.a,{href:"https://ga-dev-tools.web.app/account-explorer/",children:"Account Explorer"})," tool."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Google Analytics and Google Analytics Reporting APIs enabled on your Google account."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A Google service account with:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A JSON key generated."}),"\n",(0,t.jsx)(n.li,{children:"Access to the source Google Analytics view."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to meet these prerequisites:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://support.google.com/googleapi/answer/6158841?hl=en",children:"Enable"})," the Google Analytics and Google Analytics Reporting APIs\nfor the Google ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/projects",children:"project"})," with which your Analytics view is associated.\n(Unless you actively develop with Google Cloud, you'll likely just have one option)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/service-account#creatinganaccount",children:"service account and generate a JSON key"}),"\nDuring setup, grant the account the ",(0,t.jsx)(n.strong,{children:"Viewer"})," role on your project.\nYou'll copy the contents of the downloaded key file into the Service Account Credentials parameter when you configure the connector."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://support.google.com/analytics/answer/1009702#Add&zippy=%2Cin-this-article",children:"Add the service account"})," to the Google Analytics view."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Grant the account ",(0,t.jsx)(n.strong,{children:"Viewer"})," permissions (formerly known as Read & Analyze permissions)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1421/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors.\nThe values and specification sample below provide configuration details specific to the Google Analytics source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.p,{children:["The following properties reflect the Service Account Key authentication method. If you're working in the Flow web app, you'll use ",(0,t.jsx)(n.a,{href:"#using-oauth2-to-authenticate-with-google--in-the-flow-web-app",children:"OAuth2"}),", so some of these properties aren't required."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials"})}),(0,t.jsx)(n.td,{children:"Credentials"}),(0,t.jsx)(n.td,{children:"Credentials for the service"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/credentials/auth_type"})}),(0,t.jsx)(n.td,{children:"Authentication Type"}),(0,t.jsxs)(n.td,{children:["Authentication method. Set to ",(0,t.jsx)(n.code,{children:"Service"})," for manual configuration, or use OAuth in the web app."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"credentials/credentials_json"})}),(0,t.jsx)(n.td,{children:"Service Account Credentials"}),(0,t.jsx)(n.td,{children:"Contents of the JSON key file generated during setup."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/custom_reports"})}),(0,t.jsx)(n.td,{children:"Custom Reports (Optional)"}),(0,t.jsx)(n.td,{children:"A JSON array describing the custom reports you want to sync from GA."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/start_date"})})}),(0,t.jsx)(n.td,{children:"Start Date"}),(0,t.jsx)(n.td,{children:"The date in the format YYYY-MM-DD. Any data before this date will not be replicated."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/view_id"})})}),(0,t.jsx)(n.td,{children:"View ID"}),(0,t.jsxs)(n.td,{children:["The ID for the Google Analytics View you want to fetch data from. This can be found from the Google Analytics Account Explorer: ",(0,t.jsx)(n.a,{href:"https://ga-dev-tools.appspot.com/account-explorer/",children:"https://ga-dev-tools.appspot.com/account-explorer/"})]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/window_in_days"})}),(0,t.jsx)(n.td,{children:"Window in days (Optional)"}),(0,t.jsx)(n.td,{children:"The amount of days each stream slice would consist of beginning from start_date. Bigger the value - faster the fetch. (Min=1, as for a Day; Max=364, as for a Year)."}),(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1"})})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsx)(n.td,{children:"Data resource from the Google Analytics view."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync Mode"}),(0,t.jsxs)(n.td,{children:["Connection method. Always set to ",(0,t.jsx)(n.code,{children:"incremental"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"custom-reports",children:"Custom reports"}),"\n",(0,t.jsxs)(n.p,{children:["You can include data beyond the ",(0,t.jsx)(n.a,{href:"#supported-data-resources",children:"default data resources"})," with Custom Reports.\nThese replicate the functionality of ",(0,t.jsx)(n.a,{href:"https://support.google.com/analytics/answer/10445879?hl=en",children:"Custom Reports"})," in the Google Analytics Web console."]}),"\n",(0,t.jsx)(n.p,{children:"To do so, fill out the Custom Reports property with a JSON array as a string with the following schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[{"name": string, "dimensions": [string], "metrics": [string]}]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You may specify ",(0,t.jsx)(n.a,{href:"https://ga-dev-tools.web.app/dimensions-metrics-explorer/",children:"default Google Analytics dimensions and metrics"})," from the table below,\nor custom dimensions and metrics you've previously defined.\nEach custom report may contain up to 7 unique dimensions and 10 unique metrics.\nYou must include the ",(0,t.jsx)(n.code,{children:"ga:date"})," dimension for proper data flow."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Supported GA dimensions"}),(0,t.jsx)(n.th,{children:"Supported GA metrics"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:browser"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:14dayUsers"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:city"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:1dayUsers"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:continent"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:28dayUsers"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:country"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:30dayUsers"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:date"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:7dayUsers"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:deviceCategory"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:avgSessionDuration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:hostname"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:avgTimeOnPage"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:medium"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:bounceRate"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:metro"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:entranceRate"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:operatingSystem"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:entrances"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:pagePath"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:exits"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:region"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:newUsers"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:socialNetwork"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:pageviews"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:source"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:pageviewsPerSession"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:subContinent"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:sessions"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:sessionsPerUser"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:uniquePageviews"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ga:users"})})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.p,{children:"This sample reflects the manual authentication method."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-google-analytics-v4:dev\n          config:\n            view_id: 000000000\n            start_date: 2022-03-01\n            credentials:\n              auth_type: service\n              credentials_json: <secret>\n            window_in_days: 1\n\n      bindings:\n        - resource:\n            stream: daily_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: devices\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: four_weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: locations\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: monthly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: pages\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: traffic_sources\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: two_weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: website_overview\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n\n        - resource:\n            stream: weekly_active_users\n            syncMode: incremental\n          target: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1421/concepts/captures#pull-captures",children:"Learn more about capture definitions."})}),"\n",(0,t.jsx)(n.h2,{id:"performance-considerations",children:"Performance considerations"}),"\n",(0,t.jsx)(n.h3,{id:"data-sampling",children:"Data sampling"}),"\n",(0,t.jsxs)(n.p,{children:["The Google Analytics Reporting API enforces compute thresholds for ad-hoc queries and reports.\nIf a threshold is exceeded, the API will apply sampling to limit the number of sessions analyzed for the specified time range.\nThese thresholds can be found ",(0,t.jsx)(n.a,{href:"https://support.google.com/analytics/answer/2637192?hl=en&ref_topic=2601030&visit_id=637868645346124317-2833523666&rd=1#thresholds&zippy=%2Cin-this-article",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If your account is on the Analytics 360 tier, you're less likely to run into these limitations.\nFor Analytics Standard accounts, you can avoid sampling by keeping the ",(0,t.jsx)(n.code,{children:"window_in_days"})," parameter set to its default value, ",(0,t.jsx)(n.code,{children:"1"}),".\nThis makes it less likely that you will exceed the threshold.\nWhen sampling occurs, a warning is written to the capture log."]}),"\n",(0,t.jsx)(n.h3,{id:"processing-latency",children:"Processing latency"}),"\n",(0,t.jsxs)(n.p,{children:["Data in Google Analytics reports may continue to update ",(0,t.jsx)(n.a,{href:"https://support.google.com/analytics/answer/1070983?hl=en#DataProcessingLatency&zippy=%2Cin-this-article",children:"up to 48 hours after it appears"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To ensure data correctness, each time it reads from Google Analytics,\nthis connector automatically applies a lookback window of 2 days prior to its last read.\nThis allows it to double-check and correct for any changes in reports resulting from latent data updates."}),"\n",(0,t.jsxs)(n.p,{children:["This mechanism relies on the ",(0,t.jsx)(n.code,{children:"isDataGolden"})," flag in the ",(0,t.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/reporting/core/v4/rest/v4/reports/batchGet#reportdata",children:"Google Analytics Reporting API"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);