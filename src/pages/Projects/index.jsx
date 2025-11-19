import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import ListProjects from "./components/ListProjects";
import BgFeadeTop from "../../components/Backgrounds/BgFeadeTop";
import Filter from "./components/Filter";
import { useProjects } from "../../context/ProjectsContext";
import { SlidersHorizontal } from "lucide-react";

export default function ProjectSection() {
  const { t } = useLanguage();
  const { projects } = useProjects();
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    searchTerm: "",
    technology: null,
    type: null,
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <section id="projects" className="w-full text-fg">
        <BgFeadeTop>
          <div className="w-full text-fg px-6 mx-auto py-20 flex flex-col sm:items-center z-10 md:max-w-7xl">
            <div className="text-center justify-center items-center mb-6 w-full">
              <h2 className="mb-2 title-text text-fg">{t("project.title")}</h2>
              <p className="text-fg text-2xl ">{t("project.subtitle")}</p>
            </div>

            <div className="w-full flex justify-end mb-8">
              <button
                onClick={() => setFilterOpen(true)}
                className="flex items-center gap-2 px-6 py-2 rounded-md border transition-all duration-300 border-fg/30 text-m font-medium hover:border-secondary"
              >
                <SlidersHorizontal size={20} />
                <span>{t("project.filter.title")}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
              <ListProjects filters={filters} />
            </div>
          </div>
        </BgFeadeTop>
      </section>

      <Filter
        isOpen={isFilterOpen}
        onClose={() => setFilterOpen(false)}
        projects={projects}
        onFilterChange={handleFilterChange}
      />
    </>
  );
}
