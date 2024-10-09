

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://makeup-api.herokuapp.com/api/v1", 
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products.json",
    }),
    getProductsByCategory: builder.query({
      query: ({ category, type }) =>
        `/products.json?product_category=${category}&product_type=${type}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsByCategoryQuery } = ProductsApi;
