 import styled from "./UserRecipeDetails.module.css"
 import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import cook from "../assets/cooking.png"
import star from "../assets/star.png";
import steps from "../assets/steps.png";
import PreLoader from "../components/PreLoader";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase/config";

export default function UserRecipeDetails() {
    const { slug } = useParams();
    const [posts,setPost]= useState()
 
    const postRef = useRef(collection(db, "recipe"));
    useEffect(() => {
      async function getPosts() {
        const data = await getDocs(postRef.current);
        setPost(
          data.docs.map((document) => ({
            ...document.data(),
            id: document.id,
          }))
        );
      }
      getPosts();
    }, []);

    const result=posts && posts.filter(post=>
        {
          return post.id==slug
        }
        )
   
  return (
   <>
   <PreLoader/>
     <div className={styled.main }>
        <NavBar/>
        {result && result.map((result)=>
        {
            return  (
                <>
        <div className={styled.content}>
            <div className={styled.image}>
                <img src={result.image}/>
            </div>
            <div className={styled.textSide}>
                <div className={styled.title}>
                    <p>The Recipe Book</p>
                    <h1>
                        {result.name}
                    </h1>
                </div>
                <div className={styled.prepTime}>
                    <img src={cook}/>
                    <h2>Preparation Time : {result.prepTimeMinutes} <span>min</span></h2>
                </div>
                <div className={styled.subDets}>
                <div className={styled.cuisine}>
                <h2>Cuisine : {result.cuisine}</h2>
                </div>
                <div className={styled.type}>
                <h2> Meal Type: {result.mealType}</h2>
                </div>
                </div>
                <div className={styled.ingredients}>
                <h1>Ingredients</h1>
                <div className={styled.list}>
                {result.ingredients.map((ingredient,idx)=>
                {
                    return <p key={idx}>{ingredient}</p>
                })}
                </div>
               
                </div>
                <div className={styled.extra}>
                    
                    <h3>Calories Per Serving : {result.caloriesPerServing} kcal </h3>
                    <h3>Servings : {result.servings} </h3>
                </div>
                <div className={styled.steps}>
            <h1>Steps</h1>
            {result.instructions.map((step,idx)=>
            {
                return(
                    <div key={idx} className={styled.stepsList}>
                        <p><img src={steps}/> {step}</p>
                    </div>
                )
            })}
        </div>
            </div>
        </div>
    
        </>
            )
            
        }) 
       
        }

    </div>
   </>
  )
}
