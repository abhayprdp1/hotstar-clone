import React, { useEffect, useState } from "react";
import MovieRow from "../components/home/MovieRow";
import { fetchSportsMovies } from "../services/tmdb";

const Sports = () => {
  const [sportsMovies, setSportsMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);
      const sports = await fetchSportsMovies();
      setSportsMovies(sports);
      setLoading(false);
    }
    loadMovies();
  }, []);

  return (
    <main style={{ padding: "2rem", minHeight: "80vh", background: "#181818" }}>
      <h1 style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: "2rem",
        marginBottom: 28
      }}>Sports</h1>
      {loading ? (
        <p style={{ color: "#fff", textAlign: "center" }}>Loading...</p>
      ) : (
        <MovieRow title="Popular Sports Movies" movies={sportsMovies} showViewAll={false} />
      )}
    </main>
  );
};

export default Sports;
