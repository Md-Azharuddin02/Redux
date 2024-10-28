import { createStore } from "redux";

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

const counterStore = createStore(counterReducer);

export default counterStore;
