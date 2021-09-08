import React from "react";
import MovieNavbar from "../Components/Navbar/MovieNavbar.Component";

const MovieLayout = (props) => {
  return (
    <div>
      <MovieNavbar />
      {props.children}
      <div>Footer</div>
    </div>
  );
};

export default MovieLayout;
