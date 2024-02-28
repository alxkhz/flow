"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[515],{89933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(74848),n=r(28453);const s={sidebar_position:1},i="Alpaca",l={id:"reference/Connectors/capture-connectors/alpaca",title:"Alpaca",description:"This connector captures stock trade data from the Alpaca Market Data API into a Flow collection.",source:"@site/docs/reference/Connectors/capture-connectors/alpaca.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/alpaca",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/alpaca",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/alpaca.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AlloyDB",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/alloydb"},next:{title:"Amazon Ads",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/amazon-ads"}},c={},d=[{value:"Real-time and historical trade data",id:"real-time-and-historical-trade-data",level:2},{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Capturing data for more than 20 symbols in a single capture could result in API errors.",id:"capturing-data-for-more-than-20-symbols-in-a-single-capture-could-result-in-api-errors",level:4},{value:"Separate historical and real-time data streams will result in some duplicate trade documents.",id:"separate-historical-and-real-time-data-streams-will-result-in-some-duplicate-trade-documents",level:4}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"alpaca",children:"Alpaca"}),"\n",(0,a.jsxs)(t.p,{children:["This connector captures stock trade data from the ",(0,a.jsx)(t.a,{href:"https://alpaca.markets/docs/market-data/",children:"Alpaca Market Data API"})," into a Flow collection."]}),"\n",(0,a.jsxs)(t.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,a.jsx)(t.a,{href:"https://ghcr.io/estuary/source-alpaca:dev",children:(0,a.jsx)(t.code,{children:"ghcr.io/estuary/source-alpaca:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,a.jsx)(t.h2,{id:"real-time-and-historical-trade-data",children:"Real-time and historical trade data"}),"\n",(0,a.jsxs)(t.p,{children:["The Alpaca Market Data API comprises multiple APIs for stock trades, including\nthe ",(0,a.jsx)(t.a,{href:"https://alpaca.markets/docs/api-references/market-data-api/stock-pricing-data/historical/",children:"Trades REST API"})," for historical trade data\nand ",(0,a.jsx)(t.a,{href:"https://alpaca.markets/docs/api-references/market-data-api/stock-pricing-data/realtime/",children:"websocket streaming via the Data API"})," for real-time trade data."]}),"\n",(0,a.jsx)(t.p,{children:"Historical trade data is available from the Alpaca Market Data API starting 01-01-2016. As such, the\nconnector configuration requires a start date for the backfill to be on or after 01-01-2016."}),"\n",(0,a.jsx)(t.p,{children:"This connector uses both APIs to capture historical and real-time data in parallel.\nIt uses the Trades API to perform a historical backfill starting from the start date you specify and stopping when it reaches the present.\nAt the same time, the connector uses websocket streaming to initiate a real-time stream of trade data starting at the present moment and continuing indefinitely until you stop the capture process."}),"\n",(0,a.jsxs)(t.p,{children:["As a result, you'll get data from a historical time period you specify, as well as the lowest-latency\npossible updates of new trade data, but there will be some overlap in the two data streams.\nSee ",(0,a.jsx)(t.a,{href:"#limitations",children:"limitations"})," to learn more about reconciling historical and real-time data."]}),"\n",(0,a.jsx)(t.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,a.jsxs)(t.p,{children:["Alpaca supports over 8000 stocks and EFTs. You simply supply a list of ",(0,a.jsx)(t.a,{href:"https://eoddata.com/symbols.aspx",children:"symbols"})," to Flow when you configure the connector.\nTo check whether Alpaca supports a symbol, you can use the ",(0,a.jsx)(t.a,{href:"https://alpaca.markets/docs/api-references/broker-api/assets/#retrieving-an-asset-by-symbol",children:"Alpaca Broker API"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"You can use this connector to capture data from up to 20 stock symbols into Flow collections in a single capture\n(to add more than 20, set up multiple captures).\nFor a given capture, data from all symbols is captured to a single collection."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"To use this connector, you'll need:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"An Alpaca account."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["To access complete stock data in real-time, you'll need the ",(0,a.jsx)(t.a,{href:"https://alpaca.markets/docs/market-data/#subscription-plans",children:"Unlimited plan"}),".\nTo access a smaller sample of trade data with a 15-minute delay, you can use a Free plan, making sure to set ",(0,a.jsx)(t.strong,{children:"Feed"})," to ",(0,a.jsx)(t.code,{children:"iex"})," and choose the ",(0,a.jsx)(t.strong,{children:"Free Plan"})," option when ",(0,a.jsx)(t.a,{href:"#endpoint",children:"configuring the connector"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Your Alpaca ",(0,a.jsx)(t.a,{href:"https://alpaca.markets/docs/market-data/getting-started/#creating-an-alpaca-account-and-finding-your-api-keys",children:"API Key ID and Secret Key"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(t.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,a.jsx)(t.a,{href:"/pr-preview/pr-1395/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Alpaca source connector."]}),"\n",(0,a.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(t.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property"}),(0,a.jsx)(t.th,{children:"Title"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required/Default"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"/advanced"})}),(0,a.jsx)(t.td,{children:"Advanced Options"}),(0,a.jsx)(t.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,a.jsx)(t.td,{children:"object"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"/advanced/disable_backfill"})}),(0,a.jsx)(t.td,{children:"Disable Historical Data Backfill"}),(0,a.jsx)(t.td,{children:"Disables historical data backfill via the historical data API. Data will only be collected via streaming."}),(0,a.jsx)(t.td,{children:"boolean"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"/advanced/disable_real_time"})}),(0,a.jsx)(t.td,{children:"Disable Real-Time Streaming"}),(0,a.jsx)(t.td,{children:"Disables real-time streaming via the websocket API. Data will only be collected via the backfill mechanism."}),(0,a.jsx)(t.td,{children:"boolean"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"/advanced/is_free_plan"})}),(0,a.jsx)(t.td,{children:"Free Plan"}),(0,a.jsx)(t.td,{children:"Set this if you are using a free plan. Delays data by 15 minutes."}),(0,a.jsx)(t.td,{children:"boolean"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"/advanced/max_backfill_interval"})}),(0,a.jsx)(t.td,{children:"Maximum Backfill Interval"}),(0,a.jsx)(t.td,{children:"The largest time interval that will be requested for backfills. Using smaller intervals may be useful when tracking many symbols. Must be a valid Go duration string."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"/advanced/min_backfill_interval"})}),(0,a.jsx)(t.td,{children:"Minimum Backfill Interval"}),(0,a.jsx)(t.td,{children:"The smallest time interval that will be requested for backfills after the initial backfill is complete. Must be a valid Go duration string."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"/advanced/stop_date"})}),(0,a.jsx)(t.td,{children:"Stop Date"}),(0,a.jsx)(t.td,{children:"Stop backfilling historical data at this date."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"/api_key_id"})})}),(0,a.jsx)(t.td,{children:"Alpaca API Key ID"}),(0,a.jsx)(t.td,{children:"Your Alpaca API key ID."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{children:"Required"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"/api_secret_key"})})}),(0,a.jsx)(t.td,{children:"Alpaca API Secret Key"}),(0,a.jsx)(t.td,{children:"Your Alpaca API Secret key."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{children:"Required"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"/feed"})})}),(0,a.jsx)(t.td,{children:"Feed"}),(0,a.jsxs)(t.td,{children:["The feed to pull market data from. ",(0,a.jsxs)(t.a,{href:"https://alpaca.markets/docs/market-data/#subscription-plans",children:["Choose from ",(0,a.jsx)(t.code,{children:"iex"})," or ",(0,a.jsx)(t.code,{children:"sip"})]}),"; set ",(0,a.jsx)(t.code,{children:"iex"})," if using a free plan."]}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{children:"Required"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"/start_date"})})}),(0,a.jsx)(t.td,{children:"Start Date"}),(0,a.jsx)(t.td,{children:"Get trades starting at this date. Has no effect if changed after the capture has started. Must be no earlier than 2016-01-01T00:00:00Z."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{children:"Required"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"/symbols"})})}),(0,a.jsx)(t.td,{children:"Symbols"}),(0,a.jsx)(t.td,{children:"Comma separated list of symbols to monitor."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{children:"Required"})]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"bindings",children:"Bindings"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Property"}),(0,a.jsx)(t.th,{children:"Title"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Required/Default"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"/name"})})}),(0,a.jsx)(t.td,{children:"Name"}),(0,a.jsx)(t.td,{children:"Unique name for this binding. Cannot be changed once set."}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{children:"Required"})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n      endpoint:\n        connector:\n          image: "ghcr.io/estuary/source-alpaca:dev"\n          config:\n            api_key_id: <SECRET>\n            api_secret_key: <SECRET>\n            feed: iex\n            start_date: 2022-11-01T00:00:00Z\n            symbols: AAPL,MSFT,AMZN,TSLA,GOOGL,GOOG,NVDA,BRK.B,META,UNH\n            advanced:\n              is_free_plan: true\n      bindings:\n        - resource:\n            name: trades\n          target: ${PREFIX}/${CAPTURE_NAME}/trades\n'})}),"\n",(0,a.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsx)(t.h4,{id:"capturing-data-for-more-than-20-symbols-in-a-single-capture-could-result-in-api-errors",children:"Capturing data for more than 20 symbols in a single capture could result in API errors."}),"\n",(0,a.jsx)(t.p,{children:"If you need to capture data for more than 20 symbols, we recommend splitting them between two captures.\nSupport for a larger number of symbols in a single capture is planned for a future release."}),"\n",(0,a.jsx)(t.h4,{id:"separate-historical-and-real-time-data-streams-will-result-in-some-duplicate-trade-documents",children:"Separate historical and real-time data streams will result in some duplicate trade documents."}),"\n",(0,a.jsxs)(t.p,{children:["As discussed ",(0,a.jsx)(t.a,{href:"#real-time-and-historical-trade-data",children:"above"}),", the connector captures historical and real-time data in two different streams.\nAs the historical data stream catches up to the present, it will overlap with the beginning of the real-time data stream, resulting in some duplicated documents.\nThese will have ",(0,a.jsx)(t.a,{href:"https://alpaca.markets/docs/api-references/market-data-api/stock-pricing-data/historical/#response-object-properties",children:"identical properties from Alpaca"}),", but different ",(0,a.jsx)(t.a,{href:"/pr-preview/pr-1395/concepts/collections#documents",children:"metadata from Flow"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"There are several ways to resolve this:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["If you plan to materialize to an endpoint for which standard (non-delta) updates are supported, Flow will resolve the duplicates during the materialization process.\nUnless otherwise specified in their ",(0,a.jsx)(t.a,{href:"/pr-preview/pr-1395/reference/Connectors/materialization-connectors/",children:"documentation page"}),", materialization connectors run in standard updates mode.\nIf a connector supports both modes, it will default to standard updates."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["If you plan to materialize to an endpoint for which ",(0,a.jsx)(t.a,{href:"/pr-preview/pr-1395/concepts/materialization#delta-updates",children:"delta updates"})," is the only option,\nensure that the endpoint system supports the equivalent of ",(0,a.jsx)(t.a,{href:"/pr-preview/pr-1395/reference/reduction-strategies/firstwritewins-and-lastwritewins",children:"lastWriteWins"})," reductions."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);