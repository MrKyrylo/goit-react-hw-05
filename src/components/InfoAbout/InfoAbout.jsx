import css from "./InfoAbout.module.css";

export default function InfoAbout({ film }) {
  if (film) {
    return (
      <div className={css.boxForMovie}>
        <div className={css.placeForImage}>
          <img
            className={css.Image}
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.original_title}
          />
        </div>
        <div className={css.placeForText}>
          <h1>
            {film.original_title} ({film.release_date.substring(0, 4)})
          </h1>
          <p>Average vote: {film.vote_average}</p>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Genres</h3>
          <p>{film.genres.map((genr) => genr.name).join(", ")}.</p>
        </div>
      </div>
    );
  }
}