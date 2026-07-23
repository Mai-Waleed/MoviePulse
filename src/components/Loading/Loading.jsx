import React from 'react'

function Loading() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="w-1/2 md:w-1/3 lg:w-1/5 p-3 animate-pulse">
          <div className="bg-gray-700 rounded-xl h-85"></div>

          <div className="mt-3 h-5 bg-gray-700 rounded w-3/4"></div>

          <div className="mt-2 h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      ))}
    </>
  );
}

export default Loading