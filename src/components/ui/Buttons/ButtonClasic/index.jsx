import React from "react";
import { Link } from "react-router-dom";

export default function ButtonClasic({ text, path }) {
  return path ? (
    <Link to={path}>
      <button className="px-6 py-2 rounded-md border transition-all duration-300 border-fg/30 text-m font-medium hover:border-secondary">
        {text || "ButtonClasic"}
      </button>
    </Link>
  ) : (
    <button className="px-6 py-2 rounded-md border transition-all duration-300 border-fg/30 text-m font-medium hover:border-secondary">
      {text || "ButtonClasic"}
    </button>
  );
}

