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
  accessCodeChooserHref,
  courseKeyChooserHref,
  getRouteDrivenSearchFilters,
  getSearchDiscoveryOptionsFromHash,
  getSearchResultsContextLabel,
  browseByProductHref,
  helpArticleHref,
  homepageHref,
  lmsAccessChooserHref,
  lmsLinkChooserHref,
  missingActivitiesChooserHref,
  missingContentChooserHref,
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
  filters?: Partial<FilterSelections>;
  href: string;
  isBestMatch?: boolean;
  keywords?: string[];
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

const sharedHelpRoles = [
  "Higher Ed Student",
  "Higher Ed Instructor",
  "K–12 Student",
  "K–12 Teacher",
  "LMS Administrator",
  "Institutional Administrator",
  "Primary Student",
  "Secondary Student",
];

const higherEdHelpRoles = [
  "Higher Ed Student",
  "Higher Ed Instructor",
  "LMS Administrator",
];

const sparkStudentRoles = ["Primary Student", "Secondary Student"];

const results: SearchResult[] = [
  {
    actionLabel: "View article",
    isBestMatch: true,
    title: "Reset your password",
    description:
      "Step-by-step instructions to reset your password when you sign in directly with a Cengage account.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Cengage account"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: sharedHelpRoles,
      "Sign-in path": ["Cengage sign-in"],
    },
    href: resetPasswordHref(),
    keywords: ["reset password", "spark", "account", "sign in"],
    updated: "Updated March 2026",
  },
  {
    title: "Forgot your username",
    description:
      "Retrieve your username using your email address or contact information on file.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Cengage account"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: sharedHelpRoles,
      "Sign-in path": ["Cengage sign-in"],
    },
    href: helpArticleHref("forgot-username"),
    keywords: ["username", "email", "account recovery", "spark"],
    updated: "Source date not available",
  },
  {
    title: "Enter a course key",
    description:
      "Choose the product or course experience that uses your key so we can send you to the right next step.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Course Access & Enrollment"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: [
        "Higher Ed Student",
        "Higher Ed Instructor",
        "Primary Student",
        "Secondary Student",
        "Institutional Administrator",
      ],
    },
    href: courseKeyChooserHref(),
    keywords: ["course key", "class key", "enroll course", "join class"],
    updated: "Prototype routing step",
  },
  {
    title: "Redeem an access code",
    description:
      "Choose the product or course experience linked to your code so we can send you to the right access help.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Course Access & Enrollment"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: [
        "Higher Ed Student",
        "Higher Ed Instructor",
        "K–12 Student",
        "K–12 Teacher",
        "Institutional Administrator",
        "Primary Student",
        "Secondary Student",
      ],
    },
    href: accessCodeChooserHref(),
    keywords: ["access code", "redeem code", "course code", "unlock access"],
    updated: "Prototype routing step",
  },
  {
    title: "Reset password through LMS",
    description:
      "If you sign in through your learning management system, reset your password through your school's LMS.",
    facets: ["Student, Instructor", "LMS"],
    filters: {
      Role: sharedHelpRoles,
      "Sign-in path": ["LMS sign-in"],
    },
    href: resetPasswordHref("lms"),
    keywords: ["lms", "password", "sign in"],
    updated: "Updated February 2026",
  },
  {
    title: "Sign in with the wrong account",
    description:
      "Steps to resolve issues when you've signed in with an incorrect account or need to switch accounts.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Cengage account"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: [
        "Higher Ed Student",
        "Higher Ed Instructor",
        "K–12 Student",
        "K–12 Teacher",
        "Institutional Administrator",
        "Primary Student",
        "Secondary Student",
      ],
      "Sign-in path": ["Cengage sign-in"],
    },
    href: wrongAccountChooserHref(),
    keywords: ["wrong account", "switch account", "spark"],
    updated: "Source date not available",
  },
  {
    title: "Browser requirements",
    description:
      "Supported browsers for Cengage web-based learning platforms, including browser compatibility guidance.",
    facets: ["MindTap, WebAssign, SAM", "Student, Instructor"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: [
        "Higher Ed Student",
        "Higher Ed Instructor",
        "K–12 Student",
        "K–12 Teacher",
        "LMS Administrator",
        "Institutional Administrator",
      ],
    },
    href: helpArticleHref("browser-requirements"),
    keywords: ["browser", "device", "compatibility"],
    updated: "Source date not available",
  },
  {
    title: "System requirements",
    description:
      "Workstation recommendations and platform requirements for web-based Cengage learning products.",
    facets: ["MindTap, WebAssign, SAM", "Student, Instructor"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: [
        "Higher Ed Student",
        "Higher Ed Instructor",
        "K–12 Student",
        "K–12 Teacher",
        "LMS Administrator",
        "Institutional Administrator",
      ],
    },
    href: helpArticleHref("system-requirements"),
    keywords: ["system", "requirements", "device"],
    updated: "Source date not available",
  },
  {
    title: "Access your course through LMS",
    description:
      "Choose the situation that best matches your LMS access problem so we can send you to the right help.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Course Access & Enrollment"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: [
        "Higher Ed Student",
        "Higher Ed Instructor",
        "K–12 Student",
        "K–12 Teacher",
        "LMS Administrator",
        "Institutional Administrator",
        "Primary Student",
        "Secondary Student",
      ],
      "Sign-in path": ["LMS sign-in"],
    },
    href: lmsAccessChooserHref(),
    keywords: ["lms access", "open course from lms", "canvas", "moodle", "blackboard"],
    updated: "Prototype routing step",
  },
  {
    title: "LMS link not working",
    description:
      "Troubleshoot course links or activity links that do not open when you launch from your LMS.",
    facets: ["MindTap, WebAssign, SAM", "LMS-linked access"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM"],
      Role: higherEdHelpRoles,
      "Sign-in path": ["LMS sign-in"],
    },
    href: lmsLinkChooserHref(),
    keywords: ["lms link", "deep link", "launch", "integration"],
    updated: "Source date not available",
  },
  {
    title: "Missing activities or assignments",
    description:
      "Choose the product or course experience where activities or assignments are missing so we can send you to the right help.",
    facets: ["MindTap, WebAssign, SAM, Spark, or legacy MyELT", "Troubleshooting & Common Problems"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: [
        "Higher Ed Student",
        "Higher Ed Instructor",
        "Primary Student",
        "Secondary Student",
        "Institutional Administrator",
      ],
    },
    href: missingActivitiesChooserHref(),
    keywords: ["missing activities", "missing assignments", "coursework missing"],
    updated: "Prototype routing step",
  },
  {
    title: "Missing content or course materials",
    description:
      "Choose the product where readings, resources, or course materials are missing so we can send you to the right next step.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Troubleshooting & Common Problems"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: sharedHelpRoles,
    },
    href: missingContentChooserHref(),
    keywords: ["missing content", "missing materials", "missing ebook", "resources missing"],
    updated: "Prototype routing step",
  },
  {
    title: "MindTap help hub",
    description:
      "Browse MindTap help for students, instructors, and LMS administrators.",
    facets: ["MindTap", "Higher Education"],
    filters: {
      Product: ["MindTap"],
      "Education segment": ["Higher Education"],
      Role: higherEdHelpRoles,
    },
    href: browseByProductHref("mindtap") ?? homepageHref(),
    keywords: [
      "mindtap",
      "product help",
      "course help",
      "course management",
      "assignments",
      "grading",
      "grade sync",
      "custom content",
      "roster",
      "ebook",
      "lms",
      "integration",
    ],
    updated: "Prototype destination",
  },
  {
    title: "WebAssign help hub",
    description:
      "Browse WebAssign help for students, instructors, and LMS administrators.",
    facets: ["WebAssign", "Higher Education"],
    filters: {
      Product: ["WebAssign"],
      "Education segment": ["Higher Education"],
      Role: higherEdHelpRoles,
    },
    href: browseByProductHref("webassign") ?? homepageHref(),
    keywords: [
      "webassign",
      "product help",
      "homework help",
      "course management",
      "assignments",
      "roster",
      "gradebook",
      "grade sync",
      "ebook",
      "lms",
      "integration",
    ],
    updated: "Prototype destination",
  },
  {
    title: "SAM help hub",
    description:
      "Browse SAM help for students, instructors, and lab or LMS administrators.",
    facets: ["SAM", "Higher Education"],
    filters: {
      Product: ["SAM"],
      "Education segment": ["Higher Education"],
      Role: higherEdHelpRoles,
    },
    href: browseByProductHref("sam") ?? homepageHref(),
    keywords: [
      "sam",
      "product help",
      "course help",
      "assignments",
      "gradebook",
      "course management",
      "roster",
      "ebook",
      "lms",
      "integration",
    ],
    updated: "Prototype destination",
  },
  {
    title: "Spark help hub",
    description:
      "Browse Spark help for students, instructors, and institutional administrators in English Language Learning.",
    facets: ["Spark", "English Language Learning"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: ["Primary Student", "Secondary Student", "Institutional Administrator"],
    },
    href: browseByProductHref("spark") ?? homepageHref(),
    keywords: ["spark", "elt", "english language learning", "course help"],
    updated: "Prototype destination",
  },
  {
    title: "Sign in to Spark",
    description: "Sign in to Spark to access your English language courses.",
    facets: ["Spark", "Student", "English Language Learning"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: sparkStudentRoles,
    },
    href: helpArticleHref("spark-sign-in"),
    keywords: ["spark", "sign in", "login", "student"],
    updated: "Updated January 2026",
  },
  {
    title: "Join a Spark course",
    description: "Enroll in a teacher-led Spark course with your existing account.",
    facets: ["Spark", "Student", "Course Access & Enrollment"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: sparkStudentRoles,
    },
    href: helpArticleHref("spark-join-course"),
    keywords: ["spark", "join course", "course key", "access code"],
    updated: "Updated January 2026",
  },
  {
    title: "Spark Course Key Lookup",
    description: "Get your course key to enroll in Spark self-study courses when you do not have a teacher.",
    facets: ["Spark", "Student", "Self-study"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: sparkStudentRoles,
    },
    href: helpArticleHref("spark-course-key-lookup"),
    keywords: ["spark", "course key", "self-study", "lookup"],
    updated: "Updated January 2026",
  },
  {
    title: "No Course Key for Spark",
    description: "Get the next step when you are trying to create an account or join a Spark course without a course key.",
    facets: ["Spark", "Student", "Course Access & Enrollment"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: sparkStudentRoles,
    },
    href: helpArticleHref("spark-no-course-key"),
    keywords: ["spark", "course key", "lms access", "join course"],
    updated: "Updated January 2026",
  },
  {
    title: "Assignments in Spark",
    description: "Complete assignments your instructor has assigned to you in Spark.",
    facets: ["Spark", "Student", "Assignments"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: sparkStudentRoles,
    },
    href: helpArticleHref("spark-assignments"),
    keywords: ["spark", "assignments", "activities", "complete work"],
    updated: "Updated April 2026",
  },
  {
    title: "View Your Grades in Spark",
    description: "Access the Gradebook to view your progress and grades on activities, assignments, and tests in Spark.",
    facets: ["Spark", "Student", "Grades & Scores"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: sparkStudentRoles,
    },
    href: helpArticleHref("spark-view-your-grades"),
    keywords: ["spark", "grades", "scores", "gradebook", "progress"],
    updated: "Updated January 2026",
  },
  {
    title: "System Requirements for Spark",
    description: "The Spark platform and app support the following operating systems and browsers.",
    facets: ["Spark", "English Language Learning", "System requirements"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: ["Primary Student", "Secondary Student", "Institutional Administrator"],
    },
    href: helpArticleHref("spark-system-requirements"),
    keywords: ["spark", "system requirements", "browser", "app"],
    updated: "Updated January 2026",
  },
  {
    title: "Create a Spark Course",
    description: "Create your course in Spark.",
    facets: ["Spark", "Instructor", "Course Management"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
    },
    href: helpArticleHref("spark-create-course"),
    keywords: ["spark", "create course", "instructor", "course management"],
    updated: "Updated February 2026",
  },
  {
    title: "LTI 1.3 LMS Course Management",
    description: "Create Spark courses, assignments, and tests within your institution's LTI 1.3 Learning Management System.",
    facets: ["Spark", "LMS Administrator", "LMS Integration"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: ["LMS Administrator", "Institutional Administrator"],
      "Sign-in path": ["LMS sign-in"],
    },
    href: helpArticleHref("spark-lti-1-3-course-management"),
    keywords: ["spark", "lti 1.3", "lms", "integration", "course management"],
    updated: "Updated January 2026",
  },
  {
    title: "Manage Users in Spark",
    description: "Add, upload, remove, and edit students, instructors, and administrators in a course.",
    facets: ["Spark", "Institutional Administrator", "User Management"],
    filters: {
      Product: ["Spark"],
      "Education segment": ["English Language Learning"],
      Role: ["Institutional Administrator"],
    },
    href: helpArticleHref("spark-manage-users"),
    keywords: ["spark", "manage users", "institutional administrator", "students", "instructors"],
    updated: "Updated February 2026",
  },
  {
    title: "Reset password for school or NGLSync sign-in",
    description:
      "If your Spark access comes through a school portal or NGLSync, reset your password through your school's system.",
    facets: ["Spark", "School / NGLSync", "English Language Learning"],
    filters: {
      Product: ["Spark"],
      "Sign-in path": ["School / NGLSync"],
      "Education segment": ["English Language Learning"],
      Role: ["Primary Student", "Secondary Student", "Institutional Administrator"],
    },
    href: resetPasswordHref("school-nglsync"),
    keywords: ["spark", "nglsync", "school portal", "password", "sign in"],
    updated: "Updated January 2026",
  },
  {
    title: "Legacy MyELT: My course is missing assignments",
    description:
      "Get help when assignments are missing from your MyELT course.",
    facets: ["MyELT", "Student"],
    keywords: ["legacy", "myelt", "assignments", "missing activities"],
    href: helpArticleHref("missing-activities-or-assignments"),
    updated: "Updated April 2025",
  },
  {
    title: "School portal sign-in help",
    description:
      "Get the next step when you access Cengage through a school portal instead of signing in directly.",
    facets: ["School / NGLSync", "Student, Instructor"],
    filters: {
      Role: sharedHelpRoles,
      "Sign-in path": ["School / NGLSync"],
    },
    href: resetPasswordHref("school-nglsync"),
    keywords: ["school portal", "nglsync", "sign in", "reset password"],
    updated: "Updated January 2026",
  },
  {
    title: "Manage your account settings",
    description:
      "Update your email address, password, profile information, and notification preferences.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Cengage account"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: sharedHelpRoles,
      "Sign-in path": ["Cengage sign-in"],
    },
    href: helpArticleHref("sign-in"),
    keywords: ["account settings", "email", "profile", "spark"],
    updated: "Updated February 2026",
  },
  {
    title: "Password requirements and security",
    description:
      "Learn about password requirements, security best practices, and how to create a strong password.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Cengage account"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: sharedHelpRoles,
      "Sign-in path": ["Cengage sign-in"],
    },
    href: helpArticleHref("sign-in"),
    keywords: ["password", "security", "spark"],
    updated: "Updated December 2025",
  },
  {
    title: "Can't access email to reset password",
    description:
      "Alternative methods to reset your password if you don't have access to your registered email address.",
    facets: ["MindTap, WebAssign, SAM, and Spark", "Cengage account"],
    filters: {
      Product: ["MindTap", "WebAssign", "SAM", "Spark"],
      Role: sharedHelpRoles,
      "Sign-in path": ["Cengage sign-in"],
    },
    href: helpArticleHref("forgot-username"),
    keywords: ["email", "reset password", "account recovery", "spark"],
    updated: "Updated March 2026",
  },
];

function matchesQuery(result: SearchResult, query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return true;
  }

  const haystack = [
    result.title,
    result.description,
    ...result.facets,
    ...(result.keywords ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return normalizedQuery
    .split(/\s+/)
    .every((term) => haystack.includes(term));
}

function matchesSelectedFilters(
  result: SearchResult,
  selectedFilters: FilterSelections
) {
  return filterGroups.every((group) => {
    const activeOptions = selectedFilters[group.title] ?? [];

    if (activeOptions.length === 0) {
      return true;
    }

    const resultOptions = result.filters?.[group.title] ?? [];

    if (resultOptions.length === 0) {
      return false;
    }

    return activeOptions.some((option) => resultOptions.includes(option));
  });
}

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

  const filteredResults = results.filter(
    (result) =>
      matchesQuery(result, searchQuery) && matchesSelectedFilters(result, selectedFilters)
  );

  const prioritizedResults = [...filteredResults].sort((left, right) => {
    if (left.isBestMatch === right.isBestMatch) {
      return 0;
    }

    return left.isBestMatch ? -1 : 1;
  });

  const bestMatch = prioritizedResults[0];
  const remainingResults = prioritizedResults.slice(1);

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
          <strong>{filteredResults.length} results</strong>
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
          {bestMatch ? (
            <>
              <article className="search-best-match-card">
                <div className="search-best-match-header">
                  <div className="search-best-match-icon" aria-hidden="true">
                    ★
                  </div>
                  <p className="search-best-match-label">Best match</p>
                </div>

                <h2>{bestMatch.title}</h2>
                <p className="search-result-description">{bestMatch.description}</p>

                <div className="search-result-meta-row">
                  <ul className="search-result-meta-list">
                    {bestMatch.facets.map((item) => (
                      <li key={item}>
                        <Tag className="search-result-meta-tag" size={TagSize.medium}>
                          {item}
                        </Tag>
                      </li>
                    ))}
                  </ul>
                  <p className="search-result-updated">{bestMatch.updated}</p>
                </div>

                <a className="search-best-match-action" href={bestMatch.href}>
                  {bestMatch.actionLabel ?? "View result"}
                </a>
              </article>

              {remainingResults.length > 0 ? (
                <>
                  <div className="search-results-divider">
                    <h2>All results</h2>
                  </div>

                  <div className="search-results-list">
                    {remainingResults.map((result) => (
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
                </>
              ) : null}

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
            </>
          ) : (
            <article className="search-best-match-card">
              <div className="search-best-match-header">
                <div className="search-best-match-icon" aria-hidden="true">
                  ★
                </div>
                <p className="search-best-match-label">No exact prototype match</p>
              </div>

              <h2>No live destination matches this combination yet</h2>
              <p className="search-result-description">
                The current prototype does not yet include an honest direct destination for this
                query and filter combination. Try a broader filter set or return to a shared help
                domain.
              </p>
            </article>
          )}
        </section>
      </div>
    </div>
  );
}
