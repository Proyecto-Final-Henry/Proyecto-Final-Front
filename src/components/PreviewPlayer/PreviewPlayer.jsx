import React from "react";
import ReactPlayer from "react-player/file";

export default function PreviewPlayer({ preview }) {
  return (
    <ReactPlayer
      url={preview}
      controls={true}
      style=""
      height="30px"
      width="30%"
    />
  );
}
