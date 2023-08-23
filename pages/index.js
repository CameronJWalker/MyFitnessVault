import Link from 'next/link'
import WorkoutFeed from '../components/workoutFeed.js'
import NutritionFeed from '../components/nutritionFeed.js'
import PRLogFeed from '../components/prLogFeed.js'
import { useAuth } from '../AuthContext.js'
import Home from '../styles/Home.module.css'

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div>
      
      {user ? (
        <>
          <div className={Home.buttoncontainer}> 
            <Link href="/newWorkout"><button> New Workout </button></Link>
            <Link href="/nutrition"><button> New Nutrition </button></Link>
            <Link href="/prLog"><button> New Personal Record </button></Link>
          </div>
          <div className={Home.feedcontainer}>
            <img src="crown.png" className={Home.crown} alt="a red crown"/>
            <div className={Home.prlog}>
              <img src="flexing1.png" className={Home.leftarm} alt="a flexing arm"/>              
              <PRLogFeed />
              <img src="flexing2.png" className={Home.rightarm} alt="a flexing arm"/>                            
            </div>
            <WorkoutFeed />
            <NutritionFeed />
          </div>
        </>
      ) : (
        <div className={Home.container}>
          <div className={Home.welcomecontainer}> 
            <h1>Welcome to MyFitnessVault</h1>
            <p>
              Track your workouts, nutrition, and personal records all in one place. 
              Login to access your personalized dashboard and stay on top of your fitness journey. 
              Reach your goals, stay motivated, and achieve your best self with us. Lets get started!
            </p>
          </div>
          <Link href="/user" className={Home.userpagebtn} >Sign In / Sign up</Link>
        </div>
      )}
    </div>
  )
}
