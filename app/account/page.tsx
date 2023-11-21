import React from 'react'
import { useState, useEffect } from 'react';
import { supabase } from '../client'
import { useRouter } from 'next/router';

const MyAccount = () => {

  const [profile, setProfile] = useState(null)
  const router = useRouter()

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    const { data: {user} } = await supabase.auth.getUser()
    if (!profile) {
      router.push('/auth')
    } else {
      setProfile(user)
    }
  }

  if (!profile) return null   // User had no profile/account
    
  // User has a profile/account
  return (
    <div className='flex-none justify-between items-center h-full w-full px-20 2xl:px-16'>

      <h2>Hello, {profile.email}</h2>
      <p>User ID: {profile.id}</p>

      {/* Profile Pic and Name */}
      <div className="p-5 pt-20">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th><h4 className="text-4xl font-bold text-watchtower-gold text-left">Nagata_270</h4></th>
              <th><h5 className="text-2xl font-bold text-watchtower-gold text-right">Profile Photo</h5></th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Summary Table */}
      <div className="table w-full pt-10">

        <div className="table-header-group">
          <div className="table-row font-extrabold text-watchtower-gold">
            <div className="table-cell text-center uppercase text-xs">Overall Rank</div>
            <div className="table-cell text-center uppercase text-xs">Stake</div>
            <div className="table-cell text-center uppercase text-xs">Return YTD</div>
            <div className="table-cell text-center uppercase text-xs">C-Score Rank</div>
          </div>
        </div>

        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell text-center pt-5 text-4xl">21</div>
            <div className="table-cell text-center pt-5 text-4xl">1523</div>
            <div className="table-cell text-center pt-5 text-4xl text-green-500">17.29%</div>
            <div className="table-cell text-center pt-5 text-4xl">1.01</div>
          </div>
        </div>

      </div>

      {/* Token Deposit and Withdraw */}
      <div>
        
      </div>

    </div>
  )
}

export default MyAccount;