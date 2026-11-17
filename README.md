# Groovy Grover's 25th

Party site for Jessie's 25th birthday rave, Saturday, Nov 21.

- `index.html`: the party page (the night's plan, RSVP form, FAQ)
- `admin/`: RSVP list for the hosts at `/admin` (headcounts, bus seats, ticket status)
- `assets/`: flyer, photo of Jessie, and the Supabase connection (`rsvp-config.js`)

## Where RSVPs live

Supabase, **MobyDicks** project, table `public.bday_rsvps`. You can also see them in the
Supabase Table Editor. The site can't read the table directly: guests can only submit, and the
admin page has to pass the username and password to `bday_admin_list`.

## Hosting

Vercel: https://groovy-grover-25-bday.vercel.app (admin at `/admin`). Pushes to this branch redeploy automatically.

## RSVP emails

A trigger on `bday_rsvps` (`bday_notify_rsvp`) posts each new RSVP to the n8n workflow
"Groovy Grover 25th - RSVP emails" on n8n.pertflows.com, which emails Mike and Jessie a branded
summary with running headcounts. The email header image is `assets/email-header.jpg`.

## After the party: clean up MobyDicks

Run this in the MobyDicks SQL editor:

```sql
drop trigger if exists bday_rsvps_notify on public.bday_rsvps;
drop function if exists public.bday_notify_rsvp();
drop function if exists public.bday_submit_rsvp(text,text,int,text,text,text);
drop function if exists public.bday_admin_list(text,text);
drop function if exists public.bday_admin_delete(text,text,uuid);
drop function if exists public.bday_admin_ok(text,text);
drop table if exists public.bday_rsvps;
```

Then archive the n8n workflow "Groovy Grover 25th - RSVP emails".
