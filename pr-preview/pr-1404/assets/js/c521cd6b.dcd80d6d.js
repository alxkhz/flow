"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1757],{33476:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=s(74848),a=s(28453);const o={},i="Logs and statistics",r={id:"concepts/advanced/logs-stats",title:"Logs and statistics",description:"Flow collects logs and statistics of catalog tasks to aid in debugging and refinement of your workflows.",source:"@site/docs/concepts/advanced/logs-stats.md",sourceDirName:"concepts/advanced",slug:"/concepts/advanced/logs-stats",permalink:"/pr-preview/pr-1404/concepts/advanced/logs-stats",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/advanced/logs-stats.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Journals",permalink:"/pr-preview/pr-1404/concepts/advanced/journals"},next:{title:"Projections",permalink:"/pr-preview/pr-1404/concepts/advanced/projections"}},l={},c=[{value:"Logs",id:"logs",level:2},{value:"Log level",id:"log-level",level:3},{value:"Statistics",id:"statistics",level:2},{value:"Working with logs and statistics",id:"working-with-logs-and-statistics",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"logs-and-statistics",children:"Logs and statistics"}),"\n",(0,n.jsx)(t.p,{children:"Flow collects logs and statistics of catalog tasks to aid in debugging and refinement of your workflows."}),"\n",(0,n.jsx)(t.h2,{id:"logs",children:"Logs"}),"\n",(0,n.jsxs)(t.p,{children:["Each organization that uses Flow has a ",(0,n.jsx)(t.code,{children:"logs"})," collection under the global ",(0,n.jsx)(t.code,{children:"ops"})," prefix.\nFor the organization Acme Co, it would have the name ",(0,n.jsx)(t.code,{children:"ops/acmeCo/logs"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["These can be thought of as standard application logs:\nthey store information about events that occur at runtime.\nThey\u2019re distinct from ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1404/concepts/advanced/shards#recovery-logs",children:"recovery logs"}),", which track the state of various task shards."]}),"\n",(0,n.jsxs)(t.p,{children:["Regardless of how many Data Flows your organization has, all logs are stored in the same collection,\nwhich is read-only and ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1404/concepts/advanced/projections#logical-partitions",children:"logically partitioned"})," on ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1404/concepts/#tasks",children:"tasks"}),".\nLogs are collected from events that occur within the Flow runtime,\nas well as the capture and materialization ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1404/concepts/connectors",children:"connectors"})," your Data Flow is using."]}),"\n",(0,n.jsx)(t.h3,{id:"log-level",children:"Log level"}),"\n",(0,n.jsx)(t.p,{children:"You can set the log level for each catalog task to control the level of detail at which logs are collected for that task.\nThe available levels, listed from least to most detailed, are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"error"}),": Non-recoverable errors from the Flow runtime or connector that are critical to know about"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"warn"}),": Errors that can be re-tried, but likely require investigation"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"info"}),": Task lifecycle events, or information you might want to collect on an ongoing basis"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"debug"}),": Details that will help debug an issue with a task"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"trace"}),": Maximum level of detail that may yield gigabytes of logs"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The default log level is ",(0,n.jsx)(t.code,{children:"info"}),". You can change a task\u2019s log level by adding the ",(0,n.jsx)(t.code,{children:"shards"})," keyword to its definition in the catalog spec:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"materializations:\n  acmeCo/debugMaterialization:\n    shards:\n      logLevel: debug\n    endpoint:\n        {}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"statistics",children:"Statistics"}),"\n",(0,n.jsxs)(t.p,{children:["Each organization that uses Flow has a ",(0,n.jsx)(t.code,{children:"stats"})," collection under the global ",(0,n.jsx)(t.code,{children:"ops"})," prefix.\nFor the organization Acme Co, it would have the name ",(0,n.jsx)(t.code,{children:"ops/acmeCo/stats"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Regardless of how many Data Flows your organization has, all stats are stored in the same collection,\nwhich is read-only and ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1404/concepts/advanced/projections#logical-partitions",children:"logically partitioned"})," on ",(0,n.jsx)(t.a,{href:"/pr-preview/pr-1404/concepts/#tasks",children:"tasks"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A new document is published to the ",(0,n.jsx)(t.code,{children:"stats"})," collection for each task transaction.\nEach document includes information about the time and quantity of data inputs and outputs.\nStatistics vary by task type (capture, materialization, or derivation)."]}),"\n",(0,n.jsx)(t.p,{children:"Use stats to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Evaluate the data throughput of a task; for example, a derivation."}),"\n",(0,n.jsx)(t.li,{children:"Compare a data throughput of a task between platforms; for example, compare reported data capture by Flow to detected change rate in a source system."}),"\n",(0,n.jsx)(t.li,{children:"Access the same information used by Estuary for billing."}),"\n",(0,n.jsx)(t.li,{children:"Optimize your tasks for increased efficiency."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.a,{href:"/pr-preview/pr-1404/reference/working-logs-stats#available-statistics",children:["See a detailed table of the properties included in ",(0,n.jsx)(t.code,{children:"stats"})," documents."]})}),"\n",(0,n.jsx)(t.h2,{id:"working-with-logs-and-statistics",children:"Working with logs and statistics"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/pr-preview/pr-1404/reference/working-logs-stats",children:"Learn more about working with logs and statistics"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(96540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);