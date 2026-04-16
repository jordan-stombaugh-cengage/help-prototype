import {
  browseByProductHref,
  contactSupportHref,
  helpArticleHref,
  homepageHref,
  lmsLinkChooserHref,
  missingContentChooserHref,
  missingActivitiesChooserHref,
} from "../../app/routes";
import {
  ContentContainer,
  OptionalLink,
  PageHeroBand,
  SectionHeader,
  SupportFallbackBlock,
} from "../../components/prototype/Primitives";

type TroubleshootingTopicCardData = {
  description: string;
  href?: string;
  title: string;
  variant?: "primary" | "product";
};

const commonTroubleshootingIssues: TroubleshootingTopicCardData[] = [
  {
    title: "Missing activities or assignments",
    description: "Get help when work, activities, or assignments are not showing up where you expect.",
    href: missingActivitiesChooserHref(),
  },
  {
    title: "Browser or device issues",
    description: "Resolve compatibility, loading, or playback problems tied to your browser or device.",
    href: helpArticleHref("browser-requirements"),
  },
  {
    title: "LMS link not working",
    description: "Troubleshoot broken launch links, missing deep links, or course links that do not open.",
    href: lmsLinkChooserHref(),
  },
  {
    title: "Missing content or course materials",
    description: "Get help when readings, resources, or course materials are missing after you sign in.",
    href: missingContentChooserHref(),
  },
  {
    title: "Error messages, sync, or integration issues",
    description: "Find the next step when you see errors, sync failures, or connection problems.",
  },
] as const;

const productTroubleshootingHelp: TroubleshootingTopicCardData[] = [
  {
    title: "MindTap",
    description: "Use product-specific troubleshooting help when the issue depends on the MindTap experience.",
    href: browseByProductHref("mindtap"),
    variant: "product",
  },
  {
    title: "WebAssign",
    description: "Use WebAssign troubleshooting when browser, content, or login issues depend on WebAssign.",
    href: browseByProductHref("webassign"),
    variant: "product",
  },
  {
    title: "SAM",
    description: "Use SAM troubleshooting when the issue depends on SAM-specific setup, content, or errors.",
    href: browseByProductHref("sam"),
    variant: "product",
  },
  {
    title: "Spark",
    description: "Use Spark troubleshooting when the problem depends on the Spark product experience.",
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

function TroubleshootingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m12 4.25 8 14H4l8-14Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 9.5v4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

function TroubleshootingTopicCard({
  description,
  href,
  title,
  variant = "primary",
}: TroubleshootingTopicCardData) {
  return (
    <OptionalLink
      className={joinClassNames(
        "sign-in-topic-card",
        "troubleshooting-topic-card",
        variant === "primary" ? "troubleshooting-topic-card--primary" : undefined,
        variant === "product" ? "troubleshooting-topic-card--product" : undefined
      )}
      href={href}
      staticAs="div"
    >
      <div className="troubleshooting-topic-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </OptionalLink>
  );
}

export function TroubleshootingCommonProblemsPage() {
  return (
    <div className="sign-in-page troubleshooting-page">
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
        description="Resolve browser issues, broken LMS links, missing activities, and content problems across Cengage products."
        descriptionClassName="sign-in-page-intro"
        heroClassName="sign-in-page-hero"
        icon={<TroubleshootingIcon />}
        iconClassName="sign-in-page-hero-icon troubleshooting-page-hero-icon"
        title="Troubleshooting & Common Problems"
      />

      <ContentContainer
        as="section"
        className="sign-in-page-section sign-in-page-content"
        size="medium"
      >
        <SectionHeader
          className="sign-in-page-section-heading"
          copyClassName="sign-in-page-section-copy"
          description="Start here for the most common troubleshooting issues across products and course-access contexts."
          title="Common troubleshooting issues"
        />

        <div className="sign-in-topic-grid troubleshooting-topic-grid">
          {commonTroubleshootingIssues.map((topic) => (
            <TroubleshootingTopicCard key={topic.title} {...topic} />
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
          description="Use these only when the next troubleshooting step depends on the product you are using."
          title="Product-specific troubleshooting help"
        />

        <div className="sign-in-topic-grid troubleshooting-topic-grid troubleshooting-topic-grid--secondary">
          {productTroubleshootingHelp.map((topic) => (
            <TroubleshootingTopicCard key={topic.title} {...topic} />
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
