import React from "react";
import { Github, Linkedin, Youtube, LayoutGrid } from "lucide-react";

const socialMedia = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/joaquinrodriguez-dev/",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/joarodev",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "Kaggle",
    url: "https://www.kaggle.com/joarodev",
    icon: <LayoutGrid className="w-6 h-6" />, // Placeholder for Kaggle
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@JoaRodDev",
    icon: <Youtube className="w-6 h-6" />,
  },
];

export default function SocialMediaButtons() {
  return (
    <div className="flex items-center justify-center">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-[var(--color-bg-secondary)] text-[var(--color-fg)] rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
        >
          {social.icon}
          <div className="absolute top-full w-auto  bg-[var(--color-bg)] text-[var(--color-text)] text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {social.name}
          </div>
        </a>
      ))}
    </div>
  );
}
