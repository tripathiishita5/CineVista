import { useEffect, useState } from "react";
import Card from "../components/Card"
import { Link } from "react-router-dom";

const Upcoming = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM",
    },
  };

  const [upcomingMovies, setUpcomingMovies] = useState(null);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const data = await response.json();
    // console.log(data.results);
    setUpcomingMovies(data.results);
  };
  return (
    <div className="w-full h-full bg-gray-800 p-4 flex flex-wrap justify-center gap-4">
      {upcomingMovies?.map((val, index) => (
        <Link key={index} to={`/detail/${val.id}`}>
          <Card title={val.original_title} image={val.poster_path} />
        </Link>
      ))}
    </div>
  );
};
export default Upcoming;
