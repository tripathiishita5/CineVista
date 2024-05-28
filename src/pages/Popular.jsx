import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";


const Popular = () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM'
        }
      };
      
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
      data();
    }, [page]);

    const data = async() => {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + page,
          options
        );
        const data = await response.json();
        setPopular((prev) => [...prev, ...data.results]);
        //console.log(data.results);
    }

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      const watchingDiv = document.getElementById("watching-you");
      if (watchingDiv) {
        observer.observe(watchingDiv);
      }
      return () => {
        if (watchingDiv) {
          observer.unobserve(watchingDiv);
        }
      };
    }, [popular]);
    return (
      <div className="w-full h-full bg-gray-800 p-4">
        <h1 className="text-white text-center text-xl pb-5 italic">
          Blockbuster Hits
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {popular?.map((val, index) => (
            <Link key={index} to={`/detail/${val.id}`}>
              <Card title={val.original_title} image={val.poster_path} />
            </Link>
          ))}
          <div id="watching-you"></div>
        </div>
      </div>
    );
}

export default Popular;