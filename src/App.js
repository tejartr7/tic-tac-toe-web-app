import React from 'react';
import { Board } from './components/Board.jsx';
import { useState } from "react";
import './App.css';
import { Scoreboard } from './components/Scoreboard.jsx';
import { Reset } from './components/Reset.js';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  const winner_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const[board,setBoard]=useState(Array(9).fill(null));
    // Step 1: Update the board
    const [xPlay,setxPlay]=useState(true);
    const [score,setScore]=useState({xscore:0,oscore:0});
    const [gameOver,setGameOver]=useState(false);

    const handleBoxClick = (boxIdx) => {
      // Step 1: Update the board
      const updatedBoard = board.map((value, index) => {
        if (index === boxIdx) {
          return xPlay==true?"X":"O";
        } else {
          return value;
        }
      })
      const winner=checkWinner(updatedBoard);
      if (winner) {
         if(winner==="X") {
          let { xscore } = score;
          xscore += 1;
          setScore({ ...score, xscore })
        }
        else if (winner === "O") {
          let { oscore } = score;
          oscore += 1;
          setScore({ ...score, oscore })
        }
      }
      setBoard(updatedBoard);
      setxPlay(!xPlay);
    }
    const checkWinner = (board) => {
      for (let i = 0; i < winner_conditions.length; i++) {
        const [x, y, z] = winner_conditions[i];
  
        // Iterate through win conditions and check if either player satisfies them
        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
          setGameOver(true);
          return board[x];
        }
      }
    }
    const resetBoard = () => {
      setGameOver(false);
      setBoard(Array(9).fill(null));
    }
  return (
    <div className="App">
    <Header/>
    <Scoreboard score={score} xPlay={xPlay}/>
    <Board board={board} onClick={gameOver? resetBoard:handleBoxClick}/>
    <Reset resetBoard={resetBoard}/>
    <Footer/>
    </div>
  );
}

export default App;
