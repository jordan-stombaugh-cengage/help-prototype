import {
  browseByProductHref,
  contactSupportHref,
  getProductContextFromHash,
  helpArticleHref,
  manageAccountChooserHref,
  homepageHref,
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

type SignInTopicCardData = {
  description: string;
  href?: string;
  title: string;
};

const commonAccountTopics: SignInTopicCardData[] = [
  {
    title: "Reset password",
    description: "Send a password reset link to your email.",
    href: resetPasswordHref(),
  },
  {
    title: "Wrong account",
    description: "Signed in to the wrong Cengage account.",
    href: wrongAccountChooserHref(),
  },
  {
    title: "Forgot username",
    description: "Recover your Cengage username or email.",
    href: helpArticleHref("forgot-username"),
  },
  {
    title: "Manage account",
    description: "Update profile, email, or account settings.",
    href: manageAccountChooserHref(),
  },
];

const otherSignInMethods: SignInTopicCardData[] = [
  {
    title: "Sign in through LMS",
    description: "Access Cengage through Canvas, Blackboard, Moodle, or another LMS.",
    href: resetPasswordHref("lms"),
  },
  {
    title: "Sign in through school or NGLSync",
    description: "Access Cengage through your school portal or NGLSync.",
    href: resetPasswordHref("school-nglsync"),
  },
];

const mindTapAccountTopics: SignInTopicCardData[] = [
  {
    title: "Reset password",
    description: "Reset the Cengage password you use to open MindTap.",
    href: resetPasswordHref(),
  },
  {
    title: "Wrong account",
    description: "Get the right next step when MindTap is attached to a different Cengage account.",
    href: wrongAccountChooserHref("mindtap"),
  },
  {
    title: "Forgot username",
    description: "Recover the username or email address for the Cengage account you use with MindTap.",
    href: helpArticleHref("forgot-username"),
  },
  {
    title: "Manage account",
    description: "Update the profile, email, or account settings tied to your MindTap access.",
    href: manageAccountChooserHref("mindtap"),
  },
] as const;

const mindTapSignInMethods: SignInTopicCardData[] = [
  {
    title: "Sign in to MindTap",
    description: "Use the direct MindTap sign-in steps when your instructor sends you to Cengage or login.cengage.com.",
    href: helpArticleHref("sign-in"),
  },
  {
    title: "Sign in through LMS",
    description: "Open MindTap through Canvas, Blackboard, Moodle, or another LMS when your course uses one.",
    href: resetPasswordHref("lms"),
  },
] as const;

const webAssignAccountTopics: SignInTopicCardData[] = [
  {
    title: "Reset password",
    description: "Reset the Cengage password you use to open WebAssign.",
    href: resetPasswordHref(),
  },
  {
    title: "Wrong account",
    description: "Get the right next step when WebAssign opens under the wrong Cengage account.",
    href: wrongAccountChooserHref("webassign"),
  },
  {
    title: "Forgot username",
    description: "Recover the username or email address for the Cengage account you use with WebAssign.",
    href: helpArticleHref("forgot-username"),
  },
  {
    title: "Manage account",
    description: "Update the profile, email, or account settings tied to your WebAssign access.",
    href: manageAccountChooserHref("webassign"),
  },
] as const;

const webAssignSignInMethods: SignInTopicCardData[] = [
  {
    title: "Sign in through LMS",
    description: "Open WebAssign through Canvas, Blackboard, Moodle, or another LMS when your class uses one.",
    href: resetPasswordHref("lms"),
  },
] as const;

const samAccountTopics: SignInTopicCardData[] = [
  {
    title: "Reset password",
    description: "Reset the Cengage password you use to open SAM.",
    href: resetPasswordHref(),
  },
  {
    title: "Wrong account",
    description: "Get the right next step when SAM opens under the wrong Cengage account.",
    href: wrongAccountChooserHref("sam"),
  },
  {
    title: "Forgot username",
    description: "Recover the username or email address for the Cengage account you use with SAM.",
    href: helpArticleHref("forgot-username"),
  },
  {
    title: "Manage account",
    description: "Update the profile, email, or account settings tied to your SAM access.",
    href: manageAccountChooserHref("sam"),
  },
] as const;

const samSignInMethods: SignInTopicCardData[] = [
  {
    title: "Sign in through LMS",
    description: "Open SAM through Canvas, Blackboard, Moodle, or another LMS when your course uses one.",
    href: resetPasswordHref("lms"),
  },
] as const;

const sparkAccountTopics: SignInTopicCardData[] = [
  {
    title: "Sign in to Spark",
    description: "Use the Spark sign-in article when you need to open learn.eltngl.com or finish first-time account setup.",
    href: helpArticleHref("spark-sign-in"),
  },
  {
    title: "Wrong account",
    description: "Use Spark account routing when you need the correct Spark account or school-managed sign-in path.",
    href: wrongAccountChooserHref("spark"),
  },
  {
    title: "Forgot username",
    description: "Recover the username or email address tied to the Spark account you should be using.",
    href: helpArticleHref("spark-forgot-username"),
  },
  {
    title: "Manage account",
    description: "Update your Spark profile or choose the school-managed Spark account path.",
    href: manageAccountChooserHref("spark"),
  },
] as const;

const sparkSignInMethods: SignInTopicCardData[] = [
  {
    title: "Access Spark through LMS or school platform",
    description: "Use Spark LMS access help when your course opens from Canvas, Blackboard, Moodle, a school link, or a self-registration guide.",
    href: helpArticleHref("spark-lms-access"),
  },
  {
    title: "Manage a school-managed Spark account",
    description: "Use the school-managed Spark account article when your teacher or school controls part of your profile or password-reset flow.",
    href: helpArticleHref("spark-school-managed-account"),
  },
] as const;

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

function SignInAccountIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="11.75" r="4" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="7.5" cy="11.75" r="1.2" fill="currentColor" />
      <path
        d="M11.5 11.75H20v2.3h-2.25v2.15H15.6V14.05h-4.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}

function SignInTopicCard({ description, href, title }: SignInTopicCardData) {
  return (
    <OptionalLink className="sign-in-topic-card" href={href} staticAs="div">
      <h3>{title}</h3>
      <p>{description}</p>
    </OptionalLink>
  );
}

export function SignInAccountPage() {
  const productContext = getProductContextFromHash();
  const scopedConfig =
    productContext === "mindtap"
      ? {
          hubHref: browseByProductHref("mindtap"),
          productLabel: "MindTap",
          pageTitle: "MindTap Sign In & Account Help",
          heroDescription:
            "Find help with signing in to MindTap, resetting your password, recovering the right account, and using LMS sign-in when your course depends on it.",
          primarySectionTitle: "MindTap account help topics",
          primarySectionDescription:
            "Start here for the most common sign-in and account issues in MindTap.",
          secondarySectionTitle: "Other MindTap sign-in paths",
          secondarySectionDescription:
            "Use these when your MindTap course launches directly from Cengage or through your LMS.",
          primaryTopics: mindTapAccountTopics,
          secondaryTopics: mindTapSignInMethods,
        }
      : productContext === "webassign"
        ? {
            hubHref: browseByProductHref("webassign"),
            productLabel: "WebAssign",
            pageTitle: "WebAssign Sign In & Account Help",
            heroDescription:
              "Find help with WebAssign sign-in, password resets, account recovery, and LMS sign-in when your course opens from an LMS.",
            primarySectionTitle: "WebAssign account help topics",
            primarySectionDescription:
              "Start here for the most common sign-in and account issues in WebAssign.",
            secondarySectionTitle: "Other WebAssign sign-in paths",
            secondarySectionDescription:
              "Use this when your WebAssign course launches from Canvas, Blackboard, Moodle, or another LMS.",
            primaryTopics: webAssignAccountTopics,
            secondaryTopics: webAssignSignInMethods,
          }
        : productContext === "sam"
          ? {
              hubHref: browseByProductHref("sam"),
              productLabel: "SAM",
              pageTitle: "SAM Sign In & Account Help",
              heroDescription:
                "Find help with SAM sign-in, password resets, account recovery, and LMS sign-in when your course depends on an LMS launch.",
              primarySectionTitle: "SAM account help topics",
              primarySectionDescription:
                "Start here for the most common sign-in and account issues in SAM.",
              secondarySectionTitle: "Other SAM sign-in paths",
              secondarySectionDescription:
                "Use this when your SAM course launches from Canvas, Blackboard, Moodle, or another LMS.",
              primaryTopics: samAccountTopics,
              secondaryTopics: samSignInMethods,
            }
        : productContext === "spark"
          ? {
              hubHref: browseByProductHref("spark"),
              productLabel: "Spark",
              pageTitle: "Spark Sign In & Account Help",
              heroDescription:
                "Find help with Spark sign-in, account recovery, school-managed Spark accounts, and LMS or school-platform access without widening back into generic help.",
              primarySectionTitle: "Spark account help topics",
              primarySectionDescription:
                "Start here for the most common sign-in and account issues in Spark.",
              secondarySectionTitle: "Other Spark sign-in paths",
              secondarySectionDescription:
                "Use these when Spark access depends on your LMS, your school platform, or a school-managed Spark account.",
              primaryTopics: sparkAccountTopics,
              secondaryTopics: sparkSignInMethods,
            }
        : null;
  const isProductScoped = scopedConfig !== null;
  const pageTitle = scopedConfig?.pageTitle ?? "Sign In & Account Help";
  const heroDescription =
    scopedConfig?.heroDescription ??
    "Find help with password resets, account access, and sign-in issues. These resources work across all Cengage products and sign-in methods.";
  const primarySectionTitle =
    scopedConfig?.primarySectionTitle ?? "Common account help topics";
  const primarySectionDescription =
    scopedConfig?.primarySectionDescription ??
    "Start here for the most common account and sign-in issues.";
  const secondarySectionTitle =
    scopedConfig?.secondarySectionTitle ?? "Other sign-in methods";
  const secondarySectionDescription =
    scopedConfig?.secondarySectionDescription ??
    "If you sign in through your school or a learning management system, start here.";
  const primaryTopics = scopedConfig?.primaryTopics ?? commonAccountTopics;
  const secondaryTopics = scopedConfig?.secondaryTopics ?? otherSignInMethods;

  return (
    <div className="sign-in-page">
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
                <span>Sign In &amp; Account Help</span>
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
        icon={<SignInAccountIcon />}
        iconClassName="sign-in-page-hero-icon"
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

        <div className="sign-in-topic-grid">
          {primaryTopics.map((topic) => (
            <SignInTopicCard key={topic.title} {...topic} />
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

        <div className="sign-in-topic-grid sign-in-topic-grid--methods">
          {secondaryTopics.map((topic) => (
            <SignInTopicCard key={topic.title} {...topic} />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="sign-in-page-content" size="medium">
        <SupportFallbackBlock
          className="sign-in-support-callout"
          links={[{ href: contactSupportHref(), label: "Contact Support" }]}
        />
      </ContentContainer>
    </div>
  );
}
