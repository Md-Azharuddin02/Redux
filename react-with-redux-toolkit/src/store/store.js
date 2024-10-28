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



/*

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "PRIVACY_TOGGLE":
      return { privacy: !state.privacy, counter: state.counter };
    case "INCREMENT":
      return { ...state, counter: state.counter + 1, privacy: state.privacy };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1, privacy: state.privacy };
    case "ADDITION":
      return {
        ...state,
        counter: state.counter + action.payload,
        privacy: state.privacy,
      };
    case "SUBTRACTION":
      return {
        ...state,
        counter: state.counter - action.payload,
        privacy: state.privacy,
      };
    case "SAVED_DATA":
      return { ...state, counter: action.payload, privacy: state.privacy };
    default:
      return state;
  }
};

*/