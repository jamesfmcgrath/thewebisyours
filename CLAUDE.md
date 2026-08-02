# CLAUDE.md — The Web Is Yours (Campaign Site)

Context for agents working on the **campaign site** repository (`thewebisyours`), not the volunteer business template.

---

## What This Project Is

The public campaign site for The Web Is Yours — a grassroots effort giving small businesses free one-page websites.

- **Site:** https://thewebisyours.org  
- **Contact:** hello@thewebisyours.org  
- **This repo:** campaign marketing + ops (multi-page static)  
- **Not this repo:** `thewebisyours-template` — single-file HTML template for volunteer-built business sites

---

## Repository Structure

```
thewebisyours/
├── index.html            # Campaign homepage
├── css/style.css         # Shared styles
├── js/script.js          # Home contact form behaviour
├── onboard/index.html    # Business intake form
├── privacy/index.html
├── terms/index.html
├── favicon.svg
├── wrangler.jsonc        # Cloudflare Workers static assets
├── CLAUDE.md             # This file
└── .cursorrules          # Cursor agent rules
```

---

## The Stack

- **Pure HTML/CSS + minimal vanilla JS** — no frameworks by default
- **Shared CSS/JS** — not a single-file site
- **Web3Forms** — contact and onboard form submissions
- **Cloudflare** — static assets via Wrangler (`assets.directory: "."`)
- **No build step on `main`** — edit files and deploy

Do not introduce Astro, npm app tooling, or JS/CSS frameworks unless the user explicitly asks. If a build tool is requested later, update these docs in the same change.

The **volunteer template** must remain zero-build and single-file forever. That rule does not force this campaign site to stay one HTML file.

---

## CSS Architecture

Tokens live in `css/style.css`:

```css
:root {
  --cream: #faf6f0;
  --warm-white: #fff9f2;
  --ink: #1c1712;
  --mid: #4a433c;
  --light: #524b43;
  --terracotta: #7a3714;
  --terracotta-light: #f0e0d6;
  --sage: #3f4840;
  --sage-light: #e4ece5;
  --border: #e8ddd5;
}
```

Prefer updating these variables over new hardcoded colours.

---

## Pages

1. **Home** — hero, involvement cards, manifesto, role-based contact form  
2. **Onboard** — long business application (hours, services, contact, consent)  
3. **Privacy** / **Terms** — legal copy; keep consistent with real ops (Cloudflare, Proton Mail, Web3Forms)

Use consistent trailing-slash paths: `/privacy/`, `/terms/`, `/onboard/`.

---

## JavaScript

- `js/script.js` — honeypot, role selector, scroll-to-form, Web3Forms on home  
- Onboard page — local script for hours UI and submit  

Keep JS small. No jQuery, Alpine, HTMX, or React unless explicitly requested.

---

## Design Principles

- **Mobile first** — usable at ~375px  
- **Fast** — tiny static assets; avoid heavy dependencies  
- **Accessible** — semantic HTML, keyboard access, labelled forms, WCAG AA contrast  
- **DRY chrome** — prefer shared CSS/JS over duplicated header/footer/styles  
- **Honest scope** — no ecommerce, booking, or CMS on this site unless asked  

---

## Campaign Values (client business sites)

Encoded in Terms and the template repo — not constraints that force this org site to be one page:

- Domain in the business’s name  
- One-page business sites from the volunteer template  
- Footer credit linking to thewebisyours.org  
- Cloudflare hosting for campaign-built sites  
- Content from the client — never invented for a real business site  

---

## Agent Pitfalls

- Do not rewrite this repo as if it were Harbour Bakery / the single-file template  
- Do not delete Privacy, Terms, or onboard to “simplify to one page”  
- Do not remove Web3Forms wiring without a replacement the user asked for  
- Point template/volunteer work at `thewebisyours-template`, not this tree  

---

*The Web Is Yours · thewebisyours.org · Westport, Ireland · 2026*
