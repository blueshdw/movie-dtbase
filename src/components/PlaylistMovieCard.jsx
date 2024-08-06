import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const PlaylistMovieCard = ({ movie }) => {
  const { removeMovieToPlaylist } = useContext(MovieContext);
  return (
    <div className="movie">
      <div className="result-cart relative w-[400px] border">
        <div className="result-image">
          <img
            className="w-full h-auto transition duration-300 ease-in-out transform hover:brightness-50"
            src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className="result-overlay absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white">
            <div className="result-infos text-center">
              <h1 className="text-2xl font-bold">{movie.title}</h1>
              <p>{movie.release_date.substring(0, 4)}</p>
              <p>
                IMDB: <span className="font-bold">{movie.vote_average}</span>
              </p>
            </div>
            <div className="result-actions mt-2">
              <button
                onClick={() => removeMovieToPlaylist(movie.id)}
                className="border-2 border-orange bg-navyBlue text-white hover:bg-orange hover:border-navyBlue hover:text-navyBlue px-4 py-2"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistMovieCard;
