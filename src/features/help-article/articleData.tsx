import type { ReactNode } from "react";
import {
  browseByProductHref,
  contactSupportHref,
  externalRoutes,
  helpArticleHref,
  helpDomainHref,
  joinEnrollChooserHref,
  lmsAccessChooserHref,
  manageAccountChooserHref,
  purchasedAccessChooserHref,
  resetPasswordHref,
  wrongCourseChooserHref,
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

export type HelpArticleFamilyItem = {
  label: string;
  slug: HelpArticleSlug;
};

export type HelpArticleFamily = {
  ariaLabel: string;
  items: HelpArticleFamilyItem[];
};

export type HelpArticleDefinition = {
  appliesTo?: string;
  callout?: HelpArticleCallout;
  family?: HelpArticleFamily;
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
const mindTapHubHref = browseByProductHref("mindtap");
const webAssignHubHref = browseByProductHref("webassign");
const samHubHref = browseByProductHref("sam");
const getEnrolledHref = "http://getenrolled.com/";
const sparkPlatformHref = "https://learn.eltngl.com";
const sparkDynamicLessonsVideoHref = "https://play.vidyard.com/tWJGsWXSRKrVRDavDYaiij";

function sparkDynamicLessonsFamily(): HelpArticleFamily {
  const items: HelpArticleFamilyItem[] = [
    { label: "Dynamic Lessons", slug: "spark-dynamic-lessons" },
    { label: "Customize a Lesson", slug: "spark-customize-lesson" },
    { label: "Present a Lesson", slug: "spark-present-lesson" },
    { label: "Assign an In-Class Activity", slug: "spark-in-class-activity" },
  ];

  return {
    ariaLabel: "Spark Dynamic Lessons article family",
    items,
  };
}

type HigherEdCourseKeyArticleOptions = {
  accessCodeSlug: HelpArticleSlug;
  extraCalloutParagraph?: string;
  hubHref?: string;
  keyLabel: "course key" | "class key";
  product: "MindTap" | "WebAssign";
  slug: HelpArticleSlug;
  title: string;
};

function buildHigherEdCourseKeyArticle({
  accessCodeSlug,
  extraCalloutParagraph,
  hubHref,
  keyLabel,
  product,
  slug,
  title,
}: HigherEdCourseKeyArticleOptions): HelpArticleDefinition {
  const normalizedKeyLabel = keyLabel.toLowerCase();

  return {
    slug,
    title,
    summary: `Use your instructor's ${normalizedKeyLabel} to enroll in the correct ${product} course.`,
    parentLabel: product,
    parentHref: hubHref ?? helpDomainHref("course-access-enrollment"),
    tags: [product, "Student", "Course Access & Enrollment"],
    appliesTo: `Students enrolling in ${product} with a Cengage account`,
    product,
    helpArea: "Course Access & Enrollment",
    callout: {
      title: "Before you start",
      paragraphs: [
        `Your ${normalizedKeyLabel} comes from your instructor and identifies the correct ${product} class or section.`,
        `You can enter your ${normalizedKeyLabel} from your Cengage dashboard or at ${getEnrolledHref}.`,
        ...(extraCalloutParagraph ? [extraCalloutParagraph] : []),
      ],
    },
    sections: [
      {
        title: "Enter your key from the Cengage dashboard",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: (
                  <>
                    Go to {inlineExternalLink(externalRoutes.cengageLogin, "login.cengage.com")} and
                    sign in or create a Cengage account.
                  </>
                ),
              },
              {
                title: "On your dashboard, click Enter Access Code or Course Key.",
              },
              {
                title: `Enter your ${normalizedKeyLabel} and click Register.`,
              },
            ],
          },
        ],
      },
      {
        title: "Enter your key at getenrolled.com",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: (
                  <>
                    Go to {inlineExternalLink(getEnrolledHref, "getenrolled.com")}.
                  </>
                ),
              },
              {
                title: `Enter your ${normalizedKeyLabel} and click Access Course.`,
              },
              {
                title: "If the correct class and section are listed, click Register.",
                details: [
                  `If the listed class or section is not correct, try the ${normalizedKeyLabel} again or ask your instructor for the correct one.`,
                ],
              },
              {
                title: "Sign in or create a Cengage account.",
              },
              {
                title:
                  "If prompted, enter your access code, buy course materials, or continue with temporary access.",
              },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related access help",
        links: [
          {
            label: "Register an access code",
            href: helpArticleHref(accessCodeSlug),
          },
          {
            label: "Join or enroll in a course",
            href: joinEnrollChooserHref(),
          },
        ],
      },
      {
        heading: "More help",
        links: [
          { label: product, href: hubHref },
          {
            label: "Course Access & Enrollment",
            href: helpDomainHref("course-access-enrollment"),
          },
        ],
      },
    ],
  };
}

type HigherEdAccessCodeArticleOptions = {
  courseKeyLabel: "course key" | "class key";
  courseKeySlug: HelpArticleSlug;
  extraCalloutParagraph?: string;
  hubHref?: string;
  product: "MindTap" | "WebAssign";
  slug: HelpArticleSlug;
  title: string;
};

function buildHigherEdAccessCodeArticle({
  courseKeyLabel,
  courseKeySlug,
  extraCalloutParagraph,
  hubHref,
  product,
  slug,
  title,
}: HigherEdAccessCodeArticleOptions): HelpArticleDefinition {
  return {
    slug,
    title,
    summary: `Apply your bookstore or retailer access code to unlock ${product} course materials in your Cengage account.`,
    parentLabel: product,
    parentHref: hubHref ?? helpDomainHref("course-access-enrollment"),
    tags: [product, "Student", "Course Access & Enrollment"],
    appliesTo: `Students redeeming ${product} access codes with a Cengage account`,
    product,
    helpArea: "Course Access & Enrollment",
    callout: {
      title: "Before you enter your access code",
      paragraphs: [
        `Your access code is proof of purchase for your ${product} course materials or eBook.`,
        `If you bought access from a bookstore or another retailer, register the code on your Cengage account to unlock ${product}.`,
        "You do not need to enter an access code if you already purchased directly from Cengage, your school purchased access for you, or your subscription already covers the product.",
        ...(extraCalloutParagraph ? [extraCalloutParagraph] : []),
      ],
    },
    sections: [
      {
        title: "Register your access code",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: (
                  <>
                    Go to {inlineExternalLink(externalRoutes.cengageLogin, "login.cengage.com")} and
                    sign in or create a Cengage account.
                  </>
                ),
              },
              {
                title: "On your dashboard, click Enter Access Code or Course Key.",
              },
              {
                title: "Enter your access code and click Register.",
              },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related access help",
        links: [
          {
            label: `Enter a ${courseKeyLabel}`,
            href: helpArticleHref(courseKeySlug),
          },
          {
            label: "Join or enroll in a course",
            href: joinEnrollChooserHref(),
          },
        ],
      },
      {
        heading: "More help",
        links: [
          { label: product, href: hubHref },
          {
            label: "Course Access & Enrollment",
            href: helpDomainHref("course-access-enrollment"),
          },
        ],
      },
    ],
  };
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
                href: manageAccountChooserHref(),
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
                {
                  label: "Edit Your User Profile",
                  href: manageAccountChooserHref(),
                },
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
  "mindtap-course-key": buildHigherEdCourseKeyArticle({
    slug: "mindtap-course-key",
    title: "Enter a Course Key for MindTap",
    product: "MindTap",
    keyLabel: "course key",
    hubHref: mindTapHubHref,
    accessCodeSlug: "mindtap-access-code",
  }),
  "webassign-class-key": buildHigherEdCourseKeyArticle({
    slug: "webassign-class-key",
    title: "Enter a Class Key for WebAssign",
    product: "WebAssign",
    keyLabel: "class key",
    hubHref: webAssignHubHref,
    accessCodeSlug: "webassign-access-code",
    extraCalloutParagraph:
      "If your instructor gave you an enrollment link instead of a class key, use that link instead of entering the key manually.",
  }),
  "mindtap-access-code": buildHigherEdAccessCodeArticle({
    slug: "mindtap-access-code",
    title: "Register an Access Code for MindTap",
    product: "MindTap",
    hubHref: mindTapHubHref,
    courseKeyLabel: "course key",
    courseKeySlug: "mindtap-course-key",
    extraCalloutParagraph:
      "If you already registered a multi-term MindTap access code for an earlier term, you should not need to enter it again.",
  }),
  "webassign-access-code": buildHigherEdAccessCodeArticle({
    slug: "webassign-access-code",
    title: "Register an Access Code for WebAssign",
    product: "WebAssign",
    hubHref: webAssignHubHref,
    courseKeyLabel: "class key",
    courseKeySlug: "webassign-class-key",
  }),
  "sam-access-code": {
    slug: "sam-access-code",
    title: "Enter a SAM Access Code",
    summary:
      "Use your SAM access code or key code to unlock assignments when your institution requires student-purchased access.",
    parentLabel: "SAM",
    parentHref: samHubHref,
    tags: ["SAM", "Student", "Course Access & Enrollment"],
    appliesTo: "Students at institutions using SAM key-code licensing",
    product: "SAM",
    helpArea: "Course Access & Enrollment",
    callout: {
      title: "Before you enter a code",
      paragraphs: [
        "Some schools license SAM with student key codes, while others cover access with a site license.",
        "If your institution uses a site license, you do not buy or enter your own code.",
        "Some institutions also allow a temporary grace period before code entry is required.",
      ],
    },
    sections: [
      {
        title: "When you need to add a product",
        items: [
          {
            kind: "list",
            items: [
              "Assignments that need a code can display Key Code Required until the correct product is added.",
              "After the grace period expires, you cannot take assignments, access scores, or view reports until you enter the correct code.",
            ],
          },
        ],
      },
      {
        title: "Enter your access code in SAM",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Sign in to SAM." },
              {
                title: "If you are prompted for a key code, enter your 18-digit access code and click Save.",
                details: ["During a grace period, you can choose Enter later."],
              },
              {
                title: "If assignments still show Key Code Required or stay inactive, click Add Product.",
              },
              {
                title: "Enter the product's 18-digit access code.",
              },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related access help",
        links: [
          {
            label: "Join or enroll in a course",
            href: joinEnrollChooserHref(),
          },
          {
            label: "Course Access & Enrollment",
            href: helpDomainHref("course-access-enrollment"),
          },
        ],
      },
      {
        heading: "More help",
        links: [
          { label: "SAM", href: samHubHref },
          { label: "Contact support", href: contactSupportHref() },
        ],
      },
    ],
  },
  "mindtap-missing-activities": {
    slug: "mindtap-missing-activities",
    title: "Missing Activities or Assignments in MindTap",
    summary:
      "Check the learning-path view and activity dates when work is missing from your MindTap course.",
    parentLabel: "MindTap",
    parentHref: mindTapHubHref,
    tags: ["MindTap", "Higher Ed Student", "Troubleshooting & Common Problems"],
    appliesTo: "MindTap students who do not see expected activities in the learning path",
    product: "MindTap",
    helpArea: "Troubleshooting & Common Problems",
    updated: "April 21, 2026",
    callout: {
      title: "Start in the learning path",
      paragraphs: [
        "If some activities are not displaying in your learning path, switch to Outline View first.",
        "Activity availability and due dates also affect when assignments appear to students.",
      ],
    },
    sections: [
      {
        title: "Check the learning-path view",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Open your MindTap course." },
              {
                title: "If some activities are not displaying in your learning path, switch to Outline View.",
              },
            ],
          },
        ],
      },
      {
        title: "If the activity still is not there",
        items: [
          {
            kind: "list",
            items: [
              "Ask your instructor to verify the activity's Date Available and Date Due.",
              "If your instructor changed dates for multiple activities at once, the assignment might no longer be visible when you expect it.",
              <>
                If the problem started from an LMS launch, use{" "}
                <a href={helpArticleHref("lms-link-not-working")}>LMS link not working</a>.
              </>,
              <>
                If you are in the wrong section or the wrong course, use{" "}
                <a href={wrongCourseChooserHref()}>Wrong course or missing course</a>.
              </>,
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related troubleshooting",
        links: [
          { label: "LMS link not working", href: helpArticleHref("lms-link-not-working") },
          { label: "Wrong course or missing course", href: wrongCourseChooserHref() },
        ],
      },
      {
        heading: "More help",
        links: [
          { label: "MindTap", href: mindTapHubHref },
          {
            label: "Troubleshooting & Common Problems",
            href: helpDomainHref("troubleshooting-common-problems"),
          },
        ],
      },
    ],
  },
  "mindtap-add-activities": {
    slug: "mindtap-add-activities",
    title: "Add Activities",
    summary:
      "Add textbook activities to the learning path to assign them to your students.",
    parentLabel: "MindTap",
    parentHref: mindTapHubHref,
    tags: ["MindTap", "Higher Ed Instructor", "Assignments & Activities"],
    appliesTo: "Higher Ed instructors who add textbook activities in MindTap",
    product: "MindTap",
    helpArea: "Assignments & Activities",
    callout: {
      title: "Before you begin",
      paragraphs: [
        "This task is different depending on the version of MindTap used in your class.",
        "If these directions do not match what you see in your class, click MindTap version in the toolbar above and select your MindTap version.",
      ],
    },
    sections: [
      {
        title: "Related activity types",
        items: [
          {
            kind: "definitions",
            items: [
              {
                term: "Assign Activity Bank Activities",
                content: "Add pre-made activities to the learning path.",
              },
              {
                term: "Create Inline Activities",
                content:
                  "You can add activities inline in readings in your MindTap course.",
              },
              {
                term: "Create Writing Activities",
                content: "Add Write Experience activities to your MindTap course.",
              },
              {
                term: "Create Web Link Activities",
                content: "Create web link activities to link to additional content outside of MindTap.",
              },
              {
                term: "Add Google Drive Content as an Activity",
                content:
                  "To share Google Drive content with your students, add it to the learning path as an activity.",
              },
              {
                term: "Add OneDrive Content as an Activity",
                content: "You can add content from OneDrive as an activity in the learning path.",
              },
              {
                term: "Add a Bongo Activity",
                content: "Assign Bongo\u2122 activities to your students.",
              },
            ],
          },
        ],
      },
      {
        title: "Add an activity",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Click + Add / Create > Activity." },
              { title: "Select the kind of activity you want to assign." },
              {
                title: "If needed, set options specific to the type of activity you are adding.",
                details: [
                  "Options typically include activity settings and scoring options.",
                ],
              },
              { title: "In the Assign to Course window, set activity details." },
            ],
          },
        ],
      },
      {
        title: "In the Assign to Course window, set activity details",
        items: [
          {
            kind: "definitions",
            items: [
              {
                term: "Activity Title",
                content: "Label for the activity in the learning path.",
              },
              {
                term: "Description",
                content: "Information or instructions displayed when the activity is opened.",
              },
              {
                term: "Require Password",
                content:
                  "Password protection for scoreable activities to prevent students from accessing them ahead of time.",
              },
              {
                term: "Available Date",
                content: "When students can start work on the activity.",
              },
              {
                term: "Due Date",
                content: "When students must end work on the activity.",
              },
              {
                term: "Associated Topic",
                content: "Textbook topic related to the activity.",
              },
              {
                term: "Order Within Topic",
                content: "Position in the learning path under the specified topic.",
              },
            ],
          },
          {
            kind: "paragraph",
            content: "Click Add.",
          },
          {
            kind: "note",
            paragraphs: [
              "If you are using category weighting, add your new activity to a category.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "More help",
        links: [
          { label: "MindTap", href: mindTapHubHref },
          { label: "Contact support", href: contactSupportHref() },
        ],
      },
    ],
  },
  "spark-missing-activities": {
    slug: "spark-missing-activities",
    title: "Missing Activities or Assignments in Spark",
    summary:
      "Check the course context, assignment location, and school-managed access path when expected work is missing in Spark.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Student", "Troubleshooting & Common Problems"],
    appliesTo: "Spark students who do not see expected assignments or activities",
    product: "Spark",
    helpArea: "Troubleshooting & Common Problems",
    updated: "April 21, 2026",
    callout: {
      title: "Assignments live inside a Spark course",
      paragraphs: [
        "In Spark, assignments and activities for each book are contained in a course.",
        "For some schools, your teacher or school administrator adds you to the Spark course instead of asking you to join it yourself.",
      ],
    },
    sections: [
      {
        title: "Check where the work should appear",
        items: [
          {
            kind: "list",
            items: [
              "Open the correct Spark course first.",
              "For regular assigned work, use the Assignments area in Spark.",
              "If your instructor assigned an in-class activity, it can appear as a Start Activity pop-up instead of a regular assignment in the list.",
            ],
          },
        ],
      },
      {
        title: "Common reasons the assignment looks missing",
        items: [
          {
            kind: "list",
            items: [
              "You are not in the correct Spark course yet.",
              "Your teacher or school administrator still needs to add you to the course.",
              "Your teacher gave you a course key or self-registration guide that you have not finished using yet.",
              "The course has ended. In an expired course, you can still view old assignments, but you cannot complete tests or assignments after the course end date.",
            ],
          },
        ],
      },
      {
        title: "Use the right next step",
        items: [
          {
            kind: "list",
            items: [
              <>
                If you should be opening Spark from your LMS or school platform, use{" "}
                <a href={helpArticleHref("spark-lms-access")}>
                  Access Spark Through Your LMS or School Platform
                </a>
                .
              </>,
              <>
                If the LMS or school link itself is not opening Spark, use{" "}
                <a href={helpArticleHref("spark-lms-link-not-working")}>
                  Spark LMS Link Not Working
                </a>
                .
              </>,
              <>
                If the course is wrong or missing after sign-in, use{" "}
                <a href={wrongCourseChooserHref()}>Wrong course or missing course</a>.
              </>,
              "If you expected a specific assignment to be available already, ask your teacher whether it was assigned to your course.",
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
          { label: "Join a Spark course", href: helpArticleHref("spark-join-course") },
        ],
      },
      {
        heading: "Course and LMS help",
        links: [
          { label: "Spark LMS access", href: helpArticleHref("spark-lms-access") },
          { label: "Spark LMS link not working", href: helpArticleHref("spark-lms-link-not-working") },
          { label: "Wrong course or missing course", href: wrongCourseChooserHref() },
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
  "spark-dynamic-lessons": {
    slug: "spark-dynamic-lessons",
    title: "Dynamic Lessons",
    summary: "Teach live lessons with Dynamic Lessons in Spark.",
    family: sparkDynamicLessonsFamily(),
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Instructor", "Dynamic Lessons"],
    appliesTo: "Spark instructors",
    product: "Spark",
    helpArea: "Spark product help",
    sections: [
      {
        title: "About Dynamic Lessons",
        items: [
          {
            kind: "paragraph",
            content:
              "Dynamic Lessons is your National Geographic Learning program formatted into slides.",
          },
          {
            kind: "paragraph",
            content:
              "Lessons include teaching tools such as audio, video, and interactive activities. You can use the pre-made lessons or create and customize your own.",
          },
        ],
      },
      {
        title: "Video tutorial",
        items: [
          {
            kind: "paragraph",
            content: (
              <>
                Watch{" "}
                {inlineExternalLink(
                  sparkDynamicLessonsVideoHref,
                  "Present and Customize Dynamic Lessons"
                )}{" "}
                for a walkthrough of presenting and customizing lessons in Spark.
              </>
            ),
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Dynamic Lessons articles",
        links: [
          { label: "Customize a Lesson", href: helpArticleHref("spark-customize-lesson") },
          { label: "Present a Lesson", href: helpArticleHref("spark-present-lesson") },
          {
            label: "Assign an In-Class Activity",
            href: helpArticleHref("spark-in-class-activity"),
          },
        ],
      },
      {
        heading: "More Spark help",
        links: [
          { label: "Create a Spark course", href: helpArticleHref("spark-create-course") },
          { label: "Spark", href: sparkHubHref },
        ],
      },
    ],
  },
  "spark-customize-lesson": {
    slug: "spark-customize-lesson",
    title: "Customize a Lesson",
    summary:
      "Each lesson is made up of slides. You can present the Publisher Lesson as is, or customize it by adding, removing, or rearranging the slides in the order you like.",
    family: sparkDynamicLessonsFamily(),
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Instructor", "Dynamic Lessons"],
    appliesTo: "Spark instructors",
    product: "Spark",
    helpArea: "Spark product help",
    callout: {
      title: "Note",
      paragraphs: ["Not all programs have Dynamic Lessons."],
    },
    sections: [
      {
        title: "Customize a lesson",
        items: [
          {
            kind: "steps",
            items: [
              {
                title:
                  "In the Class Content tab, select your program from the program dropdown menu.",
              },
              {
                title: "Select the unit you want from the dropdown menu.",
              },
              {
                title: "Click the slides under Publisher Lessons.",
                details: [
                  "When you make your first edit to the Publisher Lessons, Spark asks you to create a name for your lesson.",
                  "Both the original Publisher Lessons and your new customized lesson stay available in Class Content under My Lessons.",
                  "Annotations made on slides do not save and are lost when you exit that slide.",
                ],
              },
              {
                title:
                  "After customizing your lesson, click the back arrow next to the lesson name to return to Class Content, or click Present to present your lesson.",
              },
            ],
          },
        ],
      },
      {
        title: "Edit slides and sections",
        items: [
          {
            kind: "definitions",
            items: [
              { term: "Preview the content of a slide", content: "Click the slide." },
              {
                term: "Rearrange the order of slides",
                content:
                  "Select the slide you want and move it to the position you want. You can move the slide within the current section or to a different section.",
              },
              { term: "Delete a section", content: "Click Delete section." },
              {
                term: "Hide, delete, or copy a specific slide",
                content:
                  "Open the slide actions menu and select the action you want. Deleted slides are removed from that lesson, and hidden slides stay available until you unhide them.",
              },
              {
                term: "Hide, delete, or copy multiple slides",
                content: (
                  <ul className="help-article-body-list">
                    <li>Click Bulk update.</li>
                    <li>Select the slides you want to edit.</li>
                    <li>Click Hide, Copy to, or Delete at the bottom of the page.</li>
                  </ul>
                ),
              },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Dynamic Lessons articles",
        links: [
          { label: "Dynamic Lessons", href: helpArticleHref("spark-dynamic-lessons") },
          { label: "Present a Lesson", href: helpArticleHref("spark-present-lesson") },
          {
            label: "Assign an In-Class Activity",
            href: helpArticleHref("spark-in-class-activity"),
          },
        ],
      },
      {
        heading: "More Spark help",
        links: [
          { label: "Create a Spark course", href: helpArticleHref("spark-create-course") },
          { label: "Spark", href: sparkHubHref },
        ],
      },
    ],
  },
  "spark-present-lesson": {
    slug: "spark-present-lesson",
    title: "Present a Lesson",
    summary: "Present a live pre-made Publisher Lesson or your customized lesson.",
    family: sparkDynamicLessonsFamily(),
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Instructor", "Dynamic Lessons"],
    appliesTo: "Spark instructors",
    product: "Spark",
    helpArea: "Spark product help",
    sections: [
      {
        title: "Present a lesson",
        items: [
          {
            kind: "steps",
            items: [
              {
                title:
                  "In the Class Content tab, select your program from the program dropdown menu.",
              },
              {
                title: "Select the lesson you want.",
                details: [
                  "You can choose Publisher Lessons or My Lessons if you have created a custom lesson.",
                ],
              },
              {
                title: "Scroll to the section you want to present and click Present.",
                details: ["Your lesson opens in full screen."],
              },
              {
                title:
                  "Use the toolbar on the right side of the screen to navigate and interact with the slides.",
              },
            ],
          },
        ],
      },
      {
        title: "Presentation tools",
        description: "Tool availability can vary depending on the slide and activity.",
        items: [
          {
            kind: "definitions",
            items: [
              { term: "Page navigation", content: "Go to the previous page or next page." },
              { term: "Hide left column", content: "Hide the left column on the slide." },
              { term: "Hide right column", content: "Hide the right column on the slide." },
              {
                term: "Expand",
                content:
                  "View the slide in full screen when you hide the left or right column.",
              },
              {
                term: "Vertical hide and reveal",
                content:
                  "Hide and reveal the contents of the slide. You can drag the screen up and down the slide.",
              },
              {
                term: "Show and hide slide elements",
                content:
                  "Show and hide different elements on the slide. When selected, use Hide next to an element to hide it or Unhide to show it again.",
              },
              {
                term: "Hide free writing responses",
                content: "Hide and unhide responses in free writing activities.",
              },
              {
                term: "Hide speaking recorder",
                content: (
                  <ul className="help-article-body-list">
                    <li>Hide and unhide the audio recorder.</li>
                    <li>
                      Some activities include a speaking recorder so you and your students can
                      record answers to questions.
                    </li>
                    <li>You can record, play, and download recordings from the toolbar.</li>
                  </ul>
                ),
              },
              {
                term: "Show and hide annotations",
                content: "Show and hide annotations.",
              },
              {
                term: "Annotation tools",
                content: (
                  <ul className="help-article-body-list">
                    <li>Annotations made on slides do not save and are lost when you exit that slide.</li>
                    <li>Select elements on the slide.</li>
                    <li>Draw on the slide with different colors and sizes.</li>
                    <li>Highlight slide text.</li>
                    <li>Erase drawn or highlighted elements.</li>
                    <li>
                      Add lines or arrows with selectable color, thickness, and line style.
                    </li>
                    <li>Add shapes to the slide.</li>
                    <li>
                      Add notes with configurable font colors, bullets, and text highlighting.
                    </li>
                    <li>Undo the previous change.</li>
                    <li>Redo the previous change.</li>
                  </ul>
                ),
              },
              { term: "Resize text", content: "Resize text." },
              { term: "Timer", content: "Use the timer." },
              {
                term: "Show next answer",
                content: "Show the next answer on exercise slides.",
              },
              {
                term: "Show all answers",
                content: "Show all answers on exercise slides.",
              },
              { term: "Check answers", content: "Check answers on exercise slides." },
              { term: "Reset slide", content: "Reset exercise slides." },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Dynamic Lessons articles",
        links: [
          { label: "Dynamic Lessons", href: helpArticleHref("spark-dynamic-lessons") },
          { label: "Customize a Lesson", href: helpArticleHref("spark-customize-lesson") },
          {
            label: "Assign an In-Class Activity",
            href: helpArticleHref("spark-in-class-activity"),
          },
        ],
      },
      {
        heading: "More Spark help",
        links: [
          { label: "Create a Spark course", href: helpArticleHref("spark-create-course") },
          { label: "Spark", href: sparkHubHref },
        ],
      },
    ],
  },
  "spark-in-class-activity": {
    slug: "spark-in-class-activity",
    title: "Assign an In-Class Activity",
    summary:
      "Assign an in-class activity from a Dynamic Lesson and monitor student performance in real time.",
    family: sparkDynamicLessonsFamily(),
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Instructor", "Dynamic Lessons"],
    appliesTo: "Spark instructors",
    product: "Spark",
    helpArea: "Spark product help",
    sections: [
      {
        title: "Assign an in-class activity",
        items: [
          {
            kind: "steps",
            items: [
              {
                title:
                  "In the Class Content tab, select your program from the program dropdown menu.",
              },
              {
                title: "Select the lesson you want.",
                details: [
                  "You can choose Publisher Lessons or My Lessons if you have created a custom lesson.",
                ],
              },
              {
                title:
                  "If you know which activity you want to assign, scroll to that activity and click the slide.",
                details: [
                  "If you are presenting a lesson, assignable activities show the in-class activity icon in the toolbar.",
                  "Click the in-class activity icon to launch the activity.",
                ],
              },
              {
                title:
                  "From the Course selection dropdown menu, select the course you want to assign from.",
              },
              {
                title:
                  "Click Student selection and choose all students or the individual students you want to assign.",
              },
              {
                title:
                  "Under Activity Settings, select whether you want to save the activity in the gradebook.",
              },
              {
                title: "Click Start Activity.",
                details: ["Students are prompted to start the activity in Spark."],
              },
              {
                title:
                  "An in-progress report page opens in a new tab so you can monitor student performance in real time.",
              },
              {
                title:
                  "Optional: If a student requests help during the assignment, the request appears in the student's status column.",
              },
              {
                title:
                  "To end the activity, click End Activity at the bottom of the in-progress report page.",
              },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Dynamic Lessons articles",
        links: [
          { label: "Dynamic Lessons", href: helpArticleHref("spark-dynamic-lessons") },
          { label: "Customize a Lesson", href: helpArticleHref("spark-customize-lesson") },
          { label: "Present a Lesson", href: helpArticleHref("spark-present-lesson") },
        ],
      },
      {
        heading: "More Spark help",
        links: [
          { label: "Create a Spark course", href: helpArticleHref("spark-create-course") },
          { label: "Spark", href: sparkHubHref },
        ],
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
  "spark-institutional-settings": {
    slug: "spark-institutional-settings",
    title: "Edit Institutional Settings",
    summary:
      "Control school-wide Spark settings such as messaging, course creation, user management, and grade export permissions.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Institutional Administrator", "Spark product help"],
    appliesTo: "Spark institutional administrators",
    product: "Spark",
    helpArea: "Spark product help",
    updated: "January 13, 2026",
    callout: {
      title: "Important",
      paragraphs: [
        "Only an institutional administrator can change these settings, and changes affect all courses at your institution.",
      ],
    },
    sections: [
      {
        title: "Edit institutional settings",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Click the Settings tab." },
              {
                title: "Select or clear the options your institution wants to use.",
                details: [
                  "Messaging: allow messaging in courses.",
                  "Customer support: display the support button.",
                  "Create courses: allow teacher course creation.",
                  "Export grades: allow teachers to export grades.",
                  "Student settings: allow students to see test results.",
                  "User management: allow teachers to manage students, including adding students, removing students, resetting passwords, and editing student account information.",
                ],
              },
              { title: "Click Save." },
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark help",
        links: [
          { label: "Manage Users", href: helpArticleHref("spark-manage-users") },
          {
            label: "LTI 1.3 LMS Course Management",
            href: helpArticleHref("spark-lti-1-3-course-management"),
          },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Spark", href: sparkHubHref }],
      },
    ],
  },
  "manage-account": {
    slug: "manage-account",
    title: "Manage account",
    summary: "Update your profile information, email address, password, and other account details.",
    parentLabel: "Sign In & Account Help",
    parentHref: helpDomainHref("sign-in-account"),
    tags: ["Student", "Instructor", "Sign In & Account Help"],
    appliesTo: "Students and instructors using a Cengage account",
    product: "MindTap, WebAssign, and SAM",
    helpArea: "Sign In & Account Help",
    sections: [
      {
        title: "Edit your user profile",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Sign in to your Cengage account." },
              { title: "Open your account profile." },
              {
                title: "Update your personal information.",
                details: [
                  "Students can update the required student profile fields.",
                  "Instructors can update the required instructor profile fields.",
                ],
              },
              { title: "Apply your changes." },
            ],
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
        links: [{ label: "Sign In & Account Help", href: helpDomainHref("sign-in-account") }],
      },
    ],
  },
  "reset-cengage-password": {
    slug: "reset-cengage-password",
    title: "Reset your Cengage password",
    summary:
      "Use the Cengage sign-in page to request a password-reset link when you sign in directly with a Cengage account.",
    parentLabel: "Sign In & Account Help",
    parentHref: helpDomainHref("sign-in-account"),
    tags: ["Student", "Instructor", "Sign In & Account Help"],
    appliesTo:
      "Students and instructors who sign in directly with a Cengage account for MindTap, WebAssign, or SAM",
    product: "MindTap, WebAssign, and SAM",
    helpArea: "Sign In & Account Help",
    sections: [
      {
        title: "Reset your password",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: (
                  <>
                    Go to {inlineExternalLink(externalRoutes.cengageLogin, "login.cengage.com")}.
                  </>
                ),
              },
              { title: "Click Forgot Password." },
              {
                title: "Enter the email address or username tied to your Cengage account.",
              },
              {
                title: "Open the password-reset message and follow the link to create a new password.",
              },
            ],
          },
        ],
      },
      {
        title: "If you do not receive the reset email",
        items: [
          {
            kind: "list",
            items: [
              "Check your spam or junk folder.",
              "Confirm that you are using the right username or email address.",
              "If your school or LMS manages your sign-in, return to the reset-password chooser and use the LMS or school branch instead.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related account help",
        links: [
          { label: "Forgot username", href: helpArticleHref("forgot-username") },
          { label: "Manage account", href: helpArticleHref("manage-account") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Sign In & Account Help", href: helpDomainHref("sign-in-account") }],
      },
    ],
  },
  "spark-manage-account": {
    slug: "spark-manage-account",
    title: "Manage Account",
    summary:
      "Change your Spark name, password, email address, and preferred language from your profile.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Student", "Sign In & Account Help"],
    appliesTo: "Spark students",
    product: "Spark",
    helpArea: "Sign In & Account Help",
    updated: "January 13, 2026",
    sections: [
      {
        title: "Access your Spark profile",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: "Click My Account from your Spark profile menu.",
              },
              {
                title: "Use your profile page to review and update your information.",
                details: [
                  "Your profile displays your personal information.",
                  "You can change your name, password, email address, and preferred language here.",
                ],
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
          { label: "Sign in to Spark", href: helpArticleHref("spark-sign-in") },
          {
            label: "Manage a school-managed Spark account",
            href: helpArticleHref("spark-school-managed-account"),
          },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Spark", href: sparkHubHref }],
      },
    ],
  },
  "spark-school-managed-account": {
    slug: "spark-school-managed-account",
    title: "Manage a School-Managed Spark Account",
    summary:
      "Use your Spark profile for changes you can make yourself, and ask your instructor or institutional administrator to handle school-managed account changes.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "School-managed access", "Sign In & Account Help"],
    appliesTo:
      "Spark students, instructors, and institutional administrators using school- or LMS-managed Spark accounts",
    product: "Spark",
    helpArea: "Sign In & Account Help",
    callout: {
      title: "School-managed Spark accounts work differently",
      paragraphs: [
        "In Spark, you can change your name, password, email address, and preferred language from My Account.",
        "If you need your username changed, ask your instructor or institutional administrator to update it.",
        "If Spark does not have an email address for your account, ask your instructor or institutional administrator to reset your password.",
      ],
    },
    sections: [
      {
        title: "Update what you can manage in Spark",
        items: [
          {
            kind: "steps",
            items: [
              { title: "In Spark, click My Account from your profile menu." },
              { title: "Review the profile information shown for your account." },
              {
                title: "Update your name, password, email address, or preferred language as needed.",
              },
              {
                title: "Add an email address if possible so you can reset your own password faster.",
              },
            ],
          },
        ],
      },
      {
        title: "When your school or institution needs to help",
        items: [
          {
            kind: "list",
            items: [
              "Ask your instructor to change your username if the school-created username is wrong.",
              "Ask your instructor or institutional administrator to reset your password if your account does not have an email address.",
              "Institutional administrators can allow teachers to manage students, including resetting passwords and editing student account information.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark account help",
        links: [
          {
            label: "Use the correct school-managed Spark account",
            href: helpArticleHref("spark-school-managed-wrong-account"),
          },
          { label: "Manage Account", href: helpArticleHref("spark-manage-account") },
        ],
      },
      {
        heading: "School-managed support",
        links: [
          { label: "Manage Users", href: helpArticleHref("spark-manage-users") },
          {
            label: "Edit Institutional Settings",
            href: helpArticleHref("spark-institutional-settings"),
          },
        ],
      },
    ],
  },
  "spark-school-managed-wrong-account": {
    slug: "spark-school-managed-wrong-account",
    title: "Use the Correct School-Managed Spark Account",
    summary:
      "If your teacher or school created your Spark account, sign in with that account instead of creating another one.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "School-managed access", "Sign In & Account Help"],
    appliesTo:
      "Spark students, instructors, and institutional administrators using school- or LMS-managed Spark access",
    product: "Spark",
    helpArea: "Sign In & Account Help",
    callout: {
      title: "Do not create a second Spark account",
      paragraphs: [
        "You may already have a Spark account if you took a Spark class before or your teacher created one for you.",
        "For some schools, your teacher or school administrator adds you to the Spark course and gives you your username and password.",
      ],
    },
    sections: [
      {
        title: "If you think you used the wrong school-managed account",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: "Sign out of Spark and return to the LMS link, self-registration guide, or school link your teacher provided.",
              },
              {
                title: "Sign in with your existing Spark Username and Password.",
              },
              {
                title: "If you do not know which username to use, ask your teacher or institutional administrator to confirm it.",
              },
              {
                title: "If your account does not have an email address or you cannot reset the password yourself, ask your teacher or institutional administrator to reset it.",
              },
            ],
          },
        ],
      },
      {
        title: "When the issue is really course access",
        items: [
          {
            kind: "list",
            items: [
              "If Spark is integrated with your LMS, you do not need a course key.",
              "If the link to Spark does not open correctly, use Spark LMS link help.",
              "If you still need to join a teacher-led course outside the LMS, use Join a Spark course.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark account help",
        links: [
          {
            label: "Manage a school-managed Spark account",
            href: helpArticleHref("spark-school-managed-account"),
          },
          { label: "Sign in to Spark", href: helpArticleHref("spark-sign-in") },
        ],
      },
      {
        heading: "Related access help",
        links: [
          {
            label: "Access Spark through LMS or school platform",
            href: helpArticleHref("spark-lms-access"),
          },
          { label: "Join a Spark course", href: helpArticleHref("spark-join-course") },
        ],
      },
    ],
  },
  "spark-lms-access": {
    slug: "spark-lms-access",
    title: "Access Spark Through Your LMS or School Platform",
    summary:
      "Open Spark from the LMS course link, self-registration guide, or school link your teacher or school provided.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "LMS / School access", "Course Access & Enrollment"],
    appliesTo:
      "Spark students, instructors, and institutional administrators using LMS- or school-managed Spark access",
    product: "Spark",
    helpArea: "Course Access & Enrollment",
    callout: {
      title: "Do not create another Spark account if your school already gave you one",
      paragraphs: [
        "You may already have a Spark account if you took a Spark class before or your teacher created one for you.",
        "If your school or LMS manages access, start from the Spark link or self-registration guide your teacher or school provided.",
      ],
    },
    sections: [
      {
        title: "Open Spark from your LMS or school link",
        items: [
          {
            kind: "steps",
            items: [
              {
                title: "Sign in to your LMS or open the Spark self-registration guide or school link you were given.",
              },
              {
                title: "Click the course link to Spark.",
                details: [
                  "If Spark is integrated with your LMS, you do not need a course key.",
                ],
              },
              {
                title: "If Spark asks you to sign in, use your existing Spark Username and Password.",
                details: [
                  "Do not create a new account if your teacher or school already created one for you.",
                ],
              },
              {
                title: "If your instructor created your account, use the Spark welcome email to finish setup.",
                details: ["Open the welcome email and click Set Password."],
              },
            ],
          },
        ],
      },
      {
        title: "If you still cannot access the course",
        items: [
          {
            kind: "list",
            items: [
              "Ask your teacher if your school adds students to the Spark course instead of using self-registration.",
              "If you do not know your username or password, use school-managed Spark account help.",
              "If the LMS or school link does not open Spark correctly, use Spark LMS link help.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark access help",
        links: [
          {
            label: "Spark LMS link not working",
            href: helpArticleHref("spark-lms-link-not-working"),
          },
          { label: "No Course Key for Spark", href: helpArticleHref("spark-no-course-key") },
        ],
      },
      {
        heading: "Account help",
        links: [
          {
            label: "Manage a school-managed Spark account",
            href: helpArticleHref("spark-school-managed-account"),
          },
          {
            label: "Use the correct school-managed Spark account",
            href: helpArticleHref("spark-school-managed-wrong-account"),
          },
        ],
      },
    ],
  },
  "spark-lms-link-not-working": {
    slug: "spark-lms-link-not-working",
    title: "Spark LMS Link Not Working",
    summary:
      "Fix Spark course links that do not open correctly from your LMS or school platform.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "LMS / School access", "Troubleshooting & Common Problems"],
    appliesTo:
      "Spark students, instructors, and institutional administrators using LMS- or school-linked Spark courses",
    product: "Spark",
    helpArea: "Troubleshooting & Common Problems",
    callout: {
      title: "Spark links depend on your LMS setup",
      paragraphs: [
        "Spark access through an LMS or school platform depends on a course link or external tool created by your instructor or LMS administrator.",
        "In Canvas LTI 1.0 setups, the Spark link should load in a new tab.",
      ],
    },
    sections: [
      {
        title: "Retry the Spark launch",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Sign in to your LMS or school platform." },
              { title: "Click the Spark course link again." },
              {
                title: "If Spark prompts you to sign in, use your existing Spark Username and Password or the Set Password link from your welcome email.",
              },
              {
                title: "If the link still does not open Spark, ask your teacher for another Spark course link or self-registration guide.",
              },
            ],
          },
        ],
      },
      {
        title: "What instructors or administrators should verify",
        items: [
          {
            kind: "list",
            items: [
              "The Spark tool or course link is published and available to students in the LMS.",
              "The course link opens the correct Spark course.",
              "In Canvas LTI 1.0 setups, the external tool is set to Load in a new tab.",
              "After recreating the link, open it once and confirm the Spark course launches.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark access help",
        links: [
          {
            label: "Access Spark through LMS or school platform",
            href: helpArticleHref("spark-lms-access"),
          },
          {
            label: "Manage a school-managed Spark account",
            href: helpArticleHref("spark-school-managed-account"),
          },
        ],
      },
      {
        heading: "Admin setup help",
        links: [
          {
            label: "LTI 1.3 LMS Course Management",
            href: helpArticleHref("spark-lti-1-3-course-management"),
          },
          { label: "Manage Users", href: helpArticleHref("spark-manage-users") },
        ],
      },
    ],
  },
  "transfer-or-drop-course": {
    slug: "transfer-or-drop-course",
    title: "Transfer Sections or Drop a Course",
    summary:
      "If you are in the wrong section or need to leave a course, the next step depends on the product and how your course roster is managed.",
    parentLabel: "Course Access & Enrollment",
    parentHref: helpDomainHref("course-access-enrollment"),
    tags: ["Student", "Course Access & Enrollment", "Purchase & Access"],
    appliesTo: "Students who need to change sections or leave a course",
    product: "MindTap, WebAssign, and SAM",
    helpArea: "Course Access & Enrollment",
    sections: [
      {
        title: "If you need to move to another section or drop a course",
        items: [
          {
            kind: "paragraph",
            content:
              "For MindTap and WebAssign, students cannot usually remove themselves from a course or transfer to a different section. Ask your instructor to transfer you or drop you from the roster.",
          },
          {
            kind: "list",
            items: [
              "If the new section has the same assignments in WebAssign, your work transfers to the new section.",
              "If the new course or section has a different instructor, the instructors may need to coordinate the transfer.",
              "If you already purchased access in WebAssign or SAM, your access can transfer to the new section.",
              "If you purchased access within the past 14 days and dropped the course, you can request a refund.",
            ],
          },
        ],
      },
      {
        title: "SAM self-drop exception",
        items: [
          {
            kind: "paragraph",
            content:
              "In SAM, you can drop yourself from a section if you have not started any assignments. Otherwise, your instructor or customer support must remove you from the roster.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related access help",
        links: [
          { label: "Join or enroll in a course", href: joinEnrollChooserHref() },
          { label: "Purchased access but course is unavailable", href: purchasedAccessChooserHref() },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "wrong-product-or-course-in-lms": {
    slug: "wrong-product-or-course-in-lms",
    title: "Added Wrong Product or Course in LMS",
    summary:
      "If you selected the wrong product or copied the wrong course in your LMS, you can remove the incorrect product and fix the linked course.",
    parentLabel: "Course Access & Enrollment",
    parentHref: helpDomainHref("course-access-enrollment"),
    tags: ["Instructor", "LMS Administrator", "Course Access & Enrollment"],
    appliesTo: "Instructors and LMS administrators working in an LMS-integrated course",
    product: "MindTap, WebAssign, and SAM",
    helpArea: "Course Access & Enrollment",
    sections: [
      {
        title: "Common reasons this happens",
        items: [
          {
            kind: "list",
            items: [
              "You created a new course but meant to copy a course.",
              "You copied the wrong course.",
              "You added the wrong product or linked the wrong eBook to the course.",
            ],
          },
        ],
      },
      {
        title: "Resolution",
        items: [
          {
            kind: "steps",
            items: [
              { title: "Open the Cengage content tool in your LMS course." },
              { title: "Delete the incorrect product from the tool." },
              { title: "Confirm the deletion." },
              {
                title: "Delete all links to the incorrect product from your LMS course so students do not keep opening the wrong content.",
              },
            ],
          },
          {
            kind: "paragraph",
            content:
              "If students are already enrolled in the incorrect product, or your course uses multiple eBook-only products, contact customer support before removing the product.",
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related access help",
        links: [
          { label: "Access your course through LMS", href: lmsAccessChooserHref() },
          { label: "Wrong course or missing course", href: wrongCourseChooserHref() },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
      },
    ],
  },
  "grade-sync-problems": {
    slug: "grade-sync-problems",
    title: "Grade Sync Problems",
    summary:
      "Resolve slow syncing, missing scores, or gradebook problems when grades are not passing from your Cengage product to your LMS.",
    parentLabel: "Troubleshooting & Common Problems",
    parentHref: helpDomainHref("troubleshooting-common-problems"),
    tags: ["Instructor", "LMS Administrator", "Troubleshooting & Common Problems"],
    appliesTo: "Instructors and LMS administrators using LMS-integrated courses",
    product: "MindTap, WebAssign, and SAM",
    helpArea: "Troubleshooting & Common Problems",
    sections: [
      {
        title: "Slow or missing grade syncing",
        items: [
          {
            kind: "paragraph",
            content:
              "Grades should sync automatically with your LMS and usually take 5 minutes or less. If scores have not synced after 1 hour, one of the following issues may apply.",
          },
          {
            kind: "definitions",
            items: [
              {
                term: "Students have not submitted or opened the assignment",
                content:
                  "On some older integration methods, ND or NS scores do not sync automatically until you manually adjust them in the gradebook.",
              },
              {
                term: "Ungraded assignments are not synced",
                content:
                  "Hidden or practice assignments do not sync because they do not count toward student grades.",
              },
              {
                term: "Assignment not in LMS",
                content:
                  "Assignments must be added to the LMS gradebook before the LMS can receive scores from the learning platform.",
              },
            ],
          },
        ],
      },
      {
        title: "Next steps",
        items: [
          {
            kind: "list",
            items: [
              "Verify that the assignment counts toward student grades and is not hidden.",
              "Confirm that the assignment exists in the LMS gradebook.",
              "If the assignment is linked correctly but still has not synced after 1 hour, try deleting the linked assignment in the LMS and adding it again.",
              "If syncing problems continue, contact customer support.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related troubleshooting",
        links: [
          { label: "Access your course through LMS", href: lmsAccessChooserHref() },
          { label: "LMS link not working", href: helpArticleHref("lms-link-not-working") },
        ],
      },
      {
        heading: "More help",
        links: [{ label: "Contact support", href: contactSupportHref() }],
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
    appliesTo:
      "Students and instructors who use a Cengage account for MindTap, WebAssign, or SAM",
    product: "MindTap, WebAssign, and SAM",
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
  "spark-forgot-username": {
    slug: "spark-forgot-username",
    title: "Forgot Username",
    summary: "Find the Spark username or email address you should use to sign in.",
    parentLabel: "Spark",
    parentHref: sparkHubHref,
    tags: ["Spark", "Sign In & Account Help", "School-managed access"],
    appliesTo:
      "Spark students, instructors, and institutional administrators who need to confirm the username or email tied to a Spark account",
    product: "Spark",
    helpArea: "Sign In & Account Help",
    updated: "January 13, 2026",
    callout: {
      title: "School-managed Spark accounts may use a different username",
      paragraphs: [
        "If your teacher or school created your Spark account, the username might not match the email address you usually use for school.",
        "Use the username from your Spark welcome email or ask your teacher or institutional administrator to confirm it.",
      ],
    },
    sections: [
      {
        title: "If you sign in directly to Spark",
        items: [
          {
            kind: "list",
            items: [
              "Try the email address you use to sign in to learn.eltngl.com.",
              "If you received a Spark welcome email, use the username or email address shown there.",
              "If you have more than one email address, try the one you use for your class or school.",
            ],
          },
        ],
      },
      {
        title: "If your teacher or school created the Spark account",
        items: [
          {
            kind: "list",
            items: [
              "Ask your teacher or institutional administrator to confirm the correct Spark username.",
              "If the account does not have an email address or you also need a password reset, ask your teacher or institutional administrator to reset it for you.",
            ],
          },
        ],
      },
    ],
    relatedHelpGroups: [
      {
        heading: "Related Spark account help",
        links: [
          { label: "Sign in to Spark", href: helpArticleHref("spark-sign-in") },
          {
            label: "Use the correct school-managed Spark account",
            href: helpArticleHref("spark-school-managed-wrong-account"),
          },
        ],
      },
      {
        heading: "More Spark help",
        links: [
          {
            label: "Manage a school-managed Spark account",
            href: helpArticleHref("spark-school-managed-account"),
          },
          { label: "Contact support", href: contactSupportHref() },
        ],
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
    appliesTo:
      "Students with purchased MindTap, WebAssign, or SAM course access tied to a Cengage account",
    product: "MindTap, WebAssign, and SAM",
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
};

export function getHelpArticleDefinition(slug: HelpArticleSlug): HelpArticleDefinition {
  return helpArticleDefinitions[slug] ?? helpArticleDefinitions["sign-in"];
}
