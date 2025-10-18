import React from 'react'

export default function DSContact() {
  return (
    <section id="contact" className="py-16 bg-slate-800 text-slate-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold">Contacto</h3>
        <p className="mt-3 text-slate-300">Estoy abierto a colaboraciones y nuevas oportunidades. Escríbeme:</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:tu@email.com" className="px-5 py-3 bg-indigo-600 rounded-md">Enviar correo</a>
          <a href="https://linkedin.com/" className="px-5 py-3 border border-slate-600 rounded-md">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
