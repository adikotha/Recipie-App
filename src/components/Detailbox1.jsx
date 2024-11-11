import styles from '../styles/Detailbox1.module.css';

export default function Detailbox1({ recipieArray }) {
  let type;
  if (recipieArray.vegetarian === false) {
    type = "🔴";
  } else {
    type = "🟢";
  }

  return (
    <div className={styles.dbox}>
  <div className={styles.row}>
    <p>Type: {type}</p>
    <p>Time taken: {recipieArray.readyInMinutes}min</p>
  </div>
  <div className={styles.row}>
    <p>Serving: {recipieArray.servings}</p>
    <p>Price per serving: {recipieArray.pricePerServing}rs</p>
  </div>
</div>
  );
}