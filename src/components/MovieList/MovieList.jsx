import { Link, useLocation } from "react-router-dom";

export default function MovieList({ Movies }) {
  const lastPlace = useLocation();

  return (
    <ul>
      {Movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={lastPlace}>
              {movie.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}