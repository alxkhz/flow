"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},i="HTTP File",o={unversionedId:"reference/Connectors/capture-connectors/http-file",id:"reference/Connectors/capture-connectors/http-file",title:"HTTP File",description:"This connector captures data from an HTTP endpoint into a Flow collection.",source:"@site/docs/reference/Connectors/capture-connectors/http-file.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/http-file",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/http-file",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/http-file.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Harvest",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/harvest"},next:{title:"HTTP Ingest (Webhook)",permalink:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/http-ingest"}},p={},s=[{value:"Supported data types",id:"supported-data-types",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Advanced: Parsing HTTP-hosted data",id:"advanced-parsing-http-hosted-data",level:3},{value:"CSV configuration",id:"csv-configuration",level:4},{value:"Advanced: Using HTTP headers",id:"advanced-using-http-headers",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"http-file"},"HTTP File"),(0,r.kt)("p",null,"This connector captures data from an HTTP endpoint into a Flow collection."),(0,r.kt)("p",null,"To capture data from an ",(0,r.kt)("em",{parentName:"p"},"incoming")," HTTP request, see the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1139/reference/Connectors/capture-connectors/http-ingest"},"HTTP Ingest")," connector."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-http-file:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-http-file:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"supported-data-types"},"Supported data types"),(0,r.kt)("p",null,"This connector automatically captures the data hosted at the specified URL into a single Flow collection."),(0,r.kt)("p",null,"The following file types are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avro"),(0,r.kt)("li",{parentName:"ul"},"CSV"),(0,r.kt)("li",{parentName:"ul"},"JSON"),(0,r.kt)("li",{parentName:"ul"},"Protobuf"),(0,r.kt)("li",{parentName:"ul"},"W3C Extended Log")),(0,r.kt)("p",null,"The following compression methods are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ZIP"),(0,r.kt)("li",{parentName:"ul"},"GZIP"),(0,r.kt)("li",{parentName:"ul"},"ZSTD")),(0,r.kt)("p",null,"By default, Flow automatically detects the file type and compression method.\nIf necessary, you can specify the correct file type, compression, and other properties (CSV only) using the optional ",(0,r.kt)("a",{parentName:"p",href:"#advanced-parsing-http-hosted-data"},"parser configuration"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use this connector, you'll need the URL to an HTTP endpoint that hosts data of one of the supported types.\nThe HTTP endpoint must support ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD"},(0,r.kt)("inlineCode",{parentName:"a"},"HEAD"))," HTTP requests, and the response to this request must include a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified"},(0,r.kt)("inlineCode",{parentName:"a"},"Last-Modified"))," header."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can send a test ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," request using Curl with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-I")," parameter, for example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"curl -I https://my-site.com/my_hosted_dataset.json.zip"),"\nUse ",(0,r.kt)("a",{parentName:"p",href:"https://reqbin.com/req/c-tmyvmbgu/curl-head-request-example"},"this online tool")," to easily do so in your browser.")),(0,r.kt)("p",null,"Some HTTP endpoints require credentials for access.\nIf this is the case, have your username and password ready."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1139/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the HTTP file source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials")),(0,r.kt)("td",{parentName:"tr",align:null},"Credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"User credentials, if required to access the data at the HTTP URL."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/password")),(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password, if required to access the HTTP endpoint."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/user")),(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"Username, if required to access the HTTP endpoint."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/headers")),(0,r.kt)("td",{parentName:"tr",align:null},"Headers"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/headers/items")),(0,r.kt)("td",{parentName:"tr",align:null},"Additional HTTP Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional HTTP headers when requesting the file. These are uncommon."),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/headers/items/-/key"))),(0,r.kt)("td",{parentName:"tr",align:null},"Header Key"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"em"},"/headers/items/-/value"))),(0,r.kt)("td",{parentName:"tr",align:null},"Header Value"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser")),(0,r.kt)("td",{parentName:"tr",align:null},"Parser Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures how files are parsed"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Compression"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how to decompress the contents. The default, ","'","Auto","'",", will try to determine the compression automatically."),(0,r.kt)("td",{parentName:"tr",align:null},"null, string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/format")),(0,r.kt)("td",{parentName:"tr",align:null},"Format"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how to parse the contents. The default, ","'","Auto","'",", will try to determine the format automatically based on the file extension or MIME type, if available."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type":"auto"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/format/type")),(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/url"))),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP File URL"),(0,r.kt)("td",{parentName:"tr",align:null},"A valid HTTP url for downloading the source file."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-http-file:dev\n        config:\n          url: https://my-site.com/my_hosted_dataset.json.zip\n          parser:\n            compression: zip\n            format:\n              type: csv\n              config:\n                delimiter: ","\n                encoding: UTF-8\n                errorThreshold: 5\n                headers: [ID, username, first_name, last_name]\n                lineEnding: "\\\\r"\n                quote: "\\""\n    bindings:\n      - resource:\n          stream: my_hosted_dataset.json.zip\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n')),(0,r.kt)("h3",{id:"advanced-parsing-http-hosted-data"},"Advanced: Parsing HTTP-hosted data"),(0,r.kt)("p",null,"HTTP endpoints can support a variety of file types.\nFor each file type, Flow must parse\nand translate data into collections with defined fields and JSON schemas."),(0,r.kt)("p",null,"By default, the parser will automatically detect the type and shape of the data at the HTTP endpoint,\nso you won't need to change the parser configuration for most captures."),(0,r.kt)("p",null,"However, the automatic detection may be incorrect in some cases.\nTo fix or prevent this, you can provide explicit information in the parser configuration,\nwhich is part of the endpoint configuration for this connector."),(0,r.kt)("p",null,"The parser configuration includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compression"),": Specify how the data is compressed.\nIf no compression type is specified, the connector will try to determine the compression type automatically.\nOptions are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gzip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zstd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"none")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Format"),": Specify the data format, which determines how it will be parsed.\nIf no file type is specified, the connector will try to determine the file type automatically\nOptions are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Avro")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CSV")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JSON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Protobuf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"W3C Extended Log"))))),(0,r.kt)("h4",{id:"csv-configuration"},"CSV configuration"),(0,r.kt)("p",null,"CSV files include several additional properties that are important to the parser.\nIn most cases, Flow is able to automatically determine the correct values,\nbut you may need to specify for unusual datasets. These properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delimiter"),". Options are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Comma (",(0,r.kt)("inlineCode",{parentName:"li"},'","'),")"),(0,r.kt)("li",{parentName:"ul"},"Pipe (",(0,r.kt)("inlineCode",{parentName:"li"},'"|"'),")"),(0,r.kt)("li",{parentName:"ul"},"Space (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x20"'),")"),(0,r.kt)("li",{parentName:"ul"},"Semicolon (",(0,r.kt)("inlineCode",{parentName:"li"},'";"'),")"),(0,r.kt)("li",{parentName:"ul"},"Tab (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x09"'),")"),(0,r.kt)("li",{parentName:"ul"},"Vertical tab (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x0B"'),")"),(0,r.kt)("li",{parentName:"ul"},"Unit separator (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x1F"'),")"),(0,r.kt)("li",{parentName:"ul"},"SOH (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x01"'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Encoding")," type, specified by its ",(0,r.kt)("a",{parentName:"p",href:"https://encoding.spec.whatwg.org/#names-and-labels"},"WHATWG label"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, an ",(0,r.kt)("strong",{parentName:"p"},"Error threshold"),", as an acceptable percentage of errors. If set to a number greater than zero, malformed rows that fall within the threshold will be excluded from the capture.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Escape characters"),". Options are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Backslash (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\"'),")"),(0,r.kt)("li",{parentName:"ul"},"Disable escapes (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, a list of column ",(0,r.kt)("strong",{parentName:"p"},"Headers"),", if not already included in the first row of the CSV file."),(0,r.kt)("p",{parentName:"li"},"If any headers are provided, it is assumed that the provided list of headers is complete and authoritative.\nThe first row of your CSV file will be assumed to be data (not headers), and you must provide a header value for every column in the file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Line ending")," values"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CRLF (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\r\\\\n"'),") (Windows)"),(0,r.kt)("li",{parentName:"ul"},"CR (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\r"'),")"),(0,r.kt)("li",{parentName:"ul"},"LF (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\n"'),")"),(0,r.kt)("li",{parentName:"ul"},"Record Separator (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x1E"'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Quote character")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Double Quote (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\""'),")"),(0,r.kt)("li",{parentName:"ul"},"Single Quote (",(0,r.kt)("inlineCode",{parentName:"li"},'"'),")"),(0,r.kt)("li",{parentName:"ul"},"Disable Quoting (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto")))),(0,r.kt)("p",null,"The sample specification ",(0,r.kt)("a",{parentName:"p",href:"#sample"},"above")," includes these fields."),(0,r.kt)("h3",{id:"advanced-using-http-headers"},"Advanced: Using HTTP headers"),(0,r.kt)("p",null,"For data accessed through certain APIs, you may need to send ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Request_header"},"headers as part of your HTTP request"),".\nThis is uncommon, and is supported by the optional ",(0,r.kt)("strong",{parentName:"p"},"Headers")," configuration."),(0,r.kt)("p",null,"This configuration section is ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1139/concepts/connectors#protecting-secrets"},"encrypted with ",(0,r.kt)("inlineCode",{parentName:"a"},"sops")),", so you can safely include secretes such as API keys."),(0,r.kt)("p",null,"See the source data's API documentation for headers that may be required for your capture."))}m.isMDXComponent=!0}}]);