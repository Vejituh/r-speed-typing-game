import React, {useState, useEffect} from "react"
import './App.css'

export default function App() {
  const [textarea, setTextarea] = useState('')

  const calculateWordCount = (textarea) => {
    const wordsArr = textarea.trim().split(" ")
    console.log(wordsArr[0] !== ""? wordsArr.length: 0)
  }
  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea name="textarea" value={textarea} placeholder="Start typing..." onChange={(e) => setTextarea(e.target.value)} />
      <h4>Amount of time remaining: </h4>
      <button onClick={() => calculateWordCount(textarea)}>Start Game</button>
      <h1>Word Count: </h1>
    </>
  )
}