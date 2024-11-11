import { useState } from 'react';
import styles from '../styles/RecipieDetails.module.css';
import Detailbox1 from "./Detailbox1";
import Instrctions from './Instrctions';
import Ingredients from './Ingredients';

export default function RecipieDetails({recipieArray,isLoading}){
 
    return(
        <div>
            <h2>{recipieArray.title}</h2>
            <img src={recipieArray.image} alt={recipieArray.title}  className={styles.img1}/>
            <Detailbox1 recipieArray={recipieArray}/>
            <Ingredients recipieArray={recipieArray} isLoading={isLoading} key={recipieArray.id}/>
            <Instrctions recipieArray={recipieArray} isLoading={isLoading} />
        </div>
    )
}