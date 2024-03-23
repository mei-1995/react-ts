import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    incremented: (state) => {
      state.count += 1
    },
    decremented: (state) => {
      state.count -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions
export default counterSlice.reducer
