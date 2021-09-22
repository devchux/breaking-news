import Link from 'next/link'
import NavbarStyles from '../styles/Nav.module.css'

function Nav() {
    return (
        <nav className={NavbarStyles.nav}>
           <ul >
               <li><Link href="/">Home</Link></li>
               <li><Link href="/about">About Us</Link></li>
           </ul> 
        </nav>
    )
}

export default Nav
