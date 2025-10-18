import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, path }) {
  return (
    <Link to={path}>
      <button className="px-6 py-3 font-bold transition-all duration-300  text-fg hover:shadow-lg hover:bg-fg hover:text-bg2 hover:scale-105 hover:raounded-xl hover:border hover:border-fg/30">
        {text}
      </button>
    </Link>
  );
}
