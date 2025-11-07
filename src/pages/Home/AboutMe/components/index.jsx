import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "../../../../context/LanguageContext";

export default function ExperienceSection() {
  const [selected, setSelected] = useState("profesional");
  const {t, language} = useLanguage();

  const list = t(`aboutme.experience.${selected}`);


  return (
    <section className="w-full bg-bg py-20 text-fg flex flex-col items-center">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        {t("aboutme.experience.title")}
      </h2>

      {/* Botones */}
      <div className="relative z-10 flex gap-3 mb-12">
        <button
          onClick={() => setSelected("profesional")}
          className={cn(
            "px-6 py-2 rounded-md border transition-all duration-300",
            selected === "profesional"
              ? "bg-secondary text-bg"
              : "border-fg/30 hover:border-secondary"
          )}
        >
          {t("aboutme.experience.button.professional")}
        </button>
        <button
          onClick={() => setSelected("formacion")}
          className={cn(
            "px-6 py-2 rounded-md border transition-all duration-300",
            selected === "formacion"
              ? "bg-secondary text-bg"
              : "border-fg/30 hover:border-secondary"
          )}
        >
          {t("aboutme.experience.button.academic")}
        </button>
      </div>

      {/* Línea de tiempo */}
      <div className="relative w-full md:max-w-3/4 px-4 md:px-0">
        {/* Línea central (en desktop) o lateral (en mobile) */}
        <div className="absolute md:left-1/2 left-4 top-0 h-full w-[2px] bg-primary/40 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {list.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={cn(
                  "relative flex md:block",
                  // En móvil: todo alineado a la derecha
                  "md:ml-0 md:w-1/2 px-4",
                  // En desktop: alternar lados
                  index % 2 === 0
                    ? "md:ml-auto md:text-left"
                    : "md:mr-auto md:text-right"
                )}
              >
                {/* Punto en la línea */}
                <div
                  className={cn(
                    "absolute top-2 w-4 h-4 rounded-full bg-primary border-4 border-bg",
                    // En móvil: siempre a la izquierda
                    "left-0 md:left-auto",
                    // En desktop: alternar
                    index % 2 === 0 ? "md:-left-[9px]" : "md:right-[-9px]"
                  )}
                ></div>

                {/* Contenido */}
                <div className="px-5 pb-5 pt-2 w-full">
                  <h3 className="font-bold subtitle-text text-fg">
                    {item.title}
                  </h3>
                  <p className="text-lg text-secondary">{item.company}</p>
                  <p className="text-sm text-primary/80 mt-1">{item.year}</p>
                  <p className="mt-3 regular-text text-fg/80">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
