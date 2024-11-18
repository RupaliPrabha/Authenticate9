import React from "react";
import styles from "./MoviesContainer.module.css";
import SearchBar from "../../Atom/SearchBar/SearchBar";
import MovieCard from "../../Atom/MovieCard/MovieCard";
import { connect } from "react-redux";
import {
  setMovieData,
  updateMovieArr,
} from "../../CommonService/Reducer/Movies";
import { useEffect } from "react";
import { defaultQuery } from "../../CommonService/Static";
import dataServices from "../../CommonService/data.service";
import { debounce } from "lodash";
import { useParams } from "react-router-dom";

function MoviesContainer({
  setMovieData,
  movieData,
  currentTab,
  updateMovieArr,
  movieArr,
}) {
  const { eid } = useParams();
  const savedMovie = dataServices.getLocalStorage("saved-movie");
  const currentMovieList =
    savedMovie && savedMovie[`${eid}`] ? savedMovie[`${eid}`] : [];

  const { name, page } = defaultQuery;
  const fetchMovieData = async (query = name, pageNo) => {
    try {
      const response = await dataServices.getMovie(query, pageNo);
      const data = await response.json();
      setMovieData([...data.Search]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentTab === "HOME") {
      fetchMovieData(name, page);
    } else {
      setMovieData([...movieArr]);
    }
    updateMovieArr([...currentMovieList]);
  }, [currentTab]);

  const fetchMovieDataDebounced = debounce((query, page) => {
    fetchMovieData(query, page);
  }, 500);

  const onQueryChange = (event) => {
    const value = event?.target?.value || name;
    fetchMovieDataDebounced(value, page);
  };

  return (
    <div className={styles["movies-container"]}>
      <div className="movies-container__header">
        <h2 className="movies-container__heading">Explore Movies</h2>
        <p className="movies-container__description">
          Discover a world of cinema! Click on a movie card to add it to your
          Watchlist and keep track of your favorites.
        </p>
      </div>
      {currentTab === "HOME" && <SearchBar onChange={onQueryChange} />}
      <div className={styles["movies-container__card-wrapper"]}>
        {movieData?.map((movie) => (
          <MovieCard
            currentTab={currentTab}
            setMovieData={setMovieData}
            movieArr={movieArr}
            updateMovieArr={updateMovieArr}
            savedMovie={savedMovie}
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

const mapsStateToProps = (state) => ({
  movieData: state.data.movieData,
  currentTab: state.data.currentTab,
  movieArr: state.data.movieArr,
});

const mapsDispatchToProps = (dispatch) => ({
  setMovieData: (data) => dispatch(setMovieData(data)),
  updateMovieArr: (data) => dispatch(updateMovieArr(data)),
});

const connector = connect(mapsStateToProps, mapsDispatchToProps);

export default connector(MoviesContainer);
