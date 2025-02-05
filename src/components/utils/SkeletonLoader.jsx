import React from 'react';

const SkeletonLoader = ({ type }) => {
  if (type === 'project') {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-20 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
    </div>
  );
};

export default SkeletonLoader;