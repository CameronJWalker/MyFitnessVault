import React, { useState } from "react"
import User from "../styles/User.module.css"
import supabase from "./api/supabaseClient.js"

export default function UserPage() {
    console.log(supabase)
    
    const [signUp, setSignUp] = useState({
        username: "",
        password: ""
    })
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const [loginMessage, setLoginMessage] = useState()

    const [signUpMessage, setSignUpMessage] = useState()
    
    async function HandleSignupSubmit(e){ 
        e.preventDefault()
        }
    async function HandleLoginSubmit(e){
        e.preventDefault()
    }
    return (
        <div className={User.container}>
            <div className="logo">
                <img src="2logo.png" alt="TheWorkoutApp" className={User.logo}/>
            </div>
            <div className={User.panel}>
                <div className={User.signup}>
                    <h2>SignUp</h2>
                    <form onSubmit={HandleSignupSubmit} className={User.signup}>
                        <label>Username</label>
                        <input required type="text" placeholder="Enter Username" onChange={e => {setSignUp({...signUp,username: e.target.value })}}/>
                        <label>Password</label>
                        <input required type="password" placeholder="Enter Password" onChange={e => {setSignUp({...signUp,password: e.target.value })}}/>
                        {signUpMessage ? <p id="ErrorMessage">{signUpMessage}</p> : <></>}
                        <div className={User.button}>
                            <input required type="submit" className={User.submit}/>
                        </div>
                    </form>
                </div>

                <div className={User.line}></div>

                <div className={User.login}>
                    <h2>Login</h2>
                    <form onSubmit={HandleLoginSubmit}>
                        <label>Username</label>
                        <input required type="text" placeholder="Enter Username" onChange={e => {setLogin({...login,username: e.target.value })}}/>
                        <label>Password</label>
                        <input required type="password" placeholder="Enter Password" onChange={e => {setLogin({...login,password: e.target.value })}}/>
                        {loginMessage ? <p id="ErrorMessage">{loginMessage}</p> : <></>}
                        <div className={User.button}>
                            <input required type="submit" className={User.submit}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}