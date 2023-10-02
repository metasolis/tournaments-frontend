
'use client'
import React, { useEffect } from 'react'
import Hero from './components/Hero'
import CustomButton from './components/CustomButton'

export default function Home() {

  // useEffect(() => {
  //   import("preline")
  // }, [])

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          The most vital data science tournament for humanity.
        </h1>

        <p className="hero__subtitle">
          Predict Spacecraft Collision Risk
        </p>

        {/* <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          {/* <Image src="/hero.png" alt="hero" fill className="object-contain" /> */}
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
    )
  }
  