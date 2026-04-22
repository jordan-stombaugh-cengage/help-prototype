import { ButtonTextTransform } from "react-magma-dom";
import {
  externalRoutes,
  homepageHref,
  resetPasswordHref,
  signInAccountHref,
} from "../../app/routes";
import { Button } from "../../components/Button";
import {
  ContentContainer,
  PageHeroBand,
  SectionHeader,
} from "../../components/prototype/Primitives";

const selfServiceCards = [
  {
    title: "Sign In & Account Help",
    description: "Password resets, account access, and profile management",
    href: signInAccountHref(),
  },
  {
    title: "Reset password",
    description: "Get help resetting your password based on how you sign in",
    href: resetPasswordHref(),
  },
  {
    title: "LMS and school sign-in help",
    description: "Help accessing Cengage through your school or learning system",
    href: resetPasswordHref("not-sure"),
  },
] as const;

const prepItems = [
  "Your email address or username",
  "The Cengage product you're trying to access",
  "Error messages or screenshots (if applicable)",
  "How you sign in (Cengage account, LMS, or school portal)",
] as const;

function SupportHeroIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.25a7.75 7.75 0 1 0 0 15.5a7.75 7.75 0 0 0 0-15.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 15.2v.05"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.9 9.7a2.45 2.45 0 1 1 4.17 1.75c-.78.76-1.32 1.23-1.32 2.2"
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

export function SupportPage() {
  function handleSupportServicesClick() {
    window.open(externalRoutes.supportPortal, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="support-page">
      <div className="support-page-breadcrumbs">
        <ContentContainer className="support-page-shell">
          <p>
            <a href={homepageHref()}>Help Home</a>
            <span>/</span>
            <span>Contact support</span>
          </p>
        </ContentContainer>
      </div>

      <PageHeroBand
        bandClassName="support-page-hero-band"
        containerClassName="support-page-shell"
        copyClassName="support-page-hero-copy"
        description="If you're not able to find the help you need, contact support with additional questions."
        heroClassName="support-page-hero"
        icon={<SupportHeroIcon />}
        iconClassName="support-page-hero-icon"
        title="Contact support"
      />

      <ContentContainer as="section" className="support-page-content" size="support">
        <SectionHeader
          className="support-page-section-heading"
          description="Most issues can be resolved quickly using our self-service help resources."
          title="Try these first"
        />

        <div className="support-page-card-list">
          {selfServiceCards.map((card) => (
            <a key={card.title} className="support-page-self-service-card" href={card.href}>
              <div className="support-page-self-service-copy">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>

              <span className="support-page-self-service-arrow" aria-hidden="true">
                <ForwardArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </ContentContainer>

      <ContentContainer
        as="section"
        className="support-page-content support-page-support-section"
        size="support"
      >
        <SectionHeader
          className="support-page-section-heading"
          description="If you're not able to find the help you need, contact support with additional questions."
          title="Contact support"
        />

        <Button
          className="support-page-support-button"
          onClick={handleSupportServicesClick}
          textTransform={ButtonTextTransform.none}
        >
          Go to support services
        </Button>
      </ContentContainer>

      <ContentContainer
        as="section"
        className="support-page-content support-page-prep-card"
        size="support"
      >
        <h2>Before you contact support</h2>
        <p>
          Have this information ready to help us resolve your issue faster:
        </p>

        <ul>
          {prepItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ContentContainer>
    </div>
  );
}
