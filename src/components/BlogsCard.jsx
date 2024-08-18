/* eslint-disable react/prop-types */
import styles from "./BlogsCard.module.css"
import { Link } from "react-router-dom"

export default function BlogsCard({post}) {
  
  const src= post.img?post.img:"https://firebasestorage.googleapis.com/v0/b/cook-book-54a84.appspot.com/o/Blog%20Images%2Fhow-to-maintain-sustainable-eating-habits.jpg?alt=media&token=8bc6768a-ac3f-424b-81eb-9637ba106362";
  return (
    <Link className={styles.blogCard} to={`/blogs/${post.title}`}>
    <div >
      <img src={src}/>
      <p>{post.author}</p>
      <h2>{post.title}</h2>
    </div>
    </Link>
  )
}
