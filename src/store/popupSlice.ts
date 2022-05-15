import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  title: null,
  status: null,
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    open: (state, action) => {
      state.title = action.payload
    },
  },
})

export default popupSlice.reducer
