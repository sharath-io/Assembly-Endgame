import { useState } from "react";
import "./App.css";
import { languages } from "./languages.js";
import clsx from "clsx";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log("here: ", guessedLetters);

  const addGuessedLetter = (letter) =>
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const languageElements = languages.map((lang) => (
    <span
      className="chip"
      key={lang.name}
      style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
    >
      {lang.name}
    </span>
  ));

  const letterElements = currentWord.split("").map((letter, index) => (
    <span key={index} className="letter">
      {letter.toUpperCase()}
    </span>
  ));

  const btnElements = alphabet.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);

    const className= clsx({correct:isCorrect, wrong:isWrong})

    return (<button
      key={index}
      className= {className}
      onClick={() => addGuessedLetter(letter)}
    >
      {letter.toUpperCase()}
    </button>)
  });

  return (
    <>
      <main>
        <header>
          <h1>Assembly: Endgame</h1>
          <p>
            Guess the word in under 8 attempts to keep the programming world
            safe from Assembly!
          </p>
        </header>

        <section className="game-status">
          <h2>You win!</h2>
          <p>Well done! </p>
        </section>

        <section className="language-chips">{languageElements}</section>

        <section className="word">{letterElements}</section>

        <section className="btn-section">{btnElements}</section>
        <button className="new-game">New Game</button>
      </main>
    </>
  );
}

export default App;
