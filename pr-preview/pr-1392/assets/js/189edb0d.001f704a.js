"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5352],{31566:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(74848),r=i(28453);const o={sidebar_position:3},s="Create a derivation with flowctl",l={id:"guides/flowctl/create-derivation",title:"Create a derivation with flowctl",description:"Once you're familiar with creating a basic Data Flow, you can take things a step further",source:"@site/docs/guides/flowctl/create-derivation.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/create-derivation",permalink:"/pr-preview/pr-1392/guides/flowctl/create-derivation",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/create-derivation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Edit a draft created in the web app",permalink:"/pr-preview/pr-1392/guides/flowctl/edit-draft-from-webapp"},next:{title:"Troubleshoot a task with flowctl",permalink:"/pr-preview/pr-1392/guides/flowctl/troubleshoot-task"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get started with GitPod",id:"get-started-with-gitpod",level:2},{value:"Add a SQL derivation in GitPod",id:"add-a-sql-derivation-in-gitpod",level:2},{value:"Add a TypeScript derivation in GitPod",id:"add-a-typescript-derivation-in-gitpod",level:2},{value:"Create a derivation locally",id:"create-a-derivation-locally",level:2},{value:"Updating an existing derivation",id:"updating-an-existing-derivation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"create-a-derivation-with-flowctl",children:"Create a derivation with flowctl"}),"\n",(0,t.jsxs)(n.p,{children:["Once you're familiar with creating a basic ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/#essential-concepts",children:"Data Flow"}),", you can take things a step further\nand transform your data with ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/derivations",children:"derivations"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"derivation"})," is a kind of Flow collection that results from the transformation of one or more other collections.\nThis transformed stream of data keeps the order of the source data intact,\nand can then be ",(0,t.jsx)(n.strong,{children:"materialized"})," to an outside system or further transformed with another derivation.\nWhen you master derivations, you unlock the full flexibility and power of Flow."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A Flow account and access to the web app.\nIf you don't have an account yet, ",(0,t.jsx)(n.a,{href:"https://dashboard.estuary.dev",children:"go to the web app"})," to register for free."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An existing Flow ",(0,t.jsx)(n.strong,{children:"collection"}),". Typically, you create this through a ",(0,t.jsx)(n.strong,{children:"capture"})," in the Flow web application.\nIf you need help, see the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/guides/create-dataflow",children:"guide to create a Data Flow"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A development environment to work with flowctl. Choose between:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.gitpod.io/",children:"GitPod"}),", the cloud development environment integrated with Flow.\nGitPod comes ready for derivation writing, with stubbed out files and flowctl installed. You'll need a GitLab, GitHub, or BitBucket account to log in."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Your local development environment. ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/getting-started/installation#get-started-with-the-flow-cli",children:"Install flowctl locally"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-started-with-gitpod",children:"Get started with GitPod"}),"\n",(0,t.jsx)(n.p,{children:"You'll write your derivation using GitPod, a cloud development environment integrated in the Flow web app."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Navigate to the ",(0,t.jsx)(n.a,{href:"https://dashboard.estuary.dev/collections",children:"Collections"})," page in Flow."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on the ",(0,t.jsx)(n.strong,{children:"New Transformation"})," button."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Derive A New Collection"})," pop-up window appears."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Available Collections"})," dropdown, select the collection you want to use as the source."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if your organization is ",(0,t.jsx)(n.code,{children:"acmeCo"}),", you might choose the ",(0,t.jsx)(n.code,{children:"acmeCo/resources/anvils"})," collection."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set the transformation language to either ",(0,t.jsx)(n.strong,{children:"SQL"})," and ",(0,t.jsx)(n.strong,{children:"TypeScript"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"SQL transformations can be a more approachable place to start if you're new to derivations.\nTypeScript transformations can provide more resiliency against failures through static type checking."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Give your derivation a name. From the dropdown, choose the name of your catalog prefix and append a unique name, for example ",(0,t.jsx)(n.code,{children:"acmeCo/resources/anvil-status."})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Proceed to GitPod"})," to create your development environment. Sign in with one of the available account types."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"New Workspace"})," screen, keep the ",(0,t.jsx)(n.strong,{children:"Context URL"})," option selected and click ",(0,t.jsx)(n.strong,{children:"Continue."})]}),"\n",(0,t.jsx)(n.p,{children:"A GitPod development environment opens.\nA stubbed-out derivation with a transformation has already been created for you in the language you chose. Next, you'll locate and open the source files."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Each slash-delimited prefix of your derivation name has become a folder. Open the nested folders to find the ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file with the derivation specification."]}),"\n",(0,t.jsxs)(n.p,{children:["Following the example above, you'd open the folders called ",(0,t.jsx)(n.code,{children:"acmeCo"}),", then ",(0,t.jsx)(n.code,{children:"resources"})," to find the correct ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"The file contains a placeholder collection specification and schema for the derivation."}),"\n",(0,t.jsx)(n.p,{children:"In the same folder, you'll also find supplementary TypeScript or SQL files you'll need for your transformation."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#add-a-sql-derivation-in-gitpod",children:"Continue with SQL"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"#add-a-typescript-derivation-in-gitpod",children:"Continue with TypeScript"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Authentication",type:"info",children:[(0,t.jsx)(n.p,{children:"When you first connect to GitPod, you will have already authenticated Flow, but if you leave GitPod opened for too long, you may have to reauthenticate Flow. To do this:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://dashboard.estuary.dev/admin/api",children:"CLI-API tab of the web app"})," and copy your access token."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"flowctl auth token --token <paste-token-here>"})," in the GitPod terminal."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"add-a-sql-derivation-in-gitpod",children:"Add a SQL derivation in GitPod"}),"\n",(0,t.jsxs)(n.p,{children:["If you chose ",(0,t.jsx)(n.strong,{children:"SQL"})," as your transformation language, follow these steps."]}),"\n",(0,t.jsxs)(n.p,{children:["Along with the derivation's ",(0,t.jsx)(n.code,{children:"flow.yaml"})," you found in the previous steps, there are two other files:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"lambda"})," file. This is where you'll write your first SQL transformation.\nIts name follows the pattern ",(0,t.jsx)(n.code,{children:"derivation-name.lambda.source-collection-name.sql"}),".\nUsing the example above, it'd be called ",(0,t.jsx)(n.code,{children:"anvil-status.lambda.anvils.sql"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"migrations"})," file. ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/derivations#migrations",children:"Migrations"})," allow you to leverage other features of the sqlite database that backs your derivation by creating tables, indices, views, and more.\nIts name follows the pattern ",(0,t.jsx)(n.code,{children:"derivation-name.migration.0.sql"}),".\nUsing the example above, it'd be called ",(0,t.jsx)(n.code,{children:"anvil-status.migration.0.sql"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file for your derivation. It looks something like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/resources/anvil-status:\n    schema:\n      properties:\n        your_key:\n          type: string\n        required:\n          - your_key\n      type: object\n    key:\n      - /your_key\n    derive:\n      using:\n        sqlite:\n          migrations:\n            - anvil-status.migration.0.sql\n      transforms:\n        - name: anvils\n          source: acmeCo/resources/anvils\n          shuffle: any\n          lambda: anvil-status.lambda.anvils.sql\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note the stubbed out schema and key."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Write the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/schemas",children:"schema"})," you'd like your derivation to conform to and specify its ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/collections#keys",children:"collection key"}),". Keep in mind:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The source collection's schema."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The transformation required to get from the source schema to the new schema."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Give the transform a unique ",(0,t.jsx)(n.code,{children:"name"})," (by default, it's the name of the source collection)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the lambda file, write your SQL transformation."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Tip",type:"info",children:[(0,t.jsx)(n.p,{children:"For help writing your derivation, start with these examples:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/getting-started/tutorials/continuous-materialized-view",children:"Continuous materialized view tutorial"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/derivations#tutorial",children:"Acme Bank examples"})}),"\n"]}),(0,t.jsxs)(n.p,{children:["The main ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/derivations",children:"derivations page"})," includes many other examples and in-depth explanations of how derivations work."]})]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If necessary, open the migration file and write your migration."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Preview the derivation locally."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"flowctl preview --source flow.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the preview output appears as expected, ",(0,t.jsx)(n.strong,{children:"publish"})," the derivation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"flowctl catalog publish --source flow.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The derivation you created is now live and ready for further use.\nYou can access it from the web application and ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/guides/create-dataflow#create-a-materialization",children:"materialize it to a destination"}),",\njust as you would any other Flow collection."]}),"\n",(0,t.jsx)(n.h2,{id:"add-a-typescript-derivation-in-gitpod",children:"Add a TypeScript derivation in GitPod"}),"\n",(0,t.jsxs)(n.p,{children:["If you chose ",(0,t.jsx)(n.strong,{children:"TypeScript"})," as your transformation language, follow these steps."]}),"\n",(0,t.jsxs)(n.p,{children:["Along with the derivation's ",(0,t.jsx)(n.code,{children:"flow.yaml"})," you found in the previous steps, there's another file for the TypeScript transformation.\nIt follows the naming convention ",(0,t.jsx)(n.code,{children:"derivation-name.ts"}),".\nUsing the example above, it'd be called ",(0,t.jsx)(n.code,{children:"anvil-status.ts"}),"."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file for your derivation. It looks something like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"collections:\n  acmeCo/resources/anvil-status:\n    schema:\n      properties:\n        your_key:\n          type: string\n        required:\n          - your_key\n      type: object\n    key:\n      - /your_key\n    derive:\n      using:\n        typescript:\n          module: anvil-status.ts\n      transforms:\n        - name: anvils\n        source: acmeCo/resources/anvils\n        shuffle: any\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note the stubbed out schema and key."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Write the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/schemas",children:"schema"})," you'd like your derivation to conform to and specify the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/collections#keys",children:"collection key"}),". Keep in mind:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The source collection's schema."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The transformation required to get from the source schema to the new schema."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Give the transform a unique ",(0,t.jsx)(n.code,{children:"name"})," (by default, it's the name of the source collection)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In the TypeScript file, write your transformation."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Tip",type:"info",children:[(0,t.jsxs)(n.p,{children:["For help writing a TypeScript derivation, start with ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/derivations#current-account-balances",children:"this example"}),"."]}),(0,t.jsxs)(n.p,{children:["The main ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/derivations",children:"derivations page"})," includes many other examples and in-depth explanations of how derivations work."]})]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Preview the derivation locally."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"flowctl preview --source flow.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the preview output appears how you'd expect, ",(0,t.jsx)(n.strong,{children:"publish"})," the derivation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"flowctl catalog publish --source flow.yaml\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The derivation you created is now live and ready for further use.\nYou can access it from the web application and ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/guides/create-dataflow#create-a-materialization",children:"materialize it to a destination"}),",\njust as you would any other Flow collection."]}),"\n",(0,t.jsx)(n.h2,{id:"create-a-derivation-locally",children:"Create a derivation locally"}),"\n",(0,t.jsx)(n.p,{children:"Creating a derivation locally is largely the same as using GitPod, but has some extra steps. Those extra steps are explained here, but you'll find more useful context in the sections above."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Authorize flowctl."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://dashboard.estuary.dev/admin/api",children:"CLI-API tab of the web app"})," and copy your access token."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"flowctl auth token --token <paste-token-here>"})," in your local environment."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Locate the source collection for your derivation."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Check the web app's ",(0,t.jsx)(n.strong,{children:"Collections"}),".\nAll published entities to which you have access are listed and can be searched."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"flowctl catalog list --collections"}),". This command returns a complete list of collections to which you have access.\nYou can refine by specifying a ",(0,t.jsx)(n.code,{children:"--prefix"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Pull the source collection locally using the full collection name."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"flowctl catalog pull-specs --name acmeCo/resources/anvils\n"})}),"\n",(0,t.jsx)(n.p,{children:"The source files are written to your current working directory."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Each slash-delimited prefix of your collection name has become a folder. Open the nested folders to find the ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file with the collection specification."]}),"\n",(0,t.jsxs)(n.p,{children:["Following the example above, you'd open the folders called ",(0,t.jsx)(n.code,{children:"acmeCo"}),", then ",(0,t.jsx)(n.code,{children:"resources"})," to find the correct ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"The file contains the source collection specification and schema."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the derivation as a second collection in the ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Write the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/schemas",children:"schema"})," you'd like your derivation to conform to and specify the ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/concepts/collections#keys",children:"collection key"}),". Reference the source collection's schema, and keep in mind the transformation required to get from the source schema to the new schema."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ",(0,t.jsx)(n.code,{children:"derive"})," stanza. See examples for ",(0,t.jsx)(n.a,{href:"#add-a-sql-derivation-in-gitpod",children:"SQL"})," and ",(0,t.jsx)(n.a,{href:"#add-a-sql-derivation-in-gitpod",children:"TypeScript"})," above. Give your transform a a unique name."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Stub out the SQL or TypeScript files for your transform."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"flowctl generate --source flow.yaml\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Locate the generated file, likely in the same subdirectory as the ",(0,t.jsx)(n.code,{children:"flow.yaml"})," file you've been working in."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Write your transformation."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Preview the derivation locally."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"flowctl preview --source flow.yaml\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["If the preview output appears how you'd expect, ",(0,t.jsx)(n.strong,{children:"publish"})," the derivation."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"flowctl catalog publish --source flow.yaml\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The derivation you created is now live and ready for further use.\nYou can access it from the web application and ",(0,t.jsx)(n.a,{href:"/pr-preview/pr-1392/guides/create-dataflow#create-a-materialization",children:"materialize it to a destination"}),",\njust as you would any other Flow collection."]}),"\n",(0,t.jsx)(n.h2,{id:"updating-an-existing-derivation",children:"Updating an existing derivation"}),"\n",(0,t.jsx)(n.p,{children:"Derivations are applied on a go-forward basis only."}),"\n",(0,t.jsx)(n.p,{children:"If you would like to make an update to an existing derivation (for example, adding columns to the derived collection), you can add a new transform by changing the name of your existing transform to a new name, and at the same time updating your lambda or TypeScript module."}),"\n",(0,t.jsx)(n.p,{children:"From the Flow's perspective, this is equivalent to deleting the old transform and adding a new one. This will backfill over the source collection again with the updated SQL statement."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);