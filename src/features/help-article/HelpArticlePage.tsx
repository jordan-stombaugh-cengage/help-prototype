import {
  getHelpArticleSlugFromHash,
  homepageHref,
} from "../../app/routes";
import {
  ContentContainer,
  MetadataTag,
  OptionalLink,
  RailCard,
} from "../../components/prototype/Primitives";
import {
  getHelpArticleDefinition,
  type HelpArticleSectionItem,
} from "./articleData";

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

function CalloutIcon() {
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

function StepNumber({ value }: { value: number }) {
  return <span className="help-article-step-number">{value}</span>;
}

function HelpArticleOptionCard({
  href,
  label,
}: {
  href?: string;
  label: string;
}) {
  return (
    <OptionalLink className="help-article-option-card" href={href} staticAs="div">
      <span>{label}</span>
      <span className="help-article-option-arrow" aria-hidden="true">
        <ChevronRightIcon />
      </span>
    </OptionalLink>
  );
}

function HelpArticleUtilityLink({
  href,
  label,
}: {
  href?: string;
  label: string;
}) {
  return <OptionalLink href={href}>{label}</OptionalLink>;
}

function ThumbUpIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8 8.25V5.9c0-1 .4-1.95 1.1-2.65l1.15-1.15.9.9c.34.34.54.8.54 1.28v2.97H15a1.5 1.5 0 0 1 1.46 1.86l-1.03 4.25A1.5 1.5 0 0 1 13.97 14.5H8M8 8.25H5.5v6.25H8M8 8.25v6.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ThumbDownIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8 11.75v2.35c0 1 .4 1.95 1.1 2.65l1.15 1.15.9-.9c.34-.34.54-.8.54-1.28V12.75H15a1.5 1.5 0 0 0 1.46-1.86l-1.03-4.25A1.5 1.5 0 0 0 13.97 5.5H8M8 11.75H5.5V5.5H8m0 6.25V5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function HelpArticleSectionItemRenderer({
  item,
}: {
  item: HelpArticleSectionItem;
}) {
  if (item.kind === "paragraph") {
    return <p className="help-article-body-paragraph">{item.content}</p>;
  }

  if (item.kind === "list") {
    const ListTag = item.ordered ? "ol" : "ul";

    return (
      <ListTag className="help-article-body-list">
        {item.items.map((entry, index) => (
          <li key={`${item.kind}-${index}`}>{entry}</li>
        ))}
      </ListTag>
    );
  }

  if (item.kind === "steps") {
    return (
      <ol className="help-article-step-list">
        {item.items.map((step, index) => (
          <li key={`${index + 1}-${String(step.title)}`} className="help-article-step">
            <StepNumber value={index + 1} />

            <div className="help-article-step-copy">
              <h3>{step.title}</h3>

              {step.details?.length ? (
                <div className="help-article-step-notes">
                  {step.details.map((detail, detailIndex) => (
                    <p key={`${index + 1}-${detailIndex}`}>{detail}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (item.kind === "definitions") {
    return (
      <dl className="help-article-definition-list">
        {item.items.map((entry, index) => (
          <div key={`${String(entry.term)}-${index}`}>
            <dt>{entry.term}</dt>
            <dd>{entry.content}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (item.kind === "action-links") {
    return (
      <div className="help-article-option-list">
        {item.items.map((link) => (
          <HelpArticleOptionCard key={link.label} {...link} />
        ))}
      </div>
    );
  }

  if (item.kind === "utility-columns") {
    return (
      <div className="help-article-account-card">
        <div className="help-article-account-grid">
          {item.columns.map((column, columnIndex) => (
            <div key={`account-column-${columnIndex}`} className="help-article-account-column">
              {column.map((link) => (
                <HelpArticleUtilityLink key={link.label} {...link} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="help-article-inline-note">
      {item.title ? <p className="help-article-inline-note-title">{item.title}</p> : null}
      <div className="help-article-inline-note-copy">
        {item.paragraphs.map((paragraph, index) => (
          <p key={`note-${index}`}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export function HelpArticlePage() {
  const article = getHelpArticleDefinition(getHelpArticleSlugFromHash());

  return (
    <div className="help-article-page">
      <div className="help-article-breadcrumbs">
        <ContentContainer className="help-article-shell">
          <p>
            <a href={homepageHref()}>Help Home</a>
            <span>›</span>
            <OptionalLink href={article.parentHref}>{article.parentLabel}</OptionalLink>
            <span>›</span>
            <span>{article.title}</span>
          </p>
        </ContentContainer>
      </div>

      <section className="help-article-header-band">
        <ContentContainer className="help-article-shell">
          <header className="help-article-header">
            <div className="help-article-header-copy">
              <h1>{article.title}</h1>
              <p>{article.summary}</p>
            </div>

            <div className="help-article-tag-row" aria-label="Article metadata">
              {article.tags.map((tag) => (
                <MetadataTag key={tag} className="help-article-tag">
                  {tag}
                </MetadataTag>
              ))}
            </div>
          </header>
        </ContentContainer>
      </section>

      <section className="help-article-layout">
        <ContentContainer className="help-article-shell help-article-grid">
          <article className="help-article-main">
            {article.callout ? (
              <section className="help-article-callout" aria-labelledby="article-callout-title">
                <div className="help-article-callout-icon">
                  <CalloutIcon />
                </div>

                <div className="help-article-callout-copy">
                  <h2 id="article-callout-title">{article.callout.title}</h2>
                  {article.callout.paragraphs.map((paragraph, index) => (
                    <p key={`callout-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ) : null}

            {article.sections.map((section) => (
              <section key={String(section.title)} className="help-article-section">
                <div className="help-article-section-heading">
                  <h2>{section.title}</h2>
                  {section.description ? <p>{section.description}</p> : null}
                </div>

                <div className="help-article-section-body">
                  {section.items.map((item, index) => (
                    <HelpArticleSectionItemRenderer
                      key={`${String(section.title)}-${item.kind}-${index}`}
                      item={item}
                    />
                  ))}
                </div>
              </section>
            ))}
          </article>

          <aside className="help-article-rail" aria-label="Article details">
            <RailCard className="help-article-rail-card" title="About this article">
              <dl className="help-article-meta-list">
                {article.appliesTo ? (
                  <div>
                    <dt>Applies to</dt>
                    <dd>{article.appliesTo}</dd>
                  </div>
                ) : null}
                {article.product ? (
                  <div>
                    <dt>Product</dt>
                    <dd>{article.product}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Help area</dt>
                  <dd>{article.helpArea}</dd>
                </div>
                {article.updated ? (
                  <div>
                    <dt>Updated</dt>
                    <dd>{article.updated}</dd>
                  </div>
                ) : null}
              </dl>
            </RailCard>

            <RailCard className="help-article-rail-card" title="Related help">
              <div className="help-article-related-groups">
                {article.relatedHelpGroups.map((group) => (
                  <div key={group.heading} className="help-article-related-group">
                    <p>{group.heading}</p>
                    <div className="help-article-related-links">
                      {group.links.map((link) => (
                        <HelpArticleUtilityLink key={link.label} {...link} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RailCard>

            <section className="help-article-feedback" aria-label="Article feedback">
              <p>Was this helpful?</p>

              <div className="help-article-feedback-actions">
                <button type="button">
                  <ThumbUpIcon />
                  <span>Yes</span>
                </button>
                <button type="button">
                  <ThumbDownIcon />
                  <span>No</span>
                </button>
              </div>
            </section>
          </aside>
        </ContentContainer>
      </section>
    </div>
  );
}
