import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import ListProjects from "./components/ListProjects";

export default function ProjectSection() {

  const {t, lenguage} = useLanguage();

  return (
    <section id="projects" className="w-full py-20 bg-bg text-fg px-6 md:max-w-7xl mx-auto">
      <div className="text-center justify-center items-center mb-12 w-full">
        <h2 className="mb-2 title-text">{t("project.title")}</h2>
        <p className="text-fg regular-text">
          {t("project.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <ListProjects />
      </div>
    </section>
  );
}