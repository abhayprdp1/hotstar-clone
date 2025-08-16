import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/tmdb";
import MovieCard from "../components/home/MovieCard";

const GRID_COLS = 6; // Adjust to taste

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetchPopularMovies(); // You can create other fetches: fetchTopRatedMovies, etc.
      setMovies(res);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div style={{ padding: "2rem", minHeight: "100vh", background: "#181818" }}>
      <h1 style={{
        color: "#fff",
        fontWeight: 800,
        fontSize: "2rem",
        letterSpacing: "0.7px",
        marginBottom: "2rem"
      }}>
        Movies
      </h1>
      {loading ? (
        <p style={{ color: "#fff", textAlign: "center" }}>Loading...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gap: "36px",
            justifyItems: "center"
          }}
        >
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
