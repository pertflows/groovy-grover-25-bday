# Groovy Grover's 25th

Party site for Jessie's 25th birthday rave, Saturday, Nov 21.

- `index.html`: the whole site (the night's plan, the RSVP form, FAQ)
- `assets/`: the flyer and the photo of Jessie

## Go live on Netlify (about 5 minutes)

1. Sign in at app.netlify.com, then go to **Add new site → Import an existing project → GitHub** and pick this repo.
2. Leave the build settings empty (no build command; `netlify.toml` publishes the repo root). Deploy.
3. In **Site configuration → Forms**, make sure form detection is on, then redeploy once so Netlify picks up the `rsvp` form.
4. Optional: **Site configuration → Domain management** to rename the site, e.g. `groovy-grover.netlify.app`.

## Seeing RSVPs

Netlify → your site → **Forms → rsvp**. Each reply shows the route (Taproom only / Taproom + bus + 99 Scott / Meeting at 99 Scott), name, +1s, ticket status, phone and note. Use **Download as CSV** to count bus seats.
To get an email for each reply: **Forms → Form notifications → Add notification → Email**.

If someone resubmits after changing plans, use their latest entry.
