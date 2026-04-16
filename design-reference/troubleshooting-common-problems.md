# Troubleshooting & Common Problems Design Spec

## Purpose
The Troubleshooting & Common Problems page is the canonical shared-domain destination for common technical problems in the merged Cengage Help + ELT prototype.

Its job is to:
- provide one clear shared entry point for cross-product troubleshooting
- gather the most common technical/self-service problem types before product-specific troubleshooting
- help users quickly identify likely issue patterns without turning the page into a role hub
- connect users to product-specific troubleshooting only when the issue depends on the product experience
- keep support secondary to self-service

This page is a shared help-domain hub, not a product hub, role hub, article template, or support landing page.

## Source Priority
1. Current live implementation in `src/features/troubleshooting-common-problems/TroubleshootingCommonProblemsPage.tsx`
2. Approved redesign references already represented in the homepage and product-hub comps
3. IA rules in `AGENTS.md` and `/docs`
4. Existing design-reference patterns for shared help-domain pages

## IA Rules That Must Not Change
- This is a help-domain hub.
- It is not a product hub.
- It is not a role hub.
- It is not a generic article.
- Shared troubleshooting comes before product-specific troubleshooting.
- Product-specific troubleshooting may appear only as a secondary branch, not as the page’s main organizing structure.
- Support remains fallback, not primary.
- Do not add sections not justified by the frozen system.
- Do not add a `Common problems by audience` section or a separate related-resources layer in the current simplified pattern.
- If a destination does not exist yet in the prototype, it should remain conceptually direct and non-search; do not use Search Results as a placeholder.
- Do not let this page collapse into a flat list of technical links or a broad LMS admin directory.

## Overall Layout
- Centered desktop container consistent with the other shared destination pages in the prototype
- Outer shell should feel aligned with homepage and search, around a `1200px` max-width page shell
- Main content sections should sit in a slightly narrower centered content column so the page feels focused rather than directory-like
- Intro/header should sit in a light neutral band with compact but clear spacing
- Content rhythm should be vertical and calm:
  - utility back-link or breadcrumb context
  - intro/header
  - common troubleshooting issues
  - product-specific troubleshooting help
  - quiet support fallback
- Visual density should be medium:
  - structured
  - calm
  - more destination-page-like than search
  - consistent with the quieter Sign In & Account Help / Course Access & Enrollment family

## Page Section Order
1. Back-link utility row
2. Header / intro section
3. Common troubleshooting issues
4. Product-specific troubleshooting help
5. Support fallback

## Header / Intro Section
### Purpose
Orient the user quickly and frame this page as the shared entry point for common technical problems across products and access contexts.

### Layout
- A simple back-link utility row appears above the intro band
- Back-link should be left aligned and visually quiet
- Intro sits in a light neutral band spanning the main content width
- Desktop intro should be a compact horizontal composition:
  - icon tile on the left
  - title and supporting description on the right
- Intro should feel calm and utilitarian rather than like a marketing hero

### Content
- Back-link text:
  - `Back to Help Home`
- Page title:
  - `Troubleshooting & Common Problems`
- Supporting description should communicate:
  - fixing common technical problems
  - shared usefulness across products
  - browser/device issues
  - broken LMS links or access failures
  - missing content, activities, or assignments
  - integration or sync problems

### Icon Treatment
- Small contained icon tile or soft card at the left of the title block
- Icon should suggest troubleshooting, technical diagnosis, or problem resolution without becoming decorative emphasis
- Keep icon treatment simple, understated, and Magma-compatible

### Visual Goals
- Clear page identity immediately
- Compact and calm
- Strong title hierarchy
- Supporting description should read as short context, not body copy
- Back-link should feel like utility navigation, not a CTA

## Common Troubleshooting Issues Section
### Purpose
Present the strongest shared troubleshooting pathways first.

### Heading Structure
- Strong section heading
- One short supporting sentence below the heading

Suggested heading:
`Common troubleshooting issues`

Suggested supporting line intent:
- Start here for the most common technical problems across products and course-access contexts

### Layout
- Two-column card grid on desktop
- Four to six cards total, depending on the approved frame
- Cards should be even, compact, and easy to scan
- This should be the strongest content block on the page
- The section should read as shared issue types, not as a product chooser or audience chooser

### Priority Shared Topics
The first issue set should stay focused on shared technical problems most likely to apply across products and access contexts. The current implemented set is:
1. Missing activities or assignments
2. Browser or device issues
3. LMS link not working
4. Missing content or course materials
5. Error messages, sync, or integration issues

### Card Content Structure
Each issue card should include:
- a strong topic title
- one short explanatory line
- full-card destination behavior or clearly card-like destination behavior

### Card Behavior Intent
- These cards should feel like the clearest self-service troubleshooting entries on the page
- They should stay issue-first rather than product-first
- LMS/integration problems should remain part of the shared issue set, but should not explode into an LMS-admin mini-site within this page

### Why These Issues Come First
- They are the most reusable technical problem types across products
- They align to the shared troubleshooting domain rather than product silos
- They reflect the patterns already visible in homepage help-domain intent and product-hub troubleshooting patterns
- They are stronger first-entry paths than product cards, related resources, or support fallback

## Product-Specific Troubleshooting Help
### Purpose
Provide secondary product-aware troubleshooting routes when the problem depends on the product experience rather than the shared issue type.

### Rules
- It must remain secondary to both the shared issue grid and the page’s overall troubleshooting framing
- It should not become the page’s primary organizing logic
- Product names here are directional entry points, not product-hub replacements

### Layout
- One compact four-card row or small grid
- Visual treatment should be lighter than the common-issue cards
- Cards should use the same white-card family as the rest of the system, but read as smaller and more secondary than the primary troubleshooting cards

### Likely Product Entries
If product-specific troubleshooting entry points are shown, likely items include:
- `MindTap`
- `WebAssign`
- `SAM`
- `Spark`

### Content Intent
- Use this section only where the next troubleshooting step genuinely depends on the product experience
- Supporting copy should stay brief and troubleshooting-focused, for example browser issues, missing content, login problems, or error-message handling
- Current helper line:
  `Use these only when the next troubleshooting step depends on the product you are using.`
- These entries should point to direct product or article destinations when those exist
- If those direct destinations are not implemented yet, the implementation should preserve non-interactive placeholders rather than routing to Search Results

## Support Fallback Treatment
### Purpose
Offer a clear fallback only after the main troubleshooting paths and the secondary product-specific branch have been presented.

### Structure
- Appears after the main self-service sections
- Separated by a subtle divider line or quiet section break
- Includes a short prompt and one low-emphasis support action

### Content Intent
- Prompt like:
  - `Still need help?`
- One action:
  - `Contact support`

### Rules
- Keep support visually quiet
- Do not present support as a competing primary card, banner, or escalation dashboard
- Do not imply live chat as the first answer
- Do not let support overtake the self-service structure of the page

## Visual Style Guidance
- Stronger page title than section headings
- Section headings should feel solid and readable, but clearly subordinate to the page title
- Supporting copy should be muted and concise
- Primary troubleshooting issue cards should use understated borders, subtle radii, and calm surfaces
- Product-specific troubleshooting entries should feel lighter than the primary issue cards
- Support fallback should be the quietest element in the main content area
- Avoid large shadows, decorative flourish, or marketing emphasis
- The page should feel polished, calm, technical, and task-oriented

## Spacing Guidance
### Overall
- Maintain a compact, steady vertical rhythm
- Keep header spacing generous enough for clarity, but not tall
- Reduce excess dead space between sections

### Section Spacing
- Moderate spacing between intro and the first troubleshooting section
- Moderate spacing between major sections
- Divider or quiet separation before support fallback should create structure without a large gap

### Label / Heading Spacing
- Tight spacing between section heading and supporting sentence
- Title-to-description spacing in the intro should be compact and clean

### Card / Panel Spacing
- Tight internal card padding
- Tight title-to-description spacing inside cards
- Moderate grid gaps, enough to keep items distinct without feeling airy
- Product-specific rows should use slightly lighter spacing than the main issue cards

### Density Goals
- Intro: compact medium density
- Common troubleshooting issues: medium density
- Product-specific troubleshooting: compact medium density
- Support fallback: compact and quiet

## Must Match
- Shared `Troubleshooting & Common Problems` page purpose as a help-domain hub
- Back-link utility row above the intro band
- Light neutral intro band with icon, title, and supporting description
- Primary shared troubleshooting issue grid appearing before product-specific troubleshooting help
- Product-specific troubleshooting help remaining a lighter secondary branch
- The current live structure flowing directly from product-specific troubleshooting help to support fallback
- Support fallback appearing last and staying quiet
- Unresolved destinations remaining non-interactive rather than defaulting to Search Results

## Can Approximate
- Exact icon artwork
- Exact wording of secondary helper copy where the intent is the same
- Exact card count if the approved visual frame supports a tighter or looser grid

## Do Not Copy
- Do not turn this page into a product hub or product-index page
- Do not reintroduce `Common problems by audience` or any other role-browse layer
- Do not flatten the page into a generic article or a broad directory of technical links
- Do not make LMS administrator troubleshooting the dominant frame for the whole page
- Do not route unresolved cards to Search Results as placeholders
- Do not make support primary or visually equal to self-service
- Do not add a separate related-resources layer in the current simplified pattern
- Do not use oversized airy card grids or marketing-style hero behavior

## Reviewer Checklist
Use this when reviewing implementation:
- Does the page read clearly as a shared Troubleshooting & Common Problems help-domain hub?
- Is the back-link present and visually quiet?
- Does the intro feel compact, calm, and clearly introductory?
- Is the page title the strongest text on the page?
- Do shared troubleshooting issues appear before product-specific troubleshooting?
- Does the main issue grid stay issue-first rather than product-first or role-first?
- Does any product-specific troubleshooting row remain clearly secondary?
- Does the page flow directly from product-specific troubleshooting help to support fallback without extra secondary layers?
- Does support remain a quiet fallback at the end of the page?
- Do unresolved destinations remain visible but non-interactive rather than falling back to Search Results?
