// import React, { useEffect, useState } from "react";
// import axios from "../adapters/axios";

// import "./Row.css";

// const base_url = "https://image.tmdb.org/t/p/original";

// function Row({ title, fetchUrl, isLargeRow }) {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await axios.get(fetchUrl);
//       setMovies(data.data.results);
//       // console.log(data.data.results);
//     }
//     fetchData();
//   }, [fetchUrl]);

//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row__posters">
//         {movies.map((movie, idx) => (
//           <img
//             src={`${base_url}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.title}
//             key={idx}
//             className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Row;

import React, { useState, useEffect } from "react";
import axios from "../adapters/axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./Row.css";

import { Navigation } from "swiper";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=xXxjRzdYIss
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(url);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h3>{title}</h3>
      {/* <div className="row__posters"> */}
      <Swiper
        spaceBetween={10}
        slidesPerView={isLargeRow ? 8 : 5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        modules={[Navigation]}
        className="row__posters mySwiper"
      >
        {movies.map((movie, idx) => (
          <SwiperSlide key={idx}>
            <img
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
