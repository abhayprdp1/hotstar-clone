import React, { useEffect, useState } from "react";
import MovieRow from "../components/home/MovieRow";
import { fetchPopularTVShows } from "../services/tmdb";

const TVShows = () => {
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTVShows() {
      setLoading(true);
      const shows = await fetchPopularTVShows();
      setTVShows(shows);
      setLoading(false);
    }
    loadTVShows();
  }, []);

  return (
    <main style={{ padding: "2rem", minHeight: "80vh", background: "#181818" }}>
      <h1 style={{ color: "#fff", fontWeight: 700, marginBottom: 24 }}>TV Shows</h1>
      {loading ? (
        <p style={{ color: "#fff", textAlign: "center" }}>Loading...</p>
      ) : (
        <MovieRow title="Popular TV Shows" movies={tvShows} showViewAll={false} />
      )}
    </main>
  );
};

export default TVShows;
