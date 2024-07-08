import { Link } from "react-router-dom";

export default function AdditionalLinks() {
  return (
    <>
      <h3>Additional inforamation</h3>
      <ul>
        <Link to="cast">Cast</Link>
        <Link to="review">Review</Link>
      </ul>
    </>
  );
}