import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from "./productsApi";
import likeReducer from "./likeSlice";
import cartReducer from "./cartSlice"; 

export const store = configureStore({
  reducer: {
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    like: likeReducer, 
    cart: cartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
