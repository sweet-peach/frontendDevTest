import {useParams} from "react-router-dom";

export function ProductDetailsPage(){
    const {id} = useParams();

    return <>Details of product {id}</>
}