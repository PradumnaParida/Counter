import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [nextcounter, setNextCounter] = useState(1);
  const [previouscounter, setPreviouscounter] = useState(0);
  const handleClick = () => {
    setNextCounter(nextcounter + 1);
    setPreviouscounter(previouscounter + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "5vw",
        position: "absolute",
        width: "40%",
        height: "70%",
        margin: "auto",
        fontWeight: "bolder",
        color: "blue",
      }}
    >
      Counter
      <div
        style={{
          position: "relative",
          top: "3vh",
        }}
      >
        <h1>Previous value : {previouscounter}</h1>
        <h1>Next value : {nextcounter}</h1>
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "4vw",
            position: "relative",
            top: "7vh",
            marginRight: "5px",
            backgroundColor: "brown",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClick}
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default App;
