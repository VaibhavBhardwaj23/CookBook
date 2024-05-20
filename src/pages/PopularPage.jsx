import style from "./PopularPage.module.css"
import NavBar from "../components/NavBar"
import useFetchPopular from "../hooks/useFetchPopular"
import { useState } from "react"
import PreLoader from "../components/PreLoader"
import RecipeDisplayCard from "../components/RecipeDisplayCard"
export default function PopularPage() {

    const [skip,setSkip]=useState(0)
    const result= useFetchPopular(skip)

    console.log(result)

const handlePagination=()=>
    {
        if(skip<20)
            {
                setSkip(skip+10)
            }
    }
const handlePaginationPrevious=()=>
    {
        setSkip(skip-10)
    }
  return (
    <>
    <PreLoader/>
        <NavBar/>
        <h1 className={style.heading}>Most Wanted <p>Our Recipes That Keep You Coming Back for More</p></h1>
        <div className={style.main}>
            {result && result.map((recipe)=>
            {
                return <RecipeDisplayCard key={recipe} recipe={recipe}/>
            }) }
        </div>
        <div className={style.Pagination}>
            <button className={ skip>=10?``:`${style.hide}` } onClick={handlePaginationPrevious}>Previous</button>
            <button className={ skip<20?``:`${style.hide}` } onClick={handlePagination}>Next</button>
        </div>
    </>
  )
}
