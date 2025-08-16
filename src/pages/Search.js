import React, { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import MovieRow from "../components/home/MovieRow";
import { movies } from "../services/mockData";

const Search = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    setResults(
      movies.filter(
        m =>
          m.title.toLowerCase().includes(query.toLowerCase()) ||
          (m.category && m.category.toLowerCase().includes(query.toLowerCase()))
      )
    );
  };

  return (
    <main>
      <h1>Search</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieRow title="Results" movies={results} />
    </main>
  );
};

export default Search;
