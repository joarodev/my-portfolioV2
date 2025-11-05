import React, { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "./tour.css";
import { useLanguage } from "../../../context/LanguageContext";

const Tour = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const driverObj = driver({
      animate: true,
      showProgress: true,
      steps: [
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
      ],
    });

    const startTour = () => {
      driverObj.drive();
    };

    const tourButton = document.getElementById("start-tour-button");
    if (tourButton) {
      tourButton.addEventListener("click", startTour);
    }

    return () => {
      if (tourButton) {
        tourButton.removeEventListener("click", startTour);
      }
    };
  }, [t]);

  return null;
};

export default Tour;
