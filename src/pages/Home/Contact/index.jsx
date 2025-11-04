import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Loader, Check, AlertTriangle } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import BgFadeBottom from "../../../components/Backgrounds/BgFadeBottom";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const { t } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  // Variants de animación
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <BgFadeBottom>
      <section
        id="contacto"
        className="w-full text-fg py-20 flex flex-col items-center px-6 overflow-hidden"
      >
        {/* Título */}
        <motion.div
          className="text-center mb-12 max-w-7xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="title-text font-bold mb-2">{t("contact.title")}</h2>
          <p className="text-fg regular-text">{t("contact.description")}</p>
        </motion.div>

        {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:max-w-7xl">
          {/* Columna izquierda */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">
              {t("contact.title.link")}
            </h3>
            <ul className="space-y-6">
              {[
                {
                  icon: <Mail className="text-secondary" size={22} />,
                  title: "Email",
                  link: "mailto:joaquinrodriguez.dev@gmail.com",
                  label: "joaquinrodriguez.dev@gmail.com",
                },
                {
                  icon: <Linkedin className="text-secondary" size={22} />,
                  title: "LinkedIn",
                  link: "https://www.linkedin.com/in/joaquinrodriguez-dev/",
                  label: "linkedin.com/joaquinrodriguez-dev",
                },
                {
                  icon: <Github className="text-secondary" size={22} />,
                  title: "GitHub",
                  link: "https://github.com/joarodev",
                  label: "github.com/joarodev",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-4"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.4 + 0.3}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      {item.label}
                    </a>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna derecha (Formulario) */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 p-6 rounded-2xl backdrop-blur-sm border border-secondary/10 shadow-md"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.6}
            viewport={{ once: true }}
          >
            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#00FFFF" }}
              transition={{ duration: 0.3 }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.form.name")}
              className="w-full px-4 py-3 rounded-md bg-transparent border border-secondary/20 focus:border-secondary outline-none transition-colors"
              required
            />

            <motion.input
              whileFocus={{ scale: 1.02, borderColor: "#00FFFF" }}
              transition={{ duration: 0.3 }}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.form.email")}
              className="w-full px-4 py-3 rounded-md bg-transparent border border-secondary/20 focus:border-secondary outline-none transition-colors"
              required
            />

            <motion.textarea
              whileFocus={{ scale: 1.02, borderColor: "#00FFFF" }}
              transition={{ duration: 0.3 }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder={t("contact.form.message")}
              className="w-full px-4 py-3 rounded-md bg-transparent border border-secondary/20 focus:border-secondary outline-none transition-colors resize-none"
              required
            ></motion.textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-secondary/70 text-bg2 font-semibold py-3 rounded-md hover:bg-secondary/60 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              {status === 'loading' && <Loader className="animate-spin" size={20} />}
              {status !== 'loading' && t("contact.form.buttom")}
            </motion.button>
            {status === 'success' && <p className="text-green-500 mt-4 flex items-center gap-2"><Check/> {t("contact.form.success")}</p>}
            {status === 'error' && <p className="text-red-500 mt-4 flex items-center gap-2"><AlertTriangle/> {t("contact.form.error")}</p>}
          </motion.form>
        </div>
      </section>
    </BgFadeBottom>
  );
}
