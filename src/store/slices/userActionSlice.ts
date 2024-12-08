import { createSlice } from '@reduxjs/toolkit'
import { ICartProduct } from '../../models'

interface IUserActionState {
	isSearch: boolean
	category: string
	cart: ICartProduct[]
	cartCount: number
}

const initialState: IUserActionState = {
	isSearch: false,
	category: '',
	cart: [],
	cartCount: 0,
}

export const userActionSlice = createSlice({
	name: 'userActionSlice',
	initialState,
	reducers: {
		toggleSearch: (state) => {
			state.isSearch = !state.isSearch
		},
		toggleCategory: (state, action) => {
			state.category = action.payload
		},
		addToCart: (state, action) => {
			// state.cart.push(action.payload)
			let currentItem = state.cart.find((item) => item.id === action.payload.id)

			if (state.cart.includes(currentItem!)) {
				state.cart.find((item) => item.id === action.payload.id)!.count++
			} else {
				state.cart.push({ ...action.payload, count: 1 })
			}

			state.cartCount++
		},
		removeAllFromCart: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload)
			state.cartCount = state.cart.reduce((acc, value) => acc + value.count, 0)
		},
		removeOneFromCart: (state, action) => {
			const currentItem = state.cart.find((item) => item.id === action.payload)

			if (currentItem?.count === 1) {
				state.cart = state.cart.filter((item) => item.id !== action.payload)
			} else {
				state.cart.find((item) => item.id === action.payload)!.count--
			}

			if (state.cartCount !== 0) {
				state.cartCount--
			}
		},
		clearCart: (state) => {
			state.cart = []
			state.cartCount = 0
		},
	},
})

export default userActionSlice.reducer

export const {
	toggleSearch,
	toggleCategory,
	addToCart,
	removeAllFromCart,
	removeOneFromCart,
	clearCart,
} = userActionSlice.actions
