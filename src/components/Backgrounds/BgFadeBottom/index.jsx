import React from "react";

export default function BgFadeBottom({ children }) {
  return (
    <div className="relative h-full w-full" style={{ backgroundColor: "var(--color-bg)" }}>
      

      {/* Fade to black at the bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[40%]"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg2) 20%, transparent)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
