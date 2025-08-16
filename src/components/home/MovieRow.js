import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateScrollButtons = () => {
    if (!rowRef.current) return;
    setCanLeft(rowRef.current.scrollLeft > 0);
    setCanRight(
      rowRef.current.scrollLeft + rowRef.current.offsetWidth < rowRef.current.scrollWidth - 5
    );
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, [movies]);

  const scrollBy = (offset) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: offset, behavior: "smooth" });
      setTimeout(updateScrollButtons, 350);
    }
  };

  return (
    <section style={{ marginBottom: "2.5rem", position: "relative" }}>
      <h2 style={{
        color: "#fff",
        fontWeight: 700,
        fontSize: "1.3rem",
        marginBottom: 16
      }}>{title}</h2>
      <div style={{ position: "relative" }}>
        {canLeft && (
          <button
            aria-label="Scroll left"
            onClick={() => scrollBy(-340)}
            style={{
              position: "absolute",
              top: "50%",
              left: -24,
              zIndex: 2,
              transform: "translateY(-50%)",
              background: "rgba(12,14,31,0.78)",
              border: "none",
              borderRadius: "50%",
              width: 60,
              height: 88,
              color: "#fff",
              fontSize: 36,
              cursor: "pointer",
              boxShadow: "0 3px 16px #000c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none"
            }}
          >
            &#8249;
          </button>
        )}
        <div
          ref={rowRef}
          style={{
            display: "flex",
            gap: 24,
            overflowX: "auto",
            padding: "1rem 0",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
          }}
          onScroll={updateScrollButtons}
        >
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        {canRight && (
          <button
            aria-label="Scroll right"
            onClick={() => scrollBy(340)}
            style={{
              position: "absolute",
              top: "50%",
              right: -24,
              zIndex: 2,
              transform: "translateY(-50%)",
              background: "rgba(12,14,31,0.78)",
              border: "none",
              borderRadius: "50%",
              width: 60,
              height: 88,
              color: "#fff",
              fontSize: 36,
              cursor: "pointer",
              boxShadow: "0 3px 16px #000c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none"
            }}
          >
            &#8250;
          </button>
        )}
      </div>
    </section>
  );
}

export default MovieRow;
