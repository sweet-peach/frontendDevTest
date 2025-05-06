import {create} from "zustand";

export const useCartStore = create((set) => ({
    cartItems: 0,
    setCartItems: (cartItems) => set({cartItems})
}))