# Prototype Scope

## Purpose
This repository contains a Phase 1 MVP prototype for a merged Cengage Help + ELT help experience.

The goal of the prototype is to demonstrate a modern front-end help experience, not to rebuild the content system or rewrite the full help corpus.

## In Scope
- Front-end prototype using React Magma
- Global app shell and navigation
- Search-first homepage
- Search results experience
- Sign In & Account Help hub
- Reset-password routing flow
- Product hub prototype
- Help article template
- Support page
- Shared components and layout patterns
- Mock data and sample content inputs as needed for the prototype

## Out of Scope
- CMS replacement
- Content rewriting at scale
- DITA/Oxygen authoring workflow changes
- Full migration of legacy help content
- Full production search implementation
- Full localization implementation

## Content Assumption
Existing help content continues to be authored in Oxygen/DITA.

For Phase 1, the new front end is expected to consume HTML output from the current authoring/publishing system rather than replace it.
## IA / UX Rules
- Search is primary
- Support is fallback
- Role is a facet, not a top-level object
- Browse by product goes to product hubs
- Browse by role goes to filtered search/discovery, not role hubs
- Homepage search is unified
- No homepage content-type dropdown such as Articles / FAQs / Guides
- Search results are article-first, then refined by filters
- Product pages are canonical product hubs with role-aware views
- Reset-password is a routing flow, not a single flat article
- Direct Cengage account password reset hands off externally