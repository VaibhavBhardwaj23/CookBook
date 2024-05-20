import GoBack from "../components/GoBack";
import NavBar from "../components/NavBar";
import PreLoader from "../components/PreLoader";
import style from "./BlogsPage.module.css"
export default function BlogsPage() {
  return (
    <>
    <PreLoader/>
        <NavBar/>
        <div className={style.blogList}>
        <h1>Nothing To See Here Yet 😞</h1>
        <GoBack/>
        </div>
    </>
  )
}
