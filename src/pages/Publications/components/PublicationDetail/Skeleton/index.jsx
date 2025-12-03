import React from 'react';

const PublicationDetailSkeleton = () => {
  return (
    <section className='w-full text-fg flex items-center justify-center'>
      <div className='w-full mt-3 flex flex-col justify-center items-center md:max-w-7xl md:p-6 bg-bg2/30 shadow-2xl border border-secondary/30 rounded-2xl animate-pulse'>
        <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
        <div className='mt-6 flex'>
          <div className="h-10 w-32 bg-secondary/30 rounded mr-4"></div>
          <div className="h-10 w-24 bg-secondary/30 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default PublicationDetailSkeleton;
