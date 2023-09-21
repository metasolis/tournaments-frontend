import React from 'react'
import type { Metadata } from 'next'
// import { useRouter } from 'next/navigation'        {/** only works in client. Conflicts with metadata which only work in server mode: https://stackoverflow.com/questions/76353957/next-js-build-in-vercel-fails-when-with-meta-data-why */}

export const metadata: Metadata = {
  title: 'Dora Tournament Leaderboard',
  description: 'Dora Data Science Tournaments Leaderboard',
}

const Leaderboard = () => {
  // const router = useRouter();
  return (
    <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
      <h1 className="text-5xl font-extrabold dark:text-white">Leaderboard</h1>
      {/* <div>
        <button onClick={() => {
          router.push("/")
        }}></button>
      </div> */}
    </div>
  )
}

export default Leaderboard;