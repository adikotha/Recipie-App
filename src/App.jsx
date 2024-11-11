import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import FetchFood from './components/FetchFood'
import FoodList from './components/FoodList'
// import Recipie from './components/Recipie'
// import dotenv from 'dotenv';
// dotenv.config();
// const Api_Key1=import.meta.env.VITE_API_KEY1;
// const Api_Key2=import.meta.env.VITE_API_KEY2;

function App() {
  const [foodArray, setFoodArray] = useState([])
  const [display,setDisplay]=useState(false)
  const [foodId,setFoodID]=useState("")
  const [recipieArray, setRecArray] = useState({})
  function onclick(){
    setDisplay(true)
  }
  

  return (
    <div>
      
      <Nav />
      <FetchFood foodArray={foodArray} setFoodArray={setFoodArray} />
      <div>
      <FoodList foodArray={foodArray} display={display} onclick={onclick} foodId={foodId} setFoodID={setFoodID} recipieArray={recipieArray} setRecArray={setRecArray}/>
      </div>   
    </div>
    
  )
}

export default App
