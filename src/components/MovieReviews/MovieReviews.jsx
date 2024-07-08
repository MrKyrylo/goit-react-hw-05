import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchReview from "../../functions/searchReview";

export default function MovieReviews() {
  const [reviews, setReviews] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const credit = await searchReview(movieId);
        setReviews(credit.data.results);
        console.log(credit.data.results);
      } catch (error) {
        console.log("ops");
      }
    };
    fetchReview();
  }, [movieId]);
  if (reviews) {
    return (
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>No data</p>;
  }
}