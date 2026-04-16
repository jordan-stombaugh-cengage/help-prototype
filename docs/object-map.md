# Object Map

## Core Objects

### Help Article
The primary answer object in the system.

Possible fields:
- title
- summary
- body content
- steps
- related links
- help domain
- article type
- product applicability
- access pathway applicability
- education segment
- role applicability
- last updated

### Product
A canonical help hub object.

Examples:
- MindTap
- WebAssign
- SAM
- Spark
- MyELT

Possible fields:
- name
- description
- help overview
- roles
- education segment
- product category
- version

Relationships:
- a product has many help articles about it
- a product may have many access pathways used to access it

### Account
The user account context used for sign-in and account help.

Possible fields:
- account name
- sign-in identifier
- profile information
- account settings
- account context
- status
- roles
- education segment

### Access Pathway
How a user gets into a product or experience.

Examples:
- Cengage account
- LMS access
- school portal
- NGLSync
- course key
- access code

Possible fields:
- name
- summary
- required item
- source
- entry point
- pathway subtype
- platform context
- LMS

### Support Case
An external support object, not the primary self-service object.

Possible fields:
- problem summary
- contact information
- attachments
- request type
- support channel
- status

### Institution
An ELT admin extension object.

Possible fields:
- institution name
- institution ID
- institution settings
- contact details
- education segment
- admin role
- status

## Important Non-Objects

### Role
Role is a facet/filter/view modifier, not a top-level object.

Examples:
- student
- instructor
- LMS administrator
- school administrator

### Search
Search is a system capability, not a content object.

### Help Domain
Help domain is a classification/facet, not a top-level object.

Examples:
- Sign In & Account Help
- Course Access & Enrollment
- Troubleshooting & Common Problems

## Structural Rules
- Do not model role as a separate mini-site
- Do not model content type as the primary browse structure
- Do not make support co-equal with self-service answers
- Prefer article, product, account, access pathway, and institution relationships over role-first grouping