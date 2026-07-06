-- Embroidery Machine Manuals DB schema

create table if not exists brands (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text unique not null,
  description text,
  country     text,
  website_url text,
  created_at  timestamptz default now()
);

create table if not exists machines (
  id                   uuid primary key default gen_random_uuid(),
  brand_id             uuid references brands(id) on delete cascade,
  model_name           text not null,
  slug                 text unique not null,
  category             text not null,
  description          text,
  heads                integer,
  needles_per_head     integer,
  max_speed_spm        integer,
  max_embroidery_area  text,
  discontinued         boolean default false,
  manual_url           text,
  manual_source        text,
  created_at           timestamptz default now()
);

create index if not exists machines_brand_id_idx on machines(brand_id);
create index if not exists machines_category_idx on machines(category);
create index if not exists machines_slug_idx on machines(slug);

-- Allow public read
alter table brands enable row level security;
alter table machines enable row level security;

create policy "public read brands"  on brands  for select using (true);
create policy "public read machines" on machines for select using (true);
