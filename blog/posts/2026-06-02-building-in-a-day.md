---
title: Building a Campaign in a Day
date: 2026-06-02
description: How the whole thing came together in one session — domain, hosting, email, template, legal docs, and a plan. An honest account of how AI tools fit into the process.
tags: [process, tools, build]
---

The honest version of how The Web Is Yours came together is that most of the infrastructure was built in a single long session with Claude.

Not the idea — the idea had been sitting in the back of my head for a while. But the domain, the hosting setup, the contact form, the one-page business template, the legal documents, the contributing guide, the project brief — most of that happened in one day.

I want to write about that honestly because I think there's something useful in it.

## What Actually Happened

It started as a conversation. I had an idea, I wanted to think it through, and I started talking it through with Claude. The name went through a few iterations — *One Page at a Time* conflicted with a book, *This Page Is Yours* was good but not quite right — before landing on *The Web Is Yours*.

From there it moved fast. Domain registered on Cloudflare. Email routing set up through Cloudflare to Proton Mail. A placeholder site built and deployed to Cloudflare Pages. A contact form integrated with Web3Forms. A one-page business template with a CSS variable system. A README. A CONTRIBUTING guide. A CLAUDE.md. A .cursorrules file. Privacy statement. Terms and conditions.

All in one session.

## What AI Is Good At Here

The repetitive structural work. The things that need to be right but don't require creative judgment — form handling, CSS architecture decisions, legal document structure, README formatting.

It's also good as a thinking partner for the early fuzzy stage — testing the name, pressure-testing the concept, identifying the risks before you're committed.

## What It Isn't

It isn't a replacement for judgment. Every decision in that session was mine. The AI surfaced options, I chose. It drafted documents, I read and approved them. It suggested approaches, I accepted or pushed back.

The legal documents in particular — I read every line. They're plain English and proportionate for a sole trader running a free community campaign, but I read them.

## The Template

The business template is the part I'm most pleased with. Single HTML file. CSS variables for colours — swap four values at the top and the whole site recolours. No framework, no build tool, no dependencies beyond Google Fonts. Any developer at any skill level can open it, edit it, and deploy it.

That simplicity was a deliberate decision and it took some back-and-forth to get right. The temptation with these things is always to add more. We didn't.

## What's Next

The placeholder site is live. The template is in the repo. The legal pages need building. The onboarding form needs building. The blog — well, you're reading it.

One business to find. One site to build. One month to do it in.

Still finding our way.
