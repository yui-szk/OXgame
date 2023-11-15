type Props = {
  value: string | null;
  onSquareClick: () => void;
  isRed?: boolean;
};

export function Square({ value, onSquareClick, isRed }: Props) {
  return (
    <button
      title="button"
      type="button"
      className={`square ${isRed ? "red" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
