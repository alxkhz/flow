"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3406],{49636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(74848),r=t(28453);const i={},a="Snowflake",d={id:"reference/Connectors/materialization-connectors/Snowflake",title:"Snowflake",description:"This connector materializes Flow collections into tables in a Snowflake database.",source:"@site/docs/reference/Connectors/materialization-connectors/Snowflake.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/Snowflake",permalink:"/pr-preview/pr-1422/reference/Connectors/materialization-connectors/Snowflake",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/Snowflake.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQLite",permalink:"/pr-preview/pr-1422/reference/Connectors/materialization-connectors/SQLite"},next:{title:"Amazon Redshift",permalink:"/pr-preview/pr-1422/reference/Connectors/materialization-connectors/amazon-redshift"}},o={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Key-pair Authentication &amp; Snowpipe",id:"key-pair-authentication--snowpipe",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Optimizing performance for standard updates",id:"optimizing-performance-for-standard-updates",level:3},{value:"Reducing active warehouse time",id:"reducing-active-warehouse-time",level:3},{value:"Snowpipe",id:"snowpipe",level:3},{value:"Timestamp Data Type Mapping",id:"timestamp-data-type-mapping",level:2},{value:"Reserved words",id:"reserved-words",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"snowflake",children:"Snowflake"}),"\n",(0,s.jsxs)(n.p,{children:["This connector materializes Flow collections into tables in a Snowflake database.\nIt allows both standard and ",(0,s.jsx)(n.a,{href:"#delta-updates",children:"delta updates"}),". ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro",children:"Snowpipe"})," is additionally available for delta update bindings."]}),"\n",(0,s.jsxs)(n.p,{children:["The connector first uploads data changes to a ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/data-load-local-file-system-create-stage.html#table-stages",children:"Snowflake table stage"}),".\nFrom there, it transactionally applies the changes to the Snowflake table."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://ghcr.io/estuary/materialize-snowflake:dev",children:(0,s.jsx)(n.code,{children:"ghcr.io/estuary/materialize-snowflake:dev"})})," provides the latest connector image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"To use this connector, you'll need:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Snowflake account that includes:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A target database, to which you'll materialize data"}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/sql-reference/ddl-database.html",children:"schema"})," \u2014 a logical grouping of database objects \u2014 within the target database"]}),"\n",(0,s.jsx)(n.li,{children:"A virtual warehouse"}),"\n",(0,s.jsxs)(n.li,{children:["A user with a role assigned that grants the appropriate access levels to these resources.\nSee the ",(0,s.jsx)(n.a,{href:"#setup",children:"script below"})," for details."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Know your Snowflake account's host URL. This is formatted using your ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#where-are-account-identifiers-used",children:"Snowflake account identifier"}),",\nfor example, ",(0,s.jsx)(n.code,{children:"orgname-accountname.snowflakecomputing.com"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you haven't yet captured your data from its external source, start at the beginning of the ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1422/guides/create-dataflow",children:"guide to create a dataflow"}),". You'll be referred back to this connector-specific documentation at the appropriate steps."]})}),"\n",(0,s.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(n.p,{children:"To meet the prerequisites, copy and paste the following script into the Snowflake SQL editor, replacing the variable names in the first six lines."}),"\n",(0,s.jsxs)(n.p,{children:["If you'd like to use an existing database, warehouse, and/or schema, be sure to set\n",(0,s.jsx)(n.code,{children:"database_name"}),", ",(0,s.jsx)(n.code,{children:"warehouse_name"}),", and ",(0,s.jsx)(n.code,{children:"estuary_schema"})," accordingly. If you specify a new name, the script will create the item for you. You can set ",(0,s.jsx)(n.code,{children:"estuary_role"}),", ",(0,s.jsx)(n.code,{children:"estuary_user"}),", and ",(0,s.jsx)(n.code,{children:"estuary_password"})," to whatever you'd like."]}),"\n",(0,s.jsxs)(n.p,{children:["Check the ",(0,s.jsx)(n.strong,{children:"All Queries"})," check box, and click ",(0,s.jsx)(n.strong,{children:"Run"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"set database_name = 'ESTUARY_DB';\nset warehouse_name = 'ESTUARY_WH';\nset estuary_role = 'ESTUARY_ROLE';\nset estuary_user = 'ESTUARY_USER';\nset estuary_password = 'secret';\nset estuary_schema = 'ESTUARY_SCHEMA';\n-- create role and schema for Estuary\ncreate role if not exists identifier($estuary_role);\ngrant role identifier($estuary_role) to role SYSADMIN;\n-- Create snowflake DB\ncreate database if not exists identifier($database_name);\nuse database identifier($database_name);\ncreate schema if not exists identifier($estuary_schema);\n-- create a user for Estuary\ncreate user if not exists identifier($estuary_user)\npassword = $estuary_password\ndefault_role = $estuary_role\ndefault_warehouse = $warehouse_name;\ngrant role identifier($estuary_role) to user identifier($estuary_user);\ngrant all on schema identifier($estuary_schema) to identifier($estuary_role);\n-- create a warehouse for estuary\ncreate warehouse if not exists identifier($warehouse_name)\nwarehouse_size = xsmall\nwarehouse_type = standard\nauto_suspend = 60\nauto_resume = true\ninitially_suspended = true;\n-- grant Estuary role access to warehouse\ngrant USAGE\non warehouse identifier($warehouse_name)\nto role identifier($estuary_role);\n-- grant Estuary access to database\ngrant CREATE SCHEMA, MONITOR, USAGE on database identifier($database_name) to role identifier($estuary_role);\n-- change role to ACCOUNTADMIN for STORAGE INTEGRATION support to Estuary (only needed for Snowflake on GCP)\nuse role ACCOUNTADMIN;\ngrant CREATE INTEGRATION on account to role identifier($estuary_role);\nuse role sysadmin;\nCOMMIT;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"key-pair-authentication--snowpipe",children:"Key-pair Authentication & Snowpipe"}),"\n",(0,s.jsxs)(n.p,{children:["In order to enable use of Snowpipe for ",(0,s.jsx)(n.a,{href:"#delta-updates",children:"delta updates"})," bindings, you need to authenticate\nusing ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/key-pair-auth",children:"key-pair authentication"}),", also known as JWT authentication."]}),"\n",(0,s.jsx)(n.p,{children:"To set up your user for key-pair authentication, first generate a key-pair in your shell:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# generate a private key\nopenssl genrsa 2048 | openssl pkcs8 -topk8 -inform PEM -out rsa_key.p8 -nocrypt\n# generate a public key\nopenssl rsa -in rsa_key.p8 -pubout -out rsa_key.pub\n# read the public key and copy it to clipboard\ncat rsa_key.pub\n\n-----BEGIN PUBLIC KEY-----\nMIIBIj...\n-----END PUBLIC KEY-----\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then assign the public key with your Snowflake user using these SQL commands:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER USER $estuary_user SET RSA_PUBLIC_KEY='MIIBIjANBgkqh...'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify the public key fingerprint in Snowflake matches the one you have locally:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DESC USER $estuary_user;\nSELECT TRIM((SELECT \"value\" FROM TABLE(RESULT_SCAN(LAST_QUERY_ID()))\n  WHERE \"property\" = 'RSA_PUBLIC_KEY_FP'), 'SHA256:');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then compare with the local version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl rsa -pubin -in rsa_key.pub -outform DER | openssl dgst -sha256 -binary | openssl enc -base64\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can use the generated ",(0,s.jsx)(n.em,{children:"private key"})," when configuring your Snowflake connector. Once you have key-pair authentication enabled, delta updates bindings will use Snowpipe for loading data."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Snowflake materialization, which will direct one or more of your Flow collections to new Snowflake tables."}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/account"})})}),(0,s.jsx)(n.td,{children:"Account"}),(0,s.jsx)(n.td,{children:"The Snowflake account identifier"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/database"})})}),(0,s.jsx)(n.td,{children:"Database"}),(0,s.jsx)(n.td,{children:"Name of the Snowflake database to which to materialize"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/host"})})}),(0,s.jsx)(n.td,{children:"Host URL"}),(0,s.jsx)(n.td,{children:"The Snowflake Host used for the connection. Example: orgname-accountname.snowflakecomputing.com (do not include the protocol)."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/role"})}),(0,s.jsx)(n.td,{children:"Role"}),(0,s.jsx)(n.td,{children:"Role assigned to the user"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/schema"})})}),(0,s.jsx)(n.td,{children:"Schema"}),(0,s.jsx)(n.td,{children:"Database schema for bound collection tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/warehouse"})}),(0,s.jsx)(n.td,{children:"Warehouse"}),(0,s.jsx)(n.td,{children:"Name of the data warehouse that contains the database"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials"})})}),(0,s.jsx)(n.td,{children:"Credentials"}),(0,s.jsx)(n.td,{children:"Credentials for authentication"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/auth_type"})})}),(0,s.jsx)(n.td,{children:"Authentication type"}),(0,s.jsxs)(n.td,{children:["One of ",(0,s.jsx)(n.code,{children:"user_password"})," or ",(0,s.jsx)(n.code,{children:"jwt"})]}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/credentials/user"})})}),(0,s.jsx)(n.td,{children:"User"}),(0,s.jsx)(n.td,{children:"Snowflake username"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/password"})}),(0,s.jsx)(n.td,{children:"Password"}),(0,s.jsx)(n.td,{children:"Required if using user_password authentication"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/credentials/privateKey"})}),(0,s.jsx)(n.td,{children:"Private Key"}),(0,s.jsx)(n.td,{children:"Required if using jwt authentication"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/advanced"})}),(0,s.jsx)(n.td,{children:"Advanced Options"}),(0,s.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/advanced/updateDelay"})}),(0,s.jsx)(n.td,{children:"Update Delay"}),(0,s.jsx)(n.td,{children:"Potentially reduce active warehouse time by increasing the delay between updates."}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Title"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Required/Default"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"/table"})})}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"Table name"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Required"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/schema"})}),(0,s.jsx)(n.td,{children:"Alternative Schema"}),(0,s.jsx)(n.td,{children:"Alternative schema for this table"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/delta_updates"})}),(0,s.jsx)(n.td,{children:"Delta updates"}),(0,s.jsxs)(n.td,{children:["Whether to use standard or ",(0,s.jsx)(n.a,{href:"#delta-updates",children:"delta updates"})]}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(n.p,{children:"User and password authentication:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n  \t    connector:\n    \t    config:\n              account: acmeCo\n              database: acmeCo_db\n              host: orgname-accountname.snowflakecomputing.com\n              schema: acmeCo_flow_schema\n              warehouse: acmeCo_warehouse\n              credentials:\n                auth_type: user_pasword\n                user: snowflake_user\n                password: secret\n    \t    image: ghcr.io/estuary/materialize-snowflake:dev\n  # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n  \t- resource:\n      \ttable: ${table_name}\n    source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Key-pair authentication:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n  \t    connector:\n    \t    config:\n              account: acmeCo\n              database: acmeCo_db\n              host: orgname-accountname.snowflakecomputing.com\n              schema: acmeCo_flow_schema\n              warehouse: acmeCo_warehouse\n              credentials:\n                auth_type: jwt\n                user: snowflake_user\n                privateKey: |\n                  -----BEGIN PRIVATE KEY-----\n                  MIIEv....\n                  ...\n                  ...\n                  ...\n                  ...\n                  ...\n                  -----END PRIVATE KEY-----\n    \t    image: ghcr.io/estuary/materialize-snowflake:dev\n  # If you have multiple collections you need to materialize, add a binding for each one\n    # to ensure complete data flow-through\n    bindings:\n  \t- resource:\n      \ttable: ${table_name}\n    source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,s.jsxs)(n.p,{children:["This connector supports both standard (merge) and ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/materialization#delta-updates",children:"delta updates"}),".\nThe default is to use standard updates."]}),"\n",(0,s.jsx)(n.p,{children:"Enabling delta updates will prevent Flow from querying for documents in your Snowflake table, which can reduce latency and costs for large datasets.\nIf you're certain that all events will have unique keys, enabling delta updates is a simple way to improve\nperformance with no effect on the output.\nHowever, enabling delta updates is not suitable for all workflows, as the resulting table in Snowflake won't be fully reduced."}),"\n",(0,s.jsx)(n.p,{children:"You can enable delta updates on a per-binding basis:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"    bindings:\n  \t- resource:\n      \ttable: ${table_name}\n        delta_updates: true\n    source: ${PREFIX}/${source_collection}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"performance-considerations",children:"Performance considerations"}),"\n",(0,s.jsx)(n.h3,{id:"optimizing-performance-for-standard-updates",children:"Optimizing performance for standard updates"}),"\n",(0,s.jsxs)(n.p,{children:["When using standard updates for a large dataset, the ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/collections#keys",children:"collection key"})," you choose can have a significant impact on materialization performance and efficiency."]}),"\n",(0,s.jsxs)(n.p,{children:["Snowflake uses ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/tables-clustering-micropartitions.html",children:"micro partitions"})," to physically arrange data within tables.\nEach micro partition includes metadata, such as the minimum and maximum values for each column.\nIf you choose a collection key that takes advantage of this metadata to help Snowflake prune irrelevant micro partitions,\nyou'll see dramatically better performance."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you materialize a collection with a key of ",(0,s.jsx)(n.code,{children:"/user_id"}),", it will tend to perform far worse than a materialization of ",(0,s.jsx)(n.code,{children:"/date, /user_id"}),".\nThis is because most materializations tend to be roughly chronological over time, and that means that data is written to Snowflake in roughly ",(0,s.jsx)(n.code,{children:"/date"})," order."]}),"\n",(0,s.jsxs)(n.p,{children:["This means that updates of keys ",(0,s.jsx)(n.code,{children:"/date, /user_id"})," will need to physically read far fewer rows as compared to a key like ",(0,s.jsx)(n.code,{children:"/user_id"}),",\nbecause those rows will tend to live in the same micro-partitions, and Snowflake is able to cheaply prune micro-partitions that aren't relevant to the transaction."]}),"\n",(0,s.jsx)(n.h3,{id:"reducing-active-warehouse-time",children:"Reducing active warehouse time"}),"\n",(0,s.jsxs)(n.p,{children:["Snowflake compute is ",(0,s.jsx)(n.a,{href:"https://www.snowflake.com/pricing/",children:"priced"})," per second of activity, with a minimum of 60 seconds.\nInactive warehouses don't incur charges.\nTo keep costs down, you'll want to minimize your warehouse's active time."]}),"\n",(0,s.jsxs)(n.p,{children:["Like other Estuary connectors, this is a real-time connector that materializes documents using continuous ",(0,s.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/advanced/shards#transactions",children:(0,s.jsx)(n.strong,{children:"transactions"})}),".\nEvery time a Flow materialization commits a transaction, your warehouse becomes active."]}),"\n",(0,s.jsx)(n.p,{children:"If your source data collection or collections don't change much, this shouldn't cause an issue;\nFlow only commits transactions when data has changed.\nHowever, if your source data is frequently updated, your materialization may have frequent transactions that result in\nexcessive active time in the warehouse, and thus a higher bill from Snowflake."}),"\n",(0,s.jsx)(n.p,{children:"To mitigate this, we recommend a two-pronged approach:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/sql-reference/sql/create-warehouse.html#:~:text=Specifies%20the%20number%20of%20seconds%20of%20inactivity%20after%20which%20a%20warehouse%20is%20automatically%20suspended.",children:"Configure your Snowflake warehouse to auto-suspend"})," after 60 seconds."]}),"\n",(0,s.jsx)(n.p,{children:"This ensures that after each transaction completes, you'll only be charged for one minute of compute, Snowflake's smallest granularity."}),"\n",(0,s.jsx)(n.p,{children:"Use a query like the one shown below, being sure to substitute your warehouse name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER WAREHOUSE ESTUARY_WH SET auto_suspend = 60;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure the materialization's ",(0,s.jsx)(n.strong,{children:"update delay"})," by setting a value in the advanced configuration."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example, if you set the warehouse to auto-suspend after 60 seconds and set the materialization's\nupdate delay to 30 minutes, you can incur as little as 48 minutes per day of active time in the warehouse."}),"\n",(0,s.jsx)(n.h3,{id:"snowpipe",children:"Snowpipe"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/user-guide/data-load-snowpipe-intro",children:"Snowpipe"})," allows for loading data into target tables without waking up the warehouse, which can be cheaper and more performant. Snowpipe can be used for delta updates bindings, and it requires configuring your authentication using a private key. Instructions for configuring key-pair authentication can be found in this page: ",(0,s.jsx)(n.a,{href:"#key-pair-authentication--snowpipe",children:"Key-pair Authentication & Snowpipe"})]}),"\n",(0,s.jsx)(n.h2,{id:"timestamp-data-type-mapping",children:"Timestamp Data Type Mapping"}),"\n",(0,s.jsxs)(n.p,{children:["Flow uses the ",(0,s.jsx)(n.code,{children:"TIMESTAMP"})," type alias in Snowflake for materializing timestamp data types. This type alias points to either ",(0,s.jsx)(n.code,{children:"TIMESTAMP_NTZ"})," (default), ",(0,s.jsx)(n.code,{children:"TIMESTAMP_TZ"})," or ",(0,s.jsx)(n.code,{children:"TIMESTAMP_LTZ"}),". The default ",(0,s.jsx)(n.code,{children:"TIMESTAMP_NTZ"})," mapping means timestamps are normalised to UTC upon materialization. If you want to have timezone data as part of the timestamp, set the ",(0,s.jsx)(n.code,{children:"TIMESTAMP_TYPE_MAPPING"})," configuration to ",(0,s.jsx)(n.code,{children:"TIMESTAMP_TZ"}),". See ",(0,s.jsxs)(n.a,{href:"https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping",children:["Snowflake documentation on ",(0,s.jsx)(n.code,{children:"TIMESTAMP_TYPE_MAPPING"})," for more information"]}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,s.jsxs)(n.p,{children:["Snowflake has a list of reserved words that must be quoted in order to be used as an identifier. Flow automatically quotes fields that are in the reserved words list. You can find this list in Snowflake's documentation ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/sql-reference/reserved-keywords.html",children:"here"})," and in the table below."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["In Snowflake, objects created with quoted identifiers must always be referenced exactly as created, including the quotes. Otherwise, SQL statements and queries can result in errors. See the ",(0,s.jsx)(n.a,{href:"https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers",children:"Snowflake docs"}),"."]})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Reserved words"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account"}),(0,s.jsx)(n.td,{children:"from"}),(0,s.jsx)(n.td,{children:"qualify"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"all"}),(0,s.jsx)(n.td,{children:"full"}),(0,s.jsx)(n.td,{children:"regexp"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"alter"}),(0,s.jsx)(n.td,{children:"grant"}),(0,s.jsx)(n.td,{children:"revoke"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"and"}),(0,s.jsx)(n.td,{children:"group"}),(0,s.jsx)(n.td,{children:"right"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"gscluster"}),(0,s.jsx)(n.td,{children:"rlike"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"as"}),(0,s.jsx)(n.td,{children:"having"}),(0,s.jsx)(n.td,{children:"row"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"between"}),(0,s.jsx)(n.td,{children:"ilike"}),(0,s.jsx)(n.td,{children:"rows"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"by"}),(0,s.jsx)(n.td,{children:"in"}),(0,s.jsx)(n.td,{children:"sample"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"case"}),(0,s.jsx)(n.td,{children:"increment"}),(0,s.jsx)(n.td,{children:"schema"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cast"}),(0,s.jsx)(n.td,{children:"inner"}),(0,s.jsx)(n.td,{children:"select"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"check"}),(0,s.jsx)(n.td,{children:"insert"}),(0,s.jsx)(n.td,{children:"set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"column"}),(0,s.jsx)(n.td,{children:"intersect"}),(0,s.jsx)(n.td,{children:"some"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"connect"}),(0,s.jsx)(n.td,{children:"into"}),(0,s.jsx)(n.td,{children:"start"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"connection"}),(0,s.jsx)(n.td,{children:"is"}),(0,s.jsx)(n.td,{children:"table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"constraint"}),(0,s.jsx)(n.td,{children:"issue"}),(0,s.jsx)(n.td,{children:"tablesample"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"create"}),(0,s.jsx)(n.td,{children:"join"}),(0,s.jsx)(n.td,{children:"then"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cross"}),(0,s.jsx)(n.td,{children:"lateral"}),(0,s.jsx)(n.td,{children:"to"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"current"}),(0,s.jsx)(n.td,{children:"left"}),(0,s.jsx)(n.td,{children:"trigger"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"current_date"}),(0,s.jsx)(n.td,{children:"like"}),(0,s.jsx)(n.td,{children:"true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"current_time"}),(0,s.jsx)(n.td,{children:"localtime"}),(0,s.jsx)(n.td,{children:"try_cast"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"current_timestamp"}),(0,s.jsx)(n.td,{children:"localtimestamp"}),(0,s.jsx)(n.td,{children:"union"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"current_user"}),(0,s.jsx)(n.td,{children:"minus"}),(0,s.jsx)(n.td,{children:"unique"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"database"}),(0,s.jsx)(n.td,{children:"natural"}),(0,s.jsx)(n.td,{children:"update"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"delete"}),(0,s.jsx)(n.td,{children:"not"}),(0,s.jsx)(n.td,{children:"using"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"distinct"}),(0,s.jsx)(n.td,{children:"null"}),(0,s.jsx)(n.td,{children:"values"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"drop"}),(0,s.jsx)(n.td,{children:"of"}),(0,s.jsx)(n.td,{children:"view"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"else"}),(0,s.jsx)(n.td,{children:"on"}),(0,s.jsx)(n.td,{children:"when"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"exists"}),(0,s.jsx)(n.td,{children:"or"}),(0,s.jsx)(n.td,{children:"whenever"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"order"}),(0,s.jsx)(n.td,{children:"where"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"following"}),(0,s.jsx)(n.td,{children:"organization"}),(0,s.jsx)(n.td,{children:"with"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"for"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);