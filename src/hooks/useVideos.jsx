import { useState, useEffect } from "react";

export const useVideo = (id) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM'
        }
      };
    
      const [video, setVideo] = useState(null);

      useEffect(() => {
        data();
      }, []);

      const data = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos`, options);
        const data = await response.json();
        setVideo(data.results);
        console.log(data.results);
      };

      return video;
}