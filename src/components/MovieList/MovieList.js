import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./MovieList.module.css";

export default function SearchMovieList({ list }) {
  const location = useLocation();

  return (
    <ul className={style.list}>
      {list !== [] &&
        list.map((movie) => (
          <li className={style.movieItem} key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                className={style.img}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt=""
              />
            </Link>
          </li>
        ))}
    </ul>
  );
}

SearchMovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
