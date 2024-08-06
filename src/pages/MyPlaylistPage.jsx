import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import PlaylistMovieCard from "../components/PlaylistMovieCard";

const MyPlaylistPage = () => {
  const { playlist } = useContext(MovieContext);

  return (
    <div className="playlist">
      <h1 className="font-bold text-3xl mt-2">My Playlist</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {playlist.length > 0 ? playlist.map((movie) => {
          return <PlaylistMovieCard key={movie.id} movie={movie} />;
        }) : <h1>Henüz playlist oluşturmadınız.</h1>}
      </div>
    </div>
  );
};

export default MyPlaylistPage;
