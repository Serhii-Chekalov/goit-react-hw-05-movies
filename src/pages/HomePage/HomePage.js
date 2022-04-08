import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../Components/service/fetchApi.jsx";
import MovieList from "../../Components/MovieList/MovieList";

export default function HomePage() {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then((res) => {
      setMoviesList(res.results);
    });
  }, []);

  return <>{moviesList && <MovieList list={moviesList} />}</>;
}
