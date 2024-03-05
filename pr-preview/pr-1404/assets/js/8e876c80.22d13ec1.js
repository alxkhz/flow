"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3624],{15239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=t(74848),i=t(28453);const r={sidebar_position:2},s="Captures",c={id:"concepts/captures",title:"Captures",description:"A capture is how Flow ingests data from an external source.",source:"@site/docs/concepts/captures.md",sourceDirName:"concepts",slug:"/concepts/captures",permalink:"/pr-preview/pr-1404/concepts/captures",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/captures.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Catalog",permalink:"/pr-preview/pr-1404/concepts/catalogs"},next:{title:"Collections",permalink:"/pr-preview/pr-1404/concepts/collections"}},a={},l=[{value:"Connectors",id:"connectors",level:2},{value:"Airbyte sources",id:"airbyte-sources",level:3},{value:"Discovery",id:"discovery",level:2},{value:"Automatically update captures",id:"automatically-update-captures",level:2},{value:"Specification",id:"specification",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"captures",children:"Captures"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.strong,{children:"capture"})," is how Flow ingests data from an external source.\nEvery Data Flow starts with a capture."]}),"\n",(0,o.jsxs)(n.p,{children:["Captures are a type of Flow ",(0,o.jsx)(n.strong,{children:"task"}),".\nThey connect to an external data source, or ",(0,o.jsx)(n.strong,{children:"endpoint"}),",\nand bind one or more of its resources, such as database tables.\nEach binding adds documents to a corresponding Flow ",(0,o.jsx)(n.strong,{children:"collection"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Captures run continuously:\nas soon as new documents are made available at the endpoint resources,\nFlow validates their schema and adds them to the appropriate collection.\nCaptures can process ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1404/concepts/collections#documents",children:"documents"})," up to 16 MB in size."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(49791).A+"",width:"960",height:"540"})}),"\n",(0,o.jsxs)(n.p,{children:["You define and configure captures in ",(0,o.jsx)(n.strong,{children:"Flow specifications"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/pr-preview/pr-1404/guides/create-dataflow#create-a-capture",children:"See the guide to create a capture"})}),"\n",(0,o.jsx)(n.h2,{id:"connectors",children:"Connectors"}),"\n",(0,o.jsxs)(n.p,{children:["Captures extract data from an endpoint using a ",(0,o.jsx)(n.a,{href:"../#connectors",children:"connector"}),".\nEstuary builds and maintains many real-time connectors for various technology systems,\nsuch as database change data capture (CDC) connectors."]}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/",children:"source connector reference documentation"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"airbyte-sources",children:"Airbyte sources"}),"\n",(0,o.jsxs)(n.p,{children:["Flow supports running Airbyte source connectors (through\n",(0,o.jsx)(n.a,{href:"https://github.com/estuary/airbyte/tree/master/airbyte-to-flow",children:"airbyte-to-flow"}),")\nThese connectors tend to focus on SaaS APIs, and do not offer real-time streaming integrations.\nFlow runs the connector at regular intervals to capture updated documents."]}),"\n",(0,o.jsxs)(n.p,{children:["Airbyte source connectors are independently reviewed and sometime updated for compatibility with Flow.\nEstuary's ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1404/reference/Connectors/capture-connectors/",children:"source connectors"})," documentation includes actively supported Airbyte connectors.\nA full list of Airbyte's connectors is available at ",(0,o.jsx)(n.a,{href:"https://hub.docker.com/u/airbyte?page=1",children:"Airbyte docker hub"}),".\nIf you see a connector you'd like to prioritize for access in the Flow web app, ",(0,o.jsx)(n.a,{href:"mailto:support@estuary.dev",children:"contact us"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"discovery",children:"Discovery"}),"\n",(0,o.jsxs)(n.p,{children:["To help you configure new pull captures, Flow offers the guided ",(0,o.jsx)(n.strong,{children:"discovery"})," workflow in the Flow web application."]}),"\n",(0,o.jsxs)(n.p,{children:["To begin discovery, you tell Flow the connector you'd like to use and basic information about the endpoint.\nFlow automatically generates a capture configuration for you. It identifies one or more\n",(0,o.jsx)(n.strong,{children:"resources"})," \u2014 tables, data streams, or the equivalent \u2014 and generates ",(0,o.jsx)(n.strong,{children:"bindings"})," so that each will be mapped to a\ndata collection in Flow."]}),"\n",(0,o.jsx)(n.p,{children:"You may then modify the generated configuration as needed before publishing the capture."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"Discovers can also be run when editing an existing capture. This is commonly done in order to add new bindings, or update the collection specs and schemas associated with existing bindings."})}),"\n",(0,o.jsx)(n.h2,{id:"automatically-update-captures",children:"Automatically update captures"}),"\n",(0,o.jsxs)(n.p,{children:["You can choose to run periodic discovers in the background by adding the ",(0,o.jsx)(n.code,{children:"autoDiscover"})," property to the capture. Flow will periodically check for changes to the source and re-publish the capture to reflect those changes."]}),"\n",(0,o.jsxs)(n.p,{children:["There are several options for controlling the behavior of ",(0,o.jsx)(n.code,{children:"autoDiscover"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"addNewBindings"})," option determines whether to add newly discovered resources, such as database tables, to the capture as ",(0,o.jsx)(n.em,{children:"bindings"}),". If set to ",(0,o.jsx)(n.code,{children:"false"}),", autoCapture will only update the collection specs for existing bindings."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"evolveIncompatibleCollections"})," option determines how to respond when the discovered updates would cause a breaking change to the collection. If ",(0,o.jsx)(n.code,{children:"true"}),", it will trigger an ",(0,o.jsx)(n.a,{href:"/pr-preview/pr-1404/concepts/advanced/evolutions",children:"evolution"})," of the incompatible collection(s) to prevent failures."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In the Flow web app, you can set these properties when you create or edit a capture."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(60850).A+"",width:"1876",height:"162"})}),"\n",(0,o.jsx)(n.p,{children:"The toggles in the web app correspond directly to the properties above:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['"Automatically keep schemas up to date" enables ',(0,o.jsx)(n.code,{children:"autoDiscover"})]}),"\n",(0,o.jsxs)(n.li,{children:['"Automatically add new collections" corresponds to ',(0,o.jsx)(n.code,{children:"addNewBindings"})]}),"\n",(0,o.jsxs)(n.li,{children:['"Breaking changes re-versions collections" corresponds to ',(0,o.jsx)(n.code,{children:"evolveIncompatibleCollections"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,o.jsx)(n.p,{children:"Captures are defined in Flow specification files per the following format:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# A set of captures to include in the catalog.\n# Optional, type: object\ncaptures:\n  # The name of the capture.\n  acmeCo/example/source-s3:\n    # Automatically performs periodic discover operations, which updates the bindings\n    # to reflect what's in the source, and also updates collection schemas.\n    # To disable autoDiscover, either omit this property or set it to `null`.\n    autoDiscover:\n      # Also add any newly discovered bindings automatically\n      addNewBindings: true\n      # How to handle breaking changes to discovered collections. If true, then existing\n      # materialization bindings will be re-created with new names, as necessary. Or if\n      # collection keys have changed, then new Flow collections will be created. If false,\n      # then incompatible changes will simply result in failed publications, and will\n      # effectively be ignored.\n      evolveIncompatibleCollections: true\n\n    # Endpoint defines how to connect to the source of the capture.\n    # Required, type: object\n    endpoint:\n      # This endpoint uses a connector provided as a Docker image.\n      connector:\n        # Docker image that implements the capture connector.\n        image: ghcr.io/estuary/source-s3:dev\n        # File that provides the connector's required configuration.\n        # Configuration may also be presented inline.\n        config: path/to/connector-config.yaml\n\n    # Bindings define how collections are populated from the data source.\n    # A capture may bind multiple resources to different collections.\n    # Required, type: array\n    bindings:\n      - # The target collection to capture into.\n        # This may be defined in a separate, imported specification file.\n        # Required, type: string\n        target: acmeCo/example/collection\n\n        # The resource is additional configuration required by the endpoint\n        # connector to identify and capture a specific endpoint resource.\n        # The structure and meaning of this configuration is defined by\n        # the specific connector.\n        # Required, type: object\n        resource:\n          stream: a-bucket/and-prefix\n          # syncMode should be set to incremental for all Estuary connectors\n          syncMode: incremental\n\n      - target: acmeCo/example/another-collection\n        resource:\n          stream: a-bucket/another-prefix\n          syncMode: incremental\n\n    # Interval of time between invocations of non-streaming connectors.\n    # If a connector runs to completion and then exits, the capture task will\n    # restart the connector after this interval of time has elapsed.\n    #\n    # Intervals are relative to the start of an invocation and not its completion.\n    # For example, if the interval is five minutes, and an invocation of the\n    # capture finishes after two minutes, then the next invocation will be started\n    # after three additional minutes.\n    #\n    # Optional. Default: Five minutes.\n    interval: 5m\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},60850:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/captures-auto-discover-ui-e21d902c34932277099c045d7d62ac99.png"},49791:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/captures-new-4479ed989de046cd79db471d502bfc89.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);