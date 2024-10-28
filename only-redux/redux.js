const redux = require("redux");

const INCITIAL_VALUE = {
  counter: 0,
};
const reducer = (state = INCITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "DECREAMENT") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "ADDITION") {
    return { ...state, counter: state.counter + action.payload.value };
  }
  return state;
};

const store = redux.createStore(reducer);
const subscripber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscripber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREAMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADDITION", payload: { value: 8 } });
store.dispatch({ type: "INCREMENT" });
