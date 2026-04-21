import {
  errorSyncChooserHref,
  helpArticleHref,
  helpDomainHref,
  lmsAccessChooserHref,
  manageAccountChooserHref,
  signInAccountHref,
  wrongAccountChooserHref,
} from "../../app/routes";
import type { ProductHubConfig } from "./ProductHubPage";

const sharedTopicCards = (productName: string) =>
  [
    {
      iconKind: "account",
      title: "Sign In & Account Help",
      description: `Sign in, manage passwords, and update account details for ${productName}.`,
      actionLabel: "Get account help",
      actionHref: signInAccountHref(),
    },
    {
      iconKind: "access",
      title: "Course Access & Enrollment",
      description: `Join courses, access materials, and resolve enrollment issues in ${productName}.`,
      actionLabel: "Resolve access issues",
      actionHref: helpDomainHref("course-access-enrollment"),
    },
    {
      iconKind: "troubleshooting",
      title: "Troubleshooting & Common Problems",
      description: `Resolve technical issues, missing content, and common ${productName} errors.`,
      actionLabel: "View troubleshooting help",
      actionHref: helpDomainHref("troubleshooting-common-problems"),
    },
  ] as const;

export const mindTapProductHubConfig = {
  slug: "mindtap",
  title: "MindTap",
  description:
    "Help for signing in, accessing coursework, using eBooks, completing activities, and resolving common issues.",
  tags: ["Digital Learning Platform", "Higher Education"],
  roleAriaLabel: "MindTap role",
  roleTabs: [
    { id: "student", label: "Student" },
    { id: "instructor", label: "Instructor" },
    { id: "lms-admin", label: "LMS Administrator" },
  ],
  topicCards: [
    {
      iconKind: "account",
      title: "Sign In & Account Help",
      description: "Sign in, create accounts, manage passwords, and update your profile.",
      actionLabel: "Get account help",
      actionHref: signInAccountHref(),
    },
    {
      iconKind: "access",
      title: "Course Access & Enrollment",
      description: "Register for courses, access materials, and resolve enrollment issues.",
      actionLabel: "Resolve access issues",
      actionHref: helpDomainHref("course-access-enrollment"),
    },
    {
      iconKind: "troubleshooting",
      title: "Troubleshooting & Common Problems",
      description: "Resolve technical issues, browser problems, and common errors.",
      actionLabel: "View troubleshooting help",
      actionHref: helpDomainHref("troubleshooting-common-problems"),
    },
  ],
  areaSectionTitle: "Browse MindTap help by area",
  resourceCards: [
    {
      label: "System requirements",
      iconKind: "system",
      href: helpArticleHref("system-requirements"),
    },
    {
      label: "Browser requirements",
      iconKind: "browser",
      href: helpArticleHref("browser-requirements"),
    },
    { label: "Accessibility", iconKind: "accessibility" },
    { label: "Video tutorials", iconKind: "video" },
    { label: "What's new", iconKind: "whats-new" },
  ],
  roleContent: {
    student: {
      tasksHeading: "Common tasks for students",
      problemsHeading: "Common problems for students",
      tasks: [
        { label: "Sign in to MindTap", href: helpArticleHref("sign-in") },
        { label: "Register with a course key", href: helpArticleHref("mindtap-course-key") },
        { label: "Complete activities" },
        { label: "Access your eBook" },
        { label: "View your grades" },
        { label: "Submit assignments" },
      ],
      problems: [
        { label: "Can't sign in", href: signInAccountHref() },
        { label: "Missing activities or assignments", href: helpArticleHref("mindtap-missing-activities") },
        { label: "LMS link not working", href: helpArticleHref("lms-link-not-working") },
        { label: "Signed in with wrong account", href: wrongAccountChooserHref() },
        { label: "Browser or device compatibility issue", href: helpArticleHref("browser-requirements") },
        { label: "Can't access eBook" },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using MindTap",
          links: [
            { label: "Getting started" },
            { label: "Navigation basics" },
            { label: "Account settings" },
            { label: "Notifications" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Activities",
          links: [
            { label: "Submit assignments" },
            { label: "Complete activities" },
            { label: "Due dates" },
            { label: "Late submissions" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBook & Study Tools",
          links: [
            { label: "Access eBook" },
            { label: "Highlights & notes" },
            { label: "Study tools" },
            { label: "Offline access" },
          ],
        },
        {
          iconKind: "grades",
          title: "Grades & Progress",
          links: [
            { label: "View grades" },
            { label: "Track progress" },
            { label: "Gradebook" },
            { label: "Grade sync" },
          ],
        },
        {
          iconKind: "integration",
          title: "LMS Integration",
          links: [
            { label: "Access via LMS", href: lmsAccessChooserHref() },
            { label: "LTI setup" },
            { label: "Grade passback" },
            { label: "SSO" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Browser issues", href: helpArticleHref("browser-requirements") },
            { label: "Login problems", href: signInAccountHref() },
            { label: "Missing content" },
            { label: "Error messages", href: errorSyncChooserHref() },
          ],
        },
      ],
    },
    instructor: {
      tasksHeading: "Common tasks for instructors",
      problemsHeading: "Common problems for instructors",
      tasks: [
        { label: "Sign in to MindTap", href: helpArticleHref("sign-in") },
        { label: "Set up your course" },
        { label: "Assign activities" },
        { label: "Create custom content" },
        { label: "View student progress" },
        { label: "Grade assignments" },
      ],
      problems: [
        { label: "Can't access course management" },
        { label: "Students can't see assignments" },
        { label: "LMS integration issues", href: errorSyncChooserHref() },
        { label: "Grading not syncing", href: helpArticleHref("grade-sync-problems") },
        { label: "Custom content not saving" },
        { label: "Student roster issues" },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using MindTap",
          links: [
            { label: "Getting started" },
            { label: "Navigation basics" },
            { label: "Account settings" },
            { label: "Notifications" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Activities",
          links: [
            { label: "Create assignments" },
            { label: "Assign activities" },
            { label: "Due dates" },
            { label: "Late submissions" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBook & Study Tools",
          links: [
            { label: "Access eBook" },
            { label: "Highlights & notes" },
            { label: "Study tools" },
            { label: "Offline access" },
          ],
        },
        {
          iconKind: "grades",
          title: "Grades & Progress",
          links: [
            { label: "Grade students" },
            { label: "Progress reports" },
            { label: "Gradebook" },
            { label: "Grade sync" },
          ],
        },
        {
          iconKind: "integration",
          title: "LMS Integration",
          links: [
            { label: "Access via LMS", href: lmsAccessChooserHref() },
            { label: "LTI setup" },
            { label: "Grade passback" },
            { label: "SSO" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Browser issues", href: helpArticleHref("browser-requirements") },
            { label: "Login problems", href: signInAccountHref() },
            { label: "Missing content" },
            { label: "Error messages", href: errorSyncChooserHref() },
          ],
        },
      ],
    },
    "lms-admin": {
      tasksHeading: "Common tasks for LMS administrators",
      problemsHeading: "Common problems for LMS administrators",
      tasks: [
        { label: "Configure LMS integration" },
        { label: "Manage SSO settings" },
        { label: "Troubleshoot grade passback" },
        { label: "Set up deep linking" },
        { label: "Manage user provisioning" },
        { label: "Review integration logs" },
      ],
      problems: [
        { label: "Integration not connecting" },
        { label: "Grades not passing back" },
        { label: "SSO authentication failing" },
        { label: "Deep links not working" },
        { label: "User sync issues" },
        { label: "LTI configuration errors" },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using MindTap",
          links: [
            { label: "Getting started" },
            { label: "Navigation basics" },
            { label: "Account settings" },
            { label: "Notifications" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Activities",
          links: [
            { label: "Create assignments" },
            { label: "Assign activities" },
            { label: "Due dates" },
            { label: "Late submissions" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBook & Study Tools",
          links: [
            { label: "Access eBook" },
            { label: "Highlights & notes" },
            { label: "Study tools" },
            { label: "Offline access" },
          ],
        },
        {
          iconKind: "grades",
          title: "Grades & Progress",
          links: [
            { label: "Grade students" },
            { label: "Progress reports" },
            { label: "Gradebook" },
            { label: "Grade sync" },
          ],
        },
        {
          iconKind: "integration",
          title: "LMS Integration",
          links: [
            { label: "Configure LMS" },
            { label: "LTI setup" },
            { label: "Grade passback" },
            { label: "SSO" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Browser issues" },
            { label: "Login problems" },
            { label: "Missing content" },
            { label: "Error messages" },
          ],
        },
      ],
    },
  },
} satisfies ProductHubConfig;

export const webAssignProductHubConfig = {
  slug: "webassign",
  title: "WebAssign",
  description:
    "Help for signing in, joining classes, completing homework, using textbook resources, and resolving LMS or browser issues in WebAssign.",
  tags: ["Online Homework Platform", "Higher Education"],
  roleAriaLabel: "WebAssign role",
  roleTabs: [
    { id: "student", label: "Student" },
    { id: "instructor", label: "Instructor" },
    { id: "lms-admin", label: "LMS Administrator" },
  ],
  topicCards: sharedTopicCards("WebAssign"),
  areaSectionTitle: "Browse WebAssign help by area",
  resourceCards: [
    {
      label: "System requirements",
      iconKind: "system",
      href: helpArticleHref("system-requirements"),
    },
    {
      label: "Browser requirements",
      iconKind: "browser",
      href: helpArticleHref("browser-requirements"),
    },
    { label: "Quick Start Guide", iconKind: "accessibility" },
    { label: "Video tutorials", iconKind: "video" },
    { label: "What's new", iconKind: "whats-new" },
  ],
  roleContent: {
    student: {
      tasksHeading: "Common tasks for students",
      problemsHeading: "Common problems for students",
      tasks: [
        { label: "Sign in to WebAssign", href: signInAccountHref() },
        { label: "Enroll with a class key", href: helpArticleHref("webassign-class-key") },
        { label: "Open assignments" },
        { label: "Submit answers" },
        { label: "Access your eBook" },
        { label: "View scores" },
      ],
      problems: [
        { label: "Can't sign in", href: signInAccountHref() },
        { label: "Can't enroll with a class key", href: helpArticleHref("webassign-class-key") },
        { label: "LMS link not working", href: helpArticleHref("lms-link-not-working") },
        { label: "Signed in with wrong account", href: wrongAccountChooserHref() },
        {
          label: "Browser or device compatibility issue",
          href: helpArticleHref("browser-requirements"),
        },
        { label: "Can't access textbook or eBook" },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using WebAssign",
          links: [
            { label: "Getting started" },
            { label: "Notifications" },
            { label: "Ask Your Teacher" },
            { label: "Personal Study Plan" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Homework",
          links: [
            { label: "View assignments" },
            { label: "Open assignments" },
            { label: "Submit answers" },
            { label: "Extension requests" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBook & Resources",
          links: [
            { label: "Purchase eBook" },
            { label: "Textbook features" },
            { label: "Open resource materials" },
            { label: "Watch It and practice tools" },
          ],
        },
        {
          iconKind: "grades",
          title: "Scores & Grades",
          links: [
            { label: "View scores" },
            { label: "Assignment score details" },
            { label: "Grades summary" },
            { label: "Class insights" },
          ],
        },
        {
          iconKind: "integration",
          title: "LMS Integration",
          links: [
            { label: "Access via LMS", href: lmsAccessChooserHref() },
            { label: "New LMS integration" },
            { label: "Old LMS integration" },
            { label: "Roster sync" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Browser issues", href: helpArticleHref("browser-requirements") },
            { label: "LMS link not working", href: helpArticleHref("lms-link-not-working") },
            { label: "Missing assignments" },
            { label: "Respondus and secure testing" },
          ],
        },
      ],
    },
    instructor: {
      tasksHeading: "Common tasks for instructors",
      problemsHeading: "Common problems for instructors",
      tasks: [
        { label: "Sign in to WebAssign", href: signInAccountHref() },
        { label: "Create a class" },
        { label: "Schedule assignments" },
        { label: "Manage roster" },
        { label: "View scores" },
        { label: "Set up LMS links" },
      ],
      problems: [
        { label: "Can't access class tools" },
        { label: "Students can't open assignments" },
        { label: "LMS integration issues", href: errorSyncChooserHref() },
        { label: "Roster drops and transfers not synced" },
        { label: "Gradebook not matching LMS" },
        {
          label: "Browser or device compatibility issue",
          href: helpArticleHref("browser-requirements"),
        },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using WebAssign",
          links: [
            { label: "Getting started" },
            { label: "Class settings" },
            { label: "Notifications" },
            { label: "Faculty memos" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Homework",
          links: [
            { label: "Create assignments" },
            { label: "Reschedule assignments" },
            { label: "Assignment templates" },
            { label: "Best practices" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBook & Resources",
          links: [
            { label: "Textbook resources" },
            { label: "Question browser" },
            { label: "My folders" },
            { label: "Personal Study Plan" },
          ],
        },
        {
          iconKind: "grades",
          title: "Scores & Grades",
          links: [
            { label: "View scores" },
            { label: "Edit student view" },
            { label: "Download grades" },
            { label: "Statistics" },
          ],
        },
        {
          iconKind: "integration",
          title: "LMS Integration",
          links: [
            { label: "New LMS integration" },
            { label: "Old LMS integration" },
            { label: "Grade passback" },
            { label: "Roster sync" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Browser issues", href: helpArticleHref("browser-requirements") },
            { label: "Students can't access assignments" },
            { label: "Roster sync issues" },
            { label: "Class key problems" },
          ],
        },
      ],
    },
    "lms-admin": {
      tasksHeading: "Common tasks for LMS administrators",
      problemsHeading: "Common problems for LMS administrators",
      tasks: [
        { label: "Configure LMS integration" },
        { label: "Deploy LTI tools" },
        { label: "Manage SSO settings" },
        { label: "Prepare roster files" },
        { label: "Review grade passback" },
        { label: "Maintain course links" },
      ],
      problems: [
        { label: "Integration not connecting" },
        { label: "Grades not passing back" },
        { label: "Deep links not working" },
        { label: "User sync issues" },
        { label: "Roster drops and transfers not synced" },
        { label: "LTI configuration errors" },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using WebAssign",
          links: [
            { label: "Getting started" },
            { label: "Authentication options" },
            { label: "Support instructors" },
            { label: "Documentation" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Homework",
          links: [
            { label: "Course setup" },
            { label: "Assignment availability" },
            { label: "Template rollout" },
            { label: "Testing access" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBook & Resources",
          links: [
            { label: "Textbook associations" },
            { label: "Resource access" },
            { label: "Link permissions" },
            { label: "Media availability" },
          ],
        },
        {
          iconKind: "grades",
          title: "Scores & Grades",
          links: [
            { label: "Grade passback" },
            { label: "Score sync" },
            { label: "Reporting" },
            { label: "Download exports" },
          ],
        },
        {
          iconKind: "integration",
          title: "LMS Integration",
          links: [
            { label: "LTI setup" },
            { label: "Shibboleth" },
            { label: "Roster sync" },
            { label: "Course links" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Authentication failures" },
            { label: "User sync issues" },
            { label: "Deep-link errors" },
            { label: "Grade passback issues" },
          ],
        },
      ],
    },
  },
} satisfies ProductHubConfig;

export const samProductHubConfig = {
  slug: "sam",
  title: "SAM",
  description:
    "Help for signing in, accessing assignments, using the content player, reviewing gradebook data, and resolving common SAM issues.",
  tags: ["Skills & Assessment Platform", "Higher Education"],
  roleAriaLabel: "SAM role",
  roleTabs: [
    { id: "student", label: "Student" },
    { id: "instructor", label: "Instructor" },
    { id: "lab-admin", label: "Lab Administrator" },
  ],
  topicCards: sharedTopicCards("SAM"),
  areaSectionTitle: "Browse SAM help by area",
  resourceCards: [
    {
      label: "System requirements",
      iconKind: "system",
      href: helpArticleHref("system-requirements"),
    },
    {
      label: "Browser requirements",
      iconKind: "browser",
      href: helpArticleHref("browser-requirements"),
    },
    { label: "Keyboarding help", iconKind: "accessibility" },
    { label: "Video tutorials", iconKind: "video" },
    { label: "What's new", iconKind: "whats-new" },
  ],
  roleContent: {
    student: {
      tasksHeading: "Common tasks for students",
      problemsHeading: "Common problems for students",
      tasks: [
        { label: "Sign in to SAM", href: signInAccountHref() },
        { label: "Launch assignments" },
        { label: "Complete training" },
        { label: "Complete projects" },
        { label: "Access reading" },
        { label: "View reports and grades" },
      ],
      problems: [
        { label: "Can't sign in", href: signInAccountHref() },
        { label: "Assignment won't launch" },
        { label: "Signed in with wrong account", href: wrongAccountChooserHref() },
        {
          label: "Browser or device compatibility issue",
          href: helpArticleHref("browser-requirements"),
        },
        { label: "Missing SAM assignments" },
        { label: "Content player issue" },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using SAM",
          links: [
            { label: "Getting started" },
            { label: "Notifications" },
            { label: "Frequently asked questions" },
            { label: "Account access" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Projects",
          links: [
            { label: "Launch assignments" },
            { label: "Training assignments" },
            { label: "Projects" },
            { label: "SAM Path" },
          ],
        },
        {
          iconKind: "ebook",
          title: "Reading & Study Center",
          links: [
            { label: "Access reading" },
            { label: "Study Center" },
            { label: "eBooks" },
            { label: "MOS content player" },
          ],
        },
        {
          iconKind: "grades",
          title: "Reports & Gradebook",
          links: [
            { label: "Reports overview" },
            { label: "Gradebook" },
            { label: "Dropbox" },
            { label: "Study guides" },
          ],
        },
        {
          iconKind: "integration",
          title: "User & Section Management",
          links: [
            { label: "Sections" },
            { label: "Course roster" },
            { label: "Password help" },
            { label: "Account access" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Browser issues", href: helpArticleHref("browser-requirements") },
            { label: "Recover after crash" },
            { label: "Missing assignments" },
            { label: "Content player help" },
          ],
        },
      ],
    },
    instructor: {
      tasksHeading: "Common tasks for instructors",
      problemsHeading: "Common problems for instructors",
      tasks: [
        { label: "Sign in to SAM", href: signInAccountHref() },
        { label: "Create assignments" },
        { label: "Schedule exams and training" },
        { label: "Manage sections" },
        { label: "Review reports" },
        { label: "Grade submissions" },
      ],
      problems: [
        { label: "Students can't launch assignments" },
        { label: "Projects not submitting" },
        { label: "Gradebook not updating" },
        { label: "Secure testing issues" },
        { label: "Section or roster problems" },
        { label: "LMS integration issues", href: errorSyncChooserHref() },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using SAM",
          links: [
            { label: "Getting started" },
            { label: "Navigation basics" },
            { label: "What's new" },
            { label: "Notifications" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Projects",
          links: [
            { label: "Create assignments" },
            { label: "Schedule assignments" },
            { label: "Schedule SAM Path" },
            { label: "Preview exams" },
          ],
        },
        {
          iconKind: "ebook",
          title: "Reading & Study Center",
          links: [
            { label: "Add textbooks" },
            { label: "Access reading" },
            { label: "Study Center" },
            { label: "Reports overview" },
          ],
        },
        {
          iconKind: "grades",
          title: "Reports & Gradebook",
          links: [
            { label: "Reports" },
            { label: "Gradebook" },
            { label: "Dropbox" },
            { label: "Manual grading" },
          ],
        },
        {
          iconKind: "integration",
          title: "User & Section Management",
          links: [
            { label: "Sections" },
            { label: "Add instructors" },
            { label: "Manage students" },
            { label: "Reset assignments" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Browser issues", href: helpArticleHref("browser-requirements") },
            { label: "Secure testing" },
            { label: "Project submission issues" },
            { label: "LMS integration issues", href: errorSyncChooserHref() },
          ],
        },
      ],
    },
    "lab-admin": {
      tasksHeading: "Common tasks for lab administrators",
      problemsHeading: "Common problems for lab administrators",
      tasks: [
        { label: "Manage user accounts" },
        { label: "Import users" },
        { label: "Edit student sections" },
        { label: "Reset student scores" },
        { label: "Configure admin settings" },
        { label: "Review network testing" },
      ],
      problems: [
        { label: "Login and SAM access issues" },
        { label: "User import issues" },
        { label: "Performance or crash issues" },
        { label: "System maintenance questions" },
        { label: "Network testing failures" },
        { label: "Student assignment reset issues" },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using SAM",
          links: [
            { label: "Getting started" },
            { label: "Definitions" },
            { label: "Product architecture review" },
            { label: "Administration basics" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Assignments & Projects",
          links: [
            { label: "Delete student assignments" },
            { label: "Assignment resets" },
            { label: "Schedule support" },
            { label: "Server availability" },
          ],
        },
        {
          iconKind: "ebook",
          title: "Reading & Study Center",
          links: [
            { label: "System requirements" },
            { label: "Support materials" },
            { label: "Accessibility" },
            { label: "Reference links" },
          ],
        },
        {
          iconKind: "grades",
          title: "Reports & Gradebook",
          links: [
            { label: "Progress review" },
            { label: "Assignment score adjustments" },
            { label: "Usage review" },
            { label: "Exports" },
          ],
        },
        {
          iconKind: "integration",
          title: "User & Section Management",
          links: [
            { label: "Add user accounts" },
            { label: "Edit users" },
            { label: "Deactivate users" },
            { label: "Import users" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Login issues" },
            { label: "Recover after crash" },
            { label: "Performance testing" },
            { label: "Maintenance" },
          ],
        },
      ],
    },
  },
} satisfies ProductHubConfig;

export const sparkProductHubConfig = {
  slug: "spark",
  title: "Spark",
  description:
    "Help for signing in, joining courses, completing assignments, managing course delivery, and resolving common Spark issues.",
  tags: ["English Language Learning", "Digital Learning Platform"],
  roleAriaLabel: "Spark role",
  roleTabs: [
    { id: "student", label: "Student" },
    { id: "instructor", label: "Instructor" },
    { id: "institutional-admin", label: "Institutional Administrator" },
  ],
  topicCards: sharedTopicCards("Spark"),
  areaSectionTitle: "Browse Spark help by area",
  resourceCards: [
    { label: "System requirements", iconKind: "system", href: helpArticleHref("spark-system-requirements") },
    { label: "Platform languages", iconKind: "browser" },
    { label: "Classroom Presentation Tool", iconKind: "accessibility" },
    { label: "Video tutorials", iconKind: "video" },
    { label: "What's new", iconKind: "whats-new" },
  ],
  roleContent: {
    student: {
      tasksHeading: "Common tasks for students",
      problemsHeading: "Common problems for students",
      tasks: [
        { label: "Sign in to Spark", href: helpArticleHref("spark-sign-in") },
        { label: "Create an account" },
        { label: "Join a course", href: helpArticleHref("spark-join-course") },
        { label: "Complete assignments", href: helpArticleHref("spark-assignments") },
        { label: "Access eBooks and media" },
        { label: "View your progress", href: helpArticleHref("spark-view-your-grades") },
      ],
      problems: [
        { label: "Can't sign in", href: signInAccountHref() },
        { label: "Signed in with wrong account", href: wrongAccountChooserHref() },
        { label: "Missing activities or assignments", href: helpArticleHref("spark-missing-activities") },
        { label: "Course key or join code not working", href: helpArticleHref("spark-no-course-key") },
        { label: "Can't access eBooks or resources" },
        { label: "Browser or device issue", href: helpArticleHref("spark-system-requirements") },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using Spark",
          links: [
            { label: "Getting started" },
            { label: "Dashboard basics" },
            { label: "Messages" },
            { label: "Platform languages" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Courses & Assignments",
          links: [
            { label: "Join a course", href: helpArticleHref("spark-join-course") },
            { label: "Complete assignments", href: helpArticleHref("spark-assignments") },
            { label: "Take tests" },
            { label: "Self-study courses" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBooks & Resources",
          links: [
            { label: "Access eBooks" },
            { label: "Audio and video resources" },
            { label: "Companion sites" },
            { label: "Offline access" },
          ],
        },
        {
          iconKind: "grades",
          title: "Gradebook & Results",
          links: [
            { label: "View your grades", href: helpArticleHref("spark-view-your-grades") },
            { label: "Track progress" },
            { label: "Results" },
            { label: "Assignment review" },
          ],
        },
        {
          iconKind: "integration",
          title: "Course & User Management",
          links: [
            { label: "Course key lookup", href: helpArticleHref("spark-course-key-lookup") },
            { label: "Join self-study" },
            { label: "Account settings", href: manageAccountChooserHref() },
            { label: "Messages" },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Can't sign in", href: signInAccountHref() },
            { label: "Wrong account", href: wrongAccountChooserHref() },
            { label: "Missing assignments", href: helpArticleHref("spark-missing-activities") },
            { label: "Course access issues", href: helpArticleHref("spark-no-course-key") },
          ],
        },
      ],
    },
    instructor: {
      tasksHeading: "Common tasks for instructors",
      problemsHeading: "Common problems for instructors",
      tasks: [
        { label: "Sign in to Spark", href: signInAccountHref() },
        { label: "Create a course", href: helpArticleHref("spark-create-course") },
        { label: "Create assignments" },
        { label: "Use Dynamic Lessons", href: helpArticleHref("spark-dynamic-lessons") },
        { label: "Manage students", href: helpArticleHref("spark-manage-users") },
        { label: "View gradebook data" },
      ],
      problems: [
        { label: "Students can't see assignments" },
        { label: "Course setup issues" },
        { label: "LMS integration issues", href: helpArticleHref("spark-lti-1-3-course-management") },
        { label: "Gradebook or results not updating" },
        { label: "Student roster issues" },
        { label: "Password or account issue", href: signInAccountHref() },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using Spark",
          links: [
            { label: "Getting started" },
            { label: "Teacher dashboard" },
            { label: "Platform languages" },
            { label: "Dynamic Lessons", href: helpArticleHref("spark-dynamic-lessons") },
          ],
        },
        {
          iconKind: "assignments",
          title: "Courses & Assignments",
          links: [
            { label: "Create a course", href: helpArticleHref("spark-create-course") },
            { label: "Create assignments" },
            { label: "Tests" },
            { label: "Copy a course" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBooks & Resources",
          links: [
            { label: "Classroom Presentation Tool" },
            { label: "Companion sites" },
            { label: "Online CPT" },
            { label: "Offline CPT" },
          ],
        },
        {
          iconKind: "grades",
          title: "Gradebook & Results",
          links: [
            { label: "Gradebook" },
            { label: "Export gradebook data" },
            { label: "Preview a test" },
            { label: "View test scores" },
          ],
        },
        {
          iconKind: "integration",
          title: "Course & User Management",
          links: [
            { label: "Manage users", href: helpArticleHref("spark-manage-users") },
            { label: "Add co-instructors" },
            { label: "Self-registration guide" },
            { label: "LMS course management", href: helpArticleHref("spark-lti-1-3-course-management") },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Account issues", href: signInAccountHref() },
            { label: "Students can't see assignments" },
            { label: "LMS integration issues", href: helpArticleHref("spark-lti-1-3-course-management") },
            { label: "Missing content" },
          ],
        },
      ],
    },
    "institutional-admin": {
      tasksHeading: "Common tasks for institutional administrators",
      problemsHeading: "Common problems for institutional administrators",
      tasks: [
        { label: "Configure school settings", href: helpArticleHref("spark-institutional-settings") },
        { label: "Create and manage courses", href: helpArticleHref("spark-create-course") },
        { label: "Manage students and instructors", href: helpArticleHref("spark-manage-users") },
        { label: "Import users or courses" },
        { label: "Review institutional reports" },
        { label: "Support password resets", href: helpArticleHref("spark-manage-users") },
      ],
      problems: [
        { label: "Users can't access Spark", href: helpArticleHref("spark-manage-users") },
        { label: "LMS integration not connecting", href: helpArticleHref("spark-lti-1-3-course-management") },
        { label: "User import issues", href: helpArticleHref("spark-manage-users") },
        { label: "Course provisioning issues" },
        { label: "Grade export issues", href: helpArticleHref("spark-institutional-settings") },
        { label: "School settings not applying", href: helpArticleHref("spark-institutional-settings") },
      ],
      areas: [
        {
          iconKind: "using",
          title: "Using Spark",
          links: [
            { label: "Getting started" },
            { label: "Institution overview" },
            { label: "Platform languages" },
            { label: "Support portal" },
          ],
        },
        {
          iconKind: "assignments",
          title: "Courses & Assignments",
          links: [
            { label: "Create a Spark course", href: helpArticleHref("spark-create-course") },
            { label: "Copy a course" },
            { label: "Delete a course" },
            { label: "Assignment setup" },
          ],
        },
        {
          iconKind: "ebook",
          title: "eBooks & Resources",
          links: [
            { label: "Classroom Presentation Tool" },
            { label: "Sites to allow" },
            { label: "Program resources" },
            { label: "Offline access" },
          ],
        },
        {
          iconKind: "grades",
          title: "Gradebook & Results",
          links: [
            { label: "Export institutional report" },
            { label: "Export gradebook data" },
            { label: "Review results" },
            { label: "Download reports" },
          ],
        },
        {
          iconKind: "integration",
          title: "Course & User Management",
          links: [
            { label: "Manage users", href: helpArticleHref("spark-manage-users") },
            { label: "Import students" },
            { label: "Import instructors" },
            { label: "Institution settings", href: helpArticleHref("spark-institutional-settings") },
          ],
        },
        {
          iconKind: "troubleshooting",
          title: "Troubleshooting",
          links: [
            { label: "Access issues" },
            { label: "User import issues", href: helpArticleHref("spark-manage-users") },
            { label: "Problems uploading roster" },
            { label: "Support portal" },
          ],
        },
      ],
    },
  },
} satisfies ProductHubConfig;

export const productHubConfigs = {
  mindtap: mindTapProductHubConfig,
  sam: samProductHubConfig,
  spark: sparkProductHubConfig,
  webassign: webAssignProductHubConfig,
} as const;
