// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { IProductCard } from '../../models'
// import ProductService from '../../api/ProductService'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProductCard } from '../../models'

// interface IProductState {
// 	isLoading: boolean
// 	error: string
// 	products: IProductCard[]
// }

// const initialState: IProductState = {
// 	isLoading: false,
// 	error: '',
// 	products: [],
// }

// export const fetchAllProducts = createAsyncThunk(
// 	'productSlice/fetchAllProducts',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const response = await ProductService.getAll()
// 			return response.data
// 		} catch (error: any) {
// 			return rejectWithValue(error)
// 		}
// 	}
// )

// export const fetchProductsByCategory = createAsyncThunk(
// 	'productSlice/fetchProductsByCategory',
// 	async (category: string, { rejectWithValue }) => {
// 		try {
// 			const response = await ProductService.getByCategory(category)
// 			return response.data
// 		} catch (error: any) {
// 			return rejectWithValue(error)
// 		}
// 	}
// )

// export const productSlice = createSlice({
// 	name: 'productSlice',
// 	initialState,
// 	reducers: {},
// 	extraReducers: (builder) => {
// 		// Fetch all products
// 		builder.addCase(fetchAllProducts.pending, (state, _) => {
// 			state.isLoading = true
// 		})
// 		builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
// 			state.isLoading = false
// 			state.error = ''
// 			if (action.payload) {
// 				state.products = action.payload
// 			}
// 		})
// 		builder.addCase(fetchAllProducts.rejected, (state, action) => {
// 			state.isLoading = false
// 			state.error = action.payload as string
// 		})

// 		// Fetch products by category
// 		builder.addCase(fetchProductsByCategory.pending, (state, _) => {
// 			state.isLoading = true
// 		})
// 		builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
// 			state.isLoading = false
// 			state.error = ''
// 			if (action.payload) {
// 				state.products = action.payload
// 			}
// 		})
// 		builder.addCase(fetchProductsByCategory.rejected, (state, action) => {
// 			state.isLoading = false
// 			state.error = action.payload as string
// 		})
// 	},
// })

// export default productSlice.reducer

export const productSlice = createApi({
	reducerPath: 'productSlice',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
	endpoints: (builder) => ({
		fetchAllProducts: builder.query<IProductCard[], string>({
			query: () => '/products',
		}),
		fetchProducts: builder.query<IProductCard[], string>({
			// query: (category: string) => `/products/category/${category}`,
			query: (category: string) => {
				if (category) {
					return `/products/category/${category}`
				} else {
					return '/products'
				}
			},
		}),
	}),
})
