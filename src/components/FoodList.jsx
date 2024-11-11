import styles from './Foodlist.module.css';
import FoodItem from "./FoodItem";
import Recipie from "./Recipie"; // Assuming Recipie component exists
import Container from './Container';
import InnerComponent from './InnerComponent';
import OuterComponent from './OuterComponent';

export default function FoodList({ foodArray, display, onclick,foodId,setFoodID,recipieArray, setRecArray}) {
  const className = display ? styles.cardcontainerclick : styles.cardcontainer;

  return (
    <Container>
      <InnerComponent display={display}>
      <div className={className}>
        {foodArray.map((food) => (
          <FoodItem key={food.id} food={food} display={display} onclick={onclick} foodId={foodId} setFoodID={setFoodID} />
        ))}
      </div>
      </InnerComponent>
      <OuterComponent>
      {display && (
        <div className={styles.recipeList}>
         <Recipie  display={display} onclick={onclick} foodId={foodId} setFoodID={setFoodID} recipieArray={recipieArray} setRecArray={setRecArray} />
        </div>
      )}
      </OuterComponent>
    </Container>
  );
}