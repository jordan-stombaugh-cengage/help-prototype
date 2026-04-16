# Reset Password Chooser Design Spec

## Purpose
The Reset Password chooser page is the routing entry point for password-reset help in the merged Cengage Help + ELT prototype.

Its job is to:
- help users identify how they usually sign in before showing instructions
- route users into the correct password-reset branch instead of flattening reset help into one generic article
- separate direct Cengage account access from LMS-managed and school-managed access
- give unsure users a safe recovery path when they do not know which sign-in method applies
- keep support secondary to self-service routing

This page is a chooser / triage step, not a flat article.

## Source Priority
1. Approved Reset your password design frame
2. IA rules in `AGENTS.md` and `/docs`
3. Existing implementation only as fallback/reference

## IA Rules That Must Not Change
- This is a chooser / routing page, not an article template
- The page should help users identify how they usually sign in
- `With a Cengage account`, `Through my LMS`, `Through my school or NGLSync portal`, and `I'm not sure` are distinct paths
- Direct Cengage account reset remains a separate handoff path
- LMS and school-managed access remain distinct routing branches
- Support is fallback, not primary
- Do not flatten this into a single generic password reset article
- Do not add sections not present in the approved design
- Do not introduce role-first framing or role-based branching on this page

## Overall Layout
- Centered desktop container consistent with the other prototype pages, around a `1200px` outer shell
- Utility breadcrumb row at the top
- Light neutral intro band for the page title area
- Main chooser content sits in a narrower, centered content column
- The chooser area should feel vertically focused and task-oriented rather than broad
- Page rhythm is:
  - breadcrumb row
  - intro band
  - chooser question and stacked answer cards
  - quiet secondary links
- Visual density should be medium:
  - denser than a wireframe
  - simpler and calmer than the homepage
  - very direct, since this is a routing step

## Page Section Order
1. Breadcrumb row
2. Header / intro section
3. Chooser question section
4. Support / secondary links

## Header / Intro Section
### Purpose
Quickly orient the user and frame this page as the first routing step in password-reset help.

### Layout
- Breadcrumb row appears above the intro band
- Intro sits inside a light neutral band that spans the main page width
- Desktop layout is a compact horizontal intro:
  - small icon tile on the left
  - title and supporting description on the right
- Intro should feel calm and utilitarian, not like a marketing hero

### Breadcrumb Treatment
- Left aligned
- Quiet utility style
- Compact spacing
- Breadcrumb path in the approved frame reads:
  - `Help Home / Sign In & Account Help / Reset password`
- Breadcrumb should provide orientation only; it should not become the visual focus

### Content
- Page title:
  - `Reset your password`
- Supporting description intent:
  - this page asks a couple quick questions
  - the goal is to send users to the right instructions

### Icon Treatment
- Small soft tile with a key/help-style icon
- Icon should reinforce the account/password domain without becoming decorative emphasis
- Keep it understated, aligned, and consistent with the Sign In & Account Help domain styling

### Visual Goals
- Clear routing-step identity
- Strong page title hierarchy
- Compact supporting line
- Calm, low-friction orientation before the chooser

## Chooser Question Section
### Purpose
Ask the user the primary routing question that determines the next reset-password path.

### Main Prompt
Suggested prompt:
`How do you usually sign in?`

This question should be the strongest text in the main content area after the page title.

### Layout
- Narrow centered content column
- One vertical stack of four chooser cards
- Cards should feel easy to scan and compare
- Desktop width should be wide enough for readable descriptions but still clearly centered and focused

### Card Order
1. `With a Cengage account`
2. `Through my LMS`
3. `Through my school or NGLSync portal`
4. `I'm not sure`

### Card Content Structure
Each chooser card should include:
- a small icon tile at the left
- a strong option title
- one short supporting sentence that clarifies the path
- full-card destination behavior or clearly card-like click behavior

### Supporting Copy Intent By Card
- `With a Cengage account`
  - user signs in directly to Cengage with email and password
- `Through my LMS`
  - user accesses Cengage through Canvas, Blackboard, Moodle, or another LMS
- `Through my school or NGLSync portal`
  - user signs in through a school portal or NGLSync system
- `I'm not sure`
  - user does not know which sign-in method they use

### Icon Treatment Inside Cards
- Each card uses a small icon tile aligned left
- Icon tiles may use subtle color differentiation per path, but keep the family visually consistent
- Icons should reinforce route meaning:
  - person/account for Cengage account
  - LMS / learning-platform icon for LMS
  - school / building / institution icon for school or NGLSync
  - question/help icon for not sure
- Icons should remain secondary to the option title

### Why These Options Are Distinct
- Cengage account users follow a direct account-managed reset path
- LMS users often need LMS- or institution-managed instructions
- School / NGLSync users need a separate school-managed branch
- Unsure users need recovery help before they can complete reset steps

These options should remain distinct because the routing matrix explicitly separates them into different downstream outcomes.

## Support / Secondary Links
### Purpose
Provide a quiet fallback after the chooser, not before it.

### Structure
- Appears below the chooser cards
- Separated by a subtle divider line
- Includes a short prompt and two low-emphasis links in the approved frame

### Content
- Prompt:
  - `Need something else?`
- Secondary links:
  - `Back to Sign In & Account Help`
  - `Contact Support`

### Hierarchy Rules
- This area must remain clearly secondary to the chooser cards
- Links should read as utility/fallback actions, not competing primary CTAs
- Support should not be elevated into a card, banner, or large callout

## Visual Style Guidance
- Strongest text hierarchy:
  - page title
  - chooser question
  - chooser card titles
  - supporting descriptions
  - fallback links
- Breadcrumbs should be the quietest navigational element near the top
- Chooser cards should be stronger than the support area but calmer than promotional feature cards
- Use understated borders and subtle radii
- Avoid heavy shadows or decorative flourishes
- Chooser cards should feel compact, calm, and clearly actionable
- The page should feel focused and linear, not like a directory or article

## Spacing Guidance
### Overall
- Maintain a compact, steady vertical rhythm
- Avoid oversized blank gaps between intro, chooser, and fallback areas

### Breadcrumb / Header Spacing
- Tight spacing between breadcrumb row and intro band
- Tight title-to-description spacing in the intro
- Intro band should feel generous enough to orient, but not tall

### Chooser-Card Spacing
- Moderate vertical spacing between answer cards
- Tight title-to-description spacing inside each card
- Keep the stack dense enough that all four options feel part of one decision set

### Section Spacing
- Moderate separation between intro and chooser question
- Divider before the fallback area should create clear separation without introducing a large dead zone

### Density Goals
- Intro: compact medium density
- Chooser cards: medium density with clear scannability
- Secondary links area: compact and quiet

## Must Match
- Reset-password chooser purpose as a routing step
- Breadcrumb row above the intro band
- Light neutral intro/header band
- Title `Reset your password`
- Supporting line that frames the page as a quick routing step
- Main chooser prompt `How do you usually sign in?`
- Four stacked answer cards in this order:
  - With a Cengage account
  - Through my LMS
  - Through my school or NGLSync portal
  - I'm not sure
- Distinct routing meaning for each option
- Quiet fallback area with `Need something else?`, back-to-domain link, and contact-support link
- Support remaining secondary

## Can Approximate
- Exact icon glyphs
- Exact pixel spacing
- Exact card heights if copy wraps slightly differently
- Exact border weights and shadow values
- Exact breadcrumb separators
- Exact font metrics

## Do Not Copy
From generic help-site patterns or rough prototype defaults, do **not** copy:
- turning this page into a generic article with steps/body copy
- making support primary or visually equal to the chooser cards
- overcomplicating the routing step with additional branching UI on this page
- oversized airy cards with too much empty space
- role-first framing or role-based grouping
- product-first framing
- large search-first homepage patterns on this page
- flattening the four reset options into one generic destination

## Reviewer Checklist
Use this when reviewing implementation:
- Does the page clearly read as a routing / chooser step rather than an article?
- Is the breadcrumb row present and visually quiet?
- Does the intro band feel compact, calm, and clearly introductory?
- Is `Reset your password` the strongest text in the intro?
- Does the chooser question clearly ask how the user usually signs in?
- Are the four answer cards present in the correct order?
- Do the card descriptions clearly distinguish Cengage account, LMS, school / NGLSync, and not-sure paths?
- Do the cards feel compact and scannable rather than oversized?
- Does the fallback area remain secondary and low-emphasis?
- Does the page preserve the routing intent in the repo IA without flattening reset help into one article?
