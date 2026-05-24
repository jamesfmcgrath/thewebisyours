# The Web Is Yours

Campaign site for [thewebisyours.org](https://thewebisyours.org).

## Files

- `index.html` — campaign homepage
- `privacy/index.html` — privacy statement
- `terms/index.html` — terms and conditions
- `css/style.css` — shared styles
- `js/script.js` — contact form script
- `favicon.svg` — site favicon

## Blog

Blog posts are written in Markdown and live in `blog/posts/`. A Node.js build script converts them to HTML.

### Writing a new post

1. Create a new `.md` file in `blog/posts/` — name it `YYYY-MM-DD-post-slug.md`
2. Add frontmatter at the top:

```yaml
---
title: Your Post Title
date: 2026-06-01
description: One sentence that appears in the post list and as the meta description.
tags: [campaign, process]
---
```

3. Write the post in Markdown below the frontmatter
4. Run the build script:

```bash
npm install    # first time only
npm run build:blog
```

5. Commit and push — Cloudflare Pages deploys automatically
