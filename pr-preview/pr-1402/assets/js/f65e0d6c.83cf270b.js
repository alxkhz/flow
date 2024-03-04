"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1980],{46535:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(74848),i=n(28453);const s={sidebar_position:1},c="Braintree",o={id:"reference/Connectors/capture-connectors/braintree",title:"Braintree",description:"This connector captures data from Braintree into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/braintree.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/braintree",permalink:"/pr-preview/pr-1402/reference/Connectors/capture-connectors/braintree",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/braintree.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bing Ads",permalink:"/pr-preview/pr-1402/reference/Connectors/capture-connectors/bing-ads"},next:{title:"Braze",permalink:"/pr-preview/pr-1402/reference/Connectors/capture-connectors/braze"}},d={},l=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"braintree",children:"Braintree"}),"\n",(0,t.jsx)(r.p,{children:"This connector captures data from Braintree into Flow collections."}),"\n",(0,t.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(r.a,{href:"https://ghcr.io/estuary/source-braintree:dev",children:(0,t.jsx)(r.code,{children:"ghcr.io/estuary/source-braintree:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(r.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(r.a,{href:"https://docs.airbyte.com/integrations/sources/braintree/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,t.jsx)(r.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,t.jsx)(r.p,{children:"The following data resources are supported through the Braintree APIs:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/docs/reference/request/customer/search",children:"Customers"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/docs/reference/response/discount",children:"Discounts"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/docs/reference/request/dispute/search",children:"Disputes"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developers.braintreepayments.com/reference/response/transaction/python",children:"Transactions"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/docs/reference/response/merchant-account",children:"Merchant Accounts"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/docs/reference/response/plan",children:"Plans"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/docs/reference/response/subscription",children:"Subscriptions"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"By default, each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(r.p,{children:"To set up the Braintree source connector, you'll need Braintree's:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/articles/control-panel/important-gateway-credentials#public-key",children:"Public Key"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/articles/control-panel/important-gateway-credentials#environment",children:"Environment"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/articles/control-panel/important-gateway-credentials#merchant-id",children:"Merchant ID"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.paypal.com/braintree/articles/control-panel/important-gateway-credentials#private-key",children:"Private Key"})}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"We recommend creating a restricted, read-only key specifically for Estuary access. This will allow you to control which resources Estuary should be able to access."}),"\n",(0,t.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(r.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(r.a,{href:"/pr-preview/pr-1402/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Braintree source connector."]}),"\n",(0,t.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(r.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Title"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required/Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/environment"})}),(0,t.jsx)(r.td,{children:"Environment"}),(0,t.jsx)(r.td,{children:"Environment specifies where the data will come from."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/merchant_id"})}),(0,t.jsx)(r.td,{children:"Merchant ID"}),(0,t.jsx)(r.td,{children:"The unique identifier for your entire gateway account."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/private_key"})}),(0,t.jsx)(r.td,{children:"Private Key"}),(0,t.jsx)(r.td,{children:"Braintree Private Key."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/public_key"})}),(0,t.jsx)(r.td,{children:"Public Key"}),(0,t.jsx)(r.td,{children:"Braintree Public Key."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"/start_date"})}),(0,t.jsx)(r.td,{children:"Start Date"}),(0,t.jsx)(r.td,{children:"UTC date and time in the format 2021-01-25T00:00:00Z. Any data before this date will not be replicated."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Default"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Property"}),(0,t.jsx)(r.th,{children:"Title"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Required/Default"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/stream"})})}),(0,t.jsx)(r.td,{children:"Stream"}),(0,t.jsx)(r.td,{children:"Resource of your Braintree project from which collections are captured."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"/syncMode"})})}),(0,t.jsx)(r.td,{children:"Sync Mode"}),(0,t.jsx)(r.td,{children:"Connection method."}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"\ncaptures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-braintree:dev\n        config:\n          environment: Development\n          merchant_id: <id>\n          private_key: <key>\n          public_key: <key>\n          start_date: 2017-01-25T00:00:00Z\n    bindings:\n      - resource:\n          stream: customers\n          syncMode: full_refresh\n        target: ${PREFIX}/customers\n      {...}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>o});var t=n(96540);const i={},s=t.createContext(i);function c(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);