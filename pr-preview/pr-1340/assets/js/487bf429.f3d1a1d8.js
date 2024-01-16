"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Time Travel",l={unversionedId:"reference/time-travel",id:"reference/time-travel",title:"Time Travel",description:"Time travel functionality allows you to restrict the data materialization process to a specific date range. When applying time travel to an existing materialization, it's important to note that it won't remove any existing documents. Instead, it will only materialize new data that falls within the specified date and time window. New data will not be included in your materialization destination unless it conforms to the specified date range criteria. Consequently, setting a lower boundary in the future date will delay the materialization of data until that future date is reached.",source:"@site/docs/reference/time-travel.md",sourceDirName:"reference",slug:"/reference/time-travel",permalink:"/pr-preview/pr-1340/reference/time-travel",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/time-travel.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Editing considerations",permalink:"/pr-preview/pr-1340/reference/editing"},next:{title:"Configuring task shards",permalink:"/pr-preview/pr-1340/reference/Configuring-task-shards"}},c={},s=[{value:"How to configure time travel",id:"how-to-configure-time-travel",level:2},{value:"Specification",id:"specification",level:3},{value:"Properties",id:"properties",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time-travel"},"Time Travel"),(0,i.kt)("p",null,"Time travel functionality allows you to restrict the data materialization process to a specific date range. When applying time travel to an existing materialization, it's important to note that it won't remove any existing documents. Instead, it will only materialize new data that falls within the specified date and time window. New data will not be included in your materialization destination unless it conforms to the specified date range criteria. Consequently, setting a lower boundary in the future date will delay the materialization of data until that future date is reached."),(0,i.kt)("h2",{id:"how-to-configure-time-travel"},"How to configure time travel"),(0,i.kt)("p",null,"In the Flow web app, either navigate to an existing materialization or create a new one. Under ",(0,i.kt)("strong",{parentName:"p"},"Source Collections")," scroll to the bottom of a ",(0,i.kt)("strong",{parentName:"p"},"Resource Configuration")," for a specific collection. If you are working with a new materialization, you must link a collection to the materialization before continuing."),(0,i.kt)("p",null,"You'll find two optional date-time fields for implementing time travel: ",(0,i.kt)("inlineCode",{parentName:"p"},"notBefore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"notAfter"),". Click on either field to open a date/time picker that you can use to set the values. It's not mandatory to select values for both fields for time travel to take effect. However, selecting values for both fields will ensure that only data meeting both criteria is materialized. In other words, new data must fall before the ",(0,i.kt)("inlineCode",{parentName:"p"},"notAfter")," date and after the ",(0,i.kt)("inlineCode",{parentName:"p"},"notBefore")," date to be included in the materialization."),(0,i.kt)("h3",{id:"specification"},"Specification"),(0,i.kt)("p",null,"Alternatively, both fields can be defined in the Flow specification file with the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"materializations:\n  # The name of the materialization.\n  acmeCo/example/database-views:\n    # Endpoint defines how to connect to the destination of the materialization.\n    # Required, type: object\n    endpoint:\n      # This endpoint uses a connector provided as a Docker image.\n      connector:\n        # Docker image that implements the materialization connector.\n        image: ghcr.io/estuary/materialize-mysql:dev\n        # File that provides the connector's required configuration.\n        # Configuration may also be presented inline.\n        config: path/to//connector-config.yaml\n    bindings:\n      - # Source collection read by this binding.\n        # Required, type: object or string\n        source:\n          # Name of the collection to be read.\n          # Required.\n          name: acmeCo/example/collection\n          # Lower bound date-time for documents which should be processed. \n          # Source collection documents published before this date-time are filtered.\n          # `notBefore` is *only* a filter. Updating its value will not cause Flow\n          # to re-process documents that have already been read.\n          # Optional. Default is to process all documents.\n          notBefore: 2023-01-23T01:00:00Z\n          # Upper bound date-time for documents which should be processed.\n          # Source collection documents published after this date-time are filtered.\n          # Like `notBefore`, `notAfter` is *only* a filter. Updating its value will\n          # not cause Flow to re-process documents that have already been read.\n          # Optional. Default is to process all documents.\n          notAfter: 2023-01-23T02:00:00Z\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/notBefore"))),(0,i.kt)("td",{parentName:"tr",align:null},"Not Before"),(0,i.kt)("td",{parentName:"tr",align:null},"Only include date before this time"),(0,i.kt)("td",{parentName:"tr",align:null},"date-time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"/notAfter"))),(0,i.kt)("td",{parentName:"tr",align:null},"Not After"),(0,i.kt)("td",{parentName:"tr",align:null},"Only include data after this time"),(0,i.kt)("td",{parentName:"tr",align:null},"date-time")))))}u.isMDXComponent=!0}}]);