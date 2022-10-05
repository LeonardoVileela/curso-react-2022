import { useState } from "react";
import { Game } from "./components/Game"

function App() {

  const [nameGame, setNameGame] = useState<string>('');
  const [games, setGames] = useState<string[]>([
    'Devil may cry 1',
    'Devil may cry 2',
    'Devil may cry 4'
  ]);

  function createGame() {
    setGames([...games, nameGame]);
    setNameGame('');
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameGame(e.target.value)
  }

  return (
    <>
      {
        games.map(
          game => {
            return <Game name={game} />
          }
        )
      }

      <input
        type="text"
        id="nameGame"
        name="nameGame"
        onChange={onChange}
        value={nameGame}
        autoComplete="off" />

      <button onClick={createGame}>Adicionar Game</button>

    </>
  );
}

export default App
