import React, { useState, useEffect } from "react"
import './App.css'

export default function App() {
  const [textarea, setTextarea] = useState('')
  const [timeLeft, setTimeLeft] = useState(null);
  const [gameState, setGameState] = useState(false);
  const [wordCount, setWordCount] = useState(0)

  useEffect(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
      setTimeLeft(prevTimeLeft => prevTimeLeft -1)
    },1000)
  } else if(timeLeft === 0){
    setGameState(false);
    setWordCount(calculateWordCount(textarea))
  }
  },[timeLeft])

  const calculateWordCount = (words) => {
    if (words.length > 1){
    const wordsArr = words.trim().split(" ")
    return wordsArr.length
    } else {
    return 0
    }
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
      <textarea name="textarea" value={textarea} placeholder="Start typing..." onChange={(e) => setTextarea(e.target.value)} />
      <h4>Amount of time remaining: {timeLeft}</h4>
      <button onClick={gameStart}>Start Game</button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}