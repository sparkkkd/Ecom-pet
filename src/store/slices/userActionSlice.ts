import { createSlice } from '@reduxjs/toolkit'

interface IUserActionState {
	isSearch: boolean
}

const initialState: IUserActionState = {
	isSearch: false,
}

export const userActionSlice = createSlice({
	name: 'userActionSlice',
	initialState,
	reducers: {
		toggleSearch: (state) => {
			state.isSearch = !state.isSearch
		},
	},
})

export default userActionSlice.reducer

export const { toggleSearch } = userActionSlice.actions
