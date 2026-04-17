import { useState } from "react";
import { homepageHref } from "../../app/routes";
import {
  ContentContainer,
  MetadataTag,
  OptionalLink,
  SectionHeader,
} from "../../components/prototype/Primitives";

export type ProductHubTopicCard = {
  actionHref?: string;
  actionLabel: string;
  description: string;
  iconKind: "account" | "access" | "troubleshooting";
  title: string;
};

export type ProductHubLinkItem = {
  href?: string;
  label: string;
};

export type ProductHubAreaCard = {
  iconKind:
    | "using"
    | "assignments"
    | "ebook"
    | "grades"
    | "integration"
    | "troubleshooting";
  links: ReadonlyArray<ProductHubLinkItem>;
  title: string;
};

export type ProductHubResourceCard = {
  href?: string;
  iconKind: "system" | "browser" | "accessibility" | "video" | "whats-new";
  label: string;
};

export type ProductHubRoleTab = {
  id: string;
  label: string;
};

export type ProductHubRoleContent = {
  areas: ReadonlyArray<ProductHubAreaCard>;
  problems: ReadonlyArray<ProductHubLinkItem>;
  problemsHeading: string;
  tasks: ReadonlyArray<ProductHubLinkItem>;
  tasksHeading: string;
};

export type ProductHubConfig = {
  areaSectionTitle: string;
  description: string;
  heroLogoAlt?: string;
  heroLogoSrc?: string;
  heroVariant?: "default" | "spark-brand";
  resourceCards: ReadonlyArray<ProductHubResourceCard>;
  roleAriaLabel: string;
  roleContent: Record<string, ProductHubRoleContent>;
  roleTabs: ReadonlyArray<ProductHubRoleTab>;
  slug: string;
  tags: ReadonlyArray<string>;
  title: string;
  topicCards: ReadonlyArray<ProductHubTopicCard>;
};

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="m8 5.5 4.5 4.5L8 14.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ProductHubTextLink({
  href,
  label,
}: {
  href?: string;
  label: string;
}) {
  return <OptionalLink href={href}>{label}</OptionalLink>;
}

function ProductHubTopicAction({
  href,
  label,
}: {
  href?: string;
  label: string;
}) {
  return (
    <OptionalLink className="product-hub-topic-action" href={href}>
      {label}
      <ChevronRightIcon />
    </OptionalLink>
  );
}

function ProductHubResourceLink({
  href,
  iconKind,
  label,
}: ProductHubResourceCard) {
  return (
    <OptionalLink className="product-hub-resource-card" href={href} staticAs="div">
      <div className="product-hub-resource-icon">
        <ResourceIcon kind={iconKind} />
      </div>
      <span>{label}</span>
    </OptionalLink>
  );
}

function TopicIcon({ kind }: { kind: ProductHubTopicCard["iconKind"] }) {
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
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6 5.5h12v13H6zM12 5.5v13M6.5 10.25h11"
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

function AreaIcon({ kind }: { kind: ProductHubAreaCard["iconKind"] }) {
  const sharedProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "1.8",
  };

  if (kind === "using") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4.5 8 7.5-3.5L19.5 8 12 11.5 4.5 8Z" {...sharedProps} />
        <path d="M7 10.25v4.4L12 17l5-2.35v-4.4" {...sharedProps} />
      </svg>
    );
  }

  if (kind === "assignments") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5.5h8M9.5 3.75h5" {...sharedProps} />
        <rect x="6" y="5.5" width="12" height="14.75" rx="1.5" {...sharedProps} />
        <path d="m9 11 1.6 1.6L15 8.75" {...sharedProps} />
      </svg>
    );
  }

  if (kind === "ebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 5.5h10v13H7zM10 8.5h4M10 11.5h4" {...sharedProps} />
        <path d="M7 18.5c1-.5 2-.75 3-.75 1.38 0 2.74.38 4 .75" {...sharedProps} />
      </svg>
    );
  }

  if (kind === "grades") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 18.5V10M11.5 18.5V6.5M16.5 18.5v-5" {...sharedProps} />
        <path d="M5 18.5h14" {...sharedProps} />
      </svg>
    );
  }

  if (kind === "integration") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.5 14.5 5.75 17.25a2.5 2.5 0 1 1-3.5-3.5L5 11" {...sharedProps} />
        <path d="m15.5 9.5 2.75-2.75a2.5 2.5 0 0 1 3.5 3.5L19 13" {...sharedProps} />
        <path d="m8.5 15.5 7-7" {...sharedProps} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 19 5-5m0 0 2.25 2.25L19 9.5l-2.25-2.25L10 14Z" {...sharedProps} />
      <path d="M14.75 7.25 16.9 5.1a1.5 1.5 0 0 1 2.12 2.12l-2.15 2.15" {...sharedProps} />
    </svg>
  );
}

function ResourceIcon({ kind }: { kind: ProductHubResourceCard["iconKind"] }) {
  const sharedProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: "1.8",
  };

  if (kind === "system") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="5.5" width="15" height="10.5" rx="1.5" {...sharedProps} />
        <path d="M9.5 19h5M12 16v3" {...sharedProps} />
      </svg>
    );
  }

  if (kind === "browser") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" {...sharedProps} />
        <path d="M4.5 12h15M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" {...sharedProps} />
      </svg>
    );
  }

  if (kind === "accessibility") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.75 12c1.4-3.75 3.82-5.75 7.25-5.75s5.85 2 7.25 5.75c-1.4 3.75-3.82 5.75-7.25 5.75S6.15 15.75 4.75 12Z" {...sharedProps} />
        <circle cx="12" cy="12" r="2.25" {...sharedProps} />
      </svg>
    );
  }

  if (kind === "video") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="6.5" width="11.5" height="11" rx="1.5" {...sharedProps} />
        <path d="m16 10.5 3.5-2v7L16 13.5" {...sharedProps} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 4.5.95 2.7 2.85.1-2.25 1.75.82 2.75L12 10.2 9.63 11.8l.82-2.75L8.2 7.3l2.85-.1L12 4.5Z" {...sharedProps} />
      <path d="m18.5 12 .57 1.62 1.71.06-1.35 1.05.49 1.65-1.42-.96-1.42.96.49-1.65-1.35-1.05 1.71-.06L18.5 12Z" {...sharedProps} />
      <path d="m6 13 .57 1.62 1.71.06-1.35 1.05.49 1.65L6 16.42l-1.42.96.49-1.65-1.35-1.05 1.71-.06L6 13Z" {...sharedProps} />
    </svg>
  );
}

export function ProductHubPage({ config }: { config: ProductHubConfig }) {
  const [activeRole, setActiveRole] = useState(config.roleTabs[0]?.id ?? "student");
  const activeRoleContent =
    config.roleContent[activeRole] ?? config.roleContent[config.roleTabs[0]?.id ?? ""];

  if (!activeRoleContent) {
    return null;
  }

  return (
    <div className="product-hub-page">
      <div className="product-hub-breadcrumbs">
        <ContentContainer className="product-hub-shell">
          <p>
            <a href={homepageHref()}>Help Home</a>
            <span>›</span>
            <span>{config.title}</span>
          </p>
        </ContentContainer>
      </div>

      <section
        className={
          config.heroVariant === "spark-brand"
            ? "product-hub-hero-band product-hub-hero-band--spark"
            : "product-hub-hero-band"
        }
      >
        <ContentContainer className="product-hub-shell">
          <header
            className={
              config.heroVariant === "spark-brand"
                ? "product-hub-hero product-hub-hero--spark"
                : "product-hub-hero"
            }
          >
            <div className="product-hub-hero-copy">
              <h1>{config.title}</h1>
              <p>{config.description}</p>

              <div className="product-hub-tag-row" aria-label="Product metadata">
                {config.tags.map((tag) => (
                  <MetadataTag key={tag} className="product-hub-tag">
                    {tag}
                  </MetadataTag>
                ))}
              </div>
            </div>

            {config.heroVariant === "spark-brand" && config.heroLogoSrc ? (
              <div className="product-hub-hero-branding" aria-hidden="true">
                <div className="product-hub-hero-divider" />
                <img
                  className="product-hub-hero-logo"
                  src={config.heroLogoSrc}
                  alt={config.heroLogoAlt ?? `${config.title} logo`}
                />
              </div>
            ) : null}
          </header>
        </ContentContainer>
      </section>

      <section className="product-hub-role-band">
        <ContentContainer className="product-hub-shell">
          <div className="product-hub-role-row">
            <p>I am a:</p>
            <div
              className="product-hub-role-tabs"
              role="tablist"
              aria-label={config.roleAriaLabel}
            >
              {config.roleTabs.map((role) => {
                const isActive = role.id === activeRole;

                return (
                  <button
                    key={role.id}
                    id={`${config.slug}-tab-${role.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${config.slug}-role-content`}
                    className={
                      isActive ? "product-hub-role-tab is-active" : "product-hub-role-tab"
                    }
                    onClick={() => {
                      setActiveRole(role.id);
                    }}
                  >
                    {role.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="product-hub-body">
        <ContentContainer className="product-hub-shell">
          <section className="product-hub-section">
            <SectionHeader className="product-hub-section-heading" title="Help by topic" />

            <div className="product-hub-topic-grid">
              {config.topicCards.map((card) => (
                <article
                  key={card.title}
                  className={
                    card.actionHref
                      ? "product-hub-topic-card"
                      : "product-hub-topic-card is-static"
                  }
                >
                  <div className="product-hub-topic-card-header">
                    <div
                      className={`product-hub-topic-icon product-hub-topic-icon--${card.iconKind}`}
                    >
                      <TopicIcon kind={card.iconKind} />
                    </div>
                    <h3>{card.title}</h3>
                  </div>

                  <p>{card.description}</p>

                  <ProductHubTopicAction href={card.actionHref} label={card.actionLabel} />
                </article>
              ))}
            </div>
          </section>

          <section
            className="product-hub-section product-hub-role-section"
            id={`${config.slug}-role-content`}
            role="tabpanel"
            aria-labelledby={`${config.slug}-tab-${activeRole}`}
          >
            <article className="product-hub-role-group">
              <h2>{activeRoleContent.tasksHeading}</h2>
              <div className="product-hub-link-panel">
                <ul>
                  {activeRoleContent.tasks.map((link) => (
                    <li key={link.label}>
                      <ProductHubTextLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="product-hub-role-group">
              <h2>{activeRoleContent.problemsHeading}</h2>
              <div className="product-hub-link-panel">
                <ul>
                  {activeRoleContent.problems.map((link) => (
                    <li key={link.label}>
                      <ProductHubTextLink {...link} />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </section>

          <section className="product-hub-section">
            <SectionHeader
              className="product-hub-section-heading"
              title={config.areaSectionTitle}
            />

            <div className="product-hub-area-grid">
              {activeRoleContent.areas.map((area) => (
                <article key={area.title} className="product-hub-area-card">
                  <div className="product-hub-area-card-header">
                    <div className="product-hub-area-icon">
                      <AreaIcon kind={area.iconKind} />
                    </div>
                    <h3>{area.title}</h3>
                  </div>

                  <ul>
                    {area.links.map((link) => (
                      <li key={link.label}>
                        <ProductHubTextLink {...link} />
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="product-hub-section">
            <SectionHeader className="product-hub-section-heading" title="Additional resources" />

            <div className="product-hub-resource-grid">
              {config.resourceCards.map((resource) => (
                <ProductHubResourceLink key={resource.label} {...resource} />
              ))}
            </div>
          </section>
        </ContentContainer>
      </section>
    </div>
  );
}
