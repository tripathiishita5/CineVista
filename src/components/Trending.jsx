import Card from "./Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trending = () =>{
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM",
      },
    };
    const [trendingMovies, setTrendingMovies] = useState(null);
    useEffect(() => {
      data();
    }, []);

    const data = async () =>{
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          options
        );
        const data = await response.json();
        //console.log(data);
        setTrendingMovies(data.results);
    };

    return (
      <div className="trending bg-slate-800 gap-4 flex z-10 overflow-x-auto mt-4">
        {trendingMovies?.map((val, index) => (
          <Link key={index} to={`/detail/${val.id}`}>
            <Card title={val.original_title} image={val.poster_path} />
          </Link>
        ))}
      </div>
    );
}
export default Trending;
