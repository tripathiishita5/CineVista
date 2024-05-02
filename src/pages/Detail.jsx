import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  
  useEffect(() => {
    data();
  }, [detail]);// here i pass the detail as dependensie , because when i search in the search box and when i click on any specific movie , the content is not chenging, to make this happen i will make this useeffect dependent to the detail.

  const data = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', options);
    const data = await response.json();
    console.log(data);
    setDetail(data);
  }  

    return (
      <div className="h-screen p-4 bg-slate-800 flex">
        <div className="w-[30%]">
          <img
            className="w-56 m-auto mt-14"
            src={`https://image.tmdb.org/t/p/w500${detail?.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="w-[70%] text-white">
          <h1 className="text-center font-bold font-serif text-3xl">
            {detail?.title}
          </h1>
          <h3>{detail?.tagline}</h3>
          <p>{detail?.overview}</p>
        </div>
      </div>
    );
}

export default Detail;