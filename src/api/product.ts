import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Product } from '../interface/product'


export const productApi = createApi({
    reducerPath: 'products',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/'
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void> ({
            query: () => `products`,
            providesTags: ['Products']
        }),
        getProduct: builder.query<Product, number | string> ({
            query: (id) => `products/${id}`,
            providesTags: ['Products']
        }),
        addProduct: builder.mutation<Product, Product> ({
            query: (product) => ({
                url: `products`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Products']
        }),
        removeProduct: builder.mutation<void, number | string> ({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
                
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: builder.mutation<Product, Product> ({
            query: (product) => ({
                url: `products/${product.id}`,
                method: 'PATCH',
                body: product
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const {useGetProductsQuery, useGetProductQuery, useAddProductMutation, useRemoveProductMutation, useUpdateProductMutation} = productApi