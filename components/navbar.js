import Link from 'next/link'
import Nav from '../styles/Nav.module.css'

export default function Navbar() {
    return (
        <div className={Nav.bar}>
            <div className={Nav.title}>
                <Link href="/" className={Nav.homebutton}><h3>MyFitnessVault</h3></Link>
            </div>
                <Link href="/newworkout" className={Nav.homebutton}><p>Workout</p></Link>
                <Link href="/nutrition" className={Nav.homebutton}><p>Nutrition</p></Link>
                <Link href="/prlog" className={Nav.homebutton}><p>PR</p></Link>            
                <Link href="/userpage" className={Nav.homebutton}><img src="../user.png" className={Nav.icon}/></Link>
        </div>
    )
}