const API_KEY = '9e792e2a8f3431f5e11ef056e60998f7';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await response.json();
  return Array.isArray(data.results) ? data.results : [];
}

export async function fetchPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return Array.isArray(data.results) ? data.results : [];
}

export async function fetchLatestReleases() {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return Array.isArray(data.results) ? data.results : [];
}

export async function fetchActionMovies() {
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
  const data = await response.json();
  return Array.isArray(data.results) ? data.results : [];
}

export async function fetchSportsMovies() {
  // TMDb "sport" keyword: 180547
  const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_keywords=180547`);
  const data = await response.json();
  return Array.isArray(data.results) ? data.results : [];
}
export async function fetchPopularTVShows() {
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return Array.isArray(data.results) ? data.results : [];
}