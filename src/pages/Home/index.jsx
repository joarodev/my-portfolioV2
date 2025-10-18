import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroInfo from "./Hero";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { useLanguage } from "../../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  // Trackeamos el progreso de scroll en todo el contenedor
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // ===== HERO =====
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // ===== ABOUT =====
  const aboutOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.8, 1], [0, 1, 1, 0]);
  const aboutY = useTransform(scrollYProgress, [0.15, 0.5], [100, 10]);

  // ===== CONTACT =====
  const contactOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.8, 1], [0, 1, 1, 1]);
  const contactY = useTransform(scrollYProgress, [0.15, 0.5], [100, 10]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* HERO */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="relative z-10"
      >
        <HeroInfo
          title={t("hero.profession")}
          description={t("hero.description")}
          name={t("hero.name")}
        />
      </motion.div>

      {/* ABOUT */}
      <motion.div
        style={{
          opacity: aboutOpacity,
          y: aboutY,
          position: "relative",
          zIndex: 5,
        }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <AboutMe />
      </motion.div>

      {/* CONTACT */}
      <motion.div
        style={{
          opacity: contactOpacity,
          y: contactY,
          position: "relative",
          zIndex: 1,
        }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}
