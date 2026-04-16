import type { ReactNode } from "react";
import {
  browseByProductHref,
  contactSupportHref,
  courseAccessHelpHref,
  helpArticleHref,
  helpDomainHref,
  homepageHref,
  lmsLinkChooserHref,
  resetPasswordHref,
  signInAccountHref,
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

function RelationshipChooserOptionIcon({ kind }: { kind: ChooserOptionIconKind }) {
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

  if (kind === "article") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="5"
          y="4.5"
          width="14"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8.5 9h7M8.5 12h7M8.5 15h4.5"
          stroke="currentColor"
          strokeLinecap="round"
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

  if (kind === "product") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 4.5 18.5 8v8L12 19.5 5.5 16V8L12 4.5Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M12 12.1 5.5 8M12 12.1 18.5 8M12 12.1V19.4"
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

function RelationshipChooserOptionCard({
  description,
  href,
  iconKind,
  title,
}: ChooserOption) {
  return (
    <OptionalLink className="reset-chooser-card" href={href} staticAs="div" staticClassName="is-static">
      <div className={`reset-chooser-card-icon reset-chooser-card-icon--${iconKind}`}>
        <RelationshipChooserOptionIcon kind={iconKind} />
      </div>

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
    title: "I usually access Cengage through my LMS or school portal",
    description: "Go back to the shared account hub when the next step depends on your LMS or school-managed sign-in method.",
    href: signInAccountHref(),
    iconKind: "lms",
  },
  {
    title: "I'm not sure",
    description: "Start from the shared Sign In & Account Help hub and choose the account pathway that matches your sign-in method.",
    href: signInAccountHref(),
    iconKind: "unsure",
  },
];

const accessCodeOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description: "Use MindTap help when your access code unlocks a MindTap course or eBook.",
    href: browseByProductHref("mindtap"),
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description: "Use WebAssign help when your code is for WebAssign homework or class access.",
    href: browseByProductHref("webassign"),
    iconKind: "product",
  },
  {
    title: "SAM",
    description: "Use SAM help when your access code is for SAM coursework or section access.",
    href: browseByProductHref("sam"),
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "Use Spark help when you are joining a Spark course or self-study experience instead of a higher-ed access-code flow.",
    href: browseByProductHref("spark"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description: "Go back to the shared Course Access & Enrollment hub if you need broader access help first.",
    href: courseAccessHubHref,
    iconKind: "unsure",
  },
];

const courseKeyOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description: "Use MindTap help when you need the next step for a MindTap course key.",
    href: browseByProductHref("mindtap"),
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description: "Use WebAssign help when your class key or enrollment key is for WebAssign.",
    href: browseByProductHref("webassign"),
    iconKind: "product",
  },
  {
    title: "SAM",
    description: "Use SAM help when your key or section code belongs to a SAM course.",
    href: browseByProductHref("sam"),
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "Use Spark help when your course key is for a Spark self-study or teacher-led course experience.",
    href: browseByProductHref("spark"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description: "Go back to the shared Course Access & Enrollment hub if you need a broader access path.",
    href: courseAccessHubHref,
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
      "Go to Spark product help when the broken LMS link depends on Spark course setup, assignments, or school-managed access.",
    href: browseByProductHref("spark"),
    iconKind: "product",
  },
  {
    title: "I'm not sure which product the LMS link opens",
    description: "Start from the shared troubleshooting hub if you need to identify the product or troubleshoot more broadly first.",
    href: helpDomainHref("troubleshooting-common-problems"),
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
      "Go to Spark product help when access depends on Spark course setup, school-managed access, or ELT workflows.",
    href: browseByProductHref("spark"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description:
      "Go back to the shared Course Access & Enrollment hub if you need to identify the right access path first.",
    href: courseAccessHubHref,
    iconKind: "unsure",
  },
];

const missingActivitiesOptions: ChooserOption[] = [
  {
    title: "A legacy MyELT course",
    description:
      "Use the legacy MyELT article only when the missing assignments problem is happening in an older MyELT course.",
    href: helpArticleHref("missing-activities-or-assignments"),
    iconKind: "article",
  },
  {
    title: "MindTap",
    description: "Use MindTap product help when the missing work depends on the MindTap course experience.",
    href: browseByProductHref("mindtap"),
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description: "Use WebAssign product help when assignments are missing in a WebAssign class.",
    href: browseByProductHref("webassign"),
    iconKind: "product",
  },
  {
    title: "SAM",
    description: "Use SAM product help when the missing work depends on SAM assignments or sections.",
    href: browseByProductHref("sam"),
    iconKind: "product",
  },
  {
    title: "Spark",
    description:
      "Use Spark product help when the missing activities depend on the Spark course experience.",
    href: browseByProductHref("spark"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description: "Return to the shared troubleshooting hub if you need to identify the product before choosing the next step.",
    href: helpDomainHref("troubleshooting-common-problems"),
    iconKind: "unsure",
  },
];

const missingContentOptions: ChooserOption[] = [
  {
    title: "MindTap",
    description: "Use MindTap help when readings, resources, or course materials are missing in MindTap.",
    href: browseByProductHref("mindtap"),
    iconKind: "product",
  },
  {
    title: "WebAssign",
    description: "Use WebAssign help when textbook content or course materials are missing in WebAssign.",
    href: browseByProductHref("webassign"),
    iconKind: "product",
  },
  {
    title: "SAM",
    description: "Use SAM help when project files, readings, or course materials are missing in SAM.",
    href: browseByProductHref("sam"),
    iconKind: "product",
  },
  {
    title: "Spark",
    description: "Use Spark help when eBooks, media, or course materials are missing in Spark.",
    href: browseByProductHref("spark"),
    iconKind: "product",
  },
  {
    title: "I'm not sure",
    description: "Return to the shared troubleshooting hub if you need broader troubleshooting help first.",
    href: helpDomainHref("troubleshooting-common-problems"),
    iconKind: "unsure",
  },
];

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
