import React from 'react';

function Output({ task, des, onRemove }) {
  const handleRemove = (index) => {
    // Call the onRemove callback with the index of the task to be removed
    onRemove(index);
  };

  return (
    
    <div className='flex flex-col justify-between m-8 p-4'>

     
      {task.map((t, i) => (
        <div
          key={i}
          className='flex bg-gradient-to-r from-blue-100 via-purple-400 to-orange-200 border-gray-400 border-2 justify-between p-3 rounded mb-4'
        >
          <div className='flex flex-col'>
            <div className='font-semibold'>{t}</div>
            <div className='text-gray-500'>{des[i]}</div>
          </div>
          <button
            className='bg-orange-100 font-semibold px-2 py-1 rounded  border-gray-500 border p-2 hover:bg-orange-200 hover:border-gray-500 cursor-pointer'
            onClick={() => handleRemove(i)} // Call handleRemove with the index
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Output;
