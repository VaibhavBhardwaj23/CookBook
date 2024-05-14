import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useState } from 'react'

export default function NavBar() {
const [isMenuOpen,setMenuOpen]=useState(false)
if (isMenuOpen) {
  document.body.classList.add('no-scroll');
} else {
  document.body.classList.remove('no-scroll');
}

  return (
    <div className={styles.navbar}>
        <h1>The Recipe Book.</h1>
        <nav className={styles.navigation}>
        <ul>
            <li><NavLink to={'blogs'}>Blogs</NavLink></li>
            <li><NavLink to={'popular'}>Popular</NavLink></li>
            <li><NavLink to={'create'}>Create</NavLink></li>
            <li><a className={styles.signUp}>Sign Up</a></li>
            <li><a className={styles.login}>Log In</a></li>
        </ul>
        </nav>


        {/* Mobile Navigation */}
        <div className="Slider">
  <div className={isMenuOpen?"hamburger-box active":"hamburger-box"} onClick={()=>{setMenuOpen(!isMenuOpen)}} >
    <div className="hamburger"></div>
  </div>
</div>
<div className={isMenuOpen?`${styles.show} ${styles.mobileMenu}`:`${styles.mobileMenu}`}>
<Link className={styles.mobileLinks}  to={'blog'}>Blogs</Link>
<Link className={styles.mobileLinks} to={'popular'}>Popular</Link>
<Link className={styles.mobileLinks} to={'create'}>Create</Link>
<Link className={styles.mobileLinks} to={'signup'}>Sign Up</Link>
<Link className={styles.mobileLinks} to={'login'}>Log In</Link>
</div>

   </div>
       
  )
}
