import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Mail, Phone, Linkedin, Github, MapPin, Loader, Check, AlertTriangle } from "lucide-react";
import BgFeadeTop from "../../components/Backgrounds/BgFeadeTop";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

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

  return (
    <BgFeadeTop>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="contact"
        className="w-full text-fg py-20"
      >
        <div className="container mx-auto px-6 md:max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="title-text mb-2">{t("contact.title")}</h2>
            <p className="text-fg/80 text-lg">{t("contact.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-bg2/50 border border-fg/10 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">{t("contact.title.link")}</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t("contact.form.name")}</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-bg border border-fg/20 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t("contact.form.email")}</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-bg border border-fg/20 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t("contact.form.message")}</label>
                  <textarea name="message" id="message" rows="4" required value={formData.message} onChange={handleChange} className="w-full bg-bg border border-fg/20 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                </div>
                <button type="submit" disabled={status === 'loading'} className="w-full py-3 bg-primary text-bg font-bold rounded-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-2">
                  {status === 'loading' && <Loader className="animate-spin" size={20} />}
                  {status !== 'loading' && t("contact.form.buttom")}
                </button>
                {status === 'success' && <p className="text-green-500 mt-4 flex items-center gap-2"><Check/> {t("contact.form.success")}</p>}
                {status === 'error' && <p className="text-red-500 mt-4 flex items-center gap-2"><AlertTriangle/> {t("contact.form.error")}</p>}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <Mail size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:joaquinrodriguez0801@gmail.com" className="text-fg/80 hover:text-primary transition-colors">joaquinrodriguez0801@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <MapPin size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-fg/80">Mendoza, Argentina</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <Linkedin size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/joaquindev/" target="_blank" rel="noopener noreferrer" className="text-fg/80 hover:text-primary transition-colors">linkedin.com/in/joaquindev</a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <Github size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <a href="https://github.com/joarodev" target="_blank" rel="noopener noreferrer" className="text-fg/80 hover:text-primary transition-colors">github.com/joarodev</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </BgFeadeTop>
  );
}
