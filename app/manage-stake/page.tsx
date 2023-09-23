'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Trophy from "../trophy.png";
import { useRouter } from "next/router"

const ManageStake = ({modalHidden, router = useRouter()}) => {

  const [isActive, setActive] = useState(modalHidden);
  const [showModal, setShowModal] = useState(modalHidden);

  const handleToggle = () => {
    setActive(!isActive);
    if (isActive) {
      
    } else {
      setShowModal(router.asPath)
      console.log(showModal)
    }
  };

  return (
    // <div>ManageStake</div>
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <Image src={Trophy} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            May your life be filled with success and achievements.
            Congratulations!
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={handleToggle}
          >
            Stake
          </button>
        </div>
  );
  
}

export default ManageStake