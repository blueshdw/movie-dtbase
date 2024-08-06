import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import FavoriteMovieCard from "../components/FavoriteMovieCard";

const MyFavoritesPage = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <div className="favorites">
      <h1 className="font-bold text-3xl mt-2">My Favorites</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5 p-4">
        {favorites.length > 0 ? (
          favorites.map((movie) => {
            return <FavoriteMovieCard key={movie.id + 1} movie={movie} />;
          })
        ) : (
          <h1>Henüz favori filmlerinizi eklemediniz.</h1>
        )}
      </div>
    </div>
  );
};

export default MyFavoritesPage;
