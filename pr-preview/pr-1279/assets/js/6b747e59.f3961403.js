"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7547],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Amazon RDS for MariaDB",l={unversionedId:"reference/Connectors/capture-connectors/amazon-rds-mariadb",id:"reference/Connectors/capture-connectors/amazon-rds-mariadb",title:"Amazon RDS for MariaDB",description:"This is a change data capture (CDC) connector that captures change events from a MariaDB database via the Binary Log.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-rds-mariadb.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-rds-mariadb",permalink:"/pr-preview/pr-1279/reference/Connectors/capture-connectors/amazon-rds-mariadb",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-rds-mariadb.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Greenhouse",permalink:"/pr-preview/pr-1279/reference/Connectors/capture-connectors/greenhouse"},next:{title:"Amazon RDS for SQL Server",permalink:"/pr-preview/pr-1279/reference/Connectors/capture-connectors/amazon-rds-sqlserver"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:3},{value:"Backfills and performance considerations",id:"backfills-and-performance-considerations",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Troubleshooting Capture Errors",id:"troubleshooting-capture-errors",level:2},{value:"Unsupported Operations",id:"unsupported-operations",level:3},{value:"Data Manipulation Queries",id:"data-manipulation-queries",level:3},{value:"Unhandled Queries",id:"unhandled-queries",level:3},{value:"Metadata Errors",id:"metadata-errors",level:3},{value:"Insufficient Binlog Retention",id:"insufficient-binlog-retention",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-rds-for-mariadb"},"Amazon RDS for MariaDB"),(0,r.kt)("p",null,"This is a change data capture (CDC) connector that captures change events from a MariaDB database via the ",(0,r.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/overview-of-the-binary-log/"},"Binary Log"),".\nIt's derived from the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/reference/Connectors/capture-connectors/MySQL"},"MySQL capture connector"),",\nso the same configuration applies, but the setup steps look somewhat different."),(0,r.kt)("p",null,"This connector is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/connectors/pkgs/container/source-mariadb"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-mariadb:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need a MariaDB database setup with the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mariadb.com/kb/en/binary-log-formats/"},(0,r.kt)("inlineCode",{parentName:"a"},"binlog_format")),"\nsystem variable set to ",(0,r.kt)("inlineCode",{parentName:"li"},"ROW"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mariadb.com/kb/en/using-and-maintaining-the-binary-log/#purging-log-files"},"Binary log expiration period")," set to at least 30 days (2592000 seconds) if at all possible.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This value may be set lower if necessary, but we ",(0,r.kt)("a",{parentName:"li",href:"#insufficient-binlog-retention"},"strongly discourage")," going below 7 days as this may increase the likelihood of unrecoverable failures.\nMariaDB's default value is 0 (no expiration)."))),(0,r.kt)("li",{parentName:"ul"},'A watermarks table. The watermarks table is a small "scratch space"\nto which the connector occasionally writes a small amount of data (a UUID,\nspecifically) to ensure accuracy when backfilling preexisting table contents.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The default name is ",(0,r.kt)("inlineCode",{parentName:"li"},'"flow.watermarks"'),", but this can be overridden in ",(0,r.kt)("inlineCode",{parentName:"li"},"config.json"),"."))),(0,r.kt)("li",{parentName:"ul"},"A database user with appropriate permissions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"REPLICATION CLIENT")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLICATION SLAVE")," ",(0,r.kt)("a",{parentName:"li",href:"https://mariadb.com/docs/skysql/ref/es10.6/privileges/"},"privileges"),"."),(0,r.kt)("li",{parentName:"ul"},"Permission to insert, update, and delete on the watermarks table."),(0,r.kt)("li",{parentName:"ul"},"Permission to read the tables being captured."),(0,r.kt)("li",{parentName:"ul"},"Permission to read from ",(0,r.kt)("inlineCode",{parentName:"li"},"information_schema")," tables, if automatic discovery is used."))),(0,r.kt)("li",{parentName:"ul"},"If the table(s) to be captured include columns of type ",(0,r.kt)("inlineCode",{parentName:"li"},"DATETIME"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"time_zone")," system variable\nmust be set to an IANA zone name or numerical offset or the capture configured with a ",(0,r.kt)("inlineCode",{parentName:"li"},"timezone")," to use by default.")),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Allow connections to the database from the Estuary Flow IP address."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html"},"Modify the database"),", setting ",(0,r.kt)("strong",{parentName:"p"},"Public accessibility")," to ",(0,r.kt)("strong",{parentName:"p"},"Yes"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the VPC security group associated with your database, or create a new VPC security group and associate it with the database.\nRefer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html#Overview.RDSSecurityGroups.Create"},"steps in the Amazon documentation"),".\nCreate a new inbound rule and a new outbound rule that allow all traffic from the IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"34.121.207.128"),"."))),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, you can allow secure connections via SSH tunneling. To do so:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Follow the guide to ",(0,r.kt)("a",{parentName:"li",href:"../../../../guides/connect-network/"},"configure an SSH server for tunneling")),(0,r.kt)("li",{parentName:"ul"},"When you configure your connector as described in the ",(0,r.kt)("a",{parentName:"li",href:"#configuration"},"configuration")," section above,\nincluding the additional ",(0,r.kt)("inlineCode",{parentName:"li"},"networkTunnel")," configuration to enable the SSH tunnel.\nSee ",(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-1279/concepts/connectors#connecting-to-endpoints-on-secure-networks"},"Connecting to endpoints on secure networks"),"\nfor additional details and a sample.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a RDS parameter group to enable replication in MariaDB."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Creating"},"Create a parameter group"),".\nCreate a unique name and description and set the following properties:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Family"),": mariadb10.6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": DB Parameter group"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Modifying"},"Modify the new parameter group")," and update the following parameters:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"binlog_format: ROW"),(0,r.kt)("li",{parentName:"ul"},"binlog_row_metadata: FULL"),(0,r.kt)("li",{parentName:"ul"},"read_only: 0"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If using the primary instance  (not recommended), ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithDBInstanceParamGroups.html#USER_WorkingWithParamGroups.Associating"},"associate the  parameter group"),"\nwith the database and set ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.Enabling"},"Backup Retention Period")," to 7 days.\nReboot the database to allow the changes to take effect.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a read replica with the new parameter group applied (recommended)."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html#USER_ReadRepl.Create"},"Create a read replica"),"\nof your MariaDB database.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html"},"Modify the replica"),"\nand set the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DB parameter group"),": choose the parameter group you created previously"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backup retention period"),": 7 days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Public access"),": Publicly accessible"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reboot the replica to allow the changes to take effect.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Switch to your MariaDB client. Run the following commands to create a new user for the capture with appropriate permissions,\nand set up the watermarks table:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE IF NOT EXISTS flow;\nCREATE TABLE IF NOT EXISTS flow.watermarks (slot INTEGER PRIMARY KEY, watermark TEXT);\nCREATE USER IF NOT EXISTS flow_capture\n  IDENTIFIED BY 'secret'\nGRANT REPLICATION CLIENT, REPLICATION SLAVE ON *.* TO 'flow_capture';\nGRANT SELECT ON *.* TO 'flow_capture';\nGRANT INSERT, UPDATE, DELETE ON flow.watermarks TO 'flow_capture';\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Run the following command to set the binary log retention to 7 days, the maximum value which RDS MariaDB permits:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CALL mysql.rds_set_configuration('binlog retention hours', 168);\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/rds/"},"RDS console"),", note the instance's Endpoint and Port. You'll need these for the ",(0,r.kt)("inlineCode",{parentName:"li"},"address")," property when you configure the connector.")),(0,r.kt)("h2",{id:"backfills-and-performance-considerations"},"Backfills and performance considerations"),(0,r.kt)("p",null,"When the a MariaDB capture is initiated, by default, the connector first ",(0,r.kt)("em",{parentName:"p"},"backfills"),", or captures the targeted tables in their current state. It then transitions to capturing change events on an ongoing basis."),(0,r.kt)("p",null,"This is desirable in most cases, as in ensures that a complete view of your tables is captured into Flow.\nHowever, you may find it appropriate to skip the backfill, especially for extremely large tables."),(0,r.kt)("p",null,"In this case, you may turn of backfilling on a per-table basis. See ",(0,r.kt)("a",{parentName:"p",href:"#properties"},"properties")," for details."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the MariaDB source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Server Address"),(0,r.kt)("td",{parentName:"tr",align:null},"The host or host:port at which the database can be reached."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/user"))),(0,r.kt)("td",{parentName:"tr",align:null},"Login User"),(0,r.kt)("td",{parentName:"tr",align:null},"The database user to authenticate as."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"flow_capture"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Login Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for the specified database user."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/timezone")),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone to use when capturing datetime columns. Should normally be left blank to use the database's ",(0,r.kt)("inlineCode",{parentName:"td"},"'time_zone'")," system variable. Only required if the ",(0,r.kt)("inlineCode",{parentName:"td"},"'time_zone'")," system variable cannot be read and columns with type datetime are being captured. Must be a valid IANA time zone name or +HH:MM offset. Takes precedence over the ",(0,r.kt)("inlineCode",{parentName:"td"},"'time_zone'")," system variable if both are set."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/watermarks_table")),(0,r.kt)("td",{parentName:"tr",align:null},"Watermarks Table Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the table used for watermark writes. Must be fully-qualified in ","'","<","schema",">",".","<","table",">","'"," form."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"flow.watermarks"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/dbname")),(0,r.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of database to connect to. In general this shouldn","'","t matter. The connector can discover and capture from all databases it","'","s authorized to access."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"mysql"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/node_id")),(0,r.kt)("td",{parentName:"tr",align:null},"Node ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Node ID for the capture. Each node in a replication cluster must have a unique 32-bit ID. The specific value doesn","'","t matter so long as it is unique. If unset or zero the connector will pick a value."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/skip_backfills")),(0,r.kt)("td",{parentName:"tr",align:null},"Skip Backfills"),(0,r.kt)("td",{parentName:"tr",align:null},"A comma-separated list of fully-qualified table names which should not be backfilled."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/backfill_chunk_size")),(0,r.kt)("td",{parentName:"tr",align:null},"Backfill Chunk Size"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of rows which should be fetched from the database in a single backfill query."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"131072"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/skip_binlog_retention_check")),(0,r.kt)("td",{parentName:"tr",align:null},"Skip Binlog Retention Sanity Check"),(0,r.kt)("td",{parentName:"tr",align:null},"Bypasses the ","'","dangerously short binlog retention","'"," sanity check at startup. Only do this if you understand the danger and have a specific need."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/namespace"))),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://mariadb.com/kb/en/understanding-mariadb-architecture/#databases"},"database")," in which the table resides."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the table to be captured from the database."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,r.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you configure this connector in the web application, the automatic ",(0,r.kt)("strong",{parentName:"p"},"discovery")," process sets up a binding for ",(0,r.kt)("em",{parentName:"p"},"most")," tables it finds in your database, but there are exceptions."),(0,r.kt)("p",{parentName:"admonition"},"Tables in the MariaDB system databases ",(0,r.kt)("inlineCode",{parentName:"p"},"information_schema"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"performance_schema")," will not be discovered.\nYou can add bindings for such tables manually.")),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"A minimal capture definition will look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-mariadb:dev\n        config:\n          address: "127.0.0.1:3306"\n          user: "flow_capture"\n          password: "secret"\n    bindings:\n      - resource:\n          namespace: ${TABLE_NAMESPACE}\n          stream: ${TABLE_NAME}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n')),(0,r.kt)("p",null,"Your capture definition will likely be more complex, with additional bindings for each table in the source database."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1279/concepts/captures#pull-captures"},"Learn more about capture definitions.")),(0,r.kt)("h2",{id:"troubleshooting-capture-errors"},"Troubleshooting Capture Errors"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"source-amazon-rds-mariadb")," connector is designed to halt immediately if something wrong or unexpected happens, instead of continuing on and potentially outputting incorrect data. What follows is a non-exhaustive list of some potential failure modes, and what action should be taken to fix these situations:"),(0,r.kt)("h3",{id:"unsupported-operations"},"Unsupported Operations"),(0,r.kt)("p",null,"If your capture is failing with an ",(0,r.kt)("inlineCode",{parentName:"p"},'"unsupported operation {ALTER,DROP,TRUNCATE,etc} TABLE"')," error, this indicates that such an operation has taken place impacting a table which is currently being captured."),(0,r.kt)("p",null,"In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," and other destructive operations this is not supported, and can only be resolved by removing the offending table(s) from the capture bindings list, after which you may recreate the capture if desired (causing the latest state of the table to be recaptured in its entirety)."),(0,r.kt)("p",null,"In the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," we currently support table alterations to add or drop columns from a table. This error indicates that whatever alteration took place is not currently supported. Practically speaking the immediate resolution is the same as for a ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"TRUNCATE TABLE"),", but if you frequently perform schema migrations it may be worth reaching out to see if we can add support for whatever table alteration you just did."),(0,r.kt)("h3",{id:"data-manipulation-queries"},"Data Manipulation Queries"),(0,r.kt)("p",null,"If your capture is failing with an ",(0,r.kt)("inlineCode",{parentName:"p"},'"unsupported DML query"')," error, this means that an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," or other data manipulation query is present in the binlog. This should generally not happen if ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_format = 'ROW'")," as described in the ",(0,r.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section."),(0,r.kt)("p",null,"Resolving this error requires fixing the ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_format")," system variable, and then either tearing down and recreating the entire capture so that it restarts at a later point in the binlog, or in the case of an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," query it may suffice to remove the capture binding for the offending table and then re-add it."),(0,r.kt)("h3",{id:"unhandled-queries"},"Unhandled Queries"),(0,r.kt)("p",null,"If your capture is failing with an ",(0,r.kt)("inlineCode",{parentName:"p"},'"unhandled query"')," error, some SQL query is present in the binlog which the connector does not (currently) understand."),(0,r.kt)("p",null,"In general, this error suggests that the connector should be modified to at least recognize this type of query, and most likely categorize it as either an unsupported ",(0,r.kt)("a",{parentName:"p",href:"#data-manipulation-queries"},"DML Query"),", an unsupported ",(0,r.kt)("a",{parentName:"p",href:"#unsupported-operations"},"Table Operation"),", or something that can safely be ignored. Until such a fix is made the capture cannot proceed, and you will need to tear down and recreate the entire capture so that it restarts from a later point in the binlog."),(0,r.kt)("h3",{id:"metadata-errors"},"Metadata Errors"),(0,r.kt)("p",null,"If your capture is failing with a ",(0,r.kt)("inlineCode",{parentName:"p"},'"metadata error"')," then something has gone badly wrong with the capture's tracking of table metadata, such as column names or datatypes."),(0,r.kt)("p",null,"This should never happen, and most likely means that the binlog itself is corrupt in some way. If this occurs, it can be resolved by removing the offending table(s) from the capture bindings list and then recreating the capture (generally into a new collection, as this process will cause the table to be re-captured in its entirety)."),(0,r.kt)("h3",{id:"insufficient-binlog-retention"},"Insufficient Binlog Retention"),(0,r.kt)("p",null,"If your capture fails with a ",(0,r.kt)("inlineCode",{parentName:"p"},'"binlog retention period is too short"')," error, it is informing you that the MariaDB binlog retention period is set to a dangerously low value, and your capture would risk unrecoverable failure if it were paused or the server became unreachable for a nontrivial amount of time, such that the database expired a binlog segment that the capture was still reading from."),(0,r.kt)("p",null,"(If this were to happen, then change events would be permanently lost and that particular capture would never be able to make progress without potentially producing incorrect data. Thus the capture would need to be torn down and recreated so that each table could be re-captured in its entirety, starting with a complete backfill of current contents.)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'"binlog retention period is too short"')," error should normally be fixed by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"binlog_expire_logs_seconds = 2592000")," as described in the ",(0,r.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," section (and when running on a managed cloud platform additional steps may be required, refer to the managed cloud setup instructions above). However, advanced users who understand the risks can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"skip_binlog_retention_check")," configuration option to disable this safety."))}m.isMDXComponent=!0}}]);