import React, { useState } from "react";
import styles from "./LoginCard.module.css";
import { useNavigate } from "react-router-dom";
import dataServices from "../../CommonService/data.service";
function LoginCard() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    dataServices.setSessionStorage("user-email", email);
    navigate(`/movies/${email}`);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className={styles["login-card__wrapper"]}>
      <form onSubmit={handleSubmit} className={styles["login-card__form"]}>
        <div className={styles["form__email-wrapper"]}>
          <label className={styles["email__label"]} htmlFor="user-email">
            Enter your Email
          </label>
          <input
            onChange={onEmailChange}
            required
            className={styles["email__input"]}
            id="user-email"
            type="email"
            placeholder="Enter here..."
          />
        </div>
        <button
          style={{ opacity: !email ? "0.5" : "1" }}
          disabled={!email}
          className={styles["form__submit-btn"]}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginCard;
