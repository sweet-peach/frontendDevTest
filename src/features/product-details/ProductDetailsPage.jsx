import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useBreadcrumbStore} from "../../stores/breadcrumbStore.js";
import ProductService from "../../services/productService.js";
import styles from "./ProductDetailsPage.module.css";
import Image from "./Image/Image.jsx"
import Description from "./Description/Description.jsx";
import Actions from "./Actions/Actions.jsx";

export function ProductDetailsPage(){
    const {id} = useParams();
    const {setBreadcrumb} = useBreadcrumbStore();
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    return <div className={styles.productDetailsBox}>
        <Image src={product.imgUrl}></Image>
        <Description product={product}></Description>
        <Actions product={product}></Actions>
    </div>

}