"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4744],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2866:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="GitHub",s={unversionedId:"reference/Connectors/capture-connectors/github",id:"reference/Connectors/capture-connectors/github",title:"GitHub",description:"This connector captures data from GitHub repositories and organizations into Flow collections via GitHub's REST API.",source:"@site/docs/reference/Connectors/capture-connectors/github.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/github",permalink:"/pr-preview/pr-1132/reference/Connectors/capture-connectors/github",draft:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/github.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Freshdesk",permalink:"/pr-preview/pr-1132/reference/Connectors/capture-connectors/freshdesk"},next:{title:"Google Ads",permalink:"/pr-preview/pr-1132/reference/Connectors/capture-connectors/google-ads"}},l={},p=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with GitHub in the Flow web app",id:"using-oauth2-to-authenticate-with-github-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually using personal access token",id:"configuring-the-connector-specification-manually-using-personal-access-token",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}],u={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github"},"GitHub"),(0,r.kt)("p",null,"This connector captures data from GitHub repositories and organizations into Flow collections via GitHub's REST API."),(0,r.kt)("p",null,"It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.kt)("a",{parentName:"p",href:"https://ghcr.io/estuary/source-github:dev"},(0,r.kt)("inlineCode",{parentName:"a"},"ghcr.io/estuary/source-github:dev"))," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."),(0,r.kt)("p",null,"This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/integrations/sources/github/"},"here"),",\nbut keep in mind that the two versions may be significantly different."),(0,r.kt)("h2",{id:"supported-data-resources"},"Supported data resources"),(0,r.kt)("p",null,"When you ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"configure the connector"),", you specify a list of GitHub organizations and/or repositories\nfrom which to capture data."),(0,r.kt)("p",null,"From your selection, the following data resources are captured:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Full refresh (batch) resources"),(0,r.kt)("th",{parentName:"tr",align:null},"Incremental (real-time supported) resources"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/issues/assignees#list-assignees"},"Assignees")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/issues/comments#list-issue-comments-for-a-repository"},"Comments"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/branches/branches#list-branches"},"Branches")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/reactions#list-reactions-for-a-commit-comment"},"Commit comment reactions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/collaborators/collaborators#list-repository-collaborators"},"Collaborators")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/commits/comments#list-commit-comments-for-a-repository"},"Commit comments"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/issues/labels#list-labels-for-a-repository"},"Issue labels")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/commits/commits#list-commits"},"Commits"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/pulls/pulls#list-commits-on-a-pull-request"},"Pull request commits")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/deployments#list-deployments"},"Deployments"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/repos/repos#list-repository-tags"},"Tags")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/activity/events#list-repository-events"},"Events"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/teams/members#list-team-members"},"Team members")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/reactions#list-reactions-for-an-issue-comment"},"Issue comment reactions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/teams/members#get-team-membership-for-a-user"},"Team memberships")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/issues#list-issue-events-for-a-repository"},"Issue events"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/teams#list-teams"},"Teams")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/issues#list-milestones"},"Issue milestones"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/orgs/members#list-organization-members"},"Users")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/reactions#list-reactions-for-an-issue"},"Issue reactions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/issues/issues#list-repository-issues"},"Issues"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/projects/cards#list-project-cards"},"Project cards"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/projects#list-project-columns"},"Project columns"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/projects/projects#list-repository-projects"},"Projects"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/reactions#list-reactions-for-a-pull-request-review-comment"},"Pull request comment reactions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/pulls/pulls#get-a-pull-request"},"Pull request stats"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/pulls/pulls#list-pull-requests"},"Pull requests"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/releases/releases#list-releases"},"Releases"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/repos/repos#list-organization-repositories"},"Repositories"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/pulls/comments#list-review-comments-in-a-repository"},"Review comments"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/pulls/reviews#list-reviews-for-a-pull-request"},"Reviews"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/activity/starring#list-stargazers"},"Stargazers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/actions/workflow-runs#list-workflow-runs-for-a-repository"},"Workflow runs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.github.com/en/rest/actions/workflows#list-repository-workflows"},"Workflows"))))),(0,r.kt)("p",null,"Each resource is mapped to a Flow collection through a separate binding."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/start_date")," ",(0,r.kt)("a",{parentName:"p",href:"#endpoint"},"field")," is not applicable to the following resources:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Assignees"),(0,r.kt)("li",{parentName:"ul"},"Branches"),(0,r.kt)("li",{parentName:"ul"},"Collaborators"),(0,r.kt)("li",{parentName:"ul"},"Issue labels"),(0,r.kt)("li",{parentName:"ul"},"Organizations"),(0,r.kt)("li",{parentName:"ul"},"Pull request commits"),(0,r.kt)("li",{parentName:"ul"},"Pull request stats"),(0,r.kt)("li",{parentName:"ul"},"Repositories"),(0,r.kt)("li",{parentName:"ul"},"Tags"),(0,r.kt)("li",{parentName:"ul"},"Teams"),(0,r.kt)("li",{parentName:"ul"},"Users"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"There are two ways to authenticate with GitHub when capturing data into Flow: using OAuth2, and manually, by generating a personal access token.\nTheir prerequisites differ."),(0,r.kt)("p",null,"OAuth is recommended for simplicity in the Flow web app;\nthe access token method is the only supported method using the command line. Which authentication method you choose depends on the policies of your organization. Github has special organization settings that need to be enabled in order for users to be able to access repos that are part of an organization."),(0,r.kt)("h3",{id:"using-oauth2-to-authenticate-with-github-in-the-flow-web-app"},"Using OAuth2 to authenticate with GitHub in the Flow web app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A GitHub user account with access to the repositories of interest, and which is a member of organizations of interest.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'User may need to request access in Github under the user\'s personal settings (not the organization settings) by going to Applications then Authorized OAuth Apps on Github. Click the app or the image next to the app and request access under "Organization access". After a user has made the request, the organization administrator can grant access on the "Third-party application access policy" page. See additional details on this ',(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps"},"Github doc"),"."))),(0,r.kt)("h3",{id:"configuring-the-connector-specification-manually-using-personal-access-token"},"Configuring the connector specification manually using personal access token"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A GitHub user account with access to the repositories of interest, and which is a member of organizations of interest.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"personal access token"),".\nYou may use multiple tokens to balance the load on your API quota.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'User may need to get the organization\'s administrator to grant access under "Third-party Access" then "Personal access tokens".'))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-1132/concepts/connectors#using-connectors"},"connectors")," to learn more about using connectors. The values and specification sample below provide configuration details specific to the GitHub source connector."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("h4",{id:"endpoint"},"Endpoint"),(0,r.kt)("p",null,"The properties in the table below reflect the manual authentication method. If you're working in the Flow web app, you'll use ",(0,r.kt)("a",{parentName:"p",href:"#using-oauth2-to-authenticate-with-github-in-the-flow-web-app"},"OAuth2"),", so some of these properties aren't required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/branch")),(0,r.kt)("td",{parentName:"tr",align:null},"Branch (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Space-delimited list of GitHub repository branches to pull commits for, e.g. ","`","estuary","/","flow","/","your-branch","`",". If no branches are specified for a repository, the default branch will be pulled."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/credentials"))),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose how to authenticate to GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/option_title")),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication method"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"PAT Credentials")," for manual authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/credentials/personal_access_token")),(0,r.kt)("td",{parentName:"tr",align:null},"Access token"),(0,r.kt)("td",{parentName:"tr",align:null},"Personal access token, used for manual authentication. You may include multiple access tokens as a comma separated list."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/page_size_for_large_streams")),(0,r.kt)("td",{parentName:"tr",align:null},"Page size for large streams (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The Github connector captures from several resources with a large amount of data. The page size of such resources depends on the size of your repository. We recommended that you specify values between 10 and 30."),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/repository"))),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub Repositories"),(0,r.kt)("td",{parentName:"tr",align:null},"Space-delimited list of GitHub organizations","/","repositories, e.g. ","`","estuary","/","flow","`"," for a single repository, ","`","estuary","/","*","`"," to get all repositories from an organization and ","`","estuary","/","flow estuary","/","another-repo","`"," for multiple repositories."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/start_date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date from which you","'","d like to replicate data from GitHub in the format YYYY-MM-DDT00:00:00Z. For the resources that support this configuration, only data generated on or after the start date will be replicated. This field doesn't apply to all ",(0,r.kt)("a",{parentName:"td",href:"#supported-data-resources"},"resources"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h4",{id:"bindings"},"Bindings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required/Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/stream"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stream"),(0,r.kt)("td",{parentName:"tr",align:null},"GitHub resource from which collection is captured."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"/syncMode"))),(0,r.kt)("td",{parentName:"tr",align:null},"Sync mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection method."),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h3",{id:"sample"},"Sample"),(0,r.kt)("p",null,"This sample specification reflects the manual authentication method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-github:dev\n          config:\n            credentials:\n              option_title: PAT Credentials\n              personal_access_token: {secret}\n            page_size_for_large_streams: 10\n            repository: estuary/flow\n            start_date: 2022-01-01T00:00:00Z\n      bindings:\n        - resource:\n            stream: assignees\n            syncMode: full_refresh\n          target: ${PREFIX}/assignees\n       {...}\n")))}m.isMDXComponent=!0}}]);