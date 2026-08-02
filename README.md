# The Web Is Yours

Campaign site for [thewebisyours.org](https://thewebisyours.org) — a grassroots effort giving small businesses free one-page websites they actually own.

This repo is the **campaign marketing and ops site**. The volunteer business template lives in a separate repo: [thewebisyours-template](https://github.com/jamesfmcgrath/thewebisyours-template).

Contact: [hello@thewebisyours.org](mailto:hello@thewebisyours.org)

---

## What’s here

| Path | Purpose |
|------|---------|
| `/` | Campaign homepage — pitch, involvement cards, contact form |
| `/onboard/` | Business onboarding form |
| `/privacy/` | Privacy statement |
| `/terms/` | Terms and conditions |
| `css/style.css` | Shared styles |
| `js/script.js` | Home contact form (role selector, Web3Forms) |
| `wrangler.jsonc` | Cloudflare Workers static-assets config |

Stack: pure HTML/CSS + minimal vanilla JS. No frameworks. Forms go through [Web3Forms](https://web3forms.com).

---

## Local development

Open the files directly, or serve the repo root with any static server.

With [Wrangler](https://developers.cloudflare.com/workers/wrangler/):

```bash
npx wrangler dev
```

With DDEV (if configured locally):

```bash
ddev start
```

---

## Deploy

Static assets deploy via Cloudflare (`wrangler.jsonc`, `assets.directory: "."`).

```bash
npx wrangler deploy
```

---

## Customising colours

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

Prefer updating these over scattering new hex values.

---

## Related

- **Volunteer template** (zero-build, single `index.html` for client sites): keep that repo simple — do not migrate it to Astro or other frameworks
- **Campaign values** for business sites: domain in the business’s name, one page, footer credit to thewebisyours.org, Cloudflare hosting

---

*The Web Is Yours · Westport, Ireland · 2026*
