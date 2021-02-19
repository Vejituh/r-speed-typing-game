import { useState, useEffect, useRef } from "react"

export default function useHook() {
    const [textarea, setTextarea] = useState('')
    const [timeLeft, setTimeLeft] = useState(0);
    const [gameState, setGameState] = useState(false);
    const [wordCount, setWordCount] = useState(0)
    const textAreaRef = useRef()

    useEffect(() => {
        if (timeLeft > 0) {
            setTimeout(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
            }, 1000)
        } else if (timeLeft === 0 && gameState === true) {
            setGameState(false);
            setWordCount(calculateWordCount(textarea))
        }
    }, [timeLeft])

    const calculateWordCount = (words) => {
        return words.length > 1 ? words.trim().split(" ").length : 0
    }

    const gameStart = () => {
        if (gameState === false) {
            setGameState(true)
            setTextarea('')
            setWordCount(0)
            setTimeLeft(5)
            textAreaRef.current.disabled = false
            textAreaRef.current.focus()
        }
    }

    return (
        { textarea, setTextarea, timeLeft, gameState, wordCount, textAreaRef, calculateWordCount, gameStart }
    )
}