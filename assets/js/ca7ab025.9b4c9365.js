"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9726],{6024:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=t(74848),s=t(28453),i=t(11470),r=t(19365);const a={sidebar_position:5},c="Connectors",l={id:"concepts/connectors",title:"Connectors",description:"Connectors bridge the gap between Flow and",source:"@site/docs/concepts/connectors.md",sourceDirName:"concepts",slug:"/concepts/connectors",permalink:"/concepts/connectors",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/concepts/connectors.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Materializations",permalink:"/concepts/materialization"},next:{title:"Derivations",permalink:"/concepts/derivations"}},d={},u=[{value:"Using connectors",id:"using-connectors",level:2},{value:"Flow web application",id:"flow-web-application",level:3},{value:"GitOps and flowctl",id:"gitops-and-flowctl",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Protecting secrets",id:"protecting-secrets",level:3},{value:"Example: Protect a configuration",id:"example-protect-a-configuration",level:4},{value:"Example: Protect portions of a configuration",id:"example-protect-portions-of-a-configuration",level:4},{value:"Connecting to endpoints on secure networks",id:"connecting-to-endpoints-on-secure-networks",level:3},{value:"Sample",id:"sample",level:4},{value:"Why an open connector architecture?",id:"why-an-open-connector-architecture",level:2},{value:"Available connectors",id:"available-connectors",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"connectors",children:"Connectors"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Connectors"})," bridge the gap between Flow and\nthe various endpoints from which you capture or to which you materialize data."]}),"\n",(0,o.jsxs)(n.p,{children:["Supported connectors are all available to you within the Flow web application.\nFrom a technical perspective, they're packaged as ",(0,o.jsx)(n.a,{href:"https://github.com/orgs/estuary/packages?repo_name=connectors",children:"Docker images"}),",\neach encapsulating the details of working with a particular external system."]}),"\n",(0,o.jsx)(n.p,{children:"All connectors available in Flow are open-source, and many of them were built by Estuary.\nEstuary connectors are dual-licensed under Apache 2.0 or MIT.\nFlow also supports open-source connectors built by third parties, which Estuary independently tests and may alter slightly\nfor optimal performance within the Flow ecosystem."}),"\n",(0,o.jsxs)(n.p,{children:["Estuary\u2019s vision is to provide a common runtime against which any open connector may be run.\nTo that end, Flow currently supports the\n",(0,o.jsx)(n.a,{href:"https://docs.airbyte.io/understanding-airbyte/airbyte-specification",children:"Airbyte specification"}),"\nas well as Flow\u2019s low-latency gRPC protocols for captures and materializations."]}),"\n",(0,o.jsx)(n.h2,{id:"using-connectors",children:"Using connectors"}),"\n",(0,o.jsx)(n.p,{children:"Most \u2014 if not all \u2014 of your Data Flows will use at least one connector.\nYou configure connectors within capture or materialization specifications.\nWhen you publish one of these entities, you're also deploying all the connectors it uses."}),"\n",(0,o.jsx)(n.p,{children:"You can interact with connectors using either the Flow web application or the flowctl CLI."}),"\n",(0,o.jsx)(n.h3,{id:"flow-web-application",children:"Flow web application"}),"\n",(0,o.jsx)(n.p,{children:"The Flow web application is designed to assist you with connector configuration and deployment.\nIt's a completely no-code experience, but it's compatible with Flow's command line tools, discussed below."}),"\n",(0,o.jsxs)(n.p,{children:["When you add a capture or materialization in the Flow web app, choose the desired data system from the ",(0,o.jsx)(n.strong,{children:"Connector"})," drop-down menu."]}),"\n",(0,o.jsxs)(n.p,{children:["The required fields for the connector appear below the drop-down. When you fill in the fields and click ",(0,o.jsx)(n.strong,{children:"Discover Endpoint"}),',\nFlow automatically "discovers" the data streams or tables \u2014 known as ',(0,o.jsx)(n.strong,{children:"resources"})," \u2014 associated with the endpoint system.\nFrom there, you can refine the configuration, save, and publish the resulting Flow specification."]}),"\n",(0,o.jsx)(n.h3,{id:"gitops-and-flowctl",children:"GitOps and flowctl"}),"\n",(0,o.jsxs)(n.p,{children:["Connectors are packaged as ",(0,o.jsx)(n.a,{href:"https://opencontainers.org/",children:"Open Container"})," (Docker) images,\nand can be tagged, and pulled using\n",(0,o.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"}),",\n",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",children:"GitHub Container registry"}),",\nor any other public image registry provider."]}),"\n",(0,o.jsx)(n.p,{children:"To interface with a connector, the Flow runtime needs to know:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The specific image to use, through an image name such as ",(0,o.jsx)(n.code,{children:"ghcr.io/estuary/source-postgres:dev"}),".\nNotice that the image name also conveys the specific image registry and version tag to use."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Endpoint configuration such as a database address and account, with meaning that is specific to the connector."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Resource configuration such as a specific database table to capture, which is also specific to the connector."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To integrate a connector into your dataflow,\nyou must define all three components within your Flow specification."}),"\n",(0,o.jsxs)(n.p,{children:["The web application is intended to help you generate the Flow specification.\nFrom there, you can use ",(0,o.jsx)(n.a,{href:"/concepts/flowctl",children:"flowctl"})," to refine it in your local environment.\nIt's also possible to manually write your Flow specification files, but this isn't the recommended workflow."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"materializations:\n  acmeCo/postgres-views:\n    endpoint:\n      connector:\n        # 1: Provide the image that implements your endpoint connector.\n        # The `dev` tag uses the most recent version (the web app chooses this tag automatically)\n        image: ghcr.io/estuary/materialize-postgres:dev\n        # 2: Provide endpoint configuration that the connector requires.\n        config:\n          address: localhost:5432\n          password: password\n          database: postgres\n          user: postgres\n    bindings:\n      - source: acmeCo/products/anvils\n        # 3: Provide resource configuration for the binding between the Flow\n        #    collection and the endpoint resource. This connector interfaces\n        #    with a SQL database and its resources are database tables. Here,\n        #    we provide a table to create and materialize which is bound to the\n        #    `acmeCo/products/anvils` source collection.\n        resource:\n          table: anvil_products\n\n      # Multiple resources can be configured through a single connector.\n      # Bind additional collections to tables as part of this connector instance:\n      - source: acmeCo/products/TNT\n        resource:\n          table: tnt_products\n\n      - source: acmeCo/customers\n        resource:\n          table: customers\n"})}),"\n",(0,o.jsx)(n.h4,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Because connectors interface with external systems, each requires a slightly different ",(0,o.jsx)(n.strong,{children:"endpoint configuration"}),".\nHere you specify information such as a database hostname or account credentials \u2014\nwhatever that specific connector needs to function."]}),"\n",(0,o.jsx)(n.p,{children:"If you're working directly with Flow specification files,\nyou have the option of including the configuration inline\nor storing it in separate files:"}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(r.A,{value:"Inline",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="my.flow.yaml"',children:"materializations:\n  acmeCo/postgres-views:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-postgres:dev\n        config:\n          address: localhost:5432\n          password: password\n          database: postgres\n          user: postgres\n      bindings: []\n"})})}),(0,o.jsxs)(r.A,{value:"Referenced file",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="my.flow.yaml"',children:"materializations:\n  acmeCo/postgres-views:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/materialize-postgres:dev\n        config: my.config.yaml\n      bindings: []\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="my.config.yaml"',children:"address: localhost:5432\npassword: password\ndatabase: postgres\nuser: postgres\n"})})]})]}),"\n",(0,o.jsx)(n.p,{children:"Storing configuration in separate files serves two important purposes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Re-use of configuration across multiple captures or materializations"}),"\n",(0,o.jsx)(n.li,{children:"The ability to protect sensitive credentials"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"protecting-secrets",children:"Protecting secrets"}),"\n",(0,o.jsx)(n.p,{children:"Most endpoint systems require credentials of some kind,\nsuch as a username or password."}),"\n",(0,o.jsx)(n.p,{children:"Sensitive credentials should be protected while not in use.\nThe only time a credential needs to be directly accessed is when Flow initiates the connector."}),"\n",(0,o.jsxs)(n.p,{children:["Flow integrates with Mozilla\u2019s ",(0,o.jsx)(n.a,{href:"https://github.com/mozilla/sops",children:"sops"})," tool,\nwhich can encrypt and protect credentials.\nIt stores a ",(0,o.jsx)(n.code,{children:"sops"}),"-protected configuration in its encrypted form,\nand decrypts it only when invoking a connector on the your behalf."]}),"\n",(0,o.jsxs)(n.p,{children:["sops, short for \u201cSecrets Operations,\u201d is a tool that encrypts the values of a JSON or YAML document\nagainst a key management system (KMS) such as Google Cloud Platform KMS, Azure Key Vault, or Hashicorp Vault.\nEncryption or decryption of a credential with ",(0,o.jsx)(n.code,{children:"sops"})," is an active process:\nit requires that the user (or the Flow runtime identity) have a current authorization to the required KMS,\nand creates a request trace which can be logged and audited.\nIt's also possible to revoke access to the KMS,\nwhich immediately and permanently removes access to the protected credential."]}),"\n",(0,o.jsxs)(n.p,{children:["When you use the Flow web application, Flow automatically\nadds ",(0,o.jsx)(n.code,{children:"sops"})," protection to sensitive fields on your behalf.\nYou can also implement ",(0,o.jsx)(n.code,{children:"sops"})," manually if you are writing a Flow specification locally.\nThe examples below provide a useful reference."]}),"\n",(0,o.jsx)(n.h4,{id:"example-protect-a-configuration",children:"Example: Protect a configuration"}),"\n",(0,o.jsx)(n.p,{children:"Suppose you're given a connector configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'host: my.hostname\npassword: "this is sensitive!"\nuser: my-user\n'})}),"\n",(0,o.jsx)(n.p,{children:"You can protect it using a Google KMS key that you own:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Login to Google Cloud and initialize application default credentials used by `sops`.\n$ gcloud auth application-default login\n# Use `sops` to re-write the configuration document in place, protecting its values.\n$ sops --encrypt --in-place --gcp-kms projects/your-project-id/locations/us-central1/keyRings/your-ring/cryptoKeys/your-key-name config.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sops"})," re-writes the file, wrapping each value in an encrypted envelope and adding a ",(0,o.jsx)(n.code,{children:"sops"})," metadata section:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'host: ENC[AES256_GCM,data:K/clly65pThTg2U=,iv:1bNmY8wjtjHFBcXLR1KFcsNMGVXRl5LGTdREUZIgcEU=,tag:5GKcguVPihXXDIM7HHuNnA==,type:str]\npassword: ENC[AES256_GCM,data:IDDY+fl0/gAcsH+6tjRdww+G,iv:Ye8st7zJ9wsMRMs6BoAyWlaJeNc9qeNjkkjo6BPp/tE=,tag:EPS9Unkdg4eAFICGujlTfQ==,type:str]\nuser: ENC[AES256_GCM,data:w+F7MMwQhw==,iv:amHhNCJWAJnJaGujZgjhzVzUZAeSchEpUpBau7RVeCg=,tag:62HguhnnSDqJdKdwYnj7mQ==,type:str]\nsops:\n    # Some items omitted for brevity:\n    gcp_kms:\n        - resource_id: projects/your-project-id/locations/us-central1/keyRings/your-ring/cryptoKeys/your-key-name\n          created_at: "2022-01-05T15:49:45Z"\n          enc: CiQAW8BC2GDYWrJTp3ikVGkTI2XaZc6F4p/d/PCBlczCz8BZiUISSQCnySJKIptagFkIl01uiBQp056c\n    lastmodified: "2022-01-05T15:49:45Z"\n    version: 3.7.1\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You then use this ",(0,o.jsx)(n.code,{children:"config.yaml"})," within your Flow specification.\nThe Flow runtime knows that this document is protected by ",(0,o.jsx)(n.code,{children:"sops"}),"\nwill continue to store it in its protected form,\nand will attempt a decryption only when invoking a connector on your behalf."]}),"\n",(0,o.jsxs)(n.p,{children:["If you need to make further changes to your configuration,\nedit it using ",(0,o.jsx)(n.code,{children:"sops config.yaml"}),".\nIt's not required to provide the KMS key to use again,\nas ",(0,o.jsx)(n.code,{children:"sops"})," finds it within its metadata section."]}),"\n",(0,o.jsxs)(n.admonition,{type:"important",children:[(0,o.jsx)(n.p,{children:"When deploying catalogs onto the managed Flow runtime,\nyou must grant access to decrypt your GCP KMS key to the Flow runtime service agent,\nwhich is:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"flow-258@helpful-kingdom-273219.iam.gserviceaccount.com\n"})})]}),"\n",(0,o.jsx)(n.h4,{id:"example-protect-portions-of-a-configuration",children:"Example: Protect portions of a configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Endpoint configurations are typically a mix of sensitive and non-sensitive values.\nIt can be cumbersome when ",(0,o.jsx)(n.code,{children:"sops"})," protects an entire configuration document as you\nlose visibility into non-sensitive values, which you might prefer to store as\ncleartext for ease of use."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use the encrypted-suffix feature of ",(0,o.jsx)(n.code,{children:"sops"})," to selectively protect credentials:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'host: my.hostname\npassword_sops: "this is sensitive!"\nuser: my-user\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Notice that ",(0,o.jsx)(n.code,{children:"password"})," in this configuration has an added ",(0,o.jsx)(n.code,{children:"_sops"})," suffix.\nNext, encrypt only values which have that suffix:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'$ sops --encrypt --in-place --encrypted-suffix "_sops" --gcp-kms projects/your-project-id/locations/us-central1/keyRings/your-ring/cryptoKeys/your-key-name config.yaml\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"sops"}),' re-writes the file, wrapping only values having a "_sops" suffix and adding its ',(0,o.jsx)(n.code,{children:"sops"})," metadata section:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="config.yaml"',children:'host: my.hostname\npassword_sops: ENC[AES256_GCM,data:dlfidMrHfDxN//nWQTPCsjoG,iv:DHQ5dXhyOOSKI6ZIzcUM67R6DD/2MSE4LENRgOt6GPY=,tag:FNs2pTlzYlagvz7vP/YcIQ==,type:str]\nuser: my-user\nsops:\n    # Some items omitted for brevity:\n    encrypted_suffix: _sops\n    gcp_kms:\n        - resource_id: projects/your-project-id/locations/us-central1/keyRings/your-ring/cryptoKeys/your-key-name\n          created_at: "2022-01-05T16:06:36Z"\n          enc: CiQAW8BC2Au779CGdMFUjWPhNleCTAj9rL949sBvPQ6eyAC3EdESSQCnySJKD3eWX8XrtrgHqx327\n    lastmodified: "2022-01-05T16:06:37Z"\n    version: 3.7.1\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You then use this ",(0,o.jsx)(n.code,{children:"config.yaml"})," within your Flow specification.\nFlow looks for and understands the ",(0,o.jsx)(n.code,{children:"encrypted_suffix"}),",\nand will remove this suffix from configuration keys before passing them to the connector."]}),"\n",(0,o.jsx)(n.h3,{id:"connecting-to-endpoints-on-secure-networks",children:"Connecting to endpoints on secure networks"}),"\n",(0,o.jsx)(n.p,{children:"In some cases, your source or destination endpoint may be within a secure network, and you may not be able\nto allow direct access to its port due to your organization's security policy."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If permitted by your organization, a quicker solution is to whitelist the Estuary IP address, ",(0,o.jsx)(n.code,{children:"34.121.207.128"}),".\nFor help completing this task on different cloud hosting platforms,\nsee the documentation for the ",(0,o.jsx)(n.a,{href:"/reference/Connectors/",children:"connector"})," you're using."]})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.ssh.com/academy/ssh/tunneling/example#local-forwarding",children:"SHH tunneling"}),", or port forwarding,\nprovides a means for Flow to access the port indirectly through an SSH server.\nSSH tunneling is available in Estuary connectors for endpoints that use a network address for connection."]}),"\n",(0,o.jsxs)(n.p,{children:["To set up and configure the SSH server, see the ",(0,o.jsx)(n.a,{href:"../../guides/connect-network/",children:"guide"}),".\nThen, add the appropriate properties when you define the capture or materialization in the Flow web app,\nor add the ",(0,o.jsx)(n.code,{children:"networkTunnel"})," stanza directly to the YAML, as shown below."]}),"\n",(0,o.jsx)(n.h4,{id:"sample",children:"Sample"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="source-postgres-ssh-tunnel.flow.yaml"',children:"captures:\n  acmeCo/postgres-capture-ssh:\n    endpoint:\n      connector:\n        image: ghcr.io/estuary/source-postgres:dev\n        config:\n          address: 127.0.0.1:5432\n          database: flow\n          user: flow_user\n          password: secret\n          networkTunnel:\n            sshForwarding:\n              # Location of the remote SSH server that supports tunneling.\n              # Formatted as ssh://user@hostname[:port].\n              sshEndpoint: ssh://sshUser@198.21.98.1:22\n              # Private key to connect to the SSH server, formatted as multiline plaintext.\n              # Use the YAML literal block style with the indentation indicator.\n              # See https://yaml-multiline.info/ for details.\n              privateKey: |2\n                -----BEGIN RSA PRIVATE KEY-----\n                MIICXAIBAAKBgQCJO7G6R+kv2MMS8Suw21sk2twHg8Vog0fjimEWJEwyAfFM/Toi\n                EJ6r5RTaSvN++/+MPWUll7sUdOOBZr6ErLKLHEt7uXxusAzOjMxFKZpEARMcjwHY\n                v/tN1A2OYU0qay1DOwknEE0i+/Bvf8lMS7VDjHmwRaBtRed/+iAQHf128QIDAQAB\n                AoGAGoOUBP+byAjDN8esv1DCPU6jsDf/Tf//RbEYrOR6bDb/3fYW4zn+zgtGih5t\n                CR268+dwwWCdXohu5DNrn8qV/Awk7hWp18mlcNyO0skT84zvippe+juQMK4hDQNi\n                ywp8mDvKQwpOuzw6wNEitcGDuACx5U/1JEGGmuIRGx2ST5kCQQDsstfWDcYqbdhr\n                5KemOPpu80OtBYzlgpN0iVP/6XW1e5FCRp2ofQKZYXVwu5txKIakjYRruUiiZTza\n                QeXRPbp3AkEAlGx6wMe1l9UtAAlkgCFYbuxM+eRD4Gg5qLYFpKNsoINXTnlfDry5\n                +1NkuyiQDjzOSPiLZ4Abpf+a+myjOuNL1wJBAOwkdM6aCVT1J9BkW5mrCLY+PgtV\n                GT80KTY/d6091fBMKhxL5SheJ4SsRYVFtguL2eA7S5xJSpyxkadRzR0Wj3sCQAvA\n                bxO2fE1SRqbbF4cBnOPjd9DNXwZ0miQejWHUwrQO0inXeExNaxhYKQCcnJNUAy1J\n                6JfAT/AbxeSQF3iBKK8CQAt5r/LLEM1/8ekGOvBh8MAQpWBW771QzHUN84SiUd/q\n                xR9mfItngPwYJ9d/pTO7u9ZUPHEoat8Ave4waB08DsI=\n                -----END RSA PRIVATE KEY-----\n        bindings: []\n"})}),"\n",(0,o.jsx)(n.h2,{id:"why-an-open-connector-architecture",children:"Why an open connector architecture?"}),"\n",(0,o.jsx)(n.p,{children:"Historically, data platforms have directly implemented integrations to external systems with which they interact.\nToday, there are simply so many systems and APIs that companies use,\nthat it\u2019s not feasible for a company to provide all possible integrations.\nUsers are forced to wait indefinitely while the platform works through their prioritized integration list."}),"\n",(0,o.jsx)(n.p,{children:"An open connector architecture removes Estuary \u2014 or any company \u2014 as a bottleneck in the development of integrations.\nEstuary contributes open-source connectors to the ecosystem, and in turn is able to leverage connectors implemented by others.\nUsers are empowered to write their own connectors for esoteric systems not already covered by the ecosystem."}),"\n",(0,o.jsx)(n.p,{children:"Furthermore, implementing a Docker-based community specification brings other important qualities to Estuary connectors:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Cross-platform interoperability between Flow, Airbyte, and any other platform that supports the protocol"}),"\n",(0,o.jsx)(n.li,{children:"The abilities to write connectors in any language and run them on any machine"}),"\n",(0,o.jsx)(n.li,{children:"Built-in solutions for version management (through image tags) and distribution"}),"\n",(0,o.jsx)(n.li,{children:"The ability to integrate connectors from different sources at will, without the centralized control of a single company, thanks to container image registries"}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["In order to be reflected in the Flow web app and used on the managed Flow platform,\nconnectors must be reviewed and added by the Estuary team. Have a connector you'd like to add?\n",(0,o.jsx)(n.a,{href:"mailto:info@estuary.dev",children:"Contact us"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"available-connectors",children:"Available connectors"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/reference/Connectors/",children:"Learn about available connectors in the reference section"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var o=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var o=t(96540),s=t(34164),i=t(23104),r=t(56347),a=t(205),c=t(57485),l=t(31682),d=t(89466);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:s}}=e;return{value:n,label:t,attributes:o,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[r,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[l,u]=m({queryString:t,groupId:s}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),y=(()=>{const e=l??g;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{y&&c(y)}),[y]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(74848);function b(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=a[t].value;s!==o&&(l(n),r(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=g(e);return(0,w.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,w.jsx)(b,{...e,...n}),(0,w.jsx)(x,{...e,...n})]})}function v(e){const n=(0,f.A)();return(0,w.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);