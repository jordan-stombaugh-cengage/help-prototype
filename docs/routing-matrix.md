# Routing Matrix

## Purpose
This document defines the route model for the `help-prototype` app and separates:
- canonical destination routes the prototype is modeling
- preview-switcher hashes used by the current running prototype

## Routing Rules
- Search is primary.
- Support is fallback and should appear after self-service paths.
- Role routes go to filtered discovery, not role hubs.
- Product routes go to canonical product hubs.
- Reset password always begins at the chooser.
- Relationship-driven shared issue labels can use a lightweight guided-routing step when product or access pathway determines the next destination.
- Cengage account reset routes to a shared internal help article, not an external handoff.
- LMS, school / NGLSync, and not-sure are distinct reset-password branches.
- Product-hub role tabs are in-page state, not separate routes.

## Search Results Rule
- Search Results is only for intentional search/discovery behavior.
- Allowed Search Results entry points in the current prototype are:
  - homepage search input / search CTA
  - homepage Browse by role controls
  - homepage popular search shortcuts that are intentionally modeled as search shortcuts
  - homepage common-problems issue links that are intentionally modeled as filtered discovery links
- Generic cards, direct-path actions, help-domain links, product links, support links, article links, and flow links must not default to Search Results when their real destination is missing.

## Unresolved Destinations Rule
- If the intended destination page does not exist yet, the card or link stays non-interactive.
- It must not fall back to Search Results as a placeholder.
- It should remain visually present so the layout and content model stay intact, but it should not behave like a live navigation target until the destination exists.

## Canonical Destinations

| Route | Destination | Type | Primary entry points | Notes |
|---|---|---|---|---|
| `/` | Homepage | Entry page | app entry | Search-first landing page with help-domain, role, and product discovery |
| `/search` | Search Results / Filtered Discovery | Discovery page | homepage search, role links, topical browse links, support self-service links | Article-first results with facets such as role, product, sign-in path, education segment, and last updated |
| `/help/sign-in-account` | Sign In & Account Help | Help-domain hub | homepage help-domain card, support self-service links | Shared help-domain hub for account access and sign-in issues |
| `/help/course-access-enrollment` | Course Access & Enrollment | Help-domain hub | homepage help-domain card, product-hub topic cards | Shared help-domain hub for course keys, access codes, enrollment, purchase-access issues, and LMS course entry |
| `/help/troubleshooting-common-problems` | Troubleshooting & Common Problems | Help-domain hub | homepage help-domain card, product-hub topic cards | Shared help-domain hub for cross-product troubleshooting and common technical problems |
| `/help/sign-in-account/wrong-account` | Wrong account chooser | Guided routing page | homepage account quick link, Sign In & Account hub, product-hub account links, search results | Relationship-based routing step for account identity vs access-pathway issues |
| `/help/troubleshooting-common-problems/browser-system` | Browser/system chooser | Guided routing page | homepage browser requirements/setup links, troubleshooting hub | Product-aware routing step so Spark-inclusive browser links do not route directly to MindTap/WebAssign/SAM-only articles |
| `/help/troubleshooting-common-problems/lms-link-not-working` | LMS link chooser | Guided routing page | homepage troubleshooting quick link, troubleshooting hub, search results | Product context determines whether the shared LMS article applies |
| `/help/troubleshooting-common-problems/missing-activities` | Missing activities chooser | Guided routing page | homepage troubleshooting quick link, troubleshooting hub | Product or course experience determines the next step |
| `/help/troubleshooting-common-problems/missing-content` | Missing content chooser | Guided routing page | homepage student eBook link, troubleshooting hub | Product-aware scaffold; current option cards are non-interactive until direct product-specific missing-content articles or approved destinations exist |
| `/help/sign-in-account/reset-password` | Reset password chooser | Flow entry | Sign In & Account hub, homepage popular links, support self-service links | Required entry to the reset-password flow |
| `/help/sign-in-account/reset-password/lms` | Reset password: LMS sign-in | Reset branch state | chooser only | LMS-managed password branch |
| `/help/sign-in-account/reset-password/school-nglsync` | Reset password: School or NGLSync sign-in | Reset branch state | chooser only | Distinct school-managed branch |
| `/help/sign-in-account/reset-password/not-sure` | Reset password: Not sure | Reset branch state | chooser or school / NGLSync branch | Recovery / identification branch |
| `/article/reset-cengage-password` | Cengage account reset article | Help Article | chooser only | Shared-account reset instructions inside the prototype |
| `/article/:slug` | Help Article | Content page | search results, product hubs, related links | Primary answer-object template |
| `/support` | Contact Support | Fallback page | quiet fallback links, secondary navigation | Self-service-first support destination |
| `/product/:productSlug` | Product Hub | Product destination | homepage browse by product, article/product links | Canonical product help hub; role-aware within the page |

## Homepage Destinations

| Homepage element | Canonical destination | Current prototype target | Notes |
|---|---|---|---|
| Search submit | `/search?q=:query` | `#search-results` | Search remains the primary action |
| Popular links | `/search?q=:query` or a more specific guided route | `#reset-password-chooser`, `#access-code-chooser`, `#error-sync-chooser`, and `#browser-system-chooser` for currently modeled shortcuts | Popular links should accelerate search/discovery or route to a truthful chooser when the answer needs clarification |
| `Sign In & Account Help` card | `/help/sign-in-account` | `#sign-in-account` | Canonical help-domain hub |
| `Course Access & Enrollment` card | `/help/course-access-enrollment` | `#course-access-enrollment` | Canonical help-domain hub |
| `Troubleshooting & Common Problems` card | `/help/troubleshooting-common-problems` | `#troubleshooting-common-problems` | Canonical help-domain hub |
| Common problems links | `/search?...` with query and/or facets | `#search-results` | Shortcuts into filtered discovery |

## Browse By Role Destinations

Role is a facet, not a top-level object. These destinations should all resolve to filtered discovery under `/search`, never to `/role/*` hubs.

Homepage browse-by-role clicks should open Search Results with the matching role filter applied.

| Role facet | Canonical destination |
|---|---|
| Higher Ed Student | `/search?role=higher-ed-student` |
| Higher Ed Instructor | `/search?role=higher-ed-instructor` |
| K-12 Student | `/search?role=k-12-student` |
| K-12 Teacher | `/search?role=k-12-teacher` |
| Primary Student | `/search?role=primary-student` |
| Secondary Student | `/search?role=secondary-student` |
| LMS Administrator | `/search?role=lms-administrator` |
| Institutional Administrator | `/search?role=institutional-administrator` |

### Role-Label Amendment
- `Institutional Administrator` replaces the current `School Administrator` stand-in in the shared homepage and Search Results role model.
- Do not keep both active in that shared role model unless a later explicit IA decision confirms that they are intentionally distinct destinations for this prototype.

## Browse By Product Destinations

Products route to canonical product hubs.

| Product | Canonical destination | Current prototype target | Notes |
|---|---|---|---|
| MindTap | `/product/mindtap` | `#product-hub-mindtap` | Implemented product hub prototype |
| WebAssign | `/product/webassign` | `#product-hub-webassign` | Implemented product hub prototype |
| SAM | `/product/sam` | `#product-hub-sam` | Implemented product hub prototype |
| Spark | `/product/spark` | `#product-hub-spark` | Implemented product hub prototype |

## Help-Domain Destinations

| Help-domain entry | Canonical destination | Current prototype target | Notes |
|---|---|---|---|
| Sign In & Account Help | `/help/sign-in-account` | `#sign-in-account` | Full help-domain hub exists |
| Course Access & Enrollment | `/help/course-access-enrollment` | `#course-access-enrollment` | Full help-domain hub exists |
| Troubleshooting & Common Problems | `/help/troubleshooting-common-problems` | `#troubleshooting-common-problems` | Full help-domain hub exists |

## Reset-Password Flow

### Entry
All password-reset journeys begin at:

`/help/sign-in-account/reset-password`

Current prototype preview target:

`#reset-password-chooser`

### Branch States

| User choice | Canonical destination | Current prototype target | Outcome |
|---|---|---|---|
| With a Cengage account | `/article/reset-cengage-password` | `#help-article?article=reset-cengage-password` | Shared Cengage-account reset article |
| Through my LMS | `/help/sign-in-account/reset-password/lms` | `#reset-password-lms` | LMS-managed instructions |
| Through my school or NGLSync portal | `/help/sign-in-account/reset-password/school-nglsync` | `#reset-password-school-nglsync` | School-managed branch |
| I'm not sure | `/help/sign-in-account/reset-password/not-sure` | `#reset-password-not-sure` | Identification / recovery branch |

### School / NGLSync Sub-branch Notes
- `School portal sign-in` and `NGLSync sign-in` are distinct content paths conceptually.
- In the current prototype, both remain non-interactive rather than falling through to Search Results.
- `I'm not sure` from this branch correctly routes to the not-sure branch.

## Support Page Destinations

Support stays secondary and should first route users back into self-service.

| Support page element | Canonical destination | Current prototype target | Notes |
|---|---|---|---|
| Contact Support page | `/support` | `#support-page` | Secondary fallback destination |
| `Sign In & Account Help` self-service card | `/help/sign-in-account` | `#sign-in-account` | Preferred self-service route |
| `Reset password` self-service card | `/help/sign-in-account/reset-password` | `#reset-password-chooser` | Starts reset flow correctly |
| `LMS and school sign-in help` self-service card | `/help/sign-in-account/reset-password/not-sure` or `/help/sign-in-account/reset-password/school-nglsync` depending on copy intent | `#reset-password-not-sure` | Current prototype uses the not-sure recovery page |
| Support services CTA | support services destination or external action | none | Neutral support-services action, not a live-chat-start route |

## Help Article Destinations

| Article route | Purpose | Current prototype target | Notes |
|---|---|---|---|
| `/article/:slug` | Primary help article template | `#help-article` for the current sample article | Search results and product hubs should land here |
| `/article/sign-in` | Example seeded article route | route label shown in preview switcher | Current sample article displayed by the preview switcher |

### Article Linking Rule
- Article links should go to direct article destinations when those articles exist.
- If a direct article destination does not exist yet, the link should stay non-interactive rather than defaulting to Search Results.

## Product Hub Destinations

| Product hub route | Purpose | Current prototype target | Notes |
|---|---|---|---|
| `/product/:productSlug` | Canonical product help hub | `#product-hub-mindtap`, `#product-hub-webassign`, `#product-hub-sam`, or `#product-hub-spark` depending on product | Product-first destination |
| `/product/mindtap` | MindTap hub | `#product-hub-mindtap` | Implemented hub |
| `/product/webassign` | WebAssign hub | `#product-hub-webassign` | Implemented hub |
| `/product/sam` | SAM hub | `#product-hub-sam` | Implemented hub |
| `/product/spark` | Spark hub | `#product-hub-spark` | Implemented hub |

### Product-Hub State Rule
- Role changes inside a product hub stay in-page, for example `Student`, `Instructor`, and `LMS Administrator` tabs on MindTap.
- Do not introduce separate routes such as `/product/mindtap/student` or `/student/mindtap`.

### Product-Hub Deep-Link Rule
- Product-hub cards, deep links, and resource links should resolve to direct product destinations when those destinations exist.
- If the destination does not exist yet, the item stays non-interactive.
- Product hubs must not use Search Results as a generic placeholder for unfinished deep links.

## Preview Switcher / Prototype-Only Routes

The current prototype does not use a real router. `src/App.tsx` renders pages from a hash-based preview switcher, and the `route` values shown in the UI are display labels rather than active browser-path routing.

| Preview hash | Displayed route label | Page |
|---|---|---|
| `#homepage` | `/` | Homepage |
| `#search-results` | `/search` | Search Results |
| `#help-article` | `/article/sign-in` | Help Article sample |
| `#sign-in-account` | `/help/sign-in-account` | Sign In & Account Help |
| `#course-access-enrollment` | `/help/course-access-enrollment` | Course Access & Enrollment |
| `#troubleshooting-common-problems` | `/help/troubleshooting-common-problems` | Troubleshooting & Common Problems |
| `#wrong-account-chooser` | `/help/sign-in-account/wrong-account` | Wrong account chooser |
| `#browser-system-chooser` | `/help/troubleshooting-common-problems/browser-system` | Browser/system chooser |
| `#lms-link-chooser` | `/help/troubleshooting-common-problems/lms-link-not-working` | LMS link chooser |
| `#missing-activities-chooser` | `/help/troubleshooting-common-problems/missing-activities` | Missing activities chooser |
| `#missing-content-chooser` | `/help/troubleshooting-common-problems/missing-content` | Missing content chooser |
| `#support-page` | `/support` | Contact Support |
| `#product-hub-mindtap` | `/product/mindtap` | MindTap product hub |
| `#product-hub-webassign` | `/product/webassign` | WebAssign product hub |
| `#product-hub-sam` | `/product/sam` | SAM product hub |
| `#product-hub-spark` | `/product/spark` | Spark product hub |
| `#reset-password-chooser` | `/help/sign-in-account/reset-password` | Reset password chooser |
| `#reset-password-lms` | `/help/sign-in-account/reset-password/lms` | LMS reset branch |
| `#reset-password-school-nglsync` | `/help/sign-in-account/reset-password/school-nglsync` | School / NGLSync branch |
| `#reset-password-not-sure` | `/help/sign-in-account/reset-password/not-sure` | Not sure branch |

## Current Prototype Notes
- Most internal navigation currently uses preview hashes, not path-based routes.
- Search Results is now limited to intentional discovery behavior rather than acting as a generic fallback.
- `Course Access & Enrollment` and `Troubleshooting & Common Problems` are now live help-domain destinations in the preview-switcher runtime.
- `Wrong account`, `LMS link not working`, and `Missing activities` now demonstrate relationship-based routing through lightweight guided-routing pages instead of forcing false-direct article jumps.
- `Browser requirements` and other global browser/device homepage shortcuts now route through `#browser-system-chooser` before any product-specific article.
- `#missing-content-chooser` is a non-interactive product-aware scaffold until direct product-specific missing-content, eBook, or course-material article coverage or approved destinations exist.
- Many unresolved destinations are intentionally rendered as non-interactive so they do not imply unfinished navigation.
- Homepage product cards for MindTap, WebAssign, SAM, and Spark now route to live product hubs.
- Product-specific rows on `Course Access & Enrollment` and `Troubleshooting & Common Problems` now route to the same live product hubs.
- Breadcrumbs and internal preview navigation now use the hash-based preview-switcher model consistently.
- The reset-password chooser's `With a Cengage account` branch now routes to the shared internal article `#help-article?article=reset-cengage-password`.
