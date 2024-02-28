"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8408],{37380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(74848),i=t(28453);const s={sidebar_position:1},o="OracleDB",c={id:"reference/Connectors/capture-connectors/oracle-db",title:"OracleDB",description:"This connector captures data from OracleDB into Flow collections.",source:"@site/docs/reference/Connectors/capture-connectors/oracle-db.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/oracle-db",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/oracle-db",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/oracle-db.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Analytics 4",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/google-analytics-4"},next:{title:"Pinterest",permalink:"/pr-preview/pr-1395/reference/Connectors/capture-connectors/pinterest"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Set up the OracleDB connector in Estuary Flow",id:"set-up-the-oracledb-connector-in-estuary-flow",level:3},{value:"Create a Dedicated User",id:"create-a-dedicated-user",level:3},{value:"Include Schemas for Discovery",id:"include-schemas-for-discovery",level:3},{value:"SSH Tunnel Configuration",id:"ssh-tunnel-configuration",level:3},{value:"Encryption Options",id:"encryption-options",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"oracledb",children:"OracleDB"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from OracleDB into Flow collections."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-oracle",":dev"," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Oracle 11g or above"}),"\n",(0,r.jsx)(n.li,{children:"Allow connections from Estuary Flow to your Oracle database (if they exist in separate VPCs)"}),"\n",(0,r.jsx)(n.li,{children:"Create a dedicated read-only Estuary Flow user with access to all tables needed for replication"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"Follow the steps below to set up the OracleDB connector."}),"\n",(0,r.jsx)(n.h3,{id:"set-up-the-oracledb-connector-in-estuary-flow",children:"Set up the OracleDB connector in Estuary Flow"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Log into your Estuary Flow account."}),"\n",(0,r.jsx)(n.li,{children:'In the left navigation bar, click on "Captures". In the top-left corner, click "Connector Search".'}),"\n",(0,r.jsx)(n.li,{children:'Enter the name for the OracleDB connector and select "Oracle Database" from the dropdown.'}),"\n",(0,r.jsx)(n.li,{children:"Enter a Primary Key using the standard form editor."}),"\n",(0,r.jsx)(n.li,{children:"Add Schemas: JDBC URL Params. Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3)."}),"\n",(0,r.jsx)(n.li,{children:"Choose an option to Connect By:"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Service Name"}),"\n",(0,r.jsx)(n.li,{children:"System ID"}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"On the next page, select your Cursor Field.  This currently has to be either a string or Timestamp value."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-a-dedicated-user",children:"Create a Dedicated User"}),"\n",(0,r.jsx)(n.p,{children:"Creating a dedicated database user with read-only access is recommended for better permission control and auditing."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"To create the user, run the following commands against your database:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE USER estuary_flow_user IDENTIFIED BY <your_password_here>;\nGRANT CREATE SESSION TO estuary_flow_user;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Next, grant the user read-only access to the relevant tables. The simplest way is to grant read access to all tables in the schema as follows:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"GRANT SELECT ANY TABLE TO estuary_flow_user;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Alternatively, you can be more granular and grant access to specific tables in different schemas:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'GRANT SELECT ON "<schema_a>"."<table_1>" TO estuary_flow_user;\nGRANT SELECT ON "<schema_b>"."<table_2>" TO estuary_flow_user;\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Your database user should now be ready for use with Estuary Flow."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"include-schemas-for-discovery",children:"Include Schemas for Discovery"}),"\n",(0,r.jsx)(n.p,{children:"In your Oracle configuration, you can specify the schemas that Flow should look at when discovering tables. The schema names are case-sensitive and will default to the upper-cased user if empty. If the user does not have access to the configured schemas, no tables will be discovered."}),"\n",(0,r.jsx)(n.h3,{id:"ssh-tunnel-configuration",children:"SSH Tunnel Configuration"}),"\n",(0,r.jsx)(n.p,{children:"If your Oracle instance is not directly accessible and you need to connect via an SSH tunnel, follow these additional steps."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Choose the SSH Tunnel Method:"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No Tunnel (default) for a direct connection."}),"\n",(0,r.jsx)(n.li,{children:"SSH Key Authentication or Password Authentication for SSH tunneling."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SSH Tunnel Jump Server Host: Provide the hostname or IP Address of the intermediate (bastion) server that Estuary Flow will connect to."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SSH Connection Port: Set the port on the bastion server with which to make the SSH connection. The default port for SSH connections is 22."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SSH Login Username: The username that Estuary Flow should use when connecting to the bastion server. This is NOT the Oracle username."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"For Password Authentication: Set SSH Login Username to the password of the user created in Step 2."}),"\n",(0,r.jsx)(n.li,{children:"For SSH Key Authentication: Leave SSH Login Username blank."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"SSH Private Key (for SSH Key Authentication): Provide the RSA Private Key that you are using to create the SSH connection. The key should be in PEM format, starting with -----BEGIN RSA PRIVATE KEY----- and ending with -----END RSA PRIVATE KEY-----."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"encryption-options",children:"Encryption Options"}),"\n",(0,r.jsx)(n.p,{children:"Estuary Flow has the ability to connect to the Oracle source with 3 network connectivity options:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Unencrypted: The connection will be made using the TCP protocol, transmitting all data over the network in unencrypted form."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Native Network Encryption: Gives you the ability to encrypt database connections, without the configuration overhead of TCP/IP and SSL/TLS and without the need to open and listen on different ports. In this case, the SQLNET.ENCRYPTION_CLIENT option will always be set as REQUIRED by default. The client or server will only accept encrypted traffic, but the user has the opportunity to choose an Encryption algorithm according to the security policies they need."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"TLS Encrypted (verify certificate): If this option is selected, data transfer will be transmitted using the TLS protocol, taking into account the handshake procedure and certificate verification. To use this option, insert the content of the certificate issued by the server into the SSL PEM file field."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,r.jsx)(n.a,{href:"https://docs.estuary.dev/concepts/connectors/#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the OracleDB source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/host"})}),(0,r.jsx)(n.td,{children:"Host"}),(0,r.jsx)(n.td,{children:"Hostname of the database."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/port"})}),(0,r.jsx)(n.td,{children:"Port"}),(0,r.jsx)(n.td,{children:"Port of the database. Oracle Corporations recommends the following port numbers: 1521 - Default listening port for client connections to the listener. 2484 - Recommended and officially registered listening port for client connections to the listener using TCP/IP with SSL"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/user"})}),(0,r.jsx)(n.td,{children:"User"}),(0,r.jsx)(n.td,{children:"The username which is used to access the database."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/password"})}),(0,r.jsx)(n.td,{children:"Password"}),(0,r.jsx)(n.td,{children:"The password associated with the username"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Stream"}),(0,r.jsx)(n.td,{children:"Resource of your OracleDB project from which collections are captured."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/syncMode"})})}),(0,r.jsx)(n.td,{children:"Sync Mode"}),(0,r.jsx)(n.td,{children:"Connection method."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "required": [\n    "host",\n    "port",\n    "username",\n    "connection_data",\n    "encryption"\n  ],\n  "properties": {\n    "connection_data": {\n      "default": {\n        "connection_type": "service_name"\n      },\n      "discriminator": {\n        "propertyName": "connection_type"\n      },\n      "oneOf": [\n        {\n          "description": "Use service name",\n          "properties": {\n            "connection_type": {\n              "const": "service_name",\n              "order": 0,\n              "type": "string",\n              "default": "service_name"\n            },\n            "service_name": {\n              "order": 1,\n              "title": "Service name",\n              "type": "string"\n            }\n          },\n          "required": [\n            "service_name"\n          ],\n          "title": "Service name"\n        },\n        {\n          "description": "Use SID (Oracle System Identifier)",\n          "properties": {\n            "connection_type": {\n              "const": "sid",\n              "order": 0,\n              "type": "string",\n              "default": "sid"\n            },\n            "sid": {\n              "order": 1,\n              "title": "System ID (SID)",\n              "type": "string"\n            }\n          },\n          "required": [\n            "sid"\n          ],\n          "title": "System ID (SID)"\n        }\n      ]\n    },\n    "encryption": {\n      "default": {\n        "encryption_method": "unencrypted"\n      },\n      "discriminator": {\n        "propertyName": "encryption_method"\n      },\n      "oneOf": [\n        {\n          "description": "Data transfer will not be encrypted.",\n          "properties": {\n            "encryption_method": {\n              "const": "unencrypted",\n              "type": "string",\n              "default": "unencrypted"\n            }\n          },\n          "required": [\n            "encryption_method"\n          ],\n          "title": "Unencrypted"\n        },\n        {\n          "description": "The native network encryption gives you the ability to encrypt database connections, without the configuration overhead of TCP/IP and SSL/TLS and without the need to open and listen on different ports.",\n          "properties": {\n            "encryption_algorithm": {\n              "default": "AES256",\n              "description": "This parameter defines what encryption algorithm is used.",\n              "enum": [\n                "AES256",\n                "RC4_56",\n                "3DES168"\n              ],\n              "title": "Encryption Algorithm",\n              "type": "string"\n            },\n            "encryption_method": {\n              "const": "client_nne",\n              "type": "string",\n              "default": "client_nne"\n            }\n          },\n          "required": [\n            "encryption_method"\n          ],\n          "title": "Native Network Encryption (NNE)"\n        },\n        {\n          "description": "Verify and use the certificate provided by the server.",\n          "properties": {\n            "encryption_method": {\n              "const": "encrypted_verify_certificate",\n              "type": "string",\n              "default": "encrypted_verify_certificate"\n            },\n            "ssl_certificate": {\n              "airbyte_secret": true,\n              "description": "Privacy Enhanced Mail (PEM) files are concatenated certificate containers frequently used in certificate installations.",\n              "multiline": true,\n              "order": 4,\n              "title": "SSL PEM File",\n              "type": "string"\n            }\n          },\n          "required": [\n            "encryption_method",\n            "ssl_certificate"\n          ],\n          "title": "TLS Encrypted (verify certificate)"\n        }\n      ]\n    },\n    "port": {\n      "description": "Port of the database. Oracle Corporations recommends the following port numbers: 1521 - Default listening port for client connections to the listener. 2484 - Recommended and officially registered listening port for client connections to the listener using TCP/IP with SSL"\n    },\n    "tunnel_method": {\n      "default": {\n        "tunnel_method": "NO_TUNNEL"\n      },\n      "discriminator": {\n        "propertyName": "tunnel_method"\n      },\n      "oneOf": [\n        {\n          "properties": {\n            "tunnel_method": {\n              "const": "NO_TUNNEL",\n              "description": "No ssh tunnel needed to connect to database",\n              "order": 0,\n              "type": "string",\n              "default": "NO_TUNNEL"\n            }\n          },\n          "required": [\n            "tunnel_method"\n          ],\n          "title": "No Tunnel"\n        },\n        {\n          "properties": {\n            "ssh_key": {\n              "airbyte_secret": true,\n              "description": "OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )",\n              "multiline": true,\n              "order": 4,\n              "title": "SSH Private Key",\n              "type": "string"\n            },\n            "tunnel_host": {\n              "description": "Hostname of the jump server host that allows inbound ssh tunnel.",\n              "order": 1,\n              "title": "SSH Tunnel Jump Server Host",\n              "type": "string"\n            },\n            "tunnel_method": {\n              "const": "SSH_KEY_AUTH",\n              "description": "Connect through a jump server tunnel host using username and ssh key",\n              "order": 0,\n              "type": "string",\n              "default": "SSH_KEY_AUTH"\n            },\n            "tunnel_port": {\n              "default": 22,\n              "description": "Port on the proxy/jump server that accepts inbound ssh connections.",\n              "examples": [\n                "22"\n              ],\n              "maximum": 65536,\n              "minimum": 0,\n              "order": 2,\n              "title": "SSH Connection Port",\n              "type": "integer"\n            },\n            "tunnel_user": {\n              "description": "OS-level username for logging into the jump server host.",\n              "order": 3,\n              "title": "SSH Login Username",\n              "type": "string"\n            }\n          },\n          "required": [\n            "tunnel_method",\n            "tunnel_host",\n            "tunnel_port",\n            "tunnel_user",\n            "ssh_key"\n          ],\n          "title": "SSH Key Authentication"\n        },\n        {\n          "properties": {\n            "tunnel_host": {\n              "description": "Hostname of the jump server host that allows inbound ssh tunnel.",\n              "order": 1,\n              "title": "SSH Tunnel Jump Server Host",\n              "type": "string"\n            },\n            "tunnel_method": {\n              "const": "SSH_PASSWORD_AUTH",\n              "description": "Connect through a jump server tunnel host using username and password authentication",\n              "order": 0,\n              "type": "string",\n              "default": "SSH_PASSWORD_AUTH"\n            },\n            "tunnel_port": {\n              "default": 22,\n              "description": "Port on the proxy/jump server that accepts inbound ssh connections.",\n              "examples": [\n                "22"\n              ],\n              "maximum": 65536,\n              "minimum": 0,\n              "order": 2,\n              "title": "SSH Connection Port",\n              "type": "integer"\n            },\n            "tunnel_user": {\n              "description": "OS-level username for logging into the jump server host",\n              "order": 3,\n              "title": "SSH Login Username",\n              "type": "string"\n            },\n            "tunnel_user_password": {\n              "airbyte_secret": true,\n              "description": "OS-level password for logging into the jump server host",\n              "order": 4,\n              "title": "Password",\n              "type": "string"\n            }\n          },\n          "required": [\n            "tunnel_method",\n            "tunnel_host",\n            "tunnel_port",\n            "tunnel_user",\n            "tunnel_user_password"\n          ],\n          "title": "Password Authentication"\n        }\n      ]\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);