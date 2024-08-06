import axios from "axios";
import React, { useEffect, useState } from "react";
import ResultCart from "../components/ResultCart";

const HomePage = () => {
  const [allMovies, setAllMovies] = useState([]);
  const getAllMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_REACT_API_KEY
      }&language=en-US&page=1`
    );
    setAllMovies(response.data.results);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="home">
      <h1 className="font-bold text-3xl mt-2">All Movies</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-5 p-4">
        {allMovies.map((result) => {
          return <ResultCart key={result.id} result={result} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
