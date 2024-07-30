import React, { useEffect, useState } from "react";
import { API_KEY } from "../../constants/constants";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
import "./Banner.css";
function isset(variable) {
  return typeof variable !== "undefined" && variable !== null;
}
function getRandomNumber(){
  return Math.floor(Math.random()* 21);
}
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log("RandomNumber", getRandomNumber());
        setMovie(response.data.results[getRandomNumber()]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: movie ? `url(${imageUrl + movie.backdrop_path})`: ""
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">
          {movie
            ? isset(movie.title)
              ? movie.title
              : "Loading...."
            : "Loading...."}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {movie
            ? isset(movie.overview)
              ? movie.overview
              : "Loading...."
            : "Loading...."}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
