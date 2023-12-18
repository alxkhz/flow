"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Create a basic Data Flow",l={unversionedId:"guides/create-dataflow",id:"guides/create-dataflow",title:"Create a basic Data Flow",description:"This guide walks you through the process of creating an end-to-end Data Flow.",source:"@site/docs/guides/create-dataflow.md",sourceDirName:"guides",slug:"/guides/create-dataflow",permalink:"/pr-preview/pr-1319/guides/create-dataflow",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/create-dataflow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flow user guides",permalink:"/pr-preview/pr-1319/guides/"},next:{title:"System-specific Data Flows",permalink:"/pr-preview/pr-1319/guides/system-specific-dataflows/"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Create a capture",id:"create-a-capture",level:2},{value:"Create a materialization",id:"create-a-materialization",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-basic-data-flow"},"Create a basic Data Flow"),(0,r.kt)("p",null,"This guide walks you through the process of creating an end-to-end Data Flow."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This guide is intended for new Flow users and briefly introduces Flow's key concepts.\nThough it's not required, you may find it helpful to read\nthe ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/concepts/#essential-concepts"},"high level concepts")," documentation for more detail before you begin."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In Estuary Flow, you create Data Flows to connect data ",(0,r.kt)("strong",{parentName:"p"},"source")," and ",(0,r.kt)("strong",{parentName:"p"},"destination")," systems."),(0,r.kt)("p",null,"The simplest Data Flow comprises three types of entities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A data ",(0,r.kt)("strong",{parentName:"li"},"capture"),", which ingests data from an external source"),(0,r.kt)("li",{parentName:"ul"},"One or more ",(0,r.kt)("strong",{parentName:"li"},"collections"),", which store that data in a cloud-backed data lake"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"materialization"),", to push the data to an external destination")),(0,r.kt)("p",null,"The capture and materialization each rely on a ",(0,r.kt)("strong",{parentName:"p"},"connector"),".\nA connector is a plug-in component that interfaces between Flow and whatever data system you need to connect to.\nHere, we'll walk through how to leverage various connectors, configure them, and deploy your Data Flow."),(0,r.kt)("h2",{id:"create-a-capture"},"Create a capture"),(0,r.kt)("p",null,"You'll first create a ",(0,r.kt)("strong",{parentName:"p"},"capture")," to connect to your data source system.\nThis process will create one or more ",(0,r.kt)("strong",{parentName:"p"},"collections")," in Flow, which you can then materialize to another system."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the Flow web application at ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/"},"dashboard.estuary.dev")," and sign in using the\ncredentials provided by your Estuary account manager.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Sources")," tab and choose ",(0,r.kt)("strong",{parentName:"p"},"New Capture"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the appropriate ",(0,r.kt)("strong",{parentName:"p"},"Connector")," for your desired data source."),(0,r.kt)("p",{parentName:"li"},"A form appears with the properties required for that connector.\nA documentation page with details about that connector appears in the side panel.\nYou can also browse the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/reference/Connectors/capture-connectors/"},"connectors reference")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type a name for your capture."),(0,r.kt)("p",{parentName:"li"},"Your capture name must begin with a ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/concepts/catalogs#namespace"},"prefix")," to which you ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/reference/authentication"},"have access"),"."),(0,r.kt)("p",{parentName:"li"}," In the ",(0,r.kt)("strong",{parentName:"p"},"Name")," field, click the drop-down arrow and select an available prefix.\nAppend a unique capture name after the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," to create the full name, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"acmeCo/myFirstCapture"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the required properties and click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("p",{parentName:"li"},"Flow uses the provided information to initiate a connection to the source system.\nIt identifies one or more data ",(0,r.kt)("strong",{parentName:"p"},"resources")," \u2014 these may be tables, data streams, or something else, depending on the connector. These are each mapped to a ",(0,r.kt)("strong",{parentName:"p"},"collection"),"."),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"Output Collections")," browser appears, showing this list of available collections.\nYou can decide which ones you want to capture.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Look over the list of available collections. All are selected by default.\nYou can remove collections you don't want to capture, change collection names, and for some connectors, modify other properties."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Narrow down a large list of available collections by typing in the ",(0,r.kt)("strong",{parentName:"p"},"Search Bindings")," box.")),(0,r.kt)("p",null,"  If you're unsure which collections you want to keep or remove, you can look at their ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/concepts/#schemas"},"schemas"),"."),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Output Collections")," browser, select a collection and click the ",(0,r.kt)("strong",{parentName:"p"},"Collection")," tab to view its schema and collection key.\n.\nFor many source systems, you'll notice that the collection schemas are quite permissive.\nYou'll have the option to apply more restrictive schemas later, when you materialize the collections.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you made any changes to output collections, click ",(0,r.kt)("strong",{parentName:"p"},"Next")," again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you're satisfied with the configuration, click ",(0,r.kt)("strong",{parentName:"p"},"Save and Publish"),". You'll see a notification when the capture publishes successfully.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Materialize collections")," to continue."))),(0,r.kt)("h2",{id:"create-a-materialization"},"Create a materialization"),(0,r.kt)("p",null,"Now that you've captured data into one or more collections, you can materialize it to a destination."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the tile for your desired data destination and click ",(0,r.kt)("strong",{parentName:"p"},"Materialization"),"."),(0,r.kt)("p",{parentName:"li"},"The page populates with the properties required for that connector.\nMore details are on each connector are provided in the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/reference/Connectors/materialization-connectors/"},"connectors reference"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose a unique name for your materialization like you did when naming your capture; for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"acmeCo/myFirstMaterialization"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the required properties in the ",(0,r.kt)("strong",{parentName:"p"},"Endpoint Configuration"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("p",{parentName:"li"},"Flow initiates a connection with the destination system."),(0,r.kt)("p",{parentName:"li"},"The Endpoint Config has collapsed and the ",(0,r.kt)("strong",{parentName:"p"},"Source Collections")," browser is now prominent.\nIt shows each collection you captured previously.\nAll of them will be mapped to a ",(0,r.kt)("strong",{parentName:"p"},"resource")," in the destination.\nAgain, these may be tables, data streams, or something else.\nWhen you publish the Data Flow, Flow will create these new resources in the destination."),(0,r.kt)("p",{parentName:"li"},"Now's your chance to make changes to the collections before you materialize them.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally remove some collections or add additional collections."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type in the ",(0,r.kt)("strong",{parentName:"p"},"Search Collections")," box to find a collection.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To remove a collection, click the ",(0,r.kt)("strong",{parentName:"p"},"x")," in its table row. You can also click the ",(0,r.kt)("strong",{parentName:"p"},"Remove All")," button.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optionally apply a stricter schema to each collection to use for the materialization."),(0,r.kt)("p",{parentName:"li"},"Depending on the data source, you may have captured data with a fairly permissive schema.\nYou can tighten up the schema so it'll materialize to your destination in the correct shape.\n(This isn't necessary for database and SaaS data sources, so the option won't be available.)"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose a collection from the list and click its ",(0,r.kt)("strong",{parentName:"p"},"Collection")," tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Schema Inference"),"."),(0,r.kt)("p",{parentName:"li"},"The Schema Inference window appears. Flow scans the data in your collection and infers a new schema, called the ",(0,r.kt)("inlineCode",{parentName:"p"},"readSchema"),", to use for the materialization.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the new schema and click ",(0,r.kt)("strong",{parentName:"p"},"Apply Inferred Schema"),"."))),(0,r.kt)("p",{parentName:"li"},"You can exert even more control over the output data structure using the ",(0,r.kt)("strong",{parentName:"p"},"Field Selector")," on the ",(0,r.kt)("strong",{parentName:"p"},"Config tab"),".\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/guides/customize-materialization-fields"},"Learn how."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you've made any changes to source fields, click ",(0,r.kt)("strong",{parentName:"p"},"Next")," again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save and publish"),". You'll see a notification when the full Data Flow publishes successfully."))),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Now that you've deployed your first Data Flow, you can explore more possibilities."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/concepts/"},"high level concepts")," to better understand how Flow works and what's possible.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create more complex Data Flows by mixing and matching collections in your captures and materializations. For example:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Materialize the same collection to multiple destinations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a capture produces multiple collections, materialize each one to a different destination.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Materialize collections that came from different sources to the same destination.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Advanced users can modify collection ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/concepts/schemas"},"schemas"),", apply data ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/concepts/schemas#reductions"},"reductions"),",\nor transform data with a ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1319/concepts/derivations"},"derivation")))))))}u.isMDXComponent=!0}}]);