export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, i) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} Seleccted {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
