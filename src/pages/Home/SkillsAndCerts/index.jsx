import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { Award, BrainCircuit, Wrench } from "lucide-react";
import SkillCard from "./components/CardSkill";
import ListCertifications from "./components/ListCertifications";


export default function SkillsAndCerts() {
  const { t } = useLanguage();

  const techSkills = [".NET Framework", "Azure", "Machine Learning", "SQL Server", "Python", "C#", "React.js", "Nest.js", "AWS", "Big Data", "Deep Learning", "Firebase", "Javascript", "PostgreSQL", "IA Agents"];
  const softSkills = [t("skills.soft.skill1"), t("skills.soft.skill2"), t("skills.soft.skill3"), t("skills.soft.skill4"), t("skills.soft.skill5"), t("skills.soft.skill6"),t("skills.soft.skill7"),t("skills.soft.skill8"),t("skills.soft.skill9"),t("skills.soft.skill10")];

  return (
    <section id="skills" className="bg-bg text-fg py-20 flex flex-col justify-center items-center">
      <div className="mx-auto px-6 w-full md:max-w-7xl">
        <h2 className="title-text font-bold text-center mb-16">
          {t("skills.title", "Skills & Certifications")}
        </h2>
        
        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <SkillCard 
            icon={<Wrench className="w-12 h-12 text-secondary" />}
            title={t("skills.tech.title", "Tech Skills")}
            items={techSkills}
          />
          <SkillCard 
            icon={<BrainCircuit className="w-12 h-12 text-secondary" />}
            title={t("skills.soft.title", "Soft Skills")}
            items={softSkills}
          />
        </div>

        {/* Certifications Section */}
        <div className="w-full">
          <h3 className="subtitle-text font-bold text-center mb-8">{t("skills.certs.title", "Certifications")}</h3>
          <div className="space-y-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <ListCertifications/>
          </div>
        </div>
      </div>
    </section>
  );
}
