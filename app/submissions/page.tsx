'use client'
import React from 'react'
// import type { Metadata } from 'next'
import {GiTwoCoins} from 'react-icons/gi'
import {HiMiniCpuChip} from 'react-icons/hi2'
import {MdCloudUpload} from 'react-icons/md'


// export const metadata: Metadata = {
//   title: 'Tournament Submissions',
//   description: 'Dora Data Science Tournaments Submissions',
// }

const Submissions = () => {
  return (

    <div className='flex-none justify-between items-center h-full w-full px-20 2xl:px-16'>

      <div className="p-5 pt-20">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th><h4 className="text-4xl font-bold dark:text-white text-left">Submissions (Nagata_270)</h4></th>
              <th><h5 className="text-2xl font-bold dark:text-white text-right">Current Tournament: 3</h5></th>
            </tr>
          </thead>
        </table>
      </div>
      
      <div className="p-5 pt-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th><h4 className="text-2xl font-bold dark:text-white text-left">Models (3)</h4></th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="table w-full p-5 pt-10">

        <div className="table-header-group">
          <div className="table-row font-extrabold">
            <div className="table-cell text-left">Model Name</div>
            <div className="table-cell text-center">Submissions</div>
            <div className="table-cell text-center">Latest Submission</div>
            <div className="table-cell text-center">Stake</div>
            <div className="table-cell text-center">Manage Compute</div>
            <div className="table-cell text-center">Upload Model</div>
          </div>
        </div>

        <div className="table-row-group">

          <div className="table-row">
            <div className="table-cell text-left pt-5">Model698</div>
            <div className="table-cell text-center pt-5">3</div>
            <div className="table-cell text-center pt-5">Aug 3 10:27 UTC</div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                  <GiTwoCoins size={23} className='cursor-pointer' />
              </div>  
            </div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <HiMiniCpuChip size={23} className='cursor-pointer' />
              </div>
            </div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <MdCloudUpload size={23} className='cursor-pointer' />
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell text-left pt-5">Kesslr34</div>
            <div className="table-cell text-center pt-5">5</div>
            <div className="table-cell text-center pt-5">Jan 29 13:25 UTC</div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                  <GiTwoCoins size={23} className='cursor-pointer' />
              </div>  
            </div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <HiMiniCpuChip size={23} className='cursor-pointer' />
              </div>
            </div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <MdCloudUpload size={23} className='cursor-pointer' />
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell text-left pt-5">Model_Lagran</div>
            <div className="table-cell text-center pt-5">1</div>
            <div className="table-cell text-center pt-5">Nov 17 17:39 UTC</div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                  <GiTwoCoins size={23} className='cursor-pointer' />
              </div>  
            </div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <HiMiniCpuChip size={23} className='cursor-pointer' />
              </div>
            </div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <MdCloudUpload size={23} className='cursor-pointer' />
              </div>
            </div>
          </div>

      </div>
        {/* <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="text-left">Model Name</th>
              <th>Submissions</th>
              <th>Latest Submission</th>
              <th>Stake</th>
              <th>Manage Compute</th>
              <th>Upload Model</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="text-left">Model698</td>
              <td>3</td>
              <td>Aug 3 10:27 UTC</td>
              <td>
                <div className='flex justify-center'>
                  <GiTwoCoins size={23} className='cursor-pointer' />
                </div>
              </td>
              <td>
                <div className='flex justify-center'>
                  <HiMiniCpuChip size={23} className='cursor-pointer' />
                </div>
              </td>
              <td>
                <div className='flex justify-center'>
                  <MdCloudUpload size={23} className='cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left">Kesslr34</td>
              <td>5</td>
              <td>Jan 29 13:25 UTC</td>
              <td>
                <div className='flex justify-center'>
                  <GiTwoCoins size={23} className='cursor-pointer' />
                </div>
              </td>
              <td>
                <div className='flex justify-center'>
                  <HiMiniCpuChip size={23} className='cursor-pointer' />
                </div>
              </td>
              <td>
                <div className='flex justify-center'>
                  <MdCloudUpload size={23} className='cursor-pointer' />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left">Model_Lagran</td>
              <td>1</td>
              <td>Nov 17 17:39 UTC</td>
              <td>
                <div className='flex justify-center'>
                  <GiTwoCoins size={23} className='cursor-pointer' />
                </div>
              </td>
              <td>
                <div className='flex justify-center'>
                  <HiMiniCpuChip size={23} className='cursor-pointer' />
                </div>
              </td>
              <td>
                <div className='flex justify-center'>
                  <MdCloudUpload size={23} className='cursor-pointer' />
                </div>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>

    </div>
  )
}

export default Submissions