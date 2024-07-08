import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import searchMoviesById from "../../functions/searchMoviesById";
import { useRef } from "react";

import NotFoundPage from "../NotFoundPage/NotFoundPage";

import InfoAbout from "../../components/InfoAbout/InfoAbout";
import AdditionalLinks from "../../components/AdditionalLinks/AdditionalLinks";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(0);
  const [loading, setLoading] = useState(false);

  const lastPlace = useLocation();
  const savedPlace = useRef(lastPlace.state ?? "/");
  useEffect(() => {
    const fetchIdMovies = async () => {
      try {
        setLoading(true);
        const response = await searchMoviesById(movieId);
        setMovie(response);
      } catch (error) {
        console.log("ops");
      } finally {
        setLoading(false);
      }
    };
    fetchIdMovies();
  }, [movieId]);
  if (movie) {
    return (
      <>
        <Link to={savedPlace.current}>Back</Link>
        <InfoAbout film={movie.data} />
        <AdditionalLinks />
        <Outlet />
      </>
    );
  } else {
    return !loading && <NotFoundPage />;
  }
}