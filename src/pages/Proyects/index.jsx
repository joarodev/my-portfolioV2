import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import ListProjects from "./components/ListProjects";
import BgGridTop from "../../components/Backgrounds/BgPointSides";
import BgPoint from "../../components/Backgrounds/BgPoint";
import BgFeadeTop from "../../components/Backgrounds/BgFeadeTop";
import BgPointSides from "../../components/Backgrounds/BgPointSides";
import BgPointSidesV2 from "../../components/Backgrounds/BgPointSidesV2";

export default function ProjectSection() {
  const { t, lenguage } = useLanguage();

  return (
    <section id="projects" className="w-full text-fg">
      <BgFeadeTop>
        <div className="w-full text-fg px-6mx-auto px-6 py-20 flex flex-col sm:items-center z-10 md:max-w-7xl md:max-w-7xl mx-auto">
          <div className="text-center justify-center items-center mb-12 w-full">
            <h2 className="mb-2 title-text text-fg">{t("project.title")}</h2>
            <p className="text-fg text-2xl ">{t("project.subtitle")}</p>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
              <ListProjects />
            </div>
        </div>
      </BgFeadeTop>
    </section>
  );
}
