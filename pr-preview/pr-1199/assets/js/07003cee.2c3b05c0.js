"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,p]=k({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,l]),tabValues:l}}var h=n(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==o&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},2498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const o={sidebar_position:1},s="Amazon S3",p={unversionedId:"reference/Connectors/capture-connectors/amazon-s3",id:"reference/Connectors/capture-connectors/amazon-s3",title:"Amazon S3",description:"This connector captures data from an Amazon S3 bucket.",source:"@site/docs/reference/Connectors/capture-connectors/amazon-s3.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/amazon-s3",permalink:"/pr-preview/pr-1199/reference/Connectors/capture-connectors/amazon-s3",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/amazon-s3.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Amazon Kinesis",permalink:"/pr-preview/pr-1199/reference/Connectors/capture-connectors/amazon-kinesis"},next:{title:"Amazon SQS",permalink:"/pr-preview/pr-1199/reference/Connectors/capture-connectors/amazon-sqs"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup: Public buckets",id:"setup-public-buckets",level:3},{value:"Setup: Accessing with a user account",id:"setup-accessing-with-a-user-account",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3},{value:"Advanced: Parsing cloud storage data",id:"advanced-parsing-cloud-storage-data",level:3},{value:"CSV configuration",id:"csv-configuration",level:4}],m={toc:c},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon-s3"},"Amazon S3"),(0,r.kt)("p",null,"This connector captures data from an Amazon S3 bucket."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-s3:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-s3:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You can use this connector to capture data from an entire S3 bucket or for a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html"},"prefix")," within a bucket.\nThis bucket or prefix must be either be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Publicly accessible and allowing anonymous reads.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Accessible via a root or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM user"),"."))),(0,r.kt)("p",null,"In either case, you'll need an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_controlling.html"},"access policy"),".\nPolicies in AWS are JSON objects that define permissions. You attach them to ",(0,r.kt)("em",{parentName:"p"},"resources"),", which include both IAM users and S3 buckets."),(0,r.kt)("p",null,"See the steps below to set up access."),(0,r.kt)("h3",{id:"setup-public-buckets"},"Setup: Public buckets"),(0,r.kt)("p",null,"For a public buckets, the bucket access policy must allow anonymous reads on the whole bucket or a specific prefix."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a bucket policy using the templates below.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Anonymous reads policy - Full bucket",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"file=./policies/public-full-bucket.json",file:"./policies/public-full-bucket.json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "BucketAnonymousRead",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET/*"\n            ]\n        }\n    ]\n}\n'))),(0,r.kt)(i.Z,{value:"Anonymous reads policy - Specific prefix",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"file=./policies/public-prefix-only.json",file:"./policies/public-prefix-only.json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "BucketPrefixAnonymousRead",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET"\n            ],\n            "Condition": {\n                "StringLike": {\n                    "s3:prefix": [\n                        "EXAMPLE_PREFIX",\n                        "EXAMPLE_PREFIX/*"\n                    ]\n                }\n            }\n        },\n        {\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET/EXAMPLE_PREFIX/*"\n            ]\n        }\n    ]\n}\n')))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-bucket-policy.html"},"Add the policy to your bucket"),". Paste over the existing policy and resolve any errors or warnings before saving.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that the ",(0,r.kt)("strong",{parentName:"p"},"Block public access")," setting on the bucket is ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html"},"disabled"),"."))),(0,r.kt)("h3",{id:"setup-accessing-with-a-user-account"},"Setup: Accessing with a user account"),(0,r.kt)("p",null,"For buckets accessed by a user account, you'll need the AWS ",(0,r.kt)("strong",{parentName:"p"},"access key")," and ",(0,r.kt)("strong",{parentName:"p"},"secret access key")," for the user.\nYou'll also need to apply an access policy to the user to grant access to the specific bucket or prefix."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html"},"Create an IAM user")," if you don't yet have one to use with Flow.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note the user's access key and secret access key.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/"},"AWS blog")," for help finding these credentials.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an IAM policy using the templates below."))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"IAM user access policy - Full bucket",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"file=./policies/iam-user-full-bucket.json",file:"./policies/iam-user-full-bucket.json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "UserAccessFullBucket",\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET/*"\n            ]\n        }\n    ]\n}\n'))),(0,r.kt)(i.Z,{value:"IAM user access policy - Specific prefix",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"file=./policies/iam-user-prefix-only.json",file:"./policies/iam-user-prefix-only.json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "UserAccessBucketPrefix",\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET"\n            ],\n            "Condition": {\n                "StringLike": {\n                    "s3:prefix": [\n                        "EXAMPLE_PREFIX",\n                        "EXAMPLE_PREFIX/*"\n                    ]\n                }\n            }\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::EXAMPLE_BUCKET/EXAMPLE_PREFIX/*"\n            ]\n        }\n    ]\n}\n')))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create-console.html#access_policies_create-json-editor"},"Add the policy")," to AWS.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html#add-policies-console"},"Attach the policy to the IAM user"),"."))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1199/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the S3 source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Options for advanced users. You should not typically need to modify these."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/ascendingKeys")),(0,r.kt)("td",{parentName:"tr",align:null},"Ascending Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Improve sync speeds by listing files from the end of the last sync, rather than listing the entire bucket prefix. This requires that you write objects in ascending lexicographic order, such as an RFC-3339 timestamp, so that key ordering matches modification time ordering. If data is not ordered correctly, using ascending keys could cause errors."),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/advanced/endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS endpoint URI to connect to. Use if you","'","re capturing from a S3-compatible API that isn","'","t provided by AWS"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/awsAccessKeyId")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Access Key ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Part of the AWS credentials that will be used to connect to S3. Required unless the bucket is public and allows anonymous listings and reads."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/awsSecretAccessKey")),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Secret Access Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Part of the AWS credentials that will be used to connect to S3. Required unless the bucket is public and allows anonymous listings and reads."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/bucket"))),(0,r.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the S3 bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/matchKeys")),(0,r.kt)("td",{parentName:"tr",align:null},"Match Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter applied to all object keys under the prefix. If provided, only objects whose absolute path matches this regex will be read. For example, you can use ",'"',".","*","\\",".json",'"'," to only capture json files."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser")),(0,r.kt)("td",{parentName:"tr",align:null},"Parser Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures how files are parsed (optional, see below)"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/compression")),(0,r.kt)("td",{parentName:"tr",align:null},"Compression"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how to decompress the contents. The default, ","'","Auto","'",", will try to determine the compression automatically."),(0,r.kt)("td",{parentName:"tr",align:null},"null, string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/format")),(0,r.kt)("td",{parentName:"tr",align:null},"Format"),(0,r.kt)("td",{parentName:"tr",align:null},"Determines how to parse the contents. The default, ","'","Auto","'",", will try to determine the format automatically based on the file extension or MIME type, if available."),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"type":"auto"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/parser/format/type")),(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/prefix")),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix within the bucket to capture from. Use this to limit the data in your capture."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/region"))),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Region"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the AWS region where the S3 bucket is located. ",'"',"us-east-1",'"'," is a popular default you can try, if you","'","re unsure what to put here."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required, ",(0,r.kt)("inlineCode",{parentName:"td"},'"us-east-1"'))))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to dataset in the bucket, formatted as ",(0,r.kt)("inlineCode",{parentName:"td"},"bucket-name/prefix-name"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-s3:dev\n        config:\n          bucket: "my-bucket"\n          parser:\n            compression: zip\n            format:\n              type: csv\n              config:\n                delimiter: ","\n                encoding: UTF-8\n                errorThreshold: 5\n                headers: [ID, username, first_name, last_name]\n                lineEnding: "\\\\r"\n                quote: "\\""\n          region: "us-east-1"\n    bindings:\n      - resource:\n          stream: my-bucket/${PREFIX}\n        target: ${PREFIX}/${COLLECTION_NAME}\n\n')),(0,r.kt)("p",null,"Your capture definition may be more complex, with additional bindings for different S3 prefixes within the same bucket."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1199/concepts/captures#pull-captures"},"Learn more about capture definitions.")),(0,r.kt)("h3",{id:"advanced-parsing-cloud-storage-data"},"Advanced: Parsing cloud storage data"),(0,r.kt)("p",null,"Cloud storage platforms like S3 can support a wider variety of file types\nthan other data source systems. For each of these file types, Flow must parse\nand translate data into collections with defined fields and JSON schemas."),(0,r.kt)("p",null,"By default, the parser will automatically detect the type and shape of the data in your bucket,\nso you won't need to change the parser configuration for most captures."),(0,r.kt)("p",null,"However, the automatic detection may be incorrect in some cases.\nTo fix or prevent this, you can provide explicit information in the parser configuration,\nwhich is part of the ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint configuration")," for this connector."),(0,r.kt)("p",null,"The parser configuration includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compression"),": Specify how the bucket contents are compressed.\nIf no compression type is specified, the connector will try to determine the compression type automatically.\nOptions are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gzip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zstd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"none")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Format"),": Specify the data format, which determines how it will be parsed.\nOptions are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Auto"),": If no format is specified, the connector will try to determine it automatically.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Avro"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CSV"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JSON"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Protobuf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"W3C Extended Log")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At this time, Flow only supports S3 captures with data of a single file type.\nSupport for multiple file types, which can be configured on a per-binding basis,\nwill be added in the future."),(0,r.kt)("p",{parentName:"admonition"},"For now, use a prefix in the endpoint configuration to limit the scope of each capture to data of a single file type.")))))),(0,r.kt)("h4",{id:"csv-configuration"},"CSV configuration"),(0,r.kt)("p",null,"CSV files include several additional properties that are important to the parser.\nIn most cases, Flow is able to automatically determine the correct values,\nbut you may need to specify for unusual datasets. These properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delimiter"),". Options are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Comma (",(0,r.kt)("inlineCode",{parentName:"li"},'","'),")"),(0,r.kt)("li",{parentName:"ul"},"Pipe (",(0,r.kt)("inlineCode",{parentName:"li"},'"|"'),")"),(0,r.kt)("li",{parentName:"ul"},"Space (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x20"'),")"),(0,r.kt)("li",{parentName:"ul"},"Semicolon (",(0,r.kt)("inlineCode",{parentName:"li"},'";"'),")"),(0,r.kt)("li",{parentName:"ul"},"Tab (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x09"'),")"),(0,r.kt)("li",{parentName:"ul"},"Vertical tab (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x0B"'),")"),(0,r.kt)("li",{parentName:"ul"},"Unit separator (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x1F"'),")"),(0,r.kt)("li",{parentName:"ul"},"SOH (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x01"'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Encoding")," type, specified by its ",(0,r.kt)("a",{parentName:"p",href:"https://encoding.spec.whatwg.org/#names-and-labels"},"WHATWG label"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, an ",(0,r.kt)("strong",{parentName:"p"},"Error threshold"),", as an acceptable percentage of errors. If set to a number greater than zero, malformed rows that fall within the threshold will be excluded from the capture.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Escape characters"),". Options are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Backslash (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\"'),")"),(0,r.kt)("li",{parentName:"ul"},"Disable escapes (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optionally, a list of column ",(0,r.kt)("strong",{parentName:"p"},"Headers"),", if not already included in the first row of the CSV file."),(0,r.kt)("p",{parentName:"li"},"If any headers are provided, it is assumed that the provided list of headers is complete and authoritative.\nThe first row of your CSV file will be assumed to be data (not headers), and you must provide a header value for every column in the file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Line ending")," values"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CRLF (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\r\\\\n"'),") (Windows)"),(0,r.kt)("li",{parentName:"ul"},"CR (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\r"'),")"),(0,r.kt)("li",{parentName:"ul"},"LF (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\\\n"'),")"),(0,r.kt)("li",{parentName:"ul"},"Record Separator (",(0,r.kt)("inlineCode",{parentName:"li"},'"0x1E"'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Quote character")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Double Quote (",(0,r.kt)("inlineCode",{parentName:"li"},'"\\""'),")"),(0,r.kt)("li",{parentName:"ul"},"Single Quote (",(0,r.kt)("inlineCode",{parentName:"li"},'"'),")"),(0,r.kt)("li",{parentName:"ul"},"Disable Quoting (",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"Auto")))),(0,r.kt)("p",null,"The sample specification ",(0,r.kt)("a",{parentName:"p",href:"#sample"},"above")," includes these fields."))}k.isMDXComponent=!0}}]);