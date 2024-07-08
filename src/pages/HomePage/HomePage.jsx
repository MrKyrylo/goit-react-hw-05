import { useEffect, useState } from "react";

import searchTrendingMovie from "../../functions/searchTrendingMovie";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);

        const response = await searchTrendingMovie();
        setTrendingMovies(response.data.results);
      } catch (error) {
        setError(true);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      {error && <p>ERROR</p>}
      <MovieList Movies={trendingMovies} />
    </>
  );
}