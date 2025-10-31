import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../../context/LanguageContext";
import { useCertificates } from "../../../../context/CertificatesContext";
import { Briefcase, GraduationCap, Award, Home, FolderGit2 } from "lucide-react";
import ButtonSlide from "../../../../components/ui/Buttons/ButtonSlide";
import ButtonClasic from "../../../../components/ui/Buttons/ButtonClasic";

const Section = ({ icon, title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b-2 border-primary pb-2">
      {icon}
      <span>{title}</span>
    </h2>
    {children}
  </motion.section>
);

const ExperienceItem = ({ year, title, company, description }) => (
  <div className="relative pl-8 mb-6">
    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-bg" />
    <div className="absolute left-[7px] top-1 h-full w-[2px] bg-primary/40" />
    <p className="text-sm text-primary/80 mb-1">{year}</p>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-secondary mb-2">{company}</p>
    <p className="text-fg/80 text-sm">{description}</p>
  </div>
);

const CertificateItem = ({ name, institution, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block bg-bg2/50 p-4 rounded-lg border border-fg/10 hover:border-primary transition-colors">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-secondary">{institution}</p>
    </a>
)

export default function MainContent() {
  const { t } = useLanguage();
  const { certificates, isLoading } = useCertificates();

  const professionalExperience = t("aboutme.experience.profesional");
  const education = t("aboutme.experience.formacion");

  return (
    <motion.main
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="lg:col-span-2 bg-bg2/50 border border-fg/10 rounded-2xl p-6 sm:p-8 shadow-lg"
    >
      <Section icon={<Briefcase className="text-primary" />} title={t("aboutme.title")}>
        <p className="text-fg/80">{t("hero.description")}</p>
      </Section>

      <Section icon={<Briefcase className="text-primary" />} title={t("aboutme.experience.button.professional")}>
        <div>
          {professionalExperience.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </Section>

      <Section icon={<GraduationCap className="text-primary" />} title={t("aboutme.experience.button.academic")}>
        <div>
          {education.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </Section>

      <Section icon={<Award className="text-primary" />} title={t("skills.certs.title")}>
        {isLoading ? (
          <p>Loading certificates...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert) => (
              <CertificateItem key={cert.id} {...cert} />
            ))}
          </div>
        )}
      </Section>

      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        <ButtonSlide text={t("navbar.home")} path="/" icon={<Home size={20}/>} />
        <ButtonSlide text={t("navbar.projects")} path="/projects" icon={<FolderGit2 size={20}/>} />
      </div>
    </motion.main>
  );
}
