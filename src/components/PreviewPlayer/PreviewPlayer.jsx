import React from "react";
import ReactPlayer from "react-player/file";

export default function PreviewPlayer({ preview }) {
  const player = {
    background: "#f0f3f4",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "20px",
    border: "1px solid #ccc",
    boxShadow: "3px 3px 6px #ccc"
  }

  return (
      <ReactPlayer
        url={preview}
        controls={true}
        height="50px"
        width="100%"
        style={player}
      />
  );
};
