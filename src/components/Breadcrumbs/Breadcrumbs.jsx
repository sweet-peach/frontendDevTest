import {useBreadcrumbStore} from "../../stores/breadcrumbStore.js";
import styles from "./Breadcrumbs.module.css";
import {Link} from "react-router-dom";

export default function Breadcrumbs() {
    const {breadcrumbs} = useBreadcrumbStore();

    return <div className={styles.breadcrumbsBox}>
        {breadcrumbs.map((breadcrumb, index) => {
            return <span className={styles.breadcrumbsItem} key={index}>
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link> {breadcrumbs.length - 1 > index ? <p>/</p> : <></>}
            </span>
        })}
    </div>
}