import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { X } from "lucide-react";

export default function LanguageModal({ open, onClose }) {
  const { language, changeLanguage } = useLanguage();
  const { t, language: currentLanguage } = useLanguage();

  if (typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-bg text-fg rounded-2xl shadow-xl p-6 w-[90%] max-w-sm relative"
          >
            {/* Cerrar */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-fg/70 hover:text-primary transition"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold text-center mb-6">
              {t("navbar.language")}
            </h2>

            <div className="flex justify-around">
              <button
                onClick={() => {
                  changeLanguage("es");
                  onClose();
                }}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg transition ${
                  language === "es"
                    ? "bg-primary/20 border border-primary"
                    : "hover:bg-fg/10"
                }`}
              >
                <img
                  src="https://flagcdn.com/w40/es.png"
                  alt="Español"
                  className="rounded shadow"
                />
                <span className="text-sm font-medium">Español</span>
              </button>

              <button
                onClick={() => {
                  changeLanguage("en");
                  onClose();
                }}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg transition ${
                  language === "en"
                    ? "bg-primary/20 border border-primary"
                    : "hover:bg-fg/10"
                }`}
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="English"
                  className="rounded shadow"
                />
                <span className="text-sm font-medium">English</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
