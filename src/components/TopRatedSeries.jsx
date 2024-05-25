import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Card from "./Card.jsx";

const TopRatedSeries = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM'
        }
      };
      
    const [topRatedSeries, setTopRatedSeries] = useState(null);
    useEffect(() => {
      data();
    }, []);

    const data = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated",
        options
      );
      const data = await response.json();
      setTopRatedSeries(data.results);
      //console.log(data.results);
    };

    return (
      <div className="trending bg-slate-800 gap-4 flex z-10 overflow-x-auto mt-4">
        {topRatedSeries?.map((val, index) => (
          <Link key={index} to={`/series/${val.id}`}>
            <Card title={val.original_name} image={val.poster_path} />
          </Link>
        ))}
      </div>
    );
}

export default TopRatedSeries;