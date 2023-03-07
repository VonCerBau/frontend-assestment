import React from 'react'

const ProgressBar = () => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-300">
      <div className="bg-cyan-600 h-1 rounded-full" style={{width: '45%'}}></div>
    </div>
  );
};

export default ProgressBar;
