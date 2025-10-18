import React from 'react'
import { cn } from '../../../../../lib/utils'

export default function CardFeature({ icon: Icon, title, description }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-6 mx-3 my-3 rounded-2xl border border-fg/10",
        "bg-bg/50 hover:border-primary/50 hover:bg-bg/70 transition-all duration-300"
      )}
    >
      {/* Ícono */}
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
        <Icon className="text-secondary" size={28} strokeWidth={2.5} />
      </div>

      {/* Título */}
      <h3 className="font-semibold text-lg text-fg mb-2">{title}</h3>

      {/* Descripción */}
      <p className="text-sm text-fg/70 leading-relaxed">{description}</p>
    </div>
  )
}
