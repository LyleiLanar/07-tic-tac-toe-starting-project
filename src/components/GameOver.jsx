export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? `${winner} won!` : "It's a draw!"}</p>
      <button type="button" onClick={onRestart}>
        Rematch
      </button>
    </div>
  );
}
