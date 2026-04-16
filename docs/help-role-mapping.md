# Help Role Mapping

## Purpose
This document maps the deeper Help taxonomy role vocabulary into the smaller visible role model used by the prototype.

Use it with:
- `docs/help-routing-model.md`
- `docs/routing-matrix.md`
- `docs/object-map.md`

Core rule:
- deep taxonomy roles help with metadata, filtering, and routing context
- they do not become separate hubs or route families

## Visible Prototype Role Model
The shared visible role model stays limited to:
- `Higher Ed Student`
- `Higher Ed Instructor`
- `K-12 Student`
- `K-12 Teacher`
- `LMS Administrator`
- `Institutional Administrator`

ELT-only visible roles such as `Primary Student` and `Secondary Student` remain valid in the shared prototype, but they belong to the Spark / ELT routing model rather than the core Help-side role set.

## Mapping Rules
- Collapse broad student roles into the correct visible student facet.
- Collapse educator, instructor, and teacher roles into the correct visible instructor/teacher facet.
- Collapse IT/LMS administrator roles into `LMS Administrator`.
- Collapse school-admin/coordinator roles into `Institutional Administrator`.
- Keep narrow or niche roles as metadata only unless they clearly change search filtering or article applicability.

## Role Mapping Table

| Help taxonomy role | Prototype mapping | Primary usage | Notes |
|---|---|---|---|
| `student` | visible role depends on segment | search filter, article metadata | Parent role only; not shown as a standalone shared homepage pill |
| `he-student` | `Higher Ed Student` | visible role, search filter | Direct match to current shared UI role |
| `k12-student` | `K-12 Student` | visible role, search filter | Direct match to current shared UI role |
| `primary-school-student` | metadata or ELT-only visible variant | metadata, ELT routing | On the Help side this usually collapses under `K-12 Student`; in ELT it may map to `Primary Student` |
| `secondary-school-student` | metadata or ELT-only visible variant | metadata, ELT routing | On the Help side this usually collapses under `K-12 Student`; in ELT it may map to `Secondary Student` |
| `cosmetology-student` | `Higher Ed Student` | search filter, metadata | Treat as postsecondary learner for shared Help routing unless product evidence says otherwise |
| `language-student` | metadata only | metadata, segment signal | Keep out of the shared Help role UI; use in ELT-specific routing only when needed |
| `continuing-education-student` | `Higher Ed Student` | search filter, metadata | Best collapsed into postsecondary learner behavior |
| `self-directed-student` | metadata only | article metadata, chooser context | Important for access-pathway decisions, but not a top-level role pill |
| `home-school-student` | `K-12 Student` | search filter, metadata | Collapse into K-12 unless a later routing need proves otherwise |
| `educator` | visible role depends on segment | search filter, article metadata | Parent role only; not shown as its own shared role |
| `he-educator` | `Higher Ed Instructor` | visible role, search filter | Direct match to current shared UI role |
| `k12-educator` | `K-12 Teacher` | visible role, search filter | Direct match to current shared UI role |
| `primary-school-educator` | `K-12 Teacher` | metadata, search filter | Keep under K-12 teacher rather than adding a separate role |
| `secondary-school-educator` | `K-12 Teacher` | metadata, search filter | Keep under K-12 teacher rather than adding a separate role |
| `cosmetology-school-educator` | `Higher Ed Instructor` | search filter, metadata | Postsecondary-like instructor behavior in shared Help |
| `language-school-educator` | metadata only | metadata, segment signal | Matters more to ELT than to shared Help-side UI |
| `continuing-education-educator` | `Higher Ed Instructor` | search filter, metadata | Best collapsed into postsecondary instructor behavior |
| `home-school-educator` | `K-12 Teacher` | search filter, metadata | Do not create a home-school hub |
| `it-lms-admin` | `LMS Administrator` | visible role, search filter, metadata | Direct match to current shared UI role |
| `it-lms-admin-he` | `LMS Administrator` | metadata, search filter | Segment nuance stays in metadata rather than a new visible role |
| `it-lms-admin-k12` | `LMS Administrator` | metadata, search filter | Same rule as above |
| `school-admin` | `Institutional Administrator` | visible role, search filter, metadata | Replaces older `School Administrator` stand-in in the runtime |
| `school-admin-he` | `Institutional Administrator` | metadata, search filter | Postsecondary admin variant stays folded into the one visible role |
| `school-admin-k12` | `Institutional Administrator` | metadata, search filter | K-12 admin variant stays folded into the one visible role |
| `school-admin-language` | metadata only or `Institutional Administrator` in ELT contexts | metadata, ELT routing | Do not expose as a new shared Help-side role unless a future ELT decision requires it |
| `bookstore*`, `retail-store*`, `government`, `business`, `author`, `library-staff*` | metadata only | article metadata, future filtering | Out of scope for the current visible shared role model |

## Practical Routing Use

### Visible Role
Use a role as visible UI when it already exists in the prototype and supports shared discovery:
- `Higher Ed Student`
- `Higher Ed Instructor`
- `K-12 Student`
- `K-12 Teacher`
- `LMS Administrator`
- `Institutional Administrator`

### Search Filter Only
Use a role as search/filter behavior when it improves discovery but does not need its own page or tab:
- parent `student` / `educator`
- segment-specific admin variants
- self-directed vs teacher-led context when needed indirectly

### Metadata Only
Use a role as metadata only when it adds specificity without needing UI prominence:
- niche institution types
- niche delivery contexts
- bookstore, library, distributor, business, or government roles
- language-school variants on the Help side

### Education-Segment Variant
Use segment or age-band as a secondary modifier rather than a new shared role family:
- higher-ed vs K-12
- primary vs secondary only where the ELT model explicitly surfaces them

## Guardrails
- Do not recreate the deep taxonomy as visible role browse.
- Do not create `/role/*` hubs.
- Do not split product hubs into separate role routes.
- Prefer one visible role plus metadata over several near-duplicate UI roles.
