import styles from "./Item.module.css";
import {Link} from "react-router-dom";

export default function Item({product}) {
    const link = `/product/${product.id}?brand=${encodeURIComponent(product.brand)}&model=${encodeURIComponent(product.model)}`
    return <div className={styles.productBox}>
        <div className={styles.imageBox}>
            <Link to={link}>
                <img src={product.imgUrl} alt="#"/>
            </Link>
        </div>
        <div className={styles.productDescriptionBox}>
            <p className={styles.brandText}>{product.brand}</p>
            <Link to={link}>
                <p>{product.model}</p>
            </Link>
            <span className={styles.priceBox}><p className={styles.currencyText}>€</p> <p
                className={styles.priceText}>{product.price}</p></span>
        </div>
    </div>
}