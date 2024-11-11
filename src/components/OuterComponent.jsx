import styles from './Outer.module.css';

export default function OuterComponent({children}){
    return(
        <div className={styles.outer}>
            {children}
        </div>
    )
}