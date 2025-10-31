import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg text-fg font-sans antialiased"
    >
      <div className="container mx-auto p-4 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </motion.div>
  );
}
