import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const GameUrl = "https://backendexample.sanbersy.com/api/data-game";
  const MovieUrl = "https://backendexample.sanbersy.com/api/data-movie";
  const [gameList, setGameList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [idGame, setIdGame] = useState(-1);
  const [idMovie, setIdMovie] = useState(-1);

  useEffect(() => {
    setFetch(true);
    if (fetch) {
      const fetchData = async () => {
        const resultGame = await axios.get(`${GameUrl}`);
        const resultMovie = await axios.get(`${MovieUrl}`);
        setGameList(resultGame.data);
        setMovieList(resultMovie.data);
      };
      fetchData();
    }
  }, [fetch]);

  return (
    <ProductContext.Provider
      value={{
        fetch,
        setFetch,
        gameList,
        setGameList,
        movieList,
        setMovieList,
        GameUrl,
        MovieUrl,
        setIdGame,
        idGame,
        idMovie,
        setIdMovie,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
