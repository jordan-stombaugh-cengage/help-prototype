import { useEffect, useState } from "react";
import {
  Checkbox,
  Input,
  InputType,
  Tag,
  TagColor,
  TagSize,
} from "react-magma-dom";
import { SearchIcon } from "react-magma-icons";
import {
  accessCodeChooserHref,
  courseKeyChooserHref,
  errorSyncChooserHref,
  getRouteDrivenSearchFilters,
  getSearchDiscoveryOptionsFromHash,
  getSearchResultsContextLabel,
  helpArticleHref,
  homepageHref,
  joinEnrollChooserHref,
  lmsAccessChooserHref,
  missingActivitiesChooserHref,
  purchasedAccessChooserHref,
  resetPasswordHref,
  setPreviewPageHash,
  wrongCourseChooserHref,
} from "../../app/routes";
import { OptionalLink } from "../../components/prototype/Primitives";

type FilterGroup = {
  options: string[];
  title: string;
};

type FilterSelections = Record<string, string[]>;

type SearchSortMode = "best-match" | "most-recent";

type SearchResultType = "Article" | "Guided step";

type SearchResult = {
  actionLabel?: string;
  description: string;
  filters?: Partial<FilterSelections>;
  helpArea?: string;
  href?: string;
  keywords?: string[];
  priority?: number;
  productMetadataLabel?: string | null;
  resultType: SearchResultType;
  title: string;
  updated: string;
  updatedAt?: string;
};

const filterGroups: FilterGroup[] = [
  {
    title: "Role",
    options: [
      "Higher Ed Student",
      "Higher Ed Instructor",
      "K–12 Student",
      "K–12 Teacher",
      "Primary Student",
      "Secondary Student",
      "LMS Administrator",
      "Institutional Administrator",
    ],
  },
  {
    title: "Product",
    options: ["MindTap", "WebAssign", "SAM", "Spark"],
  },
  {
    title: "Sign-in path",
    options: ["Cengage sign-in", "LMS sign-in", "School / NGLSync"],
  },
  {
    title: "Education segment",
    options: ["Higher Education", "K–12", "English Language Learning"],
  },
  {
    title: "Last updated",
    options: ["Last 30 days", "Last 3 months", "Last year"],
  },
];

const checkboxContainerStyle = { margin: 0 };

const checkboxLabelStyle = {
  color: "#4f4a5a",
  fontSize: "13px",
  lineHeight: "20px",
};

function buildFilterSelections(defaults: Partial<FilterSelections> = {}): FilterSelections {
  return filterGroups.reduce<FilterSelections>((selections, group) => {
    selections[group.title] = defaults[group.title] ?? [];
    return selections;
  }, {});
}

const allProducts = ["MindTap", "WebAssign", "SAM", "Spark"];

const sharedHelpRoles = [
  "Higher Ed Student",
  "Higher Ed Instructor",
  "K–12 Student",
  "K–12 Teacher",
  "Primary Student",
  "Secondary Student",
  "LMS Administrator",
  "Institutional Administrator",
];

const directAccountRoles = [
  "Higher Ed Student",
  "Higher Ed Instructor",
  "K–12 Student",
  "K–12 Teacher",
];

const higherEdLearnerRoles = ["Higher Ed Student", "Higher Ed Instructor", "LMS Administrator"];

const sparkStudentRoles = ["Primary Student", "Secondary Student"];

const sparkInstructorRoles = ["Higher Ed Instructor", "K–12 Teacher"];

const sparkAdminRoles = ["Institutional Administrator"];

const sparkLmsRoles = ["LMS Administrator", "Institutional Administrator"];

const sparkAccessRoles = [
  "Primary Student",
  "Secondary Student",
  "K–12 Teacher",
  "Institutional Administrator",
];

const sharedRoutingRoles = [
  "Higher Ed Student",
  "Higher Ed Instructor",
  "K–12 Student",
  "K–12 Teacher",
  "Primary Student",
  "Secondary Student",
  "Institutional Administrator",
];

const sharedLmsRoles = [
  "Higher Ed Student",
  "Higher Ed Instructor",
  "K–12 Student",
  "K–12 Teacher",
  "Primary Student",
  "Secondary Student",
  "LMS Administrator",
  "Institutional Administrator",
];

const results: SearchResult[] = [
  {
    actionLabel: "View article",
    description:
      "Reset the password for a direct Cengage account used with MindTap, WebAssign, or SAM.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: directAccountRoles,
      "Sign-in path": ["Cengage sign-in"],
    },
    helpArea: "Sign In & Account Help",
    href: helpArticleHref("reset-cengage-password"),
    keywords: ["reset password", "forgot password", "cengage login", "login.cengage.com"],
    priority: 90,
    resultType: "Article",
    title: "Reset your Cengage password",
    updated: "Updated March 2026",
    updatedAt: "2026-03-18",
  },
  {
    description:
      "If you sign in through your LMS, reset your password through your school's LMS instead of the Cengage sign-in page.",
    filters: {
      Role: sharedLmsRoles,
      "Sign-in path": ["LMS sign-in"],
    },
    helpArea: "Sign In & Account Help",
    href: resetPasswordHref("lms"),
    keywords: ["reset password", "lms password", "canvas password", "moodle password"],
    priority: 72,
    resultType: "Guided step",
    title: "Reset password through LMS",
    updated: "Updated February 2026",
    updatedAt: "2026-02-12",
  },
  {
    description:
      "If your Spark access comes through a school portal or NGLSync, reset your password through the school's sign-in system.",
    filters: {
      Product: ["Spark"],
      Role: [...sparkStudentRoles, ...sparkAdminRoles],
      "Sign-in path": ["School / NGLSync"],
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Sign In & Account Help",
    href: resetPasswordHref("school-nglsync"),
    keywords: ["reset password", "nglsync", "school portal", "spark sign in"],
    priority: 70,
    resultType: "Guided step",
    title: "Reset password for school or NGLSync sign-in",
    updated: "Updated January 2026",
    updatedAt: "2026-01-13",
  },
  {
    description:
      "Recover the email-based username for a direct Cengage account used with MindTap, WebAssign, or SAM.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: directAccountRoles,
      "Sign-in path": ["Cengage sign-in"],
    },
    helpArea: "Sign In & Account Help",
    href: helpArticleHref("forgot-username"),
    keywords: ["forgot username", "username lookup", "email address", "account recovery"],
    priority: 86,
    resultType: "Article",
    title: "Forgot username",
    updated: "Source date not available",
  },
  {
    description:
      "Resolve purchased-access problems caused by signing in with a different Cengage account than the one tied to your course access.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: ["Higher Ed Student", "K–12 Student"],
      "Sign-in path": ["Cengage sign-in"],
    },
    helpArea: "Sign In & Account Help",
    href: helpArticleHref("wrong-account"),
    keywords: ["wrong account", "signed in with wrong account", "purchased access missing"],
    priority: 82,
    resultType: "Article",
    title: "Wrong account",
    updated: "Source date not available",
  },
  {
    description:
      "Update profile details, email address, and password for a direct Cengage account used with MindTap, WebAssign, or SAM.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: directAccountRoles,
      "Sign-in path": ["Cengage sign-in"],
    },
    helpArea: "Sign In & Account Help",
    href: helpArticleHref("manage-account"),
    keywords: ["manage account", "account settings", "profile", "change email"],
    priority: 88,
    resultType: "Article",
    title: "Manage your Cengage account",
    updated: "Source date not available",
  },
  {
    description:
      "Change your Spark name, password, email address, and preferred language from your Spark profile.",
    filters: {
      Product: ["Spark"],
      Role: sparkStudentRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Sign In & Account Help",
    href: helpArticleHref("spark-manage-account"),
    keywords: ["manage account", "spark account", "profile", "change password"],
    priority: 74,
    resultType: "Article",
    title: "Manage your Spark account",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description:
      "Use your Spark profile for changes you can make yourself, and ask your instructor or institutional administrator to handle school-managed account changes.",
    filters: {
      Product: ["Spark"],
      Role: [...sparkStudentRoles, ...sparkInstructorRoles, ...sparkAdminRoles],
      "Sign-in path": ["LMS sign-in", "School / NGLSync"],
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Sign In & Account Help",
    href: helpArticleHref("spark-school-managed-account"),
    keywords: [
      "school managed spark account",
      "manage spark account through school",
      "spark account settings lms",
      "teacher reset spark password",
    ],
    priority: 68,
    resultType: "Article",
    title: "Manage a school-managed Spark account",
    updated: "Source date not available",
  },
  {
    description:
      "Use the Spark username and password your teacher or school provided instead of creating another account.",
    filters: {
      Product: ["Spark"],
      Role: [...sparkStudentRoles, ...sparkInstructorRoles, ...sparkAdminRoles],
      "Sign-in path": ["LMS sign-in", "School / NGLSync"],
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Sign In & Account Help",
    href: helpArticleHref("spark-school-managed-wrong-account"),
    keywords: [
      "wrong account",
      "spark wrong account",
      "school managed spark username",
      "teacher created spark account",
    ],
    priority: 66,
    resultType: "Article",
    title: "Use the correct school-managed Spark account",
    updated: "Source date not available",
  },
  {
    description:
      "Choose the product or course experience that uses your key so we can send you to the right enrollment step.",
    filters: {
      Product: allProducts,
      Role: sharedRoutingRoles,
    },
    helpArea: "Course Access & Enrollment",
    href: courseKeyChooserHref(),
    keywords: [
      "enter course key",
      "course key",
      "class key",
      "register with course key",
      "join code",
    ],
    priority: 84,
    resultType: "Guided step",
    title: "Enter a course key",
    updated: "Prototype routing step",
  },
  {
    description:
      "Choose the product or course experience linked to your code so we can send you to the right access step.",
    filters: {
      Product: allProducts,
      Role: sharedRoutingRoles,
    },
    helpArea: "Course Access & Enrollment",
    href: accessCodeChooserHref(),
    keywords: ["redeem access code", "access code", "unlock access", "enter access code"],
    priority: 80,
    resultType: "Guided step",
    title: "Redeem an access code",
    updated: "Prototype routing step",
  },
  {
    description:
      "Choose how you are trying to get into your course so we can send you to the right enrollment or access step.",
    filters: {
      Product: allProducts,
      Role: sharedRoutingRoles,
    },
    helpArea: "Course Access & Enrollment",
    href: joinEnrollChooserHref(),
    keywords: ["join or enroll in a course", "join course", "enroll course", "course invite"],
    priority: 78,
    resultType: "Guided step",
    title: "Join or enroll in a course",
    updated: "Prototype routing step",
  },
  {
    description:
      "Choose the LMS access situation for MindTap, WebAssign, or SAM so we can send you to the right next step.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: higherEdLearnerRoles,
      "Sign-in path": ["LMS sign-in"],
      "Education segment": ["Higher Education"],
    },
    helpArea: "Course Access & Enrollment",
    href: lmsAccessChooserHref(),
    keywords: ["access your course through lms", "open course from lms", "course launch", "canvas"],
    priority: 73,
    productMetadataLabel: "MindTap / WebAssign / SAM",
    resultType: "Guided step",
    title: "Access your course through LMS",
    updated: "Prototype routing step",
  },
  {
    description:
      "Open Spark from the LMS course link, self-registration guide, or school link your teacher or school provided.",
    filters: {
      Product: ["Spark"],
      Role: sparkAccessRoles,
      "Sign-in path": ["LMS sign-in", "School / NGLSync"],
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Course Access & Enrollment",
    href: helpArticleHref("spark-lms-access"),
    keywords: ["spark lms access", "spark school platform", "spark course launch", "spark nglsync"],
    priority: 68,
    productMetadataLabel: "Spark",
    resultType: "Article",
    title: "Access Spark through LMS or school platform",
    updated: "Source date not available",
  },
  {
    description:
      "Choose the access situation that matches your purchase problem so we can send you to the right next step.",
    filters: {
      Product: allProducts,
      Role: sharedRoutingRoles,
    },
    helpArea: "Course Access & Enrollment",
    href: purchasedAccessChooserHref(),
    keywords: ["purchased access", "paid but no course", "course unavailable", "access unavailable"],
    priority: 72,
    resultType: "Guided step",
    title: "Purchased access but course is unavailable",
    updated: "Prototype routing step",
  },
  {
    description:
      "Choose the course situation that sounds most like yours so we can send you to the right next step.",
    filters: {
      Product: allProducts,
      Role: sharedRoutingRoles,
    },
    helpArea: "Course Access & Enrollment",
    href: wrongCourseChooserHref(),
    keywords: ["wrong course", "missing course", "wrong section", "course not listed"],
    priority: 70,
    resultType: "Guided step",
    title: "Wrong course or missing course",
    updated: "Prototype routing step",
  },
  {
    description:
      "Move to another section or leave the wrong course when your roster or product rules allow it.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: ["Higher Ed Student", "Higher Ed Instructor"],
      "Education segment": ["Higher Education"],
    },
    helpArea: "Course Access & Enrollment",
    href: helpArticleHref("transfer-or-drop-course"),
    keywords: ["transfer sections", "drop a course", "change section", "wrong section"],
    priority: 62,
    resultType: "Article",
    title: "Transfer sections or drop a course",
    updated: "Source date not available",
  },
  {
    description:
      "Fix broken LMS course or activity links that launch MindTap, WebAssign, or SAM.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: higherEdLearnerRoles,
      "Sign-in path": ["LMS sign-in"],
      "Education segment": ["Higher Education"],
    },
    helpArea: "Troubleshooting & Common Problems",
    href: helpArticleHref("lms-link-not-working"),
    keywords: ["lms link not working", "deep link", "assignment link", "launch problem"],
    priority: 84,
    productMetadataLabel: "MindTap / WebAssign / SAM",
    resultType: "Article",
    title: "LMS link not working",
    updated: "Source date not available",
  },
  {
    description:
      "Fix Spark course links that do not open correctly from your LMS or school platform.",
    filters: {
      Product: ["Spark"],
      Role: sparkAccessRoles,
      "Sign-in path": ["LMS sign-in"],
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Troubleshooting & Common Problems",
    href: helpArticleHref("spark-lms-link-not-working"),
    keywords: ["spark lms link not working", "spark launch problem", "spark deep link"],
    priority: 66,
    productMetadataLabel: "Spark",
    resultType: "Article",
    title: "Spark LMS launch or link help",
    updated: "Source date not available",
  },
  {
    description:
      "Choose your product to get live missing-activities help for MindTap or Spark. WebAssign, SAM, and not-sure branches remain intentionally unresolved.",
    filters: {
      Product: allProducts,
      Role: sharedRoutingRoles,
    },
    helpArea: "Troubleshooting & Common Problems",
    href: missingActivitiesChooserHref(),
    keywords: ["missing activities", "missing assignments", "coursework missing"],
    priority: 76,
    productMetadataLabel: null,
    resultType: "Guided step",
    title: "Missing activities or assignments",
    updated: "Updated April 2026",
    updatedAt: "2026-04-21",
  },
  {
    description:
      "Product-specific help for missing content is still being added. The prototype does not yet include a live next step for each product.",
    filters: {
      Product: allProducts,
      Role: sharedHelpRoles,
    },
    helpArea: "Troubleshooting & Common Problems",
    keywords: ["missing content", "missing materials", "missing ebook", "resources missing"],
    priority: 68,
    productMetadataLabel: null,
    resultType: "Guided step",
    title: "Missing content or course materials",
    updated: "Partial prototype coverage",
  },
  {
    description:
      "Choose the sync or integration problem that best matches your situation so we can send you to the right help.",
    filters: {
      Product: allProducts,
      Role: [
        "Higher Ed Instructor",
        "LMS Administrator",
        "Institutional Administrator",
        "K–12 Teacher",
      ],
      "Sign-in path": ["LMS sign-in"],
    },
    helpArea: "Troubleshooting & Common Problems",
    href: errorSyncChooserHref(),
    keywords: [
      "error message",
      "sync issue",
      "integration issue",
      "grade sync",
      "lms integration",
      "roster issue",
    ],
    priority: 74,
    resultType: "Guided step",
    title: "Error messages, sync, or integration issues",
    updated: "Prototype routing step",
  },
  {
    description:
      "Supported browsers and compatibility guidance for MindTap, WebAssign, and SAM.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: directAccountRoles,
      "Education segment": ["Higher Education"],
    },
    helpArea: "Troubleshooting & Common Problems",
    href: helpArticleHref("browser-requirements"),
    keywords: ["browser requirements", "supported browsers", "browser compatibility"],
    priority: 64,
    resultType: "Article",
    title: "Browser requirements",
    updated: "Source date not available",
  },
  {
    description:
      "Device, browser, and platform requirements for MindTap, WebAssign, and SAM.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: directAccountRoles,
      "Education segment": ["Higher Education"],
    },
    helpArea: "Troubleshooting & Common Problems",
    href: helpArticleHref("system-requirements"),
    keywords: ["system requirements", "device requirements", "workstation recommendations"],
    priority: 60,
    resultType: "Article",
    title: "System requirements",
    updated: "Source date not available",
  },
  {
    description: "Sign in to Spark to access your English language courses.",
    filters: {
      Product: ["Spark"],
      Role: sparkStudentRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Sign In & Account Help",
    href: helpArticleHref("spark-sign-in"),
    keywords: ["spark sign in", "spark login", "student sign in"],
    priority: 70,
    resultType: "Article",
    title: "Sign in to Spark",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description: "Enroll in a teacher-led Spark course with your existing account.",
    filters: {
      Product: ["Spark"],
      Role: sparkStudentRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Course Access & Enrollment",
    href: helpArticleHref("spark-join-course"),
    keywords: ["spark join course", "spark course key", "spark access code", "teacher-led course"],
    priority: 72,
    resultType: "Article",
    title: "Join a Spark course",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description:
      "Get your course key to enroll in Spark self-study courses when you do not have a teacher.",
    filters: {
      Product: ["Spark"],
      Role: sparkStudentRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Course Access & Enrollment",
    href: helpArticleHref("spark-course-key-lookup"),
    keywords: ["spark course key lookup", "self-study", "spark no teacher", "course key lookup"],
    priority: 62,
    resultType: "Article",
    title: "Spark Course Key Lookup",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description:
      "Get the next step when you are trying to create an account or join a Spark course without a course key.",
    filters: {
      Product: ["Spark"],
      Role: sparkStudentRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Course Access & Enrollment",
    href: helpArticleHref("spark-no-course-key"),
    keywords: ["spark no course key", "spark course key not working", "join spark without key"],
    priority: 60,
    resultType: "Article",
    title: "No Course Key for Spark",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description: "Complete assignments your instructor has assigned to you in Spark.",
    filters: {
      Product: ["Spark"],
      Role: sparkStudentRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Using Spark",
    href: helpArticleHref("spark-assignments"),
    keywords: ["spark assignments", "complete work", "assigned activities"],
    priority: 56,
    resultType: "Article",
    title: "Assignments in Spark",
    updated: "Updated April 6, 2026",
    updatedAt: "2026-04-06",
  },
  {
    description:
      "Access the Gradebook to view your progress and grades on activities, assignments, and tests in Spark.",
    filters: {
      Product: ["Spark"],
      Role: sparkStudentRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Using Spark",
    href: helpArticleHref("spark-view-your-grades"),
    keywords: ["spark grades", "spark gradebook", "view progress", "scores"],
    priority: 52,
    resultType: "Article",
    title: "View Your Grades in Spark",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description:
      "The Spark platform and app support the following operating systems and browsers.",
    filters: {
      Product: ["Spark"],
      Role: [...sparkStudentRoles, ...sparkInstructorRoles, ...sparkAdminRoles],
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Troubleshooting & Common Problems",
    href: helpArticleHref("spark-system-requirements"),
    keywords: ["spark system requirements", "spark browser requirements", "spark app"],
    priority: 58,
    resultType: "Article",
    title: "System Requirements for Spark",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description: "Create your course in Spark.",
    filters: {
      Product: ["Spark"],
      Role: sparkInstructorRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Course Management",
    href: helpArticleHref("spark-create-course"),
    keywords: ["create spark course", "spark instructor", "course setup"],
    priority: 60,
    resultType: "Article",
    title: "Create a Spark Course",
    updated: "Updated February 23, 2026",
    updatedAt: "2026-02-23",
  },
  {
    description: "Teach live lessons with Dynamic Lessons in Spark.",
    filters: {
      Product: ["Spark"],
      Role: sparkInstructorRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Using Spark",
    href: helpArticleHref("spark-dynamic-lessons"),
    keywords: ["dynamic lessons", "spark live lessons", "spark lesson delivery"],
    priority: 66,
    resultType: "Article",
    title: "Dynamic Lessons",
    updated: "Source date not available",
  },
  {
    description:
      "Customize a Spark Dynamic Lesson by adding, removing, or rearranging slides.",
    filters: {
      Product: ["Spark"],
      Role: sparkInstructorRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Using Spark",
    href: helpArticleHref("spark-customize-lesson"),
    keywords: ["customize a lesson", "dynamic lessons slides", "spark lesson editing"],
    priority: 58,
    resultType: "Article",
    title: "Customize a Lesson",
    updated: "Source date not available",
  },
  {
    description:
      "Present a live pre-made Publisher Lesson or your customized lesson in Spark.",
    filters: {
      Product: ["Spark"],
      Role: sparkInstructorRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Using Spark",
    href: helpArticleHref("spark-present-lesson"),
    keywords: ["present a lesson", "spark presentation mode", "dynamic lessons toolbar"],
    priority: 58,
    resultType: "Article",
    title: "Present a Lesson",
    updated: "Source date not available",
  },
  {
    description:
      "Start an in-class activity from a Spark Dynamic Lesson and monitor student performance in real time.",
    filters: {
      Product: ["Spark"],
      Role: sparkInstructorRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Using Spark",
    href: helpArticleHref("spark-in-class-activity"),
    keywords: ["assign in-class activity", "dynamic lessons activity", "spark classroom activity"],
    priority: 58,
    resultType: "Article",
    title: "Assign an In-Class Activity",
    updated: "Source date not available",
  },
  {
    description:
      "Create Spark courses, assignments, and tests within your institution's LTI 1.3 learning management system.",
    filters: {
      Product: ["Spark"],
      Role: sparkLmsRoles,
      "Sign-in path": ["LMS sign-in"],
      "Education segment": ["English Language Learning"],
    },
    helpArea: "LMS Integration",
    href: helpArticleHref("spark-lti-1-3-course-management"),
    keywords: ["spark lti 1.3", "lms integration", "course management", "grade sync"],
    priority: 68,
    resultType: "Article",
    title: "LTI 1.3 LMS Course Management",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description:
      "Add, upload, remove, and edit students, instructors, and administrators in a Spark course.",
    filters: {
      Product: ["Spark"],
      Role: sparkAdminRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Course Management",
    href: helpArticleHref("spark-manage-users"),
    keywords: ["manage users", "spark roster", "user import", "student roster issues"],
    priority: 62,
    resultType: "Article",
    title: "Manage Users in Spark",
    updated: "Updated February 2, 2026",
    updatedAt: "2026-02-02",
  },
  {
    description:
      "Control school-wide Spark settings for messaging, user management, course creation, and grade export.",
    filters: {
      Product: ["Spark"],
      Role: sparkAdminRoles,
      "Education segment": ["English Language Learning"],
    },
    helpArea: "Course Management",
    href: helpArticleHref("spark-institutional-settings"),
    keywords: ["institutional settings", "school settings", "grade export", "spark admin settings"],
    priority: 62,
    resultType: "Article",
    title: "Edit Institutional Settings in Spark",
    updated: "Updated January 13, 2026",
    updatedAt: "2026-01-13",
  },
  {
    description:
      "Remove the wrong Cengage product or linked course from your LMS and fix the course selection.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: ["Higher Ed Instructor", "LMS Administrator"],
      "Sign-in path": ["LMS sign-in"],
      "Education segment": ["Higher Education"],
    },
    helpArea: "Course Access & Enrollment",
    href: helpArticleHref("wrong-product-or-course-in-lms"),
    keywords: ["wrong product in lms", "wrong course in lms", "remove wrong link", "course copy issue"],
    priority: 64,
    resultType: "Article",
    title: "Added wrong product or course in LMS",
    updated: "Source date not available",
  },
  {
    description:
      "Resolve slow syncing, missing scores, or gradebook issues when grades do not pass from your Cengage product to your LMS.",
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: ["Higher Ed Instructor", "LMS Administrator"],
      "Sign-in path": ["LMS sign-in"],
      "Education segment": ["Higher Education"],
    },
    helpArea: "Troubleshooting & Common Problems",
    href: helpArticleHref("grade-sync-problems"),
    keywords: ["grade sync problems", "scores not syncing", "lms gradebook", "grade passback"],
    priority: 70,
    resultType: "Article",
    title: "Grade sync problems",
    updated: "Source date not available",
  },
];

function getResolvedFilters(result: SearchResult): Partial<FilterSelections> {
  const lastUpdatedBucket = getLastUpdatedBucket(result.updatedAt);

  if (!lastUpdatedBucket) {
    return result.filters ?? {};
  }

  return {
    ...(result.filters ?? {}),
    "Last updated": [lastUpdatedBucket],
  };
}

function getLastUpdatedBucket(updatedAt?: string) {
  if (!updatedAt) {
    return null;
  }

  const updatedDate = new Date(updatedAt);

  if (Number.isNaN(updatedDate.getTime())) {
    return null;
  }

  const daysSinceUpdate = (Date.now() - updatedDate.getTime()) / (1000 * 60 * 60 * 24);

  if (daysSinceUpdate <= 30) {
    return "Last 30 days";
  }

  if (daysSinceUpdate <= 90) {
    return "Last 3 months";
  }

  if (daysSinceUpdate <= 365) {
    return "Last year";
  }

  return null;
}

function summarizeProducts(products: string[]) {
  if (products.length === 0) {
    return null;
  }

  if (products.length === allProducts.length) {
    return "All products";
  }

  return products.join(" / ");
}

function summarizeRoles(roles: string[]) {
  const uniqueRoles = [...new Set(roles)];

  if (uniqueRoles.length === 0 || uniqueRoles.length > 3) {
    return null;
  }

  const hasOnlyStudents = uniqueRoles.every((role) => role.includes("Student"));
  const hasOnlyInstructors = uniqueRoles.every(
    (role) => role.includes("Instructor") || role.includes("Teacher")
  );
  const hasOnlyAdmins = uniqueRoles.every((role) => role.includes("Administrator"));

  if (hasOnlyStudents) {
    return "Students";
  }

  if (hasOnlyInstructors) {
    return "Instructors";
  }

  if (hasOnlyAdmins) {
    return "Administrators";
  }

  return null;
}

function buildMetadataTags(result: SearchResult) {
  const resolvedFilters = getResolvedFilters(result);
  const metadataTags: string[] = [result.resultType];
  const productSummary = summarizeProducts(resolvedFilters.Product ?? []);
  const productLabel =
    result.productMetadataLabel === undefined ? productSummary : result.productMetadataLabel;
  const roleSummary = summarizeRoles(resolvedFilters.Role ?? []);
  const signInPath = resolvedFilters["Sign-in path"]?.[0];
  const educationSegment = resolvedFilters["Education segment"]?.[0];

  if (result.helpArea) {
    metadataTags.push(result.helpArea);
  }

  if (productLabel) {
    metadataTags.push(productLabel);
  }

  if (signInPath) {
    metadataTags.push(signInPath);
  }

  if (educationSegment) {
    metadataTags.push(educationSegment);
  }

  if (roleSummary) {
    metadataTags.push(roleSummary);
  }

  return metadataTags;
}

function tokenize(value: string) {
  return value.toLowerCase().match(/[a-z0-9]+/g) ?? [];
}

function countMatchedTerms(haystack: string, terms: string[]) {
  return terms.filter((term) => haystack.includes(term)).length;
}

function getQueryThreshold(termCount: number) {
  if (termCount <= 2) {
    return termCount;
  }

  if (termCount <= 4) {
    return termCount - 1;
  }

  return Math.ceil(termCount * 0.6);
}

function getQueryScore(result: SearchResult, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return 0;
  }

  const terms = tokenize(normalizedQuery);

  if (terms.length === 0) {
    return 0;
  }

  const metadataTags = buildMetadataTags(result).join(" ").toLowerCase();
  const title = result.title.toLowerCase();
  const description = result.description.toLowerCase();
  const keywords = (result.keywords ?? []).join(" ").toLowerCase();
  const searchableText = [title, description, metadataTags, keywords].join(" ");
  const matchedTerms = countMatchedTerms(searchableText, terms);
  const matchesExactPhrase =
    title.includes(normalizedQuery) ||
    description.includes(normalizedQuery) ||
    keywords.includes(normalizedQuery);

  if (!matchesExactPhrase && matchedTerms < getQueryThreshold(terms.length)) {
    return -1;
  }

  let score = matchedTerms * 12;

  if (title === normalizedQuery) {
    score += 120;
  } else if (title.includes(normalizedQuery)) {
    score += 72;
  }

  if (keywords.includes(normalizedQuery)) {
    score += 42;
  }

  if (description.includes(normalizedQuery)) {
    score += 18;
  }

  if (matchesExactPhrase) {
    score += 14;
  }

  score += countMatchedTerms(title, terms) * 10;
  score += countMatchedTerms(keywords, terms) * 7;
  score += countMatchedTerms(metadataTags, terms) * 5;
  score += (result.priority ?? 0) / 10;

  return score;
}

function matchesQuery(result: SearchResult, query: string) {
  return getQueryScore(result, query) >= 0;
}

function matchesSelectedFilters(result: SearchResult, selectedFilters: FilterSelections) {
  const resolvedFilters = getResolvedFilters(result);

  return filterGroups.every((group) => {
    const activeOptions = selectedFilters[group.title] ?? [];

    if (activeOptions.length === 0) {
      return true;
    }

    const resultOptions = resolvedFilters[group.title] ?? [];

    if (resultOptions.length === 0) {
      return false;
    }

    return activeOptions.some((option) => resultOptions.includes(option));
  });
}

function getUpdatedTimestamp(result: SearchResult) {
  if (!result.updatedAt) {
    return Number.NEGATIVE_INFINITY;
  }

  const timestamp = new Date(result.updatedAt).getTime();

  return Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp;
}

function getResultTypeWeight(resultType: SearchResultType) {
  if (resultType === "Article") {
    return 4;
  }

  return 3;
}

function compareByBestMatch(left: SearchResult, right: SearchResult, query: string) {
  const scoreDifference = getQueryScore(right, query) - getQueryScore(left, query);

  if (scoreDifference !== 0) {
    return scoreDifference;
  }

  const typeDifference =
    getResultTypeWeight(right.resultType) - getResultTypeWeight(left.resultType);

  if (typeDifference !== 0) {
    return typeDifference;
  }

  const priorityDifference = (right.priority ?? 0) - (left.priority ?? 0);

  if (priorityDifference !== 0) {
    return priorityDifference;
  }

  return getUpdatedTimestamp(right) - getUpdatedTimestamp(left);
}

function compareByMostRecent(left: SearchResult, right: SearchResult, query: string) {
  const updatedDifference = getUpdatedTimestamp(right) - getUpdatedTimestamp(left);

  if (updatedDifference !== 0) {
    return updatedDifference;
  }

  return compareByBestMatch(left, right, query);
}

function getActionLabel(result: SearchResult) {
  if (result.actionLabel) {
    return result.actionLabel;
  }

  if (result.resultType === "Guided step") {
    return "Continue";
  }

  return "View article";
}

export function SearchResultsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [routeResultsContextLabel, setRouteResultsContextLabel] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<FilterSelections>(() =>
    buildFilterSelections()
  );
  const [sortMode, setSortMode] = useState<SearchSortMode>("best-match");

  useEffect(() => {
    function syncSearchStateFromHash() {
      const routeState = getSearchDiscoveryOptionsFromHash();
      const nextQuery = routeState.query ?? "";

      setSearchQuery(nextQuery);
      setRouteResultsContextLabel(getSearchResultsContextLabel(routeState));
      setSelectedFilters(buildFilterSelections(getRouteDrivenSearchFilters(routeState)));
      setSortMode(nextQuery.trim() ? "best-match" : "most-recent");
    }

    syncSearchStateFromHash();
    window.addEventListener("hashchange", syncSearchStateFromHash);

    return () => {
      window.removeEventListener("hashchange", syncSearchStateFromHash);
    };
  }, []);

  function handleSearchClick() {
    const trimmedQuery = searchQuery.trim();
    setPreviewPageHash("search-results", trimmedQuery ? { query: trimmedQuery } : {});
  }

  const resultsContextLabel = searchQuery.trim()
    ? `for "${searchQuery.trim()}"`
    : routeResultsContextLabel;
  const hasSearchQuery = Boolean(searchQuery.trim());
  const activeSortMode = hasSearchQuery ? sortMode : "most-recent";

  const appliedFilters = filterGroups.flatMap((group) =>
    (selectedFilters[group.title] ?? []).map((option) => ({
      groupTitle: group.title,
      option,
    }))
  );
  const hasActiveLastUpdatedFilter = (selectedFilters["Last updated"] ?? []).length > 0;

  const filteredResults = results.filter(
    (result) =>
      matchesQuery(result, searchQuery) && matchesSelectedFilters(result, selectedFilters)
  );

  const sortedResults = [...filteredResults].sort((left, right) =>
    activeSortMode === "best-match"
      ? compareByBestMatch(left, right, searchQuery)
      : compareByMostRecent(left, right, searchQuery)
  );

  const shouldHighlightBestMatch =
    hasSearchQuery && activeSortMode === "best-match" && sortedResults.length > 0;
  const bestMatch = shouldHighlightBestMatch ? sortedResults[0] : null;
  const remainingResults = shouldHighlightBestMatch ? sortedResults.slice(1) : sortedResults;
  const showPagination = sortedResults.length > 10;

  function toggleFilter(groupTitle: string, option: string) {
    setSelectedFilters((currentSelections) => {
      const activeSelections = currentSelections[groupTitle] ?? [];
      const nextSelections = activeSelections.includes(option)
        ? activeSelections.filter((item) => item !== option)
        : [...activeSelections, option];

      return {
        ...currentSelections,
        [groupTitle]: nextSelections,
      };
    });
  }

  function clearAllFilters() {
    const trimmedQuery = searchQuery.trim();
    setSelectedFilters(buildFilterSelections());
    setPreviewPageHash("search-results", trimmedQuery ? { query: trimmedQuery } : {});
  }

  return (
    <div className="search-results-page">
      <nav className="search-results-breadcrumbs" aria-label="Breadcrumb">
        <a href={homepageHref()}>Help Home</a>
        <span aria-hidden="true">›</span>
        <span>Search Results</span>
      </nav>

      <div className="search-results-query-bar">
        <Input
          value={searchQuery}
          labelText="Search query"
          isLabelVisuallyHidden
          placeholder="Search help articles, known issues, FAQs..."
          type={InputType.search}
          width="100%"
          icon={<SearchIcon />}
          iconAriaLabel="Search"
          onIconClick={handleSearchClick}
          onChange={(event) => {
            const nextQuery = event.target.value;
            const hasNextQuery = Boolean(nextQuery.trim());

            if (!hasSearchQuery && hasNextQuery) {
              setSortMode("best-match");
            } else if (hasSearchQuery && !hasNextQuery) {
              setSortMode("most-recent");
            }

            setSearchQuery(nextQuery);
          }}
        />
      </div>

      <header className="search-results-header">
        <p className="search-results-count">
          <strong>{filteredResults.length} results</strong>
          {resultsContextLabel ? ` ${resultsContextLabel}` : null}
        </p>

        <label className="search-results-sort-control">
          <span>Sort by:</span>
          <select
            value={activeSortMode}
            aria-label="Sort results"
            onChange={(event) => setSortMode(event.target.value as SearchSortMode)}
          >
            {hasSearchQuery ? <option value="best-match">Best match</option> : null}
            <option value="most-recent">Most recent</option>
          </select>
        </label>
      </header>

      <div className="search-results-layout">
        <aside className="search-filters" aria-label="Search filters">
          <div className="search-filters-refine">
            <div className="search-filters-refine-header">
              <p className="search-filters-refine-title">Refine results</p>
              <button
                type="button"
                className="search-filters-clear"
                onClick={clearAllFilters}
                disabled={appliedFilters.length === 0}
              >
                Clear all
              </button>
            </div>

            {appliedFilters.length > 0 ? (
              <div className="search-filters-applied-list" aria-label="Applied filters">
                {appliedFilters.map(({ groupTitle, option }) => (
                  <Tag
                    key={`${groupTitle}-${option}`}
                    className="search-filters-applied-tag"
                    color={TagColor.primary}
                    labelText={`${groupTitle}: ${option}`}
                    onDelete={() => toggleFilter(groupTitle, option)}
                    size={TagSize.medium}
                  >
                    {option}
                  </Tag>
                ))}
              </div>
            ) : null}
          </div>

          <h2>Filter by</h2>

          {filterGroups.map((group) => (
            <div className="search-filter-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="search-filter-options">
                {group.options.map((option) => (
                  <div className="search-filter-option" key={option}>
                    <Checkbox
                      checked={(selectedFilters[group.title] ?? []).includes(option)}
                      containerStyle={checkboxContainerStyle}
                      labelStyle={checkboxLabelStyle}
                      labelText={option}
                      onChange={() => toggleFilter(group.title, option)}
                    />
                  </div>
                ))}
              </div>
              {group.title === "Last updated" && hasActiveLastUpdatedFilter ? (
                <p className="search-filter-note">
                  Only results with known update dates appear when this filter is applied.
                </p>
              ) : null}
            </div>
          ))}
        </aside>

        <section className="search-results-column">
          {bestMatch ? (
            <>
              <article className="search-best-match-card">
                <div className="search-best-match-header">
                  <div className="search-best-match-icon" aria-hidden="true">
                    ★
                  </div>
                  <p className="search-best-match-label">Best match</p>
                </div>

                <h2>{bestMatch.title}</h2>
                <p className="search-result-description">{bestMatch.description}</p>

                <div className="search-result-meta-row">
                  <ul className="search-result-meta-list">
                    {buildMetadataTags(bestMatch).map((item) => (
                      <li key={item}>
                        <Tag className="search-result-meta-tag" size={TagSize.medium}>
                          {item}
                        </Tag>
                      </li>
                    ))}
                  </ul>
                  <p className="search-result-updated">{bestMatch.updated}</p>
                </div>

                {bestMatch.href ? (
                  <OptionalLink className="search-best-match-action" href={bestMatch.href}>
                    {getActionLabel(bestMatch)}
                  </OptionalLink>
                ) : null}
              </article>

              {remainingResults.length > 0 ? (
                <>
                  <div className="search-results-divider">
                    <h2>All results</h2>
                  </div>

                  <div className="search-results-list">
                    {remainingResults.map((result) => (
                      <article className="search-result-card" key={result.title}>
                        <div className="search-result-heading-row">
                          <OptionalLink className="search-result-title" href={result.href}>
                            {result.title}
                          </OptionalLink>
                          {result.href ? (
                            <span className="search-result-chevron" aria-hidden="true">
                              ›
                            </span>
                          ) : null}
                        </div>

                        <p className="search-result-description">{result.description}</p>

                        <div className="search-result-meta-row">
                          <ul className="search-result-meta-list">
                            {buildMetadataTags(result).map((item) => (
                              <li key={item}>
                                <Tag className="search-result-meta-tag" size={TagSize.medium}>
                                  {item}
                                </Tag>
                              </li>
                            ))}
                          </ul>
                          <p className="search-result-updated">{result.updated}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              ) : null}
            </>
          ) : remainingResults.length > 0 ? (
            <div className="search-results-list">
              {remainingResults.map((result) => (
                <article className="search-result-card" key={result.title}>
                  <div className="search-result-heading-row">
                    <OptionalLink className="search-result-title" href={result.href}>
                      {result.title}
                    </OptionalLink>
                    {result.href ? (
                      <span className="search-result-chevron" aria-hidden="true">
                        ›
                      </span>
                    ) : null}
                  </div>

                  <p className="search-result-description">{result.description}</p>

                  <div className="search-result-meta-row">
                    <ul className="search-result-meta-list">
                      {buildMetadataTags(result).map((item) => (
                        <li key={item}>
                          <Tag className="search-result-meta-tag" size={TagSize.medium}>
                            {item}
                          </Tag>
                        </li>
                      ))}
                    </ul>
                    <p className="search-result-updated">{result.updated}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <article className="search-best-match-card">
              <div className="search-best-match-header">
                <div className="search-best-match-icon" aria-hidden="true">
                  ★
                </div>
                <p className="search-best-match-label">No exact prototype match</p>
              </div>

              <h2>No live destination matches this combination yet</h2>
              <p className="search-result-description">
                The current prototype does not yet include an honest direct destination for this
                query and filter combination. Try a broader filter set or return to a shared help
                domain.
              </p>
            </article>
          )}

          {showPagination ? (
            <nav className="search-results-pagination" aria-label="Pagination">
              <button type="button" aria-label="Previous page">
                ‹
              </button>
              <button type="button" className="is-active" aria-current="page">
                1
              </button>
              <button type="button">2</button>
              <button type="button">3</button>
              <button type="button">4</button>
              <button type="button">5</button>
              <button type="button">6</button>
              <button type="button" aria-label="Next page">
                ›
              </button>
            </nav>
          ) : null}
        </section>
      </div>
    </div>
  );
}
