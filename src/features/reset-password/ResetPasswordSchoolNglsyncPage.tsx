import {
  contactSupportHref,
  homepageHref,
  resetPasswordHref,
  signInAccountHref,
} from "../../app/routes";
import {
  ContentContainer,
  OptionalLink,
  PageHeroBand,
  SupportFallbackBlock,
} from "../../components/prototype/Primitives";

const schoolNglsyncOptions = [
  {
    title: "School portal sign-in",
    description: "I sign in through my school's student portal or website",
  },
  {
    title: "NGLSync sign-in",
    description: "I use NGLSync to access National Geographic Learning materials",
  },
  {
    title: "I'm not sure",
    description: "I don't know which system I use",
    href: resetPasswordHref("not-sure"),
  },
] as const;

function ResetPasswordSchoolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 19.5h12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8 19V8.75h8V19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M10.5 6h3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M5.5 19V11h2.5v8M16 19V5.5h2.5V19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BackArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8 5.5 3.5 10 8 14.5M4 10h12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ForwardArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="m8 5.5 4.5 4.5L8 14.5M4 10h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ResetSchoolOptionCard({
  description,
  href,
  title,
}: {
  description: string;
  href?: string;
  title: string;
}) {
  return (
    <OptionalLink className="reset-school-option-card" href={href} staticAs="div">
      <div className="reset-school-option-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <span className="reset-school-option-arrow" aria-hidden="true">
        <ForwardArrowIcon />
      </span>
    </OptionalLink>
  );
}

export function ResetPasswordSchoolNglsyncPage() {
  return (
    <div className="reset-school-page">
      <div className="reset-school-breadcrumbs">
        <ContentContainer className="reset-school-shell" size="medium">
          <p>
            <a href={homepageHref()}>Help Home</a>
            <span>/</span>
            <a href={signInAccountHref()}>Sign In &amp; Account</a>
            <span>/</span>
            <a href={resetPasswordHref()}>Reset password</a>
            <span>/</span>
            <span>School or NGLSync sign-in</span>
          </p>
        </ContentContainer>
      </div>

      <PageHeroBand
        bandClassName="reset-school-hero-band"
        containerClassName="reset-school-shell"
        containerSize="medium"
        copyClassName="reset-school-hero-copy"
        description="Your school or institution manages your password, not Cengage."
        heroClassName="reset-school-hero"
        icon={<ResetPasswordSchoolIcon />}
        iconClassName="reset-school-hero-icon"
        title="Reset password: School or NGLSync sign-in"
      />

      <ContentContainer
        as="section"
        className="reset-school-content reset-school-utility"
        size="narrow"
      >
        <a className="reset-school-change-link" href={resetPasswordHref()}>
          <BackArrowIcon />
          <span>Change sign-in method</span>
        </a>
      </ContentContainer>

      <ContentContainer
        as="section"
        className="reset-school-content reset-school-section"
        size="narrow"
      >
        <h2>Which best describes your situation?</h2>

        <div className="reset-school-option-list">
          {schoolNglsyncOptions.map((option) => (
            <ResetSchoolOptionCard key={option.title} {...option} />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="reset-school-content" size="narrow">
        <SupportFallbackBlock
          className="reset-school-support"
          links={[
            { href: resetPasswordHref(), label: "Start over: How do you usually sign in?" },
            { href: signInAccountHref(), label: "Back to Sign In & Account Help" },
            { href: contactSupportHref(), label: "Contact Support" },
          ]}
        />
      </ContentContainer>
    </div>
  );
}
