import React from 'react';

import { ArrowTrendingUpIcon, ChartPieIcon } from '@heroicons/react/24/outline';

const Metrics = () => {
  return <div className='grid bg-zinc-800 px-20 py-10 grid-flow-row lg:grid-flow-col lg:grid-cols-2'>
    <div className='text-white xl:mx-20 xl:px-10 xl:py-5'>
      <h3 className='mb-5 text-2xl font-medium'>SOLD.com Differece</h3>
      <p className='mb-5'>
        Unlike other lead sources and portals, we don't focus on
        worthless metrics like impressions or even leads. SOLD.com
        shows you how many clients actually cross the finish line
        and buy or sell a home.
      </p>
      <p>After all, isn't that metric that matters most?</p>
    </div>
    <div className='rounded-md bg-gray-50 xl:mx-20 xl:px-10 xl:py-5 sm:p-5'>
      <p className='text-md font-semibold'>In your zips over the last 18 months, we-ve originated:</p>
      <div className='grid grid-cols-2 divide-x-2 divide-gray-100 m-4'>
        <div className="px-4 py-2">
          <div className="rounded-full h-8 w-8 bg-red-600 p-1 text-white mb-2">
            <ArrowTrendingUpIcon className='h-6 w-6' />
          </div>

          <h1 className='text-3xl font-bold mb-2'>$20M</h1>
          <span className='text-sm font-semibold text-gray-700'>in sales</span>
        </div>
        <div className="pl-10 py-2">
          <div className="rounded-full h-8 w-8 bg-lime-600 p-1 text-white mb-2">
            <ChartPieIcon className='h-6 w-6' />
          </div>

          <h1 className='text-3xl font-bold mb-2'>$500K</h1>
          <span className='text-sm font-semibold text-gray-700'>in Commissions (est)</span>
        </div>
      </div>
    </div>
  </div>;
};

export default Metrics;
