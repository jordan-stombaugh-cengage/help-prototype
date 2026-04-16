import { useEffect, useState } from "react";
import {
  Checkbox,
  Input,
  InputType,
  Tag,
  TagColor,
  TagSize,
} from "react-magma-dom";
import { SearchIcon } from "react-magma-icons";
import {
  getRouteDrivenSearchFilters,
  getSearchDiscoveryOptionsFromHash,
  getSearchResultsContextLabel,
  helpArticleHref,
  homepageHref,
  lmsLinkChooserHref,
  resetPasswordHref,
  setPreviewPageHash,
  wrongAccountChooserHref,
} from "../../app/routes";

type FilterGroup = {
  options: string[];
  title: string;
};

type SearchResult = {
  actionLabel?: string;
  description: string;
  facets: string[];
  href: string;
  isBestMatch?: boolean;
  title: string;
  updated: string;
};

type FilterSelections = Record<string, string[]>;

const filterGroups: FilterGroup[] = [
  {
    title: "Role",
    options: [
      "Higher Ed Student",
      "Higher Ed Instructor",
      "K–12 Student",
      "K–12 Teacher",
      "Primary Student",
      "Secondary Student",
      "LMS Administrator",
      "Institutional Administrator",
    ],
  },
  {
    title: "Product",
    options: ["MindTap", "WebAssign", "SAM", "Spark"],
  },
  {
    title: "Sign-in path",
    options: ["Cengage sign-in", "LMS sign-in", "School / NGLSync"],
  },
  {
    title: "Education segment",
    options: ["Higher Education", "K–12", "English Language Learning"],
  },
  {
    title: "Last updated",
    options: ["Last 30 days", "Last 3 months", "Last year"],
  },
];

const checkboxContainerStyle = { margin: 0 };

const checkboxLabelStyle = {
  color: "#4f4a5a",
  fontSize: "13px",
  lineHeight: "20px",
};

function buildFilterSelections(defaults: Partial<FilterSelections> = {}): FilterSelections {
  return filterGroups.reduce<FilterSelections>((selections, group) => {
    selections[group.title] = defaults[group.title] ?? [];
    return selections;
  }, {});
}

const results: SearchResult[] = [
  {
    actionLabel: "View article",
    isBestMatch: true,
    title: "Reset your password",
    description:
      "Step-by-step instructions to reset your password when you sign in directly with a Cengage account.",
    facets: ["Student, Instructor", "Cengage account"],
    href: resetPasswordHref(),
    updated: "Updated March 2026",
  },
  {
    title: "Forgot your username",
    description:
      "Retrieve your username using your email address or contact information on file.",
    facets: ["MindTap, WebAssign, SAM, MyELT, Spark", "Cengage account"],
    href: helpArticleHref("forgot-username"),
    updated: "Source date not available",
  },
  {
    title: "Reset password through LMS",
    description:
      "If you sign in through your learning management system, reset your password through your school's LMS.",
    facets: ["Student, Instructor", "LMS"],
    href: resetPasswordHref("lms"),
    updated: "Updated February 2026",
  },
  {
    title: "Sign in with the wrong account",
    description:
      "Steps to resolve issues when you've signed in with an incorrect account or need to switch accounts.",
    facets: ["MindTap, WebAssign, SAM, MyELT, Spark", "Cengage account"],
    href: wrongAccountChooserHref(),
    updated: "Source date not available",
  },
  {
    title: "Browser requirements",
    description:
      "Supported browsers for Cengage web-based learning platforms, including browser compatibility guidance.",
    facets: ["MindTap, WebAssign, SAM", "Student, Instructor"],
    href: helpArticleHref("browser-requirements"),
    updated: "Source date not available",
  },
  {
    title: "System requirements",
    description:
      "Workstation recommendations and platform requirements for web-based Cengage learning products.",
    facets: ["MindTap, WebAssign, SAM", "Student, Instructor"],
    href: helpArticleHref("system-requirements"),
    updated: "Source date not available",
  },
  {
    title: "LMS link not working",
    description:
      "Troubleshoot course links or activity links that do not open when you launch from your LMS.",
    facets: ["MindTap, WebAssign, SAM", "LMS-linked access"],
    href: lmsLinkChooserHref(),
    updated: "Source date not available",
  },
  {
    title: "My course is missing assignments",
    description:
      "Get help when assignments are missing from your MyELT course.",
    facets: ["MyELT", "Student"],
    href: helpArticleHref("missing-activities-or-assignments"),
    updated: "Updated April 2025",
  },
  {
    title: "Reset password for NGLSync school portal",
    description:
      "If you access Cengage through your school portal, you'll need to reset your password through your school's system.",
    facets: ["National Geographic Learning", "Student, Instructor", "School / NGLSync portal"],
    href: resetPasswordHref("school-nglsync"),
    updated: "Updated January 2026",
  },
  {
    title: "Manage your account settings",
    description:
      "Update your email address, password, profile information, and notification preferences.",
    facets: ["Student, Instructor", "Cengage account"],
    href: helpArticleHref("sign-in"),
    updated: "Updated February 2026",
  },
  {
    title: "Password requirements and security",
    description:
      "Learn about password requirements, security best practices, and how to create a strong password.",
    facets: ["Student, Instructor", "Cengage account"],
    href: helpArticleHref("sign-in"),
    updated: "Updated December 2025",
  },
  {
    title: "Can't access email to reset password",
    description:
      "Alternative methods to reset your password if you don't have access to your registered email address.",
    facets: ["Student, Instructor", "Cengage account"],
    href: helpArticleHref("forgot-username"),
    updated: "Updated March 2026",
  },
];

export function SearchResultsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultsContextLabel, setResultsContextLabel] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<FilterSelections>(() =>
    buildFilterSelections()
  );

  useEffect(() => {
    function syncSearchStateFromHash() {
      const routeState = getSearchDiscoveryOptionsFromHash();
      setSearchQuery(routeState.query ?? "");
      setResultsContextLabel(getSearchResultsContextLabel(routeState));
      setSelectedFilters(buildFilterSelections(getRouteDrivenSearchFilters(routeState)));
    }

    syncSearchStateFromHash();
    window.addEventListener("hashchange", syncSearchStateFromHash);

    return () => {
      window.removeEventListener("hashchange", syncSearchStateFromHash);
    };
  }, []);

  function handleSearchClick() {
    const trimmedQuery = searchQuery.trim();
    setPreviewPageHash("search-results", trimmedQuery ? { query: trimmedQuery } : {});
  }

  const appliedFilters = filterGroups.flatMap((group) =>
    (selectedFilters[group.title] ?? []).map((option) => ({
      groupTitle: group.title,
      option,
    }))
  );

  function toggleFilter(groupTitle: string, option: string) {
    setResultsContextLabel(
      searchQuery.trim() ? `for "${searchQuery.trim()}"` : null
    );
    setSelectedFilters((currentSelections) => {
      const activeSelections = currentSelections[groupTitle] ?? [];
      const nextSelections = activeSelections.includes(option)
        ? activeSelections.filter((item) => item !== option)
        : [...activeSelections, option];

      return {
        ...currentSelections,
        [groupTitle]: nextSelections,
      };
    });
  }

  function clearAllFilters() {
    const trimmedQuery = searchQuery.trim();
    setResultsContextLabel(trimmedQuery ? `for "${trimmedQuery}"` : null);
    setSelectedFilters(buildFilterSelections());
    setPreviewPageHash("search-results", trimmedQuery ? { query: trimmedQuery } : {});
  }

  return (
    <div className="search-results-page">
      <nav className="search-results-breadcrumbs" aria-label="Breadcrumb">
        <a href={homepageHref()}>Help Home</a>
        <span aria-hidden="true">›</span>
        <span>Search Results</span>
      </nav>

      <div className="search-results-query-bar">
        <Input
          value={searchQuery}
          labelText="Search query"
          isLabelVisuallyHidden
          placeholder="Search help articles, known issues, FAQs..."
          type={InputType.search}
          width="100%"
          icon={<SearchIcon />}
          iconAriaLabel="Search"
          onIconClick={handleSearchClick}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
      </div>

      <header className="search-results-header">
        <p className="search-results-count">
          <strong>47 results</strong>
          {resultsContextLabel ? ` ${resultsContextLabel}` : null}
        </p>

        <label className="search-results-sort-control">
          <span>Sort by:</span>
          <select defaultValue="most-recent" aria-label="Sort results">
            <option value="most-recent">Most recent</option>
            <option value="best-match">Best match</option>
          </select>
        </label>
      </header>

      <div className="search-results-layout">
        <aside className="search-filters" aria-label="Search filters">
          <div className="search-filters-refine">
            <div className="search-filters-refine-header">
              <p className="search-filters-refine-title">Refine results</p>
              <button
                type="button"
                className="search-filters-clear"
                onClick={clearAllFilters}
                disabled={appliedFilters.length === 0}
              >
                Clear all
              </button>
            </div>

            {appliedFilters.length > 0 ? (
              <div className="search-filters-applied-list" aria-label="Applied filters">
                {appliedFilters.map(({ groupTitle, option }) => (
                  <Tag
                    key={`${groupTitle}-${option}`}
                    className="search-filters-applied-tag"
                    color={TagColor.primary}
                    labelText={`${groupTitle}: ${option}`}
                    onDelete={() => toggleFilter(groupTitle, option)}
                    size={TagSize.medium}
                  >
                    {option}
                  </Tag>
                ))}
              </div>
            ) : null}
          </div>

          <h2>Filter by</h2>

          {filterGroups.map((group) => (
            <div className="search-filter-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="search-filter-options">
                {group.options.map((option) => (
                  <div className="search-filter-option" key={option}>
                    <Checkbox
                      checked={(selectedFilters[group.title] ?? []).includes(option)}
                      containerStyle={checkboxContainerStyle}
                      labelStyle={checkboxLabelStyle}
                      labelText={option}
                      onChange={() => toggleFilter(group.title, option)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <section className="search-results-column">
          <article className="search-best-match-card">
            <div className="search-best-match-header">
              <div className="search-best-match-icon" aria-hidden="true">
                ★
              </div>
              <p className="search-best-match-label">Best match</p>
            </div>

            <h2>{results[0].title}</h2>
            <p className="search-result-description">{results[0].description}</p>

            <div className="search-result-meta-row">
              <ul className="search-result-meta-list">
                {results[0].facets.map((item) => (
                  <li key={item}>
                    <Tag className="search-result-meta-tag" size={TagSize.medium}>
                      {item}
                    </Tag>
                  </li>
                ))}
              </ul>
              <p className="search-result-updated">{results[0].updated}</p>
            </div>

            <a className="search-best-match-action" href={results[0].href}>
              {results[0].actionLabel}
            </a>
          </article>

          <div className="search-results-divider">
            <h2>All results</h2>
          </div>

          <div className="search-results-list">
            {results.slice(1).map((result) => (
              <article className="search-result-card" key={result.title}>
                <div className="search-result-heading-row">
                  <a className="search-result-title" href={result.href}>
                    {result.title}
                  </a>
                  <span className="search-result-chevron" aria-hidden="true">
                    ›
                  </span>
                </div>

                <p className="search-result-description">{result.description}</p>

                <div className="search-result-meta-row">
                  <ul className="search-result-meta-list">
                    {result.facets.map((item) => (
                      <li key={item}>
                        <Tag className="search-result-meta-tag" size={TagSize.medium}>
                          {item}
                        </Tag>
                      </li>
                    ))}
                  </ul>
                  <p className="search-result-updated">{result.updated}</p>
                </div>
              </article>
            ))}
          </div>

          <nav className="search-results-pagination" aria-label="Pagination">
            <button type="button" aria-label="Previous page">‹</button>
            <button type="button" className="is-active" aria-current="page">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" aria-label="Next page">›</button>
          </nav>
        </section>
      </div>
    </div>
  );
}
