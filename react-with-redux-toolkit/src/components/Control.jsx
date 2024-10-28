import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App";

function Control() {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const counter = useSelector(state=> state.counter )

  useEffect(() => {
    const saveData = localStorage.getItem("counter");
    if (saveData) {
      dispatch({ type: "SAVED_DATA", payload: Number(saveData) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY_TOGGLE", });
  };
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAddition = (data) => {
    dispatch({ type: "ADDITION", payload: Number(data) });
    setData('');
  };
  const handleSubtraction = () => {
    dispatch({ type: "SUBTRACTION", payload: Number(data) });
    setData('');
  };
  
  return (
    <>
      <input
        type="number"
        className="form-control"
        id="exampleInputEmail1"
        placeholder="Enter the number"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button
        type="button"
        placeholder=""
        className="btn m-5 btn-primary btn-lg px-4 gap-3"
        onClick={() => handleAddition(data)}
      >
        Add
      </button>
      <button
        type="button"
        placeholder=""
        className="btn btn-warning btn-lg px-4 gap-3"
        onClick={() => handleSubtraction(data)}
      >
        Subtract
      </button>
      
      <center className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          + 1
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleDecrement}
        >
          - 1
        </button>
        <button
        type="button"
        placeholder=""
        className="btn btn-info btn-lg px-4 gap-3"
        onClick={handlePrivacy}
      >
        Privacy
      </button>
      </center>
    </>
  );
}

export default Control;
