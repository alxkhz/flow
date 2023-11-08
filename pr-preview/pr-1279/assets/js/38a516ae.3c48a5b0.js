"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),l=n(6550),c=n(1980),s=n(7392),p=n(12);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,s]=h({queryString:n,groupId:a}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=c??u;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),f(e)}),[s,f,r]),tabValues:r}}var y=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==l&&(u(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function g(e){const t=(0,y.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},8227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162);const l={sidebar_position:3},c="Collections",s={unversionedId:"concepts/collections",id:"concepts/collections",title:"Collections",description:"The documents of your Data Flows are stored in collections:",source:"@site/docs/concepts/collections.md",sourceDirName:"concepts",slug:"/concepts/collections",permalink:"/pr-preview/pr-1279/concepts/collections",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/collections.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Captures",permalink:"/pr-preview/pr-1279/concepts/captures"},next:{title:"Materializations",permalink:"/pr-preview/pr-1279/concepts/materialization"}},p={},u=[{value:"Documents",id:"documents",level:2},{value:"Viewing collection documents",id:"viewing-collection-documents",level:2},{value:"In the web application",id:"in-the-web-application",level:4},{value:"Using the flowctl CLI",id:"using-the-flowctl-cli",level:4},{value:"Specification",id:"specification",level:2},{value:"Schemas",id:"schemas",level:2},{value:"Keys",id:"keys",level:2},{value:"Schema restrictions",id:"schema-restrictions",level:3},{value:"Composite Keys",id:"composite-keys",level:3},{value:"Key behaviors",id:"key-behaviors",level:3},{value:"Empty keys",id:"empty-keys",level:3},{value:"Projections",id:"projections",level:2},{value:"Storage",id:"storage",level:2}],m={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"collections"},"Collections"),(0,o.kt)("p",null,"The documents of your Data Flows are stored in ",(0,o.kt)("strong",{parentName:"p"},"collections"),":\nreal-time data lakes of JSON documents in cloud storage."),(0,o.kt)("p",null,"The data in a collection may be ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/captures"},"captured")," from an external system,\nor ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/derivations"},"derived")," as a transformation of one or more other collections.\nWhen you ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/guides/create-dataflow#create-a-capture"},"create a new capture in a typical workflow"),",\nyou define one or more new collections as part of that process.\n",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/materialization"},"Materializations")," then read data from collections."),(0,o.kt)("p",null,"Every collection has a key and an associated ",(0,o.kt)("a",{parentName:"p",href:"#schemas"},"schema"),"\nthat its documents must validate against."),(0,o.kt)("h2",{id:"documents"},"Documents"),(0,o.kt)("p",null,"Flow processes and stores data in terms of documents: JSON files that consist of multiple key-value pair objects. Collections are comprised of documents; Flow tasks (captures, materializations, and derivations) process data in terms of documents."),(0,o.kt)("p",null,"A Flow document corresponds to different units of data in different types of endpoint systems.\nFor example, it might map to a table row, a pub/sub message, or an API response.\nThe structure of a given collection\u2019s documents is determined by that collection\u2019s ",(0,o.kt)("a",{parentName:"p",href:"#schemas"},"schema")," and the way in which tasks handle documents is determined by the collection ",(0,o.kt)("a",{parentName:"p",href:"#keys"},"key"),"."),(0,o.kt)("p",null,"The size of a document depends on the complexity of the source data.\nFlow allows documents up to 16 MB in size, but it's rare for documents to approach this limit."),(0,o.kt)("p",null,"An example document for a collection with two fields, ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_meta": {\n    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\n  },\n  "count": 5954,\n  "message": "Hello #5954"\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"_meta")," object is present in all Flow documents, and contains metadata added by Flow. Minimally, every document ",(0,o.kt)("inlineCode",{parentName:"p"},"_meta")," always has a ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),", which is a globally unique id for each document. Some capture connectors may add additional ",(0,o.kt)("inlineCode",{parentName:"p"},"_meta")," properties to tie each document to a specific record within the source system. Documents that were captured from cloud storage connectors, for example, will contain ",(0,o.kt)("inlineCode",{parentName:"p"},"/_meta/file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/_meta/offset")," properties that tell you where the document came from within your cloud storage bucket."),(0,o.kt)("h2",{id:"viewing-collection-documents"},"Viewing collection documents"),(0,o.kt)("p",null,"In many cases, it's not necessary to view your collection data \u2014 you're able to materialize it directly to a destination in the correct shape using a ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/#connectors"},"connector"),"."),(0,o.kt)("p",null,"However, it can be helpful to view collection documents to confirm the source data was captured as expected, or verify a schema change."),(0,o.kt)("h4",{id:"in-the-web-application"},"In the web application"),(0,o.kt)("p",null,"Sign into the Flow web application and click the ",(0,o.kt)("strong",{parentName:"p"},"Collections")," tab. The collections to which you have access are listed.\nClick the ",(0,o.kt)("strong",{parentName:"p"},"Details")," drop down to show a sample of collection documents as well as the collection ",(0,o.kt)("a",{parentName:"p",href:"#specification"},"specification"),"."),(0,o.kt)("p",null,"The collection documents are displayed by key. Click the desired key to preview it in its native JSON format."),(0,o.kt)("h4",{id:"using-the-flowctl-cli"},"Using the flowctl CLI"),(0,o.kt)("p",null,"In your ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/reference/authentication#authenticating-flow-using-the-cli"},"authenticated flowctl session"),", issue the command ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl collections read --collection <full/collection-name> --uncommitted"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl collections read --collection acmeCo/inventory/anvils --uncommitted"),"."),(0,o.kt)("p",null,"Options are available to read a subset of data from collections.\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"--since")," allows you to specify an approximate start time from which to read data, and\n",(0,o.kt)("inlineCode",{parentName:"p"},"--include-partition")," allows you to read only data from a specified ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/advanced/projections#logical-partitions"},"logical partition"),".\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl collections read --help")," to see documentation for all options."),(0,o.kt)("admonition",{title:"Beta",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"While in beta, this command currently has the following limitations. They will be removed in a later release:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--uncommitted")," flag is required. This means that all collection documents are read, regardless of whether they were successfully committed or not.\nIn the future, reads of committed documents will be the default.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Only reads of a single ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/advanced/projections#logical-partitions"},"partition")," are supported. If you need to read from a partitioned collection, use ",(0,o.kt)("inlineCode",{parentName:"p"},"--include-partition")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--exclude-partition")," to narrow down to a single partition.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--output")," flag is not usable for this command. Only JSON data can be read from collections.")))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("p",null,"Collections are defined in Flow specification files per the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# A set of collections to include in the catalog.\n# Optional, type: object\ncollections:\n  # The unique name of the collection.\n  acmeCo/products/anvils:\n\n    # The schema of the collection, against which collection documents\n    # are validated. This may be an inline definition or a relative URI\n    # reference.\n    # Required, type: string (relative URI form) or object (inline form)\n    schema: anvils.schema.yaml\n\n    # The key of the collection, specified as JSON pointers of one or more\n    # locations within collection documents. If multiple fields are given,\n    # they act as a composite key, equivalent to a SQL table PRIMARY KEY\n    # with multiple table columns.\n    # Required, type: array\n    key: [/product/id]\n\n    # Projections and logical partitions for this collection.\n    # Optional, type: object\n    projections:\n\n    # Derivation that builds this collection from others through transformations.\n    # See the "Derivations" concept page to learn more.\n    # Optional, type: object\n    derive: ~\n')),(0,o.kt)("h2",{id:"schemas"},"Schemas"),(0,o.kt)("p",null,"Every Flow collection must declare a schema,\nand will never accept documents\nthat do not validate against the schema.\nThis helps ensure the quality of your data products\nand the reliability of your derivations and materializations.\nSchema specifications are flexible:\nyours could be exactingly strict, extremely permissive, or somewhere in between.\nFor many source types, Flow is able to generate a basic schema during ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/captures#discovery"},"discovery"),"."),(0,o.kt)("p",null,"Schemas may either be declared inline, or provided as a reference to a file.\nReferences can also include JSON pointers as a URL fragment to name a specific schema of a larger schema document:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Inline",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/collection:\n    schema:\n      type: object\n      required: [id]\n      properties:\n        id: string\n    key: [/id]\n"))),(0,o.kt)(i.Z,{value:"File reference",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/collection:\n    schema: ../path/to/collection.schema.yaml\n    key: [/id]\n"))),(0,o.kt)(i.Z,{value:"Reference with pointer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/collection:\n    schema: ../path/to/collection.schema.yaml#/definitions/mySchema\n    key: [/id]\n")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/schemas"},"Learn more about schemas")),(0,o.kt)("h2",{id:"keys"},"Keys"),(0,o.kt)("p",null,"Every Flow collection must declare a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," which is used to group its documents.\nKeys are specified as an array of JSON pointers to document locations. For example:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"flow.yaml",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/users:\n    schema: schema.yaml\n    key: [/userId]\n"))),(0,o.kt)(i.Z,{value:"schema.yaml",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"type: object\n  properties:\n    userId: {type: integer}\n    name: {type: string}\n  required: [userId, name]\n")))),(0,o.kt)("p",null,"Suppose the following JSON documents are captured into ",(0,o.kt)("inlineCode",{parentName:"p"},"acmeCo/users"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"userId": 1, "name": "Will"}\n{"userId": 1, "name": "William"}\n{"userId": 1, "name": "Will"}\n')),(0,o.kt)("p",null,"As its key is ",(0,o.kt)("inlineCode",{parentName:"p"},"[/userId]"),", a materialization of the collection into a database table will reduce to a single row:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"userId | name\n1      | Will\n")),(0,o.kt)("p",null,"If its key were instead ",(0,o.kt)("inlineCode",{parentName:"p"},"[/name]"),", there would be two rows in the table:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"userId | name\n1      | Will\n1      | William\n")),(0,o.kt)("h3",{id:"schema-restrictions"},"Schema restrictions"),(0,o.kt)("p",null,"Keyed document locations may be of a limited set of allowed types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"boolean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"integer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"string"))),(0,o.kt)("p",null,"Excluded types are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"array")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"object")),(0,o.kt)("li",{parentName:"ul"},"Fractional ",(0,o.kt)("inlineCode",{parentName:"li"},"number"))),(0,o.kt)("p",null,"Keyed fields also must always exist in collection documents.\nFlow performs static inference of the collection schema to verify the existence\nand types of all keyed document locations, and will report an error if the\nlocation could not exist, or could exist with the wrong type."),(0,o.kt)("p",null,"Flow itself doesn't mind if a keyed location has multiple types,\nso long as they're each of the allowed types: an ",(0,o.kt)("inlineCode",{parentName:"p"},"integer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," for example.\nSome materialization ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/connectors"},"connectors"),", however, may impose further type\nrestrictions as required by the endpoint.\nFor example, SQL databases do not support multiple types for a primary key."),(0,o.kt)("h3",{id:"composite-keys"},"Composite Keys"),(0,o.kt)("p",null,"A collection may have multiple locations which collectively form a composite key.\nThis can include locations within nested objects and arrays:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"flow.yaml",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/compound-key:\n    schema: schema.yaml\n    key: [/foo/a, /foo/b, /foo/c/0, /foo/c/1]\n"))),(0,o.kt)(i.Z,{value:"schema.yaml",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"type: object\nrequired: [foo]\nproperties:\n  foo:\n    type: object\n    required: [a, b, c]\n    properties:\n      a: {type: integer}\n      b: {type: string}\n      c:\n        type: array\n        items: {type: boolean}\n        minItems: 2\n")))),(0,o.kt)("h3",{id:"key-behaviors"},"Key behaviors"),(0,o.kt)("p",null,"A collection key instructs Flow how documents of a collection are to be\nreduced, such as while being materialized to an endpoint.\nFlow also performs opportunistic local reductions over windows of documents\nto improve its performance and reduce the volumes\nof data at each processing stage."),(0,o.kt)("p",null,"An important subtlety is that the underlying storage of a collection\nwill potentially retain ",(0,o.kt)("em",{parentName:"p"},"many")," documents of a given key."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"#keys"},"acmeCo/users example"),', each of the "Will" or "William" variants\nis likely represented in the collection\'s storage \u2014 so long as they didn\'t\narrive so closely together that they were locally combined by Flow.\nIf desired, a derivation could re-key the collection\non ',(0,o.kt)("inlineCode",{parentName:"p"},"[/userId, /name]")," to materialize the various ",(0,o.kt)("inlineCode",{parentName:"p"},"/name"),"s seen for a ",(0,o.kt)("inlineCode",{parentName:"p"},"/userId"),"."),(0,o.kt)("p",null,"This property makes keys less lossy than they might otherwise appear,\nand it is generally good practice to chose a key that reflects how\nyou wish to ",(0,o.kt)("em",{parentName:"p"},"query")," a collection, rather than an exhaustive key\nthat's certain to be unique for every document."),(0,o.kt)("h3",{id:"empty-keys"},"Empty keys"),(0,o.kt)("p",null,"When a specification is automatically generated, there may not be an unambiguously correct key for all collections. This could occur, for example, when a SQL database doesn't have a primary key defined for some table."),(0,o.kt)("p",null,"In cases like this, the generated specification will contain an empty collection key. However, every collection must have a non-empty key, so you'll need to manually edit the generated specification and specify keys for those collections before publishing to the catalog."),(0,o.kt)("h2",{id:"projections"},"Projections"),(0,o.kt)("p",null,"Projections are named locations within a collection document that may be used for\nlogical partitioning or directly exposed to databases into which collections are\nmaterialized."),(0,o.kt)("p",null,"Many projections are automatically inferred from the collection schema.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"projections")," stanza can be used to provide additional projections,\nand to declare logical partitions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n  acmeCo/products/anvils:\n    schema: anvils.schema.yaml\n    key: [/product/id]\n\n    # Projections and logical partitions for this collection.\n    # Keys name the unique projection field, and values are its JSON Pointer\n    # location within the document and configure logical partitioning.\n    # Optional, type: object\n    projections:\n      # Short form: define a field "product_id" with document pointer /product/id.\n      product_id: "/product/id"\n\n      # Long form: define a field "metal" with document pointer /metal_type\n      # which is a logical partition of the collection.\n      metal:\n        location: "/metal_type"\n        partition: true\n\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/advanced/projections"},"Learn more about projections"),"."),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("p",null,"Collections are real-time data lakes.\nHistorical documents of the collection\nare stored as an organized layout of\nregular JSON files in your cloud storage bucket.\nReads of that history are served by\ndirectly reading files from your bucket."),(0,o.kt)("p",null,"Your ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/storage-mappings"},"storage mappings"),"\ndetermine how Flow collections are mapped into\nyour cloud storage buckets."),(0,o.kt)("p",null,"Unlike a traditional data lake, however,\nit's very efficient to read collection documents as they are written.\nDerivations and materializations that source from a collection\nare notified of its new documents within milliseconds of their being published."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/advanced/journals"},"Learn more about journals, which provide storage for collections")))}h.isMDXComponent=!0}}]);