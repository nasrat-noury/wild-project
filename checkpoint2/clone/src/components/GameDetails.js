import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GameDetails = ({ match }) => {
  const [game, setGame] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`https://apis.wilders.dev/wild-games/games/${id}`)
      .then((res) => res.data)
      .then((data) => setGame(data));
  }, []);
  return (
    <div className="Game">
      <h2>{game.name}</h2>

      <img className="image" src={game.background_image} />
      <p>Rating: {game.rating}</p>
      <p>Released : {game.released}</p>
      <Link className="link" to={`/games`}>
        <button>Retourner à la liste de jeux</button>
      </Link>
    </div>
  );
};

export default GameDetails;
