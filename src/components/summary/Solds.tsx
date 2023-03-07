import React, { Fragment } from 'react'
import Card from '../UI/Card';
import { FaceFrownIcon, FaceSmileIcon, UsersIcon } from '@heroicons/react/24/outline';

const Solds = () => {
  return <Fragment>
    <div className='font-bold text-xl mt-10 ml-10 grid grid-flow-col justify-start items-center'>
      <div className='w-4 h-8 bg-red-600 rounded-sm m-2'></div>
      Since you joined our network, here's what we've been up to join your zip codes:
    </div>
    <div className="grid lg:grid-flow-col gap-3 m-10 grid-flow-row">
      <Card>
        <UsersIcon className='w-16 h-16 rounded-full bg-gray-300 p-3' />
        <h1 className='font-semibold text-4xl my-4'>Opportunity</h1>
        <div className="grid grid-flow-row divide-y divide-dashed">
          <div className='grid grid-flow-col my-4'>
            <div>
              <p>SOLD.com</p>
              <p>Leads</p>
            </div>
            <div>
              <h2 className='text-3xl font-bold text-right text-cyan-600'>500</h2>
            </div>
          </div>
          <div className='grid grid-flow-col'>
            <div>
              <p>Customers we </p>
              <p>promote you to</p>
            </div>
            <div>
              <h2>100</h2>
              <span className="somebar">------ (xx%)</span>
            </div>
          </div>
          <div className='grid grid-flow-col'>
            <div>
              <p>Appointments </p>
              <p>set with you</p>
            </div>
            <div className="col-2">
              <h2>30</h2>
            </div>
          </div>
        </div>
      </Card>
      <Card className="col-2">
        <FaceSmileIcon className='w-16 h-16 rounded-full bg-gray-300 p-3' />
        <h1 className='font-semibold text-4xl my-4'>Wins</h1>
        <div className='grid grid-flow-row divide-y divide-dashed'>
          <div className='grid grid-flow-col'>
            <div>
              <p>Your signed </p>
              <p>agreements</p>
            </div>
            <div className="col-2">
              <h2 className='text-3xl font-bold text-right text-lime-600'>15</h2>
            </div>
          </div>
          <div className='grid grid-flow-col'>
            <div>
              <p>Your closings</p>
            </div>
            <div className="col-2">
              <h3 className='text-2xl font-bold text-right text-lime-600'>10</h3>
            </div>
          </div>
          <div className='grid grid-flow-row text-right my-3'>
            <p className='font-semibold'>Your closed volume</p>
            <h2 className='text-lime-600 text-2xl font-semibold'>$3,000,000</h2>
          </div>
          <div className='grid grid-flow-row text-right my-3'>
            <p className='font-semibold'>Your commission (est)</p>
            <h2 className='text-lime-600 text-2xl font-semibold'>$500,00</h2>
          </div>
        </div>
      </Card>
      <Card className="col-3">
        <FaceFrownIcon className='w-16 h-16 rounded-full bg-gray-300 p-3' />
        <h1 className='font-semibold text-4xl my-4'>Losses</h1>
        <div className='grid grid-flow-row divide-y divide-dashed'>
          <div className='grid grid-flow-col align-middle'>
            <div>
              <p>Appointments that signed </p>
              <p>with another agent</p>
            </div>
            <div className="col-2">
              <h2 className='text-right font-bold text-red-600 text-3xl'>15</h2>
            </div>
          </div>
          <div className='grid grid-flow-col'>
            <div>
              <p>Lost closings</p>
            </div>
            <div className="col-2">
              <h3 className='text-right font-bold text-red-600 text-2xl'>10</h3>
            </div>
          </div>
          <div className='grid grid-flow-row text-right my-3'>
            <p className='font-semibold'>Lost volume</p>
            <h1 className='text-red-600 text-2xl font-semibold'>$3,000,000</h1>
          </div>
          <div className='grid grid-flow-row text-right my-3'>
            <p className='font-semibold'>Lost commission</p>
            <h1 className='text-red-600 text-2xl font-semibold'>$500,00</h1>
          </div>
        </div>
      </Card>
    </div>
    <div className="text-center">
      <h3 className='text-2xl font-bold'>Unsatisfied with these stats? We can help you improve them.</h3>
      <button className='bg-red-600 rounded-md text-white px-6 py-2 my-5 text-md font-semibold'>Schedule A Call</button>
    </div>
  </Fragment>;
};

export default Solds;
