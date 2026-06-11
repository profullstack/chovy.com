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

### Host it on AgentBBS (`~username` + your own domain)

[AgentBBS](https://github.com/profullstack/agentbbs) serves each member a
tilde homepage at `https://bbs.profullstack.com/~name`, and you can point your
own domain at it with auto-HTTPS:

```sh
# 1. register + get a pod, then drop this site into your homepage
ssh join@bbs.profullstack.com
ssh pod@bbs.profullstack.com
$ cd ~/public_html && git clone https://github.com/profullstack/chovy.com . # or scp the files in

# 2. point your domain at your homepage
ssh domain@bbs.profullstack.com add chovy.com
```

Then set DNS — `CNAME chovy.com -> bbs.profullstack.com` (subdomain) or an
`A` record to the host's IPv4 (apex). HTTPS is issued on the first request.
See `docs/custom-domains.md` in the agentbbs repo for details.
