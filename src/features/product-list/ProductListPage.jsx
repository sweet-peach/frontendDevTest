import {useBreadcrumbStore} from "../../stores/breadcrumbStore.js";
import {useEffect, useState} from "react";
import ProductService from "../../services/productService.js";
import {Link} from "react-router-dom";

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

    return <div>
        {products.map((product)=>{
            return <Link to={`/product/${product.id}`} style={{color: "#fff"}}>{product.brand} {product.model}</Link>
        })}
    </div>
}