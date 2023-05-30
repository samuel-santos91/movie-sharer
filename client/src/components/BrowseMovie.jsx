import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";

import NavBar from "./NavBar";

const BrowseMovie = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/list")
      .then((response) => {
        return response.json();
      })
      .then((data) => setMovieList(data))
      .catch((error) => console.error(error));
  }, []);

  const clickHandler = (e) => {
    const filter = movieList.filter((movie) => movie.id === e.target.id);
    localStorage.setItem("filteredMovie", JSON.stringify(filter));
  };

  const ratingIcon = (rating) => {
    const icons = [];
    for (let i = 0; i < rating; i++) {
      icons.push(<FcRating key={i} />);
    }
    return icons;
  };

  return (
    <div>
      <NavBar />
      <div className="relative top-10">
        <p className="m-5 font-limelight text-4xl text-white">
          MOVIES TO WATCH
        </p>
        <ul className="relative top-10 flex items-center flex-col">
          {movieList.map((movie) => (
            <li
              className="flex flex-col items-center m-3 pt-5 bg-blue-400 w-60 sm:w-96 rounded-md border-solid border-black border-2"
              key={movie.id}
            >
              <p className="font-limelight">{movie.title}</p>

              <div className="flex">
                {ratingIcon(Number(movie.rate))}
              </div>

              <Link to={`/movie/${movie.id}`}>
                <button className="btn" id={movie.id} onClick={clickHandler}>
                  Details
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BrowseMovie;
