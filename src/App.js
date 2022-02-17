// import "./App.css";
// import Row from "./components/Row";
// import requests from "./adapters/requests";
// import Banner from "./components/Banner";

// function App() {
//   return (
//     <div className="App">
//       {/* Nav */}
//       {/* Banner */}
//       <Banner />
//       <Row
//         title="NETFLIX ORIGINALS"
//         fetchUrl={requests.fetchNetflixOriginals}
//         isLargeRow
//       />
//       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
//       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
//       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
//       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
//       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Banner from "./components/Banner";
import Row from "./components/Row";

import "./App.css";

import requests from "./adapters/requests";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className="row__movies">
        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
