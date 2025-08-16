// This would contain actual API logic if you replace mockData with a backend
import { movies } from "./src/mockData";

export const fetchMovies = () =>
  new Promise(resolve => setTimeout(() => resolve(movies), 300));

export const fetchMovieById = (id) =>
  new Promise(resolve => setTimeout(() => {
    resolve(movies.find(m => m.id === Number(id)));
  }, 300));
