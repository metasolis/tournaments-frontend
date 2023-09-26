import React from 'react'

export default function Tabs() {
    return (
      <div className='py-10'>
        <div className="border-b border-gray-200 px-4 dark:border-gray-700">
        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
            <button type="button" className="hs-tab-active:bg-blue-600 hs-tab-active:text-watchtower-gold font-bold basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-white dark:hover:text-white active" id="equal-width-elements-item-1" data-hs-tab="#equal-width-elements-1" aria-controls="equal-width-elements-1" role="tab">
                Stake
            </button>
            <button type="button" className="hs-tab-active:bg-watchtower-ocean hs-tab-active:text-watchtower-gold font-bold basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-white dark:hover:text-white dark:hover:text-gray-300" id="equal-width-elements-item-2" data-hs-tab="#equal-width-elements-2" aria-controls="equal-width-elements-2" role="tab">
                Un-Stake
            </button>
            <button type="button" className="hs-tab-active:bg-watchtower-ocean hs-tab-active:text-watchtower-gold font-bold basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-white dark:hover:text-white dark:hover:text-gray-300" id="equal-width-elements-item-3" data-hs-tab="#equal-width-elements-3" aria-controls="equal-width-elements-3" role="tab">
                Claim
            </button>
        </nav>
        </div>
  
        <div className="mt-3">
            <div id="equal-width-elements-1" role="tabpanel" aria-labelledby="equal-width-elements-item-1">
                <p className="text-gray-500 dark:text-gray-400">
                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
                </p>
            </div>
            <div id="equal-width-elements-2" className="hidden" role="tabpanel" aria-labelledby="equal-width-elements-item-2">
                <p className="text-gray-500 dark:text-gray-400">
                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
                </p>
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
  