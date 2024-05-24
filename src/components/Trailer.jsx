import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaRegPlayCircle } from "react-icons/fa";

const VideoComponent = ({ videos }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  // Filter to get the first video with type 'trailer'
  const trailer = videos.find((video) => video.type === "Trailer");

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <FaRegPlayCircle className="text-lg mt-1.5" />
        <button className="text-lg" onClick={() => setShowPlayer(true)}>
          Watch Trailer
        </button>
      </div>

      {showPlayer && trailer && (
        <ReactPlayer
          key={trailer.id}
          className="w-56"
          url={`https://www.youtube.com/watch?v=${trailer.key}`}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default VideoComponent;
