import React, { useEffect, useState } from "react";
import axios from "../api/aixos";
import requests from "../api/requests";
import "./Banner.css";

export default function Banner() {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const Response = await axios.get(requests.fetchNowplaying);
        console.log(Response.data.results);
        setMovies(
          Response.data.results[
            Math.floor(Math.random() * Response.data.results.length - 1)
          ]
        );
      } catch {
        console.log("error");
      }
    }
    fetchData();
  }, [requests.fetchNowplaying]);

  return (
    <header
      className="Banner"
      style={{
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${Movies?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "centercontain",
      }}
    >
      <div className="Banner-container">
        <h1 className="Banner-title">
          {Movies?.title || Movies?.name || Movies?.original_name}
        </h1>
        <div className="buttons-banner">
          <button className="button-banner">Play</button>
          <button className="button-banner">My List</button>
        </div>
        <p className="banner-descr">{Movies?.overview}</p>
      </div>
      <div className="banner-fadeabattom"/>
    </header>
  );
}
