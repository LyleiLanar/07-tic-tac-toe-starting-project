import { Player } from './components/Player';

export function App() {
  return (
    <main id="game-container">
      <ul id="players">
        <Player name="Player 1" symbol="X" />
        <Player name="Player 2" symbol="O" />
      </ul>
    </main>
  );
}
