import { createSlice } from '@reduxjs/toolkit'

interface IUserActionState {
	isSearch: boolean
	category: string
}

const initialState: IUserActionState = {
	isSearch: false,
	category: '',
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
	},
})

export default userActionSlice.reducer

export const { toggleSearch, toggleCategory } = userActionSlice.actions
