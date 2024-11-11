import styles from "./nav.module.css"
export default function Nav(){
    return(
        <header className={styles.head}><strong>Eatria Recipies <span id="emoji">🍜</span></strong></header>
    )
}