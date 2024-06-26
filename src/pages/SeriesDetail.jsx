import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideoSeries } from "../hooks/useVideosSeries.jsx";
import VideoComponent from "../components/Trailer.jsx";
import { useCastSeries } from "../hooks/useCastSeries.jsx";

const SeriesDetail = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM'
        }
      };
      const [seriesDetail, setSeriesDetail] = useState(null);
      const { id } = useParams();
      const video = useVideoSeries(id);
      const cast = useCastSeries(id);
      
      useEffect(() => {
        data();
      }, [id]);
      
      const data = async () => {
        const response = await fetch("https://api.themoviedb.org/3/tv/" + id + "?language=en-US",
          options
        );
        const data = await response.json();
        setSeriesDetail(data);
        //console.log(data);
      }

    return (
      <div className="h-auto p-4 bg-slate-800">
        <div className="w-full flex mt-4">
          <div className="w-[30%]">
            <img
              className="w-56 m-auto"
              src={`https://image.tmdb.org/t/p/w500${seriesDetail?.poster_path}`}
              alt="poster"
              onError={(e) =>
                (e.target.src =
                  "https://4.bp.blogspot.com/-TpcA_rn2daE/V2LUiuyAyOI/AAAAAAAALhA/189W1xoBhC0UapHkK99iNB2UYrDg5LkqgCLcB/s1600/No-Poster.png")
              }
            />
          </div>

          <div className="w-[70%] text-white">
            <h1 className="font-bold font-serif text-2xl">
              {seriesDetail?.original_name}
            </h1>
            <h3 className="italic mb-4">{seriesDetail?.tagline}</h3>
            <h3 className="mb-5">
              {seriesDetail?.genres?.map((genre, index) => {
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
            <p className="mb-5">{seriesDetail?.overview}</p>
            <div className="flex gap-5">
              <h3>
                Seasons:{" "}
                <span className="text-slate-400">
                  {seriesDetail?.number_of_seasons}
                </span>
              </h3>
              <h3>
                Episodes:{" "}
                <span className="text-slate-400">
                  {seriesDetail?.number_of_episodes}
                </span>
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
      </div>
    );
}
export default SeriesDetail;