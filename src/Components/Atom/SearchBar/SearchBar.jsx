import React from "react";
import styles from "./SearchBar.module.css";
function SearchBar({ onChange }) {
  return (
    <div className={styles["search-bar"]}>
      <input
        onChange={onChange}
        className={styles["search-bar__input"]}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
