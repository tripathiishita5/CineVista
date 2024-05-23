import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCast } from "../hooks/useCast.jsx";

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
  const {id} = useParams();
  const cast = useCast(id);

  console.log(cast);
  useEffect(() => {
    data();
  }, [detail]);

  const data = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', options);
    const data = await response.json();
    //console.log(data);
    setDetail(data);
  }  

    return (
      <div className="h-auto p-4 bg-slate-800">
        <div className="w-full flex mt-4">
          <div className="w-[30%]">
            <img
              className="w-56 m-auto"
              src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
              alt="poster"
            />
          </div>

          <div className="w-[70%] text-white">
            <h1 className="font-bold font-serif text-2xl">{detail?.title}</h1>
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

        <div className="flex gap-3">
          {cast?.slice(0,9).map((member) => (
            <div
              key={member.cast_id}>
              <img
                className="w-32 h-32 rounded-full"
                src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                alt={member.name}
              />

              <h4 className="text-center mt-2 text-white">{member.name}</h4>
              <p className="text-center text-sm text-gray-400">
                {member.character}
              </p>
            </div>
          ))}
        </div>

      </div>
    );
}

export default Detail;