import apiClient from "../lib/apiClient.js";
import {useCartStore} from "../stores/cartStore.js";

export default class CartService{
    static async addToCart(itemId, colorCode, storageCode){
        const response = await apiClient.post("api/cart",{
            id: itemId,
            colorCode: colorCode,
            storageCode: storageCode
        })
        // Does not work as intended
        // useCartStore.getState().setCartItems(response.data.count);

        useCartStore.getState().addItem();

        return response.data;
    }
}