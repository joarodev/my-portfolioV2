import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const TourModal = ({ onStart, onSkip }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-bg p-8 mx-4 rounded-lg border-2 border-secondary shadow-xl max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">{t("tour.modal.title")}</h2>
        <p className="mb-6 regular-text">{t("tour.modal.description")}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onStart}
            className="px-6 py-2 border border-primary text-primary rounded-md hover:border-secondary hover:bg-secondary hover:text-bg transition"
          >
            {t("tour.modal.start")}
          </button>
          <button
            onClick={onSkip}
            className="px-6 py-2 bg-transparent border border-fg/30 text-fg rounded-md hover:bg-fg/10 transition"
          >
            {t("tour.modal.skip")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
