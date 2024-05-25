import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Latest = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM'
        }
      };
      
    const [latestMovies, setLatestMovies] = useState(null);
    useEffect(() => {
      data();
    }, []);

    const data = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/latest",
        options
      );
      const data = await response.json();
      setLatestMovies(data.results);
      console.log(data.results);
    };
  return (
    <div className="trending bg-slate-800 mt-4">
      {latestMovies?.map((val, index) => (
        <Link key={index} to={`/detail/${val.id}`}>
          <Card title={val.original_title} image={val.poster_path} />
        </Link>
      ))}
    </div>
  );
};
export default Latest;
