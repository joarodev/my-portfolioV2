import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../context/LanguageContext";
import profileImg from "../../../../assets/images/joarod_profile.jpg";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";


export default function Sidebar() {
  const { t } = useLanguage();
  const softSkills = [t("skills.soft.skill1"), t("skills.soft.skill2"), t("skills.soft.skill3"), t("skills.soft.skill4"), t("skills.soft.skill5"), t("skills.soft.skill6"),t("skills.soft.skill7"),t("skills.soft.skill8"),t("skills.soft.skill9"),t("skills.soft.skill10")];
  
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-1 bg-bg2/50 border border-fg/10 rounded-2xl p-6 shadow-lg"
    >
      <div className="flex flex-col items-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-primary mb-4"
        />
        <h1 className="text-3xl font-bold text-center">{t("hero.name")}</h1>
        <p className="text-primary text-center">{t("hero.profession")}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 border-b-2 border-primary pb-2">
          {t("contact.title")}
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-secondary" />
            <span>joaquinrodriguez.dev@gmail.com</span>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={18} className="text-secondary" />
            <span>Mendoza, Argentina</span>
          </li>
          <li className="flex items-center gap-3">
            <Linkedin size={18} className="text-secondary" />
            <a href="https://www.linkedin.com/in/joaquinrodriguez-dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/joaquinrodriguez-dev
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Github size={18} className="text-secondary" />
            <a href="https://github.com/joarodev" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/joarodev
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 border-b-2 border-primary pb-2">
          {t("skills.tech.title")}
        </h2>
        <div className="flex flex-wrap gap-2">
          {[".NET Framework", "Azure", "Machine Learning", "SQL Server", "Python", "C#", "React.js", "Nest.js", "AWS", "Big Data", "Deep Learning", "Firebase", "Javascript", "PostgreSQL", "IA Agents"].map((skill) => (
            <span key={skill} className="bg-secondary/70 text-bg text-xs font-semibold px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 border-b-2 border-primary pb-2">
          {t("skills.soft.title")}
        </h2>
        <ul className="space-y-2 text-sm list-disc list-inside">
          {softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}
