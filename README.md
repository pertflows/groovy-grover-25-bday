# Groovy Grover's 25th

Party site for Jessie's 25th birthday rave, Saturday, Nov 21.

- `index.html`: the party page (the night's plan, RSVP form, FAQ)
- `admin/`: RSVP list for the hosts at `/admin` (headcounts, bus seats, ticket status)
- `assets/`: flyer, photo of Jessie, and the Supabase connection (`rsvp-config.js`)

## Where RSVPs live

Supabase, **MobyDicks** project, table `public.bday_rsvps`. You can also see them in the
Supabase Table Editor. The site can't read the table directly: guests can only submit, and the
admin page has to pass the username and password to `bday_admin_list`.

## Hosting (GitHub Pages)

Repo **Settings → Pages → Build and deployment**: Source "Deploy from a branch", branch
`claude/wizardly-heisenberg-eezslj`, folder `/ (root)`, Save. The site appears at
`https://pertflows.github.io/groovy-grover-25-bday/` and the admin page at `.../admin/`.

## After the party: clean up MobyDicks

Run this in the MobyDicks SQL editor:

```sql
drop function if exists public.bday_submit_rsvp(text,text,int,text,text,text);
drop function if exists public.bday_admin_list(text,text);
drop function if exists public.bday_admin_delete(text,text,uuid);
drop function if exists public.bday_admin_ok(text,text);
drop table if exists public.bday_rsvps;
```
