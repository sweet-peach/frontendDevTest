import styles from "./Loader.module.css"
export default function Loader(){
    return <div className={styles.loaderContainer}>
        <div className={styles.loaderBox}>Loading</div>
    </div>
}