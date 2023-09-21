import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tournament Submissions',
  description: 'Dora Data Science Tournaments Submissions',
}

const Submissions = () => {
  return (
    <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
      <h1 className="text-5xl font-extrabold dark:text-white">Submissions</h1>
    </div>
  )
}

export default Submissions