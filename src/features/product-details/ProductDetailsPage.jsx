import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useBreadcrumbStore} from "../../stores/breadcrumbStore.js";
import ProductService from "../../services/productService.js";

export function ProductDetailsPage(){
    const {id} = useParams();
    const {setBreadcrumb} = useBreadcrumbStore();
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getProduct(){
        try {
            setIsLoading(true);
            setProduct(await ProductService.getProduct(id));
        } catch (e) {
            alert(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        const model = searchParams.get("model") ?? product?.model ?? null;
        const brand = searchParams.get("brand") ?? product?.brand ?? null;
        setBreadcrumb([
            {
                label: "Home",
                path: "/"
            },
            {
                label: model && brand ? `${model} (${brand})` : "Product",
                path: `/product/${id}?brand=${encodeURIComponent(brand)}&model=${encodeURIComponent(model)}`
            }
        ])
    },[product])

    useEffect(()=>{
        getProduct();
    },[])

    if(isLoading){
        return <>Loading</>
    }

    return <pre style={{color:"#fff"}}>{JSON.stringify(product, null, 2)}</pre>
}