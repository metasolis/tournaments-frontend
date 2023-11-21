'use client'
import { useState } from "react";
import { supabase } from '../client'
import Logo from "../Logo.png";
import Image from 'next/image'

const SignIn = () => {
    
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    // async function signIn() {
    //     if (!email) return            
    //     const { error, data } = await supabase.auth.signIn({
    //         email
    //     })
    //     if (error) {
    //         console.log({error})
    //     } else {
    //         setSubmitted(true)
    //     }
    // }
    // if (submitted) {
    //     return(
    //         <div className="flex-none justify-between items-center h-full w-full px-20 2xl:px-16">
    //             <h1 className='text-base p-5 text-white-400 font-bold text-left'>Please check your email to sign in</h1>
    //         </div>
    //     )
    // }

    return (
        // <div className="flex-none justify-between items-center h-full w-full px-20 2xl:px-16">
        //     <div className="mt-10 flex justify-center items-center flex-col w-75 rounded-lg h-auto p-2">
        //         <h1 className='text-base p-5 text-white-400 font-bold text-left uppercase'>
        //             Sign In
        //         </h1>
        //         <input 
        //             onChange={ e => setEmail(e.target.value)}
        //             style={{ margin: 10 }}
        //             // type="text"
        //         />
        //         <button onClick={ () => signIn() }>Sign In</button>
        //     </div>
        // </div>

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image className="mx-auto h-18 w-auto" src={Logo} alt="Watchtower" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-watchtower-gold">Sign up/in to your account</h2>
            </div>
        
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
                <div>
                <label className="block text-sm font-medium leading-6 text-white">Email address</label>
                <div className="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                </div>
        
                <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up/Sign In</button>
                </div>
            </form>
        
         </div>
        </div>
      
    )
}

export default SignIn