# Relationship Routing Model

## Purpose
This document explains how the prototype decides where a click should go when the label alone is not enough.

The model is relationship-based:
- a click can go direct when the destination object is already known
- a click can go through a lightweight chooser when the next step depends on product, access pathway, sign-in context, or platform context
- a click can stay non-interactive when the prototype does not yet have an honest downstream destination

The reset-password flow is the reference pattern:
- shared entry point
- a small set of clarifying choices
- each choice routes to the correct downstream destination
- no Search Results fallback for unresolved paths
- no false precision when a relationship actually determines the answer

## Object Types

### Product
`Product` is the canonical product-hub destination.

Use a product hub when:
- the user is clearly asking for product-specific help
- the next step depends on the product experience
- the label already names the product

Current canonical product hubs:
- `MindTap`
- `WebAssign`
- `SAM`
- `Spark`

### Help Domain
`Help domain` is the canonical shared-domain hub destination.

Use a help-domain hub when:
- the issue is shared across products
- the user needs a shared browse layer before a product-specific answer
- the label names the shared domain directly

Current shared help domains:
- `Sign In & Account Help`
- `Course Access & Enrollment`
- `Troubleshooting & Common Problems`

### Help Article
`Help Article` is the explanatory content destination.

Use an article when:
- the prototype has a validated direct answer object
- the answer does not need another relationship choice first
- the label is specific enough that the downstream article is honest

### Access Pathway
`Access pathway` is a routing determinant, not a destination family.

Use access pathway as a decision variable when the next step depends on:
- direct Cengage sign-in
- LMS sign-in
- school or NGLSync sign-in
- purchased-access account state vs identity recovery

### Role
`Role` is a facet or filter, not a standalone hub.

Use role to:
- pre-filter Search Results
- shape in-page product-hub state

Do not use role to:
- create role hubs
- create separate role route families

### Support
`Support` is fallback.

Use support only after:
- a direct answer
- a shared hub
- a product hub
- a chooser step

## Decision Rule

### Go straight to an article when
- the label maps to a confirmed shared answer
- or the current surface already constrains the relationship enough to make the article honest

Examples:
- `Forgot username`
- `Browser requirements`
- `System requirements`

### Go straight to a product hub when
- the label already names the product
- or the current surface is intentionally taking the user into product-specific help

Examples:
- homepage product cards
- product-specific rows on `Course Access & Enrollment`
- product-specific rows on `Troubleshooting & Common Problems`

### Go straight to a help-domain hub when
- the label names the shared domain
- or the user needs the shared domain before any lower-level routing is honest

Examples:
- `Sign In & Account Help`
- `Course Access & Enrollment`
- `Troubleshooting & Common Problems`

### Use a lightweight chooser when
- the label is shared
- the prototype has more than one honest next step
- the right answer depends on a known relationship such as product, access pathway, or platform context

Current chooser use in runtime:
- `Wrong account`
- `LMS link not working`
- `Missing activities`

### Keep the item non-interactive when
- the correct relationship is still unresolved
- and the prototype does not yet have either:
  - a validated direct destination
  - or a small honest chooser step

Examples:
- `Access code`
- `LMS integration issues`
- `Login problems`
- `Missing content`
- `Error messages, sync, or integration issues`

## Ambiguous Label Audit

| Label | Classification | Current prototype handling | Why |
|---|---|---|---|
| `Missing activities` / `Missing activities or assignments` | `C` chooser needed on shared surfaces; `D` unresolved on product-specific surfaces without a confirmed answer object | Shared surfaces route to `Missing Activities Chooser`; product hubs stay non-interactive until a product-specific answer is validated | Product relationship determines the next step |
| `Wrong account` | `C` chooser needed | Shared surfaces and product-hub account links route to `Wrong Account Chooser` | The right next step depends on purchased-access state vs account identity vs LMS or school pathway |
| `LMS link not working` | `C` chooser needed on shared surfaces; `A` direct shared article is appropriate on already-constrained MindTap/WebAssign/SAM surfaces | Shared surfaces route to `LMS Link Chooser`; known MindTap/WebAssign article links stay direct where honest | Product relationship determines whether the shared LMS article applies |
| `Browser requirements` | `A` direct shared article is appropriate | Direct article | The prototype has one current shared article for the supported product set |
| `Forgot username` | `A` direct shared article is appropriate | Direct article | The prototype has one current shared account-recovery article |
| `Access code` | `D` stay non-interactive for now | Non-interactive | The prototype does not yet have a validated direct article or chooser step |
| `LMS integration issues` | `D` stay non-interactive for now | Non-interactive | The label is broader than the current LMS-link article and still needs its own answer-object decision |
| `Login problems` | `D` stay non-interactive for now | Non-interactive | The prototype does not yet have a precise direct answer or chooser step |
| `Missing content` | `D` stay non-interactive for now | Non-interactive | Product and content-type relationships are still unresolved |
| `Error messages / sync / integration issues` | `D` stay non-interactive for now | Non-interactive | The current label is too broad for a single honest direct destination |

## Current Lightweight Chooser Pages

### Wrong Account Chooser
- Shared entry: `Wrong account`
- Relationship being tested: account identity vs purchased-access state vs LMS or school pathway
- Downstream destinations:
  - shared `Wrong account` article
  - `Forgot username`
  - `Sign In & Account Help`

### LMS Link Chooser
- Shared entry: `LMS link not working`
- Relationship being tested: product context
- Downstream destinations:
  - shared `LMS link not working` article for `MindTap`, `WebAssign`, and `SAM`
  - `Spark` product hub
  - shared troubleshooting hub if the product is unknown

### Missing Activities Chooser
- Shared entry: `Missing activities`
- Relationship being tested: product or course experience
- Downstream destinations:
  - `MindTap` product hub
  - `WebAssign` product hub
  - `SAM` product hub
  - `Spark` product hub
  - shared troubleshooting hub if the product is unknown

## Guardrails
- Do not force shared labels to jump directly to one product-specific article.
- Do not use Search Results as a fallback for unresolved direct destinations.
- Do not create role hubs.
- Do not treat support as a primary answer path.
- Prefer a tiny chooser over a misleading shortcut when the relationship really matters.
