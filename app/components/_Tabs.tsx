'use client';
import { Tabs } from 'flowbite-react';

import {TbDiscountCheckFilled} from 'react-icons/tb'


export default function DefaultTabs() {
  return (
    <div className='py-10'>
    <Tabs.Group
        aria-label="Default tabs"
        style="default"
    >
      <Tabs.Item
        active
        title="Stake"
      >


           {/* Stake Card */}
           <div id="equal-width-elements-1" role="tabpanel" aria-labelledby="equal-width-elements-item-1">
                <div className='flex-auto justify-center items-center h-auto w-auto p-2'>

                    {/* Amount Heading */}
                    <h2 className="text-base mt-2 mx-3 font-semibold text-left text-watchtower-gold">Stake Amount</h2>
                    
                    {/* Input textbox */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                            Price
                        </label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* <span className="text-gray-500 sm:text-sm">$</span> */}
                            </div>
                            <input
                            type="text"
                            name="price"
                            id="price"
                            className="block w-full rounded-md border-0 mt-2 mx-3 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="0.00"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="currency" className="sr-only">
                                Currency
                            </label>
                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                                <option>WTR</option>
                                {/* <option>USDC</option>
                                <option>EURC</option> */}
                            </select>
                            </div>
                        </div>

                    </div>

                    {/* Text */}
                    <p className="text-base mt-2 mx-3 py-1 text-left text-gray-400">Available: 5 WTR (<u className='cursor-pointer'>max</u>)</p>

                    {/* Confirm Stake Button */}
                    <div className="flex justify-center items-center">
                        <button className="my-5 px-10 py-3 bg-watchtower-gold content-center text-black rounded-md shadow hover:shadow-lg font-bold" >
                        <div className="flex justify-center items-center">
                            <TbDiscountCheckFilled size={20} />Confirm Stake
                        </div>
                        </button>
                    </div>

                </div>

            </div>



      </Tabs.Item>
      <Tabs.Item
        title="Dashboard"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item
        title="Settings"
      >
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </span>
          .
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
    </Tabs.Group>
    </div>
  )
}


