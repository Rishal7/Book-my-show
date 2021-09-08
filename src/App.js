import React from "react";
import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./pages/Home.Page";
import Plays from "./pages/Plays.Page";
import MoviePage from "./pages/Movie.Page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <DefaultHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
