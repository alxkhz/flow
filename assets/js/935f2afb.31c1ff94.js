"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Overview","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Who should use Flow?","href":"/overview/who-should-use-flow","docId":"overview/who-should-use-flow"},{"type":"link","label":"Comparisons","href":"/overview/comparisons","docId":"overview/comparisons"}],"href":"/"},{"type":"category","label":"Getting started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setting up a development environment","href":"/getting-started/installation","docId":"getting-started/installation"},{"type":"category","label":"Flow tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Your first data flow","href":"/getting-started/flow-tutorials/hello-flow","docId":"getting-started/flow-tutorials/hello-flow"}],"href":"/getting-started/flow-tutorials/"}]},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Captures","href":"/concepts/captures","docId":"concepts/captures"},{"type":"link","label":"Collections","href":"/concepts/collections","docId":"concepts/collections"},{"type":"link","label":"Connectors","href":"/concepts/connectors","docId":"concepts/connectors"},{"type":"link","label":"Derivations","href":"/concepts/derivations","docId":"concepts/derivations"},{"type":"link","label":"flowctl","href":"/concepts/flowctl","docId":"concepts/flowctl"},{"type":"link","label":"Imports","href":"/concepts/import","docId":"concepts/import"},{"type":"link","label":"Materializations","href":"/concepts/materialization","docId":"concepts/materialization"},{"type":"link","label":"Schemas","href":"/concepts/schemas","docId":"concepts/schemas"},{"type":"link","label":"Storage mappings","href":"/concepts/storage-mappings","docId":"concepts/storage-mappings"},{"type":"link","label":"Tests","href":"/concepts/tests","docId":"concepts/tests"},{"type":"category","label":"Advanced concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Journals","href":"/concepts/advanced/journals","docId":"concepts/advanced/journals"},{"type":"link","label":"Logs and statistics","href":"/concepts/advanced/logs-stats","docId":"concepts/advanced/logs-stats"},{"type":"link","label":"Projections","href":"/concepts/advanced/projections","docId":"concepts/advanced/projections"},{"type":"link","label":"Task shards","href":"/concepts/advanced/shards","docId":"concepts/advanced/shards"}]}],"href":"/concepts/"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create a simple data flow","href":"/guides/create-dataflow","docId":"guides/create-dataflow"},{"type":"link","label":"Configure connections with SSH tunneling","href":"/guides/connect-network","docId":"guides/connect-network"}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Organizing a Flow catalog","href":"/reference/organizing-catalogs","docId":"reference/organizing-catalogs"},{"type":"category","label":"Connectors","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Capture connectors","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Amazon Kinesis","href":"/reference/Connectors/capture-connectors/amazon-kinesis","docId":"reference/Connectors/capture-connectors/amazon-kinesis"},{"type":"link","label":"Amazon S3","href":"/reference/Connectors/capture-connectors/amazon-s3","docId":"reference/Connectors/capture-connectors/amazon-s3"},{"type":"link","label":"Apache Kafka","href":"/reference/Connectors/capture-connectors/apache-kafka","docId":"reference/Connectors/capture-connectors/apache-kafka"},{"type":"link","label":"Google Cloud Storage","href":"/reference/Connectors/capture-connectors/gcs","docId":"reference/Connectors/capture-connectors/gcs"},{"type":"link","label":"MySQL","href":"/reference/Connectors/capture-connectors/MySQL","docId":"reference/Connectors/capture-connectors/MySQL"},{"type":"link","label":"PostgreSQL","href":"/reference/Connectors/capture-connectors/PostgreSQL","docId":"reference/Connectors/capture-connectors/PostgreSQL"}],"href":"/reference/Connectors/capture-connectors/"},{"type":"category","label":"Materialization connectors","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Apache Parquet in S3","href":"/reference/Connectors/materialization-connectors/Parquet","docId":"reference/Connectors/materialization-connectors/Parquet"},{"type":"link","label":"Elasticsearch","href":"/reference/Connectors/materialization-connectors/Elasticsearch","docId":"reference/Connectors/materialization-connectors/Elasticsearch"},{"type":"link","label":"Firebolt","href":"/reference/Connectors/materialization-connectors/Firebolt","docId":"reference/Connectors/materialization-connectors/Firebolt"},{"type":"link","label":"Google BigQuery","href":"/reference/Connectors/materialization-connectors/BigQuery","docId":"reference/Connectors/materialization-connectors/BigQuery"},{"type":"link","label":"PostgreSQL","href":"/reference/Connectors/materialization-connectors/PostgreSQL","docId":"reference/Connectors/materialization-connectors/PostgreSQL"},{"type":"link","label":"Rockset","href":"/reference/Connectors/materialization-connectors/Rockset","docId":"reference/Connectors/materialization-connectors/Rockset"},{"type":"link","label":"Snowflake","href":"/reference/Connectors/materialization-connectors/Snowflake","docId":"reference/Connectors/materialization-connectors/Snowflake"}],"href":"/reference/Connectors/materialization-connectors/"}],"href":"/reference/Connectors/"},{"type":"category","label":"Reduction strategies","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"append","href":"/reference/reduction-strategies/append","docId":"reference/reduction-strategies/append"},{"type":"link","label":"firstWriteWins and lastWriteWins","href":"/reference/reduction-strategies/firstwritewins-and-lastwritewins","docId":"reference/reduction-strategies/firstwritewins-and-lastwritewins"},{"type":"link","label":"merge","href":"/reference/reduction-strategies/merge","docId":"reference/reduction-strategies/merge"},{"type":"link","label":"minimize and maximize","href":"/reference/reduction-strategies/minimize-and-maximize","docId":"reference/reduction-strategies/minimize-and-maximize"},{"type":"link","label":"set","href":"/reference/reduction-strategies/set","docId":"reference/reduction-strategies/set"},{"type":"link","label":"sum","href":"/reference/reduction-strategies/sum","docId":"reference/reduction-strategies/sum"},{"type":"link","label":"Composing with conditionals","href":"/reference/reduction-strategies/composing-with-conditionals","docId":"reference/reduction-strategies/composing-with-conditionals"}],"href":"/reference/reduction-strategies/"},{"type":"link","label":"Working with logs and statistics","href":"/reference/working-logs-stats","docId":"reference/working-logs-stats"}]}]},"docs":{"concepts/advanced/journals":{"id":"concepts/advanced/journals","title":"Journals","description":"Journals are an advanced concept of Flow.","sidebar":"tutorialSidebar"},"concepts/advanced/logs-stats":{"id":"concepts/advanced/logs-stats","title":"Logs and statistics","description":"Flow collects logs and statistics of catalog tasks to aid in debugging and refinement of your workflows.","sidebar":"tutorialSidebar"},"concepts/advanced/projections":{"id":"concepts/advanced/projections","title":"Projections","description":"Flow documents are arbitrary JSON, and may contain multiple levels of hierarchy and nesting.","sidebar":"tutorialSidebar"},"concepts/advanced/shards":{"id":"concepts/advanced/shards","title":"Task shards","description":"Task shards are an advanced concept of Flow.","sidebar":"tutorialSidebar"},"concepts/captures":{"id":"concepts/captures","title":"Captures","description":"A capture is a catalog task which connects to an external data source, or endpoint","sidebar":"tutorialSidebar"},"concepts/collections":{"id":"concepts/collections","title":"Collections","description":"Flow stores data in collections:","sidebar":"tutorialSidebar"},"concepts/connectors":{"id":"concepts/connectors","title":"Connectors","description":"Connectors are plugin components that bridge the gap between Flow\u2019s runtime and","sidebar":"tutorialSidebar"},"concepts/derivations":{"id":"concepts/derivations","title":"Derivations","description":"A derivation is a collection","sidebar":"tutorialSidebar"},"concepts/flowctl":{"id":"concepts/flowctl","title":"flowctl","description":"The flowctl command-line interface is used to test, develop, and deploy Flow catalogs.","sidebar":"tutorialSidebar"},"concepts/import":{"id":"concepts/import","title":"Imports","description":"Catalog spec files may include an import section.","sidebar":"tutorialSidebar"},"concepts/materialization":{"id":"concepts/materialization","title":"Materializations","description":"Materializations are the means by which Flow pushes collections into your destination endpoints:","sidebar":"tutorialSidebar"},"concepts/README":{"id":"concepts/README","title":"Concepts","description":"Flow helps you define data pipelines that connect your data systems, APIs, and storage, and optionally transform data along the way.","sidebar":"tutorialSidebar"},"concepts/schemas":{"id":"concepts/schemas","title":"Schemas","description":"Flow documents and collections always have an associated schema","sidebar":"tutorialSidebar"},"concepts/storage-mappings":{"id":"concepts/storage-mappings","title":"Storage mappings","description":"A storage mapping defines how Flow should persist the documents of collections into cloud storage locations,","sidebar":"tutorialSidebar"},"concepts/tests":{"id":"concepts/tests","title":"Tests","description":"As Flow catalogs grow in breadth and scope, and as requirements change or new contributors get involved,","sidebar":"tutorialSidebar"},"getting-started/flow-tutorials/hello-flow":{"id":"getting-started/flow-tutorials/hello-flow","title":"Your first data flow","description":"Create your first end-to-end data flow.","sidebar":"tutorialSidebar"},"getting-started/flow-tutorials/README":{"id":"getting-started/flow-tutorials/README","title":"Flow tutorials","description":"How to use the tutorials to get oriented with Flow","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"Setting up a development environment","description":"Get set up to run Flow for local development.","sidebar":"tutorialSidebar"},"guides/connect-network":{"id":"guides/connect-network","title":"Configure connections with SSH tunneling","description":"Depending on your enterprise network security, you may need to use SHH tunneling, or port forwarding, to allow Flow","sidebar":"tutorialSidebar"},"guides/create-dataflow":{"id":"guides/create-dataflow","title":"Create a simple data flow","description":"Whether you\'re learning to use Flow or testing a new pipeline, much of your work will take place in a local or virtual environment. This guide outlines the basic steps to create and deploy a data flow using Flow\'s current GitOps workflow.","sidebar":"tutorialSidebar"},"overview/comparisons":{"id":"overview/comparisons","title":"Comparisons","description":"High level explanations of Flow in terms of the systems you already know","sidebar":"tutorialSidebar"},"overview/README":{"id":"overview/README","title":"Flow documentation","description":"Get to know Estuary Flow and learn how to get started.","sidebar":"tutorialSidebar"},"overview/who-should-use-flow":{"id":"overview/who-should-use-flow","title":"Who should use Flow?","description":"Common pain points you might have, and how Flow addresses them.","sidebar":"tutorialSidebar"},"reference/Connectors/capture-connectors/amazon-kinesis":{"id":"reference/Connectors/capture-connectors/amazon-kinesis","title":"Amazon Kinesis","description":"This connector captures data from Amazon Kinesis streams.","sidebar":"tutorialSidebar"},"reference/Connectors/capture-connectors/amazon-s3":{"id":"reference/Connectors/capture-connectors/amazon-s3","title":"Amazon S3","description":"This connector captures data from an Amazon S3 bucket.","sidebar":"tutorialSidebar"},"reference/Connectors/capture-connectors/apache-kafka":{"id":"reference/Connectors/capture-connectors/apache-kafka","title":"Apache Kafka","description":"This connector captures streaming data from Apache Kafka topics.","sidebar":"tutorialSidebar"},"reference/Connectors/capture-connectors/gcs":{"id":"reference/Connectors/capture-connectors/gcs","title":"Google Cloud Storage","description":"This connector captures data from a Google Cloud Storage (GCS) bucket.","sidebar":"tutorialSidebar"},"reference/Connectors/capture-connectors/MySQL":{"id":"reference/Connectors/capture-connectors/MySQL","title":"MySQL","description":"This is a change data capture (CDC) connector that captures change events from a MySQL database via the Binary Log.","sidebar":"tutorialSidebar"},"reference/Connectors/capture-connectors/PostgreSQL":{"id":"reference/Connectors/capture-connectors/PostgreSQL","title":"PostgreSQL","description":"This connector uses change data capture (CDC) to continuously capture updates in a PostgreSQL database into one or more Flow collections.","sidebar":"tutorialSidebar"},"reference/Connectors/capture-connectors/README":{"id":"reference/Connectors/capture-connectors/README","title":"Capture connectors","description":"Estuary\'s available capture connectors are listed in this section. Each connector has a unique configuration you must follow in your catalog specification; these will be linked below the connector name.","sidebar":"tutorialSidebar"},"reference/Connectors/materialization-connectors/BigQuery":{"id":"reference/Connectors/materialization-connectors/BigQuery","title":"Google BigQuery","description":"This Flow connector materializes Flow collections into tables within a Google BigQuery dataset.","sidebar":"tutorialSidebar"},"reference/Connectors/materialization-connectors/Elasticsearch":{"id":"reference/Connectors/materialization-connectors/Elasticsearch","title":"Elasticsearch","description":"This connector materializes Flow collections into indices in an Elasticsearch cluster.","sidebar":"tutorialSidebar"},"reference/Connectors/materialization-connectors/Firebolt":{"id":"reference/Connectors/materialization-connectors/Firebolt","title":"Firebolt","description":"This Flow connector materializes delta updates of Flow collections into Firebolt FACT or DIMENSION tables.","sidebar":"tutorialSidebar"},"reference/Connectors/materialization-connectors/Parquet":{"id":"reference/Connectors/materialization-connectors/Parquet","title":"Apache Parquet in S3","description":"This connector materializes delta updates of Flow collections into an S3 bucket in the Apache Parquet format.","sidebar":"tutorialSidebar"},"reference/Connectors/materialization-connectors/PostgreSQL":{"id":"reference/Connectors/materialization-connectors/PostgreSQL","title":"PostgreSQL","description":"This connector materializes Flow collections into tables in a PostgreSQL database.","sidebar":"tutorialSidebar"},"reference/Connectors/materialization-connectors/README":{"id":"reference/Connectors/materialization-connectors/README","title":"Materialization connectors","description":"Estuary\'s available materialization connectors are listed in this section. Each connector has a unique configuration you must follow in your catalog specification; these will be linked below the connector name.","sidebar":"tutorialSidebar"},"reference/Connectors/materialization-connectors/Rockset":{"id":"reference/Connectors/materialization-connectors/Rockset","title":"Rockset","description":"This Flow connector materializes delta updates of your Flow collections into Rockset collections.","sidebar":"tutorialSidebar"},"reference/Connectors/materialization-connectors/Snowflake":{"id":"reference/Connectors/materialization-connectors/Snowflake","title":"Snowflake","description":"This connector materializes Flow collections into tables in a Snowflake database.","sidebar":"tutorialSidebar"},"reference/Connectors/README":{"id":"reference/Connectors/README","title":"Connectors","description":"A current list and configuration details for Estuary\'s connectors can be found on the following pages:","sidebar":"tutorialSidebar"},"reference/organizing-catalogs":{"id":"reference/organizing-catalogs","title":"Organizing a Flow catalog","description":"It\'s not necessary to store the entire catalog spec in one YAML file, and Flow provides the flexibility to reference other files, which can be managed independently. You may want to do so if:","sidebar":"tutorialSidebar"},"reference/reduction-strategies/append":{"id":"reference/reduction-strategies/append","title":"append","description":"Using the append reduction strategy","sidebar":"tutorialSidebar"},"reference/reduction-strategies/composing-with-conditionals":{"id":"reference/reduction-strategies/composing-with-conditionals","title":"Composing with conditionals","description":"Using conditionals statements to fine-tune reductions","sidebar":"tutorialSidebar"},"reference/reduction-strategies/firstwritewins-and-lastwritewins":{"id":"reference/reduction-strategies/firstwritewins-and-lastwritewins","title":"firstWriteWins and lastWriteWins","description":"Using the firstWriteWins and lastWriteWins reduction strategies","sidebar":"tutorialSidebar"},"reference/reduction-strategies/merge":{"id":"reference/reduction-strategies/merge","title":"merge","description":"Using the merge reduction strategy","sidebar":"tutorialSidebar"},"reference/reduction-strategies/minimize-and-maximize":{"id":"reference/reduction-strategies/minimize-and-maximize","title":"minimize and maximize","description":"Using the minimize and maximize reduction strategies","sidebar":"tutorialSidebar"},"reference/reduction-strategies/README":{"id":"reference/reduction-strategies/README","title":"Reduction strategies","description":"Flow\'s default reduction behaviors and available strategies to customize them","sidebar":"tutorialSidebar"},"reference/reduction-strategies/set":{"id":"reference/reduction-strategies/set","title":"set","description":"Using the set reduction strategy","sidebar":"tutorialSidebar"},"reference/reduction-strategies/sum":{"id":"reference/reduction-strategies/sum","title":"sum","description":"Using the sum reduction strategy","sidebar":"tutorialSidebar"},"reference/working-logs-stats":{"id":"reference/working-logs-stats","title":"Working with logs and statistics","description":"Your logs and stats collections","sidebar":"tutorialSidebar"}}}')}}]);