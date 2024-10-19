import React, { useState, useEffect } from "react";
import "./App.css";
import Cell from "./Cell";

function App() {
  const [gameState, setGameState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameActive, setGameActive] = useState(true);
  const [winner, setWinner] = useState("");

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleCellPlayed(index) {
    if (gameState[index] !== "" || !gameActive) return;

    const newGameState = gameState.slice();
    newGameState[index] = currentPlayer;
    setGameState(newGameState);
  }

  function switchPlayer() {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }
  useEffect(() => {
    if (checkWin(gameState)) {
      setWinner(currentPlayer);
      setGameActive(false);
    } else if (checkDraw(gameState)) {
      alert("Game ended in a draw!");
      setGameActive(false);
    } else switchPlayer();
  }, [gameState]);

  useEffect(() => {
    if (!gameActive) alert(`Player ${currentPlayer} has won!`);
  }, [winner]);

  function checkWin(state) {
    return winningConditions.some((condition) => {
      const a = state[condition[0]];
      const b = state[condition[1]];
      const c = state[condition[2]];
      return a !== "" && a === b && b === c;
    });
  }

  function checkDraw(state) {
    return !state.includes("");
  }

  function restartGame() {
    setCurrentPlayer("X");
    setGameActive(true);
    setGameState(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
  }

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>
      <div className="board" id="board">
        <Cell
          id="cell-0"
          onclick={() => handleCellPlayed(0)}
          value={gameState[0]}
        />
        <Cell
          id="cell-1"
          onclick={() => handleCellPlayed(1)}
          value={gameState[1]}
        />
        <Cell
          id="cell-2"
          onclick={() => handleCellPlayed(2)}
          value={gameState[2]}
        />
        <Cell
          id="cell-3"
          onclick={() => handleCellPlayed(3)}
          value={gameState[3]}
        />
        <Cell
          id="cell-4"
          onclick={() => handleCellPlayed(4)}
          value={gameState[4]}
        />
        <Cell
          id="cell-5"
          onclick={() => handleCellPlayed(5)}
          value={gameState[5]}
        />
        <Cell
          id="cell-6"
          onclick={() => handleCellPlayed(6)}
          value={gameState[6]}
        />
        <Cell
          id="cell-7"
          onclick={() => handleCellPlayed(7)}
          value={gameState[7]}
        />
        <Cell
          id="cell-8"
          onclick={() => handleCellPlayed(8)}
          value={gameState[8]}
        />
      </div>
      <button id="restartButton" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default App;
