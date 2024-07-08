import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchCredits from "../../functions/searchCredits";

export default function MovieCast() {
  const [cast, setCast] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const credit = await searchCredits(movieId);
        setCast(credit.data.cast);
        console.log(credit.data.cast);
      } catch (error) {
        console.log("ops");
      }
    };
    fetchCast();
  }, [movieId]);
  if (cast) {
    return (
      <ul className="castUl">
        {cast.map((person) => {
          return (
            <li key={person.id} className="person">
              <div className="placeForImg">
                <img
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                  className="personImg"
                />
              </div>
              <p>{person.name}</p>
              <p>{person.character}</p>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>No data</p>;
  }
}