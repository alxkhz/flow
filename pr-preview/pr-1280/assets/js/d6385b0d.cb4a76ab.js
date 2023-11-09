"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),r=a(7294),i=a(6010),o=a(2466),l=a(6550),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,p]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),k=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,i]),tabValues:i}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function b(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},5298:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(4866),o=a(5162);const l={sidebar_position:2},s="Create a real-time materialized view in PostgreSQL",p={unversionedId:"getting-started/tutorials/continuous-materialized-view",id:"getting-started/tutorials/continuous-materialized-view",title:"Create a real-time materialized view in PostgreSQL",description:"PostgreSQL supports materialized views: database objects that contain the result of a query, usually a focused subset of a large dataset.",source:"@site/docs/getting-started/tutorials/continuous-materialized-view.md",sourceDirName:"getting-started/tutorials",slug:"/getting-started/tutorials/continuous-materialized-view",permalink:"/pr-preview/pr-1280/getting-started/tutorials/continuous-materialized-view",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/tutorials/continuous-materialized-view.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create your first dataflow with Amazon S3 and Snowflake",permalink:"/pr-preview/pr-1280/getting-started/tutorials/dataflow-s3-snowflake"},next:{title:"Flow user guides",permalink:"/pr-preview/pr-1280/guides/"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Check out the source data",id:"check-out-the-source-data",level:2},{value:"Add a derivation to transform data",id:"add-a-derivation-to-transform-data",level:2},{value:"Create the continuous materialized view",id:"create-the-continuous-materialized-view",level:2},{value:"Explore the results",id:"explore-the-results",level:2},{value:"Resources",id:"resources",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-real-time-materialized-view-in-postgresql"},"Create a real-time materialized view in PostgreSQL"),(0,r.kt)("p",null,"PostgreSQL supports ",(0,r.kt)("em",{parentName:"p"},"materialized views"),": database objects that contain the result of a query, usually a focused subset of a large dataset."),(0,r.kt)("p",null,"In this tutorial, you'll use Flow and your Postgres instance to create something that's not possible in Postgres alone:\na materialized view that updates continuously based on a real-time data feed."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An Estuary Flow account. If you don't have one, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev"},"Flow web app")," to register for free.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A GitLab, GitHub, or BitBucket account. You'll use this to log into ",(0,r.kt)("a",{parentName:"p",href:"https://www.gitpod.io/"},"GitPod"),", the cloud development environment integrated with Flow."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Alternatively, you can complete this tutorial using a local development environment.\nIn that case, you'll need to ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1280/getting-started/installation#get-started-with-the-flow-cli"},"install flowctl locally"),".\nNote that the steps you'll need to take will be different. Refer to this ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1280/guides/flowctl/create-derivation#create-a-derivation-locally"},"guide")," for help."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Postgres database set up to ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1280/reference/Connectors/materialization-connectors/PostgreSQL#setup"},"allow connections from Flow"),".\nAmazon RDS, Amazon Aurora, Google Cloud SQL, Azure Database for PostgreSQL, and self-hosted databases are supported."))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Materialized views in Postgres give you a powerful way narrow down a huge dataset into a compact one that you can easily monitor.\nBut if your data is updating in real-time, traditional materialized views introduce latency. They're batch workflows \u2014 the query is run at a set interval."),(0,r.kt)("p",null,"To get around this, you'll need to perform a real-time transformation elsewhere.\nFlow ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1280/concepts/#derivations"},"derivations")," are a great way to do this."),(0,r.kt)("p",null,"For this example, you'll use Estuary's public data collection of recent changes to Wikipedia,\ncaptured from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.mediawiki.org/wiki/API:Recent_changes_stream"},"Wikimedia Foundation's event stream"),"."),(0,r.kt)("p",null,"The raw dataset is quite large.\nIt captures every change to the platform \u2014 about 30 per second \u2014  and includes various properties.\nWritten to a Postgres table, it quickly grows to an size that's very expensive to query."),(0,r.kt)("p",null,"First, you'll scope the raw data down to a small fact table with a derivation."),(0,r.kt)("p",null,"You'll then materialize both the raw and transformed datasets to your Postgres instance and compare performance."),(0,r.kt)("h2",{id:"check-out-the-source-data"},"Check out the source data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Got the the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/collections"},"collections page")," of the Flow web app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"demo/wikipedia/recentchange")," and click on its name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"Collection Details")," page, click the ",(0,r.kt)("strong",{parentName:"p"},"Spec")," tab."),(0,r.kt)("p",{parentName:"li"},"The collection schema has many fields. Because Wikipedia sees a lot of edits,\nthis would yield a large, unwieldy table in Postgres."),(0,r.kt)("admonition",{parentName:"li",title:"Tip",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To save on performance, you can also perform this tutorial using the smaller ",(0,r.kt)("inlineCode",{parentName:"p"},"demo/wikipedia/recentchange-sampled")," collection. Apart from the collection name, all other steps are the same.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Learn more about ",(0,r.kt)("a",{parentName:"em",href:"/pr-preview/pr-1280/concepts/collections"},"Flow collections")," and ",(0,r.kt)("a",{parentName:"em",href:"/pr-preview/pr-1280/concepts/schemas"},"schemas"),".")),(0,r.kt)("p",{parentName:"li"},"Now you'll create the derivation. A derivation is a new collection that's defined by a transformation.\nFirst, you'll define the collection's schema. Then, you'll write the transformation to shape the data to that schema."))),(0,r.kt)("h2",{id:"add-a-derivation-to-transform-data"},"Add a derivation to transform data"),(0,r.kt)("p",null,"You'll write your derivation using a cloud development environment integrated in the Flow web app."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/collections"},"collections page")," and click the ",(0,r.kt)("strong",{parentName:"p"},"New Transformation")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the source collection to the raw Wikipedia data. Search for and select ",(0,r.kt)("inlineCode",{parentName:"p"},"demo/wikipedia/recentchange"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the transformation language to SQL.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the derivation a name. From the dropdown, choose the name of your catalog prefix and append a unique name, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"yourprefix/wikipedia/user-fact-table"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Proceed to GitPod")," to create your development environment. Sign in with one of the available account types.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("strong",{parentName:"p"},"New Workspace")," screen, keep the ",(0,r.kt)("strong",{parentName:"p"},"Context URL")," option selected and click ",(0,r.kt)("strong",{parentName:"p"},"Continue.")),(0,r.kt)("p",{parentName:"li"},"A GitPod development environment opens.\nA stubbed-out derivation with a SQL transformation has already been created for you. Next, you'll locate and open the source files.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Each slash-delimited prefix of your derivation name has become a folder. Open the nested folders to locate a ",(0,r.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file."),(0,r.kt)("p",{parentName:"li"},"Following the example above, you'd open the folders called ",(0,r.kt)("inlineCode",{parentName:"p"},"yourprefix"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia"),", to find the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file. Its contents look like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  yourprefix/wikipedia/user-fact-table:\n    schema:\n      properties:\n        your_key:\n          type: string\n          required:\n            - your_key\n          type: object\n    key:\n      - /your_key\n    derive:\n      using:\n        sqlite:\n          migrations:\n            - user-fact-table.migration.0.sql\n      transforms:\n        - name: recentchange\n        source: demo/wikipedia/recentchange\n        shuffle: any\n        lambda: user-fact-table.lambda.recentchange.sql\n")),(0,r.kt)("p",{parentName:"li"},"Your first order of business is to replace the placeholder schema and collection key.\nAs we saw earlier, the source collection's schema and key caused every Wikipedia event to generate a new document."),(0,r.kt)("p",{parentName:"li"},"You'll fix that here.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," stanzas with the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"schema:\n   properties:\n     edits_this_day:\n       reduce:\n         strategy: sum\n       type: integer\n     date:\n       format: date\n       type: string\n     user:\n       type: string\n   reduce:\n     strategy: merge\n   required:\n     - user\n     - date\n     - edits_this_day\n   type: object\n key:\n   - /user\n   - /date\n")),(0,r.kt)("p",{parentName:"li"},"The new schema contains ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1280/concepts/schemas#reduce-annotations"},"reduction annotations"),".\nThese sum the changes made by a given user on a given date.\nThe collection is now keyed on each unique combination of user ID and date.\nIt has just three fields:\nthe user, date, and the number of changes made by that user on that date."),(0,r.kt)("p",{parentName:"li"},"Next, you'll add the transformation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"transforms")," stanza, give the transformation a new name to differentiate it from the name of the source collection. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"transforms:\n  - name: dailychangesbyuser\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the shuffle key. Since we're working with a large dataset, this ensures that each user is processed by the same task ",(0,r.kt)("strong",{parentName:"p"},"shard"),".\nThis way, you'll prevent Flow from creating multiple counts for a given user and date combination."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("em",{parentName:"p"},"Learn more about ",(0,r.kt)("a",{parentName:"em",href:"/pr-preview/pr-1280/concepts/derivations#shuffles"},"shuffles"),".")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shuffle: { key: [ /user ] }\n")),(0,r.kt)("p",{parentName:"li"},"   Now, the transform needs is the SQL lambda function \u2014 the function that will shape the source data to fit the new schema.\nFlow has created another file to contain it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the file called ",(0,r.kt)("inlineCode",{parentName:"p"},"user-fact-table.lambda.recentchange.sql"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace its contents with"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select $user, 1 as edits_this_day, date($meta$dt) as date where $user is not null;\n")),(0,r.kt)("p",{parentName:"li"},"This creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"edits_this_day")," field we referenced earlier, and starts the counter at 1.\nIt converts the timestamp into a simplified date format.\nFinally, it filters out ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," users (which occasionally occur in the Wikipedia data stream and would violate your schema).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All pieces of the derivation are in place. Double check your files against these samples:"))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"flow.yaml",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"file=./samples/continuous-materialized-view/flow.yaml",file:"./samples/continuous-materialized-view/flow.yaml"},"---\ncollections:\n  yourprefix/wikipedia/user-fact-table:\n    schema:\n      properties:\n        edits_this_day:\n          reduce:\n            strategy: sum\n          type: integer\n        date:\n          format: date\n          type: string\n        user:\n          type: string\n      reduce:\n        strategy: merge\n      required:\n        - user\n        - date\n        - edits_this_day\n      type: object\n    key:\n      - /user\n      - /date\n    derive:\n      using:\n        sqlite:\n          migrations:\n            - user-fact-table.migration.0.sql\n      transforms:\n        - name: dailychangesbyuser\n          source: demo/wikipedia/recentchange\n          shuffle: { key: [ /user ] }\n          lambda: user-fact-table.lambda.recentchange.sql\n"))),(0,r.kt)(o.Z,{value:"user-fact-table.lambda.recentchange.sql",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"file=./samples/continuous-materialized-view/user-fact-table.lambda.recentchange.sql",file:"./samples/continuous-materialized-view/user-fact-table.lambda.recentchange.sql"}," select $user, 1 as edits_this_day, date($meta$dt) as date where $user is not null;\n")))),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the derivation locally and preview its output:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"flowctl preview --source flow.yaml\n")),(0,r.kt)("p",{parentName:"li"},"In your terminal, you'll see JSON documents that look like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"date":"2023-07-18","edits_this_day":3,"user":"WMrapids"}\n')),(0,r.kt)("p",{parentName:"li"},"This looks right: it includes the correctly formatted date, the number of edits, and the username.\nYou're ready to publish.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the local derivation with ",(0,r.kt)("strong",{parentName:"p"},"Ctrl-C"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Publish the derivation:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"flowctl catalog publish --source flow.yaml\n")))),(0,r.kt)("p",null,"The message ",(0,r.kt)("inlineCode",{parentName:"p"},"Publish successful")," means you're all set.\nYour transformation will continue in real time based on the raw dataset, which is also updating in real time.\nYou're free to close your GitPod."),(0,r.kt)("h2",{id:"create-the-continuous-materialized-view"},"Create the continuous materialized view"),(0,r.kt)("p",null,"Now, you'll materialize your new fact table to Postgres. You'll also materialize the source dataset to compare performance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/materializations"},"Destinations page")," in the Flow web app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New Materialization"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the ",(0,r.kt)("strong",{parentName:"p"},"PostgreSQL")," and click ",(0,r.kt)("strong",{parentName:"p"},"Materialization"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a unique name for the materialization, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"yourprefix/yourname-materialized-views-demo"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the ",(0,r.kt)("strong",{parentName:"p"},"Basic Config")," with:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A username and password for the Postgres instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your database host and port.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The database name (if in doubt, use the default, ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres"),")."))),(0,r.kt)("p",{parentName:"li"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/reference/Connectors/materialization-connectors/PostgreSQL/"},"connector documentation")," if you need help finding these properties.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Source Collections")," browser, search for and add the collection ",(0,r.kt)("inlineCode",{parentName:"p"},"demo/wikipedia/recentchange")," and name the corresponding Postgres Table ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia_raw"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Also search for and add the collection you just derived, (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"yourprefix/wikipedia/user-fact-table"),").\nName the corresponding Postgres table ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia_data_by_user"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")," to test the connection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save and Publish"),"."))),(0,r.kt)("h2",{id:"explore-the-results"},"Explore the results"),(0,r.kt)("p",null,"In your Postgres client of choice, note the size of each table and how they quickly change.\nTry running some basic queries against both and compare performance.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://estuary.dev/how-to-create-a-real-time-materialized-view-in-postgresql/#step-3-compare-performance/"},"blog post")," for ideas."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Once you're satisfied, and to prevent continual resource use, disable or delete your materialization from the\n",(0,r.kt)("a",{parentName:"strong",href:"https://dashboard.estuary.dev/materializations"},"Destinations page"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1280/concepts/derivations"},"About derivations")))}h.isMDXComponent=!0}}]);