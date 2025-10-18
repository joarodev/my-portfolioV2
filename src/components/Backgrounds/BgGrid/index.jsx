import { cn } from "@/lib/utils";
import React from "react";
import "./bgGrid.css";
 
export function GridBackground({ children }) {
  return (
    <div className="relative flex w-full items-center justify-center bg-bg sm:h-screen">
      <div
        className={cn(
          "absolute inset-0 grid-background",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-bg radial-gradient-mask"></div>
      {children}
    </div>
  );
}
