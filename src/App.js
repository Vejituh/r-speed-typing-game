import React, {useState, useEffect} from "react"
import './App.css'

export default function App() {
  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea name="textarea" value="" placeholder="Start typing..." />
      <h4>Amount of time remaining: </h4>
      <button>Start Game</button>
      <h1>Word Count: </h1>
    </>
  )
}