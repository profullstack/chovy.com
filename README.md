# chovy.com

A terminal-style microblog. Short thoughts only — nothing over **240 characters**.
Think tweets, not long-winded blog posts.

## Stack

Plain static site: `index.html` + `style.css` + `app.js`. No build step, no framework.
Posts live in `posts.json`.

## Adding a post

Prepend a new entry to `posts.json` (newest `id` wins; the feed sorts by `id` descending):

```json
{
  "id": 4,
  "date": "2026-06-12",
  "text": "Your thought here. Keep it under 240 characters."
}
```

Commit and push — that's the whole publishing flow.

## Local dev

Any static server works:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then open http://localhost:8080.

## Deploy

The site is static, so it hosts anywhere (Netlify, Cloudflare Pages, GitHub Pages, Railway).
The `CNAME` file points the GitHub Pages deploy at `chovy.com`.
