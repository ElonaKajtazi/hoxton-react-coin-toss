import { useState } from "react";

import "./App.css";

function App() {
  const [face, setFace] = useState("heads");
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  function flipCoin() {
    const newFace = Math.random() > 0.5 ? "heads" : "tails";
    setFace(newFace);
    if (newFace === "heads") setHeadsCount(headsCount + 1);
    if (newFace === "tails") setTailsCount(tailsCount + 1);
  }
  return (
    <div className="App">
      <h1>
        {face === "heads" ? (
          <img src="https://thumb.mp-farm.com/1490603/preview.jpg" alt="" />
        ) : (
          <img
            src="https://www.fleur-de-coin.com/images/eurocoins/euroimages/Germany1euro.jpg"
            alt=""
          />
        )}
      </h1>
      <div className="count">
        <p>Heads Count: {headsCount}</p>
        <p>Tails Count: {tailsCount}</p>
      </div>
      <div className="buttons-container">
        <button
          onClick={() => {
            flipCoin();
          }}
        >
          FLIP
        </button>
        <button
          onClick={() => {
            setHeadsCount(0);
            setTailsCount(0);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
