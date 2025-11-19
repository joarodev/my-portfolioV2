import React from 'react'
import { Link } from 'react-router-dom';

export default function ButtonAgentAI({text, path}) {
  return path ? (
    <Link to={path}>
      <button id="agent-mode-button" className="px-4 py-1 rounded-md border transition-all duration-300 border-fg/30 text-m font-medium hover:border-secondary">
        {text || "Agent Mode"}
      </button>
    </Link>
  ) : (
    <button id="agent-mode-button" className="px-6 py-2 rounded-md border transition-all duration-300 border-fg/30 text-m font-medium hover:border-secondary">
      {text || "Agent Mode"}
    </button>
  );
}
