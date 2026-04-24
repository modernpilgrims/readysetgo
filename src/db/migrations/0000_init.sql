create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  phone text,
  company_name text,
  role text not null default 'client',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_by uuid null references public.profiles(id) on delete set null,
  full_name text not null,
  email text not null,
  phone text,
  telegram_handle text,
  company_name text,
  website text,
  country text,
  language text,
  service_interest text,
  budget_range text,
  timeline text,
  message text,
  source text not null default 'website',
  status text not null default 'new',
  priority text not null default 'normal',
  assigned_to uuid null references public.profiles(id) on delete set null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  referrer text,
  landing_path text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lead_notes (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.lead_events (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  event_type text not null,
  payload jsonb not null default '{}'::jsonb,
  actor_id uuid null references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

-- トリガー: updated_at 
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

drop trigger if exists set_leads_updated_at on public.leads;
create trigger set_leads_updated_at
  before update on public.leads
  for each row execute procedure public.set_updated_at();

-- RLS
alter table public.profiles enable row level security;
alter table public.leads enable row level security;
alter table public.lead_notes enable row level security;
alter table public.lead_events enable row level security;

-- Profiles Policies
create policy "profile_self_select" on public.profiles
  for select to authenticated using (auth.uid() = id);

create policy "profile_self_update" on public.profiles
  for update to authenticated using (auth.uid() = id)
  with check (auth.uid() = id);

-- Leads Policies
create policy "clients_view_own_leads" on public.leads
  for select to authenticated using (created_by = auth.uid());
