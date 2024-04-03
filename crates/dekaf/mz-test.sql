/*
Start local materialize as:

  docker run --network host --rm -it -v mzdata:/mzdata -p 6875:6875 -p 6876:6876 materialize/materialized

Apply this test schema as:

  psql postgres://materialize@localhost:6875/materialize --file mz-test.sql

*/


DROP SECRET IF EXISTS kafka_password CASCADE;

CREATE SECRET kafka_password AS '...';

CREATE CONNECTION kafka_connection TO KAFKA (
    BROKER 'localhost',
    SECURITY PROTOCOL = 'SASL_PLAINTEXT',
    SASL MECHANISMS = 'PLAIN',
    SASL USERNAME = 'dev-user',
    SASL PASSWORD = SECRET kafka_password
);

CREATE SOURCE my_source
  FROM KAFKA CONNECTION kafka_connection (TOPIC 'demo/wikipedia/recentchange-sampled')
  FORMAT JSON;

CREATE VIEW my_view AS
  SELECT distinct data->>'user'::text FROM my_source;
