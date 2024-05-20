 import styles from "./RecipeDetails.module.css"
 import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import cook from "../assets/cooking.png"
import star from "../assets/star.png";
import steps from "../assets/steps.png";
import PreLoader from "../components/PreLoader";

export default function RecipeDetails() {
    const { slug } = useParams();
    const result= useSearch(slug);
    console.log(result)
  return (
   <>
   <PreLoader/>
     <div className={styles.main }>
        <NavBar/>
        {result && 
        <>
        <div className={styles.content}>
            <div className={styles.image}>
                <img src={result.image}/>
            </div>
            <div className={styles.textSide}>
                <div className={styles.title}>
                    <p>The Recipe Book</p>
                    <h1>
                        {result.name}
                    </h1>
                </div>
                <div className={styles.prepTime}>
                    <img src={cook}/>
                    <h2>Preparation Time : {result.prepTimeMinutes} <span>min</span></h2>
                </div>
                <div className={styles.subDets}>
                <div className={styles.cuisine}>
                <h2>Cuisine : {result.cuisine}</h2>
                </div>
                <div className={styles.type}>
                <h2> Meal Type: {result.mealType[0]}</h2>
                </div>
                </div>
                <div className={styles.ingredients}>
                <h1>Ingredients</h1>
                <div className={styles.list}>
                {result.ingredients.map((ingredient,idx)=>
                {
                    return <p key={idx}>{ingredient}</p>
                })}
                </div>
               
                </div>
                <div className={styles.extra}>
                    <h3>Reviews : {result.rating} <img src={star}/> ({result.reviewCount}) </h3>
                    <h3>Calories Per Serving : {result.caloriesPerServing} kcal </h3>
                    <h3>Servings : {result.servings} </h3>
                </div>
                <div className={styles.steps}>
            <h1>Steps</h1>
            {result.instructions.map((step,idx)=>
            {
                return(
                    <div key={idx} className={styles.stepsList}>
                        <p><img src={steps}/> {step}</p>
                    </div>
                )
            })}
        </div>
            </div>
        </div>
    
        </>
        }

    </div>
   </>
  )
}
