import React, { useEffect, useState } from "react";
import axios from "../api/aixos";
import "./Row.css";

function Row({ title, fetchUrl, isLarfeRow }) {
  const [Movies, setMovies] = useState([]);
  const imgsUrl = "http://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="row-posters">
        {Movies.map((movie) => {
          return (
            <img
              className={`row-poster  ${isLarfeRow && "row-posterLarge"}`}
              src={`${imgsUrl}${
                isLarfeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
