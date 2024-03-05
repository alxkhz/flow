"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5031],{69693:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var s=r(74848),t=r(28453);const n={},i="Google Cloud SQL for PostgreSQL",l={id:"reference/Connectors/materialization-connectors/PostgreSQL/google-cloud-sql-postgres",title:"Google Cloud SQL for PostgreSQL",description:"This connector materializes Flow collections into tables in a Google Cloud SQL for PostgreSQL database.",source:"@site/docs/reference/Connectors/materialization-connectors/PostgreSQL/google-cloud-sql-postgres.md",sourceDirName:"reference/Connectors/materialization-connectors/PostgreSQL",slug:"/reference/Connectors/materialization-connectors/PostgreSQL/google-cloud-sql-postgres",permalink:"/pr-preview/pr-1404/reference/Connectors/materialization-connectors/PostgreSQL/google-cloud-sql-postgres",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/PostgreSQL/google-cloud-sql-postgres.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon RDS for PostgreSQL",permalink:"/pr-preview/pr-1404/reference/Connectors/materialization-connectors/PostgreSQL/amazon-rds-postgres"},next:{title:"Rockset",permalink:"/pr-preview/pr-1404/reference/Connectors/materialization-connectors/Rockset"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Conenecting Directly to Google Cloud SQL",id:"conenecting-directly-to-google-cloud-sql",level:3},{value:"Connect With SSH Tunneling",id:"connect-with-ssh-tunneling",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Delta updates",id:"delta-updates",level:2},{value:"Reserved words",id:"reserved-words",level:2},{value:"Changelog",id:"changelog",level:2},{value:"V4: 2022-11-30",id:"v4-2022-11-30",level:4}];function o(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h1,{id:"google-cloud-sql-for-postgresql",children:"Google Cloud SQL for PostgreSQL"}),"\n",(0,s.jsx)(d.p,{children:"This connector materializes Flow collections into tables in a Google Cloud SQL for PostgreSQL database."}),"\n",(0,s.jsxs)(d.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,s.jsx)(d.a,{href:"https://ghcr.io/estuary/materialize-postgres:dev",children:(0,s.jsx)(d.code,{children:"ghcr.io/estuary/materialize-postgres:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,s.jsx)(d.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(d.p,{children:"To use this connector, you'll need:"}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"A Postgres database to which to materialize, and user credentials.\nThe connector will create new tables in the database per your specification. Tables created manually in advance are not supported."}),"\n",(0,s.jsx)(d.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(d.p,{children:"You must configure your database to allow connections from Estuary.\nThere are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."}),"\n",(0,s.jsx)(d.h3,{id:"conenecting-directly-to-google-cloud-sql",children:"Conenecting Directly to Google Cloud SQL"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:[(0,s.jsx)(d.a,{href:"https://cloud.google.com/sql/docs/mysql/configure-ip#add",children:"Enable public IP on your database"})," and add ",(0,s.jsx)(d.code,{children:"34.121.207.128"})," as an authorized IP address."]}),"\n"]}),"\n",(0,s.jsx)(d.h3,{id:"connect-with-ssh-tunneling",children:"Connect With SSH Tunneling"}),"\n",(0,s.jsx)(d.p,{children:"To allow SSH tunneling to a database instance hosted on Google Cloud, you must set up a virtual machine (VM)."}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["Begin by finding your public SSH key on your local machine.\nIn the ",(0,s.jsx)(d.code,{children:".ssh"})," subdirectory of your user home directory,\nlook for the PEM file that contains the private SSH key. Check that it starts with ",(0,s.jsx)(d.code,{children:"-----BEGIN RSA PRIVATE KEY-----"}),",\nwhich indicates it is an RSA-based file."]}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"If no such file exists, generate one using the command:"}),"\n"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-console",children:"   ssh-keygen -m PEM -t rsa\n"})}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["If a PEM file exists, but starts with ",(0,s.jsx)(d.code,{children:"-----BEGIN OPENSSH PRIVATE KEY-----"}),", convert it with the command:"]}),"\n"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-console",children:'   ssh-keygen -p -N "" -m pem -f /path/to/key\n'})}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsx)(d.li,{children:"If your Google login differs from your local username, generate a key that includes your Google email address as a comment:"}),"\n"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-console",children:"   ssh-keygen -m PEM -t rsa -C user@domain.com\n"})}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"https://cloud.google.com/compute/docs/instances/create-start-instance",children:"Create and start a new VM in GCP"}),", ",(0,s.jsx)(d.a,{href:"https://cloud.google.com/compute/docs/images/os-details#user-space-features",children:"choosing an image that supports OS Login"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"https://cloud.google.com/compute/docs/connect/add-ssh-keys",children:"Add your public key to the VM"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.a,{href:"https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address",children:"Reserve an external IP address"})," and connect it to the VM during setup.\nNote the generated address."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(d.admonition,{title:"Configuration Tip",type:"tip",children:[(0,s.jsxs)(d.p,{children:["To configure the connector, you must specify the database address in the format ",(0,s.jsx)(d.code,{children:"host:port"}),". (You can also supply ",(0,s.jsx)(d.code,{children:"host"})," only; the connector will use the port ",(0,s.jsx)(d.code,{children:"5432"})," by default, which is correct in many cases.)\nYou can find the host and port in the following location:"]}),(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["Host as Private IP Address; port is always ",(0,s.jsx)(d.code,{children:"5432"}),". You may need to ",(0,s.jsx)(d.a,{href:"https://cloud.google.com/sql/docs/postgres/configure-private-ip",children:"configure private IP"})," on your database."]}),"\n"]})]}),"\n",(0,s.jsx)(d.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(d.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a Postgres materialization, which will direct one or more of your Flow collections to your desired tables, or views, in the database."}),"\n",(0,s.jsx)(d.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(d.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Property"}),(0,s.jsx)(d.th,{children:"Title"}),(0,s.jsx)(d.th,{children:"Description"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Required/Default"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/database"})}),(0,s.jsx)(d.td,{children:"Database"}),(0,s.jsx)(d.td,{children:"Name of the logical database to materialize to."}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"/address"})})}),(0,s.jsx)(d.td,{children:"Address"}),(0,s.jsxs)(d.td,{children:["Host and port of the database. If only the host is specified, port will default to ",(0,s.jsx)(d.code,{children:"5432"}),"."]}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Required"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"/password"})})}),(0,s.jsx)(d.td,{children:"Password"}),(0,s.jsx)(d.td,{children:"Password for the specified database user."}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Required"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/schema"})}),(0,s.jsx)(d.td,{children:"Database Schema"}),(0,s.jsxs)(d.td,{children:["Database ",(0,s.jsx)(d.a,{href:"https://www.postgresql.org/docs/current/ddl-schemas.html",children:"schema"})," to use for materialized tables (unless overridden within the binding resource configuration) as well as associated materialization metadata tables"]}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:'"public"'})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"/user"})})}),(0,s.jsx)(d.td,{children:"User"}),(0,s.jsx)(d.td,{children:"Database user to connect as."}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Required"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/advanced"})}),(0,s.jsx)(d.td,{children:"Advanced Options"}),(0,s.jsx)(d.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,s.jsx)(d.td,{children:"object"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/advanced/sslmode"})}),(0,s.jsx)(d.td,{children:"SSL Mode"}),(0,s.jsx)(d.td,{children:"Overrides SSL connection behavior by setting the 'sslmode' parameter."}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"bindings",children:"Bindings"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Property"}),(0,s.jsx)(d.th,{children:"Title"}),(0,s.jsx)(d.th,{children:"Description"}),(0,s.jsx)(d.th,{children:"Type"}),(0,s.jsx)(d.th,{children:"Required/Default"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/additional_table_create_sql"})}),(0,s.jsx)(d.td,{children:"Additional Table Create SQL"}),(0,s.jsx)(d.td,{children:"Additional SQL statement(s) to be run in the same transaction that creates the table."}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/delta_updates"})}),(0,s.jsx)(d.td,{children:"Delta Update"}),(0,s.jsx)(d.td,{children:"Should updates to this table be done via delta updates."}),(0,s.jsx)(d.td,{children:"boolean"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"/schema"})}),(0,s.jsx)(d.td,{children:"Alternative Schema"}),(0,s.jsx)(d.td,{children:"Alternative schema for this table (optional). Overrides schema set in endpoint configuration."}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.strong,{children:(0,s.jsx)(d.code,{children:"/table"})})}),(0,s.jsx)(d.td,{children:"Table"}),(0,s.jsx)(d.td,{children:"Table name to materialize to. It will be created by the connector, unless the connector has previously created it."}),(0,s.jsx)(d.td,{children:"string"}),(0,s.jsx)(d.td,{children:"Required"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"sample",children:"Sample"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-postgres:dev\n        config:\n          database: flow\n          address: localhost:5432\n          password: flow\n          user: flow\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,s.jsx)(d.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,s.jsxs)(d.p,{children:["This connector supports both standard (merge) and ",(0,s.jsx)(d.a,{href:"/pr-preview/pr-1404/concepts/materialization#delta-updates",children:"delta updates"}),".\nThe default is to use standard updates."]}),"\n",(0,s.jsx)(d.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,s.jsxs)(d.p,{children:['PostgreSQL has a list of reserved words that must be quoted in order to be used as an identifier.\nFlow considers all the reserved words that are marked as "reserved" in any of the columns in the official ',(0,s.jsx)(d.a,{href:"https://www.postgresql.org/docs/current/sql-keywords-appendix.html",children:"PostgreSQL documentation"}),"."]}),"\n",(0,s.jsx)(d.p,{children:"These reserve words are listed in the table below. Flow automatically quotes fields that are in this list."}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Reserved words"}),(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"abs"}),(0,s.jsx)(d.td,{children:"current_transform_group_for_type"}),(0,s.jsx)(d.td,{children:"indicator"}),(0,s.jsx)(d.td,{children:"order"}),(0,s.jsx)(d.td,{children:"sqlexception"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"absolute"}),(0,s.jsx)(d.td,{children:"current_user"}),(0,s.jsx)(d.td,{children:"initial"}),(0,s.jsx)(d.td,{children:"out"}),(0,s.jsx)(d.td,{children:"sqlstate"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"acos"}),(0,s.jsx)(d.td,{children:"cursor"}),(0,s.jsx)(d.td,{children:"initially"}),(0,s.jsx)(d.td,{children:"outer"}),(0,s.jsx)(d.td,{children:"sqlwarning"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"action"}),(0,s.jsx)(d.td,{children:"cycle"}),(0,s.jsx)(d.td,{children:"inner"}),(0,s.jsx)(d.td,{children:"output"}),(0,s.jsx)(d.td,{children:"sqrt"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"add"}),(0,s.jsx)(d.td,{children:"datalink"}),(0,s.jsx)(d.td,{children:"inout"}),(0,s.jsx)(d.td,{children:"over"}),(0,s.jsx)(d.td,{children:"start"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"all"}),(0,s.jsx)(d.td,{children:"date"}),(0,s.jsx)(d.td,{children:"input"}),(0,s.jsx)(d.td,{children:"overlaps"}),(0,s.jsx)(d.td,{children:"static"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"allocate"}),(0,s.jsx)(d.td,{children:"day"}),(0,s.jsx)(d.td,{children:"insensitive"}),(0,s.jsx)(d.td,{children:"overlay"}),(0,s.jsx)(d.td,{children:"stddev_pop"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"alter"}),(0,s.jsx)(d.td,{children:"deallocate"}),(0,s.jsx)(d.td,{children:"insert"}),(0,s.jsx)(d.td,{children:"pad"}),(0,s.jsx)(d.td,{children:"stddev_samp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"analyse"}),(0,s.jsx)(d.td,{children:"dec"}),(0,s.jsx)(d.td,{children:"int"}),(0,s.jsx)(d.td,{children:"parameter"}),(0,s.jsx)(d.td,{children:"submultiset"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"analyze"}),(0,s.jsx)(d.td,{children:"decfloat"}),(0,s.jsx)(d.td,{children:"integer"}),(0,s.jsx)(d.td,{children:"partial"}),(0,s.jsx)(d.td,{children:"subset"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"and"}),(0,s.jsx)(d.td,{children:"decimal"}),(0,s.jsx)(d.td,{children:"intersect"}),(0,s.jsx)(d.td,{children:"partition"}),(0,s.jsx)(d.td,{children:"substring"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"any"}),(0,s.jsx)(d.td,{children:"declare"}),(0,s.jsx)(d.td,{children:"intersection"}),(0,s.jsx)(d.td,{children:"pattern"}),(0,s.jsx)(d.td,{children:"substring_regex"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"are"}),(0,s.jsx)(d.td,{children:"default"}),(0,s.jsx)(d.td,{children:"interval"}),(0,s.jsx)(d.td,{children:"per"}),(0,s.jsx)(d.td,{children:"succeeds"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"array"}),(0,s.jsx)(d.td,{children:"deferrable"}),(0,s.jsx)(d.td,{children:"into"}),(0,s.jsx)(d.td,{children:"percent"}),(0,s.jsx)(d.td,{children:"sum"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"array_agg"}),(0,s.jsx)(d.td,{children:"deferred"}),(0,s.jsx)(d.td,{children:"is"}),(0,s.jsx)(d.td,{children:"percentile_cont"}),(0,s.jsx)(d.td,{children:"symmetric"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"array_max_cardinality"}),(0,s.jsx)(d.td,{children:"define"}),(0,s.jsx)(d.td,{children:"isnull"}),(0,s.jsx)(d.td,{children:"percentile_disc"}),(0,s.jsx)(d.td,{children:"system"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"as"}),(0,s.jsx)(d.td,{children:"delete"}),(0,s.jsx)(d.td,{children:"isolation"}),(0,s.jsx)(d.td,{children:"percent_rank"}),(0,s.jsx)(d.td,{children:"system_time"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"asc"}),(0,s.jsx)(d.td,{children:"dense_rank"}),(0,s.jsx)(d.td,{children:"join"}),(0,s.jsx)(d.td,{children:"period"}),(0,s.jsx)(d.td,{children:"system_user"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"asensitive"}),(0,s.jsx)(d.td,{children:"deref"}),(0,s.jsx)(d.td,{children:"json_array"}),(0,s.jsx)(d.td,{children:"permute"}),(0,s.jsx)(d.td,{children:"table"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"asin"}),(0,s.jsx)(d.td,{children:"desc"}),(0,s.jsx)(d.td,{children:"json_arrayagg"}),(0,s.jsx)(d.td,{children:"placing"}),(0,s.jsx)(d.td,{children:"tablesample"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"assertion"}),(0,s.jsx)(d.td,{children:"describe"}),(0,s.jsx)(d.td,{children:"json_exists"}),(0,s.jsx)(d.td,{children:"portion"}),(0,s.jsx)(d.td,{children:"tan"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"asymmetric"}),(0,s.jsx)(d.td,{children:"descriptor"}),(0,s.jsx)(d.td,{children:"json_object"}),(0,s.jsx)(d.td,{children:"position"}),(0,s.jsx)(d.td,{children:"tanh"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"at"}),(0,s.jsx)(d.td,{children:"deterministic"}),(0,s.jsx)(d.td,{children:"json_objectagg"}),(0,s.jsx)(d.td,{children:"position_regex"}),(0,s.jsx)(d.td,{children:"temporary"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"atan"}),(0,s.jsx)(d.td,{children:"diagnostics"}),(0,s.jsx)(d.td,{children:"json_query"}),(0,s.jsx)(d.td,{children:"power"}),(0,s.jsx)(d.td,{children:"then"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"atomic"}),(0,s.jsx)(d.td,{children:"disconnect"}),(0,s.jsx)(d.td,{children:"json_table"}),(0,s.jsx)(d.td,{children:"precedes"}),(0,s.jsx)(d.td,{children:"time"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"authorization"}),(0,s.jsx)(d.td,{children:"distinct"}),(0,s.jsx)(d.td,{children:"json_table_primitive"}),(0,s.jsx)(d.td,{children:"precision"}),(0,s.jsx)(d.td,{children:"timestamp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"avg"}),(0,s.jsx)(d.td,{children:"dlnewcopy"}),(0,s.jsx)(d.td,{children:"json_value"}),(0,s.jsx)(d.td,{children:"prepare"}),(0,s.jsx)(d.td,{children:"timezone_hour"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"begin"}),(0,s.jsx)(d.td,{children:"dlpreviouscopy"}),(0,s.jsx)(d.td,{children:"key"}),(0,s.jsx)(d.td,{children:"preserve"}),(0,s.jsx)(d.td,{children:"timezone_minute"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"begin_frame"}),(0,s.jsx)(d.td,{children:"dlurlcomplete"}),(0,s.jsx)(d.td,{children:"lag"}),(0,s.jsx)(d.td,{children:"primary"}),(0,s.jsx)(d.td,{children:"to"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"begin_partition"}),(0,s.jsx)(d.td,{children:"dlurlcompleteonly"}),(0,s.jsx)(d.td,{children:"language"}),(0,s.jsx)(d.td,{children:"prior"}),(0,s.jsx)(d.td,{children:"trailing"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"between"}),(0,s.jsx)(d.td,{children:"dlurlcompletewrite"}),(0,s.jsx)(d.td,{children:"large"}),(0,s.jsx)(d.td,{children:"privileges"}),(0,s.jsx)(d.td,{children:"transaction"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"bigint"}),(0,s.jsx)(d.td,{children:"dlurlpath"}),(0,s.jsx)(d.td,{children:"last"}),(0,s.jsx)(d.td,{children:"procedure"}),(0,s.jsx)(d.td,{children:"translate"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"binary"}),(0,s.jsx)(d.td,{children:"dlurlpathonly"}),(0,s.jsx)(d.td,{children:"last_value"}),(0,s.jsx)(d.td,{children:"ptf"}),(0,s.jsx)(d.td,{children:"translate_regex"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"bit"}),(0,s.jsx)(d.td,{children:"dlurlpathwrite"}),(0,s.jsx)(d.td,{children:"lateral"}),(0,s.jsx)(d.td,{children:"public"}),(0,s.jsx)(d.td,{children:"translation"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"bit_length"}),(0,s.jsx)(d.td,{children:"dlurlscheme"}),(0,s.jsx)(d.td,{children:"lead"}),(0,s.jsx)(d.td,{children:"range"}),(0,s.jsx)(d.td,{children:"treat"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"blob"}),(0,s.jsx)(d.td,{children:"dlurlserver"}),(0,s.jsx)(d.td,{children:"leading"}),(0,s.jsx)(d.td,{children:"rank"}),(0,s.jsx)(d.td,{children:"trigger"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"boolean"}),(0,s.jsx)(d.td,{children:"dlvalue"}),(0,s.jsx)(d.td,{children:"left"}),(0,s.jsx)(d.td,{children:"read"}),(0,s.jsx)(d.td,{children:"trim"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"both"}),(0,s.jsx)(d.td,{children:"do"}),(0,s.jsx)(d.td,{children:"level"}),(0,s.jsx)(d.td,{children:"reads"}),(0,s.jsx)(d.td,{children:"trim_array"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"by"}),(0,s.jsx)(d.td,{children:"domain"}),(0,s.jsx)(d.td,{children:"like"}),(0,s.jsx)(d.td,{children:"real"}),(0,s.jsx)(d.td,{children:"true"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"call"}),(0,s.jsx)(d.td,{children:"double"}),(0,s.jsx)(d.td,{children:"like_regex"}),(0,s.jsx)(d.td,{children:"recursive"}),(0,s.jsx)(d.td,{children:"truncate"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"called"}),(0,s.jsx)(d.td,{children:"drop"}),(0,s.jsx)(d.td,{children:"limit"}),(0,s.jsx)(d.td,{children:"ref"}),(0,s.jsx)(d.td,{children:"uescape"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cardinality"}),(0,s.jsx)(d.td,{children:"dynamic"}),(0,s.jsx)(d.td,{children:"listagg"}),(0,s.jsx)(d.td,{children:"references"}),(0,s.jsx)(d.td,{children:"union"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cascade"}),(0,s.jsx)(d.td,{children:"each"}),(0,s.jsx)(d.td,{children:"ln"}),(0,s.jsx)(d.td,{children:"referencing"}),(0,s.jsx)(d.td,{children:"unique"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cascaded"}),(0,s.jsx)(d.td,{children:"element"}),(0,s.jsx)(d.td,{children:"local"}),(0,s.jsx)(d.td,{children:"regr_avgx"}),(0,s.jsx)(d.td,{children:"unknown"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"case"}),(0,s.jsx)(d.td,{children:"else"}),(0,s.jsx)(d.td,{children:"localtime"}),(0,s.jsx)(d.td,{children:"regr_avgy"}),(0,s.jsx)(d.td,{children:"unmatched"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cast"}),(0,s.jsx)(d.td,{children:"empty"}),(0,s.jsx)(d.td,{children:"localtimestamp"}),(0,s.jsx)(d.td,{children:"regr_count"}),(0,s.jsx)(d.td,{children:"unnest"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"catalog"}),(0,s.jsx)(d.td,{children:"end"}),(0,s.jsx)(d.td,{children:"log"}),(0,s.jsx)(d.td,{children:"regr_intercept"}),(0,s.jsx)(d.td,{children:"update"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ceil"}),(0,s.jsx)(d.td,{children:"end-exec"}),(0,s.jsx)(d.td,{children:"log10"}),(0,s.jsx)(d.td,{children:"regr_r2"}),(0,s.jsx)(d.td,{children:"upper"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ceiling"}),(0,s.jsx)(d.td,{children:"end_frame"}),(0,s.jsx)(d.td,{children:"lower"}),(0,s.jsx)(d.td,{children:"regr_slope"}),(0,s.jsx)(d.td,{children:"usage"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"char"}),(0,s.jsx)(d.td,{children:"end_partition"}),(0,s.jsx)(d.td,{children:"match"}),(0,s.jsx)(d.td,{children:"regr_sxx"}),(0,s.jsx)(d.td,{children:"user"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"character"}),(0,s.jsx)(d.td,{children:"equals"}),(0,s.jsx)(d.td,{children:"matches"}),(0,s.jsx)(d.td,{children:"regr_sxy"}),(0,s.jsx)(d.td,{children:"using"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"character_length"}),(0,s.jsx)(d.td,{children:"escape"}),(0,s.jsx)(d.td,{children:"match_number"}),(0,s.jsx)(d.td,{children:"regr_syy"}),(0,s.jsx)(d.td,{children:"value"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"char_length"}),(0,s.jsx)(d.td,{children:"every"}),(0,s.jsx)(d.td,{children:"match_recognize"}),(0,s.jsx)(d.td,{children:"relative"}),(0,s.jsx)(d.td,{children:"values"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"check"}),(0,s.jsx)(d.td,{children:"except"}),(0,s.jsx)(d.td,{children:"max"}),(0,s.jsx)(d.td,{children:"release"}),(0,s.jsx)(d.td,{children:"value_of"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"classifier"}),(0,s.jsx)(d.td,{children:"exception"}),(0,s.jsx)(d.td,{children:"measures"}),(0,s.jsx)(d.td,{children:"restrict"}),(0,s.jsx)(d.td,{children:"varbinary"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"clob"}),(0,s.jsx)(d.td,{children:"exec"}),(0,s.jsx)(d.td,{children:"member"}),(0,s.jsx)(d.td,{children:"result"}),(0,s.jsx)(d.td,{children:"varchar"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"close"}),(0,s.jsx)(d.td,{children:"execute"}),(0,s.jsx)(d.td,{children:"merge"}),(0,s.jsx)(d.td,{children:"return"}),(0,s.jsx)(d.td,{children:"variadic"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"coalesce"}),(0,s.jsx)(d.td,{children:"exists"}),(0,s.jsx)(d.td,{children:"method"}),(0,s.jsx)(d.td,{children:"returning"}),(0,s.jsx)(d.td,{children:"varying"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"collate"}),(0,s.jsx)(d.td,{children:"exp"}),(0,s.jsx)(d.td,{children:"min"}),(0,s.jsx)(d.td,{children:"returns"}),(0,s.jsx)(d.td,{children:"var_pop"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"collation"}),(0,s.jsx)(d.td,{children:"external"}),(0,s.jsx)(d.td,{children:"minute"}),(0,s.jsx)(d.td,{children:"revoke"}),(0,s.jsx)(d.td,{children:"var_samp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"collect"}),(0,s.jsx)(d.td,{children:"extract"}),(0,s.jsx)(d.td,{children:"mod"}),(0,s.jsx)(d.td,{children:"right"}),(0,s.jsx)(d.td,{children:"verbose"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"column"}),(0,s.jsx)(d.td,{children:"false"}),(0,s.jsx)(d.td,{children:"modifies"}),(0,s.jsx)(d.td,{children:"rollback"}),(0,s.jsx)(d.td,{children:"versioning"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"commit"}),(0,s.jsx)(d.td,{children:"fetch"}),(0,s.jsx)(d.td,{children:"module"}),(0,s.jsx)(d.td,{children:"rollup"}),(0,s.jsx)(d.td,{children:"view"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"concurrently"}),(0,s.jsx)(d.td,{children:"filter"}),(0,s.jsx)(d.td,{children:"month"}),(0,s.jsx)(d.td,{children:"row"}),(0,s.jsx)(d.td,{children:"when"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"condition"}),(0,s.jsx)(d.td,{children:"first"}),(0,s.jsx)(d.td,{children:"multiset"}),(0,s.jsx)(d.td,{children:"rows"}),(0,s.jsx)(d.td,{children:"whenever"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"connect"}),(0,s.jsx)(d.td,{children:"first_value"}),(0,s.jsx)(d.td,{children:"names"}),(0,s.jsx)(d.td,{children:"row_number"}),(0,s.jsx)(d.td,{children:"where"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"connection"}),(0,s.jsx)(d.td,{children:"float"}),(0,s.jsx)(d.td,{children:"national"}),(0,s.jsx)(d.td,{children:"running"}),(0,s.jsx)(d.td,{children:"width_bucket"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"constraint"}),(0,s.jsx)(d.td,{children:"floor"}),(0,s.jsx)(d.td,{children:"natural"}),(0,s.jsx)(d.td,{children:"savepoint"}),(0,s.jsx)(d.td,{children:"window"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"constraints"}),(0,s.jsx)(d.td,{children:"for"}),(0,s.jsx)(d.td,{children:"nchar"}),(0,s.jsx)(d.td,{children:"schema"}),(0,s.jsx)(d.td,{children:"with"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"contains"}),(0,s.jsx)(d.td,{children:"foreign"}),(0,s.jsx)(d.td,{children:"nclob"}),(0,s.jsx)(d.td,{children:"scope"}),(0,s.jsx)(d.td,{children:"within"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"continue"}),(0,s.jsx)(d.td,{children:"found"}),(0,s.jsx)(d.td,{children:"new"}),(0,s.jsx)(d.td,{children:"scroll"}),(0,s.jsx)(d.td,{children:"without"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"convert"}),(0,s.jsx)(d.td,{children:"frame_row"}),(0,s.jsx)(d.td,{children:"next"}),(0,s.jsx)(d.td,{children:"search"}),(0,s.jsx)(d.td,{children:"work"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"copy"}),(0,s.jsx)(d.td,{children:"free"}),(0,s.jsx)(d.td,{children:"no"}),(0,s.jsx)(d.td,{children:"second"}),(0,s.jsx)(d.td,{children:"write"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"corr"}),(0,s.jsx)(d.td,{children:"freeze"}),(0,s.jsx)(d.td,{children:"none"}),(0,s.jsx)(d.td,{children:"section"}),(0,s.jsx)(d.td,{children:"xml"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"corresponding"}),(0,s.jsx)(d.td,{children:"from"}),(0,s.jsx)(d.td,{children:"normalize"}),(0,s.jsx)(d.td,{children:"seek"}),(0,s.jsx)(d.td,{children:"xmlagg"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cos"}),(0,s.jsx)(d.td,{children:"full"}),(0,s.jsx)(d.td,{children:"not"}),(0,s.jsx)(d.td,{children:"select"}),(0,s.jsx)(d.td,{children:"xmlattributes"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cosh"}),(0,s.jsx)(d.td,{children:"function"}),(0,s.jsx)(d.td,{children:"notnull"}),(0,s.jsx)(d.td,{children:"sensitive"}),(0,s.jsx)(d.td,{children:"xmlbinary"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"count"}),(0,s.jsx)(d.td,{children:"fusion"}),(0,s.jsx)(d.td,{children:"nth_value"}),(0,s.jsx)(d.td,{children:"session"}),(0,s.jsx)(d.td,{children:"xmlcast"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"covar_pop"}),(0,s.jsx)(d.td,{children:"get"}),(0,s.jsx)(d.td,{children:"ntile"}),(0,s.jsx)(d.td,{children:"session_user"}),(0,s.jsx)(d.td,{children:"xmlcomment"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"covar_samp"}),(0,s.jsx)(d.td,{children:"global"}),(0,s.jsx)(d.td,{children:"null"}),(0,s.jsx)(d.td,{children:"set"}),(0,s.jsx)(d.td,{children:"xmlconcat"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"create"}),(0,s.jsx)(d.td,{children:"go"}),(0,s.jsx)(d.td,{children:"nullif"}),(0,s.jsx)(d.td,{children:"show"}),(0,s.jsx)(d.td,{children:"xmldocument"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cross"}),(0,s.jsx)(d.td,{children:"goto"}),(0,s.jsx)(d.td,{children:"numeric"}),(0,s.jsx)(d.td,{children:"similar"}),(0,s.jsx)(d.td,{children:"xmlelement"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cube"}),(0,s.jsx)(d.td,{children:"grant"}),(0,s.jsx)(d.td,{children:"occurrences_regex"}),(0,s.jsx)(d.td,{children:"sin"}),(0,s.jsx)(d.td,{children:"xmlexists"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"cume_dist"}),(0,s.jsx)(d.td,{children:"group"}),(0,s.jsx)(d.td,{children:"octet_length"}),(0,s.jsx)(d.td,{children:"sinh"}),(0,s.jsx)(d.td,{children:"xmlforest"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current"}),(0,s.jsx)(d.td,{children:"grouping"}),(0,s.jsx)(d.td,{children:"of"}),(0,s.jsx)(d.td,{children:"size"}),(0,s.jsx)(d.td,{children:"xmliterate"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_catalog"}),(0,s.jsx)(d.td,{children:"groups"}),(0,s.jsx)(d.td,{children:"offset"}),(0,s.jsx)(d.td,{children:"skip"}),(0,s.jsx)(d.td,{children:"xmlnamespaces"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_date"}),(0,s.jsx)(d.td,{children:"having"}),(0,s.jsx)(d.td,{children:"old"}),(0,s.jsx)(d.td,{children:"smallint"}),(0,s.jsx)(d.td,{children:"xmlparse"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_default_transform_group"}),(0,s.jsx)(d.td,{children:"hold"}),(0,s.jsx)(d.td,{children:"omit"}),(0,s.jsx)(d.td,{children:"some"}),(0,s.jsx)(d.td,{children:"xmlpi"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_path"}),(0,s.jsx)(d.td,{children:"hour"}),(0,s.jsx)(d.td,{children:"on"}),(0,s.jsx)(d.td,{children:"space"}),(0,s.jsx)(d.td,{children:"xmlquery"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_role"}),(0,s.jsx)(d.td,{children:"identity"}),(0,s.jsx)(d.td,{children:"one"}),(0,s.jsx)(d.td,{children:"specific"}),(0,s.jsx)(d.td,{children:"xmlserialize"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_row"}),(0,s.jsx)(d.td,{children:"ilike"}),(0,s.jsx)(d.td,{children:"only"}),(0,s.jsx)(d.td,{children:"specifictype"}),(0,s.jsx)(d.td,{children:"xmltable"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_schema"}),(0,s.jsx)(d.td,{children:"immediate"}),(0,s.jsx)(d.td,{children:"open"}),(0,s.jsx)(d.td,{children:"sql"}),(0,s.jsx)(d.td,{children:"xmltext"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_time"}),(0,s.jsx)(d.td,{children:"import"}),(0,s.jsx)(d.td,{children:"option"}),(0,s.jsx)(d.td,{children:"sqlcode"}),(0,s.jsx)(d.td,{children:"xmlvalidate"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"current_timestamp"}),(0,s.jsx)(d.td,{children:"in"}),(0,s.jsx)(d.td,{children:"or"}),(0,s.jsx)(d.td,{children:"sqlerror"}),(0,s.jsx)(d.td,{children:"year"})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsx)(d.p,{children:"The changelog includes a list of breaking changes made to this connector. Backwards-compatible changes are not listed."}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.strong,{children:"Proceed with caution when editing materializations created with previous versions of this connector;\nediting always upgrades your materialization to the latest connector version."})}),"\n",(0,s.jsx)(d.h4,{id:"v4-2022-11-30",children:"V4: 2022-11-30"}),"\n",(0,s.jsx)(d.p,{children:"This version includes breaking changes to materialized table columns.\nThese  provide more consistent column names and types, but tables created from previous versions of the connector may\nnot be compatible with this version."}),"\n",(0,s.jsxs)(d.ul,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"Capitalization is now preserved when fields in Flow are converted to Postgres column names.\nPreviously, fields containing uppercase letters were converted to lowercase."}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsxs)(d.p,{children:["Field names and values of types ",(0,s.jsx)(d.code,{children:"date"}),", ",(0,s.jsx)(d.code,{children:"duration"}),", ",(0,s.jsx)(d.code,{children:"ipv4"}),", ",(0,s.jsx)(d.code,{children:"ipv6"}),", ",(0,s.jsx)(d.code,{children:"macaddr"}),", ",(0,s.jsx)(d.code,{children:"macaddr8"}),", and ",(0,s.jsx)(d.code,{children:"time"})," are now converted into\ntheir corresponding Postgres types.\nPreviously, only ",(0,s.jsx)(d.code,{children:"date-time"})," was converted, and all others were materialized as strings."]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>i,x:()=>l});var s=r(96540);const t={},n=s.createContext(t);function i(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);