import React from "react";
import { loginForm } from "../../constants";
import { generateClassName } from "../../utils/generateClassName";
import styles from "../../styles/Navbar.module.css";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div
      className={generateClassName(
        styles,
        "login-container commonFlex a-center j-center "
      )}
    >
      <div className={generateClassName(styles, " commonCol gap-xs box-shadow-one  pd-med  border-radius-min")}>
        {loginForm.map((item) => {
          return (
            <label
              key={item.labelText}
              className={generateClassName(styles, " commonCol  j-center gap-xxs")}
            >
              {item.labelText}
              <input type={item.type} />
            </label>
          );
        })}
        <button onClick={() => signIn("google")}
         className={generateClassName(styles, " btn-primary")}>Login</button>
      </div>
    </div>
  );
};

export default Login;
