import styles from '../styles/Recipie.module.css';
import { useEffect, useState } from "react"
import RecipieDetails from "./RecipieDetails"
const URl ="https://api.spoonacular.com/recipes/"

export default function Recipie({foodId,setFoodID,recipieArray, setRecArray}){
    const Api_Key2=import.meta.env.VITE_API_KEY2;
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        async function fetchRecipie(){
            const res= await fetch(`${URl}${foodId}/information?apiKey=${Api_Key2}`)
            const data= await res.json()
            setRecArray(data)
            setIsLoading(false)
        }
        fetchRecipie()
    },[foodId])
    return(
        <div className={styles.rec}>
            <h1><center>Food Id:{foodId}</center></h1>
            <RecipieDetails recipieArray={recipieArray} isLoading={isLoading}/>
            
        </div>
    )
}