import type { ReactNode } from "react";
import {
  browseByProductHref,
  contactSupportHref,
  externalRoutes,
  helpArticleHref,
  helpDomainHref,
  resetPasswordHref,
  wrongAccountChooserHref,
  type HelpArticleSlug,
} from "../../app/routes";

type HelpArticleLink = {
  href?: string;
  label: string;
};

export type HelpArticleCallout = {
  paragraphs: ReactNode[];
  title: ReactNode;
};

export type HelpArticleSectionItem =
  | {
      content: ReactNode;
      kind: "paragraph";
    }
  | {
      items: ReactNode[];
      kind: "list";
      ordered?: boolean;
    }
  | {
      items: {
        details?: ReactNode[];
        title: ReactNode;
      }[];
      kind: "steps";
    }
  | {
      items: {
        content: ReactNode;
        term: ReactNode;
      }[];
      kind: "definitions";
    }
  | {
      columns: HelpArticleLink[][];
      kind: "utility-columns";
    }
  | {
      items: HelpArticleLink[];
      kind: "action-links";
    }
  | {
      paragraphs: ReactNode[];
      title?: ReactNode;
      kind: "note";
    };

export type HelpArticleSection = {
  description?: ReactNode;
  items: HelpArticleSectionItem[];
  title: ReactNode;
};

export type HelpArticleDefinition = {
  appliesTo?: string;
  callout?: HelpArticleCallout;
  helpArea: string;
  parentHref?: string;
  parentLabel: string;
  product?: string;
  relatedHelpGroups: {
    heading: string;
    links: HelpArticleLink[];
  }[];
  sections: HelpArticleSection[];
  slug: HelpArticleSlug;
  summary: ReactNode;
  tags: string[];
  title: string;
  updated?: string;
};

function inlineExternalLink(href: string, label: string) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

function inlineHelpDomainLink(
  helpDomain: "sign-in-account" | "course-access-enrollment" | "troubleshooting-common-problems",
  label: string
) {
  return <a href={helpDomainHref(helpDomain)}>{label}</a>;
}

const sparkHubHref = browseByProductHref("spark");
const sparkPlatformHref = "https://learn.eltngl.com";

export const helpArticleDefinitions: Record<HelpArticleSlug, HelpArticleDefinition> = {
  "sign-in": {
    slug: "sign-in",
    title: "Sign In",
    summary: "Sign in to your Cengage account to access your course materials.",
    parentLabel: "Sign In & Account Help",
    parentHref: helpDomainHref("sign-in-account"),
    tags: ["MindTap", "Student", "Sign In & Account Help"],
    appliesTo: "MindTap · Student",
    product: "MindTap",
    helpArea: "Sign In & Account Help",
    updated: "March 2026",
    callout: {
      title: "Before you sign in",
      paragraphs: [
        "If you use a learning management system (LMS), use the sign-in method your LMS provides.",
        "If you sign in to your K–12 MindTap course through NGLSync, use that sign-in path.",
        "Otherwise, sign in with your Cengage account.",
      ],
    },
    sections: [
      {
        title: "How to sign in",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: (
                  <>
                    Go to {inlineExternalLink(externalRoutes.cengageLogin, "login.cengage.com")}
                    .
                  </>
                ),
                details: ["Alternatively, use the link provided by your instructor."],
              },
              {
                title: "Enter your username and click Next.",
                details: [
                  "Your username is the email address you used to create your account.",
                  "If you are a new student, see Create an account.",
                ],
              },
              {
                title: "Enter your password and click Sign In.",
              },
              {
                title: "Open your MindTap course.",
                details: [
                  <>
                    If prompted, provide your student ID. If you do not see your course, see{" "}
                    {inlineHelpDomainLink(
                      "course-access-enrollment",
                      "Course Access & Enrollment"
                    )}
                    .
                  </>,
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Other sign-in options",
        description: "Alternative ways to access your course",
        items: [
          {
            kind: "action-links",
            items: [
              {
                label: "Sign In Through Your LMS",
                href: resetPasswordHref("lms"),
              },
              {
                label: "Create an Account",
              },
              {
                label: "Manage Account",
              },
            ],
          },
        ],
      },
      {
        title: "Account management",
        description: "Update your account settings and preferences",
        items: [
          {
            kind: "utility-columns",
            columns: [
              [
                {
                  label: "Forgot Your Username",
                  href: helpArticleHref("forgot-username"),
                },
                { label: "Edit Your User Profile" },
                { label: "Delete Account" },
                { label: "Forgot Password", href: resetPasswordHref() },
              ],
              [
                { label: "Change Email Address" },
                { label: "Merge Multiple Accounts" },
                { label: "Change Your Password" },
              ],
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "If you're having trouble",
        links: [
          {
            label: "Forgot username",
            href: helpArticleHref("forgot-username"),
          },
          {
            label: "Reset password",
            href: resetPasswordHref(),
          },
        ],
      },
      {
        heading: "Other sign-in methods",
        links: [
          {
            label: "LMS sign-in",
            href: resetPasswordHref("lms"),
          },
          {
            label: "NGLSync sign-in",
            href: resetPasswordHref("school-nglsync"),
          },
        ],
      },
    ],
  },
  "spark-sign-in": {
    slug: "spark-sign-in",
    title: "Sign In",
    summary: "Sign in to Spark to access your English language courses.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Student", "Sign In & Account Help"],
    appliesTo: "Spark students",
    product: "Spark",
    helpArea: "Sign In & Account Help",
    updated: "January 13, 2026",
    sections: [
      {
        title: "Sign in to Spark",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: (
                  <>
                    Optional: Click the language selector menu in the upper-right corner to select
                    your preferred language.
                  </>
                ),
              },
              {
                title: (
                  <>
                    Sign in at {inlineExternalLink(sparkPlatformHref, "learn.eltngl.com")}.
                  </>
                ),
                details: [
                  "Click Sign in.",
                  "Enter your Username and Password.",
                  "Click Sign in.",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "Sign in for the first time",
        items: [
          {
            kind: "paragraph",
            content:
              "If your instructor created your account for you, you might receive an email from Spark with a link to create a password.",
          },
          {
            kind: "steps",
            items: [
              { title: "Open the welcome email and click Set Password." },
              { title: "Enter your password in New password." },
              { title: "Repeat your password in Repeat password." },
              { title: "Read and accept the Terms of use and Privacy policy." },
              { title: "Click Update." },
            ],
          },
          {
            kind: "paragraph",
            content: "You are signed in to Spark.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Join a Spark course", href: helpArticleHref("spark-join-course") },
          { label: "Course Access & Enrollment", href: helpDomainHref("course-access-enrollment") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "spark-join-course": {
    slug: "spark-join-course",
    title: "Join a Course",
    summary: "Enroll in a teacher-led Spark course with your existing account.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Student", "Course Access & Enrollment"],
    appliesTo: "Spark students",
    product: "Spark",
    helpArea: "Course Access & Enrollment",
    updated: "January 13, 2026",
    callout: {
      title: "Before you join a course",
      paragraphs: [
        "If you do not have an account, create one first.",
        "For some schools, your teacher or school administrator will add you to the Spark course. Ask your teacher for your username and password.",
        "Your instructor may have given you a course key or a self-registration guide with a course-specific link. If you do not have either of these, ask your instructor.",
      ],
    },
    sections: [
      {
        title: "I have a self-registration guide or link",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Click the link provided in your self-registration guide." },
              {
                title: "If prompted, enter your Access Code.",
                details: [
                  "Find your access code in your book or printed access card by scratching off the coating.",
                  "You might also be able to purchase an online access code.",
                  "For some courses, your teacher will give you an access code.",
                ],
              },
              {
                title: "Sign in using your existing Spark account.",
                details: [
                  "Click Sign in.",
                  "Enter your Username and Password.",
                  "Click Sign in.",
                ],
              },
            ],
          },
        ],
      },
      {
        title: "I have a course key",
        items: [
          {
            kind: "note",
            title: "Note",
            paragraphs: [
              "Do not create a new account. Use your existing Spark credentials.",
            ],
          },
          {
            kind: "steps",
            items: [
              {
                title: (
                  <>
                    Sign in at {inlineExternalLink(sparkPlatformHref, "learn.eltngl.com")}.
                  </>
                ),
                details: [
                  "Click Sign in.",
                  "Enter your Username and Password.",
                  "Click Sign in.",
                ],
              },
              { title: "Click the Courses tab in Spark." },
              { title: "Click Join a course." },
              {
                title: "In the Course key field, enter your course key.",
                details: ["Get the course key from your teacher."],
              },
              {
                title: "If prompted, enter your Access Code.",
                details: ["This step is skipped if you do not need to enter an access code."],
              },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Spark Course Key Lookup", href: helpArticleHref("spark-course-key-lookup") },
          { label: "No Course Key for Spark", href: helpArticleHref("spark-no-course-key") },
        ],
      },
      {
        heading: "Account help",
        links: [
          { label: "Sign In", href: helpArticleHref("spark-sign-in") },
          { label: "Sign In & Account Help", href: helpDomainHref("sign-in-account") },
        ],
      },
    ],
  },
  "spark-course-key-lookup": {
    slug: "spark-course-key-lookup",
    title: "Spark Course Key Lookup",
    summary:
      "If you do not have a teacher, get your course key to enroll in self-study courses in Spark.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Student", "Course Access & Enrollment"],
    appliesTo: "Spark students using self-study courses",
    product: "Spark",
    helpArea: "Course Access & Enrollment",
    updated: "January 13, 2026",
    callout: {
      title: "Important",
      paragraphs: [
        "Use Spark for self-study only if you do not have a teacher and you are not learning English in a school.",
      ],
    },
    sections: [
      {
        title: "Information used for course key lookup",
        items: [
          {
            kind: "definitions",
            items: [
              {
                term: "Region",
                content: "Where are you studying?",
              },
              {
                term: "Product",
                content: "What textbook are you using?",
              },
              {
                term: "Level",
                content: "What level are you studying?",
              },
              {
                term: "Course key",
                content: "Start Again",
              },
            ],
          },
        ],
      },
      {
        title: "Related self-study actions",
        items: [
          {
            kind: "action-links",
            items: [
              { label: "Create Account for Self-Study" },
              { label: "Join a Course for Self-Study" },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Join a Spark course", href: helpArticleHref("spark-join-course") },
          { label: "No Course Key for Spark", href: helpArticleHref("spark-no-course-key") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "spark-no-course-key": {
    slug: "spark-no-course-key",
    title: "No Course Key for Spark",
    summary:
      "You're trying to create an account or join a Spark course, but you don't have a course key.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Student", "Course Access & Enrollment"],
    appliesTo: "Spark students",
    product: "Spark",
    helpArea: "Course Access & Enrollment",
    updated: "January 13, 2026",
    sections: [
      {
        title: "LMS-integrated course",
        items: [
          {
            kind: "paragraph",
            content:
              "You do not need a course key if Spark is integrated with a Learning Management System (LMS) like Canvas, Moodle, or Blackboard.",
          },
          {
            kind: "steps",
            items: [
              { title: "Sign in to your LMS." },
              {
                title: "Click the course link to Spark.",
                details: ["Ask your teacher for help if you need it."],
              },
            ],
          },
        ],
      },
      {
        title: "Self-study course",
        items: [
          {
            kind: "note",
            title: "Important",
            paragraphs: [
              "Use Spark for self-study only if you do not have a teacher and you are not learning English in a school.",
            ],
          },
          {
            kind: "action-links",
            items: [
              { label: "Create Account for Self-Study" },
              { label: "Join a Course for Self-Study" },
            ],
          },
        ],
      },
      {
        title: "Other",
        items: [
          {
            kind: "paragraph",
            content: "Ask your teacher how to join the course.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related access help",
        links: [
          { label: "Join a Spark course", href: helpArticleHref("spark-join-course") },
          { label: "Spark Course Key Lookup", href: helpArticleHref("spark-course-key-lookup") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Course Access & Enrollment", href: helpDomainHref("course-access-enrollment") }],
      },
    ],
  },
  "spark-assignments": {
    slug: "spark-assignments",
    title: "Assignments",
    summary: "Complete assignments your instructor has assigned to you in Spark.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Student", "Spark product help"],
    appliesTo: "Spark secondary and adult students",
    product: "Spark",
    helpArea: "Spark product help",
    updated: "April 6, 2026",
    sections: [
      {
        title: "Complete assignments",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Click the Assignments tab in Spark." },
              {
                title: "Click the assignment you want to complete.",
                details: [
                  "Completed activities within that assignment are indicated by the Done icon.",
                ],
              },
              { title: "Click the activity you want to complete." },
              { title: "Follow the instructions to complete the activity." },
              {
                title: "Click the next arrow to go to the next page and the back arrow to go to the previous page.",
              },
              {
                title: "Click Submit Answers to submit your answers and see your final score.",
              },
            ],
          },
        ],
      },
      {
        title: "After you submit your answers",
        items: [
          {
            kind: "list",
            items: [
              "Click the next activity arrow to go to the next activity.",
              "If your instructor has allowed for retakes, click Retry to try again.",
              "Click the close activity icon to exit the activity.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "View your grades", href: helpArticleHref("spark-view-your-grades") },
          { label: "Troubleshooting & Common Problems", href: helpDomainHref("troubleshooting-common-problems") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Spark", href: sparkHubHref }],
      },
    ],
  },
  "spark-view-your-grades": {
    slug: "spark-view-your-grades",
    title: "View Your Grades",
    summary:
      "Access the Gradebook to view your progress and grades on activities, assignments and tests in Spark.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Student", "Spark product help"],
    appliesTo: "Spark secondary and adult students",
    product: "Spark",
    helpArea: "Spark product help",
    updated: "January 13, 2026",
    sections: [
      {
        title: "View your grades",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: "Click the Gradebook tab in Spark.",
                details: [
                  "For each course, you can see Average score, Percentage of assigned work completed, Percentage of unassigned work completed, and the total time you spent on all practice activities, assignments, and tests.",
                ],
              },
              {
                title: "Scroll to the course you want and click View.",
                details: [
                  "Use the All assigned & unassigned work, All assigned work, and Tests only tabs to view the specific results you want.",
                ],
              },
              { title: "Click the dropdown arrow next to the activity, assignment, or test that you want." },
              {
                title: "Click View to see your grade on the individual activity, assignment, or test.",
                details: [
                  "Assignments, activities, and tests that your teacher has not yet graded are indicated by the manual-grade pending icon.",
                ],
              },
              { title: "Click the eye icon to review your answers." },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Assignments", href: helpArticleHref("spark-assignments") },
          { label: "Troubleshooting & Common Problems", href: helpDomainHref("troubleshooting-common-problems") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Spark", href: sparkHubHref }],
      },
    ],
  },
  "spark-system-requirements": {
    slug: "spark-system-requirements",
    title: "System Requirements for Spark",
    summary: "The Spark platform and app support the following operating systems and browsers.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "English Language Learning", "Spark product help"],
    appliesTo: "Spark students, instructors, and institutional administrators",
    product: "Spark",
    helpArea: "Spark product help",
    updated: "January 13, 2026",
    sections: [
      {
        title: "Spark platform",
        items: [
          {
            kind: "paragraph",
            content: (
              <>
                Sign in to the Spark platform at{" "}
                {inlineExternalLink(sparkPlatformHref, "learn.eltngl.com")} to join a course,
                access the eBook and audio/video resources, complete activities, and view your
                grades.
              </>
            ),
          },
          {
            kind: "definitions",
            items: [
              {
                term: "Windows (64-bit) 7",
                content: (
                  <ul className="help-article-body-list">
                    <li>Chrome latest version</li>
                    <li>Firefox latest version</li>
                  </ul>
                ),
              },
              { term: "Windows 10", content: "Edge latest version" },
              { term: "MacOS 10.15 or later", content: "Safari latest version" },
              { term: "iPad 2 or later", content: "Safari latest version" },
              { term: "iPhone 7 or later", content: "Safari latest version" },
              { term: "Android 7.0", content: "Chrome latest version" },
            ],
          },
        ],
      },
      {
        title: "Spark app",
        items: [
          {
            kind: "paragraph",
            content:
              "The Spark app lets students download their eBook, audio and video resources, and activities for offline use. Activities completed offline sync with the Spark platform when the device is back online. The app is available in the iOS and Android app stores.",
          },
          {
            kind: "definitions",
            items: [
              { term: "iOS", content: "12.0 or later" },
              { term: "Android", content: "8.0 or later" },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Browser or device issues", href: helpDomainHref("troubleshooting-common-problems") },
          { label: "Spark", href: sparkHubHref },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "spark-create-course": {
    slug: "spark-create-course",
    title: "Create a Spark Course",
    summary: "Create your course in Spark.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Instructor", "Spark product help"],
    appliesTo: "Spark instructors",
    product: "Spark",
    helpArea: "Spark product help",
    updated: "February 23, 2026",
    sections: [
      {
        title: "Before you create a course",
        items: [
          {
            kind: "paragraph",
            content:
              "If you are integrating with a learning management system (LMS) like Blackboard or Canvas, see LTI 1.0 LMS.",
          },
        ],
      },
      {
        title: "Create a Spark course",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: "Sign in to Spark.",
                details: ["The Class Content page opens."],
              },
              { title: "Click Create Course +." },
              { title: "Select Create a new course, then click Continue." },
              {
                title: "Complete the required information for your course.",
                details: [
                  "Course Name: how the course is listed in Spark.",
                  "Recommended naming format: Semester, Year, Course, Book.",
                  "Start Date: the first day students can access the course.",
                  "End Date: the last day students can access the course.",
                  "Select whether students can see all the course content and activities or only the content you have assigned.",
                  "For the best Spark experience, select Assignments only.",
                  "Additional Information is optional and can include the course section or term.",
                ],
              },
              {
                title: "From the Select Program dropdown menu, choose the National Geographic Learning program you want for your course.",
                details: [
                  "If you are creating a course for the Online Placement Test, select General Online Placement Test.",
                ],
              },
              {
                title: "Optional: Select additional co-instructors for your course.",
                details: [
                  "Click Add Instructors and select an instructor.",
                  "Repeat for each co-instructor.",
                ],
              },
              { title: "Click Confirm." },
            ],
          },
          {
            kind: "paragraph",
            content:
              "Your new course is created and listed on the Dashboard tab.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Manage Users", href: helpArticleHref("spark-manage-users") },
          { label: "LTI 1.3 LMS Course Management", href: helpArticleHref("spark-lti-1-3-course-management") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Spark", href: sparkHubHref }],
      },
    ],
  },
  "spark-lti-1-3-course-management": {
    slug: "spark-lti-1-3-course-management",
    title: "LTI 1.3 LMS Course Management",
    summary:
      "Create Spark courses, assignments, and tests within your institution's LTI 1.3 Learning Management System.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "LMS Administrator", "Spark product help"],
    appliesTo: "Spark instructors and LMS administrators working with LTI 1.3",
    product: "Spark",
    helpArea: "Spark product help",
    updated: "January 13, 2026",
    sections: [
      {
        title: "LTI 1.3 LMS options",
        items: [
          {
            kind: "action-links",
            items: [
              { label: "Blackboard" },
              { label: "Canvas" },
              { label: "Moodle" },
              { label: "Schoology" },
              { label: "Copy a Spark Course in Your LMS" },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Create a Spark course", href: helpArticleHref("spark-create-course") },
          { label: "Troubleshooting & Common Problems", href: helpDomainHref("troubleshooting-common-problems") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "spark-manage-users": {
    slug: "spark-manage-users",
    title: "Manage Users",
    summary:
      "Add, upload, remove, and edit students, instructors, and administrators in a course.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Institutional Administrator", "Spark product help"],
    appliesTo: "Spark institutional administrators",
    product: "Spark",
    helpArea: "Spark product help",
    updated: "February 2, 2026",
    sections: [
      {
        title: "Manage users in Spark",
        items: [
          {
            kind: "action-links",
            items: [
              { label: "Instructors" },
              { label: "Students" },
            ],
          },
          {
            kind: "paragraph",
            content:
              "Add, edit, and remove instructors for your institution. If an instructor forgets their password and cannot sign in, you can reset their password.",
          },
          {
            kind: "paragraph",
            content:
              "Manage your course roster in Spark by adding students to your course, editing their information, and resetting their passwords if they cannot access their accounts.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Create a Spark course", href: helpArticleHref("spark-create-course") },
          { label: "Sign In & Account Help", href: helpDomainHref("sign-in-account") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Spark", href: sparkHubHref }],
      },
    ],
  },
  "forgot-username": {
    slug: "forgot-username",
    title: "Forgot username",
    summary: "Your username is the email address associated with your Cengage account.",
    parentLabel: "Sign In & Account Help",
    parentHref: helpDomainHref("sign-in-account"),
    tags: ["Student", "Instructor", "Sign In & Account Help"],
    appliesTo: "Students and instructors using a Cengage account",
    product: "MindTap, WebAssign, SAM, and Spark",
    helpArea: "Sign In & Account Help",
    callout: {
      title: "If you use NGLSync",
      paragraphs: [
        "If you access Cengage through NGLSync, your username might not be an email address. Ask your teacher to look up your username.",
      ],
    },
    sections: [
      {
        title: "If you are not able to sign in to your Cengage account",
        items: [
          {
            kind: "paragraph",
            content: "You are not able to look up your username.",
          },
          {
            kind: "list",
            items: [
              "Try signing in with your school email address.",
              "Try signing in with an alternate email address.",
              "Contact customer support.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Try next",
        links: [
          { label: "Reset password", href: resetPasswordHref() },
          { label: "Wrong account", href: wrongAccountChooserHref() },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "wrong-account": {
    slug: "wrong-account",
    title: "Wrong account",
    summary:
      "When you purchase access and sign in, you see a message that you have not purchased access yet.",
    parentLabel: "Sign In & Account Help",
    parentHref: helpDomainHref("sign-in-account"),
    tags: ["Student", "Sign In & Account Help", "Purchase & Access"],
    appliesTo: "Students with purchased course access",
    product: "MindTap, WebAssign, SAM, and Spark",
    helpArea: "Sign In & Account Help",
    sections: [
      {
        title: "Cause",
        items: [
          {
            kind: "paragraph",
            content: "You have purchased access using a different account.",
          },
        ],
      },
      {
        title: "Resolution",
        items: [
          {
            kind: "paragraph",
            content:
              "Contact Customer Support and request to have access transferred to another account.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related account help",
        links: [
          { label: "Forgot username", href: helpArticleHref("forgot-username") },
          { label: "Reset password", href: resetPasswordHref() },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "browser-requirements": {
    slug: "browser-requirements",
    title: "Browser requirements",
    summary:
      "Cengage web-based learning platforms require broadband internet access and supported web browsers and plugins.",
    parentLabel: "Troubleshooting & Common Problems",
    parentHref: helpDomainHref("troubleshooting-common-problems"),
    tags: ["Student", "Instructor", "Troubleshooting & Common Problems"],
    appliesTo: "Students and instructors using MindTap, WebAssign, or SAM on the web",
    product: "MindTap, WebAssign, and SAM",
    helpArea: "Troubleshooting & Common Problems",
    callout: {
      title: "Supported browsers can vary",
      paragraphs: ["Supported browsers for different activity types may vary."],
    },
    sections: [
      {
        title: "Supported browsers",
        items: [
          {
            kind: "definitions",
            items: [
              {
                term: "Windows",
                content: (
                  <ul className="help-article-body-list">
                    <li>Chrome latest version</li>
                    <li>Microsoft Edge latest version</li>
                  </ul>
                ),
              },
              {
                term: "macOS",
                content: (
                  <ul className="help-article-body-list">
                    <li>Chrome latest version</li>
                    <li>Safari latest version</li>
                  </ul>
                ),
              },
              {
                term: "ChromeOS",
                content: (
                  <ul className="help-article-body-list">
                    <li>Chrome latest version</li>
                  </ul>
                ),
              },
              {
                term: "iOS",
                content: (
                  <ul className="help-article-body-list">
                    <li>Safari latest version</li>
                    <li>Chrome latest version</li>
                  </ul>
                ),
              },
            ],
          },
          {
            kind: "note",
            paragraphs: [
              "Features and content are not optimized for a small screen size and might be difficult to use.",
            ],
          },
        ],
      },
      {
        title: "Unsupported browsers",
        items: [
          {
            kind: "paragraph",
            content:
              "Other browsers and versions might also work but are not supported. If you have problems when using an unsupported browser version, try using a supported browser version before contacting Customer Support.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Technical troubleshooting",
        links: [
          {
            label: "System requirements",
            href: helpArticleHref("system-requirements"),
          },
          {
            label: "LMS link not working",
            href: helpArticleHref("lms-link-not-working"),
          },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "system-requirements": {
    slug: "system-requirements",
    title: "System requirements",
    summary:
      "Cengage web-based learning platforms require broadband internet access and supported web browsers and plugins.",
    parentLabel: "Troubleshooting & Common Problems",
    parentHref: helpDomainHref("troubleshooting-common-problems"),
    tags: ["Student", "Instructor", "Troubleshooting & Common Problems"],
    appliesTo: "Students and instructors using MindTap, WebAssign, or SAM on the web",
    product: "MindTap, WebAssign, and SAM",
    helpArea: "Troubleshooting & Common Problems",
    sections: [
      {
        title: "Workstation Recommendations",
        items: [
          {
            kind: "list",
            items: [
              "Download bandwidth: 5+ Mbps",
              "RAM: 2+ GB",
              "CPU: 1.8+ GHz / multi-core",
              "Display: 1366 × 768, color",
              "Graphics: DirectX, 64+ MB",
              "Sound (for some content)",
            ],
          },
        ],
      },
      {
        title: "Browser compatibility",
        items: [
          {
            kind: "paragraph",
            content:
              "Other browsers and versions might also work but are not supported. If you have problems when using an unsupported browser version, try using a supported browser version before contacting Customer Support.",
          },
        ],
      },
      {
        title: "Learning Management System (LMS) Notes",
        items: [
          {
            kind: "list",
            items: [
              "For Blackboard Ultra, support is limited to basic LTI integration only; building block integration is not supported.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Technical troubleshooting",
        links: [
          {
            label: "Browser requirements",
            href: helpArticleHref("browser-requirements"),
          },
          {
            label: "LMS link not working",
            href: helpArticleHref("lms-link-not-working"),
          },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "lms-link-not-working": {
    slug: "lms-link-not-working",
    title: "LMS link not working",
    summary:
      "When you click a link to a course or activity from your LMS, the link doesn't open a new browser window with the course or learning activity.",
    parentLabel: "Troubleshooting & Common Problems",
    parentHref: helpDomainHref("troubleshooting-common-problems"),
    tags: ["Student", "Instructor", "Troubleshooting & Common Problems"],
    appliesTo: "Students and instructors who access MindTap, WebAssign, or SAM through an LMS",
    product: "MindTap, WebAssign, and SAM",
    helpArea: "Troubleshooting & Common Problems",
    sections: [
      {
        title: "Cause",
        items: [
          {
            kind: "paragraph",
            content:
              "This is usually caused by the browser blocking cookies and pop-up windows from the LMS domain.",
          },
          {
            kind: "note",
            paragraphs: [
              "Because of different browsers' default settings, this is more likely to happen with Chrome and Firefox.",
            ],
          },
        ],
      },
      {
        title: "Resolution",
        items: [
          {
            kind: "paragraph",
            content:
              "In your browser settings, allow cookies and pop-up windows for both cengage.com and your LMS instance.",
          },
          {
            kind: "paragraph",
            content:
              "In some cases, a school IT policy might reset these settings periodically. If this happens, allow pop-ups and cookies again.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Browser help",
        links: [
          {
            label: "Browser requirements",
            href: helpArticleHref("browser-requirements"),
          },
          {
            label: "System requirements",
            href: helpArticleHref("system-requirements"),
          },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "missing-activities-or-assignments": {
    slug: "missing-activities-or-assignments",
    title: "My course is missing assignments",
    summary: "If there are no assignments available in your course, there are a few possible scenarios for this.",
    parentLabel: "Troubleshooting & Common Problems",
    parentHref: helpDomainHref("troubleshooting-common-problems"),
    tags: ["MyELT", "Student", "Troubleshooting & Common Problems"],
    appliesTo: "MyELT students",
    product: "MyELT",
    helpArea: "Troubleshooting & Common Problems",
    updated: "April 28, 2025",
    sections: [
      {
        title: "Why is my course missing assignments?",
        items: [
          {
            kind: "paragraph",
            content:
              "If there are no assignments available in your course, there are a few possible scenarios for this:",
          },
          {
            kind: "list",
            items: [
              "The assignments are past due or have not yet begun.",
              "The instructor removed the assignments from the course.",
              "You have reached the maximum number of takes allowed for an activity.",
            ],
          },
        ],
      },
      {
        title: "Resolution",
        items: [
          {
            kind: "paragraph",
            content: "Contact your instructor directly to see if they can assist you.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related help",
        links: [
          {
            label: "Course Access & Enrollment",
            href: helpDomainHref("course-access-enrollment"),
          },
          {
            label: "Troubleshooting & Common Problems",
            href: helpDomainHref("troubleshooting-common-problems"),
          },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
};

export function getHelpArticleDefinition(slug: HelpArticleSlug): HelpArticleDefinition {
  return helpArticleDefinitions[slug] ?? helpArticleDefinitions["sign-in"];
}
