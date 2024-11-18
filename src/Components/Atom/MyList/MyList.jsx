import React from "react";
import styles from "./MyList.module.css";
function MyList({ onClickWatchList }) {
  return (
    <div className={styles["my-list"]}>
      <h3 className={styles["my-list__heading"]}>My List</h3>
      <ul className={styles["my-list__ul"]}>
        <li onClick={onClickWatchList} className={styles["my-list__ul__li"]}>
          My Watchlist
        </li>
      </ul>
    </div>
  );
}

export default MyList;
