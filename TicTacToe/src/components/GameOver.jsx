import gameState from "./GameState.js";
import GameState from "./GameState.js";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.PlayerOWins:
      return <div className="game-over">O Wins</div>;
    case GameState.PlayerXWins:
      return <div className="game-over">X Wins</div>;
    case GameState.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
}

export default GameOver;
