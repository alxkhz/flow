begin;

-- Index that accelerates operator ^@ (starts-with) for catalog_stats and friends.
create index catalog_stats_catalog_index_spgist on catalog_stats using spgist ((catalog_name::text));

create or replace view internal.new_free_trial_tenants as
with hours_by_day as (
  select
    tenants.tenant as tenant,
    ts,
    sum(catalog_stats_daily.usage_seconds / (60.0 * 60)) as daily_usage_hours
  from catalog_stats_daily
  join tenants on catalog_stats_daily.catalog_name ^@ tenants.tenant
  where tenants.trial_start is null
  group by tenants.tenant, ts
  having sum(catalog_stats_daily.usage_seconds / (60.0 * 60)) > (2 * 24)
),
hours_by_month as (
  select
    tenants.tenant as tenant,
    ts,
    sum(catalog_stats_monthly.usage_seconds / (60.0 * 60)) as monthly_usage_hours
  from catalog_stats_monthly
  join tenants on catalog_stats_monthly.catalog_name ^@ tenants.tenant
  where tenants.trial_start is null
  group by tenants.tenant, ts
  having sum(catalog_stats_monthly.usage_seconds / (60.0 * 60)) > (24 * 31 * 2)
),
gbs_by_month as (
  select
    tenants.tenant as tenant,
    ts,
    ceil(sum((catalog_stats_monthly.bytes_written_by_me + catalog_stats_monthly.bytes_read_by_me) / (1024.0 * 1024 * 1024))) as monthly_usage_gbs
  from catalog_stats_monthly
  join tenants on catalog_stats_monthly.catalog_name ^@ tenants.tenant
  where tenants.trial_start is null
  group by tenants.tenant, ts
  having ceil(sum((catalog_stats_monthly.bytes_written_by_me + catalog_stats_monthly.bytes_read_by_me) / (1024.0 * 1024 * 1024))) > 10
)
select
    tenants.tenant as tenant,
    max(hours_by_day.daily_usage_hours) as max_daily_usage_hours,
    max(hours_by_month.monthly_usage_hours) as max_monthly_usage_hours,
    max(gbs_by_month.monthly_usage_gbs) as max_monthly_gb,
    count(distinct live_specs.id) filter (where live_specs.spec_type = 'capture') as today_captures,
    count(distinct live_specs.id) filter (where live_specs.spec_type = 'materialization') as today_materializations
from tenants
left join hours_by_day on hours_by_day.tenant = tenants.tenant
left join hours_by_month on hours_by_month.tenant = tenants.tenant
left join gbs_by_month on gbs_by_month.tenant = tenants.tenant
join live_specs on (split_part(live_specs.catalog_name,'/',1)||'/' = tenants.tenant and (live_specs.spec #>> '{shards,disable}')::boolean is not true)
where tenants.trial_start is null
group by tenants.tenant
having count(hours_by_month) > 0 or count(hours_by_day) > 0 or count(gbs_by_month) > 0;

create or replace function internal.set_new_free_trials()
returns integer as $$
declare
    tenant_row record;
    update_count integer = 0;
begin
    for tenant_row in select tenant from internal.new_free_trial_tenants loop
      update tenants set trial_start = date_trunc('day', now())
      where tenants.tenant = tenant_row.tenant;

      -- INSERT statements set FOUND true if at least one row is affected, false if no row is affected.
      if found then
        update_count = update_count + 1;
      end if;
    end loop;
    return update_count;
end
$$ language plpgsql volatile;

create extension if not exists pg_cron with schema extensions;
select cron.schedule(
  'free-trials', -- name of the cron job
  '0 05 * * *', -- Every day at 05:00Z
  $$ select internal.set_new_free_trials() $$
);

commit;