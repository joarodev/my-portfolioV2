import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroInfo from "./Hero";
import AboutMe from "./AboutMe";
import SkillsAndCerts from "./SkillsAndCerts";
import Contact from "./Contact";
import { useLanguage } from "../../context/LanguageContext";
import ProjectSection from "./Project";


export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <HeroInfo
        title={t("hero.profession")}
        description={t("hero.description")}
        name={t("hero.name")}
      />
        <AboutMe />
        <SkillsAndCerts />
        <ProjectSection/>
        <Contact />
    </>
  );
}
