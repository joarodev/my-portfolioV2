import React, { useState, useEffect } from "react";
import { useAgent } from "../../context/AgentContext";
import { useProjects } from "../../context/ProjectsContext";
import { useCertificates } from "../../context/CertificatesContext";
import { useLanguage } from "../../context/LanguageContext";
import ApiModal from "./components/ApiModal";
import Chat from "./components/Chat";
import { motion, AnimatePresence } from "framer-motion";
import { createSystemPrompt } from "./utils/systemPrompt";
import { getGeminiResponse } from "./utils/ai";
import { convertToTOON } from "./utils/toon";
import NavbarAgent from "./components/NavbarAgent";
import infoData from "../../data/info.json";

export default function Agent() {
  const { isModalOpen, apiKey, apiProvider, chatHistory, setChatHistory } =
    useAgent();
  const { projects } = useProjects();
  const { certificates } = useCertificates();
  const { t, language } = useLanguage();
  const [input, setInput] = useState("");
  const [systemPrompt, setSystemPrompt] = useState("");
  const [toonData, setToonData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (projects.length > 0 && certificates.length > 0) {
        const generatedToonData = convertToTOON(projects, certificates, infoData);
        setToonData(generatedToonData);
        setSystemPrompt(createSystemPrompt(generatedToonData));
    }
  }, [projects, certificates, language]);

  const handleSend = async () => {
    if (input.trim() !== "" && systemPrompt) {
      const newUserMessage = { sender: "user", text: input };
      const updatedChatHistory = [...chatHistory, newUserMessage];
      setChatHistory(updatedChatHistory);
      setInput("");
      setIsLoading(true);

      try {
        let aiResponse;
        if (apiProvider === "openai") {
          aiResponse = await getOpenAIResponse(
            apiKey,
            systemPrompt,
            updatedChatHistory,
            toonData
          );
        } else {
          aiResponse = await getGeminiResponse(
            apiKey,
            systemPrompt,
            updatedChatHistory,
            toonData
          );
        }
        const newAiMessage = { sender: "ai", text: aiResponse };
        setChatHistory([...updatedChatHistory, newAiMessage]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        const errorMessage = {
          sender: "ai",
          text: "Sorry, I encountered an error. Please try again.",
        };
        setChatHistory([...updatedChatHistory, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col h-screen w-full justify-center items-center bg-bg text-fg p-4"
      >
        <AnimatePresence>{isModalOpen && <ApiModal />}</AnimatePresence>
        {!isModalOpen && apiKey && (
          <>
            <NavbarAgent />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col flex-grow w-full xl:w-7xl justify-center bg-bg2 rounded-2xl border border-secondary"
            >
              <Chat isLoading={isLoading} />
              <div className="flex mx-3 mb-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="flex-grow p-2 rounded-l-lg bg-bg text-fg"
                  placeholder={t("agent.chat.input.text")}
                />
                <button
                  onClick={handleSend}
                  className="bg-primary text-white p-2 rounded-md border border-secondary hover:bg-primary-hover"
                >
                  {t("agent.chat.button.text")}
                </button>
              </div>
            </motion.div>
          </>
        )}
        {!isModalOpen && !apiKey && (
          <div className="flex justify-center items-center h-full">
            <p>{t("agent.chat.provider")}</p>
          </div>
        )}
      </motion.div>
    </>
  );
}
