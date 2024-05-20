import style from "./PopularPage.module.css"
import NavBar from "../components/NavBar"
import useFetchPopular from "../hooks/useFetchPopular"
import { useState } from "react"
import PreLoader from "../components/PreLoader"
export default function PopularPage() {

    const [skip,setSkip]=useState(0)
    const result= useFetchPopular(skip)

    console.log(result)

const handlePagination=()=>
    {
        if(skip<=20)
            {
                setSkip(skip+10)
            }
    }

  return (
    <>
    <PreLoader/>
        <NavBar/>
        <div className={style.main}>PopularPage</div>
        <button onClick={handlePagination}>Next</button>
    </>
  )
}
