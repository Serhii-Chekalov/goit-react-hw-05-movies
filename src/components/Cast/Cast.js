import { useEffect, useState } from "react";
import { fetchCast } from "../service/fetchApi.jsx";
import actorPhotoe from "../../images/actorPhotoe.jpg";
import PropTypes from "prop-types";
import s from "./Cast.module.css";

export default function MovieCast({ id }) {
  const IMG_BASE = "https://image.tmdb.org/t/p/w200";
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(id).then((cast) => {
      setCast(cast.cast);
    });
  }, [id]);

  return (
    <ul className={s.castList}>
      {cast !== [] &&
        cast.map((actor) => (
          <li className={s.actor} key={actor.id}>
            <img
              src={
                actor.profile_path !== null
                  ? `${IMG_BASE}${actor.profile_path}`
                  : `${actorPhotoe}`
              }
              alt={actor.name}
            />
            <h3 className={s.name}>{actor.name}</h3>
            {actor.character && (
              <p className={s.character}>Character: {actor.character}</p>
            )}
          </li>
        ))}
    </ul>
  );
}

MovieCast.propTypes = {
  id: PropTypes.string,
};
