import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
    : "https://placehold.co/210x315?text=No+Image";

  return (
    <div
      style={{
        width: 210,
        background: "#232339",
        borderRadius: 22,
        boxShadow: hover ? "0 10px 34px #044" : "0 3.5px 16px #0005",
        overflow: "hidden",
        textAlign: "center",
        position: "relative",
        filter: hover ? "brightness(1.06)" : "brightness(1)",
        transform: hover ? "scale(1.06)" : "scale(1)",
        transition: "transform 0.18s, box-shadow 0.16s, filter 0.17s",
        cursor: "pointer",
        marginRight: 24,
        flex: "0 0 auto"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate(`/watch/${movie.id}`)}
    >
      <img
        src={imageUrl}
        alt={movie.title || movie.name}
        style={{
          width: "100%",
          height: 315,
          objectFit: "cover",
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          transition: "filter 0.17s",
          display: "block"
        }}
      />
      {/* Movie title overlay */}
      <div style={{
        position: "absolute",
        left: 0, right: 0, bottom: 0,
        width: "100%",
        padding: "12px 0 7px 0",
        background: "linear-gradient(0deg, #232842cf 74%, #0000 100%)",
        color: "#fff",
        fontWeight: 800,
        fontSize: "1.09rem",
        letterSpacing: ".2px",
        textShadow: "0 2px 8px #141a28",
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22
      }}>
        {movie.title || movie.name}
      </div>
      {hover && (
        <button
          style={{
            position: "absolute",
            bottom: 44,
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(90deg, #32b8f3, #384ae8)",
            color: "#fff",
            border: "none",
            borderRadius: "11px",
            padding: "7px 28px",
            fontWeight: 600,
            fontSize: "1.07rem",
            boxShadow: "0 2px 7px #201f3140",
            cursor: "pointer",
            zIndex: 1
          }}
          onClick={e => {
            e.stopPropagation();
            navigate(`/watch/${movie.id}`);
          }}
        >
          Watch
        </button>
      )}
    </div>
  );
};

export default MovieCard;
