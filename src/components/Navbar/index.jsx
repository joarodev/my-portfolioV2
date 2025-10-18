import { Link } from "react-router-dom";
import ThemeSelector from "../ui/ThemeSelector";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";
import LanguageSelector from "../ui/LanguageSelector";

const Navbar = () => {

  const { t, language } = useLanguage();
  const [showLangModal, setShowLangModal] = useState(false);
  

  return (
    <nav className="bg-bg2 text-foreground border-b transition-colors duration-500 mask-b-from-30% mask-b-to-95% sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-center gap-4 h-16 items-center">
          <Link to="/" className="hover:font-bold duration-150">
            {t("navbar.home")}
          </Link>
          <Link to="/about" className="hover:font-bold duration-150">
            {t("navbar.about")}
          </Link>
          <Link to="/projects" className="hover:font-bold duration-150">
            {t("navbar.projects")}
          </Link>
          <Link to="/contact" className="hover:font-bold duration-150">
            {t("navbar.contact")}
          </Link>
          <LanguageSelector/>
          <ThemeSelector />
      </div>
    </nav>
  );
};

export default Navbar;
