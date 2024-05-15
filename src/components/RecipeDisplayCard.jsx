/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from "./RecipeCard.module.css"
export default function RecipeDisplayCard({recipe}) {
    const {id,image,name,cuisine,difficulty,tags,prepTimeMinutes,servings} = recipe
  return (
  <Link className="link" to={`/recipe/${id}`}>
     <div className={styles.cardContainer}>
   
   <div className={styles.imageBox}>
  <img  src={image}/>
  </div>
  <div className={styles.recipeBrief}>
  <h3 className={styles.name}>{name}</h3>
  <div className={styles.second}>
  <h3 className={styles.cuisine}>{cuisine}</h3>
  <h3 className={styles.difficulty}>{difficulty}</h3>
  </div>
 <div className={styles.third}>
 <h3 className={styles.servings}>Servings: {servings}</h3>
  <h3 className={styles.prepTimeMinutes}>Time: {prepTimeMinutes} <span style={{fontSize:"0.7rem"}}>min</span></h3>
 </div>
  <div className={styles.tags}>
  {tags.map((tag)=>
  {
    return <p  key={tag}>{tag}</p>
  })}
  </div>
  </div>
  
 </div>
  </Link>
  )
}
