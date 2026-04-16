import type { ReactNode } from "react";
import {
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
  "forgot-username": {
    slug: "forgot-username",
    title: "Forgot username",
    summary: "Your username is the email address associated with your Cengage account.",
    parentLabel: "Sign In & Account Help",
    parentHref: helpDomainHref("sign-in-account"),
    tags: ["Student", "Instructor", "Sign In & Account Help"],
    appliesTo: "Students and instructors using a Cengage account",
    product: "MindTap, WebAssign, SAM, MyELT, and Spark",
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
    product: "MindTap, WebAssign, SAM, MyELT, and Spark",
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
