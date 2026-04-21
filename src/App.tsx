import "./App.css";
import { useEffect, useState, type ComponentType } from "react";
import { AppShell } from "./app/AppShell";
import {
  defaultPreviewPageId,
  getPreviewPageIdFromHash,
  previewHash,
  setPreviewPageHash,
  type PreviewPageId,
} from "./app/routes";
import { HelpArticlePage } from "./features/help-article/HelpArticlePage";
import { CourseAccessEnrollmentPage } from "./features/course-access-enrollment/CourseAccessEnrollmentPage";
import { Homepage } from "./features/homepage/Homepage";
import { ProductHubMindTapPage } from "./features/product-hub/ProductHubMindTapPage";
import { ProductHubSamPage } from "./features/product-hub/ProductHubSamPage";
import { ProductHubSparkPage } from "./features/product-hub/ProductHubSparkPage";
import { ProductHubWebAssignPage } from "./features/product-hub/ProductHubWebAssignPage";
import {
  AccessCodeChooserPage,
  ErrorSyncChooserPage,
  JoinEnrollChooserPage,
  CourseKeyChooserPage,
  LmsAccessChooserPage,
  LmsLinkChooserPage,
  ManageAccountChooserPage,
  MissingContentChooserPage,
  MissingActivitiesChooserPage,
  PurchasedAccessChooserPage,
  WrongCourseChooserPage,
  WrongAccountChooserPage,
} from "./features/relationship-routing/RelationshipRoutingPages";
import { ResetPasswordLmsPage } from "./features/reset-password/ResetPasswordLmsPage";
import { ResetPasswordChooserPage } from "./features/reset-password/ResetPasswordChooserPage";
import { ResetPasswordNotSurePage } from "./features/reset-password/ResetPasswordNotSurePage";
import { ResetPasswordSchoolNglsyncPage } from "./features/reset-password/ResetPasswordSchoolNglsyncPage";
import { SearchResultsPage } from "./features/search-results/SearchResultsPage";
import { SignInAccountPage } from "./features/sign-in-account/SignInAccountPage";
import { SupportPage } from "./features/support-page/SupportPage";
import { TroubleshootingCommonProblemsPage } from "./features/troubleshooting-common-problems/TroubleshootingCommonProblemsPage";

const previewPageComponents: Record<PreviewPageId, ComponentType> = {
  homepage: Homepage,
  "search-results": SearchResultsPage,
  "help-article": HelpArticlePage,
  "spark-dynamic-lessons-article": HelpArticlePage,
  "spark-customize-lesson-article": HelpArticlePage,
  "spark-present-lesson-article": HelpArticlePage,
  "spark-in-class-activity-article": HelpArticlePage,
  "sign-in-account": SignInAccountPage,
  "course-access-enrollment": CourseAccessEnrollmentPage,
  "troubleshooting-common-problems": TroubleshootingCommonProblemsPage,
  "manage-account-chooser": ManageAccountChooserPage,
  "access-code-chooser": AccessCodeChooserPage,
  "course-key-chooser": CourseKeyChooserPage,
  "join-enroll-chooser": JoinEnrollChooserPage,
  "lms-access-chooser": LmsAccessChooserPage,
  "purchased-access-chooser": PurchasedAccessChooserPage,
  "wrong-course-chooser": WrongCourseChooserPage,
  "missing-content-chooser": MissingContentChooserPage,
  "error-sync-chooser": ErrorSyncChooserPage,
  "wrong-account-chooser": WrongAccountChooserPage,
  "lms-link-chooser": LmsLinkChooserPage,
  "missing-activities-chooser": MissingActivitiesChooserPage,
  "support-page": SupportPage,
  "product-hub-mindtap": ProductHubMindTapPage,
  "product-hub-webassign": ProductHubWebAssignPage,
  "product-hub-sam": ProductHubSamPage,
  "product-hub-spark": ProductHubSparkPage,
  "reset-password-chooser": ResetPasswordChooserPage,
  "reset-password-lms": ResetPasswordLmsPage,
  "reset-password-school-nglsync": ResetPasswordSchoolNglsyncPage,
  "reset-password-not-sure": ResetPasswordNotSurePage,
};

function App() {
  const [activeHash, setActiveHash] = useState(() => {
    if (window.location.hash) {
      return window.location.hash;
    }

    return previewHash(defaultPreviewPageId);
  });

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || previewHash(defaultPreviewPageId));
    };

    window.addEventListener("hashchange", handleHashChange);

    if (!window.location.hash) {
      setPreviewPageHash(defaultPreviewPageId);
    } else {
      setActiveHash(window.location.hash);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const activePageId = getPreviewPageIdFromHash(activeHash);
  const ActivePageComponent =
    previewPageComponents[activePageId] ?? previewPageComponents[defaultPreviewPageId];

  return (
    <AppShell>
      <ActivePageComponent />
    </AppShell>
  );
}

export default App;
