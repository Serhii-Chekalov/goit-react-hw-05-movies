import { useEffect, useState, useRef } from "react";
import { fetchMovieCard } from "../../Components/service/fetchApi.jsx";
import { useParams, Route, useHistory, useLocation } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import MovieInfo from "../../Components/MovieCard/MovieCard";
import MovieCast from "../../Components/Cast/Cast";
import MovieReviews from "../../Components/Reviews/Reviews";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const from = useRef(location?.state?.from);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoader(true);
    fetchMovieCard(movieId).then((res) => {
      setMovie(res);
    });
    setLoader(false);
  }, [movieId]);

  const onGoBack = () => {
    history.push(from.current ?? "/");
  };

  return (
    <>
      <button className={s.button} type="button" onClick={onGoBack}>
        &#10094; Go Back
      </button>
      {loader && (
        <CircleLoader
          color={"rgba(34, 139, 34, 0.452)"}
          loading={true}
          css={override}
          size={60}
        />
      )}
      <div className={s.wrapper}>
        {movie && <MovieInfo movie={movie} />}
        <Route path="/movies/:movieId/cast">
          <MovieCast id={movieId} />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <MovieReviews id={movieId} />
        </Route>
      </div>
    </>
  );
}
