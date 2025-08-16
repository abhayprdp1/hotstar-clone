import React from "react";

const PlayerControls = ({ onPlay, onPause, onFullScreen }) => (
  <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
    <button onClick={onPlay}>Play</button>
    <button onClick={onPause}>Pause</button>
    <button onClick={onFullScreen}>Full Screen</button>
  </div>
);

export default PlayerControls;
