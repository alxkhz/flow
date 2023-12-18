"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7901],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},r="Editing considerations",c={unversionedId:"reference/editing",id:"reference/editing",title:"Editing considerations",description:"You can edit the components of your Data Flows in the Flow web app and with flowctl, but before you do so, it's important to consider the implications of your changes.",source:"@site/docs/reference/editing.md",sourceDirName:"reference",slug:"/reference/editing",permalink:"/pr-preview/pr-1319/reference/editing",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/editing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authorizing users and authenticating with Flow",permalink:"/pr-preview/pr-1319/reference/authentication"},next:{title:"Time Travel",permalink:"/pr-preview/pr-1319/reference/time-travel"}},l={},s=[{value:"How to edit Flow entities",id:"how-to-edit-flow-entities",level:2},{value:"Endpoint configuration changes",id:"endpoint-configuration-changes",level:2},{value:"Managing connector updates",id:"managing-connector-updates",level:2},{value:"Considerations for name changes",id:"considerations-for-name-changes",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"editing-considerations"},"Editing considerations"),(0,a.kt)("p",null,"You can edit the components of your Data Flows in the Flow web app and with flowctl, but before you do so, it's important to consider the implications of your changes."),(0,a.kt)("p",null,"Though Flow entities like captures, collections, and materializations are discrete components, they depend on one another to form complete Data Flows. Changing a configuration or a name can have adverse effects downstream."),(0,a.kt)("p",null,"As you edit, you'll also have to account for any updates to the configuration for the connector used."),(0,a.kt)("h2",{id:"how-to-edit-flow-entities"},"How to edit Flow entities"),(0,a.kt)("p",null,"In the Flow web app, you can edit captures and materializations, and use the ",(0,a.kt)("strong",{parentName:"p"},"Schema Inference")," tool to edit collection schemas."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-1319/guides/edit-data-flows#edit-a-capture"},"Editing captures and associated collections")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-1319/guides/edit-data-flows#edit-a-materialization"},"Editing materializations and associated collections"))),(0,a.kt)("p",null,"With flowctl, you can edit captures, materializations, collections, derivations, and tests.\nYou do this by pulling the desired specification locally, editing, and re-publishing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-1319/concepts/flowctl#editing-data-flows-with-flowctl"},"Editing with flowctl"))),(0,a.kt)("h2",{id:"endpoint-configuration-changes"},"Endpoint configuration changes"),(0,a.kt)("p",null,"A common reason to edit a capture or materialization to fix a broken endpoint configuration:\nfor example, if a database is now accessed through a different port.\nChanges that prevent Flow from finding the source system immediately cause the capture or materialization to fail."),(0,a.kt)("p",null,"By contrast, certain credential changes might not cause issues ",(0,a.kt)("em",{parentName:"p"},"unless")," you attempt to edit the capture or materialization.\nBecause Flow tasks run continuously, the connector doesn't have to re-authenticate and an outdated credential won't cause failure.\nEditing, however, requires the task to re-start, so you'll need to provide current credentials to the endpoint configuration.\nBefore editing, take note of any changed credentials, even if the task is still running successfully."),(0,a.kt)("h2",{id:"managing-connector-updates"},"Managing connector updates"),(0,a.kt)("p",null,"Connectors are updated periodically. In some cases, required fields are added or removed.\nWhen you edit a capture or materialization, you'll need to update the configuration to comply with the current connector version.\nYou may need to change a property's formatting or add a new field."),(0,a.kt)("p",null,"Additionally, certain updates to capture connectors can affect the way available collections are named.\nAfter editing, the connector may map a data resource to new collection with a different name."),(0,a.kt)("p",null,"For example, say you have capture that writes to a collection called ",(0,a.kt)("inlineCode",{parentName:"p"},"post/fruity_pebbles/nutritionFacts"),".\nYou begin to edit the capture using the latest version of the connector.\nThe connector detects the same set of nutrition facts data,\nbut maps it to a collection called ",(0,a.kt)("inlineCode",{parentName:"p"},"post/fruity_pebbles/nutrition-facts"),".\nIf you continue to publish the edited capture, both collections will persist,\nbut new data will be written to the new collection."),(0,a.kt)("p",null,"Before editing, check if a connector has been updated:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"Admin")," tab and view the list of connectors. Each tile shows the date it was last updated."),(0,a.kt)("li",{parentName:"ul"},"Check the connector's ",(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-1319/reference/Connectors/"},"documentation"),". Pertinent updates, if any, are noted in the ",(0,a.kt)("strong",{parentName:"li"},"Changelog")," section.")),(0,a.kt)("h2",{id:"considerations-for-name-changes"},"Considerations for name changes"),(0,a.kt)("p",null,"You're not able to change the name of a capture or materialization after you create it.\nYou're also unable to manually change the names of collections;\nhowever, connector updates can cause collection names to change, as discussed above."),(0,a.kt)("p",null,"It ",(0,a.kt)("em",{parentName:"p"},"is")," possible to manually change the names of destination resources (tables or analogous data storage units to which collections are written) when editing a materialization.\nYou should avoid doing so unless you want to route future data to a new location."),(0,a.kt)("p",null,"If you do this, a new resource with that name will be created and the old resource will continue to exist.\nHistorical data will may not be backfilled into the new resource, depending on the connector used."))}p.isMDXComponent=!0}}]);