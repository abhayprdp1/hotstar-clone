import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../services/mockData";
import VideoPlayer from "../components/player/VideoPlayer";

const WatchPage = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  if (!movie) return <p>Video not found.</p>;
  return (
    <main>
      <h1>{movie.title}</h1>
      <VideoPlayer src={movie.video} />
    </main>
  );
};

export default WatchPage;
