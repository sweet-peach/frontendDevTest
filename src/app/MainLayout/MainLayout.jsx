import Header from "../../components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import styles from "./MainLayout.module.css"

export default function MainLayout(){
    return <>
        <Header></Header>
        <div className={styles.container}>
            <Outlet/>
        </div>
    </>
}