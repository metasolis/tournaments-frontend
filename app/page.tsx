
'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from './spaceDebris.gif'
import CustomButton from './components/CustomButton'

export default function Home() {

  // const handleScroll = () => {
  //   const nextSection = document.getElementById("discover");

  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="flex relative bg-black">
      <Image src={HeroImage} alt="hero-image" fill className="object-contain" />      
      <div className="absolute flex-initial pt-36 sm:px-16 px-6">

        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-white">
          The most vital data science tournament for humanity.
        </h1>

        <p className="text-[27px] text-watchtower-gold font-bold mt-5">
          Predict Spacecraft Collision Risk
        </p>

        <Link href='/leaderboard'>
          <CustomButton
            title="Join the movement"
            containerStyles="bg-watchtower-ocean text-white rounded-full mt-10"
            // handleClick={handleScroll}
          />
        </Link>          

      </div>
      <div className="flex justify-center items-center w-full xl:h-screen">

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
        
      </div>
    </div>
    )
  }
  