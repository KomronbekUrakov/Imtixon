import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ProductsApi = createApi ({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://makeup-api.herokuapp.com/api/v1/products.json',
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/",
        }),
        // fetchProductById: builder.query({
        //     query: (id: number) => ({ id }),
        // }),
    }),
})
export const {useGetProductsQuery} = ProductsApi;