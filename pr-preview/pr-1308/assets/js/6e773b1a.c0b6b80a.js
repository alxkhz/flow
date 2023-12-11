"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},l="SFTP",o={unversionedId:"reference/Connectors/capture-connectors/sftp",id:"reference/Connectors/capture-connectors/sftp",title:"SFTP",description:"This connector captures data from an SFTP server.",source:"@site/docs/reference/Connectors/capture-connectors/sftp.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/sftp",permalink:"/pr-preview/pr-1308/reference/Connectors/capture-connectors/sftp",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/sftp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sentry",permalink:"/pr-preview/pr-1308/reference/Connectors/capture-connectors/sentry"},next:{title:"Slack",permalink:"/pr-preview/pr-1308/reference/Connectors/capture-connectors/slack"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Subdirectories and Symbolic Links",id:"subdirectories-and-symbolic-links",level:2},{value:"File Capturing Order",id:"file-capturing-order",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Advanced: Parsing SFTP Files",id:"advanced-parsing-sftp-files",level:3},{value:"CSV configuration",id:"csv-configuration",level:4}],d={toc:s},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sftp"},"SFTP"),(0,r.kt)("p",null,"This connector captures data from an SFTP server."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-sftp:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-sftp:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You'll need an SFTP server that can accept connections from the Estuary Flow IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"34.121.207.128")," using password authentication."),(0,r.kt)("h2",{id:"subdirectories-and-symbolic-links"},"Subdirectories and Symbolic Links"),(0,r.kt)("p",null,"The connector must be configured with a ",(0,r.kt)("inlineCode",{parentName:"p"},"Directory")," to capture files from. It will also descend into and capture files in normal subdirectories of the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"Directory"),"."),(0,r.kt)("p",null,"Symbolic links to files are captured from the referent files. Symbolic links to subdirectories are ",(0,r.kt)("em",{parentName:"p"},"not")," captured, although the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"Directory")," may itself be a symbolic link."),(0,r.kt)("h2",{id:"file-capturing-order"},"File Capturing Order"),(0,r.kt)("p",null,"The standard mode of operation for the connector is to capture files according to their modification time. All files available on the server will initially be captured, and on an on-going basis new files that are added to the server are captured incrementally. New files added to the server are captured based on their modification time: If the connector finds a file with a more recent modification time than any previously observed, it will be captured. This means that any actions that update the modification time of a file on the server may cause it to be re-captured. For symbolic links to files the modification time of referent file is used, not of the symbolic link."),(0,r.kt)("p",null,"Alternatively, the advanced option ",(0,r.kt)("inlineCode",{parentName:"p"},"Ascending Keys")," may be set. In this mode of operation the connector processes files strictly based on their path. New files are captured if they have a path lexically greater than any previously captured file. Lexical ordering considers the full path of the file."),(0,r.kt)("p",null,"As an example, consider a directory structure like the following with a data file initially in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/b/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/root/\n  a/\n  b/data.csv\n  c/\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the normal mode of operation (",(0,r.kt)("inlineCode",{parentName:"li"},"Ascending Keys")," not set) the path ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/b/data.csv")," will initially be captured. Any added files will be captured by the connector on an on-going basis as they have increasingly more recent modification times."),(0,r.kt)("li",{parentName:"ul"},"With ",(0,r.kt)("inlineCode",{parentName:"li"},"Ascending Keys")," set the path ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/b/data.csv")," will initially be captured, but after that only added files in a higher lexical order will be captured:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Any file added to the directory ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/a/")," will ",(0,r.kt)("em",{parentName:"li"},"not")," be captured, becuase ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/a/")," comes before ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/b/"),"."),(0,r.kt)("li",{parentName:"ul"},"Any file added to the directory ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/c/")," ",(0,r.kt)("em",{parentName:"li"},"will")," captured, because ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/c/")," comes after ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/b/"),"."),(0,r.kt)("li",{parentName:"ul"},"A file added to the directory ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/b/")," may be captured if its name comes after ",(0,r.kt)("inlineCode",{parentName:"li"},"data.csv"),"."),(0,r.kt)("li",{parentName:"ul"},"This ordering applies on an on-going basis. If a file is added to ",(0,r.kt)("inlineCode",{parentName:"li"},"/root/c/"),", after that only files with a higher lexical ordering than that file to be captured.")))),(0,r.kt)("p",null,"Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"Ascending Keys")," is only recommended if you have strict control over the naming of files and can ensure they are added in increasing lexical ordering."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file. See ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1308/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the SFTP source connector."),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/address"))),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Host and port of the SFTP server. Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"myserver.com:22")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/username"))),(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Username for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/password"))),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/directory"))),(0,r.kt)("td",{parentName:"tr",align:null},"Directory"),(0,r.kt)("td",{parentName:"tr",align:null},"Directory to capture files from. All files in this directory and any subdirectories will be included."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/matchFiles")),(0,r.kt)("td",{parentName:"tr",align:null},"Match Files Regex"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter applied to all file names in the directory. If provided, only files whose path (relative to the directory) matches this regex will be captured. For example, you can use ",(0,r.kt)("inlineCode",{parentName:"td"},".*\\.json")," to only capture json files."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/ascendingKeys")),(0,r.kt)("td",{parentName:"tr",align:null},"Ascending Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"May improve sync speeds by listing files from the end of the last sync, rather than listing all files in the configured directory. This requires that you write files in ascending lexicographic order, such as an RFC-3339 timestamp, so that lexical path ordering matches modification time ordering."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser")),(0,r.kt)("td",{parentName:"tr",align:null},"Parser Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures how files are parsed (optional, see below)"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Compression"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how to decompress the contents. The default, 'Auto', will try to determine the compression automatically."),(0,r.kt)("td",{parentName:"tr",align:null},"null, string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/format")),(0,r.kt)("td",{parentName:"tr",align:null},"Format"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how to parse the contents. The default, 'Auto', will try to determine the format automatically based on the file extension or MIME type, if available."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type":"auto"}'))))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to the captured directory."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${CAPTURE_NAME}:\n      endpoint:\n        connector:\n          image: "ghcr.io/estuary/source-sftp:dev"\n          config:\n            address: myserver.com:22\n            username: <SECRET>\n            password: <SECRET>\n            directory: /data\n            parser:\n              compression: zip\n              format:\n                type: csv\n                config:\n                  delimiter: ","\n                  encoding: UTF-8\n                  errorThreshold: 5\n                  headers: [ID, username, first_name, last_name]\n                  lineEnding: "\\\\r"\n                  quote: "\\""\n      bindings:\n        - resource:\n            stream: /data\n          target: ${COLLECTION_NAME}\n')),(0,r.kt)("h3",{id:"advanced-parsing-sftp-files"},"Advanced: Parsing SFTP Files"),(0,r.kt)("p",null,"SFTP servers can support a wider variety of file types than other data source systems. For each of\nthese file types, Flow must parse and translate data into collections with defined fields and JSON\nschemas."),(0,r.kt)("p",null,"By default, the parser will automatically detect the type and shape of the data in your bucket,\nso you won't need to change the parser configuration for most captures."),(0,r.kt)("p",null,"However, the automatic detection may be incorrect in some cases.\nTo fix or prevent this, you can provide explicit information in the parser configuration,\nwhich is part of the ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint configuration")," for this connector."),(0,r.kt)("p",null,"The parser configuration includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compression"),": Specify how the bucket contents are compressed.\nIf no compression type is specified, the connector will try to determine the compression type automatically.\nOptions are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gzip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zstd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"none")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Format"),": Specify the data format, which determines how it will be parsed.\nOptions are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Auto"),": If no format is specified, the connector will try to determine it automatically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Avro"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CSV"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JSON"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Protobuf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"W3C Extended Log")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At this time, Flow only supports SFTP captures with data of a single file type.\nSupport for multiple file types, which can be configured on a per-binding basis,\nwill be added in the future."),(0,r.kt)("p",{parentName:"admonition"},"For now, use a prefix in the endpoint configuration to limit the scope of each capture to data of a single file type.")))))),(0,r.kt)("h4",{id:"csv-configuration"},"CSV configuration"),(0,r.kt)("p",null,"CSV files include several additional properties that are important to the parser.\nIn most cases, Flow is able to automatically determine the correct values,\nbut you may need to specify for unusual datasets. These properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delimiter"),". Options are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Comma (",(0,r.kt)("inlineCode",{parentName:"li"},'","'),")"),(0,r.kt)("li",{parentName:"ul"},"Pipe (",(0,r.kt)("inlineCode",{parentName:"li"},'"|"'),")"),(0,r.kt)("li",{parentName:"ul"},"Space (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x20"'),")"),(0,r.kt)("li",{parentName:"ul"},"Semicolon (",(0,r.kt)("inlineCode",{parentName:"li"},'";"'),")"),(0,r.kt)("li",{parentName:"ul"},"Tab (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x09"'),")"),(0,r.kt)("li",{parentName:"ul"},"Vertical tab (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x0B"'),")"),(0,r.kt)("li",{parentName:"ul"},"Unit separator (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x1F"'),")"),(0,r.kt)("li",{parentName:"ul"},"SOH (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x01"'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Encoding")," type, specified by its ",(0,r.kt)("a",{parentName:"p",href:"https://encoding.spec.whatwg.org/#names-and-labels"},"WHATWG label"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, an ",(0,r.kt)("strong",{parentName:"p"},"Error threshold"),", as an acceptable percentage of errors. If set to a number greater than zero, malformed rows that fall within the threshold will be excluded from the capture.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Escape characters"),". Options are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Backslash (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\"'),")"),(0,r.kt)("li",{parentName:"ul"},"Disable escapes (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, a list of column ",(0,r.kt)("strong",{parentName:"p"},"Headers"),", if not already included in the first row of the CSV file."),(0,r.kt)("p",{parentName:"li"},"If any headers are provided, it is assumed that the provided list of headers is complete and authoritative.\nThe first row of your CSV file will be assumed to be data (not headers), and you must provide a header value for every column in the file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Line ending")," values"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CRLF (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\r\\\\n"'),") (Windows)"),(0,r.kt)("li",{parentName:"ul"},"CR (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\r"'),")"),(0,r.kt)("li",{parentName:"ul"},"LF (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\n"'),")"),(0,r.kt)("li",{parentName:"ul"},"Record Separator (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x1E"'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Quote character")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Double Quote (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\""'),")"),(0,r.kt)("li",{parentName:"ul"},"Single Quote (",(0,r.kt)("inlineCode",{parentName:"li"},'"'),")"),(0,r.kt)("li",{parentName:"ul"},"Disable Quoting (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto")))),(0,r.kt)("p",null,"The sample specification ",(0,r.kt)("a",{parentName:"p",href:"#sample"},"above")," includes these fields."))}c.isMDXComponent=!0}}]);