import React from "react";

export default function BgFadeBottom({ children }) {
  return (
      <div className="h-full w-full md:h-screen justify-center flex items-center" style={{
          background:
            "linear-gradient(to top, var(--color-bg2) 20%, transparent)",
        }}>{children}</div>
  );
}
