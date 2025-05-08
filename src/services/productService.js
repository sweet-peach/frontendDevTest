import apiClient from "../lib/apiClient.js";

export default class ProductService{
    static async getProducts(){
        const response = await apiClient.get(`/api/product`,{
            useCache: true
        });

        return response.data;
    }

    static async getProduct(productId){
        const response = await apiClient.get(`/api/product/${productId}`, {
            useCache: true
        });

        return response.data;
    }
}