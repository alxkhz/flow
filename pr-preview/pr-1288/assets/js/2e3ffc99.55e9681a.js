"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[853],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3860:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={},r="Schema evolution",l={unversionedId:"guides/schema-evolution",id:"guides/schema-evolution",title:"Schema evolution",description:"When collection specifications and schemas change, you must make corresponding changes in other parts of your Data Flow to avoid errors. In this guide, you'll learn how to respond to different types of collection changes.",source:"@site/docs/guides/schema-evolution.md",sourceDirName:"guides",slug:"/guides/schema-evolution",permalink:"/pr-preview/pr-1288/guides/schema-evolution",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/schema-evolution.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Customize materialized fields",permalink:"/pr-preview/pr-1288/guides/customize-materialization-fields"},next:{title:"Concepts",permalink:"/pr-preview/pr-1288/concepts/"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Schema evolution scenarios",id:"schema-evolution-scenarios",level:2},{value:"Re-creating a collection",id:"re-creating-a-collection",level:3},{value:"A new field is added",id:"a-new-field-is-added",level:3},{value:"A field&#39;s data type has changed",id:"a-fields-data-type-has-changed",level:3},{value:"A field was removed",id:"a-field-was-removed",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schema-evolution"},"Schema evolution"),(0,i.kt)("p",null,"When collection specifications and schemas change, you must make corresponding changes in other parts of your Data Flow to avoid errors. In this guide, you'll learn how to respond to different types of collection changes."),(0,i.kt)("p",null,"Manual methods (using flowctl) as well as features available in the Flow web app are covered here.\nFor an in-depth overview of the automatic schema evolution feature in the web app and how it works, see ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1288/concepts/advanced/evolutions"},"this article"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Flow ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1288/concepts/collections"},"collections")," serve not only as your real-time data storage, but also as a contract between tasks that produce and consume their data. ",(0,i.kt)("strong",{parentName:"p"},"Captures")," are producers, ",(0,i.kt)("strong",{parentName:"p"},"materializations")," are consumers, and ",(0,i.kt)("strong",{parentName:"p"},"derivations")," can act as either."),(0,i.kt)("p",null,"This contract helps prevent data loss and error in your Data Flows, and is defined in terms of the collection specification, or spec, which includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The JSON schema"),(0,i.kt)("li",{parentName:"ul"},"The collection ",(0,i.kt)("inlineCode",{parentName:"li"},"key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pr-preview/pr-1288/concepts/advanced/projections"},"Projections"),", if any")),(0,i.kt)("p",null,"There are many reasons a collection spec might change. Often, it's due to a change in the source data. Regardless, you'll need to make changes to downstream tasks \u2014 most often, materializations \u2014\xa0to avoid errors."),(0,i.kt)("h2",{id:"schema-evolution-scenarios"},"Schema evolution scenarios"),(0,i.kt)("p",null,"This guide is broken down into sections for different common scenarios, depending on which properties of the collection spec have changed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#re-creating-a-collection"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"key")," pointers have changed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#re-creating-a-collection"},"The logical partitioning configuration has changed")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"schema")," (or ",(0,i.kt)("inlineCode",{parentName:"li"},"readSchema")," if defined separately) has changed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#a-new-field-is-added"},"A new field is added")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#a-fields-data-type-has-changed"},"A field's data type has changed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#a-field-was-removed"},"A field was removed"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are a variety of reasons why these properties may change, and also different mechanisms for detecting changes in source data. In general, it doesn't matter why the collection spec has changed, only ",(0,i.kt)("em",{parentName:"p"},"what")," has changed. However, ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1288/concepts/captures#automatically-update-captures"},"AutoDiscovers")," are able to handle some of these scenarios automatically. Where applicable, AutoDiscover behavior will be called out under each section.")),(0,i.kt)("h3",{id:"re-creating-a-collection"},"Re-creating a collection"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Scenario: the ",(0,i.kt)("inlineCode",{parentName:"em"},"key")," pointer or logical partitioning configurations have changed.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," of a Flow collection cannot be changed after the collection is created. The same is true of the logical partitioning, which also cannot be changed after the collection is created."),(0,i.kt)("p",null,"If you need to change either of those parts of a collection spec, you'll need to create a new collection and update the bindings of any captures or materializations that reference the old collection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Web app workflow")),(0,i.kt)("p",null,"If you're working in the Flow web app, you'll see an error message and an option to re-create the collection as shown in the example below."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4244).Z,width:"2318",height:"1215"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Apply")," to re-create the collection and update any tasks that reference the old collection with the new name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"flowctl workflow:")),(0,i.kt)("p",null,"If you're working with flowctl, you'll need to re-create the collection manually in your ",(0,i.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file. You must also update any captures or materializations that reference it. For example, say you have a data flow defined by the following specs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  acmeCo/inventory/source-postgres:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-postgres:v1\n        config: encrypted-pg-config.sops.yaml\n    bindings:\n      - resource:\n          namespace: public\n          stream: anvils\n          mode: Normal\n        target: acmeCo/inventory/anvils\n\ncollections:\n  acmeCo/inventory/anvils:\n    key: [/sku]\n    schema:\n      type: object\n      properties:\n        sku: { type: string }\n        warehouse_id: { type: string }\n        quantity: { type: integer }\n      required: [sku, warehouse_id, quantity]\n\nmaterializations:\n  acmeCo/data-warehouse/materialize-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-snowflake:v1\n        config: encrypted-snowflake-config.sops.yaml\n    bindings:\n      - source: acmeCo/inventory/anvils\n        resource:\n          table: anvils\n          schema: inventory\n")),(0,i.kt)("p",null,"To change the collection key, you would update the YAML like so. Note the capture ",(0,i.kt)("inlineCode",{parentName:"p"},"target"),", collection name, and materialization ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  acmeCo/inventory/source-postgres:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-postgres:v1\n        config: encrypted-pg-config.sops.yaml\n    bindings:\n      - resource:\n          namespace: public\n          stream: anvils\n          mode: Normal\n        target: acmeCo/inventory/anvils_v2\n\ncollections:\n  acmeCo/inventory/anvils_v2:\n    key: [/sku]\n    schema:\n      type: object\n      properties:\n        sku: { type: string }\n        warehouse_id: { type: string }\n        quantity: { type: integer }\n      required: [sku, warehouse_id, quantity]\n\nmaterializations:\n  acmeCo/data-warehouse/materialize-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-snowflake:v1\n        config: encrypted-snowflake-config.sops.yaml\n    bindings:\n      - source: acmeCo/inventory/anvils_v2\n        resource:\n          table: anvils_v2\n          schema: inventory\n")),(0,i.kt)("p",null,"The existing ",(0,i.kt)("inlineCode",{parentName:"p"},"acmeCo/inventory/anvils")," collection will not be modified and will remain in place, but won't update because no captures are writing to it."),(0,i.kt)("p",null,"Note that the collection is now being materialized into a new Snowflake table, ",(0,i.kt)("inlineCode",{parentName:"p"},"anvils_v2"),". This is because the primary key of the ",(0,i.kt)("inlineCode",{parentName:"p"},"anvils")," table doesn't match the new collection key. New data going forward will be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"anvils_v2")," in the data warehouse."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Currently, changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," collection in the capture spec will ",(0,i.kt)("em",{parentName:"p"},"not")," cause the capture to perform another backfill. This means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"anvils_v2")," table will get all of the ",(0,i.kt)("em",{parentName:"p"},"new")," data going forward, but will not contain the existing data from ",(0,i.kt)("inlineCode",{parentName:"p"},"anvils"),"."),(0,i.kt)("p",{parentName:"admonition"},"We will soon release updates that make it much easier to keep your destination tables fully in sync without needing to change the names. In the meantime, feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://join.slack.com/t/gazette-dev/shared_invite/enQtNjQxMzgyNTEzNzk1LTU0ZjZlZmY5ODdkOTEzZDQzZWU5OTk3ZTgyNjY1ZDE1M2U1ZTViMWQxMThiMjU1N2MwOTlhMmVjYjEzMjEwMGQ"},"reach out on Slack")," for help.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Auto-Discovers:")),(0,i.kt)("p",null,"If you enabled the option to ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1288/concepts/captures#automatically-update-captures"},(0,i.kt)("strong",{parentName:"a"},"Automatically keep schemas up to date")," (",(0,i.kt)("inlineCode",{parentName:"a"},"autoDiscover"),")")," and selected ",(0,i.kt)("strong",{parentName:"p"},"Breaking change re-versions collections")," (",(0,i.kt)("inlineCode",{parentName:"p"},"evolveIncompatibleCollections"),") for the capture, this evolution would be performed automatically."),(0,i.kt)("h3",{id:"a-new-field-is-added"},"A new field is added"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Scenario: this is one way in which the schema can change.")),(0,i.kt)("p",null,"When a new field appears in the collection schema, it ",(0,i.kt)("em",{parentName:"p"},"may")," automatically be added to any materializations that use ",(0,i.kt)("inlineCode",{parentName:"p"},"recommended")," fields. Recommended fields are enabled by default in each binding. See ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1288/concepts/materialization#projected-fields"},"the materialization docs")," for more info about how to enable or disable ",(0,i.kt)("inlineCode",{parentName:"p"},"recommended")," fields."),(0,i.kt)("p",null,'When recommended fields are enabled, new fields are added automatically if they meet the criteria for the particular materialization connector. For example, scalar fields (strings, numbers, and booleans) are considered "recommended" fields when materializing to database tables.'),(0,i.kt)("p",null,"If your materialization binding is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"recommended: false"),", or if the new field is not recommended, you can manually add it to the materialization."),(0,i.kt)("p",null,"To manually add a field:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"In the Flow web app,")," ",(0,i.kt)("a",{parentName:"li",href:"/pr-preview/pr-1288/guides/edit-data-flows#edit-a-materialization"},"edit the materialization"),", find the affected binding, and click ",(0,i.kt)("strong",{parentName:"li"},"Show Fields"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Using flowctl,")," add the field to ",(0,i.kt)("inlineCode",{parentName:"li"},"fields.include")," in the materialization specification as shown ",(0,i.kt)("a",{parentName:"li",href:"/pr-preview/pr-1288/concepts/materialization#projected-fields"},"here"),".")),(0,i.kt)("h3",{id:"a-fields-data-type-has-changed"},"A field's data type has changed"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Scenario: this is one way in which the schema can change.")),(0,i.kt)("p",null,"When a field's data type has changed, the effect on your materialization depends on the specific connector you're using."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Note that these restrictions only apply to fields that are actively being materialized. If a field is ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1288/concepts/materialization#projected-fields"},"excluded from your materialization"),", either explicitly or because it's not recommended, then the data types may change in any way."),(0,i.kt)("p",{parentName:"admonition"},"Regardless of whether the field is materialized or not, it must still pass schema validation tests. Therefore, you must still make sure existing data remains valid against the new schema. For example, if you changed ",(0,i.kt)("inlineCode",{parentName:"p"},"excluded_field: { type: string }")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"type: integer")," while there was existing data with string values, your materialization would fail due to a schema validation error.")),(0,i.kt)("p",null,"Database and data warehouse materializations tend to be somewhat restrictive about changing column types. They typically only allow dropping ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraints. This means that you can safely change a schema to make a required field optional, or to add ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as a possible type, and the materialization will continue to work normally.  Most other types of changes will require materializing into a new table."),(0,i.kt)("p",null,"The best way to find out whether a change is acceptable to a given connector is to run test or attempt to re-publish. Failed attempts to publish won't affect any tasks that are already running."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Web app workflow")),(0,i.kt)("p",null,"If you're working in the Flow web app, and attempt to publish a change that's unacceptable to the connector, you'll see an error message and an option to materialize to a new table, or, in rare cases, to re-create the collection.."),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Apply")," to to accept this solution and continue to publish."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"flowctl workflow")),(0,i.kt)("p",null,"If you test or attempt to publish a change that's unacceptable to the connector, you'll see an error message pointing to the field that's changed. In most cases, you can work around the issue by manually updating the materialization to materialize into a new table."),(0,i.kt)("p",null,"For example, say you have a data flow defined by the following specs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/inventory/anvils:\n    key: [/sku]\n    schema:\n      type: object\n      properties:\n        sku: { type: string }\n        quantity: { type: integer }\n        description: { type: string }\n      required: [sku, quantity]\n\nmaterializations:\n  acmeCo/data-warehouse/materialize-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-snowflake:v1\n        config: encrypted-snowflake-config.sops.yaml\n    bindings:\n      - source: acmeCo/inventory/anvils\n        resource:\n          table: anvils\n          schema: inventory\n")),(0,i.kt)("p",null,"Let's say the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," was broadened to allow ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," values in addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". You'd update your specs as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n  acmeCo/inventory/anvils:\n    key: [/sku]\n    schema:\n      type: object\n      properties:\n        sku: { type: string }\n        quantity: { type: integer }\n        description: { type: [string, object] }\n      required: [sku, quantity]\n\nmaterializations:\n  acmeCo/data-warehouse/materialize-snowflake:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-snowflake:v1\n        config: encrypted-snowflake-config.sops.yaml\n    bindings:\n      - source: acmeCo/inventory/anvils\n        resource:\n          table: anvils_v2\n          schema: inventory\n")),(0,i.kt)("p",null,"Note that the collection name is the same. Only the materialization ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," is updated to write to a new table, which will backfill from the existing collection data."),(0,i.kt)("p",null,"This works because the type is broadened, so existing values will still validate against the new schema. If this were not the case, then you'd likely need to ",(0,i.kt)("a",{parentName:"p",href:"#re-creating-a-collection"},"re-create the whole collection"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Auto-Discovers:")),(0,i.kt)("p",null,"If you enabled the option to ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-1288/concepts/captures#automatically-update-captures"},(0,i.kt)("strong",{parentName:"a"},"Automatically keep schemas up to date")," (",(0,i.kt)("inlineCode",{parentName:"a"},"autoDiscover"),")")," and selected ",(0,i.kt)("strong",{parentName:"p"},"Breaking change re-versions collections")," (",(0,i.kt)("inlineCode",{parentName:"p"},"evolveIncompatibleCollections"),") for the capture, this evolution would be performed automatically."),(0,i.kt)("h3",{id:"a-field-was-removed"},"A field was removed"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Scenario: this is one way in which the schema can change.")),(0,i.kt)("p",null,"Removing fields is generally allowed by all connectors, and does not require new tables or collections. Note that for database materializations, the existing column will ",(0,i.kt)("em",{parentName:"p"},"not")," be dropped, and will just be ignored by the materialization going forward. A ",(0,i.kt)("inlineCode",{parentName:"p"},"NOT NULL")," constraint would be removed from that column, but it will otherwise be left in place."))}m.isMDXComponent=!0},4244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/evolution-re-create-ui-d8ae2ab634980751f8c87a0483f96d39.png"}}]);