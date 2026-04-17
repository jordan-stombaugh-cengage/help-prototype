# Open Routing Decisions

## Purpose
This document tracks unresolved destination decisions in `help-prototype`.

Use it together with:
- `docs/routing-matrix.md`

## Locked Interim Rule
- Current prototype behavior for unresolved destinations: non-interactive
- Intended behavior: stay visibly present, but do not route anywhere until the real destination exists
- Explicitly disallowed interim behavior: falling back to Search Results
- Homepage and product-hub CTAs for `Course Access & Enrollment` and `Troubleshooting & Common Problems` are no longer open questions; they now route to live help-domain hubs.
- Relationship-driven shared issue labels such as `Wrong account`, `Missing activities`, and `LMS link not working` now use lightweight chooser pages where that routing relationship is already clear enough to model.

## Homepage Quick Links

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| `Enter course key`, `Redeem access code`, `LMS access help` quick links in the homepage `Course Access & Enrollment` card | non-interactive | article or deeper course-access destination | Depends on whether these become direct article routes, direct sub-destinations, or remain hub-only shortcuts inside the live Course Access hub |
| `Browser or device issues` quick link in the homepage `Troubleshooting & Common Problems` card | direct article | shared article | Current prototype treats browser requirements as a confirmed shared article, but writers should still confirm whether product/version-specific divergence is needed later |

## Product Hub Deep-Link Coverage

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| `WebAssign`, `SAM`, and `Spark` role-specific task and problem links without direct destinations | non-interactive | article | Depends on article inventory and product-specific answer-object decisions |
| `WebAssign`, `SAM`, and `Spark` browse-by-area links | non-interactive | article | Depends on product-specific article coverage |
| `WebAssign`, `SAM`, and `Spark` additional resources without live destinations | non-interactive | article, external, or resource destination | Depends on whether these become article objects, external resources, or dedicated utility destinations |

## Role Label Clarification

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| Shared homepage and Search Results role label `Institutional Administrator` replacing the former `School Administrator` stand-in | `Institutional Administrator` is the active runtime facet | role facet under `/search` | Remaining ambiguity is whether a distinct `School Administrator` facet is ever needed in addition to `Institutional Administrator`; do not keep both active without explicit IA approval |

## Account-Topic Links

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| Sign In & Account card: `Manage account` | non-interactive | article or account-help destination | Depends on the answer-object model for account topics |
| Help article inline links: `Create an account`, `access help` | non-interactive | article or direct destination | Depends on whether those are separate articles or reused destination objects |
| Help article option cards: `Create an Account`, `Manage Account` | non-interactive | article or account-help destination | Same dependency as above |
| Help article account-management links except `Forgot Password` | non-interactive | article, flow state, or account destination | Depends on which account utilities become first-class article objects versus external or hub destinations |
| Reset-password not-sure card: `I can't access my account` | non-interactive | article or account-help destination | Depends on the account-access object model |

## Relationship-Routing Follow-on Questions

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| `Wrong account` chooser | routes to a chooser before article or hub destinations | chooser or direct article depending on future governance | Writers still need to confirm whether one shared purchased-access article remains canonical across all listed products |
| `LMS link not working` chooser | routes to a chooser before a shared article or product hub | chooser or direct article depending on future governance | Writers still need to confirm whether the shared LMS-link article remains canonical for all supported product variants |
| `Missing activities` chooser | routes to a chooser before product-hub destinations | chooser or direct article depending on future governance | Writers still need to confirm whether this should eventually become a shared article, stay chooser-based, or branch more explicitly by product |

## School Portal Vs NGLSync

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| `School portal sign-in` card on the School / NGLSync branch | non-interactive | flow state or article | Must remain distinct from LMS and from NGLSync; depends on creating a dedicated downstream state |
| `NGLSync sign-in` card on the School / NGLSync branch | non-interactive | flow state or article | Must remain distinct from school portal sign-in; depends on creating a dedicated downstream state |

## LMS-Adjacent Issues

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| Reset password LMS related issues: `My LMS link isn't working`, `I don't know my LMS login`, `Course not showing up in LMS`, `LMS integration troubleshooting` | non-interactive | article or flow state | Depends on whether LMS-adjacent issues stay inside the reset flow or become separate articles |

## MindTap Deep Links And Resource Cards

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| MindTap role-specific task and problem links without direct destinations | non-interactive | article | Depends on article inventory and product-specific answer-object decisions |
| MindTap browse-by-area links | non-interactive | article | Depends on product-specific article coverage |
| MindTap additional resources: `System requirements`, `Browser requirements`, `Accessibility`, `Video tutorials`, `What's new` | non-interactive | article, external, or resource destination | Depends on whether these become article objects, external resources, or dedicated utility destinations |

## Search Shortcut Decision

| Item group | Current prototype behavior | Intended future destination type | IA risk or dependency |
|---|---|---|---|
| Homepage popular `Access code` shortcut | intentional Search Results shortcut | search shortcut or direct destination | Needs an explicit decision on whether it stays a search/discovery shortcut or becomes a direct non-search destination later |
