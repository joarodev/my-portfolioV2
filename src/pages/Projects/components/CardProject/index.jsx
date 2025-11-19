import React, { useState } from "react";
import { CircleX, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../../../context/LanguageContext";
import ReactMarkdown from "react-markdown";
import ButtonGithubStar from "../../../../components/ui/Buttons/ButtonGithubStar";

export default function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  github,
  deploy,
  more,
  tools = [],
}) {
  const [open, setOpen] = useState(false);

  const { t, lenguage } = useLanguage();

  return (
    <>
      {/* Tarjeta */}
      <div className="bg-bg2/30 border border-fg/10 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-fg/70 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-2 mt-auto">
            {deploy && (
              <a
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 bg-secondary/10 border border-secondary hover:bg-secondary/20 text-fg text-sm rounded-md transition-all"
              >
                {t("project.card.demo")}
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 bg-primary/30 border border-secondary text-fg text-sm rounded-md hover:bg-primary-hover transition-all"
              >
                {t("project.card.code")}
              </a>
            )}
            <button
              onClick={() => setOpen(true)}
              className="flex-1 text-center py-2 bg-fg/20 border border-secondary hover:bg-fg/10 text-fg text-sm rounded-md transition-all"
            >
              {t("project.card.more")}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg2 border border-fg/10 rounded-2xl p-6 w-full max-w-lg shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-sm text-fg/80 mb-4">
                {more}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {deploy && (
                  <a
                    href={deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-secondary/40 hover:bg-secondary/20 text-fg rounded-md transition-all"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-bg rounded-md hover:bg-primary-hover transition-all"
                  >
                    <Github size={16} /> {t("project.card.code")}
                  </a>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-fg/10 hover:bg-fg/20 text-fg rounded-md transition-all"
                >
                  <CircleX size={16} /> {t("project.card.close")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
