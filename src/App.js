import React from "react";
import './app.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import Latest from "./components/Latest";
import TvShows from "./components/TvShows";
import TvShowsTop from "./components/TvShowsTop";
import Search1 from "./components/Search";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          < Route exact path="/" element={
            <>
              <h2>Popular movies</h2>
              <div id="container1"> <Popular /></div>
              <h2>Popular TV shows</h2>
              <div id="container1"> <TvShows /></div>
              <h2>Top rated movies</h2>
              <div id="container1"> <TopRated /></div>
              <h2>Top rated Tv shows</h2>
              <div id="container1"> <TvShowsTop /></div>
              <h2>Latest movies</h2>
              <div id="container1"> <Latest /></div>
              <h2>Upcoming movies</h2>
              <div id="container1"> <Upcoming /></div>
            </>
          } />
          < Route exact path="/search" element={ <><Search1 /> </>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
