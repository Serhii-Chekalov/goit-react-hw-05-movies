import style from "./SearchForm.module.css";
import PropTypes from "prop-types";

export function MoviesSearchForm({ onChange, inputValue, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        name="movie"
        placeholder="Movie"
        value={inputValue}
        className={style.searchInput}
      />
      <button className={style.searchBtn}>Search</button>
    </form>
  );
}

MoviesSearchForm.propTypes = {
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
  onSubmit: PropTypes.func,
};
