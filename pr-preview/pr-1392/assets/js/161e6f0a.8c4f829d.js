"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3765],{46846:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var n=t(74848),s=t(28453);const d={},i=void 0,l={id:"reference/Connectors/materialization-connectors/SQLite",title:"SQLite",description:"This connector materializes Flow collections into an ephemeral SQLite database.",source:"@site/docs/reference/Connectors/materialization-connectors/SQLite.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/SQLite",permalink:"/pr-preview/pr-1392/reference/Connectors/materialization-connectors/SQLite",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/SQLite.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rockset",permalink:"/pr-preview/pr-1392/reference/Connectors/materialization-connectors/Rockset"},next:{title:"Snowflake",permalink:"/pr-preview/pr-1392/reference/Connectors/materialization-connectors/Snowflake"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Reserved words",id:"reserved-words",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"This connector materializes Flow collections into an ephemeral SQLite database.\nNote that this connector is for demo and sandbox purposes, and if the connector is restarted for any\nreason, the data materialized up to that point will be lost in the\nmaterialization (your collection will stay in-tact and your other\nmaterializations will have the data as normal)."}),"\n",(0,n.jsxs)(r.p,{children:["It is available for use in the Flow web application. For local development or\nopen-source workflows,\n",(0,n.jsx)(r.a,{href:"https://ghcr.io/estuary/materialize-sqlite:dev",children:(0,n.jsx)(r.code,{children:"ghcr.io/estuary/materialize-sqlite:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,n.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(r.p,{children:"To use this connector, you'll need:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(r.p,{children:"This materialization requires no configuration, and all you need to do is choose\na collection to materialize."}),"\n",(0,n.jsx)(r.h3,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h4,{id:"bindings",children:"Bindings"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Property"}),(0,n.jsx)(r.th,{children:"Title"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Required/Default"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"/table"})})}),(0,n.jsx)(r.td,{children:"Table"}),(0,n.jsx)(r.td,{children:"Table name to materialize to. It will be created by the connector, unless the connector has previously created it."}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"Required"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"sample",children:"Sample"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-sqlite:dev\n        config: {}\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,n.jsx)(r.p,{children:"This connector does not support delta updates at the moment."}),"\n",(0,n.jsx)(r.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,n.jsxs)(r.p,{children:['SQLite has a list of reserved words that must be quoted in order to be used as an identifier.\nFlow considers all the reserved words that are marked as "reserved" in any of\nthe columns in the official ',(0,n.jsx)(r.a,{href:"https://www.sqlite.org/lang_keywords.html",children:"SQlite documentation"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"These reserve words are listed in the table below. Flow automatically quotes fields that are in this list."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Reserved words"}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"abort"}),(0,n.jsx)(r.td,{children:"intersect"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"action"}),(0,n.jsx)(r.td,{children:"into"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"add"}),(0,n.jsx)(r.td,{children:"is"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"after"}),(0,n.jsx)(r.td,{children:"isnull"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"all"}),(0,n.jsx)(r.td,{children:"join"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"alter"}),(0,n.jsx)(r.td,{children:"key"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"always"}),(0,n.jsx)(r.td,{children:"last"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"analyze"}),(0,n.jsx)(r.td,{children:"left"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"and"}),(0,n.jsx)(r.td,{children:"like"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"as"}),(0,n.jsx)(r.td,{children:"limit"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"asc"}),(0,n.jsx)(r.td,{children:"match"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"attach"}),(0,n.jsx)(r.td,{children:"materialized"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"autoincrement"}),(0,n.jsx)(r.td,{children:"natural"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"before"}),(0,n.jsx)(r.td,{children:"no"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"begin"}),(0,n.jsx)(r.td,{children:"not"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"between"}),(0,n.jsx)(r.td,{children:"nothing"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"by"}),(0,n.jsx)(r.td,{children:"notnull"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cascade"}),(0,n.jsx)(r.td,{children:"null"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"case"}),(0,n.jsx)(r.td,{children:"nulls"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cast"}),(0,n.jsx)(r.td,{children:"of"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"check"}),(0,n.jsx)(r.td,{children:"offset"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"collate"}),(0,n.jsx)(r.td,{children:"on"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"column"}),(0,n.jsx)(r.td,{children:"or"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"commit"}),(0,n.jsx)(r.td,{children:"order"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"conflict"}),(0,n.jsx)(r.td,{children:"others"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"constraint"}),(0,n.jsx)(r.td,{children:"outer"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"create"}),(0,n.jsx)(r.td,{children:"over"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cross"}),(0,n.jsx)(r.td,{children:"partition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"current"}),(0,n.jsx)(r.td,{children:"plan"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"current_date"}),(0,n.jsx)(r.td,{children:"pragma"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"current_time"}),(0,n.jsx)(r.td,{children:"preceding"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"current_timestamp"}),(0,n.jsx)(r.td,{children:"primary"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"database"}),(0,n.jsx)(r.td,{children:"query"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"default"}),(0,n.jsx)(r.td,{children:"raise"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"deferrable"}),(0,n.jsx)(r.td,{children:"range"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"deferred"}),(0,n.jsx)(r.td,{children:"recursive"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"delete"}),(0,n.jsx)(r.td,{children:"references"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"desc"}),(0,n.jsx)(r.td,{children:"regexp"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"detach"}),(0,n.jsx)(r.td,{children:"reindex"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"distinct"}),(0,n.jsx)(r.td,{children:"release"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"do"}),(0,n.jsx)(r.td,{children:"rename"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"drop"}),(0,n.jsx)(r.td,{children:"replace"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"each"}),(0,n.jsx)(r.td,{children:"restrict"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"else"}),(0,n.jsx)(r.td,{children:"returning"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end"}),(0,n.jsx)(r.td,{children:"right"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"escape"}),(0,n.jsx)(r.td,{children:"rollback"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"except"}),(0,n.jsx)(r.td,{children:"row"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exclude"}),(0,n.jsx)(r.td,{children:"rows"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exclusive"}),(0,n.jsx)(r.td,{children:"savepoint"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"exists"}),(0,n.jsx)(r.td,{children:"select"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"explain"}),(0,n.jsx)(r.td,{children:"set"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fail"}),(0,n.jsx)(r.td,{children:"table"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filter"}),(0,n.jsx)(r.td,{children:"temp"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"first"}),(0,n.jsx)(r.td,{children:"temporary"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"following"}),(0,n.jsx)(r.td,{children:"then"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"for"}),(0,n.jsx)(r.td,{children:"ties"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"foreign"}),(0,n.jsx)(r.td,{children:"to"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"from"}),(0,n.jsx)(r.td,{children:"transaction"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"full"}),(0,n.jsx)(r.td,{children:"trigger"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"generated"}),(0,n.jsx)(r.td,{children:"unbounded"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"glob"}),(0,n.jsx)(r.td,{children:"union"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"group"}),(0,n.jsx)(r.td,{children:"unique"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"groups"}),(0,n.jsx)(r.td,{children:"update"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"having"}),(0,n.jsx)(r.td,{children:"using"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"if"}),(0,n.jsx)(r.td,{children:"vacuum"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"ignore"}),(0,n.jsx)(r.td,{children:"values"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"immediate"}),(0,n.jsx)(r.td,{children:"view"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"in"}),(0,n.jsx)(r.td,{children:"virtual"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"index"}),(0,n.jsx)(r.td,{children:"when"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"indexed"}),(0,n.jsx)(r.td,{children:"where"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"initially"}),(0,n.jsx)(r.td,{children:"window"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"inner"}),(0,n.jsx)(r.td,{children:"with"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"insert"}),(0,n.jsx)(r.td,{children:"without"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"instead"}),(0,n.jsx)(r.td,{})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},d=n.createContext(s);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);