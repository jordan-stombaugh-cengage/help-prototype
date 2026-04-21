import type { ReactNode } from "react";
import {
  accessCodeChooserHref,
  contactSupportHref,
  courseAccessHelpHref,
  courseKeyChooserHref,
  helpArticleHref,
  helpDomainHref,
  homepageHref,
  joinEnrollChooserHref,
  lmsAccessChooserHref,
  lmsLinkChooserHref,
  purchasedAccessChooserHref,
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
      "The prototype does not yet include a non-Spark school- or LMS-managed wrong-account destination.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure",
    description:
      "The prototype does not yet include a more specific not-sure path for this account issue.",
    iconKind: "unsure",
  },
];

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
      "The prototype does not yet include a non-Spark school- or LMS-managed account-management destination.",
    iconKind: "lms",
  },
  {
    title: "I'm not sure which account I use",
    description:
      "The prototype does not yet include a more specific not-sure path for this account-management case.",
    iconKind: "unsure",
  },
];

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
      "The prototype does not yet include a more specific next step for an unsure access-code case.",
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
      "A standalone SAM course-key destination is not in the prototype yet.",
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
      "The prototype does not yet include a more specific next step for an unsure course-key case.",
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
      "The prototype does not yet include a more specific next step for an unsure enrollment case.",
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
      "The prototype does not yet include a more specific not-sure path for this LMS-link case.",
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
      "The prototype does not yet include a more specific not-sure path for this LMS-access case.",
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
      "The prototype does not yet include a more specific not-sure path for this course-availability case.",
    iconKind: "unsure",
  },
];

const missingActivitiesOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description:
      "A MindTap missing-activities destination is not in the prototype yet.",
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description:
      "A WebAssign missing-assignments destination is not in the prototype yet.",
    iconKind: "product",
  },
  {
    title: "SAM",
    description:
      "A SAM missing-assignments destination is not in the prototype yet.",
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "A Spark missing-activities destination is not in the prototype yet.",
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "The prototype does not yet include a more specific not-sure path for missing activities.",
    iconKind: "unsure",
  },
];

const missingContentOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description:
      "A MindTap missing-content destination is not in the prototype yet.",
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description:
      "A WebAssign missing-content destination is not in the prototype yet.",
    iconKind: "product",
  },
  {
    title: "SAM",
    description:
      "A SAM missing-content destination is not in the prototype yet.",
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "A Spark missing-content destination is not in the prototype yet.",
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "The prototype does not yet include a more specific not-sure path for missing content.",
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
      "The prototype does not yet include a more specific not-sure path for this sync or integration issue.",
    iconKind: "unsure",
  },
];

export function ManageAccountChooserPage() {
  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Sign In & Account Help", href: signInAccountHref() },
        { label: "Manage account" },
      ]}
      description="Choose the account type or sign-in path you need to manage so we can send you to the right next step."
      heroIcon={<AccountRelationshipIcon />}
      options={manageAccountOptions}
      prompt="Which account are you trying to manage?"
      supportLinks={[
        { href: signInAccountHref(), label: "Back to Sign In & Account Help" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="What kind of account are you trying to manage?"
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
  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Course Access & Enrollment", href: courseAccessHubHref },
        { label: "Purchased access but course is unavailable" },
      ]}
      description="Choose the situation that best matches your access problem so we can send you to the right next step."
      heroIcon={<CourseAccessRelationshipIcon />}
      options={purchasedAccessOptions}
      prompt="What best matches the problem?"
      supportLinks={[
        { href: courseAccessHubHref, label: "Back to Course Access & Enrollment" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="Why can't you open the course you already purchased?"
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
        { label: "Error messages, sync, or integration issues" },
      ]}
      description="Choose the error, sync, or integration problem that best matches your situation so we can send you to the right help."
      heroIcon={<TroubleshootingRelationshipIcon />}
      options={errorSyncOptions}
      prompt="What kind of issue are you seeing?"
      supportLinks={[
        { href: troubleshootingHref, label: "Back to Troubleshooting & Common Problems" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Need another path?"
      title="What kind of sync or integration problem are you having?"
    />
  );
}

export function WrongAccountChooserPage() {
  return (
    <RelationshipRoutingPage
      breadcrumbs={[
        { label: "Help Home", href: homepageHref() },
        { label: "Sign In & Account Help", href: signInAccountHref() },
        { label: "Wrong account" },
      ]}
      description="Choose the situation that sounds most like yours so we can send you to the right next step."
      heroIcon={<AccountRelationshipIcon />}
      options={wrongAccountOptions}
      prompt="Which situation sounds most like yours?"
      supportLinks={[
        { href: signInAccountHref(), label: "Back to Sign In & Account Help" },
        { href: contactSupportHref(), label: "Contact support" },
      ]}
      supportTitle="Still not sure?"
      title="What kind of account problem are you having?"
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
        { label: "Missing activities" },
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
      title="Where are your activities missing?"
    />
  );
}
