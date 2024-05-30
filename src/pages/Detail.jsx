import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCast } from "../hooks/useCast.jsx";
import { useVideo } from "../hooks/useVideos.jsx";
import VideoComponent from "../components/Trailer.jsx";
import Similar from "../components/Similar";
import { GoHeartFill } from "react-icons/go";
import { RiShareForwardFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Detail = () =>{
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM",
    },
  };

  const [detail, setDetail] = useState(null);
  const [isWishlist, setIsWishlist] = useState(false);
  const {id} = useParams();
  const cast = useCast(id);
  const video = useVideo(id);
  const navigate = useNavigate();

  //console.log(cast);
  useEffect(() => {
    data();
    checkIfWishlist();
  }, [id]);

  const data = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', options);
    const data = await response.json();
    //console.log(data);
    setDetail(data);
  };

  const checkIfWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const movieInWishlist = storedWishlist.some((item) => item.id === parseInt(id));
    setIsWishlist(movieInWishlist);
  }
  
  const handleWishlistClick = () => {
    const movie = {
      id: detail?.id,
      poster_path: detail?.poster_path,
      title: detail?.title,
    };
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isWishlist) {
      const updatedWishlist = storedWishlist.filter(
        (item) => item.id !== movie.id
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setIsWishlist(false);
    } else {
      storedWishlist.push(movie);
      localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
      setIsWishlist(true);
    }
  };
    return (
      <div className="h-auto p-4 bg-slate-800">
        <div className="w-full flex mt-4">
          <div className="w-[30%]">
            <img
              className="w-56 m-auto"
              src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
              alt="poster"
              onError={(e) =>
                (e.target.src =
                  "https://4.bp.blogspot.com/-TpcA_rn2daE/V2LUiuyAyOI/AAAAAAAALhA/189W1xoBhC0UapHkK99iNB2UYrDg5LkqgCLcB/s1600/No-Poster.png")
              }
            />
          </div>

          <div className="w-[70%] text-white">
            <div className="flex justify-between">
              <h1 className="font-bold font-serif text-2xl">{detail?.title}</h1>
              <div className="flex gap-4 text-lg mr-3">
                <GoHeartFill
                  onClick={handleWishlistClick}
                  className={`text-xl ${isWishlist ? "text-red-500" : ""}`}
                />
                <RiShareForwardFill className="text-xl" />
              </div>
            </div>

            <h3 className="italic mb-4">{detail?.tagline}</h3>

            <h3 className="mb-5">
              {detail?.genres?.map((genre, index) => {
                return (
                  <span
                    key={index}
                    className="mr-2 px-2 py-1 bg-pink-400 rounded-md"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </h3>

            {video && video.length > 0 && <VideoComponent videos={video} />}
            <h3 className="text-lg">Overview</h3>
            <p className="mb-5">{detail?.overview}</p>
            <div className="flex gap-5">
              <h3>
                Status: <span className="text-slate-400">{detail?.status}</span>
              </h3>
              <h3>
                Release Date:{" "}
                <span className="text-slate-400">{detail?.release_date}</span>
              </h3>
              <h3>
                Runtime:{" "}
                <span className="text-slate-400">{detail?.runtime}</span>
              </h3>
            </div>
          </div>
        </div>

        <h3 className="text-lg text-white mt-5 ml-4 mb-2">Top Cast</h3>

        <div className="flex gap-4 mb-7">
          {cast?.slice(0, 9)?.map((member) => (
            <div key={member.cast_id}>
              <img
                className="w-32 h-32 rounded-full"
                src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                alt={member.name}
                onError={(e) => {
                  e.target.src =
                    "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg";
                }}
              />

              <h4 className="text-center mt-2 text-white">{member.name}</h4>
              <p className="text-center text-sm text-gray-400">
                {member.character}
              </p>
            </div>
          ))}
        </div>
        <h3 className="text-white text-2xl font-semibold">Similar</h3>
        <Similar />
      </div>
    );
}

export default Detail;