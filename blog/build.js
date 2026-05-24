// Run: npm install (first time only)
// Then: node blog/build.js
// Or:   npm run build:blog

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const POSTS_DIR = path.join(__dirname, 'posts');
const OUTPUT_DIR = path.join(__dirname);
const TEMPLATE_PATH = path.join(__dirname, 'post-template.html');
const INDEX_PATH = path.join(__dirname, 'index.html');

const postTemplate = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

const files = fs.readdirSync(POSTS_DIR)
  .filter(f => f.endsWith('.md'))
  .sort()
  .reverse(); // newest first based on filename date prefix

const posts = [];

files.forEach(file => {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
  const { data, content } = matter(raw);
  const slug = file.replace('.md', '');
  const html = marked(content);

  const wordCount = content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const date = new Date(data.date);
  const formattedDate = date.toLocaleDateString('en-IE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const isoDate = date.toISOString().split('T')[0];

  const tagsHtml = (data.tags || [])
    .map(tag => `<span class="post-tag">${tag}</span>`)
    .join('');

  let postHtml = postTemplate
    .replace(/{{title}}/g, data.title)
    .replace(/{{description}}/g, data.description || '')
    .replace(/{{date}}/g, formattedDate)
    .replace(/{{isoDate}}/g, isoDate)
    .replace(/{{readTime}}/g, readTime)
    .replace(/{{tags}}/g, tagsHtml)
    .replace(/{{content}}/g, html)
    .replace(/{{slug}}/g, slug);

  const postDir = path.join(OUTPUT_DIR, slug);
  if (!fs.existsSync(postDir)) fs.mkdirSync(postDir, { recursive: true });
  fs.writeFileSync(path.join(postDir, 'index.html'), postHtml);

  console.log(`✓ Built: blog/${slug}/index.html`);

  posts.push({ slug, title: data.title, description: data.description, date: formattedDate, isoDate, readTime, tags: data.tags || [] });
});

buildIndex(posts);
console.log(`✓ Built: blog/index.html`);
console.log(`\nDone — ${posts.length} post${posts.length !== 1 ? 's' : ''} built.`);

function getSharedStyles() {
  return `<link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="/css/style.css">`;
}

function getBlogStyles() {
  return `<style>
    .fade-in {
      transform: translateY(16px);
      transition: transform 0.5s ease;
    }
    .fade-in.visible {
      transform: none;
    }

    .blog-hero {
      padding: 5rem 2.5rem 3rem;
      max-width: 820px;
      border-bottom: 1px solid var(--border);
      animation: fadeUp 0.8s 0.1s ease both;
    }

    .blog-hero .eyebrow {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--sage);
      background: var(--sage-light);
      padding: 0.3rem 0.8rem;
      border-radius: 100px;
      margin-bottom: 1.75rem;
    }

    .blog-hero h1 {
      font-family: 'Lora', serif;
      font-size: clamp(2.8rem, 7vw, 5rem);
      font-weight: 600;
      line-height: 1.1;
      letter-spacing: -0.02em;
      margin-bottom: 1.25rem;
    }

    .blog-hero h1 em {
      font-style: italic;
      color: var(--terracotta);
    }

    .blog-hero-sub {
      font-size: clamp(1rem, 2vw, 1.15rem);
      color: var(--mid);
      font-weight: 300;
      line-height: 1.75;
      max-width: 560px;
    }

    .posts-section {
      padding: 3rem 2.5rem 5rem;
    }

    .posts-inner {
      max-width: 680px;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .post-card {
      padding: 2.5rem 0;
      border-bottom: 1px solid var(--border);
    }

    .post-card:last-child {
      border-bottom: none;
    }

    .post-card-meta {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-bottom: 0.75rem;
    }

    .post-card-meta time {
      font-size: 0.78rem;
      color: var(--light);
      font-weight: 400;
    }

    .read-time {
      font-size: 0.75rem;
      color: var(--light);
      font-weight: 300;
    }

    .read-time::before {
      content: '·';
      margin-right: 1rem;
    }

    .post-card-title {
      font-family: 'Lora', serif;
      font-size: clamp(1.3rem, 2.5vw, 1.75rem);
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.2;
      margin-bottom: 0.75rem;
    }

    .post-card-title a {
      color: var(--ink);
      text-decoration: none;
      transition: color 0.2s;
    }

    .post-card-title a:hover {
      color: var(--terracotta);
    }

    .post-card-desc {
      font-size: 0.95rem;
      color: var(--mid);
      line-height: 1.75;
      font-weight: 300;
      margin-bottom: 1.25rem;
    }

    .post-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .post-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .post-tag {
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--terracotta);
      background: var(--terracotta-light);
      padding: 0.2rem 0.6rem;
      border-radius: 100px;
    }

    .read-more {
      font-size: 0.82rem;
      font-weight: 500;
      color: var(--terracotta);
      text-decoration: none;
      white-space: nowrap;
    }

    .read-more:hover {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      .blog-hero { padding: 3rem 1.5rem 2rem; }
      .posts-section { padding: 2rem 1.5rem 4rem; }
    }
  </style>`;
}

function getHeader() {
  return `<a class="skip-link" href="#main-content">Skip to main content</a>

  <header>
    <a class="logo" href="/">The Web Is <span>Yours</span></a>
    <nav id="main-nav" aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/#contact" class="nav-cta">Get in Touch</a>
    </nav>
  </header>`;
}

function getFooter() {
  return `<footer>
    <div class="footer-left">
      <span class="footer-logo">The Web Is <span>Yours</span></span>
      <p>A grassroots campaign by web people who give a damn &nbsp;·&nbsp; Westport, Ireland &nbsp;·&nbsp; 2026</p>
    </div>
    <a href="mailto:hello@thewebisyours.org">hello@thewebisyours.org</a>
    <nav class="footer-legal">
      <a href="/privacy/">Privacy Statement</a>
      <span>·</span>
      <a href="/terms/">Terms and Conditions</a>
    </nav>
  </footer>`;
}

function getNavScript() {
  return '';
}

function buildIndex(posts) {
  const postCards = posts.map(post => {
    const tagsHtml = post.tags
      .map(tag => `<span class="post-tag">${tag}</span>`)
      .join('');

    return `
    <article class="post-card fade-in">
      <div class="post-card-meta">
        <time datetime="${post.isoDate}">${post.date}</time>
        <span class="read-time">${post.readTime} min read</span>
      </div>
      <h2 class="post-card-title">
        <a href="/blog/${post.slug}">${post.title}</a>
      </h2>
      <p class="post-card-desc">${post.description}</p>
      <div class="post-card-footer">
        <div class="post-tags">${tagsHtml}</div>
        <a class="read-more" href="/blog/${post.slug}" aria-label="Read ${post.title}">Read &#x2192;</a>
      </div>
    </article>`;
  }).join('\n');

  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog | The Web Is Yours</title>
  <meta name="description" content="Working in the open. Building a grassroots web campaign one business at a time. Still finding our way.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap" rel="stylesheet">
  ${getSharedStyles()}
  ${getBlogStyles()}
</head>
<body>
  ${getHeader()}

  <main id="main-content">
  <section class="blog-hero">
    <span class="eyebrow">Working in the open</span>
    <h1>The <em>blog.</em></h1>
    <p class="blog-hero-sub">Building a grassroots web campaign one business at a time. The wins, the friction, the lessons. Still finding our way. You can too.</p>
  </section>

  <section class="posts-section">
    <div class="posts-inner">
      ${postCards}
    </div>
  </section>
  </main>

  ${getFooter()}

  <script>
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  </script>
</body>
</html>`;

  fs.writeFileSync(INDEX_PATH, indexHtml);
}
