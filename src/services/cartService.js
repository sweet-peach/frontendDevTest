import apiClient from "../lib/apiClient.js";

export default class CartService{
    static async addToCart(itemId, colorCode, storageCode){
        const response = await apiClient.post("api/cart",{
            id: itemId,
            colorCode: colorCode,
            storageCode: storageCode
        })

        return response.data;
    }
}