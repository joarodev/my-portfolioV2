import React, { createContext, useState, useContext, useEffect } from 'react';

const AgentContext = createContext();

export const useAgent = () => {
  return useContext(AgentContext);
};

export const AgentProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('apiKey') || '');
  const [apiProvider, setApiProvider] = useState(() => localStorage.getItem('apiProvider') || null);
  const [chatHistory, setChatHistory] = useState(() => {
    const savedHistory = localStorage.getItem('chatHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(() => !localStorage.getItem('apiKey'));

  useEffect(() => {
    localStorage.setItem('apiKey', apiKey);
  }, [apiKey]);

  useEffect(() => {
    if (apiProvider) {
      localStorage.setItem('apiProvider', apiProvider);
    }
  }, [apiProvider]);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const value = {
    apiKey,
    setApiKey,
    apiProvider,
    setApiProvider,
    chatHistory,
    setChatHistory,
    isModalOpen,
    setIsModalOpen,
  };

  return (
    <AgentContext.Provider value={value}>
      {children}
    </AgentContext.Provider>
  );
};
