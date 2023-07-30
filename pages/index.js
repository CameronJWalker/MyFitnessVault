import Link from 'next/link'
import WorkoutFeed from '../components/workoutFeed'
import NutritionFeed from '../components/nutritionFeed'
import PRLogFeed from '../components/prLogFeed'
import { useAuth } from '../AuthContext'
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
            <img src="crown.png" className={Home.crown}/>
            <div className={Home.prlog}>
              <img src="flexing1.png" className={Home.leftarm}/>              
              <PRLogFeed />
              <img src="flexing2.png" className={Home.rightarm}/>                            
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
              Reach your goals, stay motivated, and achieve your best self with us. Let's get started!
            </p>
          </div>
          <a href="/userPage" className={Home.userpagebtn} >Sign In / Sign up</a>
        </div>
      )}
    </div>
  )
}
