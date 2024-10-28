import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {state.counterVal++},
    decrement: (state) => {state.counterVal--},
    addtion: (state, action) => {
      state.counterVal  += action.payload
    },
    subtraction: (state, action) => {
      state.counterVal  -= action.payload
    },
  }
})


export const counterAction = counterSlice.actions
export default counterSlice;
