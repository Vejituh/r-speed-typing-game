import React, { useState, useEffect } from "react"
import './App.css'

export default function App() {
  const [textarea, setTextarea] = useState('')
  const [timeLeft, setTimeLeft] = useState(0);
  const [gameState, setGameState] = useState(false);
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft -1)
    },1000)
  } else if(timeLeft === 0 && gameState === true){
    setGameState(false);
    setWordCount(calculateWordCount(textarea))
  }
  },[timeLeft])

  const calculateWordCount = (words) => {
    return words.length > 1? words.trim().split(" ").length:0
  }

  const gameStart = () => {
    if (gameState === false) {
      setTextarea('')
      setWordCount(0)
      setGameState(true)
      setTimeLeft(5)
    }
  }

  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea disabled={!gameState} name="textarea" value={textarea} placeholder="Start typing..." onChange={(e) => setTextarea(e.target.value)} />
      <h4>Amount of time remaining: {timeLeft}</h4>
      <button disabled={gameState} onClick={gameStart}>Start Game</button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}