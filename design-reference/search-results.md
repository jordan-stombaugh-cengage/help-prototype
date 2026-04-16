# Search Results Design Spec

## Purpose
The search results page is the primary answer-discovery page for the merged Cengage Help + ELT prototype.

Its job is to:
- present article-first results
- help users refine results through metadata and facets
- keep support secondary
- reinforce that search is the main wayfinding mechanism

## Source Priority
1. Approved search results design frame
2. IA rules in `AGENTS.md` and `/docs`
3. Existing search results implementation
4. Legacy help repos only as terminology/reference sources

## IA Rules That Must Not Change
- Results are article-first
- Search is primary
- Support is fallback
- Role is a facet, not a top-level object
- Product is a facet and a route to product hubs, not a separate search silo
- No homepage-style content-type dropdown
- Do not turn the page into browse-by-type navigation
- Do not add sections not listed in this spec

## Overall Layout
- Centered desktop container
- Max width: about 1200px
- Clear 2-column desktop layout:
  - left filter rail
  - right results column
- Dense, scannable, product-like UI
- Strong hierarchy, not airy marketing spacing

## Page Structure Order
1. Search query header
2. Results count / sort context
3. Filter rail
4. Results list
5. Pagination or load-more placeholder if needed

## Header / Query Area
### Purpose
Reinforce what the user searched and how many results were found.

### Content
- Small label above the main heading if needed
- Main search query as the heading, for example:
  - `reset password`
- Results count nearby, for example:
  - `47 results`
- Optional sort control may appear near the top of results, but it should not dominate

### Rules
- Keep this area compact
- Do not make it feel like a homepage hero
- The search term should be the clearest focal point

## Filter Rail
### Purpose
Help users narrow the result set by metadata and context.

### Desktop Layout
- Left-hand column
- Visually distinct but not visually louder than the results
- Compact stacked filter groups

### Filter Groups
Include:
- Role
- Product
- Sign-in path
- Education segment
- Last updated

### Rules
- Filters are refinements, not primary navigation
- Filters should feel lightweight and functional
- Do not include a content-type selector here unless explicitly needed in a later version
- Facets should reinforce the object model and routing logic

### Filter Behavior Intent
- Role narrows relevance
- Product narrows relevance
- Sign-in path is especially important for account/reset flows
- Education segment helps merged Cengage + ELT discovery
- Last updated supports freshness scanning

### Role Facet Coverage
The shared role filter model should include:
- Higher Ed Student
- Higher Ed Instructor
- K–12 Student
- K–12 Teacher
- Primary Student
- Secondary Student
- LMS Administrator
- Institutional Administrator

### Route-Driven Role Filtering
- These role facets can be pre-applied when the user clicks Browse by role from the homepage.
- That behavior remains filtered discovery under Search Results, not role-hub routing.

## Results List
### Purpose
Present helpful answers first, not a directory of unrelated resource types.

### Result Type
Primary result unit is a help article card/list item.

### Result Order
- Best match can be highlighted at the top when appropriate
- Remaining results follow in a simple vertical list

### Each Result Should Include
- Title
- Short summary/description
- Metadata row
- Optional “Best match” treatment for the top result

### Metadata Can Include
- Role
- Product
- Sign-in path
- Education segment where relevant
- Last updated

### Rules
- Results should feel compact and highly scannable
- Titles should dominate each result card
- Metadata should support fast triage, not overwhelm the card
- Results should not feel like homepage cards reused blindly

## Best Match Treatment
### Purpose
Call out the most likely answer without turning the page into a featured-content layout.

### Rules
- Use a lightweight badge or label
- Keep it visually subordinate to the result title
- Only one result should receive this treatment in the prototype unless a later use case proves otherwise

## Search Page Visual Goals
- Denser and more utilitarian than the homepage
- Strong scanability
- Clear left/right structure
- Compact spacing within result cards
- Compact filter group spacing
- Strong title hierarchy
- Metadata visually quieter than titles and descriptions

## Spacing Guidance
### Overall
- Reduce vertical looseness
- Tighten filter group spacing
- Tighten result-card internal spacing
- Keep result cards visually distinct without oversized padding

### Density Goals
- Header: compact
- Filter rail: compact
- Results list: medium density
- Metadata: compact

## Responsive Behavior Intent
### Desktop
- 2-column layout with left filter rail and right results list

### Tablet / Narrower Width
- Filter rail may stack above results if needed
- Preserve order and hierarchy

### Mobile
- Filters may collapse or stack, but the prototype does not need full production behavior yet

## Support Rules
- Support should not dominate the page
- Do not add major support callouts in the main results area
- If support appears at all, it should be secondary and low-emphasis

## Must Match
- Query-first search header
- Left filter rail
- Article-first vertical results list
- Best-match treatment for top result
- Facets for role, product, sign-in path, education segment, and last updated
- Dense, scannable layout
- No homepage-style content-type dropdown

## Can Approximate
- exact iconography
- exact sort UI behavior
- exact pagination behavior
- exact border/shadow values
- exact metadata wording if prototype content needs simplification

## Do Not Copy
From earlier rough implementations or legacy patterns, do **not** copy:
- homepage hero styling
- content-type dropdown search model
- role-first navigation framing
- large marketing-card spacing
- over-prominent support actions
- weak metadata treatment that makes all results look the same

## Reviewer Checklist
Use this when reviewing implementation:
- Does the page read immediately as search results, not a landing page?
- Is the query clear and prominent?
- Is the layout clearly filter rail + results list?
- Are results article-first?
- Is the top result clearly but lightly marked as best match?
- Are filters useful and metadata-driven?
- Does the page feel dense and scannable?
- Is metadata helpful but secondary?
- Is support still secondary?
- Is there no content-type dropdown?
