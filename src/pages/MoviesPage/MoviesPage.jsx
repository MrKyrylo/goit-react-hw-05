import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import searchMoviesByName from "../../functions/searchMoviesByName";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [foundMovies, setFoundMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  const keyWord = useMemo(() => params.get("searchword") ?? "", [params]);

  useEffect(() => {
    async function makeFetch() {
      if (params.get("searchword")) {
        try {
          const response = await searchMoviesByName(params.get("searchword"));
          setFoundMovies(response.data.results);
        } catch (error) {
          console.log(error);
        }
      }
    }
    makeFetch();
  }, [params]);

  const handleSubmit = useMemo(() => {
    return (values) => {
      if (values.searchWord.trim().length > 0) {
        setParams(new URLSearchParams({ searchword: values.searchWord }));
      } else {
        setParams();
      }
    };
  }, [setParams]);

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        value={keyWord}
      />
      {foundMovies.length > 0 && <MovieList Movies={foundMovies} />}
    </>
  );
}