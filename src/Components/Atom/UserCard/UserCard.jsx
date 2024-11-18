import React from "react";
import styles from "./UserCard.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import dataServices from "../../CommonService/data.service";

function UserCard() {
  const { eid } = useParams();
  const navigate = useNavigate();

  return (
    <div className={styles["user-card"]}>
      <div className={styles["user-card__user-wrapper"]}>
        <FaRegUserCircle />
        <h4 className={styles["user-card__heading"]}>{eid.split("@")[0]}</h4>
      </div>
      <button
        onClick={() => {
          dataServices.clearSessionStorage("user-email");
          navigate("/login");
        }}
        className={styles["user-card__logOut-btn"]}
      >
        <MdLogout />
      </button>
    </div>
  );
}

export default UserCard;
