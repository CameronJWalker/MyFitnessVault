import Link from 'next/link'
import WorkoutFeed from '../components/WorkoutFeed'
import NutritionFeed from '../components/NutritionFeed'

import Home from '../styles/Home.module.css'

export default function HomePage() {

  return (
    <div className={Home.buttoncontainer}> 
      <div>
        <Link href="/newworkout"><button> New Workout </button></Link>
        <Link href="/nutrition"><button> New Nutrition </button></Link>
        <Link href="/prlog"><button> New Personal Record </button></Link>
      </div>
      <div className={Home.feedcontainer}>
        <WorkoutFeed />
        <NutritionFeed />
      </div>
    </div>
  )
}
