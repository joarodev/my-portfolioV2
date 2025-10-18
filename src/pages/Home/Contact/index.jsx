import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const {t, language} = useLanguage();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contacto"
      className="w-full bg-bg text-fg py-20 flex flex-col items-center px-6"
    >
      {/* Título */}
      <div className="text-center mb-12 max-w-7xl">
        <h2 className="title-text font-bold mb-2 ">{t("contact.title")}</h2>
        <p className="text-fg regular-text">
          {t("contact.description")}
        </p>
      </div>

      {/* Contenedor principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:max-w-7xl">
        {/* Columna izquierda */}
        <div>
          <h3 className="text-xl font-semibold mb-6">{t("contact.title.link")}</h3>

          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                <Mail className="text-secondary" size={22} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:joaquinrodriguez.dev@gmail.com"
                  className="text-secondary hover:underline"
                >
                  joaquinrodriguez.dev@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                <Linkedin className="text-secondary" size={22} />
              </div>
              <div>
                <p className="font-medium">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/joaquinrodriguez-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  linkedin.com/joaquinrodriguez-dev
                </a>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
                <Github className="text-secondary" size={22} />
              </div>
              <div>
                <p className="font-medium">GitHub</p>
                <a
                  href="https://github.com/joarodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  github.com/joarodev
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Columna derecha (Formulario) */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 p-6 rounded-2xl "
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("contact.form.name")}
            className="w-full px-4 py-3 rounded-md bg-transparent border border-secondary/20 focus:border-secondary outline-none transition-colors"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-secondary/20 focus:border-secondary outline-none transition-colors"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder={t("contact.form.message")}
            className="w-full px-4 py-3 rounded-md bg-transparent border border-secondary/20 focus:border-secondary outline-none transition-colors resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-secondary/70 text-bg2 font-semibold py-3 rounded-md hover:bg-secondary/60 transition-all shadow-md hover:shadow-lg"
          >
            {t("contact.form.buttom")}
          </button>
        </form>
      </div>
    </section>
  );
}
