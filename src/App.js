import React from "react";
import useWordGame from "./hooks/useWordGame";


function App() {
  const {
    shallStart,
    text,
    handleChange,
    timer,
    startNewGame,
    wordCount,
    refTextArea,
  } = useWordGame();
  return (
    <div>
      <h1> Speed Typing Game!</h1>
      <textarea
        ref={refTextArea}
        disabled={!shallStart}
        value={text}
        onChange={handleChange}
      ></textarea>
      <h4>Time remaining : {timer} </h4>
      <button disabled={shallStart} onClick={startNewGame}>
        Start
      </button>
      <h1>Word count : {wordCount} </h1>
    </div>
  );
}

export default App;
