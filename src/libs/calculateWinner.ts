export function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const squaresA = squares[a];
    if (squaresA && squaresA === squares[b] && squaresA === squares[c]) {
      return { winner: squaresA, line: lines[i] }; //iのlinesをlineで返す
    }
  }
  console.log(squares);
  return null;
}
