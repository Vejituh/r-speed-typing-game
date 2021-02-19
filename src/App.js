import React from "react"
import './App.css'
import useWordGame from './hooks/useWordGame'

export default function App() {
  const {textarea, setTextarea, timeLeft, gameState, wordCount, textAreaRef, gameStart} = useWordGame()
  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea disabled={!gameState} ref={textAreaRef} name="textarea" value={textarea} placeholder="Start typing..." onChange={(e) => setTextarea(e.target.value)} />
      <h4>Amount of time remaining: {timeLeft}</h4>
      <button disabled={gameState} onClick={gameStart}>Start Game</button>
      <h1>Word Count: {wordCount}</h1>
    </>
  )
}