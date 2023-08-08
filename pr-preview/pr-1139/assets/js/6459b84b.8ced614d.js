"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7868],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?o.createElement(h,l(l({ref:t},u),{},{components:a})):o.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var o=a(7462),n=a(7294),r=a(3905);const l=()=>{const e=window.location.href,[t,a]=n.useState("");return n.useMemo((()=>new URLSearchParams(window.location.search.slice(1)).get("code")),[])?n.createElement("span",{style:{color:"green"}},"You have successfully added the application to your tenant"):n.createElement(n.Fragment,null,n.createElement("span",null,"Input your ",n.createElement("b",null,"Tenant ID")," and follow the prompts to add our application to your tenant:"),n.createElement("br",null),n.createElement("br",null),n.createElement("input",{placeholder:"Tenant ID",value:t,onChange:e=>a(e.target.value)}),n.createElement("a",{style:{marginLeft:8,color:t.length<1?"inherit":void 0},href:t.length>0?(o=t,`https://login.microsoftonline.com/${o}/oauth2/authorize?client_id=42cb0c6c-dab0-411f-9c21-16d5a2b1b025&response_type=code&redirect_uri=${encodeURIComponent(e)}&resource_id=${encodeURIComponent("https://storage.azure.com")}`):null},"Authorize"));var o};var i=a(2389);function s(e){let{children:t,fallback:a}=e;return(0,i.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}const p={sidebar_position:1},u="Registration and setup",c={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Registration and setup",description:"Estuary Flow is a fully managed web application that also offers a robust CLI.",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/pr-preview/pr-1139/getting-started/installation",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Comparisons",permalink:"/pr-preview/pr-1139/overview/comparisons"},next:{title:"Flow tutorials",permalink:"/pr-preview/pr-1139/getting-started/tutorials/"}},m={},d=[{value:"Get started with the Flow web application",id:"get-started-with-the-flow-web-application",level:2},{value:"Get started with the Flow CLI",id:"get-started-with-the-flow-cli",level:2},{value:"Configuring your cloud storage bucket for use with Flow",id:"configuring-your-cloud-storage-bucket-for-use-with-flow",level:2},{value:"Google Cloud Storage buckets",id:"google-cloud-storage-buckets",level:3},{value:"Amazon S3 buckets",id:"amazon-s3-buckets",level:3},{value:"Azure Blob Storage",id:"azure-blob-storage",level:3},{value:"Give us a ring",id:"give-us-a-ring",level:3},{value:"Self-hosting Flow",id:"self-hosting-flow",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],h={toc:d},g="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"registration-and-setup"},"Registration and setup"),(0,r.kt)("p",null,"Estuary Flow is a fully managed web application that also offers a robust CLI.\nOnce you register in the web application, you can seamlessly use either or both tools to do your work."),(0,r.kt)("h2",{id:"get-started-with-the-flow-web-application"},"Get started with the Flow web application"),(0,r.kt)("p",null,"To start using Flow for free, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://go.estuary.dev/dashboard"},"web application"),".\nSee what the free tier includes on the ",(0,r.kt)("a",{parentName:"p",href:"https://estuary.dev/pricing/"},"Pricing")," page."),(0,r.kt)("p",null,"When you register for Flow, your account will use Flow's secure cloud storage bucket to store your data.\nData in Flow's cloud storage bucket is deleted 30 days after collection."),(0,r.kt)("p",null,"For production use cases, you should ",(0,r.kt)("a",{parentName:"p",href:"#configuring-your-cloud-storage-bucket-for-use-with-flow"},"configure your own cloud storage bucket to use with Flow"),"."),(0,r.kt)("h2",{id:"get-started-with-the-flow-cli"},"Get started with the Flow CLI"),(0,r.kt)("p",null,"After your account has been activated through the ",(0,r.kt)("a",{parentName:"p",href:"#get-started-with-the-flow-web-application"},"web app"),", you can begin to work with your data flows from the command line.\nThis is not required, but it enables more advanced workflows or might simply be your preference."),(0,r.kt)("p",null,"Flow has a single binary, ",(0,r.kt)("strong",{parentName:"p"},"flowctl"),"."),(0,r.kt)("p",null,"flowctl is available for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linux")," x86-64. All distributions are supported."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MacOS")," 11 (Big Sur) or later. Both Intel and M1 chips are supported.")),(0,r.kt)("p",null,"To install, copy and paste the appropriate script below into your terminal. This will download flowctl, make it executable, and add it to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Linux:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flow/releases/latest/download/flowctl-x86_64-linux' && sudo chmod +x /usr/local/bin/flowctl\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Mac:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo curl -o /usr/local/bin/flowctl -L 'https://github.com/estuary/flow/releases/latest/download/flowctl-multiarch-macos' && sudo chmod +x /usr/local/bin/flowctl\n")),(0,r.kt)("p",null,"Alternatively, Mac users can install with Homebrew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"brew tap estuary/flowctl\nbrew install flowctl\n")),(0,r.kt)("p",null,"flowctl isn't currently available for Windows.\nFor Windows users, we recommend running the Linux version inside ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/"},"WSL"),",\nor using a remote development environment."),(0,r.kt)("p",null,"The flowctl source files are also on GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://go.estuary.dev/flowctl"},"here"),"."),(0,r.kt)("p",null,"Once you've installed flowctl and are ready to begin working, authenticate your session using an access token."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that you have an Estuary account and have signed into the Flow web app before.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the terminal of your local development environment, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"flowctl auth login\n")),(0,r.kt)("p",{parentName:"li"},"In a browser window, the web app opens to the CLI-API tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the access token.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to the terminal, paste the access token, and press Enter."))),(0,r.kt)("p",null,"The token will expire after a predetermined duration. Repeat this process to re-authenticate."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1139/concepts/flowctl"},"Learn more about using flowctl.")),(0,r.kt)("h2",{id:"configuring-your-cloud-storage-bucket-for-use-with-flow"},"Configuring your cloud storage bucket for use with Flow"),(0,r.kt)("p",null,"New Flow accounts are connected to Flow's secure cloud storage bucket to store collection data.\nTo switch to your own bucket, choose a cloud provider and complete the setup steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#google-cloud-storage-buckets"},"Google Cloud Storage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#amazon-s3-buckets"},"Amazon S3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#azure-blob-storage"},"Azure Blob Storage")))),(0,r.kt)("p",null,"Once you're done, ",(0,r.kt)("a",{parentName:"p",href:"#give-us-a-ring"},"get in touch"),"."),(0,r.kt)("h3",{id:"google-cloud-storage-buckets"},"Google Cloud Storage buckets"),(0,r.kt)("p",null,"You'll need to grant Estuary Flow access to your GCS bucket."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets"},"Create a bucket to use with Flow"),", if you haven't already.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the steps to ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add"},"add a principal to a bucket level policy"),".\nAs you do so:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the principal, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"flow-258@helpful-kingdom-273219.iam.gserviceaccount.com"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam-roles"},(0,r.kt)("inlineCode",{parentName:"a"},"roles/storage.admin"))," role."))))),(0,r.kt)("h3",{id:"amazon-s3-buckets"},"Amazon S3 buckets"),(0,r.kt)("p",null,"Your bucket must be in the us-east-1 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html"},"region"),".\nYou'll need to grant Estuary Flow access to your S3 bucket."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"Create a bucket to use with Flow"),", if you haven't already."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("strong",{parentName:"li"},"Region")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"us-east-1"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the steps to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/add-bucket-policy.html"},"add a bucket policy"),", pasting the policy below.\nBe sure to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR-S3-BUCKET")," with the actual name of your bucket."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "AllowUsersToAccessObjectsUnderPrefix",\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::789740162118:user/flow-aws"\n      },\n      "Action": ["s3:GetObject", "s3:PutObject"],\n      "Resource": "arn:aws:s3:::YOUR-S3-BUCKET/*"\n    },\n    {\n      "Effect": "Allow",\n      "Principal": {\n        "AWS": "arn:aws:iam::789740162118:user/flow-aws"\n      },\n      "Action": "s3:ListBucket",\n      "Resource": "arn:aws:s3:::YOUR-S3-BUCKET"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"azure-blob-storage"},"Azure Blob Storage"),(0,r.kt)("p",null,"You'll need to grant Estuary Flow access to your storage account and container.\nYou'll also need to provide some identifying information."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal#create-a-container"},"Create an Azure Blob Storage container")," to use with Flow, if you haven't already.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Gather the following information. You'll need this when you contact us to complete setup."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your ",(0,r.kt)("strong",{parentName:"p"},"Azure AD tenant ID"),". You can find this in the ",(0,r.kt)("strong",{parentName:"p"},"Azure Active Directory")," page.\n",(0,r.kt)("img",{src:a(5991).Z,width:"1147",height:"507"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your ",(0,r.kt)("strong",{parentName:"p"},"Azure Blob Storage account ID"),". You can find this in the ",(0,r.kt)("strong",{parentName:"p"},"Storage Accounts")," page.\n",(0,r.kt)("img",{src:a(2345).Z,width:"852",height:"317"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your ",(0,r.kt)("strong",{parentName:"p"},"Azure Blob Storage container ID"),". You can find this inside your storage account.\n",(0,r.kt)("img",{src:a(5959).Z,width:"997",height:"599"})),(0,r.kt)("p",{parentName:"li"}," You'll grant Flow access to your storage resources by connecting to Estuary's\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/active-directory/manage-apps/what-is-application-management"},"Azure application"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add Estuary's Azure application to your tenant."))),(0,r.kt)(s,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(l,{mdxType:"AzureAuthorizeComponent"}))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the application access to your storage account via the\n",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-owner"},(0,r.kt)("inlineCode",{parentName:"a"},"Storage Blob Data Owner"))," IAM role."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inside your storage account's ",(0,r.kt)("strong",{parentName:"p"},"Access Control (IAM)")," tab, click ",(0,r.kt)("strong",{parentName:"p"},"Add Role Assignment"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage Blob Data Owner")," and select it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the next page, make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"User, group, or service principal")," is selected, then click ",(0,r.kt)("strong",{parentName:"p"},"+ Select Members"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You must search for the exact name of the application, otherwise it won't show up: ",(0,r.kt)("inlineCode",{parentName:"p"},"Estuary Storage Mappings Prod"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once you've selected the application, finish granting the role."),(0,r.kt)("p",{parentName:"li"},"For more help, see the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal"},"Azure docs"),"."))))),(0,r.kt)("h3",{id:"give-us-a-ring"},"Give us a ring"),(0,r.kt)("p",null,"Once you've finished the above steps, contact us.\nSend ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@estuary.dev"},"support@estuary.dev")," an email with the name of the storage bucket and any other information you gathered per the steps above.\nLet us know whether you want to use this storage bucket to for your whole Flow account, or just a specific ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1139/concepts/catalogs#namespace"},"prefix"),".\nWe'll be in touch when it's done!"),(0,r.kt)("h2",{id:"self-hosting-flow"},"Self-hosting Flow"),(0,r.kt)("p",null,"The Flow runtime is available under the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/flow/blob/master/LICENSE-BSL"},"Business Source License"),". It's possible to self-host Flow using a cloud provider of your choice."),(0,r.kt)("admonition",{title:"Beta",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Setup for self-hosting is not covered in this documentation, and full support is not guaranteed at this time.\nWe recommend using the ",(0,r.kt)("a",{parentName:"p",href:"#get-started-with-the-flow-web-application"},"hosted version of Flow")," for the best experience.\nIf you'd still like to self-host, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estuary/flow"},"GitHub repository")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/estuary-dev/shared_invite/zt-86nal6yr-VPbv~YfZE9Q~6Zl~gmZdFQ"},"Estuary Slack"),".")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Start using Flow with these recommended resources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/pr-preview/pr-1139/guides/create-dataflow"},"Create your first data flow")),":\nFollow this guide to create your first data flow in the Flow web app, while learning essential flow concepts.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/pr-preview/pr-1139/concepts/"},"High level concepts")),": Start here to learn more about important Flow terms."))))}k.isMDXComponent=!0},5991:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Azure_AD_Tenant_ID-755966905d34f909de14009536374173.png"},5959:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Azure_Container_ID-de1a2aac02163282fc8694374ac22c27.png"},2345:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Azure_Storage_Account_Name-0f3730e71af4f785f38be9df59f63d5e.png"}}]);