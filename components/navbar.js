import Link from 'next/link'
import Nav from '../styles/Nav.module.css'

export default function Navbar() {
    return (
        <div className={Nav.bar}>
            <p>Workout App</p>
            <Link href="/" className={Nav.homebutton}><p>Home</p></Link>
        </div>
    )
}