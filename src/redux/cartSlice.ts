import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/Type";

type CartState = {
  cartProducts: Product[];
};

const updateLocalStorage = (cartProducts: Product[]) => {
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
};

const initialState: CartState = {
  cartProducts: JSON.parse(localStorage.getItem("cartProducts") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const exists = state.cartProducts.some((item) => item.id === product.id);
      if (!exists) {
        state.cartProducts.push(product);
        updateLocalStorage(state.cartProducts);
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartProducts = state.cartProducts.filter((product) => product.id !== productId);
      updateLocalStorage(state.cartProducts);
    },
    clearCart: (state) => {
      state.cartProducts = [];
      localStorage.removeItem("cartProducts");
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
