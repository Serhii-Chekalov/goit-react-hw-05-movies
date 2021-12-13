import { useEffect, useState } from "react";
import { fetchReviews } from "../service/fetchApi.jsx";
import PropTypes from "prop-types";
import s from "./Reviews.module.css";

export default function MovieReviews({ id }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReviews(id).then((res) => setReview(res.results));
  }, [id]);

  return (
    <ul className={s.reviewsList}>
      {review.length !== 0 ? (
        review.map((data) => (
          <li key={data.id}>
            <h3>{data.author}</h3>
            <p className={s.review}>{data.content}</p>
          </li>
        ))
      ) : (
        <p className={s.emptyReviews}>No reviews</p>
      )}
    </ul>
  );
}

MovieReviews.propTypes = {
  id: PropTypes.string,
};
