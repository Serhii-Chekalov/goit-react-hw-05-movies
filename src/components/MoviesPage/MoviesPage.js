import { useState, useEffect } from "react";
import { MoviesSearchForm } from "./SearchFormMovies";
import MovieList from "../MovieList/MovieList";
import { fetchByInputValue } from "../service/fetchApi.jsx";
import { useHistory, useLocation } from "react-router-dom";

export default function MoviesPage() {
  const [inputValue, setInputvalue] = useState("");
  const [searchMoviesList, setSearchMoviesList] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const data = new URLSearchParams(location.search).get("query");

  function handleInputChange(e) {
    setInputvalue(e.currentTarget.value.trim());
  }

  function handleMovieSearch(e) {
    e.preventDefault();
    if (inputValue) {
      fetchByInputValue(inputValue).then((res) =>
        setSearchMoviesList(res.results)
      );
      changeQuery();
    }
  }

  function changeQuery() {
    history.push({
      ...location,
      search: `query=${inputValue}`,
    });
  }

  useEffect(() => {
    if (data !== null) {
      fetchByInputValue(data).then((res) => setSearchMoviesList(res.results));
    }
  }, [data]);

  return (
    <div>
      <MoviesSearchForm
        inputValue={inputValue}
        onChange={handleInputChange}
        onSubmit={handleMovieSearch}
      />
      {searchMoviesList.length > 0 && <MovieList list={searchMoviesList} />}
    </div>
  );
}
