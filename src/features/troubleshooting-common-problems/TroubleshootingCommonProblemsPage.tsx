import {
  browseByProductHref,
  contactSupportHref,
  errorSyncChooserHref,
  getProductContextFromHash,
  helpArticleHref,
  homepageHref,
  lmsLinkChooserHref,
  missingContentChooserHref,
  missingActivitiesChooserHref,
  resetPasswordHref,
  wrongAccountChooserHref,
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
    href: errorSyncChooserHref(),
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

const mindTapTroubleshootingIssues: TroubleshootingTopicCardData[] = [
  {
    title: "Missing activities or assignments",
    description: "Use the MindTap troubleshooting article when activities are missing from the learning path or assignment list.",
    href: helpArticleHref("mindtap-missing-activities"),
  },
  {
    title: "Browser or device issues",
    description: "Resolve MindTap compatibility, loading, or playback problems tied to your browser or device.",
    href: helpArticleHref("browser-requirements"),
  },
  {
    title: "LMS link not working",
    description: "Use the shared LMS-link article when a course or activity link from your LMS is supposed to open MindTap.",
    href: helpArticleHref("lms-link-not-working"),
  },
  {
    title: "Missing content or course materials",
    description: "The prototype does not yet include a MindTap-scoped missing-content destination.",
  },
  {
    title: "Error messages, sync, or integration issues",
    description:
      "The prototype does not yet include a MindTap-scoped error or sync destination that stays inside MindTap context.",
  },
] as const;

const mindTapTroubleshootingHelp: TroubleshootingTopicCardData[] = [
  {
    title: "Sign in to MindTap",
    description: "Use the direct MindTap sign-in article when the problem starts before the course opens.",
    href: helpArticleHref("sign-in"),
    variant: "product",
  },
  {
    title: "Wrong account",
    description: "Use MindTap account routing when MindTap is attached to a different Cengage account.",
    href: wrongAccountChooserHref("mindtap"),
    variant: "product",
  },
  {
    title: "System requirements",
    description: "Check the supported environment for MindTap before troubleshooting browser or device problems further.",
    href: helpArticleHref("system-requirements"),
    variant: "product",
  },
] as const;

const webAssignTroubleshootingIssues: TroubleshootingTopicCardData[] = [
  {
    title: "Missing activities or assignments",
    description:
      "The prototype does not yet include a WebAssign-scoped missing-assignments destination.",
  },
  {
    title: "Browser or device issues",
    description: "Resolve WebAssign compatibility, loading, or playback problems tied to your browser or device.",
    href: helpArticleHref("browser-requirements"),
  },
  {
    title: "LMS link not working",
    description: "Use the shared LMS-link article when a course or assignment link from your LMS is supposed to open WebAssign.",
    href: helpArticleHref("lms-link-not-working"),
  },
  {
    title: "Missing content or course materials",
    description: "The prototype does not yet include a WebAssign-scoped missing-content destination.",
  },
  {
    title: "Error messages, sync, or integration issues",
    description:
      "The prototype does not yet include a WebAssign-scoped error or sync destination that stays inside WebAssign context.",
  },
] as const;

const webAssignTroubleshootingHelp: TroubleshootingTopicCardData[] = [
  {
    title: "Reset password",
    description: "Use the shared reset-password flow when the problem starts with the Cengage password you use for WebAssign.",
    href: resetPasswordHref(),
    variant: "product",
  },
  {
    title: "Wrong account",
    description: "Use WebAssign account routing when your class opens under the wrong Cengage account.",
    href: wrongAccountChooserHref("webassign"),
    variant: "product",
  },
  {
    title: "System requirements",
    description: "Check the supported environment for WebAssign before troubleshooting browser or device problems further.",
    href: helpArticleHref("system-requirements"),
    variant: "product",
  },
] as const;

const samTroubleshootingIssues: TroubleshootingTopicCardData[] = [
  {
    title: "Missing activities or assignments",
    description:
      "The prototype does not yet include a SAM-scoped missing-assignments destination.",
  },
  {
    title: "Browser or device issues",
    description: "Resolve SAM compatibility, loading, or playback problems tied to your browser or device.",
    href: helpArticleHref("browser-requirements"),
  },
  {
    title: "LMS link not working",
    description: "Use the shared LMS-link article when a course or assignment link from your LMS is supposed to open SAM.",
    href: helpArticleHref("lms-link-not-working"),
  },
  {
    title: "Missing content or course materials",
    description: "The prototype does not yet include a SAM-scoped missing-content destination.",
  },
  {
    title: "Error messages, sync, or integration issues",
    description:
      "The prototype does not yet include a SAM-scoped error or sync destination that stays inside SAM context.",
  },
] as const;

const samTroubleshootingHelp: TroubleshootingTopicCardData[] = [
  {
    title: "Reset password",
    description: "Use the shared reset-password flow when the problem starts with the Cengage password you use for SAM.",
    href: resetPasswordHref(),
    variant: "product",
  },
  {
    title: "Wrong account",
    description: "Use SAM account routing when assignments or access are attached to the wrong Cengage account.",
    href: wrongAccountChooserHref("sam"),
    variant: "product",
  },
  {
    title: "System requirements",
    description: "Check the supported environment for SAM before troubleshooting browser or device problems further.",
    href: helpArticleHref("system-requirements"),
    variant: "product",
  },
] as const;

const sparkTroubleshootingIssues: TroubleshootingTopicCardData[] = [
  {
    title: "Missing activities or assignments",
    description: "Use the Spark troubleshooting article when assignments or activities are missing from the course.",
    href: helpArticleHref("spark-missing-activities"),
  },
  {
    title: "Browser or device issues",
    description: "Use the Spark requirements article when browser compatibility or device support is affecting the platform.",
    href: helpArticleHref("spark-system-requirements"),
  },
  {
    title: "LMS link not working",
    description: "Use Spark LMS troubleshooting when a school-platform or LMS link is supposed to open Spark.",
    href: helpArticleHref("spark-lms-link-not-working"),
  },
  {
    title: "Missing content or course materials",
    description: "The prototype does not yet include a Spark-scoped missing-content destination.",
  },
  {
    title: "Error messages, sync, or integration issues",
    description:
      "The prototype does not yet include a single Spark-scoped error or sync destination that is specific enough to trust.",
  },
] as const;

const sparkTroubleshootingHelp: TroubleshootingTopicCardData[] = [
  {
    title: "Sign in to Spark",
    description: "Use the direct Spark sign-in article when the troubleshooting issue starts before the course opens.",
    href: helpArticleHref("spark-sign-in"),
    variant: "product",
  },
  {
    title: "Wrong account",
    description: "Use Spark account routing when you need the correct Spark account or school-managed sign-in path.",
    href: wrongAccountChooserHref("spark"),
    variant: "product",
  },
  {
    title: "System requirements",
    description: "Check Spark requirements before troubleshooting browser, device, or launch issues any further.",
    href: helpArticleHref("spark-system-requirements"),
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
  const productContext = getProductContextFromHash();
  const scopedConfig =
    productContext === "mindtap"
      ? {
          hubHref: browseByProductHref("mindtap"),
          productLabel: "MindTap",
          pageTitle: "MindTap Troubleshooting & Common Problems",
          heroDescription:
            "Resolve MindTap browser issues, broken LMS links, missing activities, and other common problems without widening back into generic help.",
          primarySectionTitle: "MindTap troubleshooting issues",
          primarySectionDescription:
            "Start here for the most common MindTap troubleshooting problems.",
          secondarySectionTitle: "Related MindTap troubleshooting help",
          secondarySectionDescription:
            "Use these when the next step is account recovery, sign-in, or environment checks rather than a troubleshooting topic card.",
          primaryTopics: mindTapTroubleshootingIssues,
          secondaryTopics: mindTapTroubleshootingHelp,
        }
      : productContext === "webassign"
        ? {
            hubHref: browseByProductHref("webassign"),
            productLabel: "WebAssign",
            pageTitle: "WebAssign Troubleshooting & Common Problems",
            heroDescription:
              "Resolve WebAssign browser issues, broken LMS links, missing assignments, and other common problems without widening back into generic help.",
            primarySectionTitle: "WebAssign troubleshooting issues",
            primarySectionDescription:
              "Start here for the most common WebAssign troubleshooting problems.",
            secondarySectionTitle: "Related WebAssign troubleshooting help",
            secondarySectionDescription:
              "Use these when the next step is password recovery, account routing, or environment checks rather than a troubleshooting topic card.",
            primaryTopics: webAssignTroubleshootingIssues,
            secondaryTopics: webAssignTroubleshootingHelp,
          }
        : productContext === "sam"
          ? {
              hubHref: browseByProductHref("sam"),
              productLabel: "SAM",
              pageTitle: "SAM Troubleshooting & Common Problems",
              heroDescription:
                "Resolve SAM browser issues, broken LMS links, missing assignments, and other common problems without widening back into generic help.",
              primarySectionTitle: "SAM troubleshooting issues",
              primarySectionDescription:
                "Start here for the most common troubleshooting problems in SAM.",
              secondarySectionTitle: "Related SAM troubleshooting help",
              secondarySectionDescription:
                "Use these when the next step is password recovery, account routing, or environment checks rather than a troubleshooting topic card.",
              primaryTopics: samTroubleshootingIssues,
              secondaryTopics: samTroubleshootingHelp,
            }
        : productContext === "spark"
          ? {
              hubHref: browseByProductHref("spark"),
              productLabel: "Spark",
              pageTitle: "Spark Troubleshooting & Common Problems",
              heroDescription:
                "Resolve Spark browser issues, broken LMS links, missing activities, and other common problems without widening back into generic help.",
              primarySectionTitle: "Spark troubleshooting issues",
              primarySectionDescription:
                "Start here for the most common troubleshooting problems in Spark.",
              secondarySectionTitle: "Related Spark troubleshooting help",
              secondarySectionDescription:
                "Use these when the next step is Spark sign-in, account routing, or requirements checking rather than a troubleshooting topic card.",
              primaryTopics: sparkTroubleshootingIssues,
              secondaryTopics: sparkTroubleshootingHelp,
            }
        : null;
  const isProductScoped = scopedConfig !== null;
  const pageTitle =
    scopedConfig?.pageTitle ?? "Troubleshooting & Common Problems";
  const heroDescription =
    scopedConfig?.heroDescription ??
    "Resolve browser issues, broken LMS links, missing activities, and content problems across Cengage products.";
  const primarySectionTitle =
    scopedConfig?.primarySectionTitle ?? "Common troubleshooting issues";
  const primarySectionDescription =
    scopedConfig?.primarySectionDescription ??
    "Start here for the most common troubleshooting issues across products and course-access contexts.";
  const secondarySectionTitle =
    scopedConfig?.secondarySectionTitle ?? "Product-specific troubleshooting help";
  const secondarySectionDescription =
    scopedConfig?.secondarySectionDescription ??
    "Use these only when the next troubleshooting step depends on the product you are using.";
  const primaryTopics =
    scopedConfig?.primaryTopics ?? commonTroubleshootingIssues;
  const secondaryTopics =
    scopedConfig?.secondaryTopics ?? productTroubleshootingHelp;

  return (
    <div className="sign-in-page troubleshooting-page">
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
                <span>Troubleshooting &amp; Common Problems</span>
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
        icon={<TroubleshootingIcon />}
        iconClassName="sign-in-page-hero-icon troubleshooting-page-hero-icon"
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

        <div className="sign-in-topic-grid troubleshooting-topic-grid">
          {primaryTopics.map((topic) => (
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
          description={secondarySectionDescription}
          title={secondarySectionTitle}
        />

        <div className="sign-in-topic-grid troubleshooting-topic-grid troubleshooting-topic-grid--secondary">
          {secondaryTopics.map((topic) => (
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
