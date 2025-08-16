import React from "react";
const VideoPlayer = ({ src }) => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "2rem 0" }}>
    <video controls width="100%">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);
export default VideoPlayer;
