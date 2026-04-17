# Help + Spark Role Mapping

## Purpose
This document maps deeper Help and ELT role vocabulary into the smaller visible role model used by the prototype.

Use it with:
- `docs/help-spark-relationship-model.md`
- `docs/routing-matrix.md`
- `docs/object-map.md`

Core rule:
- deeper roles improve routing, metadata, and filtering
- they do not become separate hubs or route families

## Visible Prototype Role Model
The visible prototype role model stays limited to:
- `Higher Ed Student`
- `Higher Ed Instructor`
- `K–12 Student`
- `K–12 Teacher`
- `Primary Student`
- `Secondary Student`
- `LMS Administrator`
- `Institutional Administrator`

## Mapping Rules
- Collapse student variants into the correct visible learner role or Spark state.
- Collapse educator, instructor, and teacher variants into the correct visible instructor role or Spark state.
- Collapse IT/LMS admin variants into `LMS Administrator`.
- Collapse school admin / coordinator variants into `Institutional Administrator`.
- Keep narrow delivery or institution variants as metadata, search, or admin signals unless they clearly deserve visible runtime behavior.

## Role Mapping Table

| Legacy role vocabulary | Prototype mapping | Main behavior | Notes |
|---|---|---|---|
| `student` | visible role depends on segment or Spark context | search facet, article metadata, Spark hub state | Parent learner role, not a standalone homepage pill |
| `higher-ed student` / `he-student` | `Higher Ed Student` | visible shared facet | Direct match to current runtime |
| `K-12 student` / `k12-student` | `K–12 Student` | visible shared facet | Direct match to current runtime |
| `primary school student` | `Primary Student` in shared discovery; `Student` in Spark hub | visible facet plus metadata | Age band matters in the shared ELT layer, not as a separate Spark hub |
| `secondary school student` | `Secondary Student` in shared discovery; `Student` in Spark hub | visible facet plus metadata | Same rule as above |
| `language-school student` | `Primary Student` or `Secondary Student` depending on audience; `Student` in Spark hub | metadata, segment signal, search weighting | Keep language-school nuance out of visible role architecture |
| `continuing education student` | `Secondary Student` or metadata only | metadata, search weighting | Adult-learning nuance matters more to relevance than navigation |
| `self-directed student` | metadata only | chooser context, article metadata | Important for access-pathway nuance, not visible role UI |
| `educator` / `instructor` / `teacher` | visible role depends on segment or Spark context | shared facet, metadata, Spark hub state | Parent teaching role, not a separate site family |
| `higher-ed educator` / `he-educator` | `Higher Ed Instructor` | visible shared facet | Direct match to current runtime |
| `K-12 educator` / `k12-educator` | `K–12 Teacher` | visible shared facet | Direct match to current runtime |
| `primary school educator` | `K–12 Teacher` or metadata only | metadata, search weighting | Keep under one K–12 teaching role |
| `secondary school educator` | `K–12 Teacher` or metadata only | metadata, search weighting | Same rule as above |
| `language-school educator` | `Instructor` in Spark hub; metadata in shared discovery | Spark hub state, metadata | Useful for Spark relevance, not for a separate shared role pill |
| `IT/LMS administrator` | `LMS Administrator` | visible shared facet, search filter, article metadata | Strong cross-product discovery role |
| `school administrator/coordinator` | `Institutional Administrator` | visible shared facet, Spark hub state, metadata | Strongest school-setup and provisioning role |
| `language school administrator/coordinator` | `Institutional Administrator` plus metadata | visible shared facet in Spark contexts, metadata | Keep language-school nuance as metadata, not new visible role |
| `bookstore`, `retail`, `library`, `government`, `business`, `author` | metadata only | metadata, future filtering | Out of scope for the current visible prototype role model |

## By Behavior Type

### Visible shared facet
Use visible shared roles for:
- `Higher Ed Student`
- `Higher Ed Instructor`
- `K–12 Student`
- `K–12 Teacher`
- `Primary Student`
- `Secondary Student`
- `LMS Administrator`
- `Institutional Administrator`

### Visible product-hub state
Use in-page Spark hub state for:
- `Student`
- `Instructor`
- `Institutional Administrator`

Do not add:
- a separate `LMS Administrator` Spark tab
- separate `Primary Student` and `Secondary Student` Spark tabs

### Search facet only
Use search filtering when the role helps discovery but should not become a hub or product tab:
- `LMS Administrator`
- segment-specific admin variants
- broad learner/teacher parent roles

### Metadata only
Use metadata when the nuance helps relevance but not visible UI:
- language-school variants
- self-directed variants
- continuing-education variants
- bookstore, distributor, library, or business roles

### Institution/admin signal
Use institution/admin context when the issue belongs to setup, provisioning, LMS integration, or course management:
- `Institutional Administrator`
- `LMS Administrator`
- school or district coordinator variants

## Practical Routing Implications

### Shared discovery
- Role pills and Search Results filters stay simple.
- Deeper vocabulary changes relevance, not page families.

### Spark
- Spark uses one learner state, one instructor state, and one institutional-admin state.
- Age-band learner differences stay in discovery and metadata, not in Spark navigation architecture.

### LMS admin
- LMS-admin work is usually article-first or filtered-search-first.
- LMS admin should not become a parallel product-hub architecture.

## Guardrails
- Do not recreate the taxonomy as visible role browse.
- Do not create `/role/*` routes.
- Do not split product hubs by role into separate pages.
- Prefer one visible role plus metadata over several near-duplicate visible roles.
