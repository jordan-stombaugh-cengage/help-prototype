# Course Access & Enrollment Design Spec

## Purpose
The Course Access & Enrollment page is the shared help-domain page for getting into courses and course materials in the merged Cengage Help + ELT prototype.

Its job is to:
- provide one clear shared entry point for access codes, course keys, enrollment, purchase/access issues, and LMS/course-entry problems
- keep the most common self-service access tasks first
- gather cross-product access pathways without turning the page into a product hub
- route users toward the correct next step when access depends on product, LMS entry, or enrollment state
- keep support secondary to self-service

This page is a shared help-domain hub, not a product hub, article template, or support landing page.

## Source Priority
1. Current live implementation in `src/features/course-access-enrollment/CourseAccessEnrollmentPage.tsx`
2. Approved Course Access & Enrollment design frame or screenshot, if provided
3. IA rules in `AGENTS.md` and `/docs`
4. Legacy labels only as terminology/reference, not as IA to copy

## IA Rules That Must Not Change
- This is a shared help-domain page, not a product page or role hub
- Search remains primary at the system level
- Support is fallback, not primary
- Product-specific help may appear only as secondary entry points, not as the page’s main organizing structure
- Role remains a facet, not a hub
- This page should gather self-service pathways for course access, enrollment, access codes, and course-entry issues
- Do not flatten this page into a generic article or long link index
- Do not add sections not present in the current implemented pattern
- Do not add a separate related-help/resources layer in the current frozen pattern
- If a destination does not exist yet in the prototype, it should remain conceptually direct and non-search; do not treat Search Results as the default placeholder

## Overall Layout
- Centered desktop container consistent with the other destination pages in the prototype
- Outer shell should feel aligned with homepage and search, around a `1200px` max-width page shell
- Main content sections should sit in a slightly narrower centered content column so the page feels focused instead of directory-like
- Hero sits inside a light neutral band with compact but clear spacing
- Content rhythm should be vertical and straightforward:
  - utility back-link or breadcrumb context
  - intro band
  - common access/enrollment issues
  - product-specific access help
  - quiet support fallback
- Visual density should be medium:
  - more structured than a wireframe
  - calmer than the homepage
  - clearly a destination page, not a search page or promotional landing page

## Page Section Order
1. Back-link utility row
2. Header / intro section
3. Common access/enrollment issues
4. Product-specific access help
5. Support fallback

## Header / Intro Section
### Purpose
Orient the user quickly and frame this page as the shared entry point for getting access to coursework and course materials.

### Layout
- A simple back-link utility row appears above the intro band
- Back-link should be left aligned and visually quiet
- Intro sits in a light neutral band spanning the main content width
- Desktop intro should be a compact horizontal composition:
  - icon tile on the left
  - title and supporting description on the right
- The intro should feel calm and functional, not like a marketing hero

### Content
- Back-link text:
  - `Back to Help Home`
- Page title:
  - `Course Access & Enrollment`
- Supporting description should communicate:
  - course access help
  - enrollment and join-course issues
  - access codes and course keys
  - LMS/course-entry questions
  - shared usefulness across products and access pathways

### Icon Treatment
- Small contained icon tile or soft card at the left of the title block
- Icon should suggest access, enrollment, or entry without becoming decorative emphasis
- Keep icon treatment simple, understated, and Magma-compatible

### Visual Goals
- Clear page identity immediately
- Compact and calm
- Strong title hierarchy
- Supporting description should read as short context, not body copy
- Back-link should feel like utility navigation, not a CTA

## Common Access/Enrollment Issues Section
### Purpose
Present the highest-frequency course-entry and access tasks first.

### Heading Structure
- Strong section heading
- One short supporting sentence below the heading

Suggested heading:
`Common access and enrollment issues`

Suggested supporting line intent:
- Start here for the most common ways to enter a course, use a code, or resolve access problems

### Layout
- Two-column card grid on desktop
- Four to six cards total, depending on the approved frame
- Cards should be even, compact, and easy to scan
- Grid should feel orderly and balanced rather than like a broad directory

### Priority Topics
The first issue set should stay focused on the shared, reusable access problems most likely to apply across products:
1. Enter a course key
2. Redeem an access code
3. Join or enroll in a course
4. Access your course through LMS
5. Purchased access but course is unavailable
6. Wrong course, missing course, or no course listed

### Card Content Structure
Each issue card should include:
- a strong topic title
- one short explanatory line
- full-card destination behavior or clearly card-like destination behavior

### Card Behavior Intent
- `Enter a course key` and `Redeem an access code` should feel like the clearest first self-service entries
- `Join or enroll in a course` should stay near the top because it is another high-frequency access path
- LMS/course-entry problems should remain part of the common issue set, but should still point users toward the correct direct next step rather than flattening all LMS cases together
- Purchase/access-state problems can appear in this same section if the approved frame includes them, but they should remain framed as access resolution rather than support escalation

### Why These Issues Come First
- They are the most direct course-entry problems
- They apply across products and access pathways
- They align to the shared help-domain model rather than product-specific silos
- They are stronger entry points than related resources or support fallback

## Product-Specific Access Help
### Purpose
Provide secondary product-aware access routes when course-entry behavior differs by product, without turning this page into a product hub.

### Rules
- It must remain secondary to the shared common-issues section
- It should not become the page’s main organizing logic
- Product names here are directional entry points, not full product-hub replacements

### Layout
- One compact four-card row or small grid
- Visual treatment should be lighter than the common-issues cards
- Cards should use the same white-card family as the rest of the system, but read as smaller and more secondary than the primary issue cards

### Likely Product Entries
If product-specific access entry points are shown, likely items include:
- `MindTap`
- `WebAssign`
- `SAM`
- `Spark`

### Content Intent
- Use product-specific entry points only where the next help step genuinely depends on the product experience
- Supporting copy should stay brief and access-focused, for example course registration, access-code behavior, or LMS entry differences
- Current helper line:
  `Use these when your course-access steps depend on the product you are using.`
- These entries should point to direct product or article destinations when those exist
- If those direct destinations are not implemented yet, the implementation should preserve non-interactive placeholders rather than routing to Search Results

## Support Fallback Treatment
### Purpose
Offer a clear fallback only after the main access/enrollment paths and the secondary product-specific branch have been presented.

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
- Do not present support as a competing primary card, banner, or multi-option escalation block
- Do not imply live chat as the first answer
- Do not add phone-first or submit-a-case-first framing unless an approved design explicitly requires it

## Visual Style Guidance
- Stronger page title than section headings
- Section headings should feel solid and readable, but clearly subordinate to the page title
- Supporting copy should be muted and concise
- Primary issue cards should use understated borders, subtle radii, and calm surfaces
- Product-specific entry points, if present, should feel lighter than the main issue cards
- Support fallback should be the quietest element in the main content area
- Avoid large shadows, decorative flourish, or marketing emphasis
- The page should feel polished, quiet, and task-oriented

## Spacing Guidance
### Overall
- Maintain a compact, steady vertical rhythm
- Keep hero spacing generous enough for clarity, but not tall
- Reduce excess dead space between sections

### Section Spacing
- Moderate spacing between intro and the first issue section
- Moderate spacing between major sections
- Divider or quiet separation before support fallback should create structure without a large gap

### Label / Heading Spacing
- Tight spacing between section heading and supporting sentence
- Title-to-description spacing in the intro should be compact and clean

### Card / Row Spacing
- Tight internal card padding
- Tight title-to-description spacing inside cards
- Moderate grid gaps, enough to keep items distinct without feeling airy
- Product-specific rows/cards, if present, should use slightly lighter spacing than the primary issue cards

### Density Goals
- Intro: compact medium density
- Common-issue cards: medium density
- Product-specific access help: compact medium density
- Support fallback: compact and quiet

## Must Match
- Shared `Course Access & Enrollment` page purpose as a help-domain hub
- Back-link utility row above the intro band
- Light neutral intro band with icon, title, and supporting description
- Common access/enrollment issues appearing before product-specific access help
- Shared self-service pathways for course key, access code, enrollment, and LMS/course-entry help
- Product-specific access help staying secondary rather than becoming the page’s main structure
- The current live structure flowing directly from product-specific access help to support fallback
- Support fallback appearing last and staying secondary

## Can Approximate
- exact icon glyph
- exact pixel spacing
- exact card count if the approved frame uses four versus six issue cards
- exact border/shadow values
- exact card heights if copy length varies slightly
- exact font metrics if rendering differs slightly from the approved frame

## Do Not Copy
From legacy help patterns or generic help-site defaults, do **not** copy:
- product-first organization that turns this into a product hub
- role-first framing or role hubs
- support becoming primary or visually equal to self-service
- a flat article list without hierarchy
- oversized airy grids or marketing-card spacing
- directory-style “all access topics” dumping
- Search Results placeholder behavior for unresolved direct destinations
- anything that makes this page feel like a generic contact or support page

## Reviewer Checklist
Use this when reviewing implementation:
- Does the page read clearly as a shared Course Access & Enrollment help-domain hub?
- Is the back-link present and visually quiet?
- Does the intro feel compact, calm, and clearly introductory?
- Is the page title the strongest text on the page?
- Do common access/enrollment issues appear before product-specific access help?
- Are course key, access code, enrollment, and LMS/course-entry pathways clearly represented?
- Does product-specific access help remain secondary to the shared issue set?
- Does the page flow directly from product-specific access help to support fallback without an extra related-resources layer?
- Does support remain present but quiet and clearly fallback-oriented?
- Does the page avoid drifting into a product hub, article page, or generic link directory?
