import styles from "./LeftMenuBar.module.css";
import MyList from "../../Atom/MyList/MyList";
import UserCard from "../../Atom/UserCard/UserCard";
import { FaHome } from "react-icons/fa";
import { connect } from "react-redux";
import {
  setCurrentTab,
  setMovieData,
  updateMovieArr,
} from "../../CommonService/Reducer/Movies";
import { useParams } from "react-router-dom";

function LeftMenuBar({ movieArr, setMovieData, setCurrentTab }) {
  const onClickWatchList = () => {
    setCurrentTab("WATCH_LIST");
    setMovieData([...movieArr]);
  };

  const { eid } = useParams();

  return (
    <div className={styles["left-menu-bar"]}>
      <div>
        <h1 className={styles["left-menu-bar__heading"]}>Watchlist</h1>
        <button
          onClick={() => {
            setCurrentTab("HOME");
          }}
          className={styles["menu-button__home"]}
        >
          <FaHome /> Home
        </button>
        <MyList onClickWatchList={onClickWatchList} />
      </div>
      <UserCard />
    </div>
  );
}
const mapsStateToProps = (state) => ({
  movieArr: state.data.movieArr,
});

const mapsDispatchToProps = (dispatch) => ({
  setCurrentTab: (data) => dispatch(setCurrentTab(data)),
  setMovieData: (data) => dispatch(setMovieData(data)),
  updateMovieArr: (data) => dispatch(updateMovieArr(data)),
});

const connector = connect(mapsStateToProps, mapsDispatchToProps);

export default connector(LeftMenuBar);
