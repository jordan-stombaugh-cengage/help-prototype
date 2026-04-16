# Help Article Design Spec

## Purpose
The Help Article page is the primary answer-object template in the merged Cengage Help + ELT prototype.

Its job is to:
- present a structured self-service answer in a calm, product-like layout
- keep the article body as the primary content object
- show article metadata, related help, and helpfulness feedback without competing with the article body
- support article-first discovery from search and shared help domains
- preserve support as secondary to the article itself

This page is a structured help article, not a marketing page, landing page, or support hub.

## Source Priority
1. Approved Help Article design frame
2. IA rules in `AGENTS.md` and `/docs`
3. Existing implementation only as fallback/reference

## IA Rules That Must Not Change
- Help Article is a first-class object/template
- This page is a structured help article, not a generic marketing page
- The main article body is primary
- The right rail is secondary
- Support remains secondary
- Do not add major sections not present in the approved design
- Do not turn this into a support landing page
- Do not flatten the layout into a blog-style longform article
- Metadata, related help, and helpfulness should support the article, not replace it

## Overall Layout
- Full-width page shell consistent with the prototype’s other destination pages
- Quiet breadcrumb row at the top
- Light neutral article header band beneath breadcrumbs
- Main desktop content uses a two-column layout:
  - left main article column
  - right secondary rail
- Main column is clearly dominant in width and hierarchy
- Right rail should be visibly useful but quieter than the article body
- Visual density should be medium:
  - denser than a wireframe
  - calmer than a homepage
  - more structured than a blog post

## Page Section Order
1. Breadcrumb row
2. Article header
3. Main two-column article layout
4. Left column:
   - pre-instruction callout
   - how-to steps
   - other sign-in options
   - account management
5. Right rail:
   - about this article
   - related help
   - helpfulness prompt

## Breadcrumb Row
### Purpose
Provide quiet orientation without competing with the article title.

### Content
- Approved breadcrumb pattern:
  - `Help Home / MindTap Student Help / Sign In`

### Rules
- Left aligned
- Compact spacing
- Quiet visual treatment
- Breadcrumbs should feel like utility context, not a section heading

## Article Header
### Purpose
Establish the article’s title, short summary, and top-level metadata.

### Content
- Title:
  - `Sign In`
- Short summary:
  - communicate that the article explains how to sign in to a Cengage account to access course materials
- Metadata tags near the top:
  - `MindTap`
  - `Student`
  - `Sign In & Account Help`

### Layout
- Header sits inside a light neutral band
- Title should be the strongest text on the page
- Summary should be brief and clearly secondary to the title
- Metadata tags should appear near the header content, visually compact and scan-friendly

### Rules
- Do not turn the article header into a homepage hero
- Keep the tag treatment compact and product-like
- Metadata should support context, not dominate the header

## Pre-Instruction Callout
### Purpose
Provide contextual guidance before the user begins the steps.

### Content
- Heading:
  - `Before you sign in`
- Tone should be informational and low drama
- Callout content should clarify:
  - if the user signs in through an LMS, use the LMS method
  - if the user uses NGLSync, use that sign-in path
  - otherwise sign in with a Cengage account

### Layout / Style
- Appears before the step-by-step instructions
- Bordered, softly tinted card
- Clearly noticeable, but not visually loud
- Should feel like article guidance, not a warning banner

## Main Instructional Content
### Purpose
Deliver the primary answer content in a structured, step-based format.

### Heading
- `How to sign in`

### Content Structure
Use a numbered step pattern with compact supporting text under steps where shown.

The approved frame shows:
1. Go to `login.cengage.com`
   - supporting note about using the instructor-provided link
2. Enter your username and click Next.
   - supporting note that the username is the account email
   - inline link to `Create an account` for new students
3. Enter your password and click Sign In.
4. Open your MindTap course.
   - supporting note about student ID when prompted
   - inline `access help` link if the course is missing

### Rules
- Numbered steps should be easy to scan
- Step number marker should be clear but not oversized
- Supporting text must remain subordinate to the step headline
- Inline links should feel native to article content, not like separate cards

## Other Sign-In Options
### Purpose
Offer secondary next-step routes for adjacent sign-in tasks without interrupting the main article.

### Content
- Section heading:
  - `Other sign-in options`
- Short supporting line:
  - communicates alternate ways to access the course
- Stacked directional rows/cards:
  - `Sign In Through Your LMS`
  - `Create an Account`
  - `Manage Account`

### Rules
- This section is secondary to the main how-to steps
- Rows should feel actionable and directional
- Each row should include:
  - title
  - directional affordance
- Keep the rows compact and product-like, not homepage-card-like

## Account Management
### Purpose
Group related account-maintenance links in a clear, scannable utility section.

### Content
- Heading:
  - `Account management`
- Short supporting description about updating account settings and preferences
- Bordered grouped-link treatment with links such as:
  - `Forgot Your Username`
  - `Edit Your User Profile`
  - `Delete Account`
  - `Forgot Password`
  - `Change Email Address`
  - `Merge Multiple Accounts`
  - `Change Your Password`

### Rules
- The grouped link box should read as structured utility content
- Keep the links organized and balanced
- This section should remain clearly secondary to the main sign-in steps

## Right Rail
### Purpose
Provide useful article context and related paths without competing with the main article body.

### About This Article
Include:
- heading:
  - `About this article`
- metadata blocks such as:
  - `Applies to`
  - `Help area`
  - `Updated`

### Related Help
Include:
- heading:
  - `Related help`
- grouped helpful links such as:
  - `Forgot username`
  - `Reset password`
  - `LMS sign-in`
  - `NGLSync sign-in`

### Helpfulness Prompt
Include:
- short prompt:
  - `Was this helpful?`
- `Yes` / `No` treatment

### Rules
- Right rail must remain secondary to the article body
- Rail cards should be understated
- Helpfulness controls should feel lightweight
- Do not turn the rail into a support escalation column

## Visual Style Guidance
- Strong hierarchy:
  - article title
  - callout and main section heading
  - step titles
  - secondary section headings
  - metadata and support text
- Two-column layout should read clearly on desktop
- Use understated borders, subtle radii, and compact spacing
- The page should feel product-like and structured
- Avoid blog-style whitespace or oversized editorial spacing
- Avoid marketing emphasis, heavy gradients, or decorative effects
- Main article column should feel clearly stronger than the right rail

## Spacing Guidance
### Overall
- Keep the article denser than a rough wireframe
- Avoid excessive vertical gaps
- Preserve clear separation between major article sections

### Header
- Compact breadcrumb-to-header rhythm
- Tight title-to-summary spacing
- Tight metadata-tag spacing

### Main Content
- Moderate gap between callout and steps
- Moderate gap between article sections
- Step spacing should be clear but compact

### Right Rail
- Rail cards should stack with moderate spacing
- Rail content should be compact and scannable

### Density Goals
- Header: compact
- Callout: medium density
- Steps: medium density
- Secondary sections: medium density
- Right rail: compact-medium density

## Must Match
- Quiet breadcrumb row
- Article header with `Sign In` title, short description, and metadata tags
- Pre-instruction `Before you sign in` callout
- `How to sign in` section with numbered steps and supporting text
- `Other sign-in options` stacked directional rows
- `Account management` grouped link list
- Right rail with `About this article`, `Related help`, and `Was this helpful?`
- Two-column desktop layout with main body clearly primary

## Can Approximate
- Exact glyph shapes
- Exact border values
- Exact font metrics
- Exact copy line breaks if the prototype rendering differs slightly
- Exact helpfulness control behavior

## Do Not Copy
- Generic marketing hero patterns
- Blog-style article spacing
- Homepage-style navigation cards
- Overly loud warning banners
- Right rail becoming equal to the article body
- Support landing-page patterns
- Large empty gaps that weaken the article structure

## Reviewer Checklist
- Does the page read clearly as a structured help article?
- Is the breadcrumb row present and quiet?
- Is the article title the strongest text on the page?
- Are metadata tags visible near the top?
- Does the `Before you sign in` callout feel noticeable but low drama?
- Are the how-to steps clear and easy to scan?
- Are supporting notes and inline links subordinate to the steps?
- Do other sign-in options appear as secondary directional rows?
- Is account management grouped cleanly?
- Does the right rail stay secondary to the article body?
- Are related help and helpfulness present without overpowering the article?
