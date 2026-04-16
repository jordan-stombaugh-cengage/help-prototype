# ELT + Spark Role Mapping

## Purpose
This document maps legacy ELT role language into the current prototype’s routing behavior for `Spark`.

Use it with:
- `docs/object-map.md`
- `docs/routing-matrix.md`
- `docs/elt-spark-routing-model.md`

## Role Mapping Rules
- Role is not a top-level site family.
- Product hubs may use role as in-page state.
- Search may use role as a facet.
- Articles may carry role in metadata.
- Deeper taxonomy roles should collapse unless the frozen shared role model already exposes them.

## Core Role Mapping

| Legacy role language | Prototype visible UI role | Primary behavior in prototype | Main surfaces | Notes |
|---|---|---|---|---|
| `Student` | `Student` inside Spark hub; `Primary Student` or `Secondary Student` for shared discovery when needed | Spark hub state plus shared search filtering | Spark hub, homepage/search role filters, article metadata | Shared discovery can split by age band; Spark itself should stay one student state |
| `Instructor` / `Educator` / `Teacher` | `Instructor` | Product-specific hub state first; metadata second | Spark hub, article metadata | Do not create a separate ELT instructor site family |
| `IT/LMS administrator` | `LMS Administrator` | Search/filter-first role plus LMS/integration article relevance | Homepage/search role filters, article metadata | Usually not a default Spark hub tab |
| `School administrator/coordinator` / `Institutional administrator` | `Institutional Administrator` | Shared discovery facet plus Spark institutional-admin state | Homepage/search role filters, Spark hub, article metadata | Strong `institution + product` relationship |

## Deeper ELT Taxonomy Mapping

| Legacy taxonomy role | Collapse or keep | Prototype handling | Where it should appear | Notes |
|---|---|---|---|---|
| `language school student` | collapse | usually `Secondary Student` for shared discovery and `Student` in Spark | search facet mapping, article metadata | Keep language-school nuance in metadata if helpful |
| `primary school student` | keep as visible shared facet | `Primary Student` | homepage/search role filters, article metadata | Already approved in the frozen shared role model |
| `secondary school student` | keep as visible shared facet | `Secondary Student` | homepage/search role filters, article metadata | Already approved in the frozen shared role model |
| `continuing education student` | collapse | `Secondary Student` or metadata-only student subtype | article metadata, optional search weighting | Do not create a new visible role |
| `self-directed student` | collapse | metadata-only student subtype | article metadata | May matter later for access-pathway logic, not for visible role UI |
| `home school student` | collapse | metadata only unless future IA promotes it | article metadata | Not a visible role today |
| `language school educator` | collapse | `Instructor` hub state plus metadata subtype | Spark hub, article metadata | Do not create a separate role pill |
| `primary school educator` | collapse | `Instructor` plus metadata | Spark hub, article metadata | The current frozen role model does not expose it |
| `secondary school educator` | collapse | `Instructor` plus metadata | Spark hub, article metadata | Same rule as above |
| `IT/LMS administrator` | keep as visible shared facet | `LMS Administrator` | homepage/search role filters, article metadata | Best for cross-product discovery and LMS setup relevance |
| `school administrator/coordinator` | keep as visible shared facet and Spark state | `Institutional Administrator` | homepage/search role filters, Spark hub, article metadata | Strongest for school setup and provisioning |
| `school-admin-language` | collapse into visible institutional role | `Institutional Administrator` | Spark hub, article metadata | Keep language-school nuance in metadata only |

## Search Facets Vs Hub State Vs Article Metadata

### Visible search facets
Use role as a visible search facet when it helps shared discovery across products, articles, and domains.

Current ELT-relevant visible search facets:
- `Primary Student`
- `Secondary Student`
- `LMS Administrator`
- `Institutional Administrator`

Rules:
- keep these at the shared discovery layer
- do not turn them into role hubs
- do not mirror every deeper legacy ELT role label in visible UI

### Spark hub states
Use role as Spark hub state when the user already knows they are in Spark and needs product-specific help.

Current Spark hub states:
- `Student`
- `Instructor`
- `Institutional Administrator`

Rules:
- state changes stay in-page
- do not create separate routes for these states
- do not split Spark into separate `Primary Student` and `Secondary Student` mini-sites
- do not add `LMS Administrator` as a default Spark hub state unless the frozen system changes

### Article metadata
Use role metadata when the content needs a more precise audience label than the visible UI should expose.

Good metadata-only examples:
- `language school student`
- `language school educator`
- `school-admin-language`
- `continuing education student`
- `self-directed student`

Rules:
- metadata can be more specific than the visible role UI
- metadata should improve search relevance and applicability labeling
- metadata alone does not justify a new homepage role or product-hub tab

## Practical Role Decisions

### Student
- shared discovery can split into `Primary Student` and `Secondary Student`
- Spark itself should stay one `Student` hub state
- primary or secondary distinctions belong in article metadata, copy, and relevance more than in hub architecture

### Instructor
- treat as one Spark hub state
- use metadata and product context for discovery
- do not create a separate shared ELT instructor homepage role under the current frozen model

### LMS Administrator
- treat as a shared systems and integration role, not a standard Spark tab
- strongest destinations are filtered search and LMS/setup articles
- Spark product context may matter, but LMS admin work usually spans `institution + LMS + product`

### Institutional Administrator
- treat as the visible institutional ELT admin role
- use it in both shared discovery and Spark hub state
- `school administrator` and `coordinator` language should collapse into this visible prototype role

## Label Cleanup Rule
When legacy ELT sources use:
- `School Administrator`
- `School Administrator/Coordinator`
- `Institutional Admin`
- `Institutional Administrator`

Prototype handling:
- visible shared role = `Institutional Administrator`
- legacy wording remains source evidence or metadata only

This aligns with the already approved replacement of the older `School Administrator` stand-in in the shared role model.

## MyELT Role Handling
For `MyELT`, keep role labels only as source and mapping evidence.

Use them to:
- identify which Spark or shared-domain role they should map into
- extract article applicability and metadata
- explain legacy-to-future routing choices

Do not use them to:
- justify a new live MyELT role architecture
- preserve `MyELT student` or `MyELT instructor` as separate future-state destinations
