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
        className="flex items-center gap-2 border border-primary/40 rounded-md px-3 py-1 text-sm hover:bg-primary hover:text-bg transition"
      >
        <img
          src={
            language === "es"
              ? "https://flagcdn.com/w20/es.png"
              : "https://flagcdn.com/w20/us.png"
          }
          alt="flag"
          className="w-5 h-3 rounded-sm"
        />
      </button>
      <LanguageModal
        open={showLangModal}
        onClose={() => setShowLangModal(false)}
      />
    </>
  );
}
