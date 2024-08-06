import { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

export const MovieContext = createContext();

const initialState = {
  playlist: localStorage.getItem("playlist")
    ? JSON.parse(localStorage.getItem("playlist"))
    : [],
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(state.playlist));
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state]);

  const addMovieToPlaylist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_PLAYLIST", payload: movie });
  };

  const removeMovieToPlaylist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_TO_PLAYLIST", payload: id });
  };

  const addMovieToFavorites = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITES", payload: movie });
  };

  const removeMovieToFavorites = (id) => {
    dispatch({ type: "REMOVE_MOVIE_TO_FAVORITES", payload: id });
  };

  return (
    <MovieContext.Provider
      value={{
        playlist: state.playlist,
        favorites: state.favorites,
        addMovieToPlaylist,
        removeMovieToPlaylist,
        addMovieToFavorites,
        removeMovieToFavorites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
