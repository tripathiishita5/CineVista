import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";

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
  return (
    <div>
      {randomMovie && (
        <div
          className="w-[70%] relative flex justify-center items-center h-96 bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-4 text-center">
            <h1 className="text-4xl font-bold">{randomMovie?.original_title}</h1>
            <p className="mt-2 text-lg">{randomMovie?.tagline}</p>
          </div>
        </div>
      )}

      <div className="trending bg-slate-800 gap-4 flex z-10 overflow-x-auto mt-4">
        {filteredMovies ? (
          filteredMovies.map((val, index) => (
            <Link key={index} to={`/detail/${val.id}`}>
              <Card title={val.original_title} image={val.poster_path} />
            </Link>
          ))
        ) : (
          // Render Shimmer components while the data is loading
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default NowPlaying;
