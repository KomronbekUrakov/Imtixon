// redux/likeSlice.js
import { createSlice } from "@reduxjs/toolkit";
interface Product {
    id: number;
    api_featured_image: string;
    name: string;
    price_sign: string;
    price: number;
  }
const initialState = {
    likedProducts: JSON.parse(localStorage.getItem("Like") ?? "[]") || [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    likedProduct: (state, action) => {
      const product = action.payload;
      const exists = state.likedProducts.find((item:Product) => item.id === product.id);

      if (!exists) {
        state.likedProducts.push(product);
        localStorage.setItem("Like", JSON.stringify(state.likedProducts));
      }
    },
    removeLikedProduct: (state, action) => {
      state.likedProducts = state.likedProducts.filter(
        (product:Product) => product.id !== action.payload
      );
      localStorage.setItem("Like", JSON.stringify(state.likedProducts));
    },
  },
});

export const { likedProduct, removeLikedProduct } = likeSlice.actions;
export default likeSlice.reducer;
