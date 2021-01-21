import { useState, useEffect, useRef } from "react";

function useWordGame() {
  const STARTING_TIME = 15;
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(STARTING_TIME);
  const [shallStart, setStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const refTextArea = useRef(null); //to access dom element like id

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }
  // console.log(text);

  function calculateNumberOfWord(text) {
    const wordArr = text.trim().split(" ");
    return wordArr.filter((word) => word !== "").length;
  }

  function startNewGame() {
    // make start true
    setStart(true);
    // set new timer
    setTimer(STARTING_TIME);
    // empty the text string
    setText("");
    // set word count to 0
    setWordCount(0);
  }

  function endGame() {
    setStart(false);
    setWordCount(calculateNumberOfWord(text));
  }

  useEffect(() => {
    if (timer > 0 && shallStart === true) {
      setTimeout(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      endGame();
    }
  }, [timer, shallStart]);

  useEffect(() => {
    if (shallStart) {
      refTextArea.current.focus();
    }
  }, [shallStart]);

  return { shallStart, text, handleChange, timer, startNewGame, wordCount,refTextArea };
}

export default useWordGame;
