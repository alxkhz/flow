"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9187],{24148:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var t=r(74848),s=r(28453);const c={sidebar_position:1},i="Exchange Rates API",o={id:"reference/Connectors/capture-connectors/exchange-rates",title:"Exchange Rates API",description:"This connector captures data from the Exchange Rates API.",source:"@site/docs/reference/Connectors/capture-connectors/exchange-rates.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/exchange-rates",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/exchange-rates",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/exchange-rates.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Confluence",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/confluence"},next:{title:"Facebook Marketing",permalink:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/facebook-marketing"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"exchange-rates-api",children:"Exchange Rates API"}),"\n",(0,t.jsxs)(n.p,{children:["This connector captures data from the ",(0,t.jsx)(n.a,{href:"https://exchangeratesapi.io/",children:"Exchange Rates API"}),".\nIt creates a Flow collection with daily exchange rate data for a variety of supported currencies.\nThis simple connector is useful for educational and demonstration purposes."]}),"\n",(0,t.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,t.jsx)(n.a,{href:"https://ghcr.io/estuary/source-exchange-rates:dev",children:(0,t.jsx)(n.code,{children:"ghcr.io/estuary/source-exchange-rates:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsxs)(n.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,t.jsx)(n.a,{href:"https://docs.airbyte.com/integrations/sources/exchangeratesapi",children:"here"}),",\nbut keep in mind that the two versions differ."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An API key generated through an ",(0,t.jsx)(n.a,{href:"https://apilayer.com/marketplace/description/exchangerates_data-api?preview=true#pricing",children:"Exchange Rate API account"}),".\nAfter you sign up, your API key can be found on your account page.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You may use the free account, but note that you'll be limited to the default base currency, EUR."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1404/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Exchange Rates source connector."]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/access_key"})})}),(0,t.jsx)(n.td,{children:"Access key"}),(0,t.jsx)(n.td,{children:"Your API access key. The key is case sensitive."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/base"})}),(0,t.jsx)(n.td,{children:"Base currency"}),(0,t.jsxs)(n.td,{children:["ISO reference currency. See the ",(0,t.jsx)(n.a,{href:"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",children:"documentation"}),". Free plan doesn't support Source Currency Switching, default base currency is EUR"]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"EUR"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"/ignore_weekends"})}),(0,t.jsx)(n.td,{children:"Ignore weekends"}),(0,t.jsx)(n.td,{children:"Ignore weekends? (Exchanges don't run on weekends)"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/start_date"})})}),(0,t.jsx)(n.td,{children:"Start date"}),(0,t.jsx)(n.td,{children:"The date in the format YYYY-MM-DD. Data will begin from this date."}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Title"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required/Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/stream"})})}),(0,t.jsx)(n.td,{children:"Stream"}),(0,t.jsxs)(n.td,{children:["Data stream from which Flow captures data. Always set to ",(0,t.jsx)(n.code,{children:"exchange_rates"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/syncMode"})})}),(0,t.jsx)(n.td,{children:"Sync mode"}),(0,t.jsxs)(n.td,{children:["Connection method. Always set to ",(0,t.jsx)(n.code,{children:"incremental"}),"."]}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-exchange-rates:dev\n        config:\n            base: EUR\n            access_key: <secret>\n            start_date: 2022-01-01\n            ignore_weekends: true\n    bindings:\n      - resource:\n           stream: exchange_rates\n           syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This capture definition should only have one binding, as ",(0,t.jsx)(n.code,{children:"exchange_rates"})," is the only available data stream."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1404/concepts/captures#pull-captures",children:"Learn more about capture definitions."})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);