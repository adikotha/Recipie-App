import styles from './InnerComponent.module.css';
export default function InnerComponent({children,display}){
    let classname;
    if (display){
        classname=styles.innerp
    }
    else{
        classname=styles.inner
    }
    return(
        <div className={classname}>
            {children}
        </div>
    )
}