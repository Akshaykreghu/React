import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constants";
import YouTube from "react-youtube";

function RowPost({ title, isSmall, url }) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();
  const [hoveredMovieId, setHoveredMovieId] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: "250px",
    // width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    if (id) {
      axios
        .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          console.log("Response", response);

          if (response.data && response.data.results.length !== 0) {
            setUrlId(response.data.results[0].key ?? "");
            console.log("urlId", response.data.results[0].key);
            setHoveredMovieId(id);
          } else {
            setUrlId(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching movie videos:", error);
          setUrlId(null);
        });
    } else {
      setUrlId(null);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <div
            className="poster-container"
            onMouseLeave={() => handleMovie(null)}
          >
            {!(hoveredMovieId === obj.id && urlId) ? (
              <img
                onMouseEnter={() => handleMovie(obj.id)}
                className={isSmall ? "small-poster" : "poster"}
                src={`${imageUrl}${obj.backdrop_path}`}
                alt="poster"
              />
            ) : (
              <div className="youtube-wrapper">
                <YouTube videoId={urlId} opts={opts} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RowPost;
