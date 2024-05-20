import { useEffect, useState } from "react";

export default function useFetchPopular(skip) {
    const [popularRecipes,setPopularRecipes]= useState()
    const url=`https://dummyjson.com/recipes?limit=10&skip=${skip}`
    useEffect(function () {
        async function getRecipe() {
           const response=await fetch(url)
            const res= await response.json();
            setPopularRecipes(res.recipes)
        }
        getRecipe();
      }, [url]);
  return popularRecipes
}
