"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(7462),a=n(7294),r=n(6010),i=n(2466),s=n(6550),l=n(1980),c=n(7392),p=n(12);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,c]=h({queryString:n,groupId:o}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,p.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=l??u;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),o=c[n].value;o!==s&&(u(t),l(o))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,r.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function b(e){const t=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},a.createElement(w,(0,o.Z)({},e,t)),a.createElement(k,(0,o.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return a.createElement(b,(0,o.Z)({key:String(t)},e))}},5574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=n(7462),a=(n(7294),n(3905)),r=n(4866),i=n(5162);const s={sidebar_position:5},l="Connectors",c={unversionedId:"concepts/connectors",id:"concepts/connectors",title:"Connectors",description:"Connectors bridge the gap between Flow and",source:"@site/docs/concepts/connectors.md",sourceDirName:"concepts",slug:"/concepts/connectors",permalink:"/pr-preview/pr-1171/concepts/connectors",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/connectors.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Materializations",permalink:"/pr-preview/pr-1171/concepts/materialization"},next:{title:"Derivations",permalink:"/pr-preview/pr-1171/concepts/derivations"}},p={},u=[{value:"Using connectors",id:"using-connectors",level:2},{value:"Flow web application",id:"flow-web-application",level:3},{value:"GitOps and flowctl",id:"gitops-and-flowctl",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Protecting secrets",id:"protecting-secrets",level:3},{value:"Example: Protect a configuration",id:"example-protect-a-configuration",level:4},{value:"Example: Protect portions of a configuration",id:"example-protect-portions-of-a-configuration",level:4},{value:"Connecting to endpoints on secure networks",id:"connecting-to-endpoints-on-secure-networks",level:3},{value:"Sample",id:"sample",level:4},{value:"Why an open connector architecture?",id:"why-an-open-connector-architecture",level:2},{value:"Available connectors",id:"available-connectors",level:2}],d={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connectors"},"Connectors"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Connectors")," bridge the gap between Flow and\nthe various endpoints from which you capture or to which you materialize data."),(0,a.kt)("p",null,"Supported connectors are all available to you within the Flow web application.\nFrom a technical perspective, they're packaged as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/estuary/packages?repo_name=connectors"},"Docker images"),",\neach encapsulating the details of working with a particular external system."),(0,a.kt)("p",null,"All connectors available in Flow are open-source, and many of them were built by Estuary.\nEstuary connectors are dual-licensed under Apache 2.0 or MIT.\nFlow also supports open-source connectors built by third parties, which Estuary independently tests and may alter slightly\nfor optimal performance within the Flow ecosystem."),(0,a.kt)("p",null,"Estuary\u2019s vision is to provide a common runtime against which any open connector may be run.\nTo that end, Flow currently supports the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/airbyte-specification"},"Airbyte specification"),"\nas well as Flow\u2019s low-latency gRPC protocols for captures and materializations."),(0,a.kt)("h2",{id:"using-connectors"},"Using connectors"),(0,a.kt)("p",null,"Most \u2014 if not all \u2014 of your Data Flows will use at least one connector.\nYou configure connectors within capture or materialization specifications.\nWhen you publish one of these entities, you're also deploying all the connectors it uses."),(0,a.kt)("p",null,"You can interact with connectors using either the Flow web application or the flowctl CLI."),(0,a.kt)("h3",{id:"flow-web-application"},"Flow web application"),(0,a.kt)("p",null,"The Flow web application is designed to assist you with connector configuration and deployment.\nIt's a completely no-code experience, but it's compatible with Flow's command line tools, discussed below."),(0,a.kt)("p",null,"When you add a capture or materialization in the Flow web app, choose the desired data system from the ",(0,a.kt)("strong",{parentName:"p"},"Connector")," drop-down menu."),(0,a.kt)("p",null,"The required fields for the connector appear below the drop-down. When you fill in the fields and click ",(0,a.kt)("strong",{parentName:"p"},"Discover Endpoint"),',\nFlow automatically "discovers" the data streams or tables \u2014 known as ',(0,a.kt)("strong",{parentName:"p"},"resources")," \u2014 associated with the endpoint system.\nFrom there, you can refine the configuration, save, and publish the resulting Flow specification."),(0,a.kt)("h3",{id:"gitops-and-flowctl"},"GitOps and flowctl"),(0,a.kt)("p",null,"Connectors are packaged as ",(0,a.kt)("a",{parentName:"p",href:"https://opencontainers.org/"},"Open Container")," (Docker) images,\nand can be tagged, and pulled using\n",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"},"GitHub Container registry"),",\nor any other public image registry provider."),(0,a.kt)("p",null,"To interface with a connector, the Flow runtime needs to know:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The specific image to use, through an image name such as ",(0,a.kt)("inlineCode",{parentName:"p"},"ghcr.io/estuary/source-postgres:dev"),".\nNotice that the image name also conveys the specific image registry and version tag to use.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Endpoint configuration such as a database address and account, with meaning that is specific to the connector.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Resource configuration such as a specific database table to capture, which is also specific to the connector."))),(0,a.kt)("p",null,"To integrate a connector into your dataflow,\nyou must define all three components within your Flow specification."),(0,a.kt)("p",null,"The web application is intended to help you generate the Flow specification.\nFrom there, you can use ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1171/concepts/flowctl"},"flowctl")," to refine it in your local environment.\nIt's also possible to manually write your Flow specification files, but this isn't the recommended workflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  acmeCo/postgres-views:\n    endpoint:\n      connector:\n        # 1: Provide the image that implements your endpoint connector.\n        # The `dev` tag uses the most recent version (the web app chooses this tag automatically)\n        image: ghcr.io/estuary/materialize-postgres:dev\n        # 2: Provide endpoint configuration that the connector requires.\n        config:\n          address: localhost:5432\n          password: password\n          database: postgres\n          user: postgres\n    bindings:\n      - source: acmeCo/products/anvils\n        # 3: Provide resource configuration for the binding between the Flow\n        #    collection and the endpoint resource. This connector interfaces\n        #    with a SQL database and its resources are database tables. Here,\n        #    we provide a table to create and materialize which is bound to the\n        #    `acmeCo/products/anvils` source collection.\n        resource:\n          table: anvil_products\n\n      # Multiple resources can be configured through a single connector.\n      # Bind additional collections to tables as part of this connector instance:\n      - source: acmeCo/products/TNT\n        resource:\n          table: tnt_products\n\n      - source: acmeCo/customers\n        resource:\n          table: customers\n")),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Because connectors interface with external systems, each requires a slightly different ",(0,a.kt)("strong",{parentName:"p"},"endpoint configuration"),".\nHere you specify information such as a database hostname or account credentials \u2014\nwhatever that specific connector needs to function."),(0,a.kt)("p",null,"If you're working directly with Flow specification files,\nyou have the option of including the configuration inline\nor storing it in separate files:"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Inline",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="my.flow.yaml"',title:'"my.flow.yaml"'},"materializations:\n  acmeCo/postgres-views:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-postgres:dev\n        config:\n          address: localhost:5432\n          password: password\n          database: postgres\n          user: postgres\n      bindings: []\n"))),(0,a.kt)(i.Z,{value:"Referenced file",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="my.flow.yaml"',title:'"my.flow.yaml"'},"materializations:\n  acmeCo/postgres-views:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-postgres:dev\n        config: my.config.yaml\n      bindings: []\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="my.config.yaml"',title:'"my.config.yaml"'},"address: localhost:5432\npassword: password\ndatabase: postgres\nuser: postgres\n")))),(0,a.kt)("p",null,"Storing configuration in separate files serves two important purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Re-use of configuration across multiple captures or materializations"),(0,a.kt)("li",{parentName:"ul"},"The ability to protect sensitive credentials")),(0,a.kt)("h3",{id:"protecting-secrets"},"Protecting secrets"),(0,a.kt)("p",null,"Most endpoint systems require credentials of some kind,\nsuch as a username or password."),(0,a.kt)("p",null,"Sensitive credentials should be protected while not in use.\nThe only time a credential needs to be directly accessed is when Flow initiates the connector."),(0,a.kt)("p",null,"Flow integrates with Mozilla\u2019s ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/sops"},"sops")," tool,\nwhich can encrypt and protect credentials.\nIt stores a ",(0,a.kt)("inlineCode",{parentName:"p"},"sops"),"-protected configuration in its encrypted form,\nand decrypts it only when invoking a connector on the your behalf."),(0,a.kt)("p",null,"sops, short for \u201cSecrets Operations,\u201d is a tool that encrypts the values of a JSON or YAML document\nagainst a key management system (KMS) such as Google Cloud Platform KMS, Azure Key Vault, or Hashicorp Vault.\nEncryption or decryption of a credential with ",(0,a.kt)("inlineCode",{parentName:"p"},"sops")," is an active process:\nit requires that the user (or the Flow runtime identity) have a current authorization to the required KMS,\nand creates a request trace which can be logged and audited.\nIt's also possible to revoke access to the KMS,\nwhich immediately and permanently removes access to the protected credential."),(0,a.kt)("p",null,"When you use the Flow web application, Flow automatically\nadds ",(0,a.kt)("inlineCode",{parentName:"p"},"sops")," protection to sensitive fields on your behalf.\nYou can also implement ",(0,a.kt)("inlineCode",{parentName:"p"},"sops")," manually if you are writing a Flow specification locally.\nThe examples below provide a useful reference."),(0,a.kt)("h4",{id:"example-protect-a-configuration"},"Example: Protect a configuration"),(0,a.kt)("p",null,"Suppose you're given a connector configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},'host: my.hostname\npassword: "this is sensitive!"\nuser: my-user\n')),(0,a.kt)("p",null,"You can protect it using a Google KMS key that you own:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Login to Google Cloud and initialize application default credentials used by `sops`.\n$ gcloud auth application-default login\n# Use `sops` to re-write the configuration document in place, protecting its values.\n$ sops --encrypt --in-place --gcp-kms projects/your-project-id/locations/us-central1/keyRings/your-ring/cryptoKeys/your-key-name config.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sops")," re-writes the file, wrapping each value in an encrypted envelope and adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"sops")," metadata section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},'host: ENC[AES256_GCM,data:K/clly65pThTg2U=,iv:1bNmY8wjtjHFBcXLR1KFcsNMGVXRl5LGTdREUZIgcEU=,tag:5GKcguVPihXXDIM7HHuNnA==,type:str]\npassword: ENC[AES256_GCM,data:IDDY+fl0/gAcsH+6tjRdww+G,iv:Ye8st7zJ9wsMRMs6BoAyWlaJeNc9qeNjkkjo6BPp/tE=,tag:EPS9Unkdg4eAFICGujlTfQ==,type:str]\nuser: ENC[AES256_GCM,data:w+F7MMwQhw==,iv:amHhNCJWAJnJaGujZgjhzVzUZAeSchEpUpBau7RVeCg=,tag:62HguhnnSDqJdKdwYnj7mQ==,type:str]\nsops:\n    # Some items omitted for brevity:\n    gcp_kms:\n        - resource_id: projects/your-project-id/locations/us-central1/keyRings/your-ring/cryptoKeys/your-key-name\n          created_at: "2022-01-05T15:49:45Z"\n          enc: CiQAW8BC2GDYWrJTp3ikVGkTI2XaZc6F4p/d/PCBlczCz8BZiUISSQCnySJKIptagFkIl01uiBQp056c\n    lastmodified: "2022-01-05T15:49:45Z"\n    version: 3.7.1\n')),(0,a.kt)("p",null,"You then use this ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," within your Flow specification.\nThe Flow runtime knows that this document is protected by ",(0,a.kt)("inlineCode",{parentName:"p"},"sops"),"\nwill continue to store it in its protected form,\nand will attempt a decryption only when invoking a connector on your behalf."),(0,a.kt)("p",null,"If you need to make further changes to your configuration,\nedit it using ",(0,a.kt)("inlineCode",{parentName:"p"},"sops config.yaml"),".\nIt's not required to provide the KMS key to use again,\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"sops")," finds it within its metadata section."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"When deploying catalogs onto the managed Flow runtime,\nyou must grant access to decrypt your GCP KMS key to the Flow runtime service agent,\nwhich is:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"flow-258@helpful-kingdom-273219.iam.gserviceaccount.com\n"))),(0,a.kt)("h4",{id:"example-protect-portions-of-a-configuration"},"Example: Protect portions of a configuration"),(0,a.kt)("p",null,"Endpoint configurations are typically a mix of sensitive and non-sensitive values.\nIt can be cumbersome when ",(0,a.kt)("inlineCode",{parentName:"p"},"sops")," protects an entire configuration document as you\nlose visibility into non-sensitive values, which you might prefer to store as\ncleartext for ease of use."),(0,a.kt)("p",null,"You can use the encrypted-suffix feature of ",(0,a.kt)("inlineCode",{parentName:"p"},"sops")," to selectively protect credentials:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},'host: my.hostname\npassword_sops: "this is sensitive!"\nuser: my-user\n')),(0,a.kt)("p",null,"Notice that ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," in this configuration has an added ",(0,a.kt)("inlineCode",{parentName:"p"},"_sops")," suffix.\nNext, encrypt only values which have that suffix:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ sops --encrypt --in-place --encrypted-suffix "_sops" --gcp-kms projects/your-project-id/locations/us-central1/keyRings/your-ring/cryptoKeys/your-key-name config.yaml\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sops"),' re-writes the file, wrapping only values having a "_sops" suffix and adding its ',(0,a.kt)("inlineCode",{parentName:"p"},"sops")," metadata section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},'host: my.hostname\npassword_sops: ENC[AES256_GCM,data:dlfidMrHfDxN//nWQTPCsjoG,iv:DHQ5dXhyOOSKI6ZIzcUM67R6DD/2MSE4LENRgOt6GPY=,tag:FNs2pTlzYlagvz7vP/YcIQ==,type:str]\nuser: my-user\nsops:\n    # Some items omitted for brevity:\n    encrypted_suffix: _sops\n    gcp_kms:\n        - resource_id: projects/your-project-id/locations/us-central1/keyRings/your-ring/cryptoKeys/your-key-name\n          created_at: "2022-01-05T16:06:36Z"\n          enc: CiQAW8BC2Au779CGdMFUjWPhNleCTAj9rL949sBvPQ6eyAC3EdESSQCnySJKD3eWX8XrtrgHqx327\n    lastmodified: "2022-01-05T16:06:37Z"\n    version: 3.7.1\n')),(0,a.kt)("p",null,"You then use this ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," within your Flow specification.\nFlow looks for and understands the ",(0,a.kt)("inlineCode",{parentName:"p"},"encrypted_suffix"),",\nand will remove this suffix from configuration keys before passing them to the connector."),(0,a.kt)("h3",{id:"connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks"),(0,a.kt)("p",null,"In some cases, your source or destination endpoint may be within a secure network, and you may not be able\nto allow direct access to its port due to your organization's security policy."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If permitted by your organization, a quicker solution is to whitelist the Estuary IP address, ",(0,a.kt)("inlineCode",{parentName:"p"},"34.121.207.128"),".\nFor help completing this task on different cloud hosting platforms,\nsee the documentation for the ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1171/reference/Connectors/"},"connector")," you're using.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ssh.com/academy/ssh/tunneling/example#local-forwarding"},"SHH tunneling"),", or port forwarding,\nprovides a means for Flow to access the port indirectly through an SSH server.\nSSH tunneling is available in Estuary connectors for endpoints that use a network address for connection."),(0,a.kt)("p",null,"To set up and configure the SSH server, see the ",(0,a.kt)("a",{parentName:"p",href:"../../guides/connect-network/"},"guide"),".\nThen, add the appropriate properties when you define the capture or materialization in the Flow web app,\nor add the ",(0,a.kt)("inlineCode",{parentName:"p"},"networkTunnel")," stanza directly to the YAML, as shown below."),(0,a.kt)("h4",{id:"sample"},"Sample"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="source-postgres-ssh-tunnel.flow.yaml"',title:'"source-postgres-ssh-tunnel.flow.yaml"'},"captures:\n  acmeCo/postgres-capture-ssh:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-postgres:dev\n        config:\n          address: 127.0.0.1:5432\n          database: flow\n          user: flow_user\n          password: secret\n          networkTunnel:\n            sshForwarding:\n              # Location of the remote SSH server that supports tunneling.\n              # Formatted as ssh://user@hostname[:port].\n              sshEndpoint: ssh://sshUser@198.21.98.1:22\n              # Private key to connect to the SSH server, formatted as multiline plaintext.\n              # Use the YAML literal block style with the indentation indicator.\n              # See https://yaml-multiline.info/ for details.\n              privateKey: |2\n                -----BEGIN RSA PRIVATE KEY-----\n                MIICXAIBAAKBgQCJO7G6R+kv2MMS8Suw21sk2twHg8Vog0fjimEWJEwyAfFM/Toi\n                EJ6r5RTaSvN++/+MPWUll7sUdOOBZr6ErLKLHEt7uXxusAzOjMxFKZpEARMcjwHY\n                v/tN1A2OYU0qay1DOwknEE0i+/Bvf8lMS7VDjHmwRaBtRed/+iAQHf128QIDAQAB\n                AoGAGoOUBP+byAjDN8esv1DCPU6jsDf/Tf//RbEYrOR6bDb/3fYW4zn+zgtGih5t\n                CR268+dwwWCdXohu5DNrn8qV/Awk7hWp18mlcNyO0skT84zvippe+juQMK4hDQNi\n                ywp8mDvKQwpOuzw6wNEitcGDuACx5U/1JEGGmuIRGx2ST5kCQQDsstfWDcYqbdhr\n                5KemOPpu80OtBYzlgpN0iVP/6XW1e5FCRp2ofQKZYXVwu5txKIakjYRruUiiZTza\n                QeXRPbp3AkEAlGx6wMe1l9UtAAlkgCFYbuxM+eRD4Gg5qLYFpKNsoINXTnlfDry5\n                +1NkuyiQDjzOSPiLZ4Abpf+a+myjOuNL1wJBAOwkdM6aCVT1J9BkW5mrCLY+PgtV\n                GT80KTY/d6091fBMKhxL5SheJ4SsRYVFtguL2eA7S5xJSpyxkadRzR0Wj3sCQAvA\n                bxO2fE1SRqbbF4cBnOPjd9DNXwZ0miQejWHUwrQO0inXeExNaxhYKQCcnJNUAy1J\n                6JfAT/AbxeSQF3iBKK8CQAt5r/LLEM1/8ekGOvBh8MAQpWBW771QzHUN84SiUd/q\n                xR9mfItngPwYJ9d/pTO7u9ZUPHEoat8Ave4waB08DsI=\n                -----END RSA PRIVATE KEY-----\n        bindings: []\n")),(0,a.kt)("h2",{id:"why-an-open-connector-architecture"},"Why an open connector architecture?"),(0,a.kt)("p",null,"Historically, data platforms have directly implemented integrations to external systems with which they interact.\nToday, there are simply so many systems and APIs that companies use,\nthat it\u2019s not feasible for a company to provide all possible integrations.\nUsers are forced to wait indefinitely while the platform works through their prioritized integration list."),(0,a.kt)("p",null,"An open connector architecture removes Estuary \u2014 or any company \u2014 as a bottleneck in the development of integrations.\nEstuary contributes open-source connectors to the ecosystem, and in turn is able to leverage connectors implemented by others.\nUsers are empowered to write their own connectors for esoteric systems not already covered by the ecosystem."),(0,a.kt)("p",null,"Furthermore, implementing a Docker-based community specification brings other important qualities to Estuary connectors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cross-platform interoperability between Flow, Airbyte, and any other platform that supports the protocol"),(0,a.kt)("li",{parentName:"ul"},"The abilities to write connectors in any language and run them on any machine"),(0,a.kt)("li",{parentName:"ul"},"Built-in solutions for version management (through image tags) and distribution"),(0,a.kt)("li",{parentName:"ul"},"The ability to integrate connectors from different sources at will, without the centralized control of a single company, thanks to container image registries")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In order to be reflected in the Flow web app and used on the managed Flow platform,\nconnectors must be reviewed and added by the Estuary team. Have a connector you'd like to add?\n",(0,a.kt)("a",{parentName:"p",href:"mailto:info@estuary.dev"},"Contact us"),".")),(0,a.kt)("h2",{id:"available-connectors"},"Available connectors"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-1171/reference/Connectors/"},"Learn about available connectors in the reference section")))}h.isMDXComponent=!0}}]);