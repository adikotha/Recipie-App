import styles from '../styles/Ingredients.module.css';

export default function Ingredients({ recipieArray, isLoading }) {
  return (
    <div className={styles.ing}>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <div className={styles.ingredientGrid}>
          {recipieArray.extendedIngredients.map((item, index) => (
            <div key={item.id} className={styles.ingredient}>
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
                alt={recipieArray.title}
                className={styles.img1}
              />
              <p>{item.name}</p>
              <p>{item.amount}{item.unit}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}