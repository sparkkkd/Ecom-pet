import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICategories } from '../../api/models'
import CategoriesService from '../../api/CategoriesService'

interface initialStateType {
	isLoading: boolean
	error: string
	categories: ICategories
}

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async (_, { rejectWithValue }) => {
		try {
			const response = await CategoriesService.getAll()
			return response.data
		} catch (error: any) {
			return rejectWithValue(error)
		}
	}
)

const initialState: initialStateType = {
	isLoading: false,
	error: '',
	categories: [],
}

export const categoriesApi = createSlice({
	name: 'categories',
	reducers: {},
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.pending, (state) => {
			state.isLoading = true
			state.error = ''
		})
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.isLoading = false
			state.error = ''
			state.categories = action.payload
		})
		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload as string
		})
	},
})

export default categoriesApi.reducer
