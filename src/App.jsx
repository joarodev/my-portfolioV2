import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyRoutes from "./router";
import LoadingScreen from "./components/ui/LoadingScreen";
import { ProjectsProvider, useProjects } from "./context/ProjectsContext";
import {
  CertificatesProvider,
  useCertificates,
} from "./context/CertificatesContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import TourModal from "./components/ui/Tour/TourModal";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "./components/ui/Tour/tour.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProjectsProvider>
          <CertificatesProvider>
            <AppContent />
          </CertificatesProvider>
        </ProjectsProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { isLoading: isLoadingProjects } = useProjects();
  const { isLoading: isLoadingCertificates } = useCertificates();
  const [showTourModal, setShowTourModal] = useState(false);
  const { t } = useLanguage();

  const isLoading = isLoadingProjects || isLoadingCertificates;

  useEffect(() => {
    if (!isLoading) {
      const tourCompleted = localStorage.getItem("tourCompleted");
      if (!tourCompleted) {
        setShowTourModal(true);
      }
    }
  }, [isLoading]);

  const desktopSteps = [
    {
      element: "#home-link",
      popover: {
        title: t("tour.home.title"),
        description: t("tour.home.description"),
      },
    },
    {
      element: "#projects-link",
      popover: {
        title: t("tour.projects.title"),
        description: t("tour.projects.description"),
      },
    },
    {
      element: "#contact-link",
      popover: {
        title: t("tour.contact.title"),
        description: t("tour.contact.description"),
      },
    },
    {
      element: "#resume-link",
      popover: {
        title: t("tour.resume.title"),
        description: t("tour.resume.description"),
      },
    },
    {
      element: "#settings-button",
      popover: {
        title: t("tour.settings.title"),
        description: t("tour.settings.description"),
      },
    },
    {
      element: "#social-buttons",
      popover: {
        title: t("tour.social_buttons.title"),
        description: t("tour.social_buttons.description"),
      },
    },
  ];

  const mobileSteps = [
    {
      element: "#mobile-home-link",
      popover: {
        title: t("tour.home.title"),
        description: t("tour.home.description"),
      },
    },
    {
      element: "#mobile-projects-link",
      popover: {
        title: t("tour.projects.title"),
        description: t("tour.projects.description"),
      },
    },
    {
      element: "#mobile-resume-link",
      popover: {
        title: t("tour.resume.title"),
        description: t("tour.resume.description"),
      },
    },
    {
      element: "#mobile-menu-button",
      popover: {
        title: t("tour.settings.title"),
        description: t("tour.settings.description"),
      },
    },
  ];

  const startTour = () => {
    const isMobile = window.innerWidth < 768;
    const steps = isMobile ? mobileSteps : desktopSteps;

    const driverObj = driver({
      animate: true,
      showProgress: true,
      steps: steps,
    });

    driverObj.drive();
  };

  const handleStartTour = () => {
    setShowTourModal(false);
    localStorage.setItem("tourCompleted", "true");
    startTour();
  };

  const handleSkipTour = () => {
    setShowTourModal(false);
    localStorage.setItem("tourCompleted", "true");
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <MyRoutes />
          {showTourModal && (
            <TourModal onStart={handleStartTour} onSkip={handleSkipTour} />
          )}
        </>
      )}
    </>
  );
}

export default App;
