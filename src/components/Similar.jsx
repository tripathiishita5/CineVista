import Card from './Card.jsx'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Similar = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM",
      },
    };

    const [similarMovies, setSimilarMovies] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      data();
    }, [id]);

    const data = async() => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar`,
          options
        );
        const data = await response.json();
        setSimilarMovies(data.results);
        //console.log(data.results);
    };

    return (
      <div className="trending gap-4 flex z-10 overflow-x-auto mt-4">
        {similarMovies?.map((val, index) => (
          <Link key={index} to={`/detail/${val.id}`}>
            <Card title={val.original_title} image={val.poster_path} />
          </Link>
        ))}
      </div>
    );
}

export default Similar;