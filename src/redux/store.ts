import { configureStore } from "@reduxjs/toolkit";
import { ProductsApi } from "./productsApi";
// import { cartSlice } from "./cartSlice";
// import { likeSlice } from "./likeSlice";

export const store = configureStore({
    reducer: {
        [ProductsApi.reducerPath]: ProductsApi.reducer,
        // cart: cartSlice.reducer,
        // like: likeSlice.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ProductsApi.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

