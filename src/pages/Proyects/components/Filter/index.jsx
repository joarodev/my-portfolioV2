import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { useLanguage } from "../../../../context/LanguageContext";

export default function Filter({
  projects,
  onFilterChange,
  isOpen,
  onClose,
}) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);
  const [filterType, setFilterType] = useState(null); // 'deploy', 'github'

  const allTechnologies = useMemo(() => {
    const technologies = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => technologies.add(tech));
    });
    return Array.from(technologies);
  }, [projects]);

  const handleFilter = () => {
    onFilterChange({
      searchTerm,
      technology: selectedTech,
      type: filterType,
    });
    onClose();
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedTech(null);
    setFilterType(null);
    onFilterChange({
      searchTerm: "",
      technology: null,
      type: null,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bg border border-fg/10 rounded-2xl p-6 w-full max-w-md shadow-xl text-fg"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">{t("project.filter.title")}</h3>
              <button onClick={onClose} className="text-fg/70 hover:text-fg">
                <X size={24} />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-fg/50" size={20} />
              <input
                type="text"
                placeholder={t("project.filter.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-bg2 border border-fg/10 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Filter by Type */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">{t("project.filter.filterBy")}</h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilterType("deploy")}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    filterType === "deploy"
                      ? "bg-primary text-bg"
                      : "bg-fg/10 hover:bg-fg/20"
                  }`}
                >
                  {t("project.filter.withDeploy")}
                </button>
                <button
                  onClick={() => setFilterType("github")}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    filterType === "github"
                      ? "bg-primary text-bg"
                      : "bg-fg/10 hover:bg-fg/20"
                  }`}
                >
                  {t("project.filter.withGithub")}
                </button>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-3">{t("project.filter.technologies")}</h4>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                      selectedTech === tech
                        ? "bg-primary text-bg border-primary"
                        : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={handleReset}
                className="flex-1 py-2 bg-fg/10 hover:bg-fg/20 text-fg rounded-md transition-all"
              >
                {t("project.filter.reset")}
              </button>
              <button
                onClick={handleFilter}
                className="flex-1 py-2 bg-primary text-bg rounded-md hover:bg-primary-hover transition-all"
              >
                {t("project.filter.apply")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
