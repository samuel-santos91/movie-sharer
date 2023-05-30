import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const MovieDetail = (props) => {
  const [savedMovie, setSavedMovie] = useState([]);

  useEffect(() => {
    const savedClickedMovie = JSON.parse(localStorage.getItem("filteredMovie"));
    setSavedMovie(savedClickedMovie);
  }, []);

  return (
    <div className="flex justify-center">
      <NavBar />
      <div className="p-6 rounded-md relative top-40 bg-blue-400 bg-opacity-50 w-[38rem]">
        <p className="font-limelight text-4xl">{savedMovie[0]?.title}</p>
        <p>
          Watch it on{" "}
          <span className="text-red-500 font-bold">
            {savedMovie[0]?.whereToWatch}
          </span>{" "}
        </p>
        <p className="mt-4">{savedMovie[0]?.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
