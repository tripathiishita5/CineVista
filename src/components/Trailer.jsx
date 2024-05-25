import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaRegPlayCircle } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

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
        <div className="w-[70%] h-64 relative mb-5">
          <button
            className="absolute top-0 right-0 mt-3 mr-3 text-2xl"
            onClick={() => setShowPlayer(false)}
          >
            <LiaTimesSolid />
          </button>
          <ReactPlayer
            key={trailer.id}
            className=""
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
