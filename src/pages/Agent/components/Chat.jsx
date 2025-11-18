import React from 'react';
import { useAgent } from '../../../context/AgentContext';
import { motion } from 'framer-motion';

export default function Chat({ isLoading }) {
  const { chatHistory } = useAgent();

  return (
    <div className="flex-grow overflow-y-auto mb-4 p-4">
      {chatHistory.map((message, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={`flex mb-4 ${
            message.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`p-3 rounded-lg max-w-lg ${
              message.sender === 'user'
                ? 'bg-fg/20 text-white border border-secondary rounded-md'
                : 'bg-secondary/40 text-white border border-secondary rounded-md'
            }`}
          >
            {message.text}
          </div>
        </motion.div>
      ))}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-start mb-4"
        >
          <div className="p-3 rounded-lg max-w-lg bg-secondary/40 text-white border border-secondary rounded-md">
            <div className="flex items-center">
              <div className="dot-pulse mr-2"></div>
              <span>🧠...</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
