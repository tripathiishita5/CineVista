import { useState, useEffect } from "react";

export const useCastSeries = (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGRmZWU2YzQ5YTJlZTAxNzE5ZTViOTU1OThhNzk2OCIsInN1YiI6IjY2MTY1OGEwMjQyZjk0MDE3ZGM0YTBmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rNo2wYB8V_OQgd15h_kr_U0ORyJt8p9vvjpDqUeaZiM",
    },
  };

  const [castSeries, setCastSeries] = useState(null);
  const fetchCastData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
        options
      );
      const json = await response.json();
      if (response.ok) {
        setCastSeries(json.cast);
      } else {
        console.error("Failed to fetch cast data: ", json);
      }
    } catch (error) {
      console.error("Failed to fetch cast data", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCastData();
    }
  }, [id]);

  return castSeries;
}