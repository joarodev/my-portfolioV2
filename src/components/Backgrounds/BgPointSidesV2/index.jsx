import React from 'react'

export default function BgPointSidesV2({children}) {
  return (
    <>
      {/* Halo izquierdo */}
      <div
        className="absolute bottom-0 left-[-20%] right-0 top-[-0%] h-[600px] w-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle farthest-side, var(--color-fg) 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      {/* Halo derecho */}
      <div
        className="absolute bottom-0 right-[-20%] top-[-10%] h-[400px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle farthest-side, var(--color-fg) 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />
      {/* Halo derecho 2*/}
      <div
        className="absolute bottom-0 right-[-20%] top-[40%] h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle farthest-side, var(--color-fg) 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />
      {children}
    </>
  )
}
