import {useBreadcrumbStore} from "../../stores/breadcrumbStore.js";
import {useEffect, useState} from "react";
import ProductService from "../../services/productService.js";
import Item from "./Item/Item.jsx";
import styles from "./ProductsListPage.module.css";
import Search from "./Search/Search.jsx";

export function ProductListPage() {
    const {setBreadcrumb} = useBreadcrumbStore();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

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

    useEffect(()=>{
        const filtred = products.filter((product)=>{
            const brand = product.brand.toLowerCase()
            const model = product.model.toLowerCase();
            const query = searchQuery.toLowerCase();

            return brand.includes(query) || model.includes(query);
        })

        setFilteredProducts(filtred)
    },[searchQuery, products])

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

    return <div className={styles.listViewBox}>
        <div className={styles.searchBox}>
            <Search
                setSearchQuery={setSearchQuery}
            ></Search>
        </div>
        <div className={styles.productsBox}>
            {filteredProducts.map((product, index) => {
                return <Item key={index} product={product}></Item>
            })}
        </div>
    </div>

}