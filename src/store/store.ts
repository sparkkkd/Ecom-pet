import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './slices/categoriesSlice'
import userActionSlice from './slices/userActionSlice'

const rootReducer = combineReducers({
	categoriesSlice,
	userActionSlice,
})

export const store = configureStore({
	reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
