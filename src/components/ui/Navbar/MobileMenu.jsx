import { Link } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import LanguageSelector from "../LanguageSelector";
import ThemeSelector from "../ThemeSelector";
import { X } from "lucide-react";
import SocialMediaButtons from "../Buttons/SocialMediaButtons";

const MobileMenu = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-bg z-50 md:hidden">
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      <div className="flex flex-col items-center gap-6 mt-8">
        <div className="w-full flex justify-center pt-6">
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ThemeSelector />
          </div>
        </div>
        <Link to="/contact" className="text-xl" onClick={onClose}>
          {t("navbar.contact")}
        </Link>
        <SocialMediaButtons />
        <div className="mt-4 flex flex-col items-center gap-2">
          <button className="w-full text-center px-3 py-1 text-sm hover:bg-primary/20 rounded-md">
            Generic Action 1
          </button>
          <button className="w-full text-center px-3 py-1 text-sm hover:bg-primary/20 rounded-md">
            Generic Action 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
