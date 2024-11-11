import React from 'react';
import styles from './Fooditem.module.css';

export default function FoodItem({ food, onclick,foodId,setFoodID }) {
  return (
    <div className={styles.card} style={{ width: '18rem' }}>
      <img src={food.image} className={styles.cardImg} alt={food.title} />
      <div className="card-body">
        <h3 className="card-title">{food.title}</h3>
        <button className={styles.btn} onClick={()=>{
          onclick()
          setFoodID(food.id)
          }}>
          View Recipie
        </button>
        <br />
        <br />
      </div>
    </div>
  );
}