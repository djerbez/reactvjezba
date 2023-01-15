import React, { useState } from "react";
import './App.css';

let score = 0;

const App =() => {
  const [score, setScore] = useState(0);
  const increaseScore = () => {
    if (score<50) {
      setScore(score+2)
    }
    else {
      score=50
    }
  }
  const decreaseScore = () => {
    if (score>0) {
      setScore(score-2)
    }
    else {
      score=0
    }
  }
  return (
    <div>
      <h1>{score}</h1>
      <button onClick={increaseScore}>Increase Score</button>
      <button onClick={decreaseScore}>Decrease Score</button>
    </div>
  );
}

export default App;
