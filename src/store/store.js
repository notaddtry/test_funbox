import { configureStore } from '@reduxjs/toolkit'
import catSlice from './slices/catSlice'

export const store = configureStore({
  reducer: {
    cat: catSlice,
  },
})
