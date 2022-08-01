import { createSlice, SliceCaseReducers, PayloadAction } from '@reduxjs/toolkit'
import db from '@/utils/db'

export type PopupGlobal = {
  anyValue: any
}

export const GlobalSlice = createSlice<
  PopupGlobal,
  SliceCaseReducers<PopupGlobal>
>({
  name: 'global',

  initialState: {
    anyValue: 'xxx',
  },

  reducers: {
    setAnyValue(state, action: PayloadAction<any>) {
      state.anyValue = action.payload
      // db.set('anyValue', action.payload)
    },
  },
})

export default GlobalSlice.reducer
