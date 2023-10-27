"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},i="Alpaca",o={unversionedId:"reference/Connectors/capture-connectors/alpaca",id:"reference/Connectors/capture-connectors/alpaca",title:"Alpaca",description:"This connector captures stock trade data from the Alpaca Market Data API into a Flow collection.",source:"@site/docs/reference/Connectors/capture-connectors/alpaca.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/alpaca",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/alpaca",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/alpaca.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AlloyDB",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/alloydb"},next:{title:"Amazon Ads",permalink:"/pr-preview/pr-1263/reference/Connectors/capture-connectors/amazon-ads"}},s={},p=[{value:"Real-time and historical trade data",id:"real-time-and-historical-trade-data",level:2},{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Capturing data for more than 20 symbols in a single capture could result in API errors.",id:"capturing-data-for-more-than-20-symbols-in-a-single-capture-could-result-in-api-errors",level:4},{value:"Separate historical and real-time data streams will result in some duplicate trade documents.",id:"separate-historical-and-real-time-data-streams-will-result-in-some-duplicate-trade-documents",level:4}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alpaca"},"Alpaca"),(0,r.kt)("p",null,"This connector captures stock trade data from the ",(0,r.kt)("a",{parentName:"p",href:"https://alpaca.markets/docs/market-data/"},"Alpaca Market Data API")," into a Flow collection."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-alpaca:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-alpaca:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"real-time-and-historical-trade-data"},"Real-time and historical trade data"),(0,r.kt)("p",null,"The Alpaca Market Data API comprises multiple APIs for stock trades, including\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://alpaca.markets/docs/api-references/market-data-api/stock-pricing-data/historical/"},"Trades REST API")," for historical trade data\nand ",(0,r.kt)("a",{parentName:"p",href:"https://alpaca.markets/docs/api-references/market-data-api/stock-pricing-data/realtime/"},"websocket streaming via the Data API")," for real-time trade data."),(0,r.kt)("p",null,"Historical trade data is available from the Alpaca Market Data API starting 01-01-2016. As such, the\nconnector configuration requires a start date for the backfill to be on or after 01-01-2016."),(0,r.kt)("p",null,"This connector uses both APIs to capture historical and real-time data in parallel.\nIt uses the Trades API to perform a historical backfill starting from the start date you specify and stopping when it reaches the present.\nAt the same time, the connector uses websocket streaming to initiate a real-time stream of trade data starting at the present moment and continuing indefinitely until you stop the capture process."),(0,r.kt)("p",null,"As a result, you'll get data from a historical time period you specify, as well as the lowest-latency\npossible updates of new trade data, but there will be some overlap in the two data streams.\nSee ",(0,r.kt)("a",{parentName:"p",href:"#limitations"},"limitations")," to learn more about reconciling historical and real-time data."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"Alpaca supports over 8000 stocks and EFTs. You simply supply a list of ",(0,r.kt)("a",{parentName:"p",href:"https://eoddata.com/symbols.aspx"},"symbols")," to Flow when you configure the connector.\nTo check whether Alpaca supports a symbol, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://alpaca.markets/docs/api-references/broker-api/assets/#retrieving-an-asset-by-symbol"},"Alpaca Broker API"),"."),(0,r.kt)("p",null,"You can use this connector to capture data from up to 20 stock symbols into Flow collections in a single capture\n(to add more than 20, set up multiple captures).\nFor a given capture, data from all symbols is captured to a single collection."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An Alpaca account."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To access complete stock data in real-time, you'll need the ",(0,r.kt)("a",{parentName:"li",href:"https://alpaca.markets/docs/market-data/#subscription-plans"},"Unlimited plan"),".\nTo access a smaller sample of trade data with a 15-minute delay, you can use a Free plan, making sure to set ",(0,r.kt)("strong",{parentName:"li"},"Feed")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"iex")," and choose the ",(0,r.kt)("strong",{parentName:"li"},"Free Plan")," option when ",(0,r.kt)("a",{parentName:"li",href:"#endpoint"},"configuring the connector"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Alpaca ",(0,r.kt)("a",{parentName:"p",href:"https://alpaca.markets/docs/market-data/getting-started/#creating-an-alpaca-account-and-finding-your-api-keys"},"API Key ID and Secret Key"),"."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Alpaca source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/disable_backfill")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable Historical Data Backfill"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables historical data backfill via the historical data API. Data will only be collected via streaming."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/disable_real_time")),(0,r.kt)("td",{parentName:"tr",align:null},"Disable Real-Time Streaming"),(0,r.kt)("td",{parentName:"tr",align:null},"Disables real-time streaming via the websocket API. Data will only be collected via the backfill mechanism."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/is_free_plan")),(0,r.kt)("td",{parentName:"tr",align:null},"Free Plan"),(0,r.kt)("td",{parentName:"tr",align:null},"Set this if you are using a free plan. Delays data by 15 minutes."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/max_backfill_interval")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Backfill Interval"),(0,r.kt)("td",{parentName:"tr",align:null},"The largest time interval that will be requested for backfills. Using smaller intervals may be useful when tracking many symbols. Must be a valid Go duration string."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/min_backfill_interval")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum Backfill Interval"),(0,r.kt)("td",{parentName:"tr",align:null},"The smallest time interval that will be requested for backfills after the initial backfill is complete. Must be a valid Go duration string."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/stop_date")),(0,r.kt)("td",{parentName:"tr",align:null},"Stop Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Stop backfilling historical data at this date."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/api_key_id"))),(0,r.kt)("td",{parentName:"tr",align:null},"Alpaca API Key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Your Alpaca API key ID."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/api_secret_key"))),(0,r.kt)("td",{parentName:"tr",align:null},"Alpaca API Secret Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Your Alpaca API Secret key."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/feed"))),(0,r.kt)("td",{parentName:"tr",align:null},"Feed"),(0,r.kt)("td",{parentName:"tr",align:null},"The feed to pull market data from. ",(0,r.kt)("a",{parentName:"td",href:"https://alpaca.markets/docs/market-data/#subscription-plans"},"Choose from ",(0,r.kt)("inlineCode",{parentName:"a"},"iex")," or ",(0,r.kt)("inlineCode",{parentName:"a"},"sip")),"; set ",(0,r.kt)("inlineCode",{parentName:"td"},"iex")," if using a free plan."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Get trades starting at this date. Has no effect if changed after the capture has started. Must be no earlier than 2016-01-01T00:00:00Z."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/symbols"))),(0,r.kt)("td",{parentName:"tr",align:null},"Symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"Comma separated list of symbols to monitor."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/name"))),(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique name for this binding. Cannot be changed once set."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n      endpoint:\n        connector:\n          image: "ghcr.io/estuary/source-alpaca:dev"\n          config:\n            api_key_id: <SECRET>\n            api_secret_key: <SECRET>\n            feed: iex\n            start_date: 2022-11-01T00:00:00Z\n            symbols: AAPL,MSFT,AMZN,TSLA,GOOGL,GOOG,NVDA,BRK.B,META,UNH\n            advanced:\n              is_free_plan: true\n      bindings:\n        - resource:\n            name: trades\n          target: ${PREFIX}/${CAPTURE_NAME}/trades\n')),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("h4",{id:"capturing-data-for-more-than-20-symbols-in-a-single-capture-could-result-in-api-errors"},"Capturing data for more than 20 symbols in a single capture could result in API errors."),(0,r.kt)("p",null,"If you need to capture data for more than 20 symbols, we recommend splitting them between two captures.\nSupport for a larger number of symbols in a single capture is planned for a future release."),(0,r.kt)("h4",{id:"separate-historical-and-real-time-data-streams-will-result-in-some-duplicate-trade-documents"},"Separate historical and real-time data streams will result in some duplicate trade documents."),(0,r.kt)("p",null,"As discussed ",(0,r.kt)("a",{parentName:"p",href:"#real-time-and-historical-trade-data"},"above"),", the connector captures historical and real-time data in two different streams.\nAs the historical data stream catches up to the present, it will overlap with the beginning of the real-time data stream, resulting in some duplicated documents.\nThese will have ",(0,r.kt)("a",{parentName:"p",href:"https://alpaca.markets/docs/api-references/market-data-api/stock-pricing-data/historical/#response-object-properties"},"identical properties from Alpaca"),", but different ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/concepts/collections#documents"},"metadata from Flow"),"."),(0,r.kt)("p",null,"There are several ways to resolve this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you plan to materialize to an endpoint for which standard (non-delta) updates are supported, Flow will resolve the duplicates during the materialization process.\nUnless otherwise specified in their ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/reference/Connectors/materialization-connectors/"},"documentation page"),", materialization connectors run in standard updates mode.\nIf a connector supports both modes, it will default to standard updates.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you plan to materialize to an endpoint for which ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/concepts/materialization#delta-updates"},"delta updates")," is the only option,\nensure that the endpoint system supports the equivalent of ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1263/reference/reduction-strategies/firstwritewins-and-lastwritewins"},"lastWriteWins")," reductions."))))}u.isMDXComponent=!0}}]);