create table notification_subscriptions (
  like internal._model including all,

  catalog_prefix    catalog_prefix                 not null,
  user_id           uuid references auth.users(id)
);
alter table notification_subscriptions enable row level security;

create policy "Users access subscriptions for the prefixes they admin"
  on notification_subscriptions as permissive
  using (exists(
    select 1 from auth_roles('admin') r where catalog_prefix ^@ r.role_prefix
  ));

grant select, insert, update, delete on notification_subscriptions to authenticated;

create table internal.notification_templates (
  classification          text,
  title                   text,
  message                 text,
  confirmation_title      text,
  confirmation_message    text,
  primary key (classification)
);

insert into internal.notification_templates (classification, title, message, confirmation_title, confirmation_message)
  values
    (
      'data-not-processed-in-interval',
      'Estuary Flow: Alert for {spec_type} {catalog_name}',
      '<p>You are receiving this alert because your task, {spec_type} {catalog_name} hasn''t seen new data in {evaluation_interval}.  You can locate your task here to make changes or update its alerting settings.</p>',
      'Estuary Flow: Alert for {spec_type} {catalog_name}',
      '<p>You are receiving this alert because your task, {spec_type} {catalog_name} has resumed processing data.  You can locate your task here to make changes or update its alerting settings.</p>'
    );

-- TODO: Consider renaming the `acknowledged` column. Potential name alternatives include, but are not limited to, the following: alerting, firing, active.
create table data_processing_notifications (
  live_spec_id           flowid references live_specs(id) not null,
  acknowledged           boolean                          not null default false,
  evaluation_interval    interval,
  primary key (live_spec_id)
);
alter table data_processing_notifications enable row level security;

-- TODO: Tighten policy to allow access to admin-authorized tasks only.
create policy "Users access notifications for the read-authorized tasks"
  on data_processing_notifications as permissive
  using (live_spec_id in (select id from live_specs));

grant insert (live_spec_id, acknowledged, evaluation_interval) on data_processing_notifications to authenticated;
grant update (acknowledged, evaluation_interval) on data_processing_notifications to authenticated;
grant select, delete on data_processing_notifications to authenticated;

create view notification_subscriptions_ext as
select
  notification_subscriptions.*,
  auth.users.email as verified_email
from notification_subscriptions
  left join auth.users on notification_subscriptions.user_id = auth.users.id
order by notification_subscriptions.catalog_prefix asc;
grant select on notification_subscriptions_ext to authenticated;

create view data_processing_notifications_ext as
select
  data_processing_notifications.acknowledged,
  data_processing_notifications.evaluation_interval,
  internal.notification_templates.title as notification_title,
  internal.notification_templates.message as notification_message,
  internal.notification_templates.confirmation_title,
  internal.notification_templates.confirmation_message,
  internal.notification_templates.classification,
  notification_subscriptions_ext.verified_email,
  live_specs.catalog_name,
  live_specs.spec_type,
  coalesce(sum(catalog_stats_hourly.bytes_written_by_me + catalog_stats_hourly.bytes_written_to_me + catalog_stats_hourly.bytes_read_by_me), 0)::bigint as bytes_processed
from data_processing_notifications
  left join live_specs on data_processing_notifications.live_spec_id = live_specs.id and live_specs.spec is not null and (live_specs.spec->'shards'->>'disable')::boolean is not true
  left join catalog_stats_hourly on live_specs.catalog_name = catalog_stats_hourly.catalog_name
  left join notification_subscriptions_ext on live_specs.catalog_name ^@ notification_subscriptions_ext.catalog_prefix
  left join internal.notification_templates on internal.notification_templates.classification = 'data-not-processed-in-interval'
where (
  case
    when data_processing_notifications.evaluation_interval is not null then
      live_specs.created_at <= date_trunc('hour', now() - data_processing_notifications.evaluation_interval)
      and catalog_stats_hourly.ts >= date_trunc('hour', now() - data_processing_notifications.evaluation_interval)
  end
)
group by
  data_processing_notifications.acknowledged,
  data_processing_notifications.evaluation_interval,
  internal.notification_templates.title,
  internal.notification_templates.message,
  internal.notification_templates.confirmation_title,
  internal.notification_templates.confirmation_message,
  internal.notification_templates.classification,
  notification_subscriptions_ext.verified_email,
  live_specs.catalog_name,
  live_specs.spec_type;
grant select on data_processing_notifications_ext to authenticated;

create extension pg_cron with schema extensions;
select
  cron.schedule (
    'evaluate-data-processing-notifications', -- name of the cron job
    '*/5 * * * *', -- every five minutes, check to see if a notification needs to be sent
    $$
    select
      net.http_post(
        url:='http://host.docker.internal:5431/functions/v1/resend',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"}'::jsonb,
        body:=concat('{"time": "', now(), '"}')::jsonb
      ) as request_id;
    $$
  );