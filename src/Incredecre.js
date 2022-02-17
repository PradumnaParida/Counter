import React, { useState } from "react";
import "./App.css";
const Incredecre = () => {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bolder",
        color: "blue",
        fontSize: "4vw",
        position: "absolute",
        width: "50%",
        height: "70%",
        marginLeft: "40vw",
        justifyContent: "center",
      }}
    >
      Increment & Decrement
      <div
        style={{
          position: "relative",
          top: "3vh",
        }}
      >
        <h1>{counter}</h1>
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "4vw",
            position: "relative",
            top: "10vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClick1}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: "4vw",
            position: "relative",
            top: "10vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClick2}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Incredecre;
