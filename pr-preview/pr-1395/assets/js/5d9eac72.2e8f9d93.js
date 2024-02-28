"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[925],{43283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(74848),o=n(28453),r=n(61114);const a={},s="Materialization Protocol",c={id:"reference/Connectors/materialization-protocol",title:"Materialization Protocol",description:"Materializations are processed as cooperative transactions between the Flow",source:"@site/docs/reference/Connectors/materialization-protocol.md",sourceDirName:"reference/Connectors",slug:"/reference/Connectors/materialization-protocol",permalink:"/pr-preview/pr-1395/reference/Connectors/materialization-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/estuary/flow/edit/master/site/docs/reference/Connectors/materialization-protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TimescaleDB",permalink:"/pr-preview/pr-1395/reference/Connectors/materialization-connectors/timescaledb"},next:{title:"Authorizing users and authenticating with Flow",permalink:"/pr-preview/pr-1395/reference/authentication"}},d={},l=[{value:"Sequence Diagram",id:"sequence-diagram",level:2},{value:"Exactly-Once Semantics",id:"exactly-once-semantics",level:2},{value:"Common Implementation Patterns",id:"common-implementation-patterns",level:2},{value:"Remote Store is Authoritative",id:"remote-store-is-authoritative",level:3},{value:"Recovery Log with Non-Transactional Store",id:"recovery-log-with-non-transactional-store",level:3},{value:"Recovery Log with Idempotent Apply",id:"recovery-log-with-idempotent-apply",level:3},{value:"Push-only Endpoints &amp; Delta Updates",id:"push-only-endpoints--delta-updates",level:3},{value:"Protocol Phases",id:"protocol-phases",level:2},{value:"Acknowledge",id:"acknowledge",level:3},{value:"Load",id:"load",level:3},{value:"Store",id:"store",level:3}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"materialization-protocol",children:"Materialization Protocol"}),"\n",(0,i.jsx)(t.p,{children:"Materializations are processed as cooperative transactions between the Flow\nRuntime and a connector Driver, over a long-lived RPC through which the Runtime\nand Driver exchange messages."}),"\n",(0,i.jsx)(t.p,{children:"This RPC workflow maintains a materialized view of a Flow collection in an\nexternal system. It has distinct acknowledge, load, and store phases.\nThe Flow runtime and driver cooperatively maintain a fully-reduced view of each\ndocument by loading current states from the store, reducing in a number of\nupdates, and then storing updated documents and checkpoints."}),"\n",(0,i.jsx)(t.h2,{id:"sequence-diagram",children:"Sequence Diagram"}),"\n",(0,i.jsxs)(t.p,{children:["As a convention and to reduce ambiguity, message types from the Runtime are\nnamed in an imperative fashion (",(0,i.jsx)(t.code,{children:"Load"}),"), while responses from the driver always\nhave a past-tense name (",(0,i.jsx)(t.code,{children:"Loaded"}),"):"]}),"\n",(0,i.jsx)(r.A,{chart:"\n  sequenceDiagram\n    Runtime->>Driver: Open{MaterializationSpec, driverCP}\n    Note right of Driver: Connect to endpoint.<br/>Optionally fetch last-committed<br/>runtime checkpoint.\n    Driver->>Runtime: Opened{runtimeCP}\n    Note over Runtime, Driver: One-time initialization \u261d\ufe0f.<br/> \ud83d\udc47 Repeats for each transaction.\n    Note left of Runtime: Prior txn commits<br/>to recovery log.\n    Note right of Driver: Prior txn commits to DB<br/>(where applicable).\n    Runtime->>Driver: Acknowledge\n    Note right of Runtime: Acknowledged MAY be sent<br/>before Acknowledge.\n    Note right of Driver: MAY perform an idempotent<br/>apply of last txn.\n    Note left of Runtime: Runtime does NOT await<br/>Acknowledged before<br/>proceeding to send Load.\n    Driver->>Runtime: Acknowledged\n    Note left of Runtime: Runtime may now finalize<br/>a pipelined transaction.\n    Note over Runtime, Driver: End of Acknowledge phase.\n    Runtime->>Driver: Load<A>\n    Note left of Runtime: Load keys may<br/> not exist (yet).\n    Runtime->>Driver: Load<B>\n    Note right of Driver: MAY evaluate Load immediately,<br/>or stage for deferred retrieval.\n    Driver->>Runtime: Loaded<A>\n    Runtime->>Driver: Load<C>\n    Runtime->>Driver: Flush\n    Driver->>Runtime: Loaded<C>\n    Note right of Driver: Omits Loaded for keys<br/>that don't exist.\n    Driver->>Runtime: Flushed\n    Note left of Runtime: All existing keys<br/>have been retrieved.\n    Note over Runtime, Driver: End of Load phase.\n    Runtime->>Driver: Store<X>\n    Runtime->>Driver: Store<Y>\n    Runtime->>Driver: Store<Z>\n    Runtime->>Driver: StartCommit{runtimeCP}\n    Note right of Driver: * Completes all Store processing.<br/>* MAY include runtimeCP in DB txn.\n    Note right of Driver: Commit to DB<br/>now underway.\n    Driver->>Runtime: StartedCommit{driverCP}\n    Note left of Runtime: Begins commit to<br/> recovery log.\n    Note over Runtime, Driver: End of Store phase. Loops around<br/>to Acknowledge <=> Acknowledged.\n"}),"\n",(0,i.jsx)(t.h2,{id:"exactly-once-semantics",children:"Exactly-Once Semantics"}),"\n",(0,i.jsx)(t.p,{children:"The central tenant of transactional materializations is this:\nthere is a consumption checkpoint, and there is a state of the view.\nAs the materialization progresses, both the checkpoint and the view state will change.\nUpdates to the checkpoint and to the view state MUST always commit together,\nin the exact same transaction."}),"\n",(0,i.jsx)(t.p,{children:"Flow materialization tasks have a backing transactional recovery log,\nwhich is capable of durable commits that update both the checkpoint and also a\n(reasonably small) driver-defined state. More on driver states later."}),"\n",(0,i.jsx)(t.p,{children:"Many interesting endpoint systems are also fully transactional in nature."}),"\n",(0,i.jsx)(t.p,{children:"When implementing a materialization driver, the first question an implementor\nmust answer is: whose commit is authoritative?\nFlow's recovery log, or the materialized system?\nThis protocol supports either."}),"\n",(0,i.jsx)(t.h2,{id:"common-implementation-patterns",children:"Common Implementation Patterns"}),"\n",(0,i.jsx)(t.p,{children:"There are a few common implementation patterns for materializations. The choice\nof pattern depends on the transaction capabilities of the remote endpoint."}),"\n",(0,i.jsx)(t.h3,{id:"remote-store-is-authoritative",children:"Remote Store is Authoritative"}),"\n",(0,i.jsx)(t.p,{children:"In this pattern, the remote store (for example, a database) persists view states\nand the Flow consumption checkpoints which those views reflect. There are many\nsuch checkpoints: one per task split, and in this pattern the Flow recovery log\nis effectively ignored."}),"\n",(0,i.jsxs)(t.p,{children:["Typically this workflow runs in the context of a synchronous ",(0,i.jsx)(t.code,{children:"BEGIN/COMMIT"}),"\ntransaction, which updates table states and a Flow checkpoint together. The\ntransaction need be scoped only to the store phase of this workflow, as the\nmaterialization protocol requires only read-committed isolation semantics."]}),"\n",(0,i.jsx)(t.p,{children:'Flow is a distributed system, and an important consideration is the effect of a\n"zombie" assignment of a materialization task, which can race a newly-promoted\nassignment of that same task.'}),"\n",(0,i.jsx)(t.p,{children:'Fencing is a technique which uses the transactional capabilities of a store to\n"fence off" an older zombie assignment, such that it\'s prevented from committing\nfurther transactions. This avoids a failure mode where:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"New assignment N recovers a checkpoint at Ti."}),"\n",(0,i.jsx)(t.li,{children:"Zombie assignment Z commits another transaction at Ti+1."}),"\n",(0,i.jsx)(t.li,{children:"N beings processing from Ti, inadvertently duplicating the effects of Ti+1."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"When a remote store is authoritative, it must implement fencing behavior. As a\nsketch, the store can maintain a nonce value alongside the checkpoint of each\ntask split. The nonce is updated on each open of this RPC, and each commit\ntransaction then verifies that the nonce has not been changed."}),"\n",(0,i.jsx)(t.p,{children:"In the future, if another RPC opens and updates the nonce, it fences off this\ninstance of the task split and prevents it from committing further transactions."}),"\n",(0,i.jsx)(t.h3,{id:"recovery-log-with-non-transactional-store",children:"Recovery Log with Non-Transactional Store"}),"\n",(0,i.jsx)(t.p,{children:"In this pattern, the runtime's recovery log persists the Flow checkpoint and\nhandles fencing semantics. During the Load and Store phases, the driver directly\nmanipulates a non-transactional store or API, such as a key/value store."}),"\n",(0,i.jsx)(t.p,{children:"Note that this pattern is at-least-once. A transaction may fail part-way through\nand be restarted, causing its effects to be partially or fully replayed."}),"\n",(0,i.jsxs)(t.p,{children:["Care must be taken if the collection's schema has reduction annotations such as\n",(0,i.jsx)(t.code,{children:"sum"}),", as those reductions may be applied more than once due to a partially\ncompleted, but ultimately failed transaction."]}),"\n",(0,i.jsx)(t.p,{children:"If the collection's schema is last-write-wins, this mode still provides\neffectively-once behavior. Collections which aren't last-write-wins can be\nturned into last-write-wins through the use of derivations."}),"\n",(0,i.jsx)(t.h3,{id:"recovery-log-with-idempotent-apply",children:"Recovery Log with Idempotent Apply"}),"\n",(0,i.jsx)(t.p,{children:"In this pattern the recovery log is authoritative, but the driver uses external\nstable storage to stage the effects of a transaction -- rather than directly\napplying them to the store -- such that those effects can be idempotently\napplied after the transaction commits."}),"\n",(0,i.jsx)(t.p,{children:"This allows stores which feature a weaker transaction guarantee to still be\nused in an exactly-once way, so long as they support an idempotent apply\noperation."}),"\n",(0,i.jsx)(t.p,{children:'Driver checkpoints can facilitate this pattern. For example, a driver might\ngenerate a unique filename in S3 and reference it in its prepared checkpoint,\nwhich is committed to the recovery log. During the "store" phase, it writes to\nthis S3 file. After the transaction commits, it tells the store of the new file\nto incorporate. The store must handle idempotency, by applying the effects of\nthe unique file just once, even if told of the file multiple times.'}),"\n",(0,i.jsx)(t.p,{children:"A related extension of this pattern is for the driver to embed a Flow checkpoint\ninto its driver checkpoint. Doing so allows the driver to express an intention\nto restart from an older alternative checkpoint, as compared to the most recent\ncommitted checkpoint of the recovery log."}),"\n",(0,i.jsx)(t.p,{children:"As mentioned above, it's crucial that store states and checkpoints commit\ntogether. While seemingly bending that rule, this pattern is consistent with it\nbecause, on commit, the semantic contents of the store include BOTH its base\nstate, as well as the staged idempotent update. The store just may not know it\nyet, but eventually it must because of the retried idempotent apply."}),"\n",(0,i.jsxs)(t.p,{children:["Note the driver must therefore ensure that staged updates are fully applied\nbefore returning ",(0,i.jsx)(t.code,{children:"Loaded"})," responses, in order to provide the correct\nread-committed semantics required by the Flow runtime."]}),"\n",(0,i.jsx)(t.h3,{id:"push-only-endpoints--delta-updates",children:"Push-only Endpoints & Delta Updates"}),"\n",(0,i.jsx)(t.p,{children:'Some systems, such as APIs, Webhooks, and Pub/Sub, are push-only in nature. Flow\nmaterializations can run in a "delta updates" mode, where loads are always\nskipped and Flow does not attempt to store fully-reduced documents. Instead,\nduring the store phase, the runtime sends delta updates which reflect the\ncombined roll-up of collection documents processed only within this transaction.'}),"\n",(0,i.jsxs)(t.p,{children:["To illustrate the meaning of a delta update, consider documents which are simple\ncounters, having a collection schema that uses a ",(0,i.jsx)(t.code,{children:"sum"})," reduction strategy."]}),"\n",(0,i.jsxs)(t.p,{children:["Without delta updates, Flow would reduce documents -1, 3, and 2 by ",(0,i.jsx)(t.code,{children:"sum"})," to\narrive at document 4, which is stored. The next transaction, document 4 is\nloaded and reduced with 6, -7, and -1 to arrive at a new stored document 2. This\ndocument, 2, represents the full reduction of the collection documents\nmaterialized thus far."]}),"\n",(0,i.jsx)(t.p,{children:"Compare to delta updates mode: collection documents -1, 3, and 2 are combined to\nstore a delta-update document of 4. The next transaction starts anew, and 6, -7,\nand -1 combine to arrive at a delta-update document of -2. These delta updates\nare a windowed combine over documents seen in the current transaction only, and\nunlike before are not a full reduction of the document. If delta updates were\nwritten to pub/sub, note that a subscriber could further reduce over each delta\nupdate to recover the fully reduced document of 2."}),"\n",(0,i.jsxs)(t.p,{children:["Note that many use cases require only ",(0,i.jsx)(t.code,{children:"lastWriteWins"}),' reduction behavior, and\nfor these use cases delta updates does the "right thing" by trivially re-writing\neach document with its most recent version. This matches the behavior of Kafka\nConnect, for example.']}),"\n",(0,i.jsx)(t.h2,{id:"protocol-phases",children:"Protocol Phases"}),"\n",(0,i.jsx)(t.h3,{id:"acknowledge",children:"Acknowledge"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Acknowledge"})," and ",(0,i.jsx)(t.code,{children:"Acknowledged"})," are always the first messages sent every\ntransaction, including the very first transaction of an RPC. The Runtime sends\n",(0,i.jsx)(t.code,{children:"Acknowledge"})," to indicate that the last transaction has committed to the\nrecovery log. The Driver sends ",(0,i.jsx)(t.code,{children:"Acknowledged"})," to indicate that its endpoint\ntransaction has committed."]}),"\n",(0,i.jsxs)(t.p,{children:["Acknowledge and Acknowledged ",(0,i.jsx)(t.em,{children:"are not ordered"}),". Acknowledged may be sent before\nAcknowledge and vice versa."]}),"\n",(0,i.jsxs)(t.p,{children:["The Runtime ",(0,i.jsx)(t.em,{children:"does not"})," wait for ",(0,i.jsx)(t.code,{children:"Acknowledged"})," before sending ",(0,i.jsx)(t.code,{children:"Load"})," messages.\nIn most cases the Driver should simply not read these ",(0,i.jsx)(t.code,{children:"Load"})," messages until it\nhas completed its own commit and sent its own ",(0,i.jsx)(t.code,{children:"Acknowledged"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["A Driver MAY instead process its commit and acknowledgment in the background\nwhile actively reading ",(0,i.jsx)(t.code,{children:"Load"})," messages. It MUST NOT evaluate ",(0,i.jsx)(t.code,{children:"Load"}),"s yet, as\nthis could otherwise be a violation of read-committed semantics, but it MAY\nstage them for deferred evaluation. This is ",(0,i.jsx)(t.strong,{children:"recommended"})," for Drivers that\nhave very long commit and/or acknowledgement operations. While a background\ncommit progresses the Flow runtime will optimistically pipeline the next\ntransaction, processing documents and preparing for when the Driver sends\n",(0,i.jsx)(t.code,{children:"Acknowledged"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:['Drivers following the "Recovery Log with Idempotent Apply" pattern must take\ncare to properly handle the very first acknowledgement phase of an RPC. At\nstartup, a driver cannot know if the last commit has been acknowledged. For\nexample, a previous RPC invocation may have failed immediately after commit but\nprior to acknowledgement. The Driver must thus idempotent-ly apply or re-apply\nchanges staged by a prior Driver invocation, and reply with ',(0,i.jsx)(t.code,{children:"Acknowledged"})," only\nonce done."]}),"\n",(0,i.jsx)(t.p,{children:"Drivers with transactional semantics SHOULD send Acknowledged immediately after\na previous, started commit completes."}),"\n",(0,i.jsx)(t.p,{children:"Drivers with at-least-once semantics SHOULD send Acknowledged immediately after\nsending StartedCommit."}),"\n",(0,i.jsx)(t.h3,{id:"load",children:"Load"}),"\n",(0,i.jsxs)(t.p,{children:["Zero or more ",(0,i.jsx)(t.code,{children:"Load"})," messages are sent by the Runtime with documents to fetch. A\ngiven document key will appear at most once in a transaction, and will not be\nrepeated across ",(0,i.jsx)(t.code,{children:"Load"})," messages."]}),"\n",(0,i.jsxs)(t.p,{children:["Drivers may immediately evaluate each ",(0,i.jsx)(t.code,{children:"Load"})," and respond, or may queue many keys\nto load and defer their evaluation. The Runtime does not await any individual\n",(0,i.jsx)(t.code,{children:"Load"})," requests."]}),"\n",(0,i.jsxs)(t.p,{children:["After the previous transaction has fully completed, and the driver has sent\n",(0,i.jsx)(t.code,{children:"Acknowledged"})," to the Runtime, the current transaction may begin to close."]}),"\n",(0,i.jsxs)(t.p,{children:["The Runtime indicates this by sending a ",(0,i.jsx)(t.code,{children:"Flush"})," message, which is NEVER sent\nbefore ",(0,i.jsx)(t.code,{children:"Acknowledged"})," is received. ",(0,i.jsx)(t.code,{children:"Acknowledged"})," is thus an important signal as\nto when the Runtime may begin to finalize an optimistic, pipelined transaction."]}),"\n",(0,i.jsxs)(t.p,{children:["On reading ",(0,i.jsx)(t.code,{children:"Flush"}),", Drivers must process all remaining ",(0,i.jsx)(t.code,{children:"Load"})," messages,\nincluding any deferred evaluations, and send all ",(0,i.jsx)(t.code,{children:"Loaded"})," responses prior to\nsending its own ",(0,i.jsx)(t.code,{children:"Flushed"})," response."]}),"\n",(0,i.jsxs)(t.p,{children:["This signals to the Runtime that all documents which can be loaded ",(0,i.jsx)(t.em,{children:"have"})," been\nloaded, and the transaction proceeds to the Store phase."]}),"\n",(0,i.jsxs)(t.p,{children:["Materialization bindings which are processing in delta-updates mode will never\nreceive a ",(0,i.jsx)(t.code,{children:"Load"})," message, but will receive a ",(0,i.jsx)(t.code,{children:"Flush"})," and must still respond with\n",(0,i.jsx)(t.code,{children:"Flushed"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"store",children:"Store"}),"\n",(0,i.jsxs)(t.p,{children:["Zero or more ",(0,i.jsx)(t.code,{children:"Store"})," messages are sent by the Runtime to the Driver, indicating\nkeys, documents, and extracted fields to store. No response is required of the\nDriver for these messages."]}),"\n",(0,i.jsxs)(t.p,{children:["Once all documents have been stored, the Runtime sends a ",(0,i.jsx)(t.code,{children:"StartCommit"})," message\nwhich carries its opaque runtime checkpoint."]}),"\n",(0,i.jsx)(t.p,{children:'Drivers implementing the "Remote Store is Authoritative" pattern must include\nthe runtime checkpoint in its current transaction, for retrieval in a future\nOpen of a new transactions RPC. Other driver patterns MAY ignore this\ncheckpoint.'}),"\n",(0,i.jsxs)(t.p,{children:["On reading ",(0,i.jsx)(t.code,{children:"StartCommit"})," the driver ensures that all ",(0,i.jsx)(t.code,{children:"Store"})," messages have been\nprocessed. It begins to commit its own transaction (where applicable), and then\nresponds with ",(0,i.jsx)(t.code,{children:"StartedCommit"})," which contain an update to the driver's\ncheckpoint."]}),"\n",(0,i.jsxs)(t.p,{children:["On the Runtime's receipt of ",(0,i.jsx)(t.code,{children:"StartedCommit"}),", the Runtime now knows that all\n",(0,i.jsx)(t.code,{children:"Store"})," messages have been fully processed. It preserves the updated Driver\ncheckpoint in its recovery log and begins to commit."]}),"\n",(0,i.jsx)(t.p,{children:"From here, the protocol loops back around to the Acknowledge phase."})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},61114:(e,t,n)=>{n.d(t,{A:()=>a});var i=n(96540),o=n(29880),r=n(74848);o.K.initialize({startOnLoad:!0});const a=e=>{let{chart:t}=e;return(0,i.useEffect)((()=>{o.K.contentLoaded()}),[]),(0,r.jsx)("div",{className:"mermaid",children:t})}}}]);