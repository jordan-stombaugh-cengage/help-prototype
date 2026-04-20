export type PreviewPageId =
  | "homepage"
  | "search-results"
  | "help-article"
  | "sign-in-account"
  | "course-access-enrollment"
  | "troubleshooting-common-problems"
  | "manage-account-chooser"
  | "access-code-chooser"
  | "course-key-chooser"
  | "join-enroll-chooser"
  | "lms-access-chooser"
  | "purchased-access-chooser"
  | "wrong-course-chooser"
  | "missing-content-chooser"
  | "error-sync-chooser"
  | "wrong-account-chooser"
  | "lms-link-chooser"
  | "missing-activities-chooser"
  | "support-page"
  | "product-hub-mindtap"
  | "product-hub-webassign"
  | "product-hub-sam"
  | "product-hub-spark"
  | "reset-password-chooser"
  | "reset-password-lms"
  | "reset-password-school-nglsync"
  | "reset-password-not-sure";

export type ProductSlug = "mindtap" | "webassign" | "sam" | "spark";

export type RoleFacet =
  | "higher-ed-student"
  | "higher-ed-instructor"
  | "k-12-student"
  | "k-12-teacher"
  | "lms-administrator"
  | "primary-student"
  | "secondary-student"
  | "institutional-administrator";

export type HelpDomainSlug =
  | "sign-in-account"
  | "course-access-enrollment"
  | "troubleshooting-common-problems";

export type HelpArticleSlug =
  | "sign-in"
  | "manage-account"
  | "reset-cengage-password"
  | "spark-manage-account"
  | "transfer-or-drop-course"
  | "wrong-product-or-course-in-lms"
  | "grade-sync-problems"
  | "spark-sign-in"
  | "spark-join-course"
  | "spark-course-key-lookup"
  | "spark-no-course-key"
  | "spark-assignments"
  | "spark-view-your-grades"
  | "spark-system-requirements"
  | "spark-dynamic-lessons"
  | "spark-customize-lesson"
  | "spark-present-lesson"
  | "spark-in-class-activity"
  | "spark-create-course"
  | "spark-lti-1-3-course-management"
  | "spark-manage-users"
  | "spark-institutional-settings"
  | "forgot-username"
  | "wrong-account"
  | "browser-requirements"
  | "system-requirements"
  | "lms-link-not-working";

export type ResetPasswordBranch =
  | "chooser"
  | "cengage-account"
  | "lms"
  | "school-nglsync"
  | "not-sure";

export type EducationSegmentFacet =
  | "higher-education"
  | "k-12"
  | "english-language-learning";

export type SignInPathFacet =
  | "cengage-sign-in"
  | "lms-sign-in"
  | "school-nglsync";

export type SearchFilterGroupTitle =
  | "Role"
  | "Product"
  | "Sign-in path"
  | "Education segment";

export type RouteDrivenSearchFilters = Partial<
  Record<SearchFilterGroupTitle, string[]>
>;

export type PreviewPageDefinition = {
  id: PreviewPageId;
  label: string;
  route: string;
};

export const previewPageDefinitions = [
  {
    id: "homepage",
    label: "Homepage",
    route: "/",
  },
  {
    id: "search-results",
    label: "Search Results",
    route: "/search",
  },
  {
    id: "help-article",
    label: "Help Article",
    route: "/article/:slug",
  },
  {
    id: "sign-in-account",
    label: "Sign In & Account Help",
    route: "/help/sign-in-account",
  },
  {
    id: "course-access-enrollment",
    label: "Course Access & Enrollment",
    route: "/help/course-access-enrollment",
  },
  {
    id: "troubleshooting-common-problems",
    label: "Troubleshooting & Common Problems",
    route: "/help/troubleshooting-common-problems",
  },
  {
    id: "manage-account-chooser",
    label: "Manage Account Chooser",
    route: "/help/sign-in-account/manage-account",
  },
  {
    id: "access-code-chooser",
    label: "Access Code Chooser",
    route: "/help/course-access-enrollment/access-code",
  },
  {
    id: "course-key-chooser",
    label: "Course Key Chooser",
    route: "/help/course-access-enrollment/course-key",
  },
  {
    id: "join-enroll-chooser",
    label: "Join or Enroll Chooser",
    route: "/help/course-access-enrollment/join-or-enroll",
  },
  {
    id: "lms-access-chooser",
    label: "LMS Access Chooser",
    route: "/help/course-access-enrollment/lms-access",
  },
  {
    id: "purchased-access-chooser",
    label: "Purchased Access Chooser",
    route: "/help/course-access-enrollment/purchased-access",
  },
  {
    id: "wrong-course-chooser",
    label: "Wrong Course Chooser",
    route: "/help/course-access-enrollment/wrong-course",
  },
  {
    id: "missing-content-chooser",
    label: "Missing Content Chooser",
    route: "/help/troubleshooting-common-problems/missing-content",
  },
  {
    id: "error-sync-chooser",
    label: "Error Sync Chooser",
    route: "/help/troubleshooting-common-problems/error-sync-integration",
  },
  {
    id: "wrong-account-chooser",
    label: "Wrong Account Chooser",
    route: "/help/sign-in-account/wrong-account",
  },
  {
    id: "lms-link-chooser",
    label: "LMS Link Chooser",
    route: "/help/troubleshooting-common-problems/lms-link-not-working",
  },
  {
    id: "missing-activities-chooser",
    label: "Missing Activities Chooser",
    route: "/help/troubleshooting-common-problems/missing-activities",
  },
  {
    id: "support-page",
    label: "Contact Support",
    route: "/support",
  },
  {
    id: "product-hub-mindtap",
    label: "Product Hub - MindTap",
    route: "/product/mindtap",
  },
  {
    id: "product-hub-webassign",
    label: "Product Hub - WebAssign",
    route: "/product/webassign",
  },
  {
    id: "product-hub-sam",
    label: "Product Hub - SAM",
    route: "/product/sam",
  },
  {
    id: "product-hub-spark",
    label: "Product Hub - Spark",
    route: "/product/spark",
  },
  {
    id: "reset-password-chooser",
    label: "Reset Password Chooser",
    route: "/help/sign-in-account/reset-password",
  },
  {
    id: "reset-password-lms",
    label: "Reset Password LMS",
    route: "/help/sign-in-account/reset-password/lms",
  },
  {
    id: "reset-password-school-nglsync",
    label: "Reset Password School / NGLSync",
    route: "/help/sign-in-account/reset-password/school-nglsync",
  },
  {
    id: "reset-password-not-sure",
    label: "Reset Password Not Sure",
    route: "/help/sign-in-account/reset-password/not-sure",
  },
] as const satisfies ReadonlyArray<PreviewPageDefinition>;

export const defaultPreviewPageId: PreviewPageId = "homepage";

const previewPageById = previewPageDefinitions.reduce<
  Partial<Record<PreviewPageId, PreviewPageDefinition>>
>((definitions, page) => {
  definitions[page.id] = page;
  return definitions;
}, {});

export const canonicalRoutes = {
  homepage: "/",
  searchResults: "/search",
  helpArticle: "/article/:slug",
  signInAccount: "/help/sign-in-account",
  courseAccessEnrollment: "/help/course-access-enrollment",
  troubleshootingCommonProblems: "/help/troubleshooting-common-problems",
  manageAccountChooser: "/help/sign-in-account/manage-account",
  accessCodeChooser: "/help/course-access-enrollment/access-code",
  courseKeyChooser: "/help/course-access-enrollment/course-key",
  joinEnrollChooser: "/help/course-access-enrollment/join-or-enroll",
  lmsAccessChooser: "/help/course-access-enrollment/lms-access",
  purchasedAccessChooser: "/help/course-access-enrollment/purchased-access",
  wrongCourseChooser: "/help/course-access-enrollment/wrong-course",
  missingContentChooser: "/help/troubleshooting-common-problems/missing-content",
  errorSyncChooser: "/help/troubleshooting-common-problems/error-sync-integration",
  wrongAccountChooser: "/help/sign-in-account/wrong-account",
  lmsLinkChooser: "/help/troubleshooting-common-problems/lms-link-not-working",
  missingActivitiesChooser: "/help/troubleshooting-common-problems/missing-activities",
  contactSupport: "/support",
  productHub: "/product/:productSlug",
  resetPasswordChooser: "/help/sign-in-account/reset-password",
  resetPasswordLms: "/help/sign-in-account/reset-password/lms",
  resetPasswordSchoolNglsync: "/help/sign-in-account/reset-password/school-nglsync",
  resetPasswordNotSure: "/help/sign-in-account/reset-password/not-sure",
} as const;

export const externalRoutes = {
  cengageAccountReset: "https://account.cengage.com/",
  cengageLogin: "https://login.cengage.com/",
} as const;

const roleFacetLabels: Record<RoleFacet, string> = {
  "higher-ed-student": "Higher Ed Student",
  "higher-ed-instructor": "Higher Ed Instructor",
  "k-12-student": "K–12 Student",
  "k-12-teacher": "K–12 Teacher",
  "lms-administrator": "LMS Administrator",
  "primary-student": "Primary Student",
  "secondary-student": "Secondary Student",
  "institutional-administrator": "Institutional Administrator",
};

const productLabels: Record<ProductSlug, string> = {
  mindtap: "MindTap",
  webassign: "WebAssign",
  sam: "SAM",
  spark: "Spark",
};

const helpDomainLabels: Record<HelpDomainSlug, string> = {
  "sign-in-account": "Sign In & Account Help",
  "course-access-enrollment": "Course Access & Enrollment",
  "troubleshooting-common-problems": "Troubleshooting & Common Problems",
};

const educationSegmentLabels: Record<EducationSegmentFacet, string> = {
  "higher-education": "Higher Education",
  "k-12": "K–12",
  "english-language-learning": "English Language Learning",
};

const signInPathLabels: Record<SignInPathFacet, string> = {
  "cengage-sign-in": "Cengage sign-in",
  "lms-sign-in": "LMS sign-in",
  "school-nglsync": "School / NGLSync",
};

type RoleFilterMapping = {
  educationSegment?: EducationSegmentFacet;
  roleOption: string;
};

const roleFilterMappings: Record<RoleFacet, RoleFilterMapping> = {
  "higher-ed-student": {
    educationSegment: "higher-education",
    roleOption: "Higher Ed Student",
  },
  "higher-ed-instructor": {
    educationSegment: "higher-education",
    roleOption: "Higher Ed Instructor",
  },
  "k-12-student": {
    educationSegment: "k-12",
    roleOption: "K–12 Student",
  },
  "k-12-teacher": {
    educationSegment: "k-12",
    roleOption: "K–12 Teacher",
  },
  "lms-administrator": {
    roleOption: "LMS Administrator",
  },
  "primary-student": {
    educationSegment: "english-language-learning",
    roleOption: "Primary Student",
  },
  "secondary-student": {
    educationSegment: "english-language-learning",
    roleOption: "Secondary Student",
  },
  "institutional-administrator": {
    educationSegment: "english-language-learning",
    roleOption: "Institutional Administrator",
  },
};

export type SearchDiscoveryOptions = {
  educationSegment?: EducationSegmentFacet;
  helpDomain?: HelpDomainSlug;
  product?: ProductSlug;
  query?: string;
  role?: RoleFacet;
  signInPath?: SignInPathFacet;
};

function splitPreviewHash(hash: string) {
  const trimmedHash = hash.replace(/^#/, "");
  const [pageId = "", search = ""] = trimmedHash.split("?");

  return {
    pageId,
    search,
  };
}

function buildPreviewHashSearch(options: SearchDiscoveryOptions) {
  const params = new URLSearchParams();

  if (options.query) {
    params.set("query", options.query);
  }

  if (options.role) {
    params.set("role", options.role);
  }

  if (options.product) {
    params.set("product", options.product);
  }

  if (options.helpDomain) {
    params.set("helpDomain", options.helpDomain);
  }

  if (options.signInPath) {
    params.set("signInPath", options.signInPath);
  }

  if (options.educationSegment) {
    params.set("educationSegment", options.educationSegment);
  }

  const search = params.toString();

  return search ? `?${search}` : "";
}

function buildPreviewHashParams(paramsByKey: Record<string, string | undefined>) {
  const params = new URLSearchParams();

  Object.entries(paramsByKey).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  const search = params.toString();

  return search ? `?${search}` : "";
}

export function previewHash(
  pageId: PreviewPageId,
  searchOptions: SearchDiscoveryOptions = {}
) {
  return `#${pageId}${buildPreviewHashSearch(searchOptions)}`;
}

export function getPreviewPageIdFromHash(hash = window.location.hash): PreviewPageId {
  const { pageId } = splitPreviewHash(hash);

  if (pageId in previewPageById) {
    return pageId as PreviewPageId;
  }

  return defaultPreviewPageId;
}

export function setPreviewPageHash(
  pageId: PreviewPageId,
  searchOptions: SearchDiscoveryOptions = {}
) {
  window.location.hash = previewHash(pageId, searchOptions);
}

export function homepageHref() {
  return previewHash("homepage");
}

export function signInAccountHref() {
  return previewHash("sign-in-account");
}

export function contactSupportHref() {
  return previewHash("support-page");
}

export function getHelpArticleSlugFromHash(
  hash = window.location.hash
): HelpArticleSlug {
  const { pageId, search } = splitPreviewHash(hash);

  if (pageId !== "help-article") {
    return "sign-in";
  }

  const params = new URLSearchParams(search);
  const slug = params.get("article");

  switch (slug) {
    case "forgot-username":
    case "manage-account":
    case "reset-cengage-password":
    case "spark-manage-account":
    case "transfer-or-drop-course":
    case "wrong-product-or-course-in-lms":
    case "grade-sync-problems":
    case "spark-sign-in":
    case "spark-join-course":
    case "spark-course-key-lookup":
    case "spark-no-course-key":
    case "spark-assignments":
    case "spark-view-your-grades":
    case "spark-system-requirements":
    case "spark-dynamic-lessons":
    case "spark-customize-lesson":
    case "spark-present-lesson":
    case "spark-in-class-activity":
    case "spark-create-course":
    case "spark-lti-1-3-course-management":
    case "spark-manage-users":
    case "spark-institutional-settings":
    case "wrong-account":
    case "browser-requirements":
    case "system-requirements":
    case "lms-link-not-working":
    case "sign-in":
      return slug;
    default:
      return "sign-in";
  }
}

export function helpArticleHref(slug: HelpArticleSlug = "sign-in") {
  return `#help-article${buildPreviewHashParams({ article: slug })}`;
}

export function accountHelpTopicHref(
  topic: HelpArticleSlug | "manage-account" = "sign-in"
) {
  switch (topic) {
    case "sign-in":
    case "forgot-username":
    case "manage-account":
      return helpArticleHref(topic);
    case "wrong-account":
      return wrongAccountChooserHref();
    default:
      return undefined;
  }
}

export function courseAccessHelpHref(topic = "course-access-enrollment") {
  if (topic === "course-access-enrollment") {
    return previewHash("course-access-enrollment");
  }

  if (topic === "join-or-enroll") {
    return joinEnrollChooserHref();
  }

  return undefined;
}

export function troubleshootingHelpHref(
  topic:
    | "troubleshooting-common-problems"
    | "sign-in"
    | "browser-requirements"
    | "system-requirements"
    | "lms-link-not-working" = "troubleshooting-common-problems"
) {
  if (topic === "troubleshooting-common-problems") {
    return previewHash("troubleshooting-common-problems");
  }

  if (topic === "lms-link-not-working") {
    return lmsLinkChooserHref();
  }

  if (topic === "sign-in" || topic === "browser-requirements" || topic === "system-requirements") {
    return helpArticleHref(topic);
  }

  return undefined;
}

export function mindTapHelpHref(
  topic:
    | "mindtap-help"
    | "sign-in"
    | "wrong-account"
    | "browser-requirements"
    | "system-requirements"
    | "lms-link-not-working" = "mindtap-help"
) {
  switch (topic) {
    case "sign-in":
    case "browser-requirements":
    case "system-requirements":
    case "lms-link-not-working":
      return helpArticleHref(topic);
    case "wrong-account":
      return wrongAccountChooserHref();
    default:
      return undefined;
  }
}

export function wrongAccountChooserHref() {
  return previewHash("wrong-account-chooser");
}

export function accessCodeChooserHref() {
  return previewHash("access-code-chooser");
}

export function courseKeyChooserHref() {
  return previewHash("course-key-chooser");
}

export function manageAccountChooserHref() {
  return previewHash("manage-account-chooser");
}

export function joinEnrollChooserHref() {
  return previewHash("join-enroll-chooser");
}

export function lmsAccessChooserHref() {
  return previewHash("lms-access-chooser");
}

export function purchasedAccessChooserHref() {
  return previewHash("purchased-access-chooser");
}

export function wrongCourseChooserHref() {
  return previewHash("wrong-course-chooser");
}

export function missingContentChooserHref() {
  return previewHash("missing-content-chooser");
}

export function errorSyncChooserHref() {
  return previewHash("error-sync-chooser");
}

export function lmsLinkChooserHref() {
  return previewHash("lms-link-chooser");
}

export function missingActivitiesChooserHref() {
  return previewHash("missing-activities-chooser");
}

export function lmsSignInIssueHref(issue = "password-help") {
  if (issue === "password-help") {
    return resetPasswordHref("lms");
  }

  return undefined;
}

export function schoolManagedSignInHref(
  option: "school-portal" | "nglsync" | "not-sure" = "school-portal"
) {
  if (option === "not-sure") {
    return resetPasswordHref("not-sure");
  }

  return undefined;
}

export function getSearchDiscoveryOptionsFromHash(
  hash = window.location.hash
): SearchDiscoveryOptions {
  const { pageId, search } = splitPreviewHash(hash);

  if (pageId !== "search-results" || !search) {
    return {};
  }

  const params = new URLSearchParams(search);

  return {
    educationSegment:
      (params.get("educationSegment") as EducationSegmentFacet | null) ?? undefined,
    helpDomain: (params.get("helpDomain") as HelpDomainSlug | null) ?? undefined,
    product: (params.get("product") as ProductSlug | null) ?? undefined,
    query: params.get("query") ?? undefined,
    role: (params.get("role") as RoleFacet | null) ?? undefined,
    signInPath: (params.get("signInPath") as SignInPathFacet | null) ?? undefined,
  };
}

function appendFilterOption(
  filters: RouteDrivenSearchFilters,
  groupTitle: SearchFilterGroupTitle,
  option: string
) {
  const activeOptions = filters[groupTitle] ?? [];

  if (!activeOptions.includes(option)) {
    filters[groupTitle] = [...activeOptions, option];
  }
}

export function getRouteDrivenSearchFilters(
  options: SearchDiscoveryOptions
): RouteDrivenSearchFilters {
  const filters: RouteDrivenSearchFilters = {};

  if (options.role) {
    const roleFilter = roleFilterMappings[options.role];
    appendFilterOption(filters, "Role", roleFilter.roleOption);

    if (!options.educationSegment && roleFilter.educationSegment) {
      appendFilterOption(
        filters,
        "Education segment",
        educationSegmentLabels[roleFilter.educationSegment]
      );
    }
  }

  if (options.product) {
    appendFilterOption(filters, "Product", productLabels[options.product]);
  }

  if (options.signInPath) {
    appendFilterOption(filters, "Sign-in path", signInPathLabels[options.signInPath]);
  }

  if (options.educationSegment) {
    appendFilterOption(
      filters,
      "Education segment",
      educationSegmentLabels[options.educationSegment]
    );
  }

  return filters;
}

export function getSearchResultsContextLabel(options: SearchDiscoveryOptions) {
  if (options.query) {
    return `for "${options.query}"`;
  }

  if (options.helpDomain) {
    return `in ${helpDomainLabels[options.helpDomain]}`;
  }

  if (options.role) {
    return `for ${roleFacetLabels[options.role]}`;
  }

  if (options.product) {
    return `for ${productLabels[options.product]}`;
  }

  if (options.signInPath) {
    return `for ${signInPathLabels[options.signInPath]}`;
  }

  if (options.educationSegment) {
    return `for ${educationSegmentLabels[options.educationSegment]}`;
  }

  return null;
}

export function searchResultsHref(options: SearchDiscoveryOptions = {}) {
  return previewHash("search-results", options);
}

export function browseByRoleHref(role: RoleFacet) {
  return searchResultsHref({ role });
}

export function helpDomainHref(helpDomain: HelpDomainSlug) {
  if (helpDomain === "sign-in-account") {
    return signInAccountHref();
  }

  if (helpDomain === "course-access-enrollment") {
    return previewHash("course-access-enrollment");
  }

  if (helpDomain === "troubleshooting-common-problems") {
    return previewHash("troubleshooting-common-problems");
  }

  return undefined;
}

export function browseByProductHref(product: ProductSlug) {
  switch (product) {
    case "mindtap":
      return previewHash("product-hub-mindtap");
    case "webassign":
      return previewHash("product-hub-webassign");
    case "sam":
      return previewHash("product-hub-sam");
    case "spark":
      return previewHash("product-hub-spark");
    default:
      return undefined;
  }
}

export function resetPasswordHref(branch: ResetPasswordBranch = "chooser") {
  switch (branch) {
    case "cengage-account":
      return externalRoutes.cengageAccountReset;
    case "lms":
      return previewHash("reset-password-lms");
    case "school-nglsync":
      return previewHash("reset-password-school-nglsync");
    case "not-sure":
      return previewHash("reset-password-not-sure");
    case "chooser":
    default:
      return previewHash("reset-password-chooser");
  }
}
