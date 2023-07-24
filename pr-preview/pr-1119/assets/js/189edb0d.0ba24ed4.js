"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:3},i="Create a derivation with flowctl",l={unversionedId:"guides/flowctl/create-derivation",id:"guides/flowctl/create-derivation",title:"Create a derivation with flowctl",description:"Once you're familiar with creating a basic Data Flow, you can take things a step further",source:"@site/docs/guides/flowctl/create-derivation.md",sourceDirName:"guides/flowctl",slug:"/guides/flowctl/create-derivation",permalink:"/pr-preview/pr-1119/guides/flowctl/create-derivation",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/guides/flowctl/create-derivation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Edit a draft created in the web app",permalink:"/pr-preview/pr-1119/guides/flowctl/edit-draft-from-webapp"},next:{title:"Troubleshoot a task with flowctl",permalink:"/pr-preview/pr-1119/guides/flowctl/troubleshoot-task"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"GitPod Setup",id:"gitpod-setup",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Add a SQL derivation",id:"add-a-sql-derivation",level:2},{value:"Preview the derivation",id:"preview-the-derivation",level:2},{value:"Publish the derivation from GitPod",id:"publish-the-derivation-from-gitpod",level:2},{value:"Updating an existing derivation",id:"updating-an-existing-derivation",level:2},{value:"Transform with a TypeScript module",id:"transform-with-a-typescript-module",level:2},{value:"Using GitPod",id:"using-gitpod",level:3},{value:"Using local terminal",id:"using-local-terminal",level:3},{value:"Publish the derivation in local terminal",id:"publish-the-derivation-in-local-terminal",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-derivation-with-flowctl"},"Create a derivation with flowctl"),(0,o.kt)("p",null,"Once you're familiar with creating a basic ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/concepts/#essential-concepts"},"Data Flow"),", you can take things a step further\nand transform your data with ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/concepts/derivations"},"derivations"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"derivation")," is a kind of Flow collection that results from the transformation of one or more other collections.\nThis transformed stream of data keeps the order of the source data intact,\nand can then be ",(0,o.kt)("strong",{parentName:"p"},"materialized")," to an outside system or further transformed with another derivation.\nWhen you master derivations, you unlock the full flexibility and power of your Data Flows."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A Flow account and access to the web app.\nIf you don't have an account yet, ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev"},"go to the web app")," to register for a free trial.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An existing Flow ",(0,o.kt)("strong",{parentName:"p"},"collection"),". Typically, you create this through a ",(0,o.kt)("strong",{parentName:"p"},"capture")," in the Flow web application.\nIf you need help, see the ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/guides/create-dataflow"},"guide to create a Data Flow"),"."))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"To create a derivation, navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/collections"},"Collections")," page in Flow, click on the ",(0,o.kt)("strong",{parentName:"p"},"NEW TRANSFORMATION")," button. This brings up a ",(0,o.kt)("strong",{parentName:"p"},"Derive A New Collection")," pop-up window."),(0,o.kt)("p",null,"Deriving a new collection consists of three steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Select source collections: In the ",(0,o.kt)("strong",{parentName:"p"},"Available Collections")," dropdown, select the collection you want to derive.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Transformation Language: There are two language options to select: ",(0,o.kt)("strong",{parentName:"p"},"SQL")," and ",(0,o.kt)("strong",{parentName:"p"},"TypeScript"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Write transformations: Give your derived collection a name. Then click the ",(0,o.kt)("strong",{parentName:"p"},"PROCEED TO GITPOD")," button."))),(0,o.kt)("p",null,"This opens up GitPod in another tab, where an environment is already set up for you."),(0,o.kt)("h2",{id:"gitpod-setup"},"GitPod Setup"),(0,o.kt)("p",null,"Flow integrates with GitPod so you can leverage the full capabilities of SQLite. GitPod is free to use. It is an online Integrated Development Environment (IDE) that provides a complete development environment that can be accessed through a web browser, with all the necessary tools and dependencies pre-installed."),(0,o.kt)("p",null,"In GitPod, you will set up your derivation's schema specs in the ",(0,o.kt)("strong",{parentName:"p"},"flow.yaml")," file. The tutorial ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/derivations/#tutorial"},"here")," walks through several examples on how to fill out ",(0,o.kt)("strong",{parentName:"p"},"flow.yaml")," depending on your use case."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"When connecting to GitPod, you will have already authenticated Flow, but if you leave GitPod opened for too long, you may have to reauthenticate Flow."),(0,o.kt)("p",null,"To authorize flowctl:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev/admin/api"},"CLI-API tab of the web app")," and copy your access token.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"flowctl auth token --token <paste-token-here>")," on the Terminal tab in GitPod."))),(0,o.kt)("h2",{id:"add-a-sql-derivation"},"Add a SQL derivation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Flow UI ",(0,o.kt)("strong",{parentName:"p"},"Derive A New Collection")," screen, select ",(0,o.kt)("strong",{parentName:"p"},"SQL")," as your transformation language.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In GitPod, locate the specification YAML file for the collection you want to transform."),(0,o.kt)("p",{parentName:"li"},"In your working directory, you'll see a top-level file called ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml"),".\nWithin a subdirectory that shares the name of your Data Flow, you'll find a second ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," \u2014 this contains the collection specification.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the specification file ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml"),"."),(0,o.kt)("p",{parentName:"li"},"It will look similar to the following. (This example uses the default collection from the Hello World test capture, available in the web app):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"collections:\n   #The Hello World capture outputs a collection called `greetings`.\n   namespace/data-flow-name/greetings:\n      schema:\n         properties:\n         count:\n            type: integer\n         message:\n            type: string\n         required:\n         - count\n         - message\n         type: object\n      key:\n         - /count\n   derive:\n      using:\n         sqlite:\n            migrations:\n               - greetings.migrations.0.sql\n      transforms:\n           #The transform name can be anything you'd like.\n         - name: greetings-by-dozen\n           #Paste the full name of the source collection.\n           source: namespace/data-flow-name/greetings\n           #The lambda holds your SQL transformation statement(s). You can either place your SQL directly here or in the separate lambda file.\n           lambda: greetings.lambda.greetings-by-dozen.sql\n")),(0,o.kt)("p",{parentName:"li"},"Fill out the schema specs, key, sqlite migration, transform name, source, and lambda. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/derivations/#tutorial"},"This tutorial")," walks through several examples on how to fill out ",(0,o.kt)("strong",{parentName:"p"},"flow.yaml")," depending on your use case."),(0,o.kt)("p",{parentName:"li"},"See also ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/derivations/#sql-lambdas"},"Lambdas")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/derivations/#migrations"},"Migrations")," for additional details."),(0,o.kt)("p",{parentName:"li"},"Your SQL statements are evaluated with each source collection document. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/derivations/#sqlite"},"Here")," is an example of what the output document from a derivation would look like given an input document and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/derivations/#sql-lambdas"},"SQL lambda"),"."))),(0,o.kt)("h2",{id:"preview-the-derivation"},"Preview the derivation"),(0,o.kt)("p",null,"Type this command on the Terminal tab in GitPod to ",(0,o.kt)("strong",{parentName:"p"},"preview")," the derivation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl preview --source flow.yaml --interval 200ms | jq -c 'del(._meta)'\n")),(0,o.kt)("h2",{id:"publish-the-derivation-from-gitpod"},"Publish the derivation from GitPod"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Publish")," the catalog."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl catalog publish --source flow.yaml\n")),(0,o.kt)("h2",{id:"updating-an-existing-derivation"},"Updating an existing derivation"),(0,o.kt)("p",null,"Derivations are applied on a go-forward basis only."),(0,o.kt)("p",null,"If you would like to make an update to an existing derivation (for example, adding columns to the derived collection), you can add a new transform by changing the name of your existing transform to a new name, and at the same time updating your lambda."),(0,o.kt)("p",null,"From the platform's perspective, this is equivalent to deleting the old transform and adding a new one. This will backfill over the source collection again with the updated SQL statement."),(0,o.kt)("h2",{id:"transform-with-a-typescript-module"},"Transform with a TypeScript module"),(0,o.kt)("h3",{id:"using-gitpod"},"Using GitPod"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Flow UI ",(0,o.kt)("strong",{parentName:"p"},"Derive A New Collection")," screen, select ",(0,o.kt)("strong",{parentName:"p"},"TypeScript")," as your transformation language.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In GitPod, locate the .ts file to put in your transformation logic. It will look similar to the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IDerivation, Document, Register, GreetingsByDozenSource } from 'flow/namespace/data-flow-name/dozen-greetings';\n\n// Implementation for derivation flow.yaml#/collections/namespace~1data-flow-name~1dozen-greetings/derivation.\nexport class Derivation implements IDerivation {\n   greetingsByDozenPublish(\n      _source: GreetingsByDozenSource,\n      _register: Register,\n      _previous: Register,\n   ): Document[] {\n      throw new Error(\"Not implemented\");\n   }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow these steps to ",(0,o.kt)("a",{parentName:"p",href:"#preview-the-derivation"},"preview")," and ",(0,o.kt)("a",{parentName:"p",href:"#publish-the-derivation-from-gitpod"},"publish")," your derivation."))),(0,o.kt)("h3",{id:"using-local-terminal"},"Using local terminal"),(0,o.kt)("p",null,"If you are writing a derivation using TypeScript from your local terminal rather than GitPod, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate the TypeScript module from the newly updated specification file."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl typescript generate --source ./path-to/your-file/flow.yaml\n")),(0,o.kt)("p",{parentName:"li"},"The TypeScript file you named has been created and stubbed out.\nYou only need to add the function body.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the new TypeScript module. It will look similar to the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IDerivation, Document, Register, GreetingsByDozenSource } from 'flow/namespace/data-flow-name/dozen-greetings';\n\n// Implementation for derivation flow.yaml#/collections/namespace~1data-flow-name~1dozen-greetings/derivation.\nexport class Derivation implements IDerivation {\n   greetingsByDozenPublish(\n      _source: GreetingsByDozenSource,\n      _register: Register,\n      _previous: Register,\n   ): Document[] {\n      throw new Error(\"Not implemented\");\n   }\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove the underscore in front of ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and fill out the function body as required for your required transformation.\nFor more advanced transforms, you may need to activate ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"previous")," by removing their underscores.\n",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/concepts/derivations"},"Learn more about derivations and see examples.")),(0,o.kt)("p",{parentName:"li"},"   This simple example rounds the ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," field to the nearest dozen."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { IDerivation, Document, Register, GreetingsByDozenSource } from 'flow/namespace/data-flow-name/dozen-greetings';\n\n// Implementation for derivation namespace/data-flow-name/flow.yaml#/collections/namespace~1data-flow-name~1dozen-greetings/derivation.\nexport class Derivation implements IDerivation {\n   greetingsByDozenPublish(\n      source: GreetingsByDozenSource,\n      _register: Register,\n      _previous: Register,\n   ): Document[] {\n       let count = source.count;\n       let dozen = count / 12;\n       let dozenround = Math.floor(dozen)\n       let out = {\n       dozens: dozenround,\n       ...source\n     }\n     return [out]\n  }\n}\n")),(0,o.kt)("p",{parentName:"li"},"   Save the file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Optional: add a test to the ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," file containing your collections.\nThis helps you verify that your data is transformed correctly."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'collections:\n   {...}\ntests:\n   namespace/data-flow-name/divide-test:\n      - ingest:\n         collection: namespace/data-flow-name/greetings\n         documents:\n            - { count: 13, message: "Hello #13" }\n      - verify:\n         collection: namespace/data-flow-name/dozen-greetings\n         documents:\n            - { dozens: 1, count: 13, message: "Hello #13"}\n')),(0,o.kt)("p",{parentName:"li"},"   ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/concepts/tests"},"Learn about tests.")))),(0,o.kt)("h2",{id:"publish-the-derivation-in-local-terminal"},"Publish the derivation in local terminal"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Author")," your draft. This adds the changes you made locally to the draft on the Estuary servers:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl draft author --source flow.yaml\n")),(0,o.kt)("p",{parentName:"li"},"Note that the file source is the top level ",(0,o.kt)("inlineCode",{parentName:"p"},"flow.yaml")," in your working directory, not the file you worked on.\nThis file ",(0,o.kt)("inlineCode",{parentName:"p"},"imports")," all others in the local draft, so your changes will be included.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run generic tests, as well as your custom tests, if you created any."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl draft test\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Publish")," the draft to the catalog."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"flowctl draft publish\n")))),(0,o.kt)("p",null,"The derivation you created is now live and ready for further use.\nYou can access it from the web application and ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-1119/guides/create-dataflow#create-a-materialization"},"materialize it to a destination"),",\njust as you would any other Flow collection."))}u.isMDXComponent=!0}}]);