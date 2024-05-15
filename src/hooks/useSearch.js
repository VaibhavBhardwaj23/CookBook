import { useEffect, useState } from "react";

export const useSearch = (slug) => {
  const [recipe, setRecipeDetail] = useState(null);
//   const [ingredients, setIngredients] = useState([]);
//   const [method, setMethod] = useState([]);
  const url = `https://dummyjson.com/recipes/${slug}`;
  

  useEffect(function () {
    async function getRecipe() {
       const response=await fetch(url)
        const res= await response.json();
      setRecipeDetail(res)
    }
    getRecipe();
  }, [url]);
  return recipe;
};
