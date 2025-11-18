import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { AgentProvider } from "./context/AgentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <AgentProvider>
          <App />
        </AgentProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
