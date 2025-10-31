import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { useState } from "react";
import LanguageSelector from "../LanguageSelector";
import ThemeSelector from "../ThemeSelector";
import MobileMenu from "./MobileMenu";
import { Menu, Settings } from "lucide-react";
import "./navbar.css";
import SocialMediaButtons from "../Buttons/SocialMediaButtons";

const Navbar = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 text-foreground transition-colors duration-500" style={{
          background:
            "linear-gradient(to bottom, var(--color-bg) 78%, transparent)",
        }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          {/* Logo o Título a la izquierda (opcional) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-4">
            <SocialMediaButtons/>
          </div>

          {/* Navegación Principal (Centro) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-4">
            {/* Desktop */}
            <Link to="/" className="hover:font-bold duration-150 hover:text-secondary">
              {t("navbar.home")}
            </Link>
            <Link to="/about" className="hover:font-bold duration-150 hover:text-secondary">
              {t("navbar.about")}
            </Link>
            <Link to="/projects" className="hover:font-bold duration-150 hover:text-secondary">
              {t("navbar.projects")}
            </Link>
            <Link to="/contact" className="hover:font-bold duration-150 hover:text-secondary">
              {t("navbar.contact")}
            </Link>
            <Link to="/resume" className="hover:font-bold duration-150 hover:text-secondary">
              {t("navbar.resume")}
            </Link>
          </div>
          <div className="flex md:hidden flex-1 justify-center items-center gap-4">
            {/* Mobile */}
            <Link to="/" className="hover:font-bold duration-150">
              {t("navbar.home")}
            </Link>
            <Link to="/projects" className="hover:font-bold duration-150">
              {t("navbar.projects")}
            </Link>
            <Link to="/contact" className="hover:font-bold duration-150">
              {t("navbar.contact")}
            </Link>
          </div>

          {/* Configuración (Derecha) - Oculta en móvil */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="dropdown-hover-container">
              <button className="p-2 rounded-md hover:bg-primary/20 transition">
                <Settings size={20} />
              </button>
              <div className="dropdown-hover-menu">
                <div className="flex flex-row justify-center">
                  <LanguageSelector />
                  <ThemeSelector />
                </div>
                <div>
                  <button className="w-full text-left px-3 py-1 text-sm hover:bg-primary/20 rounded-md">Generic Action 1</button>
                  <button className="w-full text-left px-3 py-1 text-sm hover:bg-primary/20 rounded-md">Generic Action 2</button>
                </div>
              </div>
            </div>
          </div>

          {/* Botón Hamburguesa (Móvil) */}
          <div className="md:hidden flex-1 flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
