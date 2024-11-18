import React from "react";
import LoginCard from "../Atom/LoginCard/LoginCard";
import { logInWelcomeNote } from "../CommonService/Static";
import styles from "./Login.module.css";
function Login() {
  return (
    <div className={styles["login-wrapper"]}>
      <ul className={styles["login__list"]}>
        {logInWelcomeNote.map(({ heading, description }) => (
          <li>
            <h1>{heading}</h1>
            <p>{description}</p>
          </li>
        ))}
      </ul>
      <LoginCard />
    </div>
  );
}

export default Login;
