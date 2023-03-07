import { StarIcon, CheckIcon, InformationCircleIcon, MinusIcon } from '@heroicons/react/24/solid'
import React from 'react'

const MemberBar = () => {
  return (
    <div className='hidden lg:grid grid-flow-col grid-cols-2 py-3 px-10 justify-start '>
      <div className=''>
        <strong>Hi Brandon Hobbs!</strong>
        <span className='px-1 text-sm font-semibold ml-3'>Member since January 2020</span>
      </div>

      <div className='grid grid-flow-col items-center justify-end gap-3'>
        <div className='col-span-6 font-bold'>SOLD.com rank: GOLD</div>
        
        <div className='grid grid-flow-col items-center justify-between'>
          <InformationCircleIcon className='h-5 w-5 text-gray-400 font-bold mr-2'/>
          <CheckIcon className='h-5 w-5 rounded-full bg-cyan-700 text-white p-1' />
          <MinusIcon className='w-3 text-gray-700'/>
          <StarIcon className='rounded-full h-5 w-5 bg-blue-700 text-white p-1'/>
          <MinusIcon className='w-3 text-gray-700'/>
          <StarIcon className='rounded-full h-8 w-8 bg-yellow-500 text-white p-1' />
          <MinusIcon className='w-3 text-gray-200'/>
          <StarIcon className='rounded-full h-5 w-5 bg-gray-400 text-white p-1' />
        </div>
      </div>
    </div>
  );
};

export default MemberBar;
