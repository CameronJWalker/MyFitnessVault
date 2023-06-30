import Link from 'next/link'
import HomeFeed from '../components/feed'
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
        <HomeFeed />
      </div>
    </div>
  )
}
