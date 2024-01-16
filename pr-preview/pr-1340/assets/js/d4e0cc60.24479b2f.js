"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="Postgres (Heroku)",l={unversionedId:"reference/Connectors/capture-connectors/postgres-heroku",id:"reference/Connectors/capture-connectors/postgres-heroku",title:"Postgres (Heroku)",description:"This connector captures data from Postgres into Flow collections.  It is specifically for DBs that don't support write ahead logs.",source:"@site/docs/reference/Connectors/capture-connectors/postgres-heroku.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/postgres-heroku",permalink:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/postgres-heroku",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/postgres-heroku.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pinterest",permalink:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/pinterest"},next:{title:"WooCommerce",permalink:"/pr-preview/pr-1340/reference/Connectors/capture-connectors/woocommerce"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Set up the Postgres Connector in Estuary Flow",id:"set-up-the-postgres-connector-in-estuary-flow",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Supported Cursors",id:"supported-cursors",level:2},{value:"Limitations",id:"limitations",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgres-heroku"},"Postgres (Heroku)"),(0,o.kt)("p",null,"This connector captures data from Postgres into Flow collections.  It is specifically for DBs that don't support write ahead logs."),(0,o.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ghcr.io/estuary/source-postgres:dev provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before setting up the Postgres source connector, make sure you have the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Postgres Version: Use Postgres v9.3.x or above for non-CDC workflows and Postgres v10 or above for CDC workflows."),(0,o.kt)("li",{parentName:"ul"},"SSL Enabled: Ensure SSL is enabled in your environment.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Follow the steps below to set up the Postgres connector:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into the Heroku UI and extract your Username and Password.")),(0,o.kt)("h3",{id:"set-up-the-postgres-connector-in-estuary-flow"},"Set up the Postgres Connector in Estuary Flow"),(0,o.kt)("p",null,"To configure the Postgres source connector:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into your Estuary Flow account."),(0,o.kt)("li",{parentName:"ol"},"Navigate to Captures."),(0,o.kt)("li",{parentName:"ol"},'Choose "Postgres (Heroku)" from the connector search.'),(0,o.kt)("li",{parentName:"ol"},"Enter the Host, Port, DB Name and password for your Postgres database from step 1 above."),(0,o.kt)("li",{parentName:"ol"},"List the Schemas you want to sync if applicable."),(0,o.kt)("li",{parentName:"ol"},'Select "require" from the SSL Mode options (Heroku mandates it).'),(0,o.kt)("li",{parentName:"ol"},"On the next page, select a cursor field for each collection.  Note that your cursor field currently has to be either a timestamp or string.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.estuary.dev/concepts/connectors/#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the Postgres (Heroku) source connector."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/host")),(0,o.kt)("td",{parentName:"tr",align:null},"Host"),(0,o.kt)("td",{parentName:"tr",align:null},"Hostname of the database."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/port")),(0,o.kt)("td",{parentName:"tr",align:null},"Port"),(0,o.kt)("td",{parentName:"tr",align:null},"Port of the database"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Default")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/database_name")),(0,o.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the database"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h4",{id:"bindings"},"Bindings"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,o.kt)("td",{parentName:"tr",align:null},"Stream"),(0,o.kt)("td",{parentName:"tr",align:null},"Resource of your Postgres Tables from which collections are captured."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,o.kt)("td",{parentName:"tr",align:null},"Sync Mode"),(0,o.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "properties": {\n    "replication_method": {\n      "oneOf": null,\n      "type": "object",\n      "properties": {\n        "method": {\n          "type": "string",\n          "default": "Standard",\n          "const": "Standard"\n        }\n      },\n      "default": {\n        "method": "Standard"\n      }\n    },\n    "jdbc_url_params": {\n      "description": "Additional properties to pass to the JDBC URL string when connecting to the database formatted as \'key=value\' pairs separated by the symbol \'&\'. (Eg. key1=value1&key2=value2&key3=value3). For more information see https://jdbc.postgresql.org/documentation/head/connect.html"\n    },\n    "ssl_mode": {\n      "description": "SSL connection modes. Read more at https://jdbc.postgresql.org/documentation/head/ssl-client.html",\n      "oneOf": [\n        {\n          "additionalProperties": true,\n          "description": "Disables encryption of communication between Flow and source database.",\n          "properties": {\n            "mode": {\n              "const": "disable",\n              "order": 0,\n              "type": "string"\n            }\n          },\n          "required": [\n            "mode"\n          ],\n          "title": "disable"\n        },\n        {\n          "additionalProperties": true,\n          "description": "Enables encryption only when required by the source database.",\n          "properties": {\n            "mode": {\n              "const": "allow",\n              "order": 0,\n              "type": "string"\n            }\n          },\n          "required": [\n            "mode"\n          ],\n          "title": "allow"\n        },\n        {\n          "additionalProperties": true,\n          "description": "Allows unencrypted connection only if the source database does not support encryption.",\n          "properties": {\n            "mode": {\n              "const": "prefer",\n              "order": 0,\n              "type": "string"\n            }\n          },\n          "required": [\n            "mode"\n          ],\n          "title": "prefer"\n        },\n        {\n          "additionalProperties": true,\n          "description": "Always require encryption. If the source database server does not support encryption, connection will fail.",\n          "properties": {\n            "mode": {\n              "const": "require",\n              "order": 0,\n              "type": "string"\n            }\n          },\n          "required": [\n            "mode"\n          ],\n          "title": "require"\n        },\n        {\n          "additionalProperties": true,\n          "description": "Always require encryption and verifies that the source database server has a valid SSL certificate.",\n          "properties": {\n            "ca_certificate": {\n              "airbyte_secret": true,\n              "description": "CA certificate",\n              "multiline": true,\n              "order": 1,\n              "title": "CA Certificate",\n              "type": "string"\n            },\n            "client_certificate": {\n              "airbyte_secret": true,\n              "always_show": true,\n              "description": "Client certificate",\n              "multiline": true,\n              "order": 2,\n              "title": "Client Certificate",\n              "type": "string"\n            },\n            "client_key": {\n              "airbyte_secret": true,\n              "always_show": true,\n              "description": "Client key",\n              "multiline": true,\n              "order": 3,\n              "title": "Client Key",\n              "type": "string"\n            },\n            "client_key_password": {\n              "airbyte_secret": true,\n              "description": "Password for keystorage. If you do not add it - the password will be generated automatically.",\n              "order": 4,\n              "title": "Client key password",\n              "type": "string"\n            },\n            "mode": {\n              "const": "verify-ca",\n              "order": 0,\n              "type": "string"\n            }\n          },\n          "required": [\n            "mode",\n            "ca_certificate"\n          ],\n          "title": "verify-ca"\n        },\n        {\n          "additionalProperties": true,\n          "description": "This is the most secure mode. Always require encryption and verifies the identity of the source database server.",\n          "properties": {\n            "ca_certificate": {\n              "airbyte_secret": true,\n              "description": "CA certificate",\n              "multiline": true,\n              "order": 1,\n              "title": "CA Certificate",\n              "type": "string"\n            },\n            "client_certificate": {\n              "airbyte_secret": true,\n              "always_show": true,\n              "description": "Client certificate",\n              "multiline": true,\n              "order": 2,\n              "title": "Client Certificate",\n              "type": "string"\n            },\n            "client_key": {\n              "airbyte_secret": true,\n              "always_show": true,\n              "description": "Client key",\n              "multiline": true,\n              "order": 3,\n              "title": "Client Key",\n              "type": "string"\n            },\n            "client_key_password": {\n              "airbyte_secret": true,\n              "description": "Password for keystorage. If you do not add it - the password will be generated automatically.",\n              "order": 4,\n              "title": "Client key password",\n              "type": "string"\n            },\n            "mode": {\n              "const": "verify-full",\n              "order": 0,\n              "type": "string"\n            }\n          },\n          "required": [\n            "mode",\n            "ca_certificate"\n          ],\n          "title": "verify-full"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"supported-cursors"},"Supported Cursors"),(0,o.kt)("p",null,"The supported cursors for incremental sync are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TIMESTAMP"),(0,o.kt)("li",{parentName:"ul"},"TIMESTAMP_WITH_TIMEZONE"),(0,o.kt)("li",{parentName:"ul"},"TIME"),(0,o.kt)("li",{parentName:"ul"},"TIME_WITH_TIMEZONE"),(0,o.kt)("li",{parentName:"ul"},"DATE"),(0,o.kt)("li",{parentName:"ul"},"BIT"),(0,o.kt)("li",{parentName:"ul"},"BOOLEAN"),(0,o.kt)("li",{parentName:"ul"},"TINYINT/SMALLINT"),(0,o.kt)("li",{parentName:"ul"},"INTEGER"),(0,o.kt)("li",{parentName:"ul"},"BIGINT"),(0,o.kt)("li",{parentName:"ul"},"FLOAT/DOUBLE"),(0,o.kt)("li",{parentName:"ul"},"REAL"),(0,o.kt)("li",{parentName:"ul"},"NUMERIC/DECIMAL"),(0,o.kt)("li",{parentName:"ul"},"CHAR/NCHAR/NVARCHAR/VARCHAR/LONGVARCHAR"),(0,o.kt)("li",{parentName:"ul"},"BINARY/BLOB")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"The Postgres source connector has the following limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Schema Size: Schemas larger than 4MB are not supported."),(0,o.kt)("li",{parentName:"ul"},"Schema Alteration: The connector does not alter the schema present in your database. The destination may alter the schema, depending on its configuration."),(0,o.kt)("li",{parentName:"ul"},"Schema Evolution: Adding/removing tables without resetting the entire connection is supported. Resetting a single table within the connection without resetting the rest of the destination tables is also supported. Changing a column data type or removing a column might break connections."),(0,o.kt)("li",{parentName:"ul"},"Xmin Replication Mode: Xmin replication is supported for cursor-less replication."),(0,o.kt)("li",{parentName:"ul"},"Temporary File Size Limit: Larger tables may encounter temporary file size limit errors. You may need to increase the temp_file_limit.")))}d.isMDXComponent=!0}}]);