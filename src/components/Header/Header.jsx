import styles from "./Header.module.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import {Link} from "react-router-dom";
import {useCartStore} from "../../stores/cartStore.js";

export default function Header() {
    const {cartItems} = useCartStore();

    return <div>
        <header className={styles.headerBox}>
            <div className={styles.brandBox}>
                <Link to="/">TIX</Link>
            </div>
            <div className={styles.cartBox}>
                <p>{cartItems} items in cart</p>
            </div>
        </header>
        <Breadcrumbs></Breadcrumbs>
    </div>

}