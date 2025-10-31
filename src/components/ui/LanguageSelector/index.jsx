import React, { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import LanguageModal from "./LanguageModal";

export default function LanguageSelector() {
  const { t, language } = useLanguage();
  const [showLangModal, setShowLangModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowLangModal(true)}
        className="flex items-center gap-2 px-3 py-1 text-sm p-2 rounded-md hover:bg-primary/20  hover:text-bg transition"
      >
        <img
          src={
            language === "es"
              ? "https://flagcdn.com/w20/es.png"
              : "https://flagcdn.com/w20/us.png"
          }
          alt="flag"
          className="w-8 h-5"
        />
      </button>
      <LanguageModal
        open={showLangModal}
        onClose={() => setShowLangModal(false)}
      />
    </>
  );
}
