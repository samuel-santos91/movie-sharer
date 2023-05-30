import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";

const AddMovie = () => {
  const [movieData, setMovieData] = useState({});
  const clearFormInput = useRef(null);
  const navigate = useNavigate();

  const formDataHandler = (e) => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(movieData);

  const submitDataHandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/add-movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    clearFormInput.current.reset();
    navigate("/browse");
  };

  return (
    <div>
      <NavBar />
      <form
        onSubmit={submitDataHandler}
        ref={clearFormInput}
        className="m-auto p-5 sm:w-[30rem] rounded-md bg-blue-400 relative top-72 transform -translate-y-1/2 border-solid border-black border-2"
      >
        <section className="flex flex-col mb-6">
          <label className="font-limelight" htmlFor="title">
            Movie Title
          </label>
          <input
            className="input"
            onChange={formDataHandler}
            type="text"
            name="title"
            id="title"
            required
          />
        </section>
        <section className="flex flex-col mb-6">
          <label className="font-limelight" htmlFor="whereToWatch">
            Where did you watch it?
          </label>
          <input
            className="input"
            onChange={formDataHandler}
            type="text"
            name="whereToWatch"
            id="whereToWatch"
            placeholder="   e.g. NetFlix"
            required
          />
        </section>

        <section className="mb-6 font-limelight">
          <p>How would you rate this movie?</p>
          <ul className="flex justify-center">
            <li className="mr-3">
              <label className="mr-1" htmlFor="one">
                1
              </label>
              <input
                onChange={formDataHandler}
                type="radio"
                name="rate"
                id="one"
                value="1"
                required
              />
            </li>
            <li className="mr-3">
              <label className="mr-1" htmlFor="two">
                2
              </label>
              <input
                onChange={formDataHandler}
                type="radio"
                name="rate"
                id="two"
                value="2"
                required
              />
            </li>
            <li className="mr-3">
              <label className="mr-1" htmlFor="three">
                3
              </label>
              <input
                onChange={formDataHandler}
                type="radio"
                name="rate"
                id="three"
                value="3"
                required
              />
            </li>
            <li className="mr-3">
              <label className="mr-1" htmlFor="four">
                4
              </label>
              <input
                onChange={formDataHandler}
                type="radio"
                name="rate"
                id="four"
                value="4"
                required
              />
            </li>
            <li>
              <label className="mr-1" htmlFor="five">
                5
              </label>
              <input
                onChange={formDataHandler}
                type="radio"
                name="rate"
                id="five"
                value="5"
                required
              />
            </li>
          </ul>
        </section>

        <section className="flex flex-col mb-4">
          <label className="font-limelight" htmlFor="description">
            Tell us about the movie
          </label>
          <textarea
            className="rounded-lg"
            onChange={formDataHandler}
            name="description"
            id="description"
            type="text"
            required
          />
        </section>
        <button className="btn">Share Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
