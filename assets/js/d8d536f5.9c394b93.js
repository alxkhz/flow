"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7418],{56306:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=r(74848),s=r(28453);const n={},i="Amazon RDS for SQL Server",l={id:"reference/Connectors/materialization-connectors/amazon-rds-sqlserver",title:"Amazon RDS for SQL Server",description:"This connector materializes Flow collections into tables in a Microsoft SQLServer database.",source:"@site/docs/reference/Connectors/materialization-connectors/amazon-rds-sqlserver.md",sourceDirName:"reference/Connectors/materialization-connectors",slug:"/reference/Connectors/materialization-connectors/amazon-rds-sqlserver",permalink:"/reference/Connectors/materialization-connectors/amazon-rds-sqlserver",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-connectors/amazon-rds-sqlserver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amazon RDS for PostgreSQL",permalink:"/reference/Connectors/materialization-connectors/amazon-rds-postgres"},next:{title:"Amazon Redshift",permalink:"/reference/Connectors/materialization-connectors/amazon-redshift"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Connecting to SQLServer",id:"connecting-to-sqlserver",level:2},{value:"Delta updates",id:"delta-updates",level:2},{value:"Reserved words",id:"reserved-words",level:2},{value:"Changelog",id:"changelog",level:2},{value:"V1: 2023-09-01",id:"v1-2023-09-01",level:4}];function x(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.h1,{id:"amazon-rds-for-sql-server",children:"Amazon RDS for SQL Server"}),"\n",(0,t.jsx)(d.p,{children:"This connector materializes Flow collections into tables in a Microsoft SQLServer database."}),"\n",(0,t.jsxs)(d.p,{children:["It is available for use in the Flow web application. For local development or\nopen-source workflows,\n",(0,t.jsx)(d.a,{href:"https://ghcr.io/estuary/materialize-sqlserver:dev",children:(0,t.jsx)(d.code,{children:"ghcr.io/estuary/materialize-sqlserver:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,t.jsx)(d.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(d.p,{children:"To use this connector, you'll need:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["A SQLServer database to which to materialize, and user credentials.","\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"SQLServer 2017 and later are supported"}),"\n",(0,t.jsx)(d.li,{children:"The connector will create new tables in the database per your specification,\nso user credentials must have access to create new tables."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(d.li,{children:"At least one Flow collection"}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(d.p,{children:"To use this connector, begin with data in one or more Flow collections.\nUse the below properties to configure a SQLServer materialization, which will direct one or more of your Flow collections to your desired tables, or views, in the database."}),"\n",(0,t.jsx)(d.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(d.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Property"}),(0,t.jsx)(d.th,{children:"Title"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Required/Default"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/database"})})}),(0,t.jsx)(d.td,{children:"Database"}),(0,t.jsx)(d.td,{children:"Name of the logical database to materialize to."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/address"})})}),(0,t.jsx)(d.td,{children:"Address"}),(0,t.jsxs)(d.td,{children:["Host and port of the database. If only the host is specified, port will default to ",(0,t.jsx)(d.code,{children:"3306"}),"."]}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/password"})})}),(0,t.jsx)(d.td,{children:"Password"}),(0,t.jsx)(d.td,{children:"Password for the specified database user."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/user"})})}),(0,t.jsx)(d.td,{children:"User"}),(0,t.jsx)(d.td,{children:"Database user to connect as."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]})]})]}),"\n",(0,t.jsx)(d.h4,{id:"bindings",children:"Bindings"}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Property"}),(0,t.jsx)(d.th,{children:"Title"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Required/Default"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.strong,{children:(0,t.jsx)(d.code,{children:"/table"})})}),(0,t.jsx)(d.td,{children:"Table"}),(0,t.jsx)(d.td,{children:"Table name to materialize to. It will be created by the connector, unless the connector has previously created it."}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"Required"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"/delta_updates"})}),(0,t.jsx)(d.td,{children:"Delta Update"}),(0,t.jsx)(d.td,{children:"Should updates to this table be done via delta updates."}),(0,t.jsx)(d.td,{children:"boolean"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"false"})})]})]})]}),"\n",(0,t.jsx)(d.h3,{id:"sample",children:"Sample"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-yaml",children:"materializations:\n  ${PREFIX}/${mat_name}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-sqlserver:dev\n        config:\n          database: flow\n          address: localhost:5432\n          password: flow\n          user: flow\n    bindings:\n      - resource:\n          table: ${TABLE_NAME}\n        source: ${PREFIX}/${COLLECTION_NAME}\n"})}),"\n",(0,t.jsx)(d.h2,{id:"connecting-to-sqlserver",children:"Connecting to SQLServer"}),"\n",(0,t.jsxs)(d.ol,{children:["\n",(0,t.jsxs)(d.li,{children:["\n",(0,t.jsx)(d.p,{children:"Allow connections between the database and Estuary Flow. There are two ways to do this: by granting direct access to Flow's IP or by creating an SSH tunnel."}),"\n",(0,t.jsxs)(d.ol,{children:["\n",(0,t.jsxs)(d.li,{children:["\n",(0,t.jsx)(d.p,{children:"To allow direct access:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html",children:"Modify the database"}),", setting ",(0,t.jsx)(d.strong,{children:"Public accessibility"})," to ",(0,t.jsx)(d.strong,{children:"Yes"}),"."]}),"\n",(0,t.jsxs)(d.li,{children:["Edit the VPC security group associated with your database, or create a new VPC security group and associate it as described in ",(0,t.jsx)(d.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html#Overview.RDSSecurityGroups.Create",children:"the Amazon documentation"}),".Create a new inbound rule and a new outbound rule that allow all traffic from the IP address ",(0,t.jsx)(d.code,{children:"34.121.207.128"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(d.li,{children:["\n",(0,t.jsx)(d.p,{children:"To allow secure connections via SSH tunneling:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["Follow the guide to ",(0,t.jsx)(d.a,{href:"../../../../guides/connect-network/",children:"configure an SSH server for tunneling"})]}),"\n",(0,t.jsxs)(d.li,{children:["When you configure your connector as described in the ",(0,t.jsx)(d.a,{href:"#configuration",children:"configuration"})," section above, including the additional ",(0,t.jsx)(d.code,{children:"networkTunnel"})," configuration to enable the SSH tunnel. See ",(0,t.jsx)(d.a,{href:"/concepts/connectors#connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"})," for additional details and a sample."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(d.li,{children:["\n",(0,t.jsxs)(d.p,{children:["In your SQL client, connect to your instance as the default ",(0,t.jsx)(d.code,{children:"sqlserver"})," user and issue the following commands."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-sql",children:"USE <database>;\n-- Create user and password for use with the connector.\nCREATE LOGIN flow_materialize WITH PASSWORD = 'Secret123!';\nCREATE USER flow_materialize FOR LOGIN flow_materialize;\n-- Grant control on the database to flow_materialize\nGRANT CONTROL ON DATABASE::<database> TO flow_materialize;\n"})}),"\n",(0,t.jsxs)(d.ol,{start:"3",children:["\n",(0,t.jsxs)(d.li,{children:["In the ",(0,t.jsx)(d.a,{href:"https://console.aws.amazon.com/rds/",children:"RDS console"}),", note the instance's Endpoint and Port. You'll need these for the ",(0,t.jsx)(d.code,{children:"address"})," property when you configure the connector."]}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"delta-updates",children:"Delta updates"}),"\n",(0,t.jsxs)(d.p,{children:["This connector supports both standard (merge) and ",(0,t.jsx)(d.a,{href:"/concepts/materialization#delta-updates",children:"delta updates"}),".\nThe default is to use standard updates."]}),"\n",(0,t.jsx)(d.h2,{id:"reserved-words",children:"Reserved words"}),"\n",(0,t.jsxs)(d.p,{children:["SQLServer has a list of reserved words that must be quoted in order to be used as an identifier.\nFlow considers all the reserved words in the official ",(0,t.jsx)(d.a,{href:"https://learn.microsoft.com/en-us/sql/t-sql/language-elements/reserved-keywords-transact-sql?view=sql-server-2017",children:"SQLServer documentation"}),"."]}),"\n",(0,t.jsx)(d.p,{children:"These reserved words are listed in the table below. Flow automatically quotes fields that are in this list."}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Reserved words"}),(0,t.jsx)(d.th,{}),(0,t.jsx)(d.th,{}),(0,t.jsx)(d.th,{}),(0,t.jsx)(d.th,{})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"absolute"}),(0,t.jsx)(d.td,{children:"connect"}),(0,t.jsx)(d.td,{children:"else"}),(0,t.jsx)(d.td,{children:"intersect"}),(0,t.jsx)(d.td,{children:"on"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"action"}),(0,t.jsx)(d.td,{children:"connection"}),(0,t.jsx)(d.td,{children:"end"}),(0,t.jsx)(d.td,{children:"intersection"}),(0,t.jsx)(d.td,{children:"only"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"ada"}),(0,t.jsx)(d.td,{children:"constraint"}),(0,t.jsx)(d.td,{children:"end-exec"}),(0,t.jsx)(d.td,{children:"interval"}),(0,t.jsx)(d.td,{children:"open"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"add"}),(0,t.jsx)(d.td,{children:"constraints"}),(0,t.jsx)(d.td,{children:"equals"}),(0,t.jsx)(d.td,{children:"into"}),(0,t.jsx)(d.td,{children:"opendatasourc"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"admin"}),(0,t.jsx)(d.td,{children:"constructor"}),(0,t.jsx)(d.td,{children:"errlvl"}),(0,t.jsx)(d.td,{children:"is"}),(0,t.jsx)(d.td,{children:"openquery"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"after"}),(0,t.jsx)(d.td,{children:"contains"}),(0,t.jsx)(d.td,{children:"escape"}),(0,t.jsx)(d.td,{children:"isolation"}),(0,t.jsx)(d.td,{children:"openrowset"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"aggregate"}),(0,t.jsx)(d.td,{children:"containstable"}),(0,t.jsx)(d.td,{children:"every"}),(0,t.jsx)(d.td,{children:"iterate"}),(0,t.jsx)(d.td,{children:"openxml"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"alias"}),(0,t.jsx)(d.td,{children:"continue"}),(0,t.jsx)(d.td,{children:"except"}),(0,t.jsx)(d.td,{children:"join"}),(0,t.jsx)(d.td,{children:"operation"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"all"}),(0,t.jsx)(d.td,{children:"convert"}),(0,t.jsx)(d.td,{children:"exception"}),(0,t.jsx)(d.td,{children:"key"}),(0,t.jsx)(d.td,{children:"option"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"allocate"}),(0,t.jsx)(d.td,{children:"corr"}),(0,t.jsx)(d.td,{children:"exec"}),(0,t.jsx)(d.td,{children:"kill"}),(0,t.jsx)(d.td,{children:"or"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"alter"}),(0,t.jsx)(d.td,{children:"corresponding"}),(0,t.jsx)(d.td,{children:"execute"}),(0,t.jsx)(d.td,{children:"language"}),(0,t.jsx)(d.td,{children:"order"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"and"}),(0,t.jsx)(d.td,{children:"count"}),(0,t.jsx)(d.td,{children:"exists"}),(0,t.jsx)(d.td,{children:"large"}),(0,t.jsx)(d.td,{children:"ordinality"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"any"}),(0,t.jsx)(d.td,{children:"covar_pop"}),(0,t.jsx)(d.td,{children:"exit"}),(0,t.jsx)(d.td,{children:"last"}),(0,t.jsx)(d.td,{children:"out"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"are"}),(0,t.jsx)(d.td,{children:"covar_samp"}),(0,t.jsx)(d.td,{children:"external"}),(0,t.jsx)(d.td,{children:"lateral"}),(0,t.jsx)(d.td,{children:"outer"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"array"}),(0,t.jsx)(d.td,{children:"create"}),(0,t.jsx)(d.td,{children:"extract"}),(0,t.jsx)(d.td,{children:"leading"}),(0,t.jsx)(d.td,{children:"output"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"as"}),(0,t.jsx)(d.td,{children:"cross"}),(0,t.jsx)(d.td,{children:"false"}),(0,t.jsx)(d.td,{children:"left"}),(0,t.jsx)(d.td,{children:"over"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"asc"}),(0,t.jsx)(d.td,{children:"cube"}),(0,t.jsx)(d.td,{children:"fetch"}),(0,t.jsx)(d.td,{children:"less"}),(0,t.jsx)(d.td,{children:"overlaps"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"asensitive"}),(0,t.jsx)(d.td,{children:"cume_dist"}),(0,t.jsx)(d.td,{children:"file"}),(0,t.jsx)(d.td,{children:"level"}),(0,t.jsx)(d.td,{children:"overlay"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"assertion"}),(0,t.jsx)(d.td,{children:"current"}),(0,t.jsx)(d.td,{children:"fillfactor"}),(0,t.jsx)(d.td,{children:"like"}),(0,t.jsx)(d.td,{children:"pad"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"asymmetric"}),(0,t.jsx)(d.td,{children:"current_catal"}),(0,t.jsx)(d.td,{children:"filter"}),(0,t.jsx)(d.td,{children:"like_regex"}),(0,t.jsx)(d.td,{children:"parameter"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"at"}),(0,t.jsx)(d.td,{children:"current_date"}),(0,t.jsx)(d.td,{children:"first"}),(0,t.jsx)(d.td,{children:"limit"}),(0,t.jsx)(d.td,{children:"parameters"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"atomic"}),(0,t.jsx)(d.td,{children:"current_defau"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"lineno"}),(0,t.jsx)(d.td,{children:"partial"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"authorization"}),(0,t.jsx)(d.td,{children:"current_path"}),(0,t.jsx)(d.td,{children:"for"}),(0,t.jsx)(d.td,{children:"ln"}),(0,t.jsx)(d.td,{children:"partition"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"avg"}),(0,t.jsx)(d.td,{children:"current_role"}),(0,t.jsx)(d.td,{children:"foreign"}),(0,t.jsx)(d.td,{children:"load"}),(0,t.jsx)(d.td,{children:"pascal"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"backup"}),(0,t.jsx)(d.td,{children:"current_schem"}),(0,t.jsx)(d.td,{children:"fortran"}),(0,t.jsx)(d.td,{children:"local"}),(0,t.jsx)(d.td,{children:"path"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"before"}),(0,t.jsx)(d.td,{children:"current_time"}),(0,t.jsx)(d.td,{children:"found"}),(0,t.jsx)(d.td,{children:"localtime"}),(0,t.jsx)(d.td,{children:"percent"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"begin"}),(0,t.jsx)(d.td,{children:"current_times"}),(0,t.jsx)(d.td,{children:"free"}),(0,t.jsx)(d.td,{children:"localtimestam"}),(0,t.jsx)(d.td,{children:"percent_rank"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"between"}),(0,t.jsx)(d.td,{children:"current_trans"}),(0,t.jsx)(d.td,{children:"freetext"}),(0,t.jsx)(d.td,{children:"locator"}),(0,t.jsx)(d.td,{children:"percentile_co"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"binary"}),(0,t.jsx)(d.td,{children:"current_user"}),(0,t.jsx)(d.td,{children:"freetexttable"}),(0,t.jsx)(d.td,{children:"lower"}),(0,t.jsx)(d.td,{children:"percentile_di"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bit"}),(0,t.jsx)(d.td,{children:"cursor"}),(0,t.jsx)(d.td,{children:"from"}),(0,t.jsx)(d.td,{children:"map"}),(0,t.jsx)(d.td,{children:"pivot"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bit_length"}),(0,t.jsx)(d.td,{children:"cycle"}),(0,t.jsx)(d.td,{children:"full"}),(0,t.jsx)(d.td,{children:"match"}),(0,t.jsx)(d.td,{children:"plan"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"blob"}),(0,t.jsx)(d.td,{children:"data"}),(0,t.jsx)(d.td,{children:"fulltexttable"}),(0,t.jsx)(d.td,{children:"max"}),(0,t.jsx)(d.td,{children:"position"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"boolean"}),(0,t.jsx)(d.td,{children:"database"}),(0,t.jsx)(d.td,{children:"function"}),(0,t.jsx)(d.td,{children:"member"}),(0,t.jsx)(d.td,{children:"position_rege"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"both"}),(0,t.jsx)(d.td,{children:"date"}),(0,t.jsx)(d.td,{children:"fusion"}),(0,t.jsx)(d.td,{children:"merge"}),(0,t.jsx)(d.td,{children:"postfix"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"breadth"}),(0,t.jsx)(d.td,{children:"day"}),(0,t.jsx)(d.td,{children:"general"}),(0,t.jsx)(d.td,{children:"method"}),(0,t.jsx)(d.td,{children:"precision"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"break"}),(0,t.jsx)(d.td,{children:"dbcc"}),(0,t.jsx)(d.td,{children:"get"}),(0,t.jsx)(d.td,{children:"min"}),(0,t.jsx)(d.td,{children:"prefix"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"browse"}),(0,t.jsx)(d.td,{children:"deallocate"}),(0,t.jsx)(d.td,{children:"global"}),(0,t.jsx)(d.td,{children:"minute"}),(0,t.jsx)(d.td,{children:"preorder"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bulk"}),(0,t.jsx)(d.td,{children:"dec"}),(0,t.jsx)(d.td,{children:"go"}),(0,t.jsx)(d.td,{children:"mod"}),(0,t.jsx)(d.td,{children:"prepare"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"by"}),(0,t.jsx)(d.td,{children:"decimal"}),(0,t.jsx)(d.td,{children:"goto"}),(0,t.jsx)(d.td,{children:"modifies"}),(0,t.jsx)(d.td,{children:"preserve"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"call"}),(0,t.jsx)(d.td,{children:"declare"}),(0,t.jsx)(d.td,{children:"grant"}),(0,t.jsx)(d.td,{children:"modify"}),(0,t.jsx)(d.td,{children:"primary"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"called"}),(0,t.jsx)(d.td,{children:"default"}),(0,t.jsx)(d.td,{children:"group"}),(0,t.jsx)(d.td,{children:"module"}),(0,t.jsx)(d.td,{children:"print"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cardinality"}),(0,t.jsx)(d.td,{children:"deferrable"}),(0,t.jsx)(d.td,{children:"grouping"}),(0,t.jsx)(d.td,{children:"month"}),(0,t.jsx)(d.td,{children:"prior"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cascade"}),(0,t.jsx)(d.td,{children:"deferred"}),(0,t.jsx)(d.td,{children:"having"}),(0,t.jsx)(d.td,{children:"multiset"}),(0,t.jsx)(d.td,{children:"privileges"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cascaded"}),(0,t.jsx)(d.td,{children:"delete"}),(0,t.jsx)(d.td,{children:"hold"}),(0,t.jsx)(d.td,{children:"names"}),(0,t.jsx)(d.td,{children:"proc"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"case"}),(0,t.jsx)(d.td,{children:"deny"}),(0,t.jsx)(d.td,{children:"holdlock"}),(0,t.jsx)(d.td,{children:"national"}),(0,t.jsx)(d.td,{children:"procedure"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"cast"}),(0,t.jsx)(d.td,{children:"depth"}),(0,t.jsx)(d.td,{children:"host"}),(0,t.jsx)(d.td,{children:"natural"}),(0,t.jsx)(d.td,{children:"public"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"catalog"}),(0,t.jsx)(d.td,{children:"deref"}),(0,t.jsx)(d.td,{children:"hour"}),(0,t.jsx)(d.td,{children:"nchar"}),(0,t.jsx)(d.td,{children:"raiserror"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"char"}),(0,t.jsx)(d.td,{children:"desc"}),(0,t.jsx)(d.td,{children:"identity"}),(0,t.jsx)(d.td,{children:"nclob"}),(0,t.jsx)(d.td,{children:"range"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"char_length"}),(0,t.jsx)(d.td,{children:"describe"}),(0,t.jsx)(d.td,{children:"identity_inse"}),(0,t.jsx)(d.td,{children:"new"}),(0,t.jsx)(d.td,{children:"read"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"character"}),(0,t.jsx)(d.td,{children:"descriptor"}),(0,t.jsx)(d.td,{children:"identitycol"}),(0,t.jsx)(d.td,{children:"next"}),(0,t.jsx)(d.td,{children:"reads"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"character_len"}),(0,t.jsx)(d.td,{children:"destroy"}),(0,t.jsx)(d.td,{children:"if"}),(0,t.jsx)(d.td,{children:"no"}),(0,t.jsx)(d.td,{children:"readtext"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"check"}),(0,t.jsx)(d.td,{children:"destructor"}),(0,t.jsx)(d.td,{children:"ignore"}),(0,t.jsx)(d.td,{children:"nocheck"}),(0,t.jsx)(d.td,{children:"real"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"checkpoint"}),(0,t.jsx)(d.td,{children:"deterministic"}),(0,t.jsx)(d.td,{children:"immediate"}),(0,t.jsx)(d.td,{children:"nonclustered"}),(0,t.jsx)(d.td,{children:"reconfigure"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"class"}),(0,t.jsx)(d.td,{children:"diagnostics"}),(0,t.jsx)(d.td,{children:"in"}),(0,t.jsx)(d.td,{children:"none"}),(0,t.jsx)(d.td,{children:"recursive"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clob"}),(0,t.jsx)(d.td,{children:"dictionary"}),(0,t.jsx)(d.td,{children:"include"}),(0,t.jsx)(d.td,{children:"normalize"}),(0,t.jsx)(d.td,{children:"ref"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"close"}),(0,t.jsx)(d.td,{children:"disconnect"}),(0,t.jsx)(d.td,{children:"index"}),(0,t.jsx)(d.td,{children:"not"}),(0,t.jsx)(d.td,{children:"references"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"clustered"}),(0,t.jsx)(d.td,{children:"disk"}),(0,t.jsx)(d.td,{children:"indicator"}),(0,t.jsx)(d.td,{children:"null"}),(0,t.jsx)(d.td,{children:"referencing"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"coalesce"}),(0,t.jsx)(d.td,{children:"distinct"}),(0,t.jsx)(d.td,{children:"initialize"}),(0,t.jsx)(d.td,{children:"nullif"}),(0,t.jsx)(d.td,{children:"regr_avgx"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"collate"}),(0,t.jsx)(d.td,{children:"distributed"}),(0,t.jsx)(d.td,{children:"initially"}),(0,t.jsx)(d.td,{children:"numeric"}),(0,t.jsx)(d.td,{children:"regr_avgy"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"collation"}),(0,t.jsx)(d.td,{children:"domain"}),(0,t.jsx)(d.td,{children:"inner"}),(0,t.jsx)(d.td,{children:"object"}),(0,t.jsx)(d.td,{children:"regr_count"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"collect"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"inout"}),(0,t.jsx)(d.td,{children:"occurrences_r"}),(0,t.jsx)(d.td,{children:"regr_intercep"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"column"}),(0,t.jsx)(d.td,{children:"drop"}),(0,t.jsx)(d.td,{children:"input"}),(0,t.jsx)(d.td,{children:"octet_length"}),(0,t.jsx)(d.td,{children:"regr_r2"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"commit"}),(0,t.jsx)(d.td,{children:"dump"}),(0,t.jsx)(d.td,{children:"insensitive"}),(0,t.jsx)(d.td,{children:"of"}),(0,t.jsx)(d.td,{children:"regr_slope"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"completion"}),(0,t.jsx)(d.td,{children:"dynamic"}),(0,t.jsx)(d.td,{children:"insert"}),(0,t.jsx)(d.td,{children:"off"}),(0,t.jsx)(d.td,{children:"regr_sxx"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"compute"}),(0,t.jsx)(d.td,{children:"each"}),(0,t.jsx)(d.td,{children:"int"}),(0,t.jsx)(d.td,{children:"offsets"}),(0,t.jsx)(d.td,{children:"regr_sxy"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"condition"}),(0,t.jsx)(d.td,{children:"element"}),(0,t.jsx)(d.td,{children:"integer"}),(0,t.jsx)(d.td,{children:"old"}),(0,t.jsx)(d.td,{children:"regr_syy"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"relative"}),(0,t.jsx)(d.td,{children:"semanticsimil"}),(0,t.jsx)(d.td,{children:"structure"}),(0,t.jsx)(d.td,{children:"truncate"}),(0,t.jsx)(d.td,{children:"window"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"release"}),(0,t.jsx)(d.td,{children:"semanticsimil"}),(0,t.jsx)(d.td,{children:"submultiset"}),(0,t.jsx)(d.td,{children:"try_convert"}),(0,t.jsx)(d.td,{children:"with"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"replication"}),(0,t.jsx)(d.td,{children:"sensitive"}),(0,t.jsx)(d.td,{children:"substring"}),(0,t.jsx)(d.td,{children:"tsequal"}),(0,t.jsx)(d.td,{children:"within"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"restore"}),(0,t.jsx)(d.td,{children:"sequence"}),(0,t.jsx)(d.td,{children:"substring_reg"}),(0,t.jsx)(d.td,{children:"uescape"}),(0,t.jsx)(d.td,{children:"within"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"restrict"}),(0,t.jsx)(d.td,{children:"session"}),(0,t.jsx)(d.td,{children:"sum"}),(0,t.jsx)(d.td,{children:"under"}),(0,t.jsx)(d.td,{children:"without"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"result"}),(0,t.jsx)(d.td,{children:"session_user"}),(0,t.jsx)(d.td,{children:"symmetric"}),(0,t.jsx)(d.td,{children:"union"}),(0,t.jsx)(d.td,{children:"work"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"return"}),(0,t.jsx)(d.td,{children:"set"}),(0,t.jsx)(d.td,{children:"system"}),(0,t.jsx)(d.td,{children:"unique"}),(0,t.jsx)(d.td,{children:"write"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"returns"}),(0,t.jsx)(d.td,{children:"sets"}),(0,t.jsx)(d.td,{children:"system_user"}),(0,t.jsx)(d.td,{children:"unknown"}),(0,t.jsx)(d.td,{children:"writetext"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"revert"}),(0,t.jsx)(d.td,{children:"setuser"}),(0,t.jsx)(d.td,{children:"table"}),(0,t.jsx)(d.td,{children:"unnest"}),(0,t.jsx)(d.td,{children:"xmlagg"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"revoke"}),(0,t.jsx)(d.td,{children:"shutdown"}),(0,t.jsx)(d.td,{children:"tablesample"}),(0,t.jsx)(d.td,{children:"unpivot"}),(0,t.jsx)(d.td,{children:"xmlattributes"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"right"}),(0,t.jsx)(d.td,{children:"similar"}),(0,t.jsx)(d.td,{children:"temporary"}),(0,t.jsx)(d.td,{children:"update"}),(0,t.jsx)(d.td,{children:"xmlbinary"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"role"}),(0,t.jsx)(d.td,{children:"size"}),(0,t.jsx)(d.td,{children:"terminate"}),(0,t.jsx)(d.td,{children:"updatetext"}),(0,t.jsx)(d.td,{children:"xmlcast"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rollback"}),(0,t.jsx)(d.td,{children:"smallint"}),(0,t.jsx)(d.td,{children:"textsize"}),(0,t.jsx)(d.td,{children:"upper"}),(0,t.jsx)(d.td,{children:"xmlcomment"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rollup"}),(0,t.jsx)(d.td,{children:"some"}),(0,t.jsx)(d.td,{children:"than"}),(0,t.jsx)(d.td,{children:"usage"}),(0,t.jsx)(d.td,{children:"xmlconcat"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"routine"}),(0,t.jsx)(d.td,{children:"space"}),(0,t.jsx)(d.td,{children:"then"}),(0,t.jsx)(d.td,{children:"use"}),(0,t.jsx)(d.td,{children:"xmldocument"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"row"}),(0,t.jsx)(d.td,{children:"specific"}),(0,t.jsx)(d.td,{children:"time"}),(0,t.jsx)(d.td,{children:"user"}),(0,t.jsx)(d.td,{children:"xmlelement"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rowcount"}),(0,t.jsx)(d.td,{children:"specifictype"}),(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"using"}),(0,t.jsx)(d.td,{children:"xmlexists"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rowguidcol"}),(0,t.jsx)(d.td,{children:"sql"}),(0,t.jsx)(d.td,{children:"timezone_hour"}),(0,t.jsx)(d.td,{children:"value"}),(0,t.jsx)(d.td,{children:"xmlforest"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rows"}),(0,t.jsx)(d.td,{children:"sqlca"}),(0,t.jsx)(d.td,{children:"timezone_minu"}),(0,t.jsx)(d.td,{children:"values"}),(0,t.jsx)(d.td,{children:"xmliterate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"rule"}),(0,t.jsx)(d.td,{children:"sqlcode"}),(0,t.jsx)(d.td,{children:"to"}),(0,t.jsx)(d.td,{children:"var_pop"}),(0,t.jsx)(d.td,{children:"xmlnamespaces"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"save"}),(0,t.jsx)(d.td,{children:"sqlerror"}),(0,t.jsx)(d.td,{children:"top"}),(0,t.jsx)(d.td,{children:"var_samp"}),(0,t.jsx)(d.td,{children:"xmlparse"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"savepoint"}),(0,t.jsx)(d.td,{children:"sqlexception"}),(0,t.jsx)(d.td,{children:"trailing"}),(0,t.jsx)(d.td,{children:"varchar"}),(0,t.jsx)(d.td,{children:"xmlpi"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"schema"}),(0,t.jsx)(d.td,{children:"sqlstate"}),(0,t.jsx)(d.td,{children:"tran"}),(0,t.jsx)(d.td,{children:"variable"}),(0,t.jsx)(d.td,{children:"xmlquery"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"scope"}),(0,t.jsx)(d.td,{children:"sqlwarning"}),(0,t.jsx)(d.td,{children:"transaction"}),(0,t.jsx)(d.td,{children:"varying"}),(0,t.jsx)(d.td,{children:"xmlserialize"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"scroll"}),(0,t.jsx)(d.td,{children:"start"}),(0,t.jsx)(d.td,{children:"translate"}),(0,t.jsx)(d.td,{children:"view"}),(0,t.jsx)(d.td,{children:"xmltable"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"search"}),(0,t.jsx)(d.td,{children:"state"}),(0,t.jsx)(d.td,{children:"translate_reg"}),(0,t.jsx)(d.td,{children:"waitfor"}),(0,t.jsx)(d.td,{children:"xmltext"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"second"}),(0,t.jsx)(d.td,{children:"statement"}),(0,t.jsx)(d.td,{children:"translation"}),(0,t.jsx)(d.td,{children:"when"}),(0,t.jsx)(d.td,{children:"xmlvalidate"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"section"}),(0,t.jsx)(d.td,{children:"static"}),(0,t.jsx)(d.td,{children:"treat"}),(0,t.jsx)(d.td,{children:"whenever"}),(0,t.jsx)(d.td,{children:"year"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"securityaudit"}),(0,t.jsx)(d.td,{children:"statistics"}),(0,t.jsx)(d.td,{children:"trigger"}),(0,t.jsx)(d.td,{children:"where"}),(0,t.jsx)(d.td,{children:"zone"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"select"}),(0,t.jsx)(d.td,{children:"stddev_pop"}),(0,t.jsx)(d.td,{children:"trim"}),(0,t.jsx)(d.td,{children:"while"}),(0,t.jsx)(d.td,{})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"semantickeyph"}),(0,t.jsx)(d.td,{children:"stddev_samp"}),(0,t.jsx)(d.td,{children:"true"}),(0,t.jsx)(d.td,{children:"width_bucket"}),(0,t.jsx)(d.td,{})]})]})]}),"\n",(0,t.jsx)(d.h2,{id:"changelog",children:"Changelog"}),"\n",(0,t.jsx)(d.p,{children:"The changelog includes a list of breaking changes made to this connector. Backwards-compatible changes are not listed."}),"\n",(0,t.jsx)(d.p,{children:(0,t.jsx)(d.strong,{children:"Proceed with caution when editing materializations created with previous versions of this connector;\nediting always upgrades your materialization to the latest connector version."})}),"\n",(0,t.jsx)(d.h4,{id:"v1-2023-09-01",children:"V1: 2023-09-01"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"First version"}),"\n"]})]})}function j(e={}){const{wrapper:d}={...(0,s.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},28453:(e,d,r)=>{r.d(d,{R:()=>i,x:()=>l});var t=r(96540);const s={},n=t.createContext(s);function i(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);