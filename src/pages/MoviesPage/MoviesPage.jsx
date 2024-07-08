import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import searchMoviesByName from "../../functions/searchMoviesByName";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [keyWord, setKeyWord] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);

  const [params, setParams] = useSearchParams();
  useEffect(() => {
    async function makeFetch() {
      if (params.get("searchword")) {
        try {
          const responce = await searchMoviesByName(params.get("searchword"));
          setFoundMovies(responce.data.results);
        } catch (error) {
          console.log(console.log(error));
        }
      }
    }
    makeFetch();
  }, [params]);

  function handleSubmit(values) {
    if (values.searchWord.trim().length > 0) {
      setKeyWord(values.searchWord);
      params.set("searchword", values.searchWord);
      setParams(params);
    }
  }

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        value={params.get("searchword") ?? ""}
      />
      {foundMovies.length > 0 && <MovieList Movies={foundMovies} />}
    </>
  );
}