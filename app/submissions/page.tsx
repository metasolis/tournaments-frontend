'use client'
import React, { useState, useRef } from 'react'
// import type { Metadata } from 'next'
import Link from 'next/link'
import {GiTwoCoins} from 'react-icons/gi'
import {HiMiniCpuChip} from 'react-icons/hi2'
import {MdCloudUpload} from 'react-icons/md'
import Image from 'next/image'
import Trophy from "../trophy.png";
import ManageStake from '../manage-stake/page'

// export const metadata: Metadata = {
//   title: 'Tournament Submissions',
//   description: 'Dora Data Science Tournaments Submissions',
// }

const Submissions = () => {

  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState<File>()

  // https://stackoverflow.com/questions/37457128/react-open-file-browser-on-click-a-div
  const inputFile = useRef<HTMLInputElement | null>(null);    
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    if (inputFile.current !== null) {
      inputFile.current.click();
    }
  };

  // // https://ethanmick.com/how-to-upload-a-file-in-next-js-13-app-directory/
  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   if (!file) return

  //   try {
  //     const data = new FormData()
  //     data.set('file', file)

  //     const res = await fetch('/api/upload', {
  //       method: 'POST',
  //       body: data
  //     })
  //     // handle the error
  //     if (!res.ok) throw new Error(await res.text())
  //   } catch (e: any) {
  //     // Handle errors here
  //     console.error(e)
  //   }
  // }

  return (

    <div className='flex-none justify-between items-center h-full w-full px-20 2xl:px-16'>

      <div className="p-5 pt-20">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th><h4 className="text-4xl font-bold text-watchtower-gold text-left">My Submissions (Nagata_270)</h4></th>
              <th><h5 className="text-2xl font-bold text-watchtower-gold text-right">Current Tournament: 3</h5></th>
            </tr>
          </thead>
        </table>
      </div>
      
      <div className="p-5 pt-10">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th><h4 className="text-2xl font-bold text-watchtower-gold text-left">Models (4)</h4></th>
            </tr>
          </thead>
        </table>
      </div>

      <div className="table w-full p-5 pt-10">

        <div className="table-header-group">
          <div className="table-row font-extrabold text-watchtower-gold">
            <div className="table-cell text-left">Model Name</div>
            <div className="table-cell text-center">Submissions</div>
            <div className="table-cell text-center">Latest Submission</div>
            <div className="table-cell text-center">Stake</div>
            {/* <div className="table-cell text-center">Manage Compute</div> */}
            <div className="table-cell text-center">Upload Submission</div>
          </div>
        </div>

        <div className="table-row-group">

          <div className="table-row">
            <div className="table-cell text-left pt-5">Model698</div>
            <div className="table-cell text-center pt-5">3</div>
            <div className="table-cell text-center pt-5">Aug 3 10:27 UTC</div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                {/* <Link href='/manage-stake'> */}
                  <GiTwoCoins size={23} className='cursor-pointer' onClick={() => setShowModal(true)}/>
                {/* </Link> */}
              </div>  
            </div>
            {/* <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <HiMiniCpuChip size={23} className='cursor-pointer' />
              </div>
            </div> */}
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center input-container'>
                {/* <form onSubmit={onSubmit}> */}
                  {/* <input
                    type="file"
                    name="file"
                    onChange={(e) => setFile(e.target.files?.[0])}
                  /> */}
                  
                  <input type='file' id='file' ref={inputFile} style={{display: 'none'}} />

                  <button onClick={onButtonClick}><MdCloudUpload size={23} className='cursor-pointer' /></button>

                  {/* <MdCloudUpload size={23} className='cursor-pointer' /> */}
                {/* </form> */}
                
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
            {/* <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <HiMiniCpuChip size={23} className='cursor-pointer' />
              </div>
            </div> */}
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <input type='file' id='file' ref={inputFile} style={{display: 'none'}} />
                <button onClick={onButtonClick}><MdCloudUpload size={23} className='cursor-pointer' /></button>
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
            {/* <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <HiMiniCpuChip size={23} className='cursor-pointer' />
              </div>
            </div> */}
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <input type='file' id='file' ref={inputFile} style={{display: 'none'}} />
                <button onClick={onButtonClick}><MdCloudUpload size={23} className='cursor-pointer' /></button>
              </div>
            </div>
          </div>

          <div className="table-row">
            <div className="table-cell text-left pt-5">ModelCA</div>
            <div className="table-cell text-center pt-5">7</div>
            <div className="table-cell text-center pt-5">Sept 21 10:45 UTC</div>
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                  <GiTwoCoins size={23} className='cursor-pointer' />
              </div>  
            </div>
            {/* <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <HiMiniCpuChip size={23} className='cursor-pointer' />
              </div>
            </div> */}
            <div className="table-cell text-center pt-5">
              <div className='flex justify-center'>
                <input type='file' id='file' ref={inputFile} style={{display: 'none'}} />
                <button onClick={onButtonClick}><MdCloudUpload size={23} className='cursor-pointer' /></button>
              </div>
            </div>
          </div>          

        </div>

      </div>

      {showModal ? ( 
      // <ManageStake value={[menuEnterPage, setMenuEnterPage]}/>
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image src={Trophy} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            May your life be filled with success and achievements.
            Congratulations!
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
            Stake
          </button>
        </div>
      ) : null}

    </div>
  )
}

export default Submissions