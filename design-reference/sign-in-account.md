# Sign In & Account Help Design Spec

## Purpose
The Sign In & Account Help page is the shared domain page for account access issues in the merged Cengage Help + ELT prototype.

Its job is to:
- provide a clear shared entry point for password reset, account access, and sign-in help
- keep the most common direct account issues first
- route users to alternate sign-in paths when access is managed by an LMS or school portal
- support shared account/sign-in help across products, ecosystems, and access methods without turning the page into a directory
- keep support secondary to self-service

## Source Priority
1. Approved Sign In & Account Help design frame
2. IA rules in `AGENTS.md` and `/docs`
3. Existing implementation only as fallback/reference

## IA Rules That Must Not Change
- This is a shared help-domain page, not a product page or role hub
- Common account issues come first
- Other sign-in methods come second
- Support is fallback, not primary
- Role is a facet, not a role hub
- Reset password remains routing logic, not a single flat article
- Direct Cengage account password reset should still hand off externally at the appropriate routing step
- LMS and school-managed sign-in paths should guide users into the correct routing/instruction flow
- Do not add sections not present in the design

## Overall Layout
- Centered desktop container
- Outer page width should feel consistent with the homepage and search-results pages, around a `1200px` max-width shell
- Main content sections sit in a slightly narrower centered content column so the page feels focused rather than broad
- Hero sits inside a light neutral band with generous but not airy padding
- Content rhythm is vertical and straightforward:
  - intro band
  - common account help topics
  - other sign-in methods
  - low-emphasis support fallback
- Visual density should be medium:
  - cleaner and denser than a wireframe
  - simpler and calmer than the homepage
  - more destination-page-like than promotional

## Page Section Order
1. Back-link utility row
2. Hero / intro section
3. Common account help topics
4. Other sign-in methods
5. Support fallback

## Hero / Intro Section
### Purpose
Orient the user quickly and frame this page as the shared entry point for account and sign-in help.

### Layout
- A simple back-link utility row appears above the hero
- Back-link should be left aligned and visually quiet
- Hero sits in a light neutral band spanning the main content width
- Desktop hero is a compact horizontal composition:
  - icon tile on the left
  - title and supporting description on the right
- Hero should not behave like a marketing hero or search hero

### Content
- Back-link text:
  - `Back to Help Home`
- Page title:
  - `Sign In & Account Help`
- Supporting description should communicate:
  - password resets
  - account access
  - sign-in issues
  - shared usefulness across Cengage products and sign-in methods

### Icon Treatment
- Small contained icon tile or soft card at the left of the title block
- Icon should reinforce the domain without becoming decorative emphasis
- Keep icon treatment simple, understated, and Magma-compatible

### Visual Goals
- Clear page identity immediately
- Compact and calm
- Strong title hierarchy
- Description should read as supporting context, not body copy
- Back-link should feel like utility navigation, not a primary CTA

## Common Account Help Topics Section
### Purpose
Present the highest-frequency direct account issues first.

### Heading Structure
- Strong section heading
- One short supporting sentence below the heading

Suggested heading:
`Common account help topics`

Suggested supporting line intent:
- Start here for the most common account and sign-in issues

### Layout
- Two-column card grid on desktop
- Four cards total in the approved design
- Cards should be even, compact, and easy to scan
- Grid should feel orderly and balanced rather than masonry-like

### Topics Shown First
1. Reset password
2. Wrong account
3. Forgot username
4. Manage account

### Card Content Structure
Each card should include:
- a strong topic title
- one short explanatory line
- full-card click/tap behavior or clearly card-like destination behavior

### Card Behavior Intent
- `Reset password` should be the clearest, first common-topic entry because it is the most likely starting point
- `Wrong account` should stay near the top because it is another common high-friction issue
- `Forgot username` and `Manage account` remain common but slightly less urgent than password-reset routing
- These should read as self-service topic destinations, not support escalation shortcuts

### Why These Topics Come First
- They are direct account-level problems
- They apply across products
- They are more common than alternate sign-in pathway issues
- They align to the shared account object and routing logic in the repo IA

## Other Sign-in Methods Section
### Purpose
Provide clear alternate entry points for users who do not sign in directly with a Cengage account.

### Heading Structure
- Strong section heading
- One short supporting line underneath

Suggested heading:
`Other sign-in methods`

Supporting line intent:
- If sign-in happens through a school or learning management system, start here

### Layout
- Two cards in one desktop row
- Card styling should match the common-topic cards, with the same general density and treatment
- This section should feel secondary to common account topics, but still clearly available

### Cards
1. `Sign in through LMS`
2. `Sign in through school or NGLSync`

### Content Intent
- `Sign in through LMS`
  - brief examples like Canvas, Blackboard, Moodle, or another LMS
  - should signal that password/account handling may happen through the LMS or institution flow
- `Sign in through school or NGLSync`
  - should signal school portal or NGLSync-managed access
  - should direct users toward the appropriate routing help rather than flattening that path into a generic article

### Routing Implications
- LMS path should align to the LMS branch of the reset-password routing flow
- School / NGLSync path should align to the school / NGLSync branch of the reset-password routing flow
- This page should not perform all branching itself
- The page should hand users into the appropriate next step, not duplicate downstream routing states

## Support Fallback
### Purpose
Offer a clear fallback only after self-service options have been presented.

### Structure
- Appears after the main self-service sections
- Separated by a subtle divider line
- Includes a short prompt and one low-emphasis link/action

### Content Intent
- Prompt like:
  - `Still need help?`
- One link:
  - `Contact Support`

### Rules
- Keep support visually quiet
- Do not present support as a competing primary card or banner
- Do not introduce large support callouts, phone-first framing, or multi-option escalation UI on this page

## Visual Style Guidance
- Stronger page title than section headings
- Section headings should feel solid and readable, but subordinate to the main title
- Supporting copy should be muted and concise
- Cards should use understated borders and subtle radii
- Avoid large shadows or decorative visual effects
- Page should feel polished, quiet, and task-oriented
- Common account topics should feel stronger than other sign-in methods
- Other sign-in methods should feel stronger than support fallback
- Support fallback should be the quietest element in the main content area

## Spacing Guidance
### Overall
- Maintain a compact, steady vertical rhythm
- Keep hero spacing generous enough for clarity, but not tall
- Reduce excess dead space between sections

### Section Spacing
- Moderate spacing between hero and first content section
- Moderate spacing between major sections
- Divider before support fallback should create separation without adding a large gap

### Label / Heading Spacing
- Tight spacing between section heading and supporting sentence
- Title-to-description spacing in the hero should be compact and clean

### Card Spacing
- Tight internal card padding
- Tight title-to-description spacing inside cards
- Moderate grid gaps, enough to keep cards distinct without feeling airy

### Density Goals
- Hero: compact medium density
- Common-topic cards: medium density
- Other sign-in method cards: medium density
- Support fallback: compact and quiet

## Must Match
- Shared Sign In & Account Help page purpose
- Back-link utility row above the hero
- Light neutral hero band with icon, title, and supporting description
- Common account help topics appearing before other sign-in methods
- Two-column desktop card grid for common account topics
- Two-card desktop row for alternate sign-in methods
- Support fallback appearing last and staying secondary
- Reset password, wrong account, forgot username, and manage account as the first common-topic set
- LMS and school / NGLSync represented as distinct alternate sign-in paths

## Can Approximate
- exact icon glyph
- exact pixel spacing
- exact border/shadow values
- exact card height if copy length varies slightly
- exact font metrics if rendering differs slightly from the approved frame

## Do Not Copy
From rough prototype patterns or generic help-site defaults, do **not** copy:
- support becoming primary or visually equal to self-service
- role-first framing or role hubs
- overcomplicated sign-in branching on this page
- flattening LMS and school-managed access into the same generic destination
- oversized airy card spacing
- heavy marketing hero behavior
- large, generic directory-like card grids
- anything that turns this page into a flat list of links without hierarchy

## Reviewer Checklist
Use this when reviewing implementation:
- Does the page read clearly as a shared Sign In & Account Help domain page?
- Is the back-link present and visually quiet?
- Does the hero feel compact, calm, and clearly introductory?
- Is the page title the strongest text on the page?
- Do common account issues appear before alternate sign-in methods?
- Are the four common-topic cards the clearest first destinations?
- Are LMS and school / NGLSync paths clearly separated in the second section?
- Does the page preserve routing intent instead of flattening everything into one level?
- Is support present only as a fallback?
- Do the cards feel compact, even, and refined rather than oversized?
- Does the page preserve the shared-domain IA instead of drifting into product- or role-first framing?
