import apiClient from "../lib/apiClient.js";

export default class ProductService{
    static async getProducts(){
        const response = await apiClient.get(`/api/product`);

        return response.data;
    }

    static async getProduct(productId){
        const response = await apiClient.get(`/api/product/${productId}`);

        return response.data;
    }
}