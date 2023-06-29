import Link from 'next/link'

export default function Home() {

  return (
    <div className="button-container"> 
      <Link href="/newworkout"><button> New Workout </button></Link>
      <Link href="/nutrition"><button> New Nutrition </button></Link>
      <Link href="/prlog"><button> New Personal Record </button></Link>
    </div>
  )
}
