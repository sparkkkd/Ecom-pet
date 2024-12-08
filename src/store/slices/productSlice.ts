import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductCard } from '../../models'

export const productSlice = createApi({
	reducerPath: 'productSlice',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
	endpoints: (builder) => ({
		fetchProducts: builder.query<IProductCard[], string>({
			query: (category: string) => {
				if (category && category !== 'All') {
					return `/products/category/${category}`
				} else {
					return '/products'
				}
			},
		}),
		fetchOneProduct: builder.query<IProductCard, string>({
			query: (id: string) => `/products/${id}`,
		}),
	}),
})
