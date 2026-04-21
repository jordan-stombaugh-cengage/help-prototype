import {
  accessCodeChooserHref,
  browseByProductHref,
  contactSupportHref,
  courseKeyChooserHref,
  getProductContextFromHash,
  joinEnrollChooserHref,
  homepageHref,
  helpArticleHref,
  lmsAccessChooserHref,
  purchasedAccessChooserHref,
  wrongAccountChooserHref,
  wrongCourseChooserHref,
} from "../../app/routes";
import {
  ContentContainer,
  OptionalLink,
  PageHeroBand,
  SectionHeader,
  SupportFallbackBlock,
} from "../../components/prototype/Primitives";

type CourseAccessCardData = {
  description: string;
  href?: string;
  title: string;
  variant?: "primary" | "product";
};

const commonAccessIssues: CourseAccessCardData[] = [
  {
    title: "Enter a course key",
    description: "Use a course key to join your class and unlock course materials.",
    href: courseKeyChooserHref(),
  },
  {
    title: "Redeem an access code",
    description: "Apply your access code and connect it to the correct course.",
    href: accessCodeChooserHref(),
  },
  {
    title: "Join or enroll in a course",
    description: "Get into your course when you have a class key, section link, or invite.",
    href: joinEnrollChooserHref(),
  },
  {
    title: "Access your course through LMS",
    description: "Start from Canvas, Blackboard, Moodle, or another LMS when your class uses one.",
    href: lmsAccessChooserHref(),
  },
  {
    title: "Purchased access but course is unavailable",
    description: "Resolve cases where you bought access but still cannot open the course.",
    href: purchasedAccessChooserHref(),
  },
  {
    title: "Wrong course or missing course",
    description: "Get help when the course list is empty, incorrect, or missing materials.",
    href: wrongCourseChooserHref(),
  },
] as const;

const productEntryPoints: CourseAccessCardData[] = [
  {
    title: "MindTap",
    description: "Get product-specific help with registration, access codes, and course entry.",
    href: browseByProductHref("mindtap"),
    variant: "product",
  },
  {
    title: "WebAssign",
    description: "Use WebAssign-specific access and enrollment help when that workflow applies.",
    href: browseByProductHref("webassign"),
    variant: "product",
  },
  {
    title: "SAM",
    description: "Use SAM-specific course-entry help if your access steps depend on SAM.",
    href: browseByProductHref("sam"),
    variant: "product",
  },
  {
    title: "Spark",
    description: "Use Spark-specific access guidance when your enrollment path depends on Spark.",
    href: browseByProductHref("spark"),
    variant: "product",
  },
] as const;

const mindTapAccessIssues: CourseAccessCardData[] = [
  {
    title: "Enter a course key",
    description: "Use the MindTap course key your instructor gave you to enroll in the correct course.",
    href: helpArticleHref("mindtap-course-key"),
  },
  {
    title: "Redeem an access code",
    description: "Register a bookstore or retailer access code on the Cengage account you use for MindTap.",
    href: helpArticleHref("mindtap-access-code"),
  },
  {
    title: "Join or enroll in a course",
    description:
      "The prototype does not yet include a MindTap-scoped join or enroll destination beyond course-key and access-code help.",
  },
  {
    title: "Access your course through LMS",
    description:
      "The prototype does not yet include a MindTap-scoped LMS-access destination that stays inside MindTap context.",
  },
  {
    title: "Purchased access but course is unavailable",
    description:
      "Use the shared purchased-access flow when your payment is complete but MindTap still is not opening.",
    href: purchasedAccessChooserHref(),
  },
  {
    title: "Wrong course or missing course",
    description:
      "Use the shared course-availability flow when the wrong MindTap course shows up or the course list is empty.",
    href: wrongCourseChooserHref(),
  },
] as const;

const mindTapRelatedAccessHelp: CourseAccessCardData[] = [
  {
    title: "Sign in to MindTap",
    description: "Use the direct MindTap sign-in steps when you need to reach your dashboard first.",
    href: helpArticleHref("sign-in"),
    variant: "product",
  },
  {
    title: "LMS link not working",
    description: "Use the shared LMS-link article when a MindTap course or activity link from your LMS does not open.",
    href: helpArticleHref("lms-link-not-working"),
    variant: "product",
  },
] as const;

const webAssignAccessIssues: CourseAccessCardData[] = [
  {
    title: "Enter a class key",
    description: "Use the WebAssign class key your instructor gave you to enroll in the correct class section.",
    href: helpArticleHref("webassign-class-key"),
  },
  {
    title: "Redeem an access code",
    description: "Register a bookstore or retailer access code on the Cengage account you use for WebAssign.",
    href: helpArticleHref("webassign-access-code"),
  },
  {
    title: "Join or enroll in a course",
    description:
      "Use the WebAssign class-key article when you are joining a class with a class key or instructor enrollment link.",
    href: helpArticleHref("webassign-class-key"),
  },
  {
    title: "Access your course through LMS",
    description:
      "The prototype does not yet include a WebAssign-scoped LMS-access destination that stays inside WebAssign context.",
  },
  {
    title: "Purchased access but course is unavailable",
    description:
      "Use WebAssign access routing when your payment is complete but the class still is not opening.",
    href: purchasedAccessChooserHref("webassign"),
  },
  {
    title: "Wrong course or missing course",
    description:
      "Use the shared course-availability flow when the wrong WebAssign class shows up or the class list is empty.",
    href: wrongCourseChooserHref(),
  },
] as const;

const webAssignRelatedAccessHelp: CourseAccessCardData[] = [
  {
    title: "Wrong account",
    description: "Use WebAssign account routing when your class opens under the wrong Cengage account.",
    href: wrongAccountChooserHref("webassign"),
    variant: "product",
  },
  {
    title: "LMS link not working",
    description: "Use the shared LMS-link article when a WebAssign course or assignment link from your LMS does not open.",
    href: helpArticleHref("lms-link-not-working"),
    variant: "product",
  },
] as const;

const samAccessIssues: CourseAccessCardData[] = [
  {
    title: "Enter a course key",
    description:
      "The prototype does not yet include a SAM-scoped course-key destination.",
  },
  {
    title: "Redeem an access code",
    description:
      "Use the SAM access-code article when your institution requires a key code to unlock assignments.",
    href: helpArticleHref("sam-access-code"),
  },
  {
    title: "Join or enroll in a course",
    description:
      "The prototype does not yet include a SAM-scoped join or enroll destination beyond access-code help.",
  },
  {
    title: "Access your course through LMS",
    description:
      "The prototype does not yet include a SAM-scoped LMS-access destination that stays inside SAM context.",
  },
  {
    title: "Purchased access but course is unavailable",
    description:
      "The prototype does not yet include a SAM-scoped purchased-access destination.",
  },
  {
    title: "Wrong course or missing course",
    description:
      "The prototype does not yet include a SAM-scoped wrong-course destination.",
  },
] as const;

const samRelatedAccessHelp: CourseAccessCardData[] = [
  {
    title: "Wrong account",
    description: "Use SAM account routing when access is attached to the wrong Cengage account.",
    href: wrongAccountChooserHref("sam"),
    variant: "product",
  },
  {
    title: "LMS link not working",
    description: "Use the shared LMS-link article when an LMS link is supposed to open SAM.",
    href: helpArticleHref("lms-link-not-working"),
    variant: "product",
  },
] as const;

const sparkAccessIssues: CourseAccessCardData[] = [
  {
    title: "Join a course",
    description: "Use Spark join-course help when you have a self-registration guide, a course key, or a teacher-led course invitation.",
    href: helpArticleHref("spark-join-course"),
  },
  {
    title: "Course key lookup",
    description: "Use Spark course-key lookup when you are joining an eligible self-study Spark course and do not have a teacher.",
    href: helpArticleHref("spark-course-key-lookup"),
  },
  {
    title: "No course key or join code",
    description: "Use Spark course-access help when you are trying to join a course but do not have the course key or join code you expected.",
    href: helpArticleHref("spark-no-course-key"),
  },
  {
    title: "Access your course through LMS or school platform",
    description: "Use Spark LMS access help when your course opens from Canvas, Blackboard, Moodle, a school link, or a self-registration guide.",
    href: helpArticleHref("spark-lms-access"),
  },
] as const;

const sparkRelatedAccessHelp: CourseAccessCardData[] = [
  {
    title: "Sign in to Spark",
    description: "Use the direct Spark sign-in article when you need to reach learn.eltngl.com before joining or opening a course.",
    href: helpArticleHref("spark-sign-in"),
    variant: "product",
  },
  {
    title: "Use the correct school-managed Spark account",
    description: "Use Spark account help when your teacher or school created the Spark account you should be using.",
    href: helpArticleHref("spark-school-managed-wrong-account"),
    variant: "product",
  },
  {
    title: "Spark LMS link not working",
    description: "Use the Spark LMS troubleshooting article when your LMS or school-platform link does not open the right Spark course.",
    href: helpArticleHref("spark-lms-link-not-working"),
    variant: "product",
  },
] as const;

function joinClassNames(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function BackArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M11.75 4.5 6.25 10l5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M6.75 10h7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CourseAccessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 5.5h12v13H6zM12 5.5v13M6.5 10.25h11"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CourseAccessCard({
  description,
  href,
  title,
  variant = "primary",
}: CourseAccessCardData) {
  return (
    <OptionalLink
      className={joinClassNames(
        "sign-in-topic-card",
        "course-access-topic-card",
        variant === "primary" ? "course-access-topic-card--primary" : undefined,
        variant === "product" ? "course-access-topic-card--product" : undefined
      )}
      href={href}
      staticAs="div"
    >
      <div className="course-access-topic-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </OptionalLink>
  );
}

export function CourseAccessEnrollmentPage() {
  const productContext = getProductContextFromHash();
  const scopedConfig =
    productContext === "mindtap"
      ? {
          hubHref: browseByProductHref("mindtap"),
          productLabel: "MindTap",
          pageTitle: "MindTap Course Access & Enrollment",
          heroDescription:
            "Find help with MindTap course keys, access codes, purchase-access issues, and related sign-in or LMS launch problems.",
          primarySectionTitle: "MindTap access and enrollment issues",
          primarySectionDescription:
            "Start here for the most common MindTap course-entry and access problems.",
          secondarySectionTitle: "Related MindTap access help",
          secondarySectionDescription:
            "Use these when the next step is sign-in or LMS launch rather than course-key or access-code entry.",
          primaryTopics: mindTapAccessIssues,
          secondaryTopics: mindTapRelatedAccessHelp,
        }
      : productContext === "webassign"
        ? {
            hubHref: browseByProductHref("webassign"),
            productLabel: "WebAssign",
            pageTitle: "WebAssign Course Access & Enrollment",
            heroDescription:
              "Find help with WebAssign class keys, access codes, enrollment, and related LMS or account access issues without widening back into generic help.",
            primarySectionTitle: "WebAssign access and enrollment issues",
            primarySectionDescription:
              "Start here for the most common WebAssign class-entry and access problems.",
            secondarySectionTitle: "Related WebAssign access help",
            secondarySectionDescription:
              "Use these when the next step is wrong-account recovery or LMS launch help rather than class-key or access-code entry.",
            primaryTopics: webAssignAccessIssues,
            secondaryTopics: webAssignRelatedAccessHelp,
          }
        : productContext === "sam"
          ? {
              hubHref: browseByProductHref("sam"),
              productLabel: "SAM",
              pageTitle: "SAM Course Access & Enrollment",
              heroDescription:
                "Find help with SAM access codes and related account or LMS launch issues without widening back into generic help.",
              primarySectionTitle: "SAM access and enrollment issues",
              primarySectionDescription:
                "Start here for the most common course-entry and access problems in SAM.",
              secondarySectionTitle: "Related SAM access help",
              secondarySectionDescription:
                "Use these when the next step is account recovery or LMS-link help rather than access-code entry.",
              primaryTopics: samAccessIssues,
              secondaryTopics: samRelatedAccessHelp,
            }
        : productContext === "spark"
          ? {
              hubHref: browseByProductHref("spark"),
              productLabel: "Spark",
              pageTitle: "Spark Course Access & Enrollment",
              heroDescription:
                "Find help with joining Spark courses, course keys, LMS or school-platform access, and related Spark account-entry issues without widening back into generic help.",
              primarySectionTitle: "Spark access and enrollment issues",
              primarySectionDescription:
                "Start here for the most common ways students get into Spark courses and self-study experiences.",
              secondarySectionTitle: "Related Spark access help",
              secondarySectionDescription:
                "Use these when the next step is Spark sign-in, school-managed account help, or LMS launch troubleshooting rather than course-entry instructions.",
              primaryTopics: sparkAccessIssues,
              secondaryTopics: sparkRelatedAccessHelp,
            }
        : null;
  const isProductScoped = scopedConfig !== null;
  const pageTitle =
    scopedConfig?.pageTitle ?? "Course Access & Enrollment";
  const heroDescription =
    scopedConfig?.heroDescription ??
    "Find help with course keys, access codes, enrollment, purchase-access issues, and LMS course entry across Cengage products.";
  const primarySectionTitle =
    scopedConfig?.primarySectionTitle ?? "Common access and enrollment issues";
  const primarySectionDescription =
    scopedConfig?.primarySectionDescription ??
    "Start here for the most common ways to enter a course, use a code, or resolve access problems.";
  const secondarySectionTitle =
    scopedConfig?.secondarySectionTitle ?? "Product-specific access help";
  const secondarySectionDescription =
    scopedConfig?.secondarySectionDescription ??
    "Use these when your course-access steps depend on the product you are using.";
  const primaryTopics = scopedConfig?.primaryTopics ?? commonAccessIssues;
  const secondaryTopics = scopedConfig?.secondaryTopics ?? productEntryPoints;

  return (
    <div className="sign-in-page course-access-page">
      <div className="sign-in-page-utility">
        <ContentContainer className="sign-in-page-hero-shell">
          {isProductScoped ? (
            <p className="sign-in-page-breadcrumbs">
              <span className="relationship-chooser-crumb">
                <a href={homepageHref()}>Help Home</a>
                <span>/</span>
              </span>
              <span className="relationship-chooser-crumb">
                <a href={scopedConfig.hubHref}>{scopedConfig.productLabel}</a>
                <span>/</span>
              </span>
              <span className="relationship-chooser-crumb">
                <span>Course Access &amp; Enrollment</span>
              </span>
            </p>
          ) : (
            <a className="sign-in-page-back-link" href={homepageHref()}>
              <BackArrowIcon />
              <span>Back to Help Home</span>
            </a>
          )}
        </ContentContainer>
      </div>

      <PageHeroBand
        bandClassName="sign-in-page-hero-band"
        containerClassName="sign-in-page-hero-shell"
        copyClassName="sign-in-page-hero-copy"
        description={heroDescription}
        descriptionClassName="sign-in-page-intro"
        heroClassName="sign-in-page-hero"
        icon={<CourseAccessIcon />}
        iconClassName="sign-in-page-hero-icon course-access-page-hero-icon"
        title={pageTitle}
      />

      <ContentContainer
        as="section"
        className="sign-in-page-section sign-in-page-content"
        size="medium"
      >
        <SectionHeader
          className="sign-in-page-section-heading"
          copyClassName="sign-in-page-section-copy"
          description={primarySectionDescription}
          title={primarySectionTitle}
        />

        <div className="sign-in-topic-grid course-access-topic-grid">
          {primaryTopics.map((topic) => (
            <CourseAccessCard key={topic.title} {...topic} />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer
        as="section"
        className="sign-in-page-section sign-in-page-section--secondary sign-in-page-content"
        size="medium"
      >
        <SectionHeader
          className="sign-in-page-section-heading"
          copyClassName="sign-in-page-section-copy"
          description={secondarySectionDescription}
          title={secondarySectionTitle}
        />

        <div className="sign-in-topic-grid course-access-topic-grid course-access-topic-grid--secondary">
          {secondaryTopics.map((topic) => (
            <CourseAccessCard key={topic.title} {...topic} />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="sign-in-page-content" size="medium">
        <SupportFallbackBlock
          className="sign-in-support-callout"
          links={[{ href: contactSupportHref(), label: "Contact support" }]}
        />
      </ContentContainer>
    </div>
  );
}
