import { useState, useEffect } from "react";

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
  useEffect(() => {
    data();
  }, []);

  const data = async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/720321?language=en-US', options);
    const data = await response.json();
    console.log(data);
  }
  

    return (
      <div className="w-full h-full bg-gray-800 p-4">
        
      </div>
    );
}

export default Detail;