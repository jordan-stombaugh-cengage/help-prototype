# MindTap Product Hub Design Spec

## Purpose
The MindTap product hub is the canonical product-specific browse destination for MindTap help in the merged Cengage Help + ELT prototype.

Its job is to:
- provide one stable MindTap help hub
- let role narrow relevance within the hub instead of branching users into separate role hubs
- keep shared product-help structure stable while role-specific task/problem content updates
- reinforce product-first browsing with support as a secondary fallback

This is one Product Hub page with role-tab states, not three separate pages.

## Source Priority
1. Approved MindTap product-hub design frames
2. IA rules in `AGENTS.md` and `/docs`
3. Existing implementation only as fallback/reference

## IA Rules That Must Not Change
- This is a product hub for MindTap
- Product hubs are canonical browse destinations from the homepage
- Role is a facet/state within the product hub, not a separate IA object or standalone hub
- The page must support `Student`, `Instructor`, and `LMS Administrator` states
- Shared sections remain stable while role-specific task/problem lists change
- Support is fallback, not primary
- Do not add sections not present in the approved design
- Do not flatten this into a generic landing page or article list

## Overall Layout
- Full-width page shell consistent with other destination pages
- Quiet breadcrumb row at the top
- Light neutral product intro/header band beneath breadcrumbs
- Compact role-tab/filter row below the intro band
- Main content is a centered desktop container with stacked content sections
- Shared content blocks remain visually stable while role-specific content swaps beneath the tab control
- Visual density is medium:
  - structured
  - product-like
  - denser than a wireframe
  - calmer than a homepage

## Page Section Order
1. Breadcrumb row
2. Product intro/header
3. `I am a` role-tab row
4. Help by topic
5. Role-specific common tasks / common problems
6. Browse MindTap help by area
7. Additional resources

## Header / Intro Section
- Breadcrumb pattern:
  - `Help Home / MindTap`
- Product title:
  - `MindTap`
- Supporting description:
  - short summary covering signing in, coursework, eBooks, activities, and common issues
- Metadata tags:
  - `Digital Learning Platform`
  - `Higher Education`
- Visual goals:
  - clear product identity
  - calm header hierarchy
  - product-first orientation rather than role-first orientation

## Role Tab / `I am a` Control
- This control is a single-page state switcher, not navigation to separate routes
- Label:
  - `I am a:`
- Tabs:
  - `Student`
  - `Instructor`
  - `LMS Administrator`
- Active state should read clearly through color fill and stronger emphasis
- Inactive tabs should stay neutral and compact
- This row should be visible and important, but it should not overpower the product header

## Help by Topic
- Shared section across all role states
- Three cards:
  1. `Sign In & Account Help`
  2. `Course Access & Enrollment`
  3. `Troubleshooting & Common Problems`
- Each card includes:
  - small icon tile
  - heading
  - short description
  - one stronger text action
- This section remains stable across role tabs because it reflects shared MindTap help domains

## Role-Specific Tasks / Problems Section
- This section changes by active role tab
- Two side-by-side grouped panels:
  - `Common tasks for [role]`
  - `Common problems for [role]`
- Panel structure:
  - role-specific heading
  - bordered link list panel
  - compact vertical list of task/problem links
- Shared structure remains stable while the list content changes by role

## Browse MindTap Help by Area
- Shared 6-card area grid
- Standard desktop layout is 3 columns by 2 rows
- Expected cards:
  - `Using MindTap`
  - `Assignments & Activities`
  - `eBook & Study Tools`
  - `Grades & Progress`
  - `LMS Integration`
  - `Troubleshooting`
- Card structure:
  - small icon
  - heading
  - compact link list
- The overall card family remains stable; role-specific link changes are acceptable only where the approved frames clearly show them

## Additional Resources
- Compact resource-card row beneath the area grid
- Expected items:
  - `System requirements`
  - `Browser requirements`
  - `Accessibility`
  - `Video tutorials`
  - `What's new`
- Each card uses a small icon plus label treatment
- This row should feel lighter than the main topic and area cards

## Product-Local Support Rule
- The current approved product-hub pattern does not require a bottom product-local support block.
- Support remains shared and fallback-oriented rather than repeated at the bottom of each product hub.
- Do not add a `Need help with MindTap?` block unless a later approved design explicitly restores that pattern.

## Visual Style Guidance
- Strongest hierarchy:
  - product title
  - help-by-topic section heading
  - role-specific task/problem headings
  - browse-by-area headings
- Breadcrumbs and metadata tags should remain quieter
- Cards use understated borders, subtle radii, and calm backgrounds
- Avoid oversized airy spacing or marketing emphasis
- The role tabs should feel integrated into one product hub, not like mini navigation pills to separate sites

## Spacing Guidance
- Tight breadcrumb/header rhythm
- Moderate spacing between product intro and role tabs
- Moderate spacing between major sections
- Compact internal card spacing
- Even grid spacing across topic cards, area cards, and resource cards
- Density goal:
  - product-like and scannable
  - not sparse
  - not overloaded

## Must Match
- One MindTap hub page
- Interactive in-page role-tab states
- Shared header, tabs, topic cards, area grid, and resources
- Role-specific common tasks and common problems content
- Product-first, role-aware IA
- Support remaining shared and fallback-oriented rather than repeated product-locally

## Can Approximate
- Exact icon artwork
- Exact link destinations for placeholder prototype cards
- Minor copy variations where screenshots imply the same intent
- Exact responsive breakpoints

## Do Not Copy
- Do not turn tabs into separate page routes
- Do not treat role as top-level IA
- Do not make support primary
- Do not use oversized airy card grids
- Do not flatten the hub into a generic landing page
- Do not treat the role-specific sections as unrelated modules detached from the rest of the hub

## Reviewer Checklist
- Breadcrumbs show `Help Home / MindTap`
- Product title, description, and tags appear in a stable intro band
- `I am a` tabs switch in-page state without changing route
- Help-by-topic cards remain shared across roles
- Common tasks and common problems update by active role
- Browse-by-area grid remains stable and product-centered
- Additional resources stay lighter than the main content cards
- The page reads as one canonical MindTap product hub, not three separate role hubs
