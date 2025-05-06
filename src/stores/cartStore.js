import {create} from "zustand";

export const useCartStore = create((set) => ({
    cart: [],
    setCart: (cart) => set({cart}),
    addCartItem: (cartItem) => {
        set((state) => ({
            cart: [...state.cart, cartItem]
        }))
    }
}))