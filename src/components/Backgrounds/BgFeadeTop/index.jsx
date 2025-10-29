import React from "react";

export default function BgFeadeTop({children}) {
  return (
    <div class="absolute top-0 z-[-2] h-full w-full bg-bg bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,var(--color-bg-grid),rgba(255,255,255,0))]">
        {children}
    </div>
  );
}
