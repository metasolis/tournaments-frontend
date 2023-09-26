'use client'
import React, { useState } from 'react'
// import type { Metadata } from 'next'
import Link from 'next/link'
import {GiTwoCoins} from 'react-icons/gi'
import {HiMiniCpuChip} from 'react-icons/hi2'
import {MdCloudUpload} from 'react-icons/md'
import Image from 'next/image'
import Trophy from "../championship-trophy.png";

// export const metadata: Metadata = {
//   title: 'Dora Tournament Leaderboard',
//   description: 'Dora Data Science Tournaments Leaderboard',
// }

const Leaderboard = () => {

  return (

    <div className='flex-none justify-between items-center h-full w-full px-20 2xl:px-16'>

      <div className="mt-10 flex justify-center items-center flex-col w-75 rounded-lg h-auto p-2">
        <Image src={Trophy} width={100} height={100} objectFit="contain" />
      </div>

      <div className="p-5">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th><h4 className="text-4xl font-bold text-watchtower-gold text-center">Tournament Leaderboard</h4></th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="table w-full p-5 pt-10">

        <div className="table-header-group">
          <div className="table-row font-extrabold text-watchtower-gold">
            <div className="table-cell text-left">Competitors</div>
            <div className="table-cell text-right">logloss (2D)</div>
            <div className="table-cell text-right">logloss (3D)</div>
            <div className="table-cell text-right">Stake</div>
            <div className="table-cell text-right">3M</div>
            <div className="table-cell text-right">6M</div>
            <div className="table-cell text-right">1Y</div>
          </div>
        </div>

        <div className="table-row-group">

          <div className="table-row">
            <div className="table-cell text-left pt-5">Nagata_270</div>
            <div className="table-cell text-right pt-5">0.52</div>
            <div className="table-cell text-right pt-5">0.56</div>
            <div className="table-cell text-right pt-5">114</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">0.85%</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">12.48%</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">64.51%</div>
          </div>

          <div className="table-row">
            <div className="table-cell text-left pt-5">Spock_101</div>
            <div className="table-cell text-right pt-5">0.74</div>
            <div className="table-cell text-right pt-5">0.51</div>
            <div className="table-cell text-right pt-5">54</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">0.45%</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">17.54%</div>
            <div className="table-cell text-right pt-5">-</div>
          </div>

          <div className="table-row">
            <div className="table-cell text-left pt-5">Anteaus_42</div>
            <div className="table-cell text-right pt-5">0.57</div>
            <div className="table-cell text-right pt-5">0.43</div>
            <div className="table-cell text-right pt-5">-</div>
            <div className="table-cell text-right pt-5">-</div>
            <div className="table-cell text-right pt-5">-</div>
            <div className="table-cell text-right pt-5">-</div>
          </div>

          <div className="table-row">
            <div className="table-cell text-left pt-5">Lya</div>
            <div className="table-cell text-right pt-5">0.51</div>
            <div className="table-cell text-right pt-5">0.54</div>
            <div className="table-cell text-right pt-5">45</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">0.34%</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">21.21%</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">51.12%</div>
          </div>

          <div className="table-row">
            <div className="table-cell text-left pt-5">JupiterJones</div>
            <div className="table-cell text-right pt-5">0.59</div>
            <div className="table-cell text-right pt-5">0.53</div>
            <div className="table-cell text-right pt-5">64</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">0.47%</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">23.12%</div>
            <div className="table-cell text-right pt-5">-</div>
          </div>

          <div className="table-row">
            <div className="table-cell text-left pt-5">Venus_108</div>
            <div className="table-cell text-right pt-5">0.55</div>
            <div className="table-cell text-right pt-5">0.67</div>
            <div className="table-cell text-right pt-5">15</div>
            <div className="table-cell text-right pt-5 text-red-500 font-bold">0.51%</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">19.54%</div>
            <div className="table-cell text-right pt-5 text-green-400 font-bold">43.47%</div>
          </div>

        </div>



      </div>


    </div>

  )
}

export default Leaderboard