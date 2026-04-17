import {
  accessCodeChooserHref,
  browseByProductHref,
  browseByRoleHref,
  courseKeyChooserHref,
  helpArticleHref,
  helpDomainHref,
  lmsLinkChooserHref,
  lmsAccessChooserHref,
  signInAccountHref,
  wrongAccountChooserHref,
  missingActivitiesChooserHref,
  resetPasswordHref,
  searchResultsHref,
} from "../../app/routes";
import {
  ContentContainer,
  OptionalLink,
  SectionHeader,
} from "../../components/prototype/Primitives";

type HelpDomainIconKind = "account" | "access" | "troubleshooting";

type LinkItem = {
  href?: string;
  label: string;
};

type HelpDomain = {
  action: string;
  actionHref?: string;
  description: string;
  iconKind: HelpDomainIconKind;
  links: LinkItem[];
  title: string;
};

const helpDomains: HelpDomain[] = [
  {
    iconKind: "account",
    title: "Sign In & Account Help",
    description:
      "Reset your password, manage your account, or get help signing in with Cengage, your LMS, or your school.",
    links: [
      { label: "Reset password", href: resetPasswordHref() },
      { label: "Wrong account", href: wrongAccountChooserHref() },
      { label: "LMS or school sign-in", href: helpDomainHref("sign-in-account") },
    ],
    action: "Get account help",
    actionHref: helpDomainHref("sign-in-account"),
  },
  {
    iconKind: "access",
    title: "Course Access & Enrollment",
    description:
      "Get help entering course keys, redeeming access codes, and accessing your course through Cengage or your LMS.",
    links: [
      { label: "Enter course key", href: courseKeyChooserHref() },
      { label: "Redeem access code", href: accessCodeChooserHref() },
      { label: "LMS access help", href: lmsAccessChooserHref() },
    ],
    action: "Resolve access issues",
    actionHref: helpDomainHref("course-access-enrollment"),
  },
  {
    iconKind: "troubleshooting",
    title: "Troubleshooting & Common Problems",
    description:
      "Fix common problems like missing activities, browser issues, or broken LMS links.",
    links: [
      { label: "Missing activities", href: missingActivitiesChooserHref() },
      {
        label: "Browser or device issues",
        href: helpArticleHref("browser-requirements"),
      },
      {
        label: "LMS link not working",
        href: lmsLinkChooserHref(),
      },
    ],
    action: "View troubleshooting help",
    actionHref: helpDomainHref("troubleshooting-common-problems"),
  },
];

const commonProblemGroups = [
  {
    title: "Common problems for instructors",
    links: [
      { label: "Can't access course management", href: searchResultsHref({ role: "higher-ed-instructor", query: "course management" }) },
      { label: "Students can't see assignments", href: searchResultsHref({ role: "higher-ed-instructor", query: "assignments" }) },
      { label: "LMS integration issues", href: searchResultsHref({ role: "higher-ed-instructor", query: "LMS integration" }) },
      { label: "Grading not syncing", href: searchResultsHref({ role: "higher-ed-instructor", query: "grade sync" }) },
      { label: "Custom content not saving", href: searchResultsHref({ role: "higher-ed-instructor", query: "custom content" }) },
      { label: "Student roster issues", href: searchResultsHref({ role: "higher-ed-instructor", query: "roster" }) },
    ],
  },
  {
    title: "Common problems for students",
    links: [
      { label: "Can't sign in", href: signInAccountHref() },
      { label: "Missing activities or assignments", href: missingActivitiesChooserHref() },
      { label: "LMS link not working", href: lmsLinkChooserHref() },
      { label: "Signed in with wrong account", href: wrongAccountChooserHref() },
      {
        label: "Browser or device compatibility issue",
        href: helpDomainHref("troubleshooting-common-problems"),
      },
      { label: "Can't access eBook" },
    ],
  },
];

const roleFacets = [
  { label: "Higher Ed Student", href: browseByRoleHref("higher-ed-student") },
  { label: "Higher Ed Instructor", href: browseByRoleHref("higher-ed-instructor") },
  { label: "K–12 Student", href: browseByRoleHref("k-12-student") },
  { label: "K–12 Teacher", href: browseByRoleHref("k-12-teacher") },
  { label: "Primary Student", href: browseByRoleHref("primary-student") },
  { label: "Secondary Student", href: browseByRoleHref("secondary-student") },
  { label: "LMS Administrator", href: browseByRoleHref("lms-administrator") },
  {
    label: "Institutional Administrator",
    href: browseByRoleHref("institutional-administrator"),
  },
] as const;

const products = [
  {
    name: "MindTap",
    description: "Sign-in, assignments, and troubleshooting help.",
    href: browseByProductHref("mindtap"),
  },
  {
    name: "WebAssign",
    description: "Course access, homework, and LMS help.",
    href: browseByProductHref("webassign"),
  },
  {
    name: "SAM",
    description: "Setup, grading, and support resources.",
    href: browseByProductHref("sam"),
  },
  {
    name: "Spark",
    description: "ELT help, access support, and common tasks.",
    href: browseByProductHref("spark"),
  },
] as const;

function HelpDomainIcon({ kind }: { kind: HelpDomainIconKind }) {
  if (kind === "account") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="7.5" cy="11.75" r="4" stroke="currentColor" strokeWidth="1.85" />
        <circle cx="7.5" cy="11.75" r="1.2" fill="currentColor" />
        <path
          d="M11.5 11.75H20v2.3h-2.25v2.15H15.6V14.05h-4.1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.85"
        />
      </svg>
    );
  }

  if (kind === "access") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3.75 18.25 6v5.2c0 4.2-2.69 7.2-6.25 9.05-3.56-1.85-6.25-4.85-6.25-9.05V6L12 3.75Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m12 4.25 8 14H4l8-14Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 9.5v4.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

function HomepageProductCard({
  description,
  href,
  name,
}: {
  description: string;
  href?: string;
  name: string;
}) {
  const content = (
    <>
      <span className="homepage-product-name">{name}</span>
      <span className="homepage-product-copy">{description}</span>
    </>
  );

  return (
    <OptionalLink className="homepage-product-card" href={href} staticAs="div">
      {content}
    </OptionalLink>
  );
}

export function Homepage() {
  return (
    <div className="homepage">
      <section className="homepage-hero-band">
        <ContentContainer className="homepage-shell">
          <div className="homepage-hero">
            <h1>How can we help you?</h1>
            <p className="homepage-intro">
              Search for answers first, then browse by help domain, role, or
              product when you need a more guided path.
            </p>

            <div className="homepage-search">
              <input
                type="text"
                placeholder="Search help articles, known issues, FAQs..."
                aria-label="Search help"
              />
              <a className="homepage-search-button" href={searchResultsHref()}>
                Search
              </a>
            </div>

            <p className="homepage-popular">
              <span className="homepage-popular-label">Popular:</span>
              <a href={resetPasswordHref()}>Reset password</a>
              <span>&bull;</span>
              <a href={searchResultsHref({ helpDomain: "course-access-enrollment" })}>Access code</a>
              <span>&bull;</span>
              <a href={searchResultsHref({ query: "LMS integration" })}>LMS integration</a>
              <span>&bull;</span>
              <a href={helpArticleHref("browser-requirements")}>Browser requirements</a>
            </p>
          </div>
        </ContentContainer>
      </section>

      <section className="homepage-section homepage-section--domains">
        <ContentContainer className="homepage-shell">
          <div className="homepage-grid">
            {helpDomains.map((domain) => (
              <article className="homepage-card" key={domain.title}>
                <div className="homepage-card-header">
                  <div
                    className={`homepage-card-icon homepage-card-icon--${domain.iconKind}`}
                  >
                    <HelpDomainIcon kind={domain.iconKind} />
                  </div>
                  <h3>{domain.title}</h3>
                </div>

                <p>{domain.description}</p>

                <ul className="homepage-link-list">
                  {domain.links.map((link) => (
                    <li key={link.label}>
                      <OptionalLink href={link.href}>{link.label}</OptionalLink>
                    </li>
                  ))}
                </ul>

                <OptionalLink className="homepage-card-cta" href={domain.actionHref}>
                  {domain.action}
                  <span aria-hidden="true">&nbsp;&gt;</span>
                </OptionalLink>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="homepage-section homepage-section--problems">
        <ContentContainer className="homepage-shell">
          <div className="homepage-problem-grid">
            {commonProblemGroups.map((group) => (
              <article className="homepage-problem-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="homepage-problem-panel">
                  <ul className="homepage-plain-link-list">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className="homepage-section homepage-section--discovery">
        <ContentContainer className="homepage-shell homepage-discovery-layout">
          <section className="homepage-subsection homepage-subsection--role">
            <SectionHeader
              className="homepage-section-heading"
              copyClassName="homepage-section-copy"
              description="Find help tailored to your role."
              title="Browse by role"
            />

            <div className="homepage-role-pill-grid">
              {roleFacets.map((role) => (
                <a className="homepage-role-pill" href={role.href} key={role.label}>
                  {role.label}
                </a>
              ))}
            </div>
          </section>

          <section className="homepage-subsection homepage-subsection--product">
            <SectionHeader
              className="homepage-section-heading"
              copyClassName="homepage-section-copy"
              description="Get product-specific help and guides."
              title="Browse by product"
            />

            <div className="homepage-product-grid">
              {products.map((product) => (
                <HomepageProductCard
                  description={product.description}
                  href={product.href}
                  key={product.name}
                  name={product.name}
                />
              ))}
            </div>
          </section>
        </ContentContainer>
      </section>
    </div>
  );
}
