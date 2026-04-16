import {
  contactSupportHref,
  homepageHref,
  resetPasswordHref,
  signInAccountHref,
} from "../../app/routes";
import {
  ContentContainer,
  PageHeroBand,
  SupportFallbackBlock,
} from "../../components/prototype/Primitives";

const resetLmsSteps = [
  "Go to your school or LMS login page",
  'Look for a "Forgot password" or password reset option',
  "Follow your school's password reset process",
  "Once signed in to your LMS, access Cengage through your course",
] as const;

const commonLmsIssues = [
  {
    label: "My LMS link isn't working",
  },
  {
    label: "I don't know my LMS login",
  },
  {
    label: "Course not showing up in LMS",
  },
  {
    label: "LMS integration troubleshooting",
  },
] as const;

function ResetPasswordLmsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m4.5 8 7.5-3.5L19.5 8 12 11.5 4.5 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M7 10.25v4.4L12 17l5-2.35v-4.4"
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

export function ResetPasswordLmsPage() {
  return (
    <div className="reset-lms-page">
      <div className="reset-lms-breadcrumbs">
        <ContentContainer className="reset-lms-shell" size="medium">
          <p>
            <a href={homepageHref()}>Help Home</a>
            <span>/</span>
            <a href={signInAccountHref()}>Sign In &amp; Account</a>
            <span>/</span>
            <a href={resetPasswordHref()}>Reset password</a>
            <span>/</span>
            <span>LMS sign-in</span>
          </p>
        </ContentContainer>
      </div>

      <PageHeroBand
        bandClassName="reset-lms-hero-band"
        containerClassName="reset-lms-shell"
        containerSize="medium"
        copyClassName="reset-lms-hero-copy"
        description="If you access Cengage through your school's learning management system, your password is managed by your school, not Cengage."
        heroClassName="reset-lms-hero"
        icon={<ResetPasswordLmsIcon />}
        iconClassName="reset-lms-hero-icon"
        title="Reset password: LMS sign-in"
      />

      <ContentContainer
        as="section"
        className="reset-lms-content reset-lms-utility"
        size="narrow"
      >
        <a className="reset-lms-change-link" href={resetPasswordHref()}>
          <BackArrowIcon />
          <span>Change sign-in method</span>
        </a>
      </ContentContainer>

      <ContentContainer
        as="section"
        className="reset-lms-content reset-lms-card reset-lms-card--primary"
        size="narrow"
      >
        <h2>How to reset your password</h2>

        <ol className="reset-lms-steps">
          {resetLmsSteps.map((step, index) => (
            <li key={step} className="reset-lms-step">
              <span className="reset-lms-step-number" aria-hidden="true">
                {index + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </ContentContainer>

      <ContentContainer
        as="section"
        className="reset-lms-content reset-lms-card reset-lms-card--secondary"
        size="narrow"
      >
        <h2>Common LMS sign-in issues</h2>

        <div className="reset-lms-issues">
          {commonLmsIssues.map((issue) => (
            <span key={issue.label} className="is-static">
              {issue.label}
            </span>
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="reset-lms-content" size="narrow">
        <SupportFallbackBlock
          className="reset-lms-support"
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
