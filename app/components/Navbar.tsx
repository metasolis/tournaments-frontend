'use client'        // tells nextjs that this is client-side rendering for components like useState
import React from 'react'
import Image from 'next/image'
import Logo from '../Logo.png'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineTwitter, AiFillRedditCircle, AiFillGithub} from 'react-icons/ai'
import {BiLogoDiscordAlt, BiLogoDiscourse, BiSolidUserCircle} from 'react-icons/bi'
import {SiGitbook} from 'react-icons/si'
import { useState } from 'react'

const Navbar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <nav className='sticky top-0 w-full h-24 shadow-xl'>            {/* Sticky Navbar */} 
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
            <Link href='/'>
            <Image
            src={Logo}
            alt='Logo'
            width="100"
            height="100"
            className="cursor-pointer"
            priority
            />
            </Link>
            <div className='hidden sm:flex'>
                <ul className='hidden sm:flex'>
                    <Link href='/leaderboard'>
                        <li className='ml-10 capitalcase hover:border-b text-l'>Leaderboard</li>
                    </Link>
                    {/* <Link href='/forum'>
                        <li className='ml-10 capitalcase hover:border-b text-l'>Docs</li>
                    </Link> */}
                    <Link href='/submissions'>
                        <li className='ml-10 capitalcase hover:border-b text-l'>Submissions</li>
                    </Link>
                    <Link href='/account'>
                        <li className='ml-10 capitalcase hover:border-b text-l'>
                            <BiSolidUserCircle size={23} />
                            {/* My Account */}
                        </li>
                    </Link>
                    {/* <Link href='/discord'>
                        <li className='ml-10 capitalcase hover:border-b text-l'>
                            <BiLogoDiscordAlt size={23} />
                        </li>
                    </Link> */}
                </ul>
            </div>
            {/* Hamburger Menu for mobile */}
            <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                <AiOutlineMenu size={20} />
            </div>
        </div>
        {/* Mobile Menu */}
        <div className={
            menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#0E1929] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
            <div className='flex w-full items-center justify-end'>
                <div onClick={handleNav} className='cursor-pointer'>
                    <AiOutlineClose size={20} />
                </div>
            </div>
            <div className='flex-col py-4'>
                <ul>
                    <Link href='/leaderboard'>
                        <li 
                            onClick={() => setMenuOpen(false)}
                            className='py-4 cursor-pointer'
                        >
                            Leaderboard
                        </li>
                    </Link>
                    {/* <Link href='/forum'>
                        <li 
                            onClick={() => setMenuOpen(false)}
                            className='py-4 cursor-pointer'
                        >
                            Docs
                        </li>
                    </Link> */}
                    <Link href='/submissions'>
                        <li 
                            onClick={() => setMenuOpen(false)}
                            className='py-4 cursor-pointer'
                        >
                            Submissions
                        </li>
                    </Link>
                    <Link href='/account'>
                        <li 
                            onClick={() => setMenuOpen(false)}
                            className='py-4 cursor-pointer'
                        >
                            <BiSolidUserCircle size={23} />
                            {/* My Account */}
                        </li>
                    </Link>                                          
                </ul>
            </div>
            <div className='flex flex-row justify-around pt-6 items-center'>
                <AiOutlineTwitter size={20} className='cursor-pointer' />
                <AiFillRedditCircle size={20} className='cursor-pointer' />
                <AiFillGithub size={20} className='cursor-pointer' />
            </div>
            <div className='flex flex-row justify-around pt-6 items-center'>
                <BiLogoDiscordAlt size={20} className='cursor-pointer' />
                <BiLogoDiscourse size={20} className='cursor-pointer' />
                <SiGitbook size={20} className='cursor-pointer' />
            </div>
            <Link href='/'>
            <Image
            src={Logo}
            alt='Logo'
            width="100"
            height="100"
            className="cursor-pointer pt-6"
            priority
            />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar