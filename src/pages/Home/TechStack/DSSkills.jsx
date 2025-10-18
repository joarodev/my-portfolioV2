import React from 'react'

const skills = [
  { name: 'Python', level: 'Experto' },
  { name: 'Pandas', level: 'Avanzado' },
  { name: 'scikit-learn', level: 'Avanzado' },
  { name: 'TensorFlow / PyTorch', level: 'Intermedio' },
  { name: 'SQL', level: 'Avanzado' },
  { name: 'Visualización (Plotly / D3)', level: 'Avanzado' },
  { name: 'Docker', level: 'Intermedio' },
  { name: 'ML Ops', level: 'Intermedio' },
]

export default function DSSkills() {
  return (
    <section id="skills" className="py-16 bg-slate-800 text-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">Habilidades</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="bg-slate-700/40 p-4 rounded-lg border border-slate-700">
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-slate-300 mt-1">{s.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
