import type { ReactNode } from "react";
import {
  accessCodeChooserHref,
  browseByProductHref,
  contactSupportHref,
  courseAccessHelpHref,
  courseKeyChooserHref,
  getProductContextFromHash,
  helpArticleHref,
  helpDomainHref,
  homepageHref,
  joinEnrollChooserHref,
  lmsAccessChooserHref,
  lmsLinkChooserHref,
  purchasedAccessChooserHref,
  productHelpDomainHref,
  resetPasswordHref,
  signInAccountHref,
  wrongAccountChooserHref,
  wrongCourseChooserHref,
} from "../../app/routes";
import {
  ContentContainer,
  OptionalLink,
  PageHeroBand,
  SupportFallbackBlock,
} from "../../components/prototype/Primitives";

type ChooserOptionIconKind = "account" | "article" | "lms" | "product" | "unsure";

type ChooserOption = {
  description: string;
  href?: string;
  iconKind: ChooserOptionIconKind;
  title: string;
};

type BreadcrumbItem = {
  href?: string;
  label: string;
};

type RelationshipChooserPageProps = {
  breadcrumbs: BreadcrumbItem[];
  description: string;
  heroIcon: ReactNode;
  options: ChooserOption[];
  prompt: string;
  supportTitle: string;
  supportLinks: Array<{ href: string; label: string }>;
  title: string;
};

function RelationshipChooserOptionCard({
  description,
  href,
  title,
}: ChooserOption) {
  return (
    <OptionalLink className="reset-chooser-card" href={href} staticAs="div" staticClassName="is-static">
      <div className="reset-chooser-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </OptionalLink>
  );
}

function RelationshipRoutingPage({
  breadcrumbs,
  description,
  heroIcon,
  options,
  prompt,
  supportLinks,
  supportTitle,
  title,
}: RelationshipChooserPageProps) {
  return (
    <div className="reset-chooser-page relationship-chooser-page">
      <div className="reset-chooser-breadcrumbs">
        <ContentContainer className="reset-chooser-hero-shell" size="medium">
          <p>
            {breadcrumbs.map((item, index) => (
              <span key={`${item.label}-${index}`} className="relationship-chooser-crumb">
                {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
                {index < breadcrumbs.length - 1 ? <span>/</span> : null}
              </span>
            ))}
          </p>
        </ContentContainer>
      </div>

      <PageHeroBand
        bandClassName="reset-chooser-hero-band"
        containerClassName="reset-chooser-hero-shell"
        containerSize="medium"
        copyClassName="reset-chooser-hero-copy"
        description={description}
        heroClassName="reset-chooser-hero"
        icon={heroIcon}
        iconClassName="reset-chooser-hero-icon"
        title={title}
      />

      <ContentContainer
        as="section"
        className="reset-chooser-section reset-chooser-content"
        size="narrow"
      >
        <h2>{prompt}</h2>

        <div className="reset-chooser-list">
          {options.map((option) => (
            <RelationshipChooserOptionCard key={option.title} {...option} />
          ))}
        </div>
      </ContentContainer>

      <ContentContainer className="reset-chooser-content" size="narrow">
        <SupportFallbackBlock
          className="reset-chooser-support"
          links={supportLinks}
          title={supportTitle}
        />
      </ContentContainer>
    </div>
  );
}

function AccountRelationshipIcon() {
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

function TroubleshootingRelationshipIcon() {
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

function CourseAccessRelationshipIcon() {
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

const courseAccessHubHref =
  courseAccessHelpHref("course-access-enrollment") ??
  helpDomainHref("course-access-enrollment") ??
  homepageHref();
const mindTapHubHref = browseByProductHref("mindtap") ?? homepageHref();
const webAssignHubHref = browseByProductHref("webassign") ?? homepageHref();
const samHubHref = browseByProductHref("sam") ?? homepageHref();
const sparkHubHref = browseByProductHref("spark") ?? homepageHref();
const mindTapSignInAccountHref =
  productHelpDomainHref("mindtap", "sign-in-account") ?? signInAccountHref();
const webAssignSignInAccountHref =
  productHelpDomainHref("webassign", "sign-in-account") ?? signInAccountHref();
const samSignInAccountHref =
  productHelpDomainHref("sam", "sign-in-account") ?? signInAccountHref();
const sparkSignInAccountHref =
  productHelpDomainHref("spark", "sign-in-account") ?? signInAccountHref();
const webAssignCourseAccessHref =
  productHelpDomainHref("webassign", "course-access-enrollment") ?? courseAccessHubHref;
const webAssignTroubleshootingHref =
  productHelpDomainHref("webassign", "troubleshooting-common-problems") ?? webAssignHubHref;
const samTroubleshootingHref =
  productHelpDomainHref("sam", "troubleshooting-common-problems") ?? samHubHref;

const wrongAccountOptions: ChooserOption[] = [
  {
    title: "I bought access with a different Cengage account",
    description: "Use the purchased-access article when the problem is tied to the wrong Cengage account.",
    href: helpArticleHref("wrong-account"),
    iconKind: "article",
  },
  {
    title: "I signed in with the wrong email or username",
    description: "Start with account recovery if you need to confirm which Cengage account you should be using.",
    href: helpArticleHref("forgot-username"),
    iconKind: "account",
  },
  {
    title: "I access Spark through my LMS or school portal",
    description:
      "Use school-managed Spark account help when your teacher, school, or LMS created the Spark account you should be using.",
    href: helpArticleHref("spark-school-managed-wrong-account"),
    iconKind: "lms",
  },
  {
    title: "I access another product through my LMS or school portal",
    description:
      "If your LMS or school portal opens the wrong account, start from your course launch path or contact support with the account email you used.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure",
    description:
      "Check whether the issue is tied to a purchase, a school-managed account, or a different email address before choosing a path.",
    iconKind: "unsure",
  },
];

const mindTapWrongAccountOptions: ChooserOption[] = [
  {
    title: "I bought access with a different Cengage account",
    description:
      "Use the purchased-access article when the problem is tied to the wrong Cengage account for MindTap.",
    href: helpArticleHref("wrong-account"),
    iconKind: "article",
  },
  {
    title: "I signed in with the wrong email or username",
    description:
      "Start with account recovery if you need to confirm which Cengage account you should use for MindTap.",
    href: helpArticleHref("forgot-username"),
    iconKind: "account",
  },
  {
    title: "I access MindTap through my LMS or school portal",
    description:
      "If MindTap opens through your LMS under the wrong account, start from the LMS course link or contact support with your course and account details.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure",
    description:
      "Check whether MindTap access is tied to a purchase, an LMS launch, or a different Cengage account email.",
    iconKind: "unsure",
  },
];

const webAssignWrongAccountOptions: ChooserOption[] = [
  {
    title: "I bought access with a different Cengage account",
    description:
      "Use the purchased-access article when the problem is tied to the wrong Cengage account for WebAssign.",
    href: helpArticleHref("wrong-account"),
    iconKind: "article",
  },
  {
    title: "I signed in with the wrong email or username",
    description:
      "Start with account recovery if you need to confirm which Cengage account you should use for WebAssign.",
    href: helpArticleHref("forgot-username"),
    iconKind: "account",
  },
  {
    title: "I access WebAssign through my LMS",
    description:
      "If WebAssign opens through your LMS under the wrong account, start from the LMS class link or contact support with your class and account details.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure",
    description:
      "Check whether WebAssign access is tied to a purchase, an LMS launch, or a different Cengage account email.",
    iconKind: "unsure",
  },
] as const;

const samWrongAccountOptions: ChooserOption[] = [
  {
    title: "I bought access with a different Cengage account",
    description:
      "Use the purchased-access article when the problem is tied to the wrong Cengage account for SAM.",
    href: helpArticleHref("wrong-account"),
    iconKind: "article",
  },
  {
    title: "I signed in with the wrong email or username",
    description:
      "Start with account recovery if you need to confirm which Cengage account you should use for SAM.",
    href: helpArticleHref("forgot-username"),
    iconKind: "account",
  },
  {
    title: "I access SAM through my LMS",
    description:
      "If SAM opens through your LMS under the wrong account, start from the LMS course link or contact support with your section and account details.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure",
    description:
      "Check whether SAM access is tied to a purchase, an LMS launch, or a different Cengage account email.",
    iconKind: "unsure",
  },
] as const;

const sparkWrongAccountOptions: ChooserOption[] = [
  {
    title: "I need the direct Spark sign-in steps",
    description:
      "Use the Spark sign-in article when you need to sign out and return with the existing Spark account you should be using.",
    href: helpArticleHref("spark-sign-in"),
    iconKind: "article",
  },
  {
    title: "I don't know which Spark username or email to use",
    description:
      "Start with account recovery if you need to confirm the username or email tied to your Spark account.",
    href: helpArticleHref("spark-forgot-username"),
    iconKind: "account",
  },
  {
    title: "My teacher or school created the Spark account",
    description:
      "Use school-managed Spark account help when your teacher, school, or LMS created the Spark account you should be using.",
    href: helpArticleHref("spark-school-managed-wrong-account"),
    iconKind: "lms",
  },
  {
    title: "I'm not sure",
    description:
      "Check whether Spark access starts from direct sign-in, a school portal, or an LMS course link before choosing a path.",
    iconKind: "unsure",
  },
] as const;

const manageAccountOptions: ChooserOption[] = [
  {
    title: "I need to update my Cengage account",
    description: "Use the shared account article to change your profile information, email, or password for a Cengage account.",
    href: helpArticleHref("manage-account"),
    iconKind: "account",
  },
  {
    title: "I need to update my Spark account",
    description: "Use Spark account help when you need to change your Spark profile, preferred language, or sign-in details.",
    href: helpArticleHref("spark-manage-account"),
    iconKind: "product",
  },
  {
    title: "I sign in to Spark through my school or LMS",
    description:
      "Use school-managed Spark account help when your teacher, school, or LMS controls part of the Spark account you need to update.",
    href: helpArticleHref("spark-school-managed-account"),
    iconKind: "lms",
  },
  {
    title: "I sign in to another product through my school or LMS",
    description:
      "If your school or LMS manages your sign-in, account details may need to be changed through that school-managed path.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure which account I use",
    description:
      "Use the account email, course launch path, or school portal you normally use to decide which account-management path applies.",
    iconKind: "unsure",
  },
];

const mindTapManageAccountOptions: ChooserOption[] = [
  {
    title: "I need to update my Cengage account",
    description:
      "Use the shared account article to change the profile, email, or password on the Cengage account you use for MindTap.",
    href: helpArticleHref("manage-account"),
    iconKind: "account",
  },
  {
    title: "I sign in to MindTap through my LMS or school portal",
    description:
      "If your MindTap account details are controlled by your LMS or school, update them through that school-managed sign-in path.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure which account I use",
    description:
      "Use the account email or LMS launch path you normally use for MindTap to decide which account-management path applies.",
    iconKind: "unsure",
  },
];

const webAssignManageAccountOptions: ChooserOption[] = [
  {
    title: "I need to update my Cengage account",
    description:
      "Use the shared account article to change the profile, email, or password on the Cengage account you use for WebAssign.",
    href: helpArticleHref("manage-account"),
    iconKind: "account",
  },
  {
    title: "I sign in to WebAssign through my LMS",
    description:
      "If WebAssign opens from your LMS, account details may need to be managed from the LMS-linked account path.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure which account I use",
    description:
      "Use the account email or LMS class launch you normally use for WebAssign to decide which account-management path applies.",
    iconKind: "unsure",
  },
] as const;

const samManageAccountOptions: ChooserOption[] = [
  {
    title: "I need to update my Cengage account",
    description:
      "Use the shared account article to change the profile, email, or password on the Cengage account you use for SAM.",
    href: helpArticleHref("manage-account"),
    iconKind: "account",
  },
  {
    title: "I sign in to SAM through my LMS",
    description:
      "If SAM opens from your LMS, account details may need to be managed from the LMS-linked account path.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure which account I use",
    description:
      "Use the account email or LMS course launch you normally use for SAM to decide which account-management path applies.",
    iconKind: "unsure",
  },
] as const;

const sparkManageAccountOptions: ChooserOption[] = [
  {
    title: "I need to update my Spark account",
    description:
      "Use the Spark account article to change your name, password, email address, or preferred language.",
    href: helpArticleHref("spark-manage-account"),
    iconKind: "account",
  },
  {
    title: "My teacher or school manages the Spark account",
    description:
      "Use school-managed Spark account help when your teacher, school, or LMS controls part of the account you need to update.",
    href: helpArticleHref("spark-school-managed-account"),
    iconKind: "lms",
  },
  {
    title: "I'm not sure which Spark account I use",
    description:
      "Use the Spark username, school portal, or LMS course link you normally use to decide which account-management path applies.",
    iconKind: "unsure",
  },
] as const;

const webAssignPurchasedAccessOptions: ChooserOption[] = [
  {
    title: "I bought access, but I still need to join the class",
    description:
      "Use the WebAssign class-key article when your payment is complete but you still need to enter the class key or finish class enrollment.",
    href: helpArticleHref("webassign-class-key"),
    iconKind: "article",
  },
  {
    title: "I may have used the wrong account",
    description:
      "Use WebAssign account routing when purchased access is attached to a different Cengage account.",
    href: wrongAccountChooserHref("webassign"),
    iconKind: "account",
  },
  {
    title: "I launch WebAssign from my LMS",
    description:
      "If WebAssign opens from your LMS, start with the LMS course link and check whether the class is linked to the same Cengage account.",
    iconKind: "lms",
  },
  {
    title: "The class is wrong or missing after I sign in",
    description:
      "Use the shared course-availability flow when the wrong WebAssign class appears or the class list is empty after you sign in.",
    href: wrongCourseChooserHref(),
    iconKind: "unsure",
  },
] as const;

const accessCodeOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description:
      "Use the MindTap access-code article when you need to register a bookstore or retailer code on your Cengage account.",
    href: helpArticleHref("mindtap-access-code"),
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description:
      "Use the WebAssign access-code article when you need to redeem a code for your class materials.",
    href: helpArticleHref("webassign-access-code"),
    iconKind: "product",
  },
  {
    title: "SAM",
    description:
      "Use the SAM access-code article when your institution requires a key code to unlock assignments.",
    href: helpArticleHref("sam-access-code"),
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "Use Spark join-course help when your code is tied to a Spark class or self-study experience.",
    href: helpArticleHref("spark-join-course"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "Use the product name on your course, bookstore receipt, or code packaging to choose the closest access-code path.",
    iconKind: "unsure",
  },
];

const courseKeyOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description:
      "Use the MindTap course-key article when you need to register with the course key your instructor gave you.",
    href: helpArticleHref("mindtap-course-key"),
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description:
      "Use the WebAssign class-key article when you need to enroll in the correct class section.",
    href: helpArticleHref("webassign-class-key"),
    iconKind: "product",
  },
  {
    title: "SAM",
    description:
      "SAM access usually depends on a section, key code, or LMS course setup rather than a standalone course-key article.",
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "Use Spark join-course help when you already have a Spark course key.",
    href: helpArticleHref("spark-join-course"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "Use the product name and the wording your instructor gave you to decide whether you have a course key, class key, or access code.",
    iconKind: "unsure",
  },
];

const joinEnrollOptions: ChooserOption[] = [
  {
    title: "I have a course key or class key",
    description: "Use the course-key path when you are joining a class with a key or section code.",
    href: courseKeyChooserHref(),
    iconKind: "article",
  },
  {
    title: "I need to redeem an access code",
    description: "Use the access-code path when your next step depends on a purchased code or bookstore code.",
    href: accessCodeChooserHref(),
    iconKind: "article",
  },
  {
    title: "I am opening the course from my LMS or school platform",
    description: "Use LMS access help when your course launch starts in Canvas, Blackboard, Moodle, or another school-managed platform.",
    href: lmsAccessChooserHref(),
    iconKind: "lms",
  },
  {
    title: "I am joining a Spark course",
    description: "Use Spark-specific join steps when you are enrolling in a Spark class or self-study experience.",
    href: helpArticleHref("spark-join-course"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "Use the product name, access code, course key, or LMS launch path your instructor provided to choose the closest enrollment path.",
    iconKind: "unsure",
  },
];

const lmsLinkOptions: ChooserOption[] = [
  {
    title: "MindTap, WebAssign, or SAM",
    description: "Use the shared LMS-link article when your LMS launch is trying to open MindTap, WebAssign, or SAM.",
    href: helpArticleHref("lms-link-not-working"),
    iconKind: "article",
  },
  {
    title: "Spark",
    description:
      "Use Spark LMS link help when the course link from your LMS or school platform is not opening Spark correctly.",
    href: helpArticleHref("spark-lms-link-not-working"),
    iconKind: "product",
  },
  {
    title: "I'm not sure which product the LMS link opens",
    description:
      "Check the product name shown in the LMS link, module, assignment, or course materials before choosing a product path.",
    iconKind: "unsure",
  },
];

const lmsAccessOptions: ChooserOption[] = [
  {
    title: "I need the sign-in steps for LMS access",
    description:
      "Start with the LMS sign-in branch when your school manages sign-in through your learning management system.",
    href: resetPasswordHref("lms"),
    iconKind: "lms",
  },
  {
    title: "My LMS link is not opening the course content",
    description:
      "Use the LMS-link chooser when the course link, activity link, or deep link is not opening correctly.",
    href: lmsLinkChooserHref(),
    iconKind: "article",
  },
  {
    title: "I need Spark course access from my LMS or school platform",
    description:
      "Use Spark LMS access help when your course launch depends on a Spark link, self-registration guide, or school-managed platform.",
    href: helpArticleHref("spark-lms-access"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "Use the course launch instructions from your instructor or LMS course to decide whether this is a sign-in, link, or product-specific access issue.",
    iconKind: "unsure",
  },
];

const purchasedAccessOptions: ChooserOption[] = [
  {
    title: "I bought access, but I still need to join the course",
    description: "Use this path when your purchase is complete but you have not finished the course-join or enrollment step.",
    href: joinEnrollChooserHref(),
    iconKind: "article",
  },
  {
    title: "I may have used the wrong account",
    description: "Use account-routing help when purchased access is attached to a different sign-in account.",
    href: wrongAccountChooserHref(),
    iconKind: "account",
  },
  {
    title: "I launch the course from my LMS or school platform",
    description: "Use LMS access help when the course should open from your LMS or school-managed experience.",
    href: lmsAccessChooserHref(),
    iconKind: "lms",
  },
  {
    title: "The course is wrong or missing after I sign in",
    description: "Use this path when the issue is tied to the wrong course, the wrong section, or a missing course list.",
    href: wrongCourseChooserHref(),
    iconKind: "unsure",
  },
];

const wrongCourseOptions: ChooserOption[] = [
  {
    title: "I joined the wrong section or need to move to another course",
    description: "Use the transfer-or-drop article when you need the next step for changing sections or leaving the wrong course.",
    href: helpArticleHref("transfer-or-drop-course"),
    iconKind: "article",
  },
  {
    title: "My LMS has the wrong Cengage product or course linked",
    description: "Use LMS troubleshooting when the wrong product or copied course was added to your LMS.",
    href: helpArticleHref("wrong-product-or-course-in-lms"),
    iconKind: "lms",
  },
  {
    title: "I purchased access, but the course still isn't available",
    description: "Use the purchased-access path when the course is missing after payment or code redemption.",
    href: purchasedAccessChooserHref(),
    iconKind: "account",
  },
  {
    title: "I'm not sure",
    description:
      "Use the course name, section, LMS link, and purchase state to decide which course-availability path is closest.",
    iconKind: "unsure",
  },
];

const missingActivitiesOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description:
      "Use the MindTap troubleshooting article when activities are missing from the learning path or assignment list.",
    href: helpArticleHref("mindtap-missing-activities"),
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description:
      "For WebAssign, missing work often depends on class enrollment, scheduling, or assignment availability.",
    href: webAssignTroubleshootingHref,
    iconKind: "product",
  },
  {
    title: "SAM",
    description:
      "For SAM, missing work often depends on the section, assignment list, project setup, or LMS launch context.",
    href: samTroubleshootingHref,
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "Use the Spark troubleshooting article when assignments or activities are missing from the course.",
    href: helpArticleHref("spark-missing-activities"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "Use the product name shown in your course or assignment list before choosing a missing-activities path.",
    href: helpDomainHref("troubleshooting-common-problems"),
    iconKind: "unsure",
  },
];

const browserSystemOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description:
      "Use the shared Cengage browser requirements article for MindTap browser support, cookies, pop-ups, and related setup checks.",
    href: helpArticleHref("browser-requirements"),
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description:
      "Use the shared Cengage browser requirements article for WebAssign browser support, cookies, pop-ups, and related setup checks.",
    href: helpArticleHref("browser-requirements"),
    iconKind: "product",
  },
  {
    title: "SAM",
    description:
      "Use the shared Cengage system requirements article for SAM browser, workstation, and compatibility checks.",
    href: helpArticleHref("system-requirements"),
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "Use Spark system requirements when browser or device support depends on the Spark platform or app.",
    href: helpArticleHref("spark-system-requirements"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "Use the troubleshooting hub if you need help identifying the product before choosing browser or device setup steps.",
    href: helpDomainHref("troubleshooting-common-problems"),
    iconKind: "unsure",
  },
];

const missingContentOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description: "Missing eBooks, readings, or course materials in a MindTap course.",
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description:
      "Missing textbook resources, assignments, or course materials in a WebAssign class.",
    iconKind: "product",
  },
  {
    title: "SAM",
    description: "Missing projects, eBooks, or course resources in a SAM section.",
    iconKind: "product",
  },
  {
    title: "Spark",
    description: "Missing eBooks, resources, or course materials in a Spark course.",
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description: "Missing content or course materials, but the product is unclear.",
    iconKind: "unsure",
  },
];

const errorSyncOptions: ChooserOption[] = [
  {
    title: "Grades or assignments are not syncing with my LMS",
    description: "Use the grade-sync article when scores, assignments, or gradebook data are not syncing to your LMS.",
    href: helpArticleHref("grade-sync-problems"),
    iconKind: "article",
  },
  {
    title: "The wrong product or course is linked in my LMS",
    description: "Use LMS troubleshooting when the issue started because the wrong product, course copy, or course link was added.",
    href: helpArticleHref("wrong-product-or-course-in-lms"),
    iconKind: "lms",
  },
  {
    title: "I need Spark school or institutional settings help",
    description: "Use Spark institutional help when the issue depends on school settings, user-management permissions, or grade-export settings.",
    href: helpArticleHref("spark-institutional-settings"),
    iconKind: "product",
  },
  {
    title: "I need Spark LMS setup or course-management help",
    description: "Use Spark LMS course-management help when the next step depends on LTI 1.3 setup or LMS-linked Spark workflows.",
    href: helpArticleHref("spark-lti-1-3-course-management"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "Use the role and system involved: student grade viewing, instructor grade sync, wrong LMS course, or Spark setup.",
    href: helpDomainHref("troubleshooting-common-problems"),
    iconKind: "unsure",
  },
];

export function ManageAccountChooserPage() {
  const productContext = getProductContextFromHash();
  const breadcrumbs = productContext === "mindtap"
    ? [
        { label: "Help Home", href: homepageHref() },
        { label: "MindTap", href: mindTapHubHref },
        { label: "Sign In & Account Help", href: mindTapSignInAccountHref },
        { label: "Manage account" },
      ]
    : productContext === "webassign"
      ? [
        { label: "Help Home", href: homepageHref() },
        { label: "WebAssign", href: webAssignHubHref },
        { label: "Sign In & Account Help", href: webAssignSignInAccountHref },
        { label: "Manage account" },
      ]
    : productContext === "sam"
      ? [
          { label: "Help Home", href: homepageHref() },
          { label: "SAM", href: samHubHref },
          { label: "Sign In & Account Help", href: samSignInAccountHref },
          { label: "Manage account" },
        ]
    : productContext === "spark"
      ? [
          { label: "Help Home", href: homepageHref() },
          { label: "Spark", href: sparkHubHref },
          { label: "Sign In & Account Help", href: sparkSignInAccountHref },
          { label: "Manage account" },
        ]
    : [
        { label: "Help Home", href: homepageHref() },
        { label: "Sign In & Account Help", href: signInAccountHref() },
        { label: "Manage account" },
      ];
  const description = productContext === "mindtap"
    ? "Choose the account type tied to your MindTap access so we can send you to the most accurate next step without widening into other product flows."
    : productContext === "webassign"
      ? "Choose the account type tied to your WebAssign access so we can send you to the most accurate next step without widening into other product flows."
      : productContext === "sam"
        ? "Choose the account type tied to your SAM access so we can send you to the most accurate next step without widening into other product flows."
        : productContext === "spark"
          ? "Choose the Spark account path that best matches your situation so we can send you to the most accurate next step without widening into non-Spark account flows."
    : "Choose the account type or sign-in path you need to manage so we can send you to the right next step.";
  const options =
    productContext === "mindtap"
      ? mindTapManageAccountOptions
      : productContext === "webassign"
        ? webAssignManageAccountOptions
        : productContext === "sam"
          ? samManageAccountOptions
          : productContext === "spark"
            ? sparkManageAccountOptions
      : manageAccountOptions;
  const prompt = productContext === "mindtap"
    ? "Which MindTap account are you trying to manage?"
    : productContext === "webassign"
      ? "Which WebAssign account are you trying to manage?"
      : productContext === "sam"
        ? "Which SAM account are you trying to manage?"
        : productContext === "spark"
          ? "Which Spark account are you trying to manage?"
    : "Which account are you trying to manage?";
  const supportLinks = productContext === "mindtap"
    ? [
        { href: mindTapSignInAccountHref, label: "Back to MindTap Sign In & Account Help" },
        { href: contactSupportHref(), label: "Contact support" },
      ]
    : productContext === "webassign"
      ? [
          { href: webAssignSignInAccountHref, label: "Back to WebAssign Sign In & Account Help" },
          { href: contactSupportHref(), label: "Contact support" },
        ]
      : productContext === "sam"
        ? [
            { href: samSignInAccountHref, label: "Back to SAM Sign In & Account Help" },
            { href: contactSupportHref(), label: "Contact support" },
          ]
        : productContext === "spark"
          ? [
              { href: sparkSignInAccountHref, label: "Back to Spark Sign In & Account Help" },
              { href: contactSupportHref(), label: "Contact support" },
            ]
    : [
        { href: signInAccountHref(), label: "Back to Sign In & Account Help" },
        { href: contactSupportHref(), label: "Contact support" },
      ];
  const title = productContext === "mindtap"
    ? "Which MindTap account are you trying to manage?"
    : productContext === "webassign"
      ? "Which WebAssign account are you trying to manage?"
      : productContext === "sam"
        ? "Which SAM account are you trying to manage?"
        : productContext === "spark"
          ? "Which Spark account are you trying to manage?"
    : "What kind of account are you trying to manage?";

  return (
    <RelationshipRoutingPage
      breadcrumbs={breadcrumbs}
      description={description}
      heroIcon={<AccountRelationshipIcon />}
      options={options}
      prompt={prompt}
      supportLinks={supportLinks}
      supportTitle="Need another path?"
      title={title}
    />
  );
}

export function AccessCodeChooserPage() {
  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Course Access & Enrollment", href: courseAccessHubHref },
        { label: "Redeem access code" },
      ]}
      description="Choose the product or course experience linked to your code so we can send you to the right access help."
      heroIcon={<CourseAccessRelationshipIcon />}
      options={accessCodeOptions}
      prompt="Which product are you trying to access?"
      supportLinks={[
        { href: courseAccessHubHref, label: "Back to Course Access & Enrollment" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="What kind of access code do you have?"
    />
  );
}

export function CourseKeyChooserPage() {
  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Course Access & Enrollment", href: courseAccessHubHref },
        { label: "Enter course key" },
      ]}
      description="Choose the product or course experience that uses the key so we can send you to the right next step."
      heroIcon={<CourseAccessRelationshipIcon />}
      options={courseKeyOptions}
      prompt="Which product are you using?"
      supportLinks={[
        { href: courseAccessHubHref, label: "Back to Course Access & Enrollment" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="Where will you enter your course key?"
    />
  );
}

export function JoinEnrollChooserPage() {
  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Course Access & Enrollment", href: courseAccessHubHref },
        { label: "Join or enroll in a course" },
      ]}
      description="Choose how you are trying to get into your course so we can send you to the right enrollment or access step."
      heroIcon={<CourseAccessRelationshipIcon />}
      options={joinEnrollOptions}
      prompt="How are you trying to join the course?"
      supportLinks={[
        { href: courseAccessHubHref, label: "Back to Course Access & Enrollment" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="How are you trying to join or enroll?"
    />
  );
}

export function LmsAccessChooserPage() {
  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Course Access & Enrollment", href: courseAccessHubHref },
        { label: "Access your course through LMS" },
      ]}
      description="Choose the situation that best matches your LMS access problem so we can send you to the right help."
      heroIcon={<CourseAccessRelationshipIcon />}
      options={lmsAccessOptions}
      prompt="What do you need help with?"
      supportLinks={[
        { href: courseAccessHubHref, label: "Back to Course Access & Enrollment" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="How are you trying to open your course from your LMS?"
    />
  );
}

export function PurchasedAccessChooserPage() {
  const productContext = getProductContextFromHash();
  const breadcrumbs = productContext === "webassign"
    ? [
        { label: "Help Home", href: homepageHref() },
        { label: "WebAssign", href: webAssignHubHref },
        { label: "Course Access & Enrollment", href: webAssignCourseAccessHref },
        { label: "Purchased access but course is unavailable" },
      ]
    : [
        { label: "Help Home", href: homepageHref() },
        { label: "Course Access & Enrollment", href: courseAccessHubHref },
        { label: "Purchased access but course is unavailable" },
      ];
  const description = productContext === "webassign"
    ? "Choose the WebAssign access situation that best matches your problem so we can send you to the most accurate next step without widening into unrelated product flows."
    : "Choose the situation that best matches your access problem so we can send you to the right next step.";
  const options = productContext === "webassign"
    ? webAssignPurchasedAccessOptions
    : purchasedAccessOptions;
  const prompt = productContext === "webassign"
    ? "What best matches the WebAssign access problem?"
    : "What best matches the problem?";
  const supportLinks = productContext === "webassign"
    ? [
        { href: webAssignCourseAccessHref, label: "Back to WebAssign Course Access & Enrollment" },
        { href: contactSupportHref(), label: "Contact support" },
      ]
    : [
        { href: courseAccessHubHref, label: "Back to Course Access & Enrollment" },
        { href: contactSupportHref(), label: "Contact support" },
      ];
  const title = productContext === "webassign"
    ? "Why can't you open the WebAssign class you already purchased?"
    : "Why can't you open the course you already purchased?";

  return (
    <RelationshipRoutingPage
      breadcrumbs={breadcrumbs}
      description={description}
      heroIcon={<CourseAccessRelationshipIcon />}
      options={options}
      prompt={prompt}
      supportLinks={supportLinks}
      supportTitle="Need another path?"
      title={title}
    />
  );
}

export function WrongCourseChooserPage() {
  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Course Access & Enrollment", href: courseAccessHubHref },
        { label: "Wrong course or missing course" },
      ]}
      description="Choose the course situation that sounds most like yours so we can send you to the right next step."
      heroIcon={<CourseAccessRelationshipIcon />}
      options={wrongCourseOptions}
      prompt="Which course problem are you seeing?"
      supportLinks={[
        { href: courseAccessHubHref, label: "Back to Course Access & Enrollment" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="What is wrong with the course you see?"
    />
  );
}

export function BrowserSystemChooserPage() {
  const troubleshootingHref = helpDomainHref("troubleshooting-common-problems") ?? homepageHref();

  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Troubleshooting & Common Problems", href: troubleshootingHref },
        { label: "Browser or device setup" },
      ]}
      description="Choose the product you are using so browser, device, and system requirements route to the right product guidance."
      heroIcon={<TroubleshootingRelationshipIcon />}
      options={browserSystemOptions}
      prompt="Which product are you using?"
      supportLinks={[
        { href: troubleshootingHref, label: "Back to Troubleshooting & Common Problems" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need broader troubleshooting help?"
      title="Browser or device setup"
    />
  );
}

export function MissingContentChooserPage() {
  const troubleshootingHref = helpDomainHref("troubleshooting-common-problems") ?? homepageHref();

  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Troubleshooting & Common Problems", href: troubleshootingHref },
        { label: "Missing content or course materials" },
      ]}
      description="Choose the product or course experience where readings, resources, or course materials are missing."
      heroIcon={<TroubleshootingRelationshipIcon />}
      options={missingContentOptions}
      prompt="Which product are you using?"
      supportLinks={[
        { href: troubleshootingHref, label: "Back to Troubleshooting & Common Problems" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need broader troubleshooting help?"
      title="Where is the content missing?"
    />
  );
}

export function ErrorSyncChooserPage() {
  const troubleshootingHref = helpDomainHref("troubleshooting-common-problems") ?? homepageHref();

  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Troubleshooting & Common Problems", href: troubleshootingHref },
        { label: "Grades, sync, or LMS integration issue" },
      ]}
      description="Choose the instructor or administrator grade-sync, LMS product/course, or Spark setup problem that best matches your situation."
      heroIcon={<TroubleshootingRelationshipIcon />}
      options={errorSyncOptions}
      prompt="Which grades, sync, or LMS integration issue are you seeing?"
      supportLinks={[
        { href: troubleshootingHref, label: "Back to Troubleshooting & Common Problems" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="What kind of grades, sync, or LMS integration problem are you having?"
    />
  );
}

export function WrongAccountChooserPage() {
  const productContext = getProductContextFromHash();
  const breadcrumbs = productContext === "mindtap"
    ? [
        { label: "Help Home", href: homepageHref() },
        { label: "MindTap", href: mindTapHubHref },
        { label: "Sign In & Account Help", href: mindTapSignInAccountHref },
        { label: "Wrong account" },
      ]
    : productContext === "webassign"
      ? [
        { label: "Help Home", href: homepageHref() },
        { label: "WebAssign", href: webAssignHubHref },
        { label: "Sign In & Account Help", href: webAssignSignInAccountHref },
        { label: "Wrong account" },
      ]
    : productContext === "sam"
      ? [
          { label: "Help Home", href: homepageHref() },
          { label: "SAM", href: samHubHref },
          { label: "Sign In & Account Help", href: samSignInAccountHref },
          { label: "Wrong account" },
        ]
    : productContext === "spark"
      ? [
          { label: "Help Home", href: homepageHref() },
          { label: "Spark", href: sparkHubHref },
          { label: "Sign In & Account Help", href: sparkSignInAccountHref },
          { label: "Wrong account" },
        ]
    : [
        { label: "Help Home", href: homepageHref() },
        { label: "Sign In & Account Help", href: signInAccountHref() },
        { label: "Wrong account" },
      ];
  const description = productContext === "mindtap"
    ? "Choose the MindTap account situation that sounds most like yours so we can send you to the most accurate next step without widening into other product flows."
    : productContext === "webassign"
      ? "Choose the WebAssign account situation that sounds most like yours so we can send you to the most accurate next step without widening into other product flows."
      : productContext === "sam"
        ? "Choose the SAM account situation that sounds most like yours so we can send you to the most accurate next step without widening into other product flows."
        : productContext === "spark"
          ? "Choose the Spark account situation that sounds most like yours so we can send you to the most accurate next step without widening into non-Spark account flows."
    : "Choose the situation that sounds most like yours so we can send you to the right next step.";
  const options =
    productContext === "mindtap"
      ? mindTapWrongAccountOptions
      : productContext === "webassign"
        ? webAssignWrongAccountOptions
        : productContext === "sam"
          ? samWrongAccountOptions
          : productContext === "spark"
            ? sparkWrongAccountOptions
      : wrongAccountOptions;
  const prompt = productContext === "mindtap"
    ? "Which MindTap account situation sounds most like yours?"
    : productContext === "webassign"
      ? "Which WebAssign account situation sounds most like yours?"
      : productContext === "sam"
        ? "Which SAM account situation sounds most like yours?"
        : productContext === "spark"
          ? "Which Spark account situation sounds most like yours?"
    : "Which situation sounds most like yours?";
  const supportLinks = productContext === "mindtap"
    ? [
        { href: mindTapSignInAccountHref, label: "Back to MindTap Sign In & Account Help" },
        { href: contactSupportHref(), label: "Contact support" },
      ]
    : productContext === "webassign"
      ? [
          { href: webAssignSignInAccountHref, label: "Back to WebAssign Sign In & Account Help" },
          { href: contactSupportHref(), label: "Contact support" },
        ]
      : productContext === "sam"
        ? [
            { href: samSignInAccountHref, label: "Back to SAM Sign In & Account Help" },
            { href: contactSupportHref(), label: "Contact support" },
          ]
        : productContext === "spark"
          ? [
              { href: sparkSignInAccountHref, label: "Back to Spark Sign In & Account Help" },
              { href: contactSupportHref(), label: "Contact support" },
            ]
    : [
        { href: signInAccountHref(), label: "Back to Sign In & Account Help" },
        { href: contactSupportHref(), label: "Contact support" },
      ];
  const title = productContext === "mindtap"
    ? "What kind of MindTap account problem are you having?"
    : productContext === "webassign"
      ? "What kind of WebAssign account problem are you having?"
      : productContext === "sam"
        ? "What kind of SAM account problem are you having?"
        : productContext === "spark"
          ? "What kind of Spark account problem are you having?"
    : "What kind of account problem are you having?";

  return (
    <RelationshipRoutingPage
      breadcrumbs={breadcrumbs}
      description={description}
      heroIcon={<AccountRelationshipIcon />}
      options={options}
      prompt={prompt}
      supportLinks={supportLinks}
      supportTitle="Still not sure?"
      title={title}
    />
  );
}

export function LmsLinkChooserPage() {
  const troubleshootingHref = helpDomainHref("troubleshooting-common-problems") ?? homepageHref();

  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        {
          label: "Troubleshooting & Common Problems",
          href: troubleshootingHref,
        },
        { label: "LMS link not working" },
      ]}
      description="Choose the product your LMS link is supposed to open so we can send you to the right help."
      heroIcon={<TroubleshootingRelationshipIcon />}
      options={lmsLinkOptions}
      prompt="Which product are you trying to open from your LMS?"
      supportLinks={[
        {
          href: troubleshootingHref,
          label: "Back to Troubleshooting & Common Problems",
        },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="What are you trying to open from your LMS?"
    />
  );
}

export function MissingActivitiesChooserPage() {
  const troubleshootingHref = helpDomainHref("troubleshooting-common-problems") ?? homepageHref();

  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        {
          label: "Troubleshooting & Common Problems",
          href: troubleshootingHref,
        },
        { label: "Missing activities or assignments" },
      ]}
      description="Choose the product or course experience where the activities or assignments are missing."
      heroIcon={<TroubleshootingRelationshipIcon />}
      options={missingActivitiesOptions}
      prompt="Which product are you using?"
      supportLinks={[
        {
          href: troubleshootingHref,
          label: "Back to Troubleshooting & Common Problems",
        },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need broader troubleshooting help?"
      title="Where are your activities or assignments missing?"
    />
  );
}
