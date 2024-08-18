import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useState } from 'react'
import {useAuthProvider} from "../Context/AuthContext"

export default function NavBar() {
const [isMenuOpen,setMenuOpen]=useState(false)
if (isMenuOpen) {
  document.body.classList.add('no-scroll');
} else {
  document.body.classList.remove('no-scroll');
}
const {handleLogin,handleSignOut,isAuth}= useAuthProvider()

  return (
    <div className={styles.navbar}>
    <Link className='link' to={"/"}>
    <h1>The Recipe Book.</h1>
    </Link>
        <nav className={styles.navigation}>
        <ul>
            <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
            <li><NavLink to={'/popular'}>Popular</NavLink></li>
            <li><NavLink to={'/create'}>Create</NavLink></li>
            <li><NavLink to={'/tasty-trades'}>Tasty Trades</NavLink></li>
            <li><a
              onClick={handleSignOut}
              className={!isAuth ? `${styles.out}` : `${styles.signUp}`}
            >
              Sign Out
            </a>
          </li>
          <li>
            <a
              className={isAuth ?` ${styles.out}` : `${styles.login}`}
              onClick={handleLogin}
            >
              Log In
              </a></li>
        </ul>
        </nav>


        {/* Mobile Navigation */}
        <div className="Slider">
  <div className={isMenuOpen?"hamburger-box active":"hamburger-box"} onClick={()=>{setMenuOpen(!isMenuOpen)}} >
    <div className="hamburger"></div>
  </div>
</div>
<div className={isMenuOpen?`${styles.show} ${styles.mobileMenu}`:`${styles.mobileMenu}`}>
<ul>
            <li className={styles.mobileLinks} ><NavLink className={styles.navlink}  to={'/blogs'}>Blogs</NavLink></li>
            <li className={styles.mobileLinks} ><NavLink className={styles.navlink} to={'/popular'}>Popular</NavLink></li>
            <li className={styles.mobileLinks} ><NavLink className={styles.navlink}  to={'/create'}>Create</NavLink></li>
            <li className={styles.mobileLinks} ><NavLink className={styles.navlink}  to={'/tasty-trades'}>Tasty Trades</NavLink></li>
            <li className={styles.mobileLinks}><a
              onClick={handleSignOut}
              className={!isAuth ? `${styles.out}` : `${styles.signUp}`}
            >
              Sign Out
            </a>
          </li>
          <li className={styles.mobileLinks} >
            <a
              className={isAuth ?` ${styles.out}` : `${styles.login}`}
              onClick={handleLogin}
            >
              Log In
              </a></li>
        </ul>
</div>

   </div>
       
  )
}
