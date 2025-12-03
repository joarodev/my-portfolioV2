import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoaderV2 from "../Loaders/Loader";
import { useLanguage } from "../../../context/LanguageContext";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const {t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <LoaderV2 text={t("loadingScreen.text")}/>
      )}
    </AnimatePresence>
  );
}
