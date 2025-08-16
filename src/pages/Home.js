import React, { useEffect, useState } from "react";
import SectionRow from "../components/home/SectionRow";
import Hero from "../components/home/Hero";
import {
  fetchLatestReleases,
  fetchTrendingMovies,
  fetchActionMovies,
  fetchSportsMovies
} from "../services/tmdb";

const sections = [
  { title: "Latest Releases", fetchFn: fetchLatestReleases },
  { title: "Trending Now", fetchFn: fetchTrendingMovies },
  { title: "Action Extravaganza", fetchFn: fetchActionMovies },
  { title: "Non-Stop Sports", fetchFn: fetchSportsMovies }
];

function Home() {
  const [moviesBySection, setMoviesBySection] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllSections() {
      setLoading(true);
      const results = await Promise.all(sections.map(sec => sec.fetchFn()));
      const newMovies = {};
      sections.forEach((sec, idx) => {
        newMovies[sec.title] = results[idx];
      });
      setMoviesBySection(newMovies);
      setLoading(false);
    }
    loadAllSections();
  }, []);

  return (
    <main style={{ background: "#181818", minHeight: "100vh", padding: "2rem 0" }}>
      <Hero />
      {loading ? (
        <p style={{ textAlign: "center", color: "#fff" }}>Loading...</p>
      ) : (
        sections.map(section => (
          <SectionRow
            key={section.title}
            title={section.title}
            movies={moviesBySection[section.title] || []}
            showViewAll={section.title === "Action Extravaganza"}
            link="/movies?genre=action"
          />
        ))
      )}
    </main>
  );
}

export default Home;
