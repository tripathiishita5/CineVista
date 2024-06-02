import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";
import ReactPlayer from "react-player";
import {useVideo} from "../hooks/useVideos.jsx"

const NowPlaying = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM",
    },
  };

  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);
  const [randomMovie, setRandomMovie] = useState(null);
  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );
    const data = await response.json();
    setNowPlayingMovies(data.results);
    selectRandomMovie(data.results);
    //console.log(data.results);
  };

  const selectRandomMovie = (movies) => {
    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  };

  const filteredMovies = nowPlayingMovies?.filter(
    (movie) => movie.id !== randomMovie?.id
  );

  const videoData = useVideo(randomMovie?.id);
  const trailer = videoData?.find((video) => video.type === "Trailer");
  return (
    <div>
      <div className="flex justify-center">
        {randomMovie && (
          <div className="w-[70%] relative flex justify-center items-center h-96 bg-cover bg-center">
            <ReactPlayer
              key={trailer?.id}
              url={`https://www.youtube.com/watch?v=${trailer?.key}`}
              playing
              autoplay
              config={{
                youtube: {
                  playerVars: {
                    controls: 0, // Hide controls
                    disablekb: 1, // Disable keyboard controls
                    modestbranding: 1, // Modest branding
                    rel: 0, // Disable related videos
                    fs: 0, // Disable fullscreen button
                    iv_load_policy: 3, // Disable annotations
                  },
                },
              }}
            />
          </div>
        )}
      </div>

      <div className="trending bg-slate-800 gap-4 flex z-10 overflow-x-auto mt-4">
        {filteredMovies ? (
          filteredMovies.map((val, index) => (
            <Link key={index} to={`/detail/${val.id}`}>
              <Card title={val.original_title} image={val.poster_path} />
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
