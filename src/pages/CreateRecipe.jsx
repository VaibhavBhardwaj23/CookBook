import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "./CreateRecipe.module.css";

// import { CreatePost } from "./CreatePost";

export default function CreateRecipe() {
  return (
   <div>
      <NavBar />
      <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="post">Recipe</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
   </div>

    // <CreatePost/>
  )
}
