import styles from "./Image.module.css"

export default function Image({src, alt = "#"}){
    return <div className={styles.imageBox}>
        <img src={src} alt={alt}/>
    </div>
}