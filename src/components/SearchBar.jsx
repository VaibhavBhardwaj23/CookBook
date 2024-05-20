import { useEffect, useState } from "react"
import Search from "../assets/search.png"
import styles from '../pages/HomePage.module.css'

export default function SearchBar() {
  const [recipeList,setRecipeList]= useState();
  useEffect(()=>{
    async function fetchRecipes()
    {
      const response = await fetch('https://dummyjson.com/recipes'); 
      const res= await response.json();
      setRecipeList(res.recipes)
    }
    fetchRecipes()
  },[])
  
  console.log(recipeList)
  return (
    <div className={styles.searchBar}>

      <input className={styles.search} placeholder="Find the Missing Ingredient: (Hint: It's not your car keys)"></input>
      <div className={styles.searchIcon}>
        <img  src={Search}/>
      </div>
      </div>
  )
}
