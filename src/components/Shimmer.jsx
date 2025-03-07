import React from 'react';

const Shimmer = () => {
  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      {/* Chat box container */}
      <div className="bg-white rounded-lg shadow-md p-4 w-full border border-gray-200">
        {/* Shimmer lines */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="animate-pulse flex space-x-4 mb-3">
            <div 
              className={`h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded ${
                index === 0 ? 'w-3/4' : 
                index === 5 ? 'w-1/2' : 
                'w-full'
              }`}
            ></div>
          </div>
        ))}
        
        {/* Shorter lines */}
        <div className="animate-pulse flex space-x-4 mb-3">
          <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-2/3"></div>
        </div>
        
        <div className="animate-pulse flex space-x-4">
          <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;