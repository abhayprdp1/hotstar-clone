import React from "react";

const CategorySlider = ({ categories, selectedCategory, onSelect }) => (
  <div style={{ display: "flex", gap: 12, margin: "1rem 0", overflowX: "auto" }}>
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => onSelect(cat)}
        style={{
          padding: "8px 16px",
          borderRadius: 20,
          border: selectedCategory === cat ? "2px solid #1f80e0" : "2px solid transparent",
          backgroundColor: selectedCategory === cat ? "rgba(31,128,224,0.1)" : "transparent",
          color: "#fff",
          fontWeight: selectedCategory === cat ? "700" : "400",
          cursor: "pointer",
          whiteSpace: "nowrap",
          transition: "all 0.3s",
        }}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategorySlider;
