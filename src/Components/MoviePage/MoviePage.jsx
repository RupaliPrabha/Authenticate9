import LeftMenuBar from "../Layout/LeftMenuBar/LeftMenuBar";
import MoviesContainer from "../Layout/MoviesContainer/MoviesContainer";
import styles from "./MoviePage.module.css";
import { setMovieData } from "../CommonService/Reducer/Movies";
import { connect } from "react-redux";
function MoviePage() {
  return (
    <div className={styles["movies-page"]}>
      <LeftMenuBar />
      <MoviesContainer />
    </div>
  );
}
const mapsStateToProps = (state) => ({
  movieData: state.data.movieData,
});

const mapsDispatchToProps = (dispatch) => ({
  setMovieData: (data) => dispatch(setMovieData(data)),
});

const connector = connect(mapsStateToProps, mapsDispatchToProps);
export default connector(MoviePage);
