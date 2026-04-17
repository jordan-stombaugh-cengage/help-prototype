import {
  contactSupportHref,
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
  return (
    <div className="sign-in-page">
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
        description="Find help with password resets, account access, and sign-in issues. These resources work across all Cengage products and sign-in methods."
        descriptionClassName="sign-in-page-intro"
        heroClassName="sign-in-page-hero"
        icon={<SignInAccountIcon />}
        iconClassName="sign-in-page-hero-icon"
        title="Sign In & Account Help"
      />

      <ContentContainer
        as="section"
        className="sign-in-page-section sign-in-page-content"
        size="medium"
      >
        <SectionHeader
          className="sign-in-page-section-heading"
          copyClassName="sign-in-page-section-copy"
          description="Start here for the most common account and sign-in issues."
          title="Common account help topics"
        />

        <div className="sign-in-topic-grid">
          {commonAccountTopics.map((topic) => (
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
          description="If you sign in through your school or a learning management system, start here."
          title="Other sign-in methods"
        />

        <div className="sign-in-topic-grid sign-in-topic-grid--methods">
          {otherSignInMethods.map((topic) => (
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
