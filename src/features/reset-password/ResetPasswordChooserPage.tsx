import {
  contactSupportHref,
  helpArticleHref,
  homepageHref,
  resetPasswordHref,
  signInAccountHref,
} from "../../app/routes";
import {
  ContentContainer,
  PageHeroBand,
  SupportFallbackBlock,
} from "../../components/prototype/Primitives";

type ResetChooserOption = {
  description: string;
  href: string;
  title: string;
};

const resetChooserOptions: ResetChooserOption[] = [
  {
    title: "With a Cengage account",
    description: "I sign in directly to Cengage with my email and password",
    href: helpArticleHref("reset-cengage-password"),
  },
  {
    title: "Through my LMS",
    description:
      "I access Cengage through Canvas, Blackboard, Moodle, or another learning management system",
    href: resetPasswordHref("lms"),
  },
  {
    title: "Through my school or NGLSync portal",
    description: "I sign in through my school's portal or NGLSync system",
    href: resetPasswordHref("school-nglsync"),
  },
  {
    title: "I'm not sure",
    description: "I don't know which sign-in method I use",
    href: resetPasswordHref("not-sure"),
  },
] as const;

function ResetPasswordDomainIcon() {
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

function ResetChooserOptionCard({ description, href, title }: ResetChooserOption) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="reset-chooser-card"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <div className="reset-chooser-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export function ResetPasswordChooserPage() {
  return (
    <div className="reset-chooser-page">
      <div className="reset-chooser-breadcrumbs">
        <ContentContainer className="reset-chooser-hero-shell" size="medium">
          <p>
            <a href={homepageHref()}>Help Home</a>
            <span>/</span>
            <a href={signInAccountHref()}>Sign In &amp; Account</a>
            <span>/</span>
            <span>Reset password</span>
          </p>
        </ContentContainer>
      </div>

      <PageHeroBand
        bandClassName="reset-chooser-hero-band"
        containerClassName="reset-chooser-hero-shell"
        containerSize="medium"
        copyClassName="reset-chooser-hero-copy"
        description="We'll ask a couple quick questions to send you to the right instructions."
        heroClassName="reset-chooser-hero"
        icon={<ResetPasswordDomainIcon />}
        iconClassName="reset-chooser-hero-icon"
        title="Reset your password"
      />

      <ContentContainer
        as="section"
        className="reset-chooser-section reset-chooser-content"
        size="narrow"
      >
        <h2>How do you usually sign in?</h2>

        <div className="reset-chooser-list">
          {resetChooserOptions.map((option) => (
            <ResetChooserOptionCard key={option.title} {...option} />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="reset-chooser-content" size="narrow">
        <SupportFallbackBlock
          className="reset-chooser-support"
          links={[
            { href: signInAccountHref(), label: "Back to Sign In & Account Help" },
            { href: contactSupportHref(), label: "Contact Support" },
          ]}
          title="Need something else?"
        />
      </ContentContainer>
    </div>
  );
}
