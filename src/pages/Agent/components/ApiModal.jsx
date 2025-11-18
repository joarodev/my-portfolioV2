import React, { useState, useEffect } from "react";
import { useAgent } from "../../../context/AgentContext";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router-dom";

export default function ApiModal() {
  const { apiKey, apiProvider, setApiKey, setApiProvider, setIsModalOpen } =
    useAgent();
  const [key, setKey] = useState("");
  const [provider, setProvider] = useState("openai");
  const [showKey, setShowKey] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (apiKey) setKey(apiKey);
    if (apiProvider) setProvider(apiProvider);
  }, [apiKey, apiProvider]);

  const handleSubmit = () => {
    if (key.trim() !== "") {
      setApiKey(key);
      setApiProvider(provider);
      setIsModalOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-bg2 shadow-secondary flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-md mb-4">
        <div className="aspect-w-16 aspect-h-9 flex justify-center items-center">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/VsgazemFb2I"
            title=""
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-bg p-8 rounded-lg shadow-lg text-fg relative"
      >
        <div className="absolute top-4 right-4 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer text-fg/50"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <div className="absolute bottom-full right-0 mb-2 w-64 p-2 bg-bg2 text-fg text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {t("agent.modal.tooltip")}
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">{t("agent.modal.title")}</h2>
        <div className="mb-4">
          <label className="block mb-2">{t("agent.modal.selector.text")}</label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className="w-full p-2 rounded bg-bg2 text-fg"
          >
            <option value="openai">OpenAI</option>
            <option value="gemini">Google Gemini</option>
          </select>
        </div>
        <div className="mb-4 relative">
          <label className="block mb-2">API Key:</label>
          <input
            type={showKey ? "text" : "password"}
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full p-2 rounded bg-bg2 text-fg pr-10"
          />
          <button
            onClick={() => setShowKey(!showKey)}
            className="absolute inset-y-0 right-0 px-3 pb-3 flex items-end text-fg/50 hover:text-fg"
          >
            {showKey ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line x1="2" x2="22" y1="2" y2="22"></line>
              </svg>
            )}
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-secondary/70 border border-secondary text-white p-2 rounded-md hover:bg-secondary"
        >
          {t("agent.modal.button.text")}
        </button>
        <Link to="/">
          <button className="w-full mt-2 bg-secondary/70 border border-secondary text-white p-2 rounded-md hover:bg-secondary">
            {t("agent.button.normalMode")}
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
