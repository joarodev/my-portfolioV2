import React from 'react'

export default function SkillCard({icon, title, items }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-bg-secondary/30 backdrop-blur-sm border border-secondary/10 shadow-lg shadow-secondary/20 hover:-translate-y-2 transition-all duration-300">
      {icon}
      <h3 className="text-2xl font-bold my-4">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item, i) => (
          <span key={i} className="regular-text bg-secondary/10 text-secondary font-medium px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
