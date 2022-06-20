"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3365],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6708:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:1},p="Create a simple data flow",s={unversionedId:"guides/create-dataflow",id:"guides/create-dataflow",title:"Create a simple data flow",description:"This guide walks you through the process of creating an end-to-end data flow in the",source:"@site/docs/guides/create-dataflow.md",sourceDirName:"guides",slug:"/guides/create-dataflow",permalink:"/guides/create-dataflow",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/create-dataflow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Your first data flow",permalink:"/getting-started/flow-tutorials/hello-flow"},next:{title:"Configure connections with SSH tunneling",permalink:"/guides/connect-network"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Create a capture",id:"create-a-capture",level:2},{value:"Create a materialization",id:"create-a-materialization",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-simple-data-flow"},"Create a simple data flow"),(0,o.kt)("p",null,"This guide walks you through the process of creating an end-to-end data flow in the\nFlow web application."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Beta")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Flow web application is currently available to users in the Estuary ",(0,o.kt)("a",{parentName:"p",href:"https://go.estuary.dev/sign-up"},"beta program"),"."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"This guide is intended for new Flow users and briefly introduces Flow's key concepts.\nThough it's not required, you may find it helpful to read\nthe ",(0,o.kt)("a",{parentName:"p",href:"/concepts/"},"high level concepts")," documentation for more detail before you begin."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In Estuary Flow, you create data flows to connect data ",(0,o.kt)("strong",{parentName:"p"},"source")," and ",(0,o.kt)("strong",{parentName:"p"},"destination")," systems.\nThe set of specifications that defines a data flow is known as a ",(0,o.kt)("strong",{parentName:"p"},"catalog"),", and is made of several important entities."),(0,o.kt)("p",null,"The simplest Flow catalog comprises three types of entities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A data ",(0,o.kt)("strong",{parentName:"li"},"capture"),", which ingests data from an external source"),(0,o.kt)("li",{parentName:"ul"},"One or more ",(0,o.kt)("strong",{parentName:"li"},"collections"),", which store that data in a cloud-backed data lake"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"materialization"),", to push the data to an external destination")),(0,o.kt)("p",null,"Almost always, the capture and materialization each rely on a ",(0,o.kt)("strong",{parentName:"p"},"connector"),".\nA connector is a plug-in component that interfaces between Flow and whatever data system you need to connect to.\nHere, we'll walk through how to leverage various connectors, configure them, and deploy your catalog to create an active data flow."),(0,o.kt)("h2",{id:"create-a-capture"},"Create a capture"),(0,o.kt)("p",null,"You'll first create a ",(0,o.kt)("strong",{parentName:"p"},"capture")," to connect to your data source system.\nThis process will create one or more ",(0,o.kt)("strong",{parentName:"p"},"collections")," in Flow, which you can then materialize to another system."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the Flow web application at ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/"},"dashboard.estuary.dev")," and sign in using the\ncredentials provided by your Estuary account manager.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Captures")," tab and choose ",(0,o.kt)("strong",{parentName:"p"},"New capture"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Create Capture")," page, choose a name for your capture.\nYour capture name must begin with a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/#namespace"},"prefix")," to which you ",(0,o.kt)("a",{parentName:"p",href:"/reference/authentication"},"have access"),".\nClick inside the ",(0,o.kt)("strong",{parentName:"p"},"Name")," field to generate a drop-down menu of available prefixes, and select your prefix.\nAppend a unique capture name after the ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," to create the full name, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/myFirstCapture"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("strong",{parentName:"p"},"Connector")," drop down to choose your desired data source."),(0,o.kt)("p",{parentName:"li"},"A form appears with the properties required for that connector.\nMore details are on each connector are provided in the ",(0,o.kt)("a",{parentName:"p",href:"/reference/Connectors/capture-connectors/"},"connectors reference"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the required properties and click ",(0,o.kt)("strong",{parentName:"p"},"Discover Endpoint"),"."),(0,o.kt)("p",{parentName:"li"},"Flow uses the provided information to initiate a connection to the source system.\nIt identifies one or more data ",(0,o.kt)("strong",{parentName:"p"},"resources")," \u2014 these may be tables, data streams, or something else, depending on the connector. Each resource is mapped to a collection through a ",(0,o.kt)("strong",{parentName:"p"},"binding"),"."),(0,o.kt)("p",{parentName:"li"},"If there's an error, you'll be prompted to fix and test your configuration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Look over the generated capture definition and the schema of the resulting Flow ",(0,o.kt)("strong",{parentName:"p"},"collection(s)"),"."),(0,o.kt)("p",{parentName:"li"},"Flow generates catalog specifications as YAML files.\nYou can modify it by filling in new values in the form and clicking ",(0,o.kt)("strong",{parentName:"p"},"Discover Endpoint"),",\nor by editing the YAML files directly in the web application.\n(Those who prefer a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/flowctl"},"command-line interface")," can manage and edit YAML in their preferred development environment)."),(0,o.kt)("p",{parentName:"li"},"It's not always necessary to review and edit the YAML \u2014 Flow will prevent the publication of invalid catalogs.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you're satisfied with the configuration, click ",(0,o.kt)("strong",{parentName:"p"},"Save and publish"),". You'll see a notification when the capture publishes successfully.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Materialize collections")," to continue."))),(0,o.kt)("h2",{id:"create-a-materialization"},"Create a materialization"),(0,o.kt)("p",null,"Now that you've captured data into one or more collections, you can materialize it to a destination."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"New Materializations")," page is pre-populated with the capture and collection you just created."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a unique name for your materialization like you did when naming your capture; for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/myFirstMaterialization"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the ",(0,o.kt)("strong",{parentName:"p"},"Connector")," drop down to choose your desired data destination."),(0,o.kt)("p",{parentName:"li"},"The rest of the page populates with the properties required for that connector.\nMore details are on each connector are provided in the ",(0,o.kt)("a",{parentName:"p",href:"/reference/Connectors/materialization-connectors/"},"connectors reference"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill out the required properties and click ",(0,o.kt)("strong",{parentName:"p"},"Discover Endpoint"),"."),(0,o.kt)("p",{parentName:"li"},"Flow initiates a connection with the destination system, and creates a binding to map each collection in your catalog to a ",(0,o.kt)("strong",{parentName:"p"},"resource")," in the destination.\nAgain, these may be tables, data streams, or something else.\nWhen you publish the complete catalog, Flow will create these new resources in the destination.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Look over the generated materialization definition and edit it, if you'd like.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save and publish"),". You'll see a notification when the full data flow publishes successfully."))),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Now that you've deployed your first data flow, you can explore more possibilities."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/"},"high level concepts")," to better understand how Flow works and what's possible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create more complex data flows by mixing and matching collections in your captures and materializations. For example:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Materialize the same collection to multiple destinations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If a capture produces multiple collections, materialize each one to a different destination.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Materialize collections that came from different sources to the same destination.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Advanced users can modify collection ",(0,o.kt)("a",{parentName:"p",href:"/concepts/schemas"},"schemas"),", apply data ",(0,o.kt)("a",{parentName:"p",href:"/concepts/schemas#reductions"},"reductions"),",\nor transform data with a ",(0,o.kt)("a",{parentName:"p",href:"/concepts/derivations"},"derivation"),"\n(derivations are currently available using the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/flowctl"},"CLI"),",\nbut support in the web application is coming soon.)"))))}m.isMDXComponent=!0}}]);