import React from "react";
import styles from "./MovieCard.module.css";
import dataServices from "../../CommonService/data.service";
import { useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";

function MovieCard({
  movie,
  movieArr,
  updateMovieArr,
  savedMovie,
  setMovieData,
  currentTab,
}) {
  const { eid } = useParams();
  const savedMovieArr =
    (movieArr.length && movieArr.map((movie) => movie.imdbID)) || [];
  const isMovieAlreadyAdd = savedMovieArr.includes(movie.imdbID);

  const handleAddMovie = () => {
    let savedMovieObj = {};
    if (savedMovie) {
      savedMovieObj = {
        ...savedMovie,
      };
    }
    const updateMovieListById = movieArr.length
      ? [...movieArr, movie]
      : [movie];

    savedMovieObj = {
      ...savedMovie,
      [`${eid}`]: [...updateMovieListById],
    };
    dataServices.setLocalStorage("saved-movie", savedMovieObj);
    updateMovieArr([...updateMovieListById]);
  };
  const handleDeleteMovie = () => {
    const filterMovie = movieArr.filter((mov) => mov.imdbID !== movie.imdbID);
    updateMovieArr([...filterMovie]);
    if (currentTab === "WATCH_LIST") {
      setMovieData([...filterMovie]);
    }
    const savedMovieObj = {
      ...savedMovie,
      [`${eid}`]: [...filterMovie],
    };
    dataServices.setLocalStorage("saved-movie", savedMovieObj);
  };

  return (
    <div className={styles["movie-card"]}>
      <img
        className={styles["movie-card__image"]}
        src={movie.Poster}
        alt={movie.Title}
      />
      <p className={styles["movie-card__title"]}>{movie.Title}</p>
      <div className={styles["movie-card__footer"]}>
        <p className={styles["movie-card__year"]}>{movie.Year}</p>
        <button
          className={
            styles[
              !isMovieAlreadyAdd ? "movie-card__delete" : "movie-card__add"
            ]
          }
          onClick={!isMovieAlreadyAdd ? handleAddMovie : handleDeleteMovie}
        >
          {isMovieAlreadyAdd ? <AiFillDelete /> : <IoMdAdd />}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
