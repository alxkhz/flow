"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var y=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function v(e){const t=(0,y.Z)();return r.createElement(b,(0,a.Z)({key:String(t)},e))}},2308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const s={sidebar_position:7},l="Schemas",c={unversionedId:"concepts/schemas",id:"concepts/schemas",title:"Schemas",description:"Flow documents and collections always have an associated schema",source:"@site/docs/concepts/schemas.md",sourceDirName:"concepts",slug:"/concepts/schemas",permalink:"/pr-preview/pr-1308/concepts/schemas",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/schemas.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Imports",permalink:"/pr-preview/pr-1308/concepts/import"},next:{title:"Storage mappings",permalink:"/pr-preview/pr-1308/concepts/storage-mappings"}},u={},p=[{value:"JSON Schema",id:"json-schema",level:2},{value:"Generation",id:"generation",level:3},{value:"Translations",id:"translations",level:3},{value:"Annotations",id:"annotations",level:3},{value:"Writing schemas",id:"writing-schemas",level:2},{value:"Organization",id:"organization",level:3},{value:"Write and read schemas",id:"write-and-read-schemas",level:2},{value:"Reductions",id:"reductions",level:2},{value:"<code>reduce</code> annotations",id:"reduce-annotations",level:3},{value:"Reductions and collection keys",id:"reductions-and-collection-keys",level:4},{value:"Composition with conditionals",id:"composition-with-conditionals",level:4},{value:"Continuous schema inference",id:"continuous-schema-inference",level:2},{value:"<code>default</code> annotations",id:"default-annotations",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schemas"},"Schemas"),(0,r.kt)("p",null,"Flow documents and ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/concepts/collections"},"collections")," always have an associated schema\nthat defines the structure, representation, and constraints\nof your documents.\nCollections must have one schema, but ",(0,r.kt)("a",{parentName:"p",href:"#write-and-read-schemas"},"may have two distinct schemas"),": one for when documents are added to the collection, and one for when documents are read from that collection."),(0,r.kt)("p",null,'Schemas are a powerful tool for data quality.\nFlow verifies every document against its schema whenever it\'s read or written,\nwhich provides a strong guarantee that your collections hold only "clean" data,\nand that bugs and invalid documents are caught before they can impact downstream data products.'),(0,r.kt)("p",null,"In most cases, Flow generates a functioning schema on your behalf during the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/concepts/captures#discovery"},"discovery"),"\nphase of capture.\nIn advanced use cases, however, customizing your schema becomes more important."),(0,r.kt)("h2",{id:"json-schema"},"JSON Schema"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/"},"JSON Schema"),"\nis an expressive open standard for defining the schema and structure of documents.\nFlow uses it for all schemas defined in Flow specifications."),(0,r.kt)("p",null,"JSON Schema goes well beyond basic type information and can model\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tagged_union"},"tagged unions"),",\nrecursion, and other complex, real-world composite types.\nSchemas can also define rich data validations like minimum and maximum values,\nregular expressions, dates, timestamps, email addresses, and other formats."),(0,r.kt)("p",null,"Together, these features let schemas represent structure ",(0,r.kt)("em",{parentName:"p"},"as well as"),"\nexpectations and constraints that are evaluated and must hold true\nfor every collection document ",(0,r.kt)("em",{parentName:"p"},"before")," it\u2019s added to the collection.\nThey\u2019re a powerful tool for ensuring end-to-end data quality:\nfor catching data errors and mistakes early,\nbefore they can impact your production data products."),(0,r.kt)("h3",{id:"generation"},"Generation"),(0,r.kt)("p",null,"When capturing data from an external system,\nFlow can usually generate suitable JSON schemas on your behalf."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/concepts/connectors#using-connectors"},"Learn more about using connectors")),(0,r.kt)("p",null,"For systems like relational databases, Flow will typically generate a complete JSON schema by introspecting the table definition."),(0,r.kt)("p",null,"For systems that store unstructured data, Flow will typically generate a very minimal schema, and will rely on schema inferrence to fill in the details. See ",(0,r.kt)("a",{parentName:"p",href:"#continuous-schema-inference"},"continuous schema inferenece")," for more information."),(0,r.kt)("h3",{id:"translations"},"Translations"),(0,r.kt)("p",null,"You must only provide Flow\na model of a given dataset ",(0,r.kt)("em",{parentName:"p"},"one time"),", as a JSON schema.\nHaving done that, Flow leverages static inference over your schemas\nto perform many build-time validations of your catalog entities,\nhelping you catch potential problems early."),(0,r.kt)("p",null,"Schema inference is also used to provide translations into other schema flavors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Most ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1308/concepts/advanced/projections"},"projections")," of a collection\nare automatically inferred from its schema.\nMaterializations use your projections to create appropriate representations\nin your endpoint system.\nA SQL connector will create table definitions with appropriate\ncolumns, types, and constraints."),(0,r.kt)("li",{parentName:"ul"},"Flow generates TypeScript definitions from schemas to provide\ncompile-time type checks of user lambda functions.\nThese checks are immensely helpful for surfacing mismatched expectations around,\nfor example, whether a field could ever be null or is misspelt \u2014\nwhich, if not caught, might otherwise fail at runtime.")),(0,r.kt)("h3",{id:"annotations"},"Annotations"),(0,r.kt)("p",null,"The JSON Schema standard introduces the concept of\n",(0,r.kt)("a",{parentName:"p",href:"http://json-schema.org/understanding-json-schema/reference/generic.html#annotations"},"annotations"),",\nwhich are keywords that attach metadata to a location within a validated JSON document.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," can be used to annotate a schema with its meaning:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"properties:\n  myField:\n    title: My Field\n    description: A description of myField\n")),(0,r.kt)("p",null,"Flow extends JSON Schema with additional annotation keywords,\nwhich provide Flow with further instruction for how documents should be processed.\nIn particular, the ",(0,r.kt)("a",{parentName:"p",href:"#reduce-annotations"},(0,r.kt)("inlineCode",{parentName:"a"},"reduce"))," and ",(0,r.kt)("a",{parentName:"p",href:"#default-annotations"},(0,r.kt)("inlineCode",{parentName:"a"},"default"))," keywords\nhelp you define merge behaviors and avoid null values at your destination systems, respectively."),(0,r.kt)("p",null,"What\u2019s especially powerful about annotations is that they respond to\n",(0,r.kt)("strong",{parentName:"p"},"conditionals")," within the schema.\nConsider a schema validating a positive or negative number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: number\noneOf:\n  - exclusiveMinimum: 0\n    description: A positive number.\n  - exclusiveMaximum: 0\n    description: A negative number.\n  - const: 0\n    description: Zero.\n")),(0,r.kt)("p",null,"Here, the activated ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," of this schema location depends\non whether the integer is positive, negative, or zero."),(0,r.kt)("h2",{id:"writing-schemas"},"Writing schemas"),(0,r.kt)("p",null,"Your schema can be quite permissive or as strict as you wish.\nThere are a few things to know, however."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The top-level type must be ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),".\nFlow adds a bit of metadata to each of your documents under the ",(0,r.kt)("inlineCode",{parentName:"p"},"_meta")," property,\nwhich can only be done with a top-level object.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any fields that are part of the collection's ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," must provably exist\nin any document that validates against the schema.\nPut another way, every document within a collection must include all of the fields\nof the collection's key, and the schema must guarantee that."))),(0,r.kt)("p",null,"For example, the following collection schema would be invalid because\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field, which is used as its key, is not ",(0,r.kt)("inlineCode",{parentName:"p"},"required"),",\nso it might not actually exist in all documents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/whoops:\n    schema:\n      type: object\n      required: [value]\n      properties:\n        id: {type: integer}\n        value: {type: string}\n    key: [/id]\n")),(0,r.kt)("p",null,"To fix the above schema, change ",(0,r.kt)("inlineCode",{parentName:"p"},"required")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"[id, value]"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/concepts/collections#Schemas"},"Learn more of how schemas can be expressed within collections"),"."),(0,r.kt)("h3",{id:"organization"},"Organization"),(0,r.kt)("p",null,"JSON schema has a ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," keyword which is used to reference a schema stored elsewhere.\nFlow resolves ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," as a relative URL of the current file,\nand also supports\n",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6901#section-6"},"JSON fragment pointers"),"\nfor referencing a specific schema within a larger schema document,\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"},"../my/widget.schema.yaml#/path/to/schema"),".\nIt's recommended to use references in order to organize your schemas for reuse."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ref")," can also be used in combination with other schema keywords\nto further refine a base schema.\nHere's an example that uses references to organize and\nfurther tighten the constraints of a reused base schema:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"flow.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/coordinates:\n    key: [/id]\n    schema: schemas.yaml#/definitions/coordinate\n\n  acmeCo/integer-coordinates:\n    key: [/id]\n    schema: schemas.yaml#/definitions/integer-coordinate\n\n  acmeCo/positive-coordinates:\n    key: [/id]\n    schema:\n      # Compose a restriction that `x` & `y` must be positive.\n      $ref: schemas.yaml#/definitions/coordinate\n      properties:\n        x: {exclusiveMinimum: 0}\n        y: {exclusiveMinimum: 0}\n"))),(0,r.kt)(i.Z,{value:"schemas.yaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'definitions:\n  coordinate:\n    type: object\n    required: [id, x, y]\n    properties:\n      id: {type: string}\n      x:\n        description: The X axis value of the coordinate.\n        type: number\n      y:\n        description: The Y axis value of the coordinate.\n        type: number\n\n  integer-coordinate:\n    $ref: "#/definitions/coordinate"\n    # Compose a restriction that `x` & `y` cannot be fractional.\n    properties:\n      x: {type: integer}\n      y: {type: integer}\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can write your JSON schemas as either YAML or JSON across any number\nof files, all referenced from Flow catalog files or other schemas."),(0,r.kt)("p",{parentName:"admonition"},"Schema references are always resolved as URLs relative to the current file,\nbut you can also use absolute URLs to a third-party schema like\n",(0,r.kt)("a",{parentName:"p",href:"https://www.schemastore.org"},"schemastore.org"),".")),(0,r.kt)("h2",{id:"write-and-read-schemas"},"Write and read schemas"),(0,r.kt)("p",null,"In some cases, you may want to impose different constraints to data that is being added (",(0,r.kt)("em",{parentName:"p"},"written"),") to the collection\nand data that is exiting (",(0,r.kt)("em",{parentName:"p"},"read from"),") the collection."),(0,r.kt)("p",null,"For example, you may need to start capturing data ",(0,r.kt)("em",{parentName:"p"},"now")," from a source system; say, a pub-sub system with short-lived\nhistorical data support or an HTTP endpoint, but don't know or don't control the endpoint's schema.\nYou can capture the data with a permissive write schema, and impose a stricter read schema on the data\nas you need to perform a derivation or materialization.\nYou can safely experiment with the read schema at your convenience, knowing the data has already been captured."),(0,r.kt)("p",null,"To achieve this, edit the collection, re-naming the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"writeSchema")," and adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"readSchema"),".\nMake sure that the field used as the collection key is defined in both schemas."),(0,r.kt)("p",null,"You can either perform this manually, or use Flow's ",(0,r.kt)("strong",{parentName:"p"},"Schema Inference")," tool to infer a read schema.\nSchema Inference is available in the web app when you ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/guides/edit-data-flows"},"edit a capture or materialization")," and ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/guides/create-dataflow#create-a-materialization"},"create a materialization"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before separating your write and read schemas, have the following in mind:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The write schema comes from the capture connector that produced the collection and shouldn't be modified.\nAlways apply your schema changes to the ",(0,r.kt)("em",{parentName:"p"},"read")," schema.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Separate read and write schemas are typically useful for collections that come from a source system with a flat or loosely\ndefined data structure, such as cloud storage or pub-sub systems.\nCollections sourced from databases and most SaaS systems come with an explicitly defined data structure and shouldn't\nneed a different read schema.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you're using standard ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/concepts/advanced/projections"},"projections"),", you must only define them in the read schema.\nHowever, if your projections are ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/concepts/advanced/projections#logical-partitions"},"logical partitions"),", you must define them in both schemas."))),(0,r.kt)("p",null,"Here's a simple example in which you don't know how purchase prices are formatted when capturing them,\nbut find out later that ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," is the appropriate data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  purchases:\n    writeSchema:\n      type: object\n      title: Store price as strings\n      description: Not sure if prices are formatted as numbers or strings.\n      properties:\n        id: { type: integer}\n        price: {type: [string, number]}\n    readSchema:\n      type: object\n      title: Prices as numbers\n      properties:\n        id: { type: integer}\n        price: {type: number}\n    key: [/id]\n")),(0,r.kt)("h2",{id:"reductions"},"Reductions"),(0,r.kt)("p",null,"Flow collections have keys, and multiple documents\nmay be added to collections that share a common key.\nWhen this happens, Flow will opportunistically merge all such documents\ninto a single representative document for that key through a process\nknown as ",(0,r.kt)("em",{parentName:"p"},"reduction"),"."),(0,r.kt)("p",null,"Flow's default is simply to retain the most recent document of a given key,\nwhich is often the behavior that you're after.\nSchema ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," annotations allow for far more powerful behaviors."),(0,r.kt)("p",null,"The Flow runtime performs reductions frequently and continuously\nto reduce the overall movement and cost of data transfer and storage.\nA torrent of input collection documents can often become a trickle\nof reduced updates that must be stored or materialized into your\nendpoints."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Flow never delays processing in order to batch or combine more documents,\nas some systems do (commonly known as ",(0,r.kt)("em",{parentName:"p"},"micro-batches"),", or time-based ",(0,r.kt)("em",{parentName:"p"},"polling"),").\nEvery document is processed as quickly as possible, from end to end."),(0,r.kt)("p",{parentName:"admonition"},"Instead Flow uses optimistic transaction pipelining to do as much useful work as possible,\nwhile it awaits the commit of a previous transaction.\nThis natural back-pressure affords plenty of opportunity for\ndata reductions while minimizing latency.")),(0,r.kt)("h3",{id:"reduce-annotations"},(0,r.kt)("inlineCode",{parentName:"h3"},"reduce")," annotations"),(0,r.kt)("p",null,"Reduction behaviors are defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce"),"\n",(0,r.kt)("a",{parentName:"p",href:"#annotations"},"JSON schema annotations"),"\nwithin your document schemas.\nThese annotations provide Flow with the specific reduction strategies\nto use at your various document locations."),(0,r.kt)("p",null,"If you're familiar with the ",(0,r.kt)("em",{parentName:"p"},"map")," and ",(0,r.kt)("em",{parentName:"p"},"reduce")," primitives present in\nPython, Javascript, and many other languages, this should feel familiar.\nWhen multiple documents map into a collection with a common key,\nFlow reduces them on your behalf by using your ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," annotations."),(0,r.kt)("p",null,"Here's an example that sums an integer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: integer\nreduce: { strategy: sum }\n\n# 1, 2, -1 => 2\n")),(0,r.kt)("p",null,"Or deeply merges a map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'type: object\nreduce: { strategy: merge }\n\n# {"a": "b"}, {"c": "d"} => {"a": "b", "c": "d"}\n')),(0,r.kt)("p",null,"Learn more in the\n",(0,r.kt)("a",{parentName:"p",href:"../../reference/reduction-strategies/"},"reduction strategies"),"\nreference documentation."),(0,r.kt)("h4",{id:"reductions-and-collection-keys"},"Reductions and collection keys"),(0,r.kt)("p",null,"Reduction annotations change the common patterns for how you think about collection keys."),(0,r.kt)("p",null,"Suppose you are building a reporting fact table over events of your business.\nToday you would commonly consider a unique event ID to be its natural key.\nYou would load all events into your warehouse and perform query-time aggregation.\nWhen that becomes too slow, you periodically refresh materialized views for fast-but-stale queries."),(0,r.kt)("p",null,"With Flow, you instead use a collection key of your ",(0,r.kt)("em",{parentName:"p"},"fact table dimensions"),",\nand use ",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," annotations to define your metric aggregations.\nA materialization of the collection then maintains a\ndatabase table which is keyed on your dimensions,\nso that queries are both fast ",(0,r.kt)("em",{parentName:"p"},"and")," up to date."),(0,r.kt)("h4",{id:"composition-with-conditionals"},"Composition with conditionals"),(0,r.kt)("p",null,"Like any other JSON Schema annotation,\n",(0,r.kt)("inlineCode",{parentName:"p"},"reduce")," annotations respond to schema conditionals.\nHere we compose ",(0,r.kt)("inlineCode",{parentName:"p"},"append")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lastWriteWins")," strategies to\nreduce an appended array which can also be cleared:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: array\noneOf:\n  # If the array is non-empty, reduce by appending its items.\n  - minItems: 1\n    reduce: { strategy: append }\n  # Otherwise, if the array is empty, reset the reduced array to be empty.\n  - maxItems: 0\n    reduce: { strategy: lastWriteWins }\n\n# [1, 2], [3, 4, 5] => [1, 2, 3, 4, 5]\n# [1, 2], [], [3, 4, 5] => [3, 4, 5]\n# [1, 2], [3, 4, 5], [] => []\n")),(0,r.kt)("p",null,"You can combine schema conditionals with annotations to build\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/reference/reduction-strategies/composing-with-conditionals"},"rich behaviors"),"."),(0,r.kt)("h2",{id:"continuous-schema-inference"},"Continuous schema inference"),(0,r.kt)("p",null,"Flow automatically infers a JSON schema for every captured collection. This schema is updated automatically as data is captured."),(0,r.kt)("p",null,"For some systems, like relational databases, Flow is able to determine a complete JSON schema for each collection up front, before even starting the capture. But many other systems are not able to provide detailed and accurate information about the data before it's captured. Often, this is because the source system data is unstructured or loosely structured. For these systems, the schema can only be known after the data is captured. Continuous schema inference is most useful in these scenarios."),(0,r.kt)("p",null,"For example, say you're capturing from MongoDB. MongoDB documents must all have an ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," field, but that is essentially the only requirement. You can't know what other fields may exist on MongoDB documents until you've read them. When you set up a capture from MongoDB using the Flow web app, the collection specifications will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"key: [ /_id ]\nwriteSchema:\n  type: object\n  properties:\n    _id: { type: string }\n  required: [ _id ]\nreadSchema:\n  allOf:\n    - $ref: flow://write-schema\n    - $ref: flow://inferred-schema\n")),(0,r.kt)("p",null,"Note that this spec uses separate read and write schemas. The ",(0,r.kt)("inlineCode",{parentName:"p"},"writeSchema")," is extremely permissive, and only requires an ",(0,r.kt)("inlineCode",{parentName:"p"},"_id")," property with a string value. The ",(0,r.kt)("inlineCode",{parentName:"p"},"readSchema")," references ",(0,r.kt)("inlineCode",{parentName:"p"},"flow://inferred-schema"),", which expands to the current inferred schema when the collection is published."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref: flow://write-schema")," expands to the current ",(0,r.kt)("inlineCode",{parentName:"p"},"writeSchema"),". Whenever you use ",(0,r.kt)("inlineCode",{parentName:"p"},"$ref: flow://inferred-schema"),", you should always include the ",(0,r.kt)("inlineCode",{parentName:"p"},"flow://write-schema")," as well, so that you don't need to repeat any fields that are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"writeSchema")," or wait for those fields to be observed by schema inference.")),(0,r.kt)("p",null,"When you first publish a collection using the inferred schema, ",(0,r.kt)("inlineCode",{parentName:"p"},"flow://inferred-schema")," expands to a special placeholder schema that rejects ",(0,r.kt)("em",{parentName:"p"},"all")," documents. This is to ensure that a non-placeholder inferred schema has been published before allowing any documents to be materialized. Once data is captured to the collection, the inferred schema immediately updates to strictly and minimally describe the captured."),(0,r.kt)("p",null,"Because the effective ",(0,r.kt)("inlineCode",{parentName:"p"},"readSchema")," is only ever updated when the collection is published, the best option is usually to use the inferred schema in conjunction with ",(0,r.kt)("a",{parentName:"p",href:"/concepts/captures/#autodiscover"},"autoDiscover"),"."),(0,r.kt)("h2",{id:"default-annotations"},(0,r.kt)("inlineCode",{parentName:"h2"},"default")," annotations"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," annotations to prevent null values from being materialized to your endpoint system."),(0,r.kt)("p",null,"When this annotation is absent for a non-required field, missing values in that field are materialized as ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),".\nWhen the annotation is present, missing values are materialized with the field's ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/coyotes:\n    schema:\n      type: object\n      required: [id]\n      properties:\n        id: {type: integer}\n        anvils_dropped: {type: integer}\n          reduce: {strategy: sum }\n          default: 0\n    key: [/id]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"default")," annotations are only used for materializations; they're ignored by captures and derivations.\nIf your collection has both a ",(0,r.kt)("a",{parentName:"p",href:"#write-and-read-schemas"},"write and read schema"),", make sure you add this annotation to the read schema."))}h.isMDXComponent=!0}}]);