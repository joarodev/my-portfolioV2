import React from "react";

export default function SkeletonCardProjects() {
  return (
    <div className="bg-bg2/30 border border-fg/10 rounded-2xl overflow-hidden shadow-md animate-pulse">
      {/* Skeleton Image */}
      <div className="w-full h-48 bg-fg/10"></div>
      <div className="p-5">
        {/* Skeleton Title */}
        <div className="h-6 bg-fg/10 rounded w-3/4 mb-4"></div>
        {/* Skeleton Description */}
        <div className="h-4 bg-fg/10 rounded w-full mb-2"></div>
        <div className="h-4 bg-fg/10 rounded w-5/6 mb-4"></div>
        {/* Skeleton Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-5 bg-primary/10 rounded-full w-16"></div>
          <div className="h-5 bg-primary/10 rounded-full w-20"></div>
          <div className="h-5 bg-primary/10 rounded-full w-12"></div>
        </div>
        {/* Skeleton Buttons */}
        <div className="flex gap-2 mt-auto">
          <div className="h-10 bg-secondary/20 rounded-md w-full"></div>
          <div className="h-10 bg-primary/20 rounded-md w-full"></div>
          <div className="h-10 bg-fg/10 rounded-md w-full"></div>
        </div>
      </div>
    </div>
  );
}
