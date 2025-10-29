import React from "react";
import { Link } from "react-router-dom";

export default function ButtonSlide({ text, path }) {
  return (
    <Link>
      <button
        className="group relative inline-block overflow-hidden  border-fg/30 px-6 py-2 rounded-md border focus:ring-3 focus:outline-hidden"
        to={path}
      >
        <span className="absolute inset-y-0 left-0 w-[2px] bg-secondary transition-all group-hover:w-full"></span>
        <span className="relative text-m font-medium text-fg transition-colors group-hover:text-bg">
          {text}
        </span>
      </button>
    </Link>
  );
}
