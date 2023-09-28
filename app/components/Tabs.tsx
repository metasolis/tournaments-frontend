import React from 'react'
import Image from "next/image";
import {TbDiscountCheckFilled} from 'react-icons/tb'

export default function Tabs() {
    return (
      <div className='py-10'>
        <div className="border-b border-gray-200 px-4 dark:border-gray-700">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" className="hs-tab-active:bg-blue-600 hs-tab-active:text-white font-bold uppercase basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-white dark:hover:text-white active" id="equal-width-elements-item-1" data-hs-tab="#equal-width-elements-1" aria-controls="equal-width-elements-1" role="tab">
                Stake
            </button>
            <button type="button" className="hs-tab-active:bg-watchtower-ocean hs-tab-active:text-white font-bold uppercase basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-white dark:hover:text-white dark:hover:text-gray-300" id="equal-width-elements-item-2" data-hs-tab="#equal-width-elements-2" aria-controls="equal-width-elements-2" role="tab">
                Un-Stake
            </button>
            <button type="button" className="hs-tab-active:bg-watchtower-ocean hs-tab-active:text-white font-bold uppercase basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-white dark:hover:text-white dark:hover:text-gray-300" id="equal-width-elements-item-3" data-hs-tab="#equal-width-elements-3" aria-controls="equal-width-elements-3" role="tab">
                Claim
            </button>
        </nav>
        </div>
  
        <div className="mt-3">


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
            

            {/* Unstake Card */}
            <div id="equal-width-elements-2" className="hidden" role="tabpanel" aria-labelledby="equal-width-elements-item-2">

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
            <div id="equal-width-elements-3" className="hidden" role="tabpanel" aria-labelledby="equal-width-elements-item-3">
                <p className="text-gray-500 dark:text-gray-400">
                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
                </p>
            </div>
            </div>
      </div>
    );
  }
  