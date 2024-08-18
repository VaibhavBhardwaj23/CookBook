/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styled from "./UserRecipeCard.module.css"
export default function UserRecipeDisplayCard({recipe}) {
  const {id,image,name,cuisine,difficulty,tags,prepTimeMinutes,servings} = recipe

 return (
<div>
  <Link className="link" to={`/tasty-trades/${id}`}>
  <div className={styled.cardContainer}>

<div className={styled.imageBox}>
<img  src={image}/>
</div>
<div className={styled.recipeBrief}>
<h3 className={styled.name}>{name}</h3>
<div className={styled.second}>
<h3 className={styled.cuisine}>{cuisine}</h3>
<h3 className={styled.difficulty}>{difficulty}</h3>
</div>
<div className={styled.third}>
<h3 className={styled.servings}>Servings: {servings}</h3>
<h3 className={styled.prepTimeMinutes}>Time: {prepTimeMinutes} <span style={{fontSize:"0.7rem"}}>min</span></h3>
</div>
<div className={styled.tags}>
{tags.map((tag)=>
{
 return <p  key={tag}>{tag}</p>
})}
</div>
</div>
<p className={styled.user}>by: {recipe.userId}</p>
</div>
</Link>
</div>
  )
}
