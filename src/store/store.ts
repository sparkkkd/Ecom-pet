import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice'
import userActionSlice from './slices/userActionSlice'
import { productSlice } from './slices/productSlice'

const rootReducer = combineReducers({
	categoriesSlice,
	userActionSlice,
	[productSlice.reducerPath]: productSlice.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(productSlice.middleware)
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
