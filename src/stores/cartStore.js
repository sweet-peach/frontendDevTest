import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useCartStore = create(persist((set) => ({
        cartItems: 0,
        setCartItems: (cartItems) => set({cartItems}),
        addItem: ()=> set((state)=>{
            return {cartItems: state.cartItems + 1}
        })
    })
))