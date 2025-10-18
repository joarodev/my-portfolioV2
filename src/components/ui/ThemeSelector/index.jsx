import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { Paintbrush } from "lucide-react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../../context/LanguageContext";

const themes = ["light", "dark", "joarod"];

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const {t, language} = useLanguage();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 border border-primary/40 rounded-md px-3 py-1 text-sm hover:bg-primary hover:text-bg transition"
      >
        <Paintbrush size={20} />
      </button>

      {/* Modal */}
      {isOpen && createPortal (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fondo oscuro con blur (cubre TODO el viewport) */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Contenedor modal con animación */}
          <div
            className="relative bg-bg text-foreground rounded-2xl shadow-2xl w-80 p-6 z-50
                       transform opacity-0 scale-95 animate-[fadeZoomIn_0.3s_ease-out_forwards]"
          >
            <h2 className="text-lg font-semibold mb-4 text-center">
              {t("navbar.tema")}
            </h2>
            <ul className="space-y-2">
              {themes.map((t) => (
                <li key={t}>
                  <button
                    onClick={() => handleThemeChange(t)}
                    className={`w-full px-4 py-2 rounded-md text-sm border transition-colors
                      ${
                        theme === t
                          ? "bg-bg2 text-fg font-bold"
                          : "hover:bg-bg2 hover:text-background"
                      }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            {/* Botón cierre */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-sm text-fg hover:text-fg transition-colors"
            >
              ✕
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ThemeSelector;
