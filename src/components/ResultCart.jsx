import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const ResultCart = ({ result }) => {
  const { addMovieToPlaylist, addMovieToFavorites, playlist, favorites } = useContext(MovieContext);
  const storedMoviePlaylist = playlist.find((o) => o.id === result.id)
  const storedMovieFavorites = favorites.find((o) => o.id === result.id)
  return (
    <div className="result-cart relative w-[400px] border">
      <div className="result-image">
        <img
          className="w-full h-auto transition duration-300 ease-in-out transform hover:brightness-50"
          src={`https://image.tmdb.org/t/p/w400/${result.backdrop_path}`}
          alt={result.title}
        />
        <div className="result-overlay absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white">
          <div className="result-infos text-center">
            <h1 className="text-2xl font-bold">{result.title}</h1>
            <p>{result.release_date.substring(0, 4)}</p>
            <p>
              IMDB: <span className="font-bold">{result.vote_average}</span>
            </p>
          </div>
          <div className="result-actions mt-2">
            <button
            disabled={storedMoviePlaylist}
              onClick={() => addMovieToPlaylist(result)}
              className="border-2 border-orange bg-navyBlue text-white hover:bg-orange hover:border-navyBlue hover:text-navyBlue px-4 py-2 mr-2"
            >
              Add to Playlist
            </button>
            <button disabled={storedMovieFavorites} onClick={() => addMovieToFavorites(result)} className="border-2 border-orange bg-navyBlue text-white hover:bg-orange hover:border-navyBlue hover:text-navyBlue px-4 py-2">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
