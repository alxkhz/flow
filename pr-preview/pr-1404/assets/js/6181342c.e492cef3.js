"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7745],{69666:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var t=r(74848),n=r(28453);const i={sidebar_position:2},o="Greenhouse",h={id:"reference/Connectors/capture-connectors/greenhouse",title:"Greenhouse",description:"This connector captures data from Greenhouse into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/greenhouse.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/greenhouse",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/greenhouse",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/greenhouse.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Google Sheets",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/google-sheets"},next:{title:"MariaDB",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/MariaDB/"}},l={},c=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"greenhouse",children:"Greenhouse"}),"\n",(0,t.jsx)(s.p,{children:"This connector captures data from Greenhouse into Flow collections."}),"\n",(0,t.jsxs)(s.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(s.a,{href:"https://ghcr.io/estuary/source-greenhouse:dev",children:(0,t.jsx)(s.code,{children:"ghcr.io/estuary/source-greenhouse:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(s.p,{children:"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system."}),"\n",(0,t.jsxs)(s.p,{children:["You can find their documentation ",(0,t.jsx)(s.a,{href:"https://docs.airbyte.com/integrations/sources/greenhouse/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(s.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(s.p,{children:"The following data resources are supported through the Greenhouse APIs:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-retrieve-activity-feed",children:"Activity Feed"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-applications",children:"Applications"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-scheduled-interviews-for-application",children:"Applications Interviews"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-approvals-for-job",children:"Approvals"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-candidates",children:"Candidates"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-close-reasons",children:"Close Reasons"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-custom-fields",children:"Custom Fields"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-degrees",children:"Degrees"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-departments",children:"Departments"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-approvals-for-job",children:"Disciplines"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-eeoc",children:"EEOC"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-email-templates",children:"Email Templates"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-scheduled-interviews",children:"Interviews"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-job-posts",children:"Job Posts"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-job-stages",children:"Job Stages"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-jobs",children:"Jobs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-job-openings",children:"Job Openings"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-job-stages-for-job",children:"Jobs Stages"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-offers",children:"Offers"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-offices",children:"Offices"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-prospect-pools",children:"Prospect Pools"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-rejection-reasons",children:"Rejection Reasons"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-schools",children:"Schools"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-scorecards",children:"Scorecards"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-sources",children:"Sources"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-candidate-tags",children:"Tags"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-users",children:"Users"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#get-list-job-permissions",children:"User Permissions"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#the-user-role-object",children:"User Roles"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["To set up the Greenhouse source connector, you'll need the ",(0,t.jsx)(s.a,{href:"https://developers.greenhouse.io/harvest.html#authentication",children:"Harvest API key"})," with permissions to the resources Estuary Flow should be able to access."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(s.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(s.a,{href:"/pr-preview/pr-1404/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Greenhouse source connector."]}),"\n",(0,t.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(s.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Property"}),(0,t.jsx)(s.th,{children:"Title"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required/Default"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"/apikey"})}),(0,t.jsx)(s.td,{children:"API Key"}),(0,t.jsx)(s.td,{children:"The value of the Greenhouse API Key generated."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Required"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Property"}),(0,t.jsx)(s.th,{children:"Title"}),(0,t.jsx)(s.th,{children:"Description"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"Required/Default"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/stream"})})}),(0,t.jsx)(s.td,{children:"Stream"}),(0,t.jsx)(s.td,{children:"Resource of your Greenhouse project from which collections are captured."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Required"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"/syncMode"})})}),(0,t.jsx)(s.td,{children:"Sync Mode"}),(0,t.jsx)(s.td,{children:"Connection method."}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-greenhouse:dev\n        config:\n          apikey: <secret>\n    bindings:\n      - resource:\n          stream: applications\n          syncMode: full_refresh\n        target: ${PREFIX}/applications\n      {...}\n"})})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>h});var t=r(96540);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);