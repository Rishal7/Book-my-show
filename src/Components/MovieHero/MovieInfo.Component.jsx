import React from "react";

const MovieInfo = ({ movie }) => {
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <div className="flex flex-col lg:gap-8">
        <h1 className="text-white lg:text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="flex flex-col gap-5 text-white">
          <h4>4K ratings</h4>
          <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
          <h4>
            {movie.runtime} min • {genres}
          </h4>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button className="bg-red-500 w-48 py-3 text-white font-semibold rounded-lg">
            Rent ₹149
          </button>
          <button className="bg-red-500 w-48 py-3 text-white font-semibold rounded-lg">
            Buy ₹599
          </button>
        </div>
      </div>
    </>
  );
};
export default MovieInfo;
