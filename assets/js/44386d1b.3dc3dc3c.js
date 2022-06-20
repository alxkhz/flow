"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6437],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:7},l="Google Cloud Storage",s={unversionedId:"reference/Connectors/capture-connectors/gcs",id:"reference/Connectors/capture-connectors/gcs",title:"Google Cloud Storage",description:"This connector captures data from a Google Cloud Storage (GCS) bucket.",source:"@site/docs/reference/Connectors/capture-connectors/gcs.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/gcs",permalink:"/reference/Connectors/capture-connectors/gcs",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/gcs.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Google Analytics",permalink:"/reference/Connectors/capture-connectors/google-analytics"},next:{title:"Google Sheets",permalink:"/reference/Connectors/capture-connectors/google-sheets"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Advanced: Configure Google service account impersonation",id:"advanced-configure-google-service-account-impersonation",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-cloud-storage"},"Google Cloud Storage"),(0,o.kt)("p",null,"This connector captures data from a Google Cloud Storage (GCS) bucket."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-gcs:dev"},(0,o.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-gcs:dev"))," provides the latest connector image. You can also follow the link in your browser to see past image versions."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To use this connector, either your GCS bucket must be public, or you must have access via a Google service account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For public buckets, verify that objects in the bucket are ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/access-control/making-data-public"},"publicly readable"),"."),(0,o.kt)("li",{parentName:"ul"},"For buckets accessed by a Google Service Account:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ensure that the user has been assigned a ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/understanding-roles"},"role")," with read access."),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating"},"JSON service account key"),". Google's ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/docs/authentication/production"},"Application Default Credentials")," will use this file for authentication.")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog spec YAML.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and YAML sample below provide configuration details specific to the GCS source connector."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might use ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/samples/storage-list-files-with-prefix"},"prefixes")," to organize your GCS bucket\nin a way that emulates a directory structure.\nThis connector can use prefixes in two ways: first, to perform the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#using-connectors"},(0,o.kt)("strong",{parentName:"a"},"discovery"))," phase of setup, and later, when the capture is running."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"You can specify a prefix in the endpoint configuration to limit the overall scope of data discovery."),(0,o.kt)("li",{parentName:"ul"},"You're required to specify prefixes on a per-binding basis. This allows you to map each prefix to a distinct Flow collection,\nand informs how the capture will behave in production.")),(0,o.kt)("p",{parentName:"div"},"To capture the entire bucket, omit ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix")," in the endpoint configuration and set ",(0,o.kt)("inlineCode",{parentName:"p"},"stream")," to the name of the bucket."))),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("h4",{id:"endpoint"},"Endpoint"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/ascendingKeys")),(0,o.kt)("td",{parentName:"tr",align:null},"Ascending keys"),(0,o.kt)("td",{parentName:"tr",align:null},"Improve sync speeds by listing files from the end of the last sync, rather than listing the entire bucket prefix. This requires that you write objects in ascending lexicographic order, such as an RFC-3339 timestamp, so that key ordering matches modification time ordering."),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/bucket"))),(0,o.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the Google Cloud Storage bucket"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/googleCredentials")),(0,o.kt)("td",{parentName:"tr",align:null},"Google service account"),(0,o.kt)("td",{parentName:"tr",align:null},"Contents of the service account JSON file. Required unless the bucket is public."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/matchKeys")),(0,o.kt)("td",{parentName:"tr",align:null},"Match Keys"),(0,o.kt)("td",{parentName:"tr",align:null},"Filter applied to all object keys under the prefix. If provided, only objects whose key (relative to the prefix) matches this regex will be read. For example, you can use ",'"',".","*","\\",".json",'"'," to only capture json files."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/prefix")),(0,o.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,o.kt)("td",{parentName:"tr",align:null},"Prefix within the bucket to capture from."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h4",{id:"bindings"},"Bindings"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,o.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,o.kt)("td",{parentName:"tr",align:null},"Path to dataset in the bucket, formatted as ",(0,o.kt)("inlineCode",{parentName:"td"},"bucket-name/prefix-name")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,o.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,o.kt)("td",{parentName:"tr",align:null},"Connection method. Always set to ",(0,o.kt)("inlineCode",{parentName:"td"},"incremental"),"."),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Required")))),(0,o.kt)("h3",{id:"sample"},"Sample"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-gcs:dev\n        config:\n          bucket: my-bucket\n          googleCredentials:\n            "type": "service_account",\n            "project_id": "project-id",\n            "private_key_id": "key-id",\n            "private_key": "-----BEGIN PRIVATE KEY-----\\nprivate-key\\n-----END PRIVATE KEY-----\\n",\n            "client_email": "service-account-email",\n            "client_id": "client-id",\n            "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n            "token_uri": "https://accounts.google.com/o/oauth2/token",\n            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-account-email"\n    bindings:\n      - resource:\n          stream: my-bucket/${PREFIX}\n          syncMode: incremental\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n')),(0,o.kt)("p",null,"Your capture definition may be more complex, with additional bindings for different GCS prefixes within the same bucket."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/captures#pull-captures"},"Learn more about capture definitions.")),(0,o.kt)("h3",{id:"advanced-configure-google-service-account-impersonation"},"Advanced: Configure Google service account impersonation"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is an advanced workflow and is typically not necessary to successfully configure this connector."))),(0,o.kt)("p",null,"As part of your Google IAM management, you may have configured one service account to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/impersonating-service-accounts"},"impersonate another service account"),".\nYou may find this useful when you want to easily control access to multiple service accounts with only one set of keys."),(0,o.kt)("p",null,"If necessary, you can configure this authorization model for a GCS capture in Flow using the GitOps workflow.\nTo do so, you'll enable sops encryption and impersonate the target account with JSON credentials."),(0,o.kt)("p",null,"Before you begin, make sure you're familiar with ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#protecting-secrets"},"how to encrypt credentials in Flow using sops"),"."),(0,o.kt)("p",null,"Use the following sample as a guide to add the credentials JSON to the capture's endpoint configuration.\nThe sample uses the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/connectors#example-protect-portions-of-a-configuration"},"encrypted suffix feature")," of sops to encrypt only the sensitive credentials, but you may choose to encrypt the entire configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  bucket: <bucket-name>\n  googleCredentials_sops:\n    # URL containing the account to impersonate and the associated project\n    service_account_impersonation_url: https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/<target-account>@<project>.iam.gserviceaccount.com:generateAccessToken\n    # Credentials for the account that has been configured to impersonate the target.\n    source_credentials:\n        # In addition to the listed fields, copy and paste the rest of your JSON key file as your normally would\n        # for the `googleCredentials` field\n        client_email: <origin-account>@<anotherproject>.iam.gserviceaccount.com\n        token_uri: https://oauth2.googleapis.com/token\n        type: service_account\n    type: impersonated_service_account\n")))}m.isMDXComponent=!0}}]);