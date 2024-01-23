// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

const initialGameBoard = [
  [1, 2, 3],
  [45, 56, 3],
  [90, 2, 3],
];

const val = initialGameBoard.map((e, i) => e[i]);
console.log(val);
export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowInd) => {
        <li key={rowInd}>
          <ol>
            {row.map((playerSymbol, colInd) => {
              <li key={colInd}>
                <button>{playerSymbol}</button>
              </li>;
            })}
          </ol>
        </li>;
      })}
    </ol>
  );
}
