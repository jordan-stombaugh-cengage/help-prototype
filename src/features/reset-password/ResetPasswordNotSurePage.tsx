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

const identificationRows = [
  {
    title: "Cengage account sign-in",
    description:
      "If you go directly to cengage.com or your product website and enter your email and password, you're using a Cengage account.",
    iconKind: "account",
  },
  {
    title: "LMS sign-in",
    description:
      "If you sign in to Canvas, Blackboard, Moodle, or another course system first, then access Cengage from within your course, you're using LMS sign-in.",
    iconKind: "lms",
  },
  {
    title: "School or NGLSync portal",
    description:
      "If you sign in through your school's website or student portal (not an LMS), you're using school portal sign-in.",
    iconKind: "school",
  },
] as const;

const nextStepOptions = [
  {
    title: "Forgot password",
    description: "Browse all password reset help articles",
    href: resetPasswordHref(),
    iconKind: "account",
  },
  {
    title: "LMS / school sign-in help",
    description: "Get help signing in through your school",
    href: resetPasswordHref("school-nglsync"),
    iconKind: "lms",
  },
  {
    title: "I can't access my account",
    description: "Get help with account access problems",
    iconKind: "alert",
  },
  {
    title: "See support options",
    description: "Get help from our support team",
    href: contactSupportHref(),
    iconKind: "support",
  },
] as const;

function NotSureHeroIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16.25h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.75 9.5a2.25 2.25 0 1 1 3.95 1.46c-.55.59-1.2 1.1-1.7 1.58-.35.34-.55.78-.55 1.26v.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.5 19.5v-1.25a3.25 3.25 0 0 0-3.25-3.25h-2.5A3.25 3.25 0 0 0 7.5 18.25v1.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 11.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M18 8.25h2.5M19.25 7v2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LmsIcon() {
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

function SchoolPortalIcon() {
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

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 16.5h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 8.5v4.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20c4.42 0 8-3.13 8-7s-3.58-7-8-7-8 3.13-8 7c0 1.95.92 3.75 2.48 5.15L6 20l2.18-.75A9.15 9.15 0 0 0 12 20Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.25 12h.01M12 12h.01M14.75 12h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
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

function NotSureIconTile({ kind }: { kind: (typeof identificationRows)[number]["iconKind"] | (typeof nextStepOptions)[number]["iconKind"] }) {
  const iconMap = {
    account: <AccountIcon />,
    lms: <LmsIcon />,
    school: <SchoolPortalIcon />,
    alert: <AlertIcon />,
    support: <SupportIcon />,
  } as const;

  return <div className={`reset-not-sure-icon-tile reset-not-sure-icon-tile--${kind}`}>{iconMap[kind]}</div>;
}

function ResetNotSureOptionCard({
  description,
  href,
  iconKind,
  title,
}: {
  description: string;
  href?: string;
  iconKind: (typeof nextStepOptions)[number]["iconKind"];
  title: string;
}) {
  return (
    <OptionalLink className="reset-not-sure-option-card" href={href} staticAs="div">
      <NotSureIconTile kind={iconKind} />

      <div className="reset-not-sure-option-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <span className="reset-not-sure-option-arrow" aria-hidden="true">
        <ForwardArrowIcon />
      </span>
    </OptionalLink>
  );
}

export function ResetPasswordNotSurePage() {
  return (
    <div className="reset-not-sure-page">
      <div className="reset-not-sure-breadcrumbs">
        <ContentContainer className="reset-not-sure-shell" size="medium">
          <p>
            <a href={homepageHref()}>Help Home</a>
            <span>/</span>
            <a href={signInAccountHref()}>Sign In &amp; Account</a>
            <span>/</span>
            <a href={resetPasswordHref()}>Reset password</a>
            <span>/</span>
            <span>Not sure</span>
          </p>
        </ContentContainer>
      </div>

      <PageHeroBand
        bandClassName="reset-not-sure-hero-band"
        containerClassName="reset-not-sure-shell"
        containerSize="medium"
        copyClassName="reset-not-sure-hero-copy"
        description="Here are some common ways to identify your sign-in method and get help."
        heroClassName="reset-not-sure-hero"
        icon={<NotSureHeroIcon />}
        iconClassName="reset-not-sure-hero-icon"
        title="Not sure how you sign in?"
      />

      <ContentContainer
        as="section"
        className="reset-not-sure-content reset-not-sure-utility"
        size="narrow"
      >
        <a className="reset-not-sure-back-link" href={resetPasswordHref()}>
          <BackArrowIcon />
          <span>Back to sign-in options</span>
        </a>
      </ContentContainer>

      <ContentContainer
        as="section"
        className="reset-not-sure-content reset-not-sure-card reset-not-sure-card--primary"
        size="narrow"
      >
        <h2>How to identify your sign-in method</h2>

        <div className="reset-not-sure-identification-list">
          {identificationRows.map((row) => (
            <div key={row.title} className="reset-not-sure-identification-row">
              <NotSureIconTile kind={row.iconKind} />

              <div className="reset-not-sure-identification-copy">
                <h3>{row.title}</h3>
                <p>{row.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentContainer>

      <ContentContainer
        as="section"
        className="reset-not-sure-content reset-not-sure-options"
        size="narrow"
      >
        <h2>Try these options</h2>

        <div className="reset-not-sure-option-list">
          {nextStepOptions.map((option) => (
            <ResetNotSureOptionCard key={option.title} {...option} />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="reset-not-sure-content" size="narrow">
        <SupportFallbackBlock
          className="reset-not-sure-support"
          links={[
            { href: resetPasswordHref(), label: "Start over: How do you usually sign in?" },
            { href: signInAccountHref(), label: "Back to Sign In & Account Help" },
          ]}
        />
      </ContentContainer>
    </div>
  );
}
