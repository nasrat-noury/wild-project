import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Games.css";

const Games = () => {
  const [games, setGames] = useState([]);
  const [IsFilter, setIsFilter] = useState(false);
  const [Favorite, setFavorite] = useState(false);

  useEffect(() => {
    handleAxios();
  }, []);
  const handleAxios = () => {
    axios
      .get(`https://apis.wilders.dev/wild-games/games/`)
      .then((response) => response.data)
      .then((data) => setGames(data));
  };

  const handleFav = (game) => {
    setFavorite(game);
  };

  const handleFilter = () => {
    setIsFilter(!IsFilter);
    if (!IsFilter) {
      setGames(games.filter((game) => game.rating > 4.5));
    } else {
      handleAxios();
    }
  };

  const handleDelete = (idgame) => {
    setGames(games.filter((game) => game.id !== idgame));
  };

  return (
    <div>
      Gamelist
      <button onClick={() => handleFilter()}>
        {IsFilter ? "Top games" : "All games"}
      </button>
      {games.map((game) => (
        <div className="Box">
          <p>
            <Link to={`/games/${game.id}`}>{game.name}</Link>
            <button onClick={() => handleDelete(game.id)}>Delete</button>
            <button onClick={() => handleFav(game)}>
              {Favorite === game ? "❤️" : "non"}
            </button>
            <p>
              <img className="Img" src={game.background_image} />
            </p>
            <p>{game.rating}</p>
          </p>
        </div>
      ))}
    </div>
  );
};
export default Games;
