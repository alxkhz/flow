"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(a),h=n,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},s="Harvest",o={unversionedId:"reference/Connectors/capture-connectors/harvest",id:"reference/Connectors/capture-connectors/harvest",title:"Harvest",description:"This connector captures data from Harvest into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/harvest.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/harvest",permalink:"/pr-preview/pr-1319/reference/Connectors/capture-connectors/harvest",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/harvest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Amazon RDS for SQL Server",permalink:"/pr-preview/pr-1319/reference/Connectors/capture-connectors/amazon-rds-sqlserver"},next:{title:"HTTP File",permalink:"/pr-preview/pr-1319/reference/Connectors/capture-connectors/http-file"}},p={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],c={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"harvest"},"Harvest"),(0,n.kt)("p",null,"This connector captures data from Harvest into Flow collections."),(0,n.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,n.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-harvest:dev"},(0,n.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-harvest:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,n.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/harvest/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,n.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,n.kt)("p",null,"The following data resources are supported through the Harvest APIs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/clients-api/clients/contacts/"},"Client Contacts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/clients-api/clients/clients/"},"Clients")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/company-api/company/company/"},"Company")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/"},"Invoice Messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-payments/"},"Invoice Payments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/"},"Invoices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/"},"Invoice Item Categories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/"},"Estimate Messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/"},"Estimates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/"},"Estimate Item Categories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/"},"Expenses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/"},"Expense Categories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/"},"Tasks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/"},"Time Entries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/"},"Project User Assignments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/"},"Project Task Assignments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/"},"Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/roles-api/roles/roles/"},"Roles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/users-api/users/billable-rates/"},"User Billable Rates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/users-api/users/cost-rates/"},"User Cost Rates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/users-api/users/project-assignments/"},"User Project Assignments")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/reports-api/reports/expense-reports/"},"Expense Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/reports-api/reports/uninvoiced-report/"},"Uninvoiced Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/reports-api/reports/time-reports/"},"Time Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/reports-api/reports/project-budget-report/"},"Project Budget Report"),"\nBy default, each resource is mapped to a Flow collection through a separate binding.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To set up the Harvest source connector, you'll need the ",(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/"},"Harvest Account ID and API key"),".")),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,n.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Harvest source connector."),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("h4",{id:"endpoint"},"Endpoint"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/account_id")),(0,n.kt)("td",{parentName:"tr",align:null},"Account ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Harvest account ID. Required for all Harvest requests in pair with Personal Access Token."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/start_date")),(0,n.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,n.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"/end_date")),(0,n.kt)("td",{parentName:"tr",align:null},"End Date"),(0,n.kt)("td",{parentName:"tr",align:null},"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Default")))),(0,n.kt)("h4",{id:"bindings"},"Bindings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,n.kt)("td",{parentName:"tr",align:null},"Stream"),(0,n.kt)("td",{parentName:"tr",align:null},"Resource of your Harvest project from which collections are captured."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,n.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,n.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Required")))),(0,n.kt)("h3",{id:"sample"},"Sample"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-harvest:dev\n        config:\n          account_id: <account id>\n          start_date: 2017-01-25T00:00:00Z\n          end_date: 2020-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: clients\n          syncMode: incremental\n        target: ${PREFIX}/clients\n      {...}\n")))}u.isMDXComponent=!0}}]);