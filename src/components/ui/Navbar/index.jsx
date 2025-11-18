import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import { useState } from "react";
import LanguageSelector from "../LanguageSelector";
import ThemeSelector from "../ThemeSelector";
import MobileMenu from "./MobileMenu";
import { Menu, Settings } from "lucide-react";
import "./navbar.css";
import SocialMediaButtons from "../Buttons/SocialMediaButtons";
import ButtonAgentAI from "../Buttons/ButtonAgentAI";

const Navbar = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 text-foreground transition-colors duration-500"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg) 78%, transparent)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          <div
            id="social-buttons"
            className="hidden md:flex flex-1 justify-center items-center gap-4"
          >
            <SocialMediaButtons />
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center gap-4">
            <Link
              id="home-link"
              to="/"
              className="hover:font-bold duration-150 hover:text-secondary"
            >
              {t("navbar.home")}
            </Link>
            <Link
              id="projects-link"
              to="/projects"
              className="hover:font-bold duration-150 hover:text-secondary"
            >
              {t("navbar.projects")}
            </Link>
            <Link
              id="contact-link"
              to="/contact"
              className="hover:font-bold duration-150 hover:text-secondary"
            >
              {t("navbar.contact")}
            </Link>
            <Link
              id="resume-link"
              to="/resume"
              className="hover:font-bold duration-150 hover:text-secondary"
            >
              {t("navbar.resume")}
            </Link>
          </div>
          <div className="flex md:hidden flex-1 justify-center items-center gap-4">
            <Link
              id="mobile-home-link"
              to="/"
              className="hover:font-bold duration-150"
            >
              {t("navbar.home")}
            </Link>
            <Link
              id="mobile-projects-link"
              to="/projects"
              className="hover:font-bold duration-150"
            >
              {t("navbar.projects")}
            </Link>
            <Link
              id="mobile-resume-link"
              to="/resume"
              className="hover:font-bold duration-150 hover:text-secondary"
            >
              {t("navbar.resume")}
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <ButtonAgentAI text="Modo Agente" path="/agent" />
            <div className="dropdown-hover-container">
              <button
                id="settings-button"
                className="p-2 rounded-md hover:bg-primary/20 transition"
              >
                <Settings size={20} />
              </button>
              <div className="dropdown-hover-menu">
                <div className="flex flex-row justify-center">
                  <LanguageSelector />
                  <ThemeSelector />
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex-1 flex justify-end">
            <button
              id="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(true)}
            >
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
