import { useState } from "react";
import { Board } from "./Board";

export function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove: any) {
    setCurrentMove(nextMove);
  }
  function newGame() {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  }
  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="game-info">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <button id="newgame" onClick={newGame}>
        new game
      </button>
      <ol>{moves}</ol>
    </div>
  );
}
