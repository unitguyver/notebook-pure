import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './modules/global'
import db from '@/utils/db'

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
})

export default store
