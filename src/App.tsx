import { useState } from "react";
import { Game } from "./components/Game"
import './App.css'

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

      <br />

      <button
        onClick={createGame}
        style={{
          marginTop: '10px',
          backgroundColor: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: '#FFF'
        }}

      >Adicionar Game
      </button>

    </>
  );
}

export default App
