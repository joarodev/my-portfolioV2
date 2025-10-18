import React from 'react'

const roles = [
  { id: 1, title: 'Científico de Datos Senior', org: 'Empresa A', period: '2022 - presente', desc: 'Lideré proyectos de modelado y despliegue de ML en producción.' },
  { id: 2, title: 'Analista de Datos', org: 'Empresa B', period: '2019 - 2022', desc: 'Análisis exploratorio y visualización para equipos de producto.' },
]

export default function DSExperience() {
  return (
    <section id="experience" className="py-16 bg-slate-800 text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Experiencia</h3>
        <div className="mt-6 space-y-4">
          {roles.map(r => (
            <div key={r.id} className="p-4 rounded-lg bg-slate-700/40 border border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">{r.title}</div>
                  <div className="text-sm text-slate-300">{r.org}</div>
                </div>
                <div className="text-sm text-slate-400">{r.period}</div>
              </div>
              <p className="mt-2 text-slate-300 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
