create type public.app_role as enum ('admin');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users can read own roles"
  on public.user_roles for select to authenticated
  using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  )
$$;

-- The first account created becomes the admin (the site owner signs up first).
create or replace function public.handle_first_user_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (select 1 from public.user_roles) then
    insert into public.user_roles (user_id, role) values (new.id, 'admin');
  end if;
  return new;
end;
$$;

create trigger on_auth_user_created_first_admin
  after insert on auth.users
  for each row execute function public.handle_first_user_admin();

create table public.consultation_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  service text not null,
  dob date,
  tob time,
  pob text,
  message text,
  language text not null default 'en',
  created_at timestamptz not null default now()
);

create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  service text not null,
  message text,
  language text not null default 'en',
  created_at timestamptz not null default now()
);

grant insert on public.consultation_submissions, public.contact_submissions to anon, authenticated;
grant select on public.consultation_submissions, public.contact_submissions to authenticated;
grant all on public.consultation_submissions, public.contact_submissions to service_role;

alter table public.consultation_submissions enable row level security;
alter table public.contact_submissions enable row level security;

create policy "Anyone can submit a consultation request"
  on public.consultation_submissions for insert to anon, authenticated
  with check (true);
create policy "Admins can read consultation requests"
  on public.consultation_submissions for select to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Anyone can submit a contact message"
  on public.contact_submissions for insert to anon, authenticated
  with check (true);
create policy "Admins can read contact messages"
  on public.contact_submissions for select to authenticated
  using (public.has_role(auth.uid(), 'admin'));