import React, { useState } from "react";
import "../App";
import { counterAction, privacyAction } from "../store/store";
import { useDispatch } from "react-redux";

function Control() {
  const [data, setData] = useState('');
  const dispatch= useDispatch()
  

  const handleIncrement = () => {
    dispatch(counterAction.increment())
 
  };
  const handleDecrement = () => {
    dispatch(counterAction.decrement())
  };
  const handleAddition = (data) => {
    dispatch(counterAction.addtion(Number(data)));
    setData('');
  };
  const handleSubtraction = () => {
    dispatch(counterAction.subtraction(Number(data)));
    setData('');
  };
    
  const handlePrivacy = () => {
    dispatch(privacyAction.togglePrivacy())
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
