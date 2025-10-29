import React from "react";
import { cn } from "../../../lib/utils";

export default function BgPointSides({ children }) {
  return (
     <div className="relative h-full w-full" style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Halo izquierdo */}
      <div
        className="absolute bottom-0 left-[-20%] right-0 top-[10%] h-[600px] w-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle farthest-side, var(--color-fg) 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      {/* Halo derecho */}
      <div
        className="absolute bottom-0 right-[-20%] top-[30%] h-[700px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle farthest-side, var(--color-fg) 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />
      {/* Halo izquierdo 2*/}
      <div
        className="absolute bottom-0 left-[-20%] right-0 top-[50%] h-[600px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle farthest-side, var(--color-fg) 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      {/* Halo derecho 2*/}
      <div
        className="absolute bottom-0 right-[-20%] top-[-5%] h-[700px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle farthest-side, var(--color-fg) 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />

      {children}
    </div>
  );
}
