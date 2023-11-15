import { useState } from "react";
import { calculateWinner } from "../libs/calculateWinner";
import { Square } from "./Square";

type Props = {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (arg: (string | null)[]) => void;
};

export function Board({ xIsNext, squares, onPlay }: Props) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const result = calculateWinner(squares);
  let status;
  if (result) {
    status = "Winner:" + result.winner;
    console.log(result);
  } else {
    status = "Next player:" + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-box">
        {squares.map((square, i) => (
          <Square
            value={square}
            onSquareClick={() => handleClick(i)}
            isRed={result?.line.includes(i)}
          />
        ))}
      </div>
    </>
  );
}

// TODO：iがlinesに含まれていればsquareの色を変える　Propsにboolean追加　line.include(i) isRedがtrueの時に色変える　styleかclass追加か
