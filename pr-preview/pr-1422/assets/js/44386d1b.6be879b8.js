"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7749],{22848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(74848),i=t(28453);const s={sidebar_position:2},o="Google Cloud Storage",c={id:"reference/Connectors/capture-connectors/gcs",title:"Google Cloud Storage",description:"This connector captures data from a Google Cloud Storage (GCS) bucket.",source:"@site/docs/reference/Connectors/capture-connectors/gcs.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/gcs",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/gcs",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/gcs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"WooCommerce",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/woocommerce"},next:{title:"Google Analytics UA",permalink:"/pr-preview/pr-1422/reference/Connectors/capture-connectors/google-analytics"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Advanced: Parsing cloud storage data",id:"advanced-parsing-cloud-storage-data",level:3},{value:"CSV configuration",id:"csv-configuration",level:4},{value:"Advanced: Configure Google service account impersonation",id:"advanced-configure-google-service-account-impersonation",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"google-cloud-storage",children:"Google Cloud Storage"}),"\n",(0,r.jsx)(n.p,{children:"This connector captures data from a Google Cloud Storage (GCS) bucket."}),"\n",(0,r.jsxs)(n.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(n.a,{href:"https://ghcr.io/estuary/source-gcs:dev",children:(0,r.jsx)(n.code,{children:"ghcr.io/estuary/source-gcs:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"To use this connector, either your GCS bucket must be public, or you must have access via a Google service account."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For public buckets, verify that objects in the bucket are ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/access-control/making-data-public",children:"publicly readable"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["For buckets accessed by a Google Service Account:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure that the user has been assigned a ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/understanding-roles",children:"role"})," with read access."]}),"\n",(0,r.jsxs)(n.li,{children:["Create a ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating",children:"JSON service account key"}),". Google's ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/production",children:"Application Default Credentials"})," will use this file for authentication."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the GCS source connector."]}),"\n",(0,r.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Options for advanced users. You should not typically need to modify these."}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/advanced/ascendingKeys"})}),(0,r.jsx)(n.td,{children:"Ascending Keys"}),(0,r.jsx)(n.td,{children:"Improve sync speeds by listing files from the end of the last sync, rather than listing the entire bucket prefix. This requires that you write objects in ascending lexicographic order, such as an RFC-3339 timestamp, so that key ordering matches modification time ordering. If data is not ordered correctly, using ascending keys could cause errors."}),(0,r.jsx)(n.td,{children:"boolean"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/bucket"})})}),(0,r.jsx)(n.td,{children:"Bucket"}),(0,r.jsx)(n.td,{children:"Name of the Google Cloud Storage bucket"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/googleCredentials"})}),(0,r.jsx)(n.td,{children:"Google Service Account"}),(0,r.jsx)(n.td,{children:"Service account JSON key to use as Application Default Credentials"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/matchKeys"})}),(0,r.jsx)(n.td,{children:"Match Keys"}),(0,r.jsx)(n.td,{children:'Filter applied to all object keys under the prefix. If provided, only objects whose key (relative to the prefix) matches this regex will be read. For example, you can use ".*\\.json" to only capture json files.'}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/parser"})}),(0,r.jsx)(n.td,{children:"Parser Configuration"}),(0,r.jsx)(n.td,{children:"Configures how files are parsed"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/parser/compression"})}),(0,r.jsx)(n.td,{children:"Compression"}),(0,r.jsx)(n.td,{children:"Determines how to decompress the contents. The default, 'Auto', will try to determine the compression automatically."}),(0,r.jsx)(n.td,{children:"null, string"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/parser/format"})}),(0,r.jsx)(n.td,{children:"Format"}),(0,r.jsx)(n.td,{children:"Determines how to parse the contents. The default, 'Auto', will try to determine the format automatically based on the file extension or MIME type, if available."}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'{"type":"auto"}'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/parser/format/type"})}),(0,r.jsx)(n.td,{children:"Type"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/prefix"})}),(0,r.jsx)(n.td,{children:"Prefix"}),(0,r.jsx)(n.td,{children:"Prefix within the bucket to capture from. Use this to limit the data in your capture."}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Required/Default"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"/stream"})})}),(0,r.jsx)(n.td,{children:"Prefix"}),(0,r.jsxs)(n.td,{children:["Path to dataset in the bucket, formatted as ",(0,r.jsx)(n.code,{children:"bucket-name/prefix-name"})]}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Required"})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-gcs:dev\n        config:\n          bucket: my-bucket\n          googleCredentials:\n            "type": "service_account",\n            "project_id": "project-id",\n            "private_key_id": "key-id",\n            "private_key": "-----BEGIN PRIVATE KEY-----\\nprivate-key\\n-----END PRIVATE KEY-----\\n",\n            "client_email": "service-account-email",\n            "client_id": "client-id",\n            "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n            "token_uri": "https://accounts.google.com/o/oauth2/token",\n            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-account-email"\n          parser:\n            compression: zip\n            format:\n              type: csv\n              config:\n                delimiter: ","\n                encoding: UTF-8\n                errorThreshold: 5\n                headers: [ID, username, first_name, last_name]\n                lineEnding: "\\\\r"\n                quote: "\\""\n    bindings:\n      - resource:\n          stream: my-bucket/${PREFIX}\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"Your capture definition may be more complex, with additional bindings for different GCS prefixes within the same bucket."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/captures#pull-captures",children:"Learn more about capture definitions."})}),"\n",(0,r.jsx)(n.h3,{id:"advanced-parsing-cloud-storage-data",children:"Advanced: Parsing cloud storage data"}),"\n",(0,r.jsx)(n.p,{children:"Cloud storage platforms like GCS can support a wider variety of file types\nthan other data source systems. For each of these file types, Flow must parse\nand translate data into collections with defined fields and JSON schemas."}),"\n",(0,r.jsx)(n.p,{children:"By default, the parser will automatically detect the type and shape of the data in your bucket,\nso you won't need to change the parser configuration for most captures."}),"\n",(0,r.jsx)(n.p,{children:"However, the automatic detection may be incorrect in some cases.\nTo fix or prevent this, you can provide explicit information in the parser configuration,\nwhich is part of the endpoint configuration for this connector."}),"\n",(0,r.jsx)(n.p,{children:"The parser configuration includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compression"}),": Specify how the bucket contents are compressed.\nIf no compression type is specified, the connector will try to determine the compression type automatically.\nOptions are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"zip"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"gzip"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"zstd"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"none"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Format"}),": Specify the data format, which determines how it will be parsed.\nOptions are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Auto"}),": If no format is specified, the connector will try to determine it automatically."]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Avro"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"CSV"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"JSON"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Protobuf"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"W3C Extended Log"})}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"At this time, Flow only supports GCS captures with data of a single file type.\nSupport for multiple file types, which can be configured on a per-binding basis,\nwill be added in the future."}),(0,r.jsx)(n.p,{children:"For now, use a prefix in the endpoint configuration to limit the scope of each capture to data of a single file type."})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"csv-configuration",children:"CSV configuration"}),"\n",(0,r.jsx)(n.p,{children:"CSV files include several additional properties that are important to the parser.\nIn most cases, Flow is able to automatically determine the correct values,\nbut you may need to specify for unusual datasets. These properties are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Delimiter"}),". Options are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Comma (",(0,r.jsx)(n.code,{children:'","'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Pipe (",(0,r.jsx)(n.code,{children:'"|"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Space (",(0,r.jsx)(n.code,{children:'"0x20"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Semicolon (",(0,r.jsx)(n.code,{children:'";"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Tab (",(0,r.jsx)(n.code,{children:'"0x09"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Vertical tab (",(0,r.jsx)(n.code,{children:'"0x0B"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Unit separator (",(0,r.jsx)(n.code,{children:'"0x1F"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["SOH (",(0,r.jsx)(n.code,{children:'"0x01"'}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Encoding"})," type, specified by its ",(0,r.jsx)(n.a,{href:"https://encoding.spec.whatwg.org/#names-and-labels",children:"WHATWG label"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Optionally, an ",(0,r.jsx)(n.strong,{children:"Error threshold"}),", as an acceptable percentage of errors. If set to a number greater than zero, malformed rows that fall within the threshold will be excluded from the capture."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Escape characters"}),". Options are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Backslash (",(0,r.jsx)(n.code,{children:'"\\\\"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Disable escapes (",(0,r.jsx)(n.code,{children:'""'}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Optionally, a list of column ",(0,r.jsx)(n.strong,{children:"Headers"}),", if not already included in the first row of the CSV file."]}),"\n",(0,r.jsx)(n.p,{children:"If any headers are provided, it is assumed that the provided list of headers is complete and authoritative.\nThe first row of your CSV file will be assumed to be data (not headers), and you must provide a header value for every column in the file."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Line ending"})," values"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CRLF (",(0,r.jsx)(n.code,{children:'"\\\\r\\\\n"'}),") (Windows)"]}),"\n",(0,r.jsxs)(n.li,{children:["CR (",(0,r.jsx)(n.code,{children:'"\\\\r"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["LF (",(0,r.jsx)(n.code,{children:'"\\\\n"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Record Separator (",(0,r.jsx)(n.code,{children:'"0x1E"'}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Quote character"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Double Quote (",(0,r.jsx)(n.code,{children:'"\\""'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Single Quote (",(0,r.jsx)(n.code,{children:'"'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Disable Quoting (",(0,r.jsx)(n.code,{children:'""'}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Auto"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The sample specification ",(0,r.jsx)(n.a,{href:"#sample",children:"above"})," includes these fields."]}),"\n",(0,r.jsx)(n.h3,{id:"advanced-configure-google-service-account-impersonation",children:"Advanced: Configure Google service account impersonation"}),"\n",(0,r.jsxs)(n.p,{children:["As part of your Google IAM management, you may have configured one service account to ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/impersonating-service-accounts",children:"impersonate another service account"}),".\nYou may find this useful when you want to easily control access to multiple service accounts with only one set of keys."]}),"\n",(0,r.jsx)(n.p,{children:"If necessary, you can configure this authorization model for a GCS capture in Flow using the GitOps workflow.\nTo do so, you'll enable sops encryption and impersonate the target account with JSON credentials."}),"\n",(0,r.jsxs)(n.p,{children:["Before you begin, make sure you're familiar with ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/connectors#protecting-secrets",children:"how to encrypt credentials in Flow using sops"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Use the following sample as a guide to add the credentials JSON to the capture's endpoint configuration.\nThe sample uses the ",(0,r.jsx)(n.a,{href:"/pr-preview/pr-1422/concepts/connectors#example-protect-portions-of-a-configuration",children:"encrypted suffix feature"})," of sops to encrypt only the sensitive credentials, but you may choose to encrypt the entire configuration."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"config:\n  bucket: <bucket-name>\n  googleCredentials_sops:\n    # URL containing the account to impersonate and the associated project\n    service_account_impersonation_url: https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/<target-account>@<project>.iam.gserviceaccount.com:generateAccessToken\n    # Credentials for the account that has been configured to impersonate the target.\n    source_credentials:\n        # In addition to the listed fields, copy and paste the rest of your JSON key file as your normally would\n        # for the `googleCredentials` field\n        client_email: <origin-account>@<anotherproject>.iam.gserviceaccount.com\n        token_uri: https://oauth2.googleapis.com/token\n        type: service_account\n    type: impersonated_service_account\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);