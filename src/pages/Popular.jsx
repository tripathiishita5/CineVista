import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";
import { useTopRated } from "../hooks/useTopRated.jsx";
import { useParams } from "react-router-dom";

const Popular = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM'
        }
      };
      
    const [popular, setPopular] = useState(null);
    const topRated = useTopRated(null);
    
    useEffect(() => {
        data();
    }, []);
    const data = async() => {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setPopular(data.results);
        //console.log(data.results);
    }
    return (
      <div className="w-full h-full bg-gray-800 p-4">
        <h1 className="text-white text-center text-xl pb-5">Popular & Top Rated</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {popular?.map((val, index) => (
            <Link key={index} to={`/detail/${val.id}`}>
              <Card title={val.original_title} image={val.poster_path} />
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {topRated?.map((val, i) => (
            <Link key={i} to={`/detail/${val.id}`}>
              <Card title={val.original_title} image={val.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    );
}

export default Popular;