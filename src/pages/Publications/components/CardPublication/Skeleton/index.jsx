import React from 'react';

const CardPublicationSkeleton = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div className="bg-bg2/30 border border-secondary/60 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all md:w-50 lg:w-80 px-4 mb-8 animate-pulse">
        <div className="h-56 w-full mt-2 bg-gray-300 dark:bg-gray-700 rounded-t-lg"></div>
        <div className="p-6">
          <div className="h-6 bg-fg rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-fg rounded w-1/2 mb-4"></div>
          <div className='flex flex-col justify-end items-end'>
            <div className="h-10 w-20 py-2 px-3 bg-primary/30 border rounded border-secondary "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPublicationSkeleton;
