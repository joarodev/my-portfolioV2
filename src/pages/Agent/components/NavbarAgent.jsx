import React from "react";
import SocialMediaButtons from "../../../components/ui/Buttons/SocialMediaButtons";
import ButtonAgentAI from "../../../components/ui/Buttons/ButtonAgentAI";
import { useAgent } from "../../../context/AgentContext";

export default function NavbarAgent() {
  const { setIsModalOpen } = useAgent();

  return (
    <nav
      className="sticky top-0 z-50 text-foreground transition-colors duration-500 mb-5 w-full"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-bg) 78%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div
          id="social-buttons"
          className="flex flex-1 justify-center items-center mx-3"
        >
          <SocialMediaButtons />
        </div>

        <div className="mx-3 flex items-center gap-4">
          <button onClick={() => setIsModalOpen(true)} className="text-fg/70 hover:text-fg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
          <ButtonAgentAI text="Modo Normal" path="/" />
        </div>
      </div>
    </nav>
  );
}
