// import React, { useEffect, useState } from "react";
// import axios from "../adapters/axios";

// import requests from "../adapters/requests";
// import "./Banner.css";

// const base_url = "https://image.tmdb.org/t/p/original/";

// function Banner() {
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(requests.fetchNetflixOriginals);
//       //   setMovie(request.data.results[0]);
//       setMovie(
//         request.data.results[
//           Math.floor(Math.random() * request.data.results.length - 1)
//         ]
//       );
//       return request;
//     }
//     fetchData();
//   }, []);

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner__contents">
//         <h1 className="banner__title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner__buttons">
//           <button className="banner__button">View</button>
//           <button className="banner__button">Play</button>
//         </div>
//         <p className="banner__description">{truncate(movie?.overview, 150)}</p>
//       </div>
//     </div>
//   );
// }

// export default Banner;

import React, { useEffect, useState } from "react";
import axios from "../adapters/axios";

import requsts from "../adapters/requests";

import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requsts.fetchNetflixOriginals);
      console.log(request);
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
          <div className="banner__buttons">
            <div className="banner__button">Play</div>
            <div className="banner__button">My List</div>
          </div>
          <div className="banner__description">
            {truncate(movie?.overview, 150)}
          </div>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    </>
  );
}

export default Banner;
