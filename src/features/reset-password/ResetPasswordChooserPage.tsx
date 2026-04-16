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

type ResetChooserOption = {
  description: string;
  href: string;
  iconKind: "account" | "lms" | "school" | "unsure";
  title: string;
};

const resetChooserOptions: ResetChooserOption[] = [
  {
    title: "With a Cengage account",
    description: "I sign in directly to Cengage with my email and password",
    href: resetPasswordHref("cengage-account"),
    iconKind: "account",
  },
  {
    title: "Through my LMS",
    description:
      "I access Cengage through Canvas, Blackboard, Moodle, or another learning management system",
    href: resetPasswordHref("lms"),
    iconKind: "lms",
  },
  {
    title: "Through my school or NGLSync portal",
    description: "I sign in through my school's portal or NGLSync system",
    href: resetPasswordHref("school-nglsync"),
    iconKind: "school",
  },
  {
    title: "I'm not sure",
    description: "I don't know which sign-in method I use",
    href: resetPasswordHref("not-sure"),
    iconKind: "unsure",
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

function ResetPasswordOptionIcon({
  kind,
}: {
  kind: ResetChooserOption["iconKind"];
}) {
  if (kind === "account") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M6.8 18c0-2.8 2.4-5 5.2-5s5.2 2.2 5.2 5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (kind === "lms") {
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

  if (kind === "school") {
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

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9.75 9.45a2.28 2.28 0 0 1 4.5.35c0 1.45-1.48 2.03-2.22 2.65-.48.4-.78.82-.78 1.55"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="17.2" r="1" fill="currentColor" />
    </svg>
  );
}

function ResetChooserOptionCard({ description, href, iconKind, title }: ResetChooserOption) {
  const isExternal = href.startsWith("http");

  return (
    <a
      className="reset-chooser-card"
      href={href}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
    >
      <div className={`reset-chooser-card-icon reset-chooser-card-icon--${iconKind}`}>
        <ResetPasswordOptionIcon kind={iconKind} />
      </div>

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
