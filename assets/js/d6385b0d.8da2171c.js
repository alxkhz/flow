"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5298:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Create a real-time materialized view in PostgreSQL",l={unversionedId:"getting-started/tutorials/continuous-materialized-view",id:"getting-started/tutorials/continuous-materialized-view",title:"Create a real-time materialized view in PostgreSQL",description:"PostgreSQL supports materialized views: database objects that contain the result of a query, usually a focused subset of a large dataset.",source:"@site/docs/getting-started/tutorials/continuous-materialized-view.md",sourceDirName:"getting-started/tutorials",slug:"/getting-started/tutorials/continuous-materialized-view",permalink:"/getting-started/tutorials/continuous-materialized-view",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/tutorials/continuous-materialized-view.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create your first dataflow with Amazon S3 and Snowflake",permalink:"/getting-started/tutorials/dataflow-s3-snowflake"},next:{title:"Flow user guides",permalink:"/guides/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Add a derivation to transform data.",id:"add-a-derivation-to-transform-data",level:2},{value:"Create the continuous materialized view",id:"create-the-continuous-materialized-view",level:2},{value:"Explore the results",id:"explore-the-results",level:2},{value:"Resources",id:"resources",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-real-time-materialized-view-in-postgresql"},"Create a real-time materialized view in PostgreSQL"),(0,r.kt)("p",null,"PostgreSQL supports ",(0,r.kt)("em",{parentName:"p"},"materialized views"),": database objects that contain the result of a query, usually a focused subset of a large dataset."),(0,r.kt)("p",null,"In this tutorial, you'll use Flow and your Postgres instance to create something that's not possible in Postgres alone:\na materialized view that updates continuously based on a real-time data feed."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An Estuary Flow trial account (or a full account). If you don't have one, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev"},"Flow web app")," to register for your free trial.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/installation#get-started-with-the-flow-cli"},"flowctl CLI installed")," (for the optional section).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Postgres database for testing set up to ",(0,r.kt)("a",{parentName:"p",href:"/reference/Connectors/materialization-connectors/PostgreSQL#setup"},"allow connections from Flow"),".\nAmazon RDS, Amazon Aurora, Google Cloud SQL, Azure Database for PostgreSQL, and self-hosted databases are supported."))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Materialized views in Postgres give you a powerful way narrow down a huge dataset into a compact one that you can easily monitor.\nBut if your data is updating in real-time, traditional materialized views introduce latency. They're batch workflows \u2014 the query is run at a set interval."),(0,r.kt)("p",null,"To get around this, you'll need to perform a real-time transformation elsewhere.\nFlow ",(0,r.kt)("a",{parentName:"p",href:"/concepts/#derivations"},"derivations")," are a great way to do this."),(0,r.kt)("p",null,"For this example, you'll use Estuary's public data collection of recent changes to Wikipedia,\ncaptured from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.mediawiki.org/wiki/API:Recent_changes_stream"},"Wikimedia Foundation's event stream"),"."),(0,r.kt)("p",null,"The raw dataset is quite large.\nIt captures every change to the platform \u2014 about 30 per second \u2014  and includes various properties.\nWritten to a Postgres table, it quickly grows to an size that's very expensive to query."),(0,r.kt)("p",null,"First, you'll scope the raw data down to a small fact table with a derivation."),(0,r.kt)("p",null,"You'll then materialize both the raw and transformed datasets to your Postgres instance and compare performance."),(0,r.kt)("h2",{id:"add-a-derivation-to-transform-data"},"Add a derivation to transform data."),(0,r.kt)("p",null,"Derivations are currently available in the flowctl CLI. If you'd prefer to only work in the web app today,\nyou can skip to the next section. Estuary provides a pre-computed copy of the derivation that you can use to compare performance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/admin/api"},"CLI-API tab")," in the Flow web app, copy the access token.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authorize Flow in your local development environment:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"flowctl auth token --token <your-token-here>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, pull the raw wikipedia collection."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"flowctl catalog pull-specs --name estuary/public/wikipedia/recentchange\n")),(0,r.kt)("p",{parentName:"li"},"Source files are written to your current working directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Estuary > Public > Wikipedia and examine the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"flow.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"recentchange.schema.yaml"),"."),(0,r.kt)("p",{parentName:"li"},"The collection is keyed on its metadata, so every new change event is seen as unique. Its schema has many fields.\nThis would yield a large, unwieldy table in Postgres."),(0,r.kt)("p",{parentName:"li"},"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/concepts/collections"},"Flow collections")," and ",(0,r.kt)("a",{parentName:"p",href:"/concepts/schemas"},"schemas"),"."),(0,r.kt)("p",{parentName:"li"},"Next, you'll add the derivation. Technically, a derivation is a new collection that contains a transformation within it.\nFirst, you'll define the collection. Then, you'll flesh out the transformation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"fact-table.flow.yaml")," and add a new collection called ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-prefix>/wikipedia/user-fact-table"),"."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Your prefix is likely your organization name. You can find it in the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/admin/accessGrants"},"web app's admin tab"),".\nYou must have write or admin access to create a collection in the prefix."))),(0,r.kt)("p",null,"  Copy the sample below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"file=./samples/continuous-materialized-view/fact-table.flow.yaml",file:"./samples/continuous-materialized-view/fact-table.flow.yaml"},"---\ncollections:\n  yourprefix/wikipedia/user-fact-table:\n    schema:\n      properties:\n        count:\n          reduce:\n            strategy: sum\n          type:\n            - integer\n        last_updated:\n          format: date\n          type: string\n        userid:\n          type:\n            - integer\n      reduce:\n        strategy: merge\n      required:\n        - last_updated\n        - userid\n      type: object\n    key:\n      - /userid\n      - /last_updated\n    derivation:\n      register:\n        schema:\n          allOf:\n            - true\n        initial: ~\n      transform:\n        new_fact_table:\n          source:\n            name: estuary/public/wikipedia/recentchange\n          publish:\n            lambda: typescript\n      typescript:\n        module: user-fact-table.ts\n")),(0,r.kt)("p",null,"  The new collection's schema contains ",(0,r.kt)("a",{parentName:"p",href:"/concepts/schemas#reduce-annotations"},"reduction annotations"),".\nThese merge the data based on the user ID and the date they were last updated."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a TypeScript file for the derivation's transformation function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"flowctl typescript generate --source flow.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"user-fact-table.ts"),". It contains a stubbed-out transformation.\nYou'll populate it with a function that counts the number of changes associated with each user on a given date\nand converts the timestamp in the source data to a familiar date format.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste from the below sample (beginning at line 4):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"file=./samples/continuous-materialized-view/user-fact-table.ts",file:"./samples/continuous-materialized-view/user-fact-table.ts"},"import { IDerivation, Document, Register, NewFactTableSource } from 'flow/yourprefix/wikipedia/user-fact-table';\n\n// Implementation for derivation estuary/public/wikipedia/flow.yaml#/collections/yourprefix~1wikipedia~1user-fact-table/derivation.\nexport class Derivation implements IDerivation {\n    newFactTablePublish(\n        source: NewFactTableSource,\n        _register: Register,\n        _previous: Register,\n    ): Document[] {\n        let user_id = 0;\n        if (typeof source.log_params == \"object\" && !Array.isArray(source.log_params) && source.log_params.userid != undefined) {\n            user_id = source.log_params.userid;\n        }\n\n        const [yyyy, mm, dd] = source.meta.dt.split('-');\n        const dd2 = dd.substring(0, 2);\n        let date = yyyy + '-' + mm + '-' + dd2;\n\n        return [\n            {\n                userid: user_id,\n                count: 1,\n                last_updated: date,\n            },\n        ]\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Publish the derivation:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"flowctl catalog publish --source path/to/your/fact-table.flow.yaml\n")))),(0,r.kt)("p",null,"Your transformation will continue in real time based on the raw dataset, which is also updating in real time."),(0,r.kt)("h2",{id:"create-the-continuous-materialized-view"},"Create the continuous materialized view"),(0,r.kt)("p",null,"Now, you'll materialize your new fact table to Postgres. You'll also materialize the source dataset to compare performance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/materializations"},"Materializations page")," in the Flow web app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"New Materialization"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Connector, choose ",(0,r.kt)("strong",{parentName:"p"},"PostgreSQL"),". Add a unique name for the materialization, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"yourprefix/yourname-materialized-views-demo"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the ",(0,r.kt)("strong",{parentName:"p"},"Basic Config")," with:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A username and password for the Postgres instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your database host and port.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The database name (if in doubt, use the default, ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres"),")."))),(0,r.kt)("p",{parentName:"li"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/reference/Connectors/materialization-connectors/PostgreSQL/"},"connector documentation")," if you need help finding these properties.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Collection Selector"),", search for and add the collection ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary/public/wikipedia/recentchange")," and name the corresponding Postgres Table ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia_raw"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Also search for and add the collection you just derived, (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"yourprefix/wikipedia/user-fact-table"),").\nIf you skipped the derivation, use the provided version, ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary/public/wikipedia/user-fact-table"),".\nName the corresponding Postgres table ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia_data_by_user"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next")," to test the connection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save and Publish"),"."))),(0,r.kt)("h2",{id:"explore-the-results"},"Explore the results"),(0,r.kt)("p",null,"In your Postgres client of choice, note the size of each table and how they quickly change.\nTry running some basic queries against both and compare performance.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://www.estuary.dev/how-to-create-a-real-time-materialized-view-in-postgresql/"},"blog post")," for ideas."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Once you're satisfied, and to prevent continual resource use, disable or delete your materialization from the\n",(0,r.kt)("a",{parentName:"strong",href:"https://dashboard.estuary.dev/materializations"},"Materializations page"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/guides/flowctl/create-derivation"},"Detailed guide to create derivations.")))}c.isMDXComponent=!0}}]);