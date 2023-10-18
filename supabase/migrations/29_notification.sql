create table notification_preferences (
  like internal._model including all,

  prefix           text                           not null,
  subscribed_by    uuid references auth.users(id) not null,
  user_id          uuid references auth.users(id)
);
alter table notification_preferences enable row level security;

create policy "Users select preferences for the prefixes they admin"
  on notification_preferences as permissive for select
  using (exists(
    select 1 from auth_roles('admin') r where prefix ^@ r.role_prefix
  ));
create policy "Users insert preferences for the prefixes they admin"
  on notification_preferences as permissive for insert
  with check (exists(
    select 1 from auth_roles('admin') r where prefix ^@ r.role_prefix
  ));
create policy "Users update preferences for the prefixes they admin"
  on notification_preferences as permissive for update
  using (exists(
    select 1 from auth_roles('admin') r where prefix ^@ r.role_prefix
  ));
create policy "Users delete preferences for the prefixes they admin"
  on notification_preferences as permissive for delete
  using (exists(
    select 1 from auth_roles('admin') r where prefix ^@ r.role_prefix
  ));

grant select, insert, update, delete on notification_preferences to authenticated;

create table notification_messages (
  like internal._model including all,

  title      text,
  message    text
);
grant select on notification_messages to authenticated;

insert into notification_messages (detail, title, message)
  values
    (
      'data-not-processed-in-interval',
      'Estuary Flow: Alert for {spec_type} {catalog_name}',
      '<p>You are receiving this alert because your task, {spec_type} {catalog_name} hasn''t seen new data in {notification_interval}.  You can locate your task here to make changes or update its alerting settings.</p>'
    );

-- TODO: Rename this table to either notification_subscriptions or task_notification_subscriptions.
create table notifications (
  like internal._model including all,

  preference_id          flowid    not null,
  message_id             flowid    not null,
  acknowledged           boolean   not null default false,
  evaluation_interval    interval,
  live_spec_id           flowid
);
grant insert (detail, live_spec_id, preference_id, message_id, evaluation_interval) on notifications to authenticated;
grant update (evaluation_interval, acknowledged) on notifications to authenticated;
grant select, delete on notifications to authenticated;

create view notification_preferences_ext as
select
  notification_preferences.*,
  auth.users.email as verified_email
from notification_preferences
  left join auth.users on notification_preferences.user_id = auth.users.id
order by notification_preferences.prefix asc;
grant select on notification_preferences_ext to authenticated;

create view notifications_ext as
select
  notifications.id as notification_id,
  notifications.acknowledged as acknowledged,
  notifications.evaluation_interval as evaluation_interval,
  notification_messages.title as notification_title,
  notification_messages.message as notification_message,
  notification_messages.detail as classification,
  notification_preferences_ext.verified_email as verified_email,
  live_specs.catalog_name as catalog_name,
  live_specs.spec_type as spec_type,
  coalesce(sum(catalog_stats_hourly.bytes_written_by_me + catalog_stats_hourly.bytes_written_to_me + catalog_stats_hourly.bytes_read_by_me), 0) as bytes_processed
from notifications
  left join live_specs on notifications.live_spec_id = live_specs.id and live_specs.spec is not null and (live_specs.spec->'shards'->>'disable')::boolean is not true
  left join catalog_stats_hourly on live_specs.catalog_name = catalog_stats_hourly.catalog_name
  left join notification_preferences_ext on notifications.preference_id = notification_preferences_ext.id
  left join notification_messages on notifications.message_id = notification_messages.id
where (
  case
    when notification_messages.detail = 'data-not-processed-in-interval' and notifications.evaluation_interval is not null then
      live_specs.created_at <= date_trunc('hour', now() - notifications.evaluation_interval)
      and catalog_stats_hourly.ts >= date_trunc('hour', now() - notifications.evaluation_interval)
  end
)
group by
  notifications.id,
  notifications.acknowledged,
  notifications.evaluation_interval,
  notification_messages.title,
  notification_messages.message,
  notification_messages.detail,
  notification_preferences_ext.verified_email,
  live_specs.catalog_name,
  live_specs.spec_type;
grant select on notifications_ext to authenticated;

create extension pg_cron with schema extensions;
select
  cron.schedule (
    'evaluate-data-processing-notifications', -- name of the cron job
    '*/5 * * * *', -- every five minutes, check to see if an alert needs to be sent
    $$
    select
      net.http_post(
        url:='http://host.docker.internal:5431/functions/v1/resend',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"}'::jsonb,
        body:=concat('{"time": "', now(), '"}')::jsonb
      ) as request_id;
    $$
  );