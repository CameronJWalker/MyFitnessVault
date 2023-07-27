import User from "../styles/User.module.css"
import SignUp from "../components/signUp"
import SignIn from "../components/signIn"
import { useAuth } from '../AuthContext'

export default function UserPage() {
    const { user, logout } = useAuth();
    
    const handleSignOut = async () => {
        await logout();
      };
    
      
    return (
        <div>
            <div className="logo">
                <img src="2logo.png" alt="TheWorkoutApp" className={User.logo}/>
            </div>
            <div className={User.panel}>
                <SignUp />
                <div className={User.line}></div>
                <SignIn />
            </div>
            {user && (
            <div className={User.buttonContainer}>
                <button className={User.signOut} onClick={handleSignOut}>Sign out</button>
            </div>
            )}
        </div>
    )
}