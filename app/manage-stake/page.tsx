'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Trophy from "../trophy.png";
import { Dropdown } from "flowbite-react";


const ManageStake = () => {

  return (
    // <div>ManageStake</div>
    <div className='flex justify-center items-center h-full w-full px-20 2xl:px-16'>
      <div className="mt-10 flex justify-center flex-col w-75 rounded-lg shadow-xl h-auto p-7 border-solid border-2 border-watchtower-gold">
        {/* Heading */}
        <h1 className='text-base p-5 text-white-400 font-bold text-left uppercase'>Manage Stake</h1>

        {/* Dropdown */}
        <h2 className='text-base p-5 text-white-400 font-semibold text-left'>Select your Model</h2>

        {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-watchtower-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Select Your Model...<svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>

        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Model698</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kesslr34</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>

            </ul>
        </div> */}
        <div className='w-full py-1 px-5'>
          <Dropdown className='text-white bg-watchtower-blue hover:bg-watchtower-blue font-medium rounded-lg text-sm p-5 text-center inline-flex items-center' label="Model698">
            <Dropdown.Item>
              Kesslr34
            </Dropdown.Item>
            <Dropdown.Item>
              Model_Lagran
            </Dropdown.Item>
            <Dropdown.Item>
              ModelCA
            </Dropdown.Item>
          </Dropdown>
        </div>




        {/* Table */}
        <div className="table w-full p-5">
          <div className="table-row-group">
            <div className="table-row">
              <div className="table-cell text-left font-bold">Model Name</div>
              <div className="table-cell text-right">Model698</div>
            </div>
            <div className="table-row">
              <div className="table-cell text-left font-bold">Amount to Stake</div>
              <div className="table-cell text-right">1 WTR</div>
            </div>
            <div className="table-row">
                <div className="table-cell text-left font-bold">Preferred Payout</div>
                <div className="table-cell text-right">Compound</div>
            </div>
          </div>
        </div>


        <Image src={Trophy} width={100} height={100} objectFit="contain" />
        <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
          May your life be filled with success and achievements.
          Congratulations!
        </h2>
        <button className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold">
          Stake
        </button>
      </div>
    </div>
  );
  
}

export default ManageStake