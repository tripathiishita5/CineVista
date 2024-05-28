import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";

const PopularSeries = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM'
        }
      };
      
      const [popularSeries, setPopularSeries] = useState(null);
      useEffect(() => {
        data();
      }, []);

      const data = async () => {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular', options);
        const data = await response.json();
        setPopularSeries(data.results);
        //console.log(data.results);
      };

    return (
      <div className="trending bg-slate-800 gap-4 flex z-10 overflow-x-auto mt-4">
        {popularSeries ? (
          popularSeries.map((val, index) => (
            <Link key={index} to={`/detail/${val.id}`}>
              <Card title={val.original_title} image={val.poster_path} />
            </Link>
          ))
        ) : (
          // Render Shimmer components while the data is loading
          <Shimmer />
        )}
      </div>
    );
}
export default PopularSeries;