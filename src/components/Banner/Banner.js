import React, { useEffect, useState } from "react";
import { axios, requests } from "../../adapters";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <div className="banner__title">{movie?.title || movie?.name}</div>
          <div className="banner__description">
            {truncate(movie?.overview, 150)}
          </div>
          <div className="banner__buttons">
            <div className="banner__button">
              <FaPlay size={20} style={{ marginRight: "0.5rem" }} /> Play
            </div>
            <div className="banner__button">
              <FiInfo size={28} style={{ marginRight: "0.5rem" }} /> More Info
            </div>
          </div>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    </>
  );
}

export default Banner;
