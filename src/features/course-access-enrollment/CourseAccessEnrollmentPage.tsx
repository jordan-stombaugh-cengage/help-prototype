import {
  browseByProductHref,
  contactSupportHref,
  homepageHref,
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
  },
  {
    title: "Redeem an access code",
    description: "Apply your access code and connect it to the correct course.",
  },
  {
    title: "Join or enroll in a course",
    description: "Get into your course when you have a class key, section link, or invite.",
  },
  {
    title: "Access your course through LMS",
    description: "Start from Canvas, Blackboard, Moodle, or another LMS when your class uses one.",
  },
  {
    title: "Purchased access but course is unavailable",
    description: "Resolve cases where you bought access but still cannot open the course.",
  },
  {
    title: "Wrong course or missing course",
    description: "Get help when the course list is empty, incorrect, or missing materials.",
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
  return (
    <div className="sign-in-page course-access-page">
      <div className="sign-in-page-utility">
        <ContentContainer className="sign-in-page-hero-shell">
          <a className="sign-in-page-back-link" href={homepageHref()}>
            <BackArrowIcon />
            <span>Back to Help Home</span>
          </a>
        </ContentContainer>
      </div>

      <PageHeroBand
        bandClassName="sign-in-page-hero-band"
        containerClassName="sign-in-page-hero-shell"
        copyClassName="sign-in-page-hero-copy"
        description="Find help with course keys, access codes, enrollment, purchase-access issues, and LMS course entry across Cengage products."
        descriptionClassName="sign-in-page-intro"
        heroClassName="sign-in-page-hero"
        icon={<CourseAccessIcon />}
        iconClassName="sign-in-page-hero-icon course-access-page-hero-icon"
        title="Course Access & Enrollment"
      />

      <ContentContainer
        as="section"
        className="sign-in-page-section sign-in-page-content"
        size="medium"
      >
        <SectionHeader
          className="sign-in-page-section-heading"
          copyClassName="sign-in-page-section-copy"
          description="Start here for the most common ways to enter a course, use a code, or resolve access problems."
          title="Common access and enrollment issues"
        />

        <div className="sign-in-topic-grid course-access-topic-grid">
          {commonAccessIssues.map((topic) => (
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
          description="Use these when your course-access steps depend on the product you are using."
          title="Product-specific access help"
        />

        <div className="sign-in-topic-grid course-access-topic-grid course-access-topic-grid--secondary">
          {productEntryPoints.map((topic) => (
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
