import { configureStore, createSlice } from '@reduxjs/toolkit'

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


const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    togglePrivacy: (state, action) => !state
  }
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy:privacySlice.reducer
  }
});

export const counterAction = counterSlice.actions
export const privacyAction = privacySlice.actions
export default counterStore;
