import apiClient from "../lib/apiClient.js";
import {useCartStore} from "../stores/cartStore.js";

export default class CartService{
    static async addToCart(itemId, colorCode, storageCode){

        console.log(itemId);
        console.log(colorCode);
        console.log(storageCode);
        const response = await apiClient.post("api/cart",{
            id: itemId,
            colorCode: colorCode,
            storageCode: storageCode
        })

        useCartStore.getState().setCartItems(response.data.count);

        return response.data;
    }
}