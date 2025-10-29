import React from 'react';

export default function SkeletonCertCard() {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-secondary/20 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-secondary/20 rounded-full"></div>
        <div>
          <div className="h-4 bg-secondary/20 rounded w-48 mb-2"></div>
          <div className="h-3 bg-secondary/20 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
}
