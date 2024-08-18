import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import styled from "./UserRecipe.module.css"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import UserRecipeDisplayCard from "../components/UserRecipeDisplayCard";

export default function UserRecipes() {
    const [userRecipes, setUserRecipes] = useState();
    const postRef = useRef(collection(db, "recipe"));
    useEffect(() => {
      async function getUserRecipes() {
        const data = await getDocs(postRef.current);
        setUserRecipes(
          data.docs.map((document) => ({
            ...document.data(),
            id: document.id,
          }))
        );
      }
      getUserRecipes();
    }, []);
    console.log(userRecipes)
  return (
     <div>
         <NavBar/>
         <h1 className={styled.head}>Recipe Swap: Dive into Deliciousness!</h1>
         <p className={styled.desc}>Recipes Shared by our Users</p>

    <div className={styled.userRecipeContainer}>
        {userRecipes && userRecipes.map((recipe)=>
        {
            return <UserRecipeDisplayCard key={recipe.id} recipe={recipe}/>
        })}
    </div>
     </div>
  )
}
