import User from "../styles/User.module.css"
import supabase from "./api/supabaseClient.js"
import SignUp from "../components/signup"
import SignIn from "../components/signin"

export default function UserPage() {
    
    const handleSignOut = async () => {
        await supabase.auth.signOut()
      }
      
    return (
        <div className={User.container}>
            <div className="logo">
                <img src="2logo.png" alt="TheWorkoutApp" className={User.logo}/>
            </div>
            <div className={User.panel}>
                <SignUp />
                <div className={User.line}></div>
                <SignIn />
                <button onClick={handleSignOut}>Sign out</button>
            </div>
        </div>
    )
}