import React, { useState } from "react"
import User from "../styles/User.module.css"
import supabase from "@/pages/api/supabaseClient"
import { useRouter } from 'next/router';

export default function SignIn() {
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const router = useRouter();

    async function HandleLoginSubmit(e){
        e.preventDefault()
        await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setEmail('')
        setPassword('')
        router.push('/')
    };
    
    return (
        <div className={User.login}>
            <h2>Login</h2>
            <form onSubmit={HandleLoginSubmit}>
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