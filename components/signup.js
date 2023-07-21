import React, { useState } from "react"
import User from "../styles/User.module.css"
import supabase from "@/pages/api/supabaseClient"
import { useRouter } from 'next/router';

export default function SignUp({ signedIn }) {
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const router = useRouter();

    async function HandleSignupSubmit(e){ 
        e.preventDefault()
        const { user, error } = await supabase.auth.signUp({
            email,
            password
        });
        if (error) {
            console.error('Error: ', error);
        } else {
            console.log('Successful: ', email);
            router.push('/')

        }
        setEmail('')
        setPassword('')
    };

    return (
        <div className={User.signup}>
            <h2>SignUp</h2>
            <form onSubmit={HandleSignupSubmit} className={User.signup}>
                <label>Username</label>
                <input 
                    required 
                    type="email" 
                    placeholder="Enter Username" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input 
                    required 
                    type="password" 
                    placeholder="Enter Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={User.button}>
                   <input required type="submit" className={User.submit}/>
                </div>
            </form>
        </div>
    )
}