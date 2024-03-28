"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5623],{33209:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=o(74848),t=o(28453);const i={sidebar_position:5},s="Organizing a Flow catalog",l={id:"reference/organizing-catalogs",title:"Organizing a Flow catalog",description:"This page is outdated. It does not reflect the current state of the Flow web application and the",source:"@site/docs/reference/organizing-catalogs.md",sourceDirName:"reference",slug:"/reference/organizing-catalogs",permalink:"/pr-preview/pr-1428/reference/organizing-catalogs",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/organizing-catalogs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Working with logs and statistics",permalink:"/pr-preview/pr-1428/reference/working-logs-stats"}},r={},c=[{value:"<code>import</code>",id:"import",level:3},{value:"Example: Organizing collections",id:"example-organizing-collections",level:4},{value:"Example: Separate environments",id:"example-separate-environments",level:4},{value:"Example: Cross-team collaboration",id:"example-cross-team-collaboration",level:4},{value:"Global namespace",id:"global-namespace",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"organizing-a-flow-catalog",children:"Organizing a Flow catalog"}),"\n",(0,a.jsx)(n.admonition,{title:"Beta",type:"caution",children:(0,a.jsxs)(n.p,{children:["This page is outdated. It does not reflect the current state of the Flow web application and the\n",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1428/reference/authentication#authorizing-users-and-authenticating-with-flow",children:"authorization model"})," used to share\nentities in Flow catalogs. Updates are coming soon."]})}),"\n",(0,a.jsxs)(n.p,{children:["It's not necessary to store the entire catalog spec in one YAML file, and Flow provides the flexibility to reference other files, which can be managed independently.\nYou can leverage this capability when you ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/flowctl",children:"run Flow from the command line"}),". You may want to do so if:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You want to ensure shared collections remain easy to find"}),"\n",(0,a.jsx)(n.li,{children:"You use group data that's managed by different teams"}),"\n",(0,a.jsx)(n.li,{children:"You could benefit from DRY factoring things that are different per environment"}),"\n",(0,a.jsx)(n.li,{children:"You need to manage sensitive credentials separately from materialization definitions"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"import",children:(0,a.jsx)(n.code,{children:"import"})}),"\n",(0,a.jsxs)(n.p,{children:["Flow's ",(0,a.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/import",children:(0,a.jsx)(n.code,{children:"import"})})," directive can help you easily handle all of these scenarios while keeping your catalogs well organized. Each catalog spec file may import any number of other files, and each import may refer to either relative or an absolute URL."]}),"\n",(0,a.jsxs)(n.p,{children:["When you use ",(0,a.jsx)(n.code,{children:"import"})," in a catalog spec, you're conceptually bringing the entirety of another catalog \u2014 as well as the schemas and typescript files it uses \u2014 into your catalog. Imports are also transitive, so when you import another catalog, you're ",(0,a.jsx)(n.em,{children:"also"})," importing everything that other catalog has imported. This allows you to keep your catalogs organized, and is flexible enough to support collaboration between separate teams and organizations."]}),"\n",(0,a.jsx)(n.p,{children:"Perhaps the best way of explaining this is with some examples."}),"\n",(0,a.jsx)(n.h4,{id:"example-organizing-collections",children:"Example: Organizing collections"}),"\n",(0,a.jsx)(n.p,{children:"Let's look at a relatively simple case in which you want to organize your collections into multiple catalog files. Say you work for Acme Corp on the team that's introducing Flow. You might start with the collections and directory structure below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"acme/customers/customerInfo\nacme/products/info/manufacturers\nacme/products/info/skus\nacme/products/inventory\nacme/sales/pending\nacme/sales/complete\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"acme\n\u251c\u2500\u2500 flow.yaml\n\u251c\u2500\u2500 customers\n\u2502   \u251c\u2500\u2500 flow.ts\n\u2502   \u251c\u2500\u2500 flow.yaml\n\u2502   \u2514\u2500\u2500 schemas.yaml\n\u251c\u2500\u2500 products\n\u2502   \u251c\u2500\u2500 flow.yaml\n\u2502   \u251c\u2500\u2500 info\n\u2502   \u2502   \u251c\u2500\u2500 flow.ts\n\u2502   \u2502   \u251c\u2500\u2500 flow.yaml\n\u2502   \u2502   \u2514\u2500\u2500 schemas.yaml\n\u2502   \u2514\u2500\u2500 inventory\n\u2502       \u251c\u2500\u2500 flow.ts\n\u2502       \u251c\u2500\u2500 flow.yaml\n\u2502       \u2514\u2500\u2500 schemas.yaml\nschemas.yaml\n\u2514\u2500\u2500 sales\n    \u251c\u2500\u2500 flow.ts\n    \u251c\u2500\u2500 flow.yaml\n    \u2514\u2500\u2500 schemas.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It's immediately clear where each of the given collections is defined, since the directory names match the path segments in the collection names. This is not required by the",(0,a.jsx)(n.code,{children:"flowctl"})," CLI, but is strongly recommended, since it makes your catalogs more readable and maintainable. Each directory contains a catalog spec (",(0,a.jsx)(n.code,{children:"flow.yaml"}),"), which will import all of the catalogs from child directories."]}),"\n",(0,a.jsxs)(n.p,{children:["So, the top-level catalog spec, ",(0,a.jsx)(n.code,{children:"acme/flow.yaml"}),", might look something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"import:\n  - customers/flow.yaml\n  - products/flow.yaml\n  - sales/flow.yaml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This type of layout has a number of other advantages. During development, you can easily work with a subset of collections using, for example, ",(0,a.jsx)(n.code,{children:"flowctl test --source acme/products/flow.yaml"})," to run only the tests for product-related collections. It also allows other imports to be more granular. For example, you might want a derivation under ",(0,a.jsx)(n.code,{children:"sales"})," to read from ",(0,a.jsx)(n.code,{children:"acme/products/info"}),". Since ",(0,a.jsx)(n.code,{children:"info"})," has a separate catalog spec, ",(0,a.jsx)(n.code,{children:"acme/sales/flow.yaml"})," can import ",(0,a.jsx)(n.code,{children:"acme/products/info/flow.yaml"})," without creating a dependency on the ",(0,a.jsx)(n.code,{children:"inventory"})," collection."]}),"\n",(0,a.jsx)(n.h4,{id:"example-separate-environments",children:"Example: Separate environments"}),"\n",(0,a.jsx)(n.p,{children:"It's common to use separate environments for tiers like development, staging, and production. Flow catalog specs often necessarily include endpoint configuration for external systems that will hold materialized views. Let's say you want your production environment to materialize views to Snowflake, but you want to develop locally on SQLite. We might modify the Acme example slightly to account for this."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"acme\n\u251c\u2500\u2500 dev.flow.yaml\n\u251c\u2500\u2500 prod.flow.yaml\n... the remainder is the same as above\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Each of the top-level catalog specs might import all of the collections and define an endpoint called ",(0,a.jsx)(n.code,{children:"ourMaterializationEndpoint"})," that points to the desired system. The ",(0,a.jsx)(n.code,{children:"import"})," block might be the same for each system, but each file may use a different configuration for the endpoint, which is used by any materializations that reference it."]}),"\n",(0,a.jsx)(n.p,{children:"Our configuration for our development environment will look like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="dev.flow.yaml"',children:"  import:\n  - customers/flow.yaml\n  - products/flow.yaml\n  - sales/flow.yaml\n\n  ourMaterializationEndpoint:\n    # dev.flow.yaml\n    sqlite:\n      path: dev-materializations.db\n"})}),"\n",(0,a.jsx)(n.p,{children:"While production will look like:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="prod.flow.yaml"',children:"import:\n  - customers/flow.yaml\n  - products/flow.yaml\n  - sales/flow.yaml\n\nendpoints:\n    snowflake:\n      account: acme_production\n      role: admin\n      schema: snowflake.com/acmeProd\n      user: importantAdmin\n      password: abc123\n      warehouse: acme_production\n"})}),"\n",(0,a.jsx)(n.p,{children:"When we test the draft locally, we'll work with dev.flow.yaml, but we'll publish prod.flow.yaml."}),"\n",(0,a.jsx)(n.p,{children:"Everything will continue to work because in our development environment we'll be binding collections to our local SQLite DB and in production we'll use Snowflake."}),"\n",(0,a.jsx)(n.h4,{id:"example-cross-team-collaboration",children:"Example: Cross-team collaboration"}),"\n",(0,a.jsx)(n.p,{children:"When working across teams, it's common for one team to provide a data product for another to reference and use. Flow is designed for cross-team collaboration, allowing teams and users to reference each other's full catalog or schema.  "}),"\n",(0,a.jsx)(n.p,{children:"Again using the Acme example, let's imagine we have two teams. Team Web is responsible for Acme's website, and Team User is responsible for providing a view of Acme customers that's always up to date. Since Acme wants a responsive site that provides a good customer experience, Team Web needs to pull the most up-to-date information from Team User at any point. Let's look at Team User's collections:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="teamUser.flow.yaml"',children:"import:\n    - userProfile.flow.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"Which references:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="userProfile.flow.yaml"',children:'collection:\n    userProfile:\n        schema:\n            -"/userProfile/schema"\n        key:\n            [/id]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Team User references files in their directory, which they actively manage in both their import and schema sections. If Team Web wants to access user data (and they have access), they can use a relative path or a URL-based path given that Team User publishes their data to a URL for access:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="teamWeb.flow.yaml"',children:"import:\n    -http://www.acme.com/teamUser#userProfile.flow.yaml\n    -webStuff.flow.yaml\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now Team Web has direct access to collections (referenced by their name) to build derived collections on top of. They can also directly import schemas:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="webStuff.flow.yaml"',children:"collection:\n    webStuff:\n        schema:\n            -http://acme.com/teamUser#userProfile/#schema\n        key:\n            [/id]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"global-namespace",children:"Global namespace"}),"\n",(0,a.jsxs)(n.p,{children:["Every Flow collection has a name, and that name ",(0,a.jsx)(n.em,{children:"must"})," be unique within a running Flow system. Flow collections should be thought of as existing within a global namespace. Keeping names globally unique makes it easy to import catalogs from other teams, or even other organizations, without having naming conflicts or ambiguities."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, imagine your catalog for the inside sales team has a collection just named ",(0,a.jsx)(n.code,{children:"customers"}),". If you later try to import a catalog from the outside sales team that also contains a ",(0,a.jsx)(n.code,{children:"customers"})," collection, \ud83d\udca5 there's a collision. A better collection name would be ",(0,a.jsx)(n.code,{children:"acme/inside-sales/customers"}),". This allows a catalog to include customer data from separate teams, and also separate organizations."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/pr-preview/pr-1428/concepts/#namespace",children:"Learn more about the Flow namespace."})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var a=o(96540);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);