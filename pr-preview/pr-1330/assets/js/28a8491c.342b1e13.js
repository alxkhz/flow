(self.webpackChunksite=self.webpackChunksite||[]).push([[9882],{1504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7294),r=a(2764);r.Z.initialize({startOnLoad:!0});const o=e=>{let{chart:t}=e;return(0,n.useEffect)((()=>{r.Z.contentLoaded()}),[]),n.createElement("div",{className:"mermaid"},t)}},8609:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(1504);const i={sidebar_position:1},l="Create your first dataflow with Amazon S3 and Snowflake",s={unversionedId:"getting-started/tutorials/dataflow-s3-snowflake",id:"getting-started/tutorials/dataflow-s3-snowflake",title:"Create your first dataflow with Amazon S3 and Snowflake",description:"In this tutorial, you'll create your first complete Data Flow with Estuary Flow using publicly available data.",source:"@site/docs/getting-started/tutorials/dataflow-s3-snowflake.md",sourceDirName:"getting-started/tutorials",slug:"/getting-started/tutorials/dataflow-s3-snowflake",permalink:"/pr-preview/pr-1330/getting-started/tutorials/dataflow-s3-snowflake",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/tutorials/dataflow-s3-snowflake.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Flow tutorials",permalink:"/pr-preview/pr-1330/getting-started/tutorials/"},next:{title:"Create a real-time materialized view in PostgreSQL",permalink:"/pr-preview/pr-1330/getting-started/tutorials/continuous-materialized-view"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"The data",id:"the-data",level:4},{value:"Estuary Flow",id:"estuary-flow",level:4},{value:"Capture Citi Bike data from S3",id:"capture-citi-bike-data-from-s3",level:2},{value:"Prepare Snowflake to use with Flow",id:"prepare-snowflake-to-use-with-flow",level:2},{value:"Materialize your Flow collection to Snowflake",id:"materialize-your-flow-collection-to-snowflake",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Want to learn more?",id:"want-to-learn-more",level:4}],m={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-your-first-dataflow-with-amazon-s3-and-snowflake"},"Create your first dataflow with Amazon S3 and Snowflake"),(0,r.kt)("p",null,"In this tutorial, you'll create your first complete ",(0,r.kt)("strong",{parentName:"p"},"Data Flow")," with Estuary Flow using publicly available data."),(0,r.kt)("p",null,"The dataset you'll use is composed of zipped CSV files in an Amazon S3 cloud storage bucket. You'll transport this data to a table in your own Snowflake data warehouse."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An Estuary Flow account. If you don't have one, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.estuary.dev"},"Flow web app")," to register for free.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"https://signup.snowflake.com/"},"Snowflake free trial account")," (or a full account).\nSnowflake trials are valid for 30 days."))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h4",{id:"the-data"},"The data"),(0,r.kt)("p",null,"New York City hosts the United States' largest bike share program, Citi Bike. ",(0,r.kt)("a",{parentName:"p",href:"https://ride.citibikenyc.com/system-data"},"Citi Bike shares ride data")," in CSV format with the public, including the starting and ending times and locations for every ride.\nThey upload new data monthly to ",(0,r.kt)("a",{parentName:"p",href:"https://s3.amazonaws.com/tripdata/index.html"},"their Amazon S3 bucket")," as a zipped CSV file."),(0,r.kt)("p",null,"In this scenario, let's imagine you're interested in urban bike safety, or perhaps you plan to open a bike store and entice Citi Bike renters to buy their own bikes.\nYou'd like to access the Citi Bike data in your Snowflake data warehouse.\nFrom there, you plan to use your data analytics platform of choice to explore the data, and perhaps integrate it with business intelligence apps."),(0,r.kt)("p",null,"You can use Estuary Flow to build a real-time Data Flow that will capture all the new data from Citi Bike as soon as it appears, convert it to Snowflake's format, and land the data in your warehouse."),(0,r.kt)("h4",{id:"estuary-flow"},"Estuary Flow"),(0,r.kt)("p",null,"In Estuary Flow, you create Data Flows to connect data ",(0,r.kt)("strong",{parentName:"p"},"source")," and ",(0,r.kt)("strong",{parentName:"p"},"destination")," systems."),(0,r.kt)("p",null,"The simplest Data Flow comprises three types of entities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A data ",(0,r.kt)("strong",{parentName:"p"},"capture"),", which ingests data from the source. In this case, you'll capture from Amazon S3.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One or more ",(0,r.kt)("strong",{parentName:"p"},"collections"),", which Flow uses to store that data inside a cloud-backed data lake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("strong",{parentName:"p"},"materialization"),", to push the data to an external destination. In this case, you'll materialize to a Snowflake data warehouse."))),(0,r.kt)(o.Z,{chart:"\n\tgraph LR;\n\t\tCapture--\x3eCollection;\n        Collection--\x3eMaterialization;\n",mdxType:"Mermaid"}),(0,r.kt)("p",null,"For the capture and materialization to work, they need to integrate with outside systems: in this case, S3 and Snowflake, but many other systems can be used.\nTo accomplish this, Flow uses ",(0,r.kt)("strong",{parentName:"p"},"connectors"),".\nConnectors are plug-in components that interface between Flow and an outside system.\nToday, you'll use Flow's S3 capture connector and Snowflake materialization connector."),(0,r.kt)("p",null,"You'll start by creating your capture."),(0,r.kt)("h2",{id:"capture-citi-bike-data-from-s3"},"Capture Citi Bike data from S3"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the Flow web app at ",(0,r.kt)("a",{parentName:"p",href:"http://dashboard.estuary.dev"},"dashboard.estuary.dev")," and sign in.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Sources")," tab and choose ",(0,r.kt)("strong",{parentName:"p"},"New Capture")),(0,r.kt)("p",{parentName:"li"},"All of the available capture connectors \u2014 representing the possible data sources \u2014 appear as tiles.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the ",(0,r.kt)("strong",{parentName:"p"},"Amazon S3")," tile and click ",(0,r.kt)("strong",{parentName:"p"},"Capture"),"."),(0,r.kt)("p",{parentName:"li"},"A form appears with the properties required for an S3 capture. Every connector requires different properties to configure."),(0,r.kt)("p",{parentName:"li"},"First, you'll name your capture.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click inside the ",(0,r.kt)("strong",{parentName:"p"},"Name")," box."),(0,r.kt)("p",{parentName:"li"},"Names of entities in Flow must be unique. They're organized by prefixes, similar to paths in a file system."),(0,r.kt)("p",{parentName:"li"},"You'll see one or more prefixes pertaining to your organization.\nThese prefixes represent the ",(0,r.kt)("strong",{parentName:"p"},"namespaces")," of Flow to which you have access.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click your prefix from the dropdown and append a unique name after it. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"myOrg/yourname/citibiketutorial"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, fill out the required properties for S3."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"AWS Access Key ID")," and ",(0,r.kt)("strong",{parentName:"p"},"AWS Secret Access Key"),": The bucket is public, so you can leave these fields blank.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"AWS Region"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east-1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bucket"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"tripdata"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Prefix"),": The storage bucket isn't organized by prefixes, so leave this blank.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Match Keys"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"2022")))),(0,r.kt)("p",{parentName:"li"},"The Citi Bike storage bucket has been around for a while. Some of the older datasets have incorrect file extensions or contain data in different formats. By selecting a subset of files from the year 2022, you'll make things easier to manage for the purposes of this tutorial.\n(In a real-world use case, you'd likely reconcile the different schemas of the various data formats using a ",(0,r.kt)("strong",{parentName:"p"},"derivation"),".\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/concepts/#derivations"},"Derivations")," are a more advanced Flow skill.)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("p",{parentName:"li"},"Flow uses the configuration you provided to initiate a connection with S3. It generates a list of ",(0,r.kt)("strong",{parentName:"p"},"collections")," that will store the data inside Flow. In this case, there's just one collection from the bucket."),(0,r.kt)("p",{parentName:"li"},"  Once this process completes, you can move on to the next step. If there's an error, go back and check your configuration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save and Publish"),"."),(0,r.kt)("p",{parentName:"li"},"Flow deploys, or ",(0,r.kt)("strong",{parentName:"p"},"publishes"),", your capture, including your change to the schema. You'll see a notification when the this is complete."),(0,r.kt)("p",{parentName:"li"},"A subset of data from the Citi Bike tripdata bucket has been captured to a Flow collection. Now, you can materialize that data to Snowflake.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Materialize Collections"),"."))),(0,r.kt)("h2",{id:"prepare-snowflake-to-use-with-flow"},"Prepare Snowflake to use with Flow"),(0,r.kt)("p",null,"Before you can materialize from Flow to Snowflake, you need to complete some setup steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave the Flow web app open. In a new window or tab, go to your Snowflake console."),(0,r.kt)("p",{parentName:"li"},"If you're a new trial user, you should have received instructions by email. For additional help in this section, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide-getting-started.html"},"Snowflake documentation"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new SQL worksheet if you don't have one open."),(0,r.kt)("p",{parentName:"li"},"This provides an interface where you can run queries.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the follow script into the console, changing the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"estuary_password")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," to a strong password):"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"set database_name = 'ESTUARY_DB';\nset warehouse_name = 'ESTUARY_WH';\nset estuary_role = 'ESTUARY_ROLE';\nset estuary_user = 'ESTUARY_USER';\nset estuary_password = 'secret';\nset estuary_schema = 'ESTUARY_SCHEMA';\n-- create role and schema for Estuary\ncreate role if not exists identifier($estuary_role);\ngrant role identifier($estuary_role) to role SYSADMIN;\n-- Create snowflake DB\ncreate database if not exists identifier($database_name);\nuse database identifier($database_name);\ncreate schema if not exists identifier($estuary_schema);\n-- create a user for Estuary\ncreate user if not exists identifier($estuary_user)\npassword = $estuary_password\ndefault_role = $estuary_role\ndefault_warehouse = $warehouse_name;\ngrant role identifier($estuary_role) to user identifier($estuary_user);\ngrant all on schema identifier($estuary_schema) to identifier($estuary_role);\n-- create a warehouse for estuary\ncreate warehouse if not exists identifier($warehouse_name)\nwarehouse_size = xsmall\nwarehouse_type = standard\nauto_suspend = 60\nauto_resume = true\ninitially_suspended = true;\n-- grant Estuary role access to warehouse\ngrant USAGE\non warehouse identifier($warehouse_name)\nto role identifier($estuary_role);\n-- grant Estuary access to database\ngrant CREATE SCHEMA, MONITOR, USAGE on database identifier($database_name) to role identifier($estuary_role);\n-- change role to ACCOUNTADMIN for STORAGE INTEGRATION support to Estuary (only needed for Snowflake on GCP)\nuse role ACCOUNTADMIN;\ngrant CREATE INTEGRATION on account to role identifier($estuary_role);\nuse role sysadmin;\nCOMMIT;\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the drop-down arrow next to the ",(0,r.kt)("strong",{parentName:"p"},"Run")," button and click ",(0,r.kt)("strong",{parentName:"p"},"Run All"),"."),(0,r.kt)("p",{parentName:"li"},"Snowflake runs all the queries and is ready to use with Flow.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to the Flow web application."))),(0,r.kt)("h2",{id:"materialize-your-flow-collection-to-snowflake"},"Materialize your Flow collection to Snowflake"),(0,r.kt)("p",null,"You were directed to the ",(0,r.kt)("strong",{parentName:"p"},"Materializations")," page.\nAll of the available materialization connectors \u2014 representing the possible data destinations \u2014 are shown as tiles."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the ",(0,r.kt)("strong",{parentName:"p"},"Snowflake")," tile and click ",(0,r.kt)("strong",{parentName:"p"},"Materialization"),"."),(0,r.kt)("p",{parentName:"li"},"A new form appears with the properties required to materialize to Snowflake.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click inside the ",(0,r.kt)("strong",{parentName:"p"},"Name")," box.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click your prefix from the dropdown and append a unique name after it. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"myOrg/yourname/citibiketutorial"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, fill out the required properties for Snowflake (most of these come from the script you just ran)."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Host URL"),": This is the URL you use to log into Snowflake. If you recently signed up for a trial, it should be in your email. Omit the protocol from the beginning. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNTID.region.cloudprovider.snowflakecomputing.com")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"orgname-accountname.snowflakecomputing.com"),"."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#where-are-account-identifiers-used"},"Learn more about account identifiers and host URLs."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Account"),": Your account identifier. This is part of the Host URL. Using the previous examples, it would be ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNTID")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"accountname"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ESTUARY_USER"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Password"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," (Substitute the password you set in the script.)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Database"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ESTUARY_DB"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Schema"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ESTUARY_SCHEMA"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Warehouse"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ESTUARY_WH"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Role"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ESTUARY_ROLE"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to view the ",(0,r.kt)("strong",{parentName:"p"},"Source Collections")," section and change the default name in the ",(0,r.kt)("strong",{parentName:"p"},"Table")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"CitiBikeData")," or another name of your choosing."),(0,r.kt)("p",{parentName:"li"},"Every Flow collection is defined by one or more ",(0,r.kt)("strong",{parentName:"p"},"schemas"),".\nBecause S3 is a cloud storage bucket, the schema used to ingest the data is quite permissive."),(0,r.kt)("p",{parentName:"li"},"You'll add a more detailed schema for Flow to use to materialize the data to Snowflake. This will ensure that each field from the source CSV is mapped to a column in the Snowflake table.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With the collection still selected, click its ",(0,r.kt)("strong",{parentName:"p"},"Collection")," tab. Then, click ",(0,r.kt)("strong",{parentName:"p"},"Schema Inference"),"."),(0,r.kt)("p",{parentName:"li"},"Flow examines the data and automatically generates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"readSchema"),". Scroll through and note the differences between this and the original schema, renamed ",(0,r.kt)("inlineCode",{parentName:"p"},"writeSchema"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Apply Inferred Schema"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("p",{parentName:"li"},"Flow uses the configuration you provided to initiate a connection with Snowflake and generate a specification with details of the materialization."),(0,r.kt)("p",{parentName:"li"},"Once this process completes, you can move on to the next step. If there's an error, go back and check your configuration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save and Publish"),"."),(0,r.kt)("p",{parentName:"li"},"Flow publishes the materialization.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to the Snowflake console and expand ESTUARY_DB and ESTUARY_SCHEMA.\nYou'll find the materialized table there."))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"You've created a complete Data Flow that ingests the Citi Bike CSV files from an Amazon S3 bucket and materializes them into your Snowflake database."),(0,r.kt)("p",null,"When Citi Bike uploads new data, it'll be reflected in Snowflake in near-real-time, so long as you don't disable your capture or materialization."),(0,r.kt)("p",null,"Data warehouses like Snowflake are designed to power data analytics. From here, you can begin any number of analytical workflows."),(0,r.kt)("h4",{id:"want-to-learn-more"},"Want to learn more?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more information on the connectors you used today, see the pages on ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/reference/Connectors/capture-connectors/amazon-s3"},"S3")," and ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/reference/Connectors/materialization-connectors/Snowflake"},"Snowflake"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can create a Data Flow using any combination of supported connectors with a similar process to the one you followed in this tutorial. For a more generalized procedure, see the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1330/guides/create-dataflow"},"guide to create a Data Flow"),"."))))}c.isMDXComponent=!0},1748:(e,t,a)=>{var n={"./locale":9234,"./locale.js":9234};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=1748}}]);