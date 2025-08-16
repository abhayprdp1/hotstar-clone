import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "1rem 0" }}>
      <input
        type="text"
        placeholder="Search Movies, Shows..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: "5px 10px", fontSize: "16px" }}
      />
      <button type="submit" style={{ marginLeft: "8px", padding: "5px 15px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
