const KEY = "a31a18411301d4a3abca261905a74615";
const URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMovies() {
  const response = await fetch(`${URL}/trending/movie/day?api_key=${KEY}`);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export async function fetchByInputValue(searchQuery) {
  const response = await fetch(
    `${URL}/search/movie?api_key=${KEY}&language=en-US&page=1&query=${searchQuery}`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export async function fetchMovieCard(id) {
  const response = await fetch(
    `${URL}/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export async function fetchCast(id) {
  const response = await fetch(
    `${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export async function fetchReviews(id) {
  const response = await fetch(
    `${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}
