import { useState } from "react";
import { supabase } from '../client'

const SignIn = () => {
    
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    async function signIn() {
        if (!email) return            
        const { error, data } = await supabase.auth.signIn({
            email
        })
        if (error) {
            console.log({error})
        } else {
            setSubmitted(true)
        }
    }
    if (submitted) {
        return(
            <div className="flex-none justify-between items-center h-full w-full px-20 2xl:px-16">
                <h1 className='text-base p-5 text-white-400 font-bold text-left'>Please check your email to sign in</h1>
            </div>
        )
    }

    return (
        <div className="flex-none justify-between items-center h-full w-full px-20 2xl:px-16">
            <div className="mt-10 flex justify-center items-center flex-col w-75 rounded-lg h-auto p-2">
                <h1 className='text-base p-5 text-white-400 font-bold text-left uppercase'>
                    Sign In
                </h1>
                <input 
                    onChange={ e => setEmail(e.target.value)}
                    style={{ margin: 10 }}
                    // type="text"
                />
                <button onClick={ () => signIn() }>Sign In</button>
            </div>
        </div>
    )
}

export default SignIn