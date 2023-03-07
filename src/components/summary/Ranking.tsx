import { ArrowDownIcon, PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

import styles from './Ranking.module.css';

const Ranking = () => {
  return <div className={`px-10 py-1 ${styles['half-background']}`}>
    <div className='rounded-md grid grid-flow-row md:grid-cols-2 mx-20 py-4 px-10 shadow-lg bg-gray-50'>
      <div className="px-4 py-3">
        <p className='font-semibold'>
          Our referrals are routed to the top performing agents in
          our network. Rankings are based on numerous factors,
          including:
        </p>
        <ul className={`font-semibold grid grid-flow-row grid-cols-2 grid-rows-2 list-inside mt-3 ${styles['list-plus']}`}>
          <li>Transaction Statistics</li>
          <li>Customer Satisfaction</li>
          <li>Responsiveness</li>
          <li>Portal Updates</li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-sm px-3 py-5">
        <div className="top grid lg:grid-cols-4 items-center grid-cols-3">
          <div className='text-xl font-bold col-span-2'>
            <h3>Your average rank in the markets you serve is:</h3>
          </div>
          <div className="grid grid-flow-col text-red-600 items-baseline gap-0 px-10">
            <span className="text-3xl font-bold">25</span>
            <ArrowDownIcon className='w-4' />
          </div>
          <div className='m-0 p-0 lg:flex hidden'>
            <button className='bg-red-500 rounded-md text-white text-xl p-2'>Learn More</button>
          </div>
        </div>
        <div className='mt-3'>
          <p>
            Your ranking will directli affect the number of refferals you
            receive. Learn about our
            <strong className="text-red-600 mx-1">Guaranteed Display</strong>
            program to help improve your ranking.
          </p>
        </div>
        <button className='bg-red-500 rounded-md text-white p-2 mt-2 min-w-full lg:hidden'>Learn More</button>
      </div>
    </div>
  </div>;
};

export default Ranking;
