# Homepage Design Spec

## Purpose
The homepage is the primary search-first entry point for the merged Cengage Help + ELT prototype.

Its job is to:
- make search the clearest primary action
- offer a small number of self-service discovery paths after search
- keep support secondary
- reinforce shared help domains across products and access methods
- provide clean entry points into canonical product hubs and filtered discovery without turning the homepage into a directory

## Source Priority
1. Approved homepage target screenshot
2. IA rules in root `AGENTS.md` and `/docs`
3. Files in `design-reference/`
4. Existing homepage implementation only as fallback/reference

## IA Rules That Must Not Change
- Search is primary
- Support is fallback
- Role is a facet, not a top-level object
- Browse by product goes to canonical product hubs
- Browse by role goes to filtered discovery, not role hubs
- No homepage content-type dropdown such as Articles / FAQs / Guides
- Do not add or remove major homepage sections unless the approved design clearly requires it
- Homepage remains a shared entry point, not a product-first or role-first page

## Overall Layout
- Centered desktop container
- Overall page width feels around `1200px`
- Light neutral page background with thin dividing rules between major vertical bands
- The page reads as one calm, consistent product UI surface, not a set of isolated promo modules
- Visual rhythm is:
  - hero/search-first block
  - help-domain cards
  - common problems
  - coordinated lower discovery section containing browse by role and browse by product
- Density should be moderate and clean:
  - tighter than a wireframe
  - flatter and quieter than earlier prototype directions
  - more direct than editorial

## Page Section Order
1. Hero / search-first block
2. Help domains
3. Common problems by audience
4. Coordinated lower discovery section
   - Browse by role
   - Browse by product

## Hero
### Role
The hero should immediately communicate that search is the fastest way to get help.

### Layout
- Hero sits in a light neutral band across the page width
- Desktop layout is simple and horizontal, but it should not feel like a dramatic split marketing hero
- The heading, supporting copy, search row, and popular links should read as one compact flow
- Search area may sit to the right on desktop, but it should not read as a strongly separated card or secondary panel
- Avoid a boxed “promo block” feeling

### Content
- No prominent hero kicker is required in the approved target
- Primary heading:
  - `How can we help you?`
- Supporting copy should emphasize:
  - search first
  - then browse by help domain, role, or product if needed
- Support should not be framed as a co-equal primary action in hero copy

### Search Row
- One row on desktop:
  - search input
  - blue `Search` button
- No homepage content-type dropdown
- Popular links appear directly below the search row
- Popular links are visually subordinate and compact

### Hero Visual Goals
- Flatter
- Simpler
- Less stylized
- More direct
- Less empty space
- Search-first rather than promo-first

## Help Domains
### Purpose
Offer the first set of shared self-service pathways after search.

### Heading Structure
- Keep parent framing minimal
- Avoid overbuilding this section with extra editorial hierarchy
- The section should read primarily through the cards themselves

### Cards
Three cards in one row on desktop:
1. Sign In & Account Help
2. Course Access & Enrollment
3. Troubleshooting & Common Problems

### Each Card Should Include
- small icon tile
- title
- short descriptive sentence
- quick links
- one stronger text action at the bottom

### Card Treatment
- Flatter and quieter than a polished reusable “feature tile”
- Tight internal spacing
- Even heights
- Thin borders
- Subtle radius
- Very light or no shadow
- Content should stack naturally:
  - icon + title
  - description
  - quick links
  - bottom action

### Card Content Notes
- Quick links should feel like direct support-topic shortcuts, not metadata
- Bottom action should feel stronger than the quick links, but still textual rather than button-like
- Cards should feel like one shared support-card family, not three separately styled components

## Common Problems
### Purpose
Offer audience-based self-service issue shortcuts after help domains.

### Structure
- Simpler framing than earlier spec versions
- Avoid unnecessary parent editorial hierarchy
- The two audience groupings do most of the work visually
- Two side-by-side groups on desktop:
  - Common problems for instructors
  - Common problems for students

### Content
Each audience group includes:
- audience heading
- bordered issue panel beneath
- vertical list of links

### Visual Treatment
- Lighter and plainer than the help-domain cards
- Cleaner bordered panels
- Minimal decorative styling
- Audience headings should be clear, but the panels should feel quiet and utilitarian

### Rules
- This remains self-service discovery
- Do not turn it into support escalation
- Do not wrap it in heavy extra hierarchy if the target does not show it

## Browse by Role
### Purpose
Role narrows discovery and relevance.

### Heading Structure
- Keep hierarchy simple
- Use a plain heading and one short explanatory line
- Avoid overframing with extra editorial layers unless clearly shown

### Interaction Style
- Lightweight horizontal pill sequence
- Neatly aligned pills in a controlled row/wrap pattern
- Not stacked list rows
- Not a free-flow chip cloud
- Not a role directory

### Roles
- Higher Ed Student
- Higher Ed Instructor
- K–12 Student
- K–12 Teacher
- Primary Student
- Secondary Student
- LMS Administrator
- Institutional Administrator

### Role Rules
- These remain role facets for filtered discovery, not top-level destinations.
- Homepage role clicks should open Search Results with the matching role filter already applied.
- `Institutional Administrator` replaces the current `School Administrator` stand-in in the shared homepage role model unless a later explicit IA decision keeps both roles intentionally distinct.

### Visual Goals
- Pills should feel consistent, clean, and evenly spaced
- This area should feel quieter than browse by product
- Role should clearly read as a facet/discovery aid, not a top-level destination system

## Browse by Product
### Purpose
Provide strong entry points to canonical product hubs.

### Heading Structure
- Plain heading and one short supporting line
- Keep hierarchy simple and aligned with browse by role

### Layout
- Strong 4-up row on desktop:
  - MindTap
  - WebAssign
  - SAM
  - Spark
- These should read as substantial homepage cards, not stacked mini-cards and not a 2-column desktop grid

### Card Treatment
- Product name leads strongly
- Supporting copy is quieter beneath
- Cards feel larger and more substantial than role pills
- Cards should align closely with each other in size and rhythm
- Border/radius treatment should stay understated

### Rules
- These are canonical product-hub entry points
- Do not weaken this area into a plain directory
- Do not let it read like separate mini-sites on the homepage

## Visual Style Guidance
- Overall hierarchy should be quieter and simpler than the previous spec
- Reduce editorial framing layers
- Reduce repeated uppercase labels where the approved target does not show them
- Typography should feel direct, not overdesigned
- Hero should feel flatter and more integrated
- Help-domain cards should feel flatter and quieter
- Common-problem panels should feel lighter than help-domain cards
- Browse-by-role should feel lighter than browse-by-product
- Browse-by-product should feel like the strongest element in the lower section
- The whole page should feel like one coherent design language, not a mix of prototype directions

## Spacing Guidance
### Overall
- Keep vertical spacing compact and deliberate
- Use thin divider lines to separate major homepage bands
- Avoid large empty transitional gaps

### Hero
- Tight spacing between heading, supporting text, search row, and popular links
- Keep the hero compact enough that it feels like a search-first block, not a promo banner

### Help Domains
- Tight spacing inside cards
- Moderate spacing between cards
- Keep the section close to the hero divider without feeling cramped

### Common Problems
- Tight spacing between audience headings and panels
- Keep panels visually simple and not oversized

### Lower Discovery Section
- Browse-by-role and browse-by-product should feel coordinated
- Use shared vertical rhythm and aligned top edges
- Product cards should have more visual weight, but the two sides should still feel part of one lower section

## Must Match
- Search-first homepage purpose
- Flat, direct hero treatment
- Compact flow of heading, copy, search row, and popular links
- No homepage content-type dropdown
- Three flatter help-domain cards in one desktop row
- Common problems grouped by audience with lighter bordered panels
- Browse-by-role as a neat horizontal pill sequence
- Browse-by-product as a strong 4-up row of substantial cards
- Lower role/product area feeling coordinated rather than unrelated
- Support remaining secondary

## Can Approximate
- Exact icon glyphs
- Exact font metrics
- Exact border weights
- Exact micro-spacing
- Exact card heights as long as the overall grouping and hierarchy hold

## Do Not Copy
From earlier rough implementations, previous spec interpretations, or generic help-site defaults, do **not** copy:
- strongly split promo-style hero treatment
- prominent right-hand search-card feeling
- too many uppercase section labels
- overbuilt editorial framing around each section
- polished reusable-tile styling that makes help-domain cards feel too generic
- heavy common-problems framing
- stacked role rows
- free-flow role chip clouds
- 2-column or stacked mini-card browse-by-product layouts
- weak/simple product directory treatment
- support-forward homepage language

## Reviewer Checklist
Use this when reviewing implementation:
- Does the hero read as flatter, simpler, and more direct than earlier versions?
- Do heading, supporting copy, search row, and popular links feel like one compact flow?
- Is search still clearly the dominant action?
- Are major homepage sections still present and in the correct order?
- Do help-domain cards feel flatter and quieter than before?
- Do common-problem groupings feel lighter and simpler?
- Does browse-by-role read as a neat horizontal pill sequence rather than rows or a chip cloud?
- Does browse-by-product read as a strong 4-up set of substantial product cards?
- Do browse-by-role and browse-by-product feel coordinated as one lower section?
- Does the overall page feel visually consistent with the approved target rather than a mix of prototype directions?
