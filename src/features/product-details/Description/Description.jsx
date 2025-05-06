import styles from "./Description.module.css";

export default function Description({product}){

    return <div className={styles.descriptionBox}>
        <ul>
            <li><b>Brand</b>: {product.brand}</li>
            <li><b>Model</b>: {product.model}</li>
            <li><b>Price</b>: {product.price}</li>
            <li><b>CPU</b>: {product.cpu}</li>
            <li><b>RAM</b>: {product.ram}</li>
            <li><b>OS</b>: {product.os}</li>
            <li><b>Display resolution</b>: {product.displayResolution}</li>
            <li><b>Battery</b>: {product.battery}</li>
            <li><b>Primary camera</b>: {product.camera}</li>
            <li><b>Secondary camera</b>: {product.secondaryCmera ?? "-"}</li>
            <li><b>Display size</b>: {product.displaySize}</li>
            <li><b>Weight</b>: {product.weight}</li>
        </ul>
    </div>
}