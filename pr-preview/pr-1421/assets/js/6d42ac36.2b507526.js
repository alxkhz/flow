"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3640],{24396:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var r=t(74848),i=t(28453);const n={sidebar_position:1},o="GitHub",c={id:"reference/Connectors/capture-connectors/github",title:"GitHub",description:"This connector captures data from GitHub repositories and organizations into Flow collections via GitHub's REST API.",source:"@site/docs/reference/Connectors/capture-connectors/github.md",sourceDirName:"reference/Connectors/capture-connectors",slug:"/reference/Connectors/capture-connectors/github",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/github",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/capture-connectors/github.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Freshdesk",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/freshdesk"},next:{title:"GitLab",permalink:"/pr-preview/pr-1421/reference/Connectors/capture-connectors/gitlab"}},l={},d=[{value:"Supported data resources",id:"supported-data-resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using OAuth2 to authenticate with GitHub in the Flow web app",id:"using-oauth2-to-authenticate-with-github-in-the-flow-web-app",level:3},{value:"Configuring the connector specification manually using personal access token",id:"configuring-the-connector-specification-manually-using-personal-access-token",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Properties",id:"properties",level:3},{value:"Endpoint",id:"endpoint",level:4},{value:"Bindings",id:"bindings",level:4},{value:"Sample",id:"sample",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"github",children:"GitHub"}),"\n",(0,r.jsx)(s.p,{children:"This connector captures data from GitHub repositories and organizations into Flow collections via GitHub's REST API."}),"\n",(0,r.jsxs)(s.p,{children:["It is available for use in the Flow web application. For local development or open-source workflows, ",(0,r.jsx)(s.a,{href:"https://ghcr.io/estuary/source-github:dev",children:(0,r.jsx)(s.code,{children:"ghcr.io/estuary/source-github:dev"})})," provides the latest version of the connector as a Docker image. You can also follow the link in your browser to see past image versions."]}),"\n",(0,r.jsxs)(s.p,{children:["This connector is based on an open-source connector from a third party, with modifications for performance in the Flow system.\nYou can find their documentation ",(0,r.jsx)(s.a,{href:"https://docs.airbyte.com/integrations/sources/github/",children:"here"}),",\nbut keep in mind that the two versions may be significantly different."]}),"\n",(0,r.jsx)(s.h2,{id:"supported-data-resources",children:"Supported data resources"}),"\n",(0,r.jsxs)(s.p,{children:["When you ",(0,r.jsx)(s.a,{href:"#endpoint",children:"configure the connector"}),", you specify a list of GitHub organizations and/or repositories\nfrom which to capture data."]}),"\n",(0,r.jsx)(s.p,{children:"From your selection, the following data resources are captured:"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Full refresh (batch) resources"}),(0,r.jsx)(s.th,{children:"Incremental (real-time supported) resources"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/issues/assignees#list-assignees",children:"Assignees"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/issues/comments#list-issue-comments-for-a-repository",children:"Comments"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/branches/branches#list-branches",children:"Branches"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/reactions#list-reactions-for-a-commit-comment",children:"Commit comment reactions"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/collaborators/collaborators#list-repository-collaborators",children:"Collaborators"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/commits/comments#list-commit-comments-for-a-repository",children:"Commit comments"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/issues/labels#list-labels-for-a-repository",children:"Issue labels"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/commits/commits#list-commits",children:"Commits"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/pulls/pulls#list-commits-on-a-pull-request",children:"Pull request commits"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/deployments#list-deployments",children:"Deployments"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/repos/repos#list-repository-tags",children:"Tags"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/activity/events#list-repository-events",children:"Events"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/teams/members#list-team-members",children:"Team members"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/reactions#list-reactions-for-an-issue-comment",children:"Issue comment reactions"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/teams/members#get-team-membership-for-a-user",children:"Team memberships"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/issues#list-issue-events-for-a-repository",children:"Issue events"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/teams#list-teams",children:"Teams"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/issues#list-milestones",children:"Issue milestones"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/orgs/members#list-organization-members",children:"Users"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/reactions#list-reactions-for-an-issue",children:"Issue reactions"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/issues/issues#list-repository-issues",children:"Issues"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/projects/cards#list-project-cards",children:"Project cards"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/projects#list-project-columns",children:"Project columns"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/projects/projects#list-repository-projects",children:"Projects"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/reactions#list-reactions-for-a-pull-request-review-comment",children:"Pull request comment reactions"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/pulls/pulls#get-a-pull-request",children:"Pull request stats"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/pulls/pulls#list-pull-requests",children:"Pull requests"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/releases/releases#list-releases",children:"Releases"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/repos/repos#list-organization-repositories",children:"Repositories"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/pulls/comments#list-review-comments-in-a-repository",children:"Review comments"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/pulls/reviews#list-reviews-for-a-pull-request",children:"Reviews"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/activity/starring#list-stargazers",children:"Stargazers"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/actions/workflow-runs#list-workflow-runs-for-a-repository",children:"Workflow runs"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"https://docs.github.com/en/rest/actions/workflows#list-repository-workflows",children:"Workflows"})})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Each resource is mapped to a Flow collection through a separate binding."}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"/start_date"})," ",(0,r.jsx)(s.a,{href:"#endpoint",children:"field"})," is not applicable to the following resources:"]}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Assignees"}),"\n",(0,r.jsx)(s.li,{children:"Branches"}),"\n",(0,r.jsx)(s.li,{children:"Collaborators"}),"\n",(0,r.jsx)(s.li,{children:"Issue labels"}),"\n",(0,r.jsx)(s.li,{children:"Organizations"}),"\n",(0,r.jsx)(s.li,{children:"Pull request commits"}),"\n",(0,r.jsx)(s.li,{children:"Pull request stats"}),"\n",(0,r.jsx)(s.li,{children:"Repositories"}),"\n",(0,r.jsx)(s.li,{children:"Tags"}),"\n",(0,r.jsx)(s.li,{children:"Teams"}),"\n",(0,r.jsx)(s.li,{children:"Users"}),"\n"]})]}),"\n",(0,r.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(s.p,{children:"There are two ways to authenticate with GitHub when capturing data into Flow: using OAuth2, and manually, by generating a personal access token.\nTheir prerequisites differ."}),"\n",(0,r.jsx)(s.p,{children:"OAuth is recommended for simplicity in the Flow web app;\nthe access token method is the only supported method using the command line. Which authentication method you choose depends on the policies of your organization. Github has special organization settings that need to be enabled in order for users to be able to access repos that are part of an organization."}),"\n",(0,r.jsx)(s.h3,{id:"using-oauth2-to-authenticate-with-github-in-the-flow-web-app",children:"Using OAuth2 to authenticate with GitHub in the Flow web app"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"A GitHub user account with access to the repositories of interest, and which is a member of organizations of interest."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:['User may need to request access in Github under the user\'s personal settings (not the organization settings) by going to Applications then Authorized OAuth Apps on Github. Click the app or the image next to the app and request access under "Organization access". After a user has made the request, the organization administrator can grant access on the "Third-party application access policy" page. See additional details on this ',(0,r.jsx)(s.a,{href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps",children:"Github doc"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"configuring-the-connector-specification-manually-using-personal-access-token",children:"Configuring the connector specification manually using personal access token"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"A GitHub user account with access to the repositories of interest, and which is a member of organizations of interest."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["A GitHub ",(0,r.jsx)(s.a,{href:"https://github.com/settings/tokens",children:"personal access token"}),".\nYou may use multiple tokens to balance the load on your API quota."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:'User may need to get the organization\'s administrator to grant access under "Third-party Access" then "Personal access tokens".'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(s.p,{children:["You configure connectors either in the Flow web app, or by directly editing the catalog specification file.\nSee ",(0,r.jsx)(s.a,{href:"/pr-preview/pr-1421/concepts/connectors#using-connectors",children:"connectors"})," to learn more about using connectors. The values and specification sample below provide configuration details specific to the GitHub source connector."]}),"\n",(0,r.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h4,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(s.p,{children:["The properties in the table below reflect the manual authentication method. If you're working in the Flow web app, you'll use ",(0,r.jsx)(s.a,{href:"#using-oauth2-to-authenticate-with-github-in-the-flow-web-app",children:"OAuth2"}),", so some of these properties aren't required."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Title"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Required/Default"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/branch"})}),(0,r.jsx)(s.td,{children:"Branch (Optional)"}),(0,r.jsx)(s.td,{children:"Space-delimited list of GitHub repository branches to pull commits for, e.g. `estuary/flow/your-branch`. If no branches are specified for a repository, the default branch will be pulled."}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/credentials"})})}),(0,r.jsx)(s.td,{children:"Authentication"}),(0,r.jsx)(s.td,{children:"Choose how to authenticate to GitHub"}),(0,r.jsx)(s.td,{children:"object"}),(0,r.jsx)(s.td,{children:"Required"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/credentials/option_title"})}),(0,r.jsx)(s.td,{children:"Authentication method"}),(0,r.jsxs)(s.td,{children:["Set to ",(0,r.jsx)(s.code,{children:"PAT Credentials"})," for manual authentication"]}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/credentials/personal_access_token"})}),(0,r.jsx)(s.td,{children:"Access token"}),(0,r.jsx)(s.td,{children:"Personal access token, used for manual authentication. You may include multiple access tokens as a comma separated list."}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"/page_size_for_large_streams"})}),(0,r.jsx)(s.td,{children:"Page size for large streams (Optional)"}),(0,r.jsx)(s.td,{children:"The Github connector captures from several resources with a large amount of data. The page size of such resources depends on the size of your repository. We recommended that you specify values between 10 and 30."}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"10"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/repository"})})}),(0,r.jsx)(s.td,{children:"GitHub Repositories"}),(0,r.jsx)(s.td,{children:"Space-delimited list of GitHub organizations/repositories, e.g. `estuary/flow` for a single repository, `estuary/*` to get all repositories from an organization and `estuary/flow estuary/another-repo` for multiple repositories."}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Required"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/start_date"})})}),(0,r.jsx)(s.td,{children:"Start date"}),(0,r.jsxs)(s.td,{children:["The date from which you'd like to replicate data from GitHub in the format YYYY-MM-DDT00:00:00Z. For the resources that support this configuration, only data generated on or after the start date will be replicated. This field doesn't apply to all ",(0,r.jsx)(s.a,{href:"#supported-data-resources",children:"resources"}),"."]}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"bindings",children:"Bindings"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Property"}),(0,r.jsx)(s.th,{children:"Title"}),(0,r.jsx)(s.th,{children:"Description"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Required/Default"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/stream"})})}),(0,r.jsx)(s.td,{children:"Stream"}),(0,r.jsx)(s.td,{children:"GitHub resource from which collection is captured."}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Required"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"/syncMode"})})}),(0,r.jsx)(s.td,{children:"Sync mode"}),(0,r.jsx)(s.td,{children:"Connection method."}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:"Required"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(s.p,{children:"This sample specification reflects the manual authentication method."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"captures:\n  ${PREFIX}/${CAPTURE_NAME}:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-github:dev\n          config:\n            credentials:\n              option_title: PAT Credentials\n              personal_access_token: {secret}\n            page_size_for_large_streams: 10\n            repository: estuary/flow\n            start_date: 2022-01-01T00:00:00Z\n      bindings:\n        - resource:\n            stream: assignees\n            syncMode: full_refresh\n          target: ${PREFIX}/assignees\n       {...}\n"})})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>c});var r=t(96540);const i={},n=r.createContext(i);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);