import {useBreadcrumbStore} from "../../stores/breadcrumbStore.js";
import {useEffect, useState} from "react";
import ProductService from "../../services/productService.js";
import Item from "./Item/Item.jsx";
import styles from "./ProductsListPage.module.css";

export function ProductListPage() {
    const {setBreadcrumb} = useBreadcrumbStore();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    async function getProducts() {
        setIsLoading(true);
        try {
            setProducts(await ProductService.getProducts());
        } catch (e) {
            alert(e.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setBreadcrumb([{
            label: "Home",
            path: "/"
        }])
        getProducts();
    }, [])

    if (isLoading) {
        return <>Loading</>
    }

    return <div className={styles.productsBox}>
        {products.map((product, index)=>{
            return <Item key={index} product={product}></Item>
        })}
    </div>
}