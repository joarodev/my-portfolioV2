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
      <div className="flex h-full w-full flex-col items-center gap-6 mt-8 absolute bottom-0">
        <div id="mobile-settings" className="w-full flex mt-8 justify-center pt-6">
          <SocialMediaButtons />
        </div>
        <Link id="mobile-contact-link" to="/contact" className="text-xl subtitle-text text-fg hover:text-secondary" onClick={onClose}>
          {t("navbar.contact")}
        </Link>
        <div id="mobile-social-buttons absolute bottom-0">
        </div>
        {/* <div className="mt-4 flex flex-col items-center gap-2">
          <button className="w-full text-center px-3 py-1 text-sm hover:bg-primary/20 rounded-md">
            Generic Action 1
          </button>
          <button className="w-full text-center px-3 py-1 text-sm hover:bg-primary/20 rounded-md">
            Generic Action 2
          </button>
        </div> */}
      </div>
      <div className="flex justify-center mb-5 items-center gap-4 absolute bottom-0 w-full">
            <LanguageSelector />
            <ThemeSelector />
          </div>
    </div>
  );
};

export default MobileMenu;
