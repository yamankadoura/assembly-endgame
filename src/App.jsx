import { useState , useEffect, useRef} from "react"
import { languages } from "./Util_files/language"
import { getFarewellText, getRandomWord } from "./Util_files/util";
import Confetti from "react-confetti"
import Header from "./Components/Header"
import React from "react"
import Chip from "./Components/Chip"
import clsx from 'clsx';


export default function Hangman() {
    const [currentWord, setCurrentWord] = useState(() => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const keyArray = alphabet.split("")
    const wrongGuessCount = guessedLetters.filter(letter => 
                            !currentWord.includes(letter)).length

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length -1
    const isGameOver = isGameWon || isGameLost
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
    const buttonRef = useRef(null)

    useEffect(() => {
        if (isGameOver && buttonRef.current) {
            buttonRef.current.focus()
        }
    }, [isGameOver])

    function newGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }

    useEffect(() => {
        function handleKeyDown(e) {
            const key = e.key.toLowerCase();
            if (keyArray.includes(key) && !guessedLetters.includes(key) && !isGameOver) {
                addGuessedLetter(key);
            }
        }
    
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [guessedLetters, isGameOver]);

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? prevLetters :
            [...prevLetters, letter] 
        )
    }

    let letters = currentWord.split("").map((letter,index) => {
        const isGuessed = guessedLetters.includes(letter)

        if (isGameLost) {
            return (
                <span 
                    key={index} 
                    className={clsx("spans", {
                        "spans-lost": !isGuessed
                    })}
                >
                    {letter.toUpperCase()}
                </span>
            )
        } else {
            
            return <span 
            key={index} className="spans">
                { isGuessed ? letter.toUpperCase() : " "}
            </span>    
        }   
    })


    const chips = languages.map((language, index) => {
        const clasname = clsx("lang-btns", {
            "lang-btns-lost" : index < wrongGuessCount
        })

        return (
            <Chip 
            fontcolor = {language.color}
            text = {language.name}
            color = {language.backgroundColor}
            className = {clasname}
            key = {index}
            />
        )
    })


    const keyBtns = keyArray.map((key,index) => {
        const isCorrect = currentWord.includes(key)
        const isGuessed = guessedLetters.includes(key)

        const name = clsx('key-btns', {
            'key-btns-green': isGuessed && isCorrect,
            'key-btns-red': isGuessed && !isCorrect,
            'key-btns-disabled': isGameOver
        })
        return <button 
            key={index} 
            className = {name}
            onClick={() => addGuessedLetter(key)}
            disabled= {isGameOver}
            aria-disabled={guessedLetters.includes(key)}
            aria-label={`Letter ${key}`}
            >{key.toUpperCase()}</button>
    })
    
    
    
    const gameStatusClassname = clsx("game-status", {
        "game-status-won": isGameWon,
        "game-status-lost": isGameLost,
        "game-status-farewell": !isGameOver && isLastGuessIncorrect
    })

    function renderGameStatus() {
        if (!isGameOver && isLastGuessIncorrect) {
            return (
                <p className={gameStatusClassname}> 
                    {getFarewellText(languages[wrongGuessCount -1].name)} 
                </p>
            )
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You Won!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } if (isGameOver) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }

    return (
        <main>
            <Header/>
            {
                <section className={gameStatusClassname}>
                    {renderGameStatus()}
                </section>
            }
            <section className="btn-sec">
                {chips}                
            </section>
            <section className="span-sec">
                {letters}
            </section>
            <section className="key-sec">
                {keyBtns}
            </section>
            {isGameOver && <button ref={buttonRef} onClick={newGame} className="new-game">New Game</button>}
            {isGameWon && <Confetti
                                        recycle={false}
                                        numberOfPieces={1000}
            />}
        </main>
    )
}
