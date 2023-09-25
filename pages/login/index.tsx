import React from "react";
import { useEffect } from "react";
import { loginForm } from "../../constants";
import { generateClassName } from "../../utils/generateClassName";
import styles from "../../styles/Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useAppDispatch } from "../../app/hooks";
import { setAuth } from "../../features/auth/authSlice";
import { useRouter } from "next/router";
const Login = () => {
  const { data } = useSession();
  const dispatch = useAppDispatch();
  const router = useRouter();
  console.log(data, "data");

  useEffect(() => {
    dispatch(setAuth(data?.user));

    if(data?.user){
      router.push("/dashboard")
    }
  }, [data]);

  return (
    <div
      className={generateClassName(
        styles,
        "login-container commonFlex a-center j-center "
      )}
    >
      <div
        className={generateClassName(
          styles,
          " commonCol gap-xs box-shadow-one  pd-med  border-radius-min"
        )}
      >
        {loginForm.map((item) => {
          return (
            <label
              key={item.labelText}
              className={generateClassName(
                styles,
                " commonCol  j-center gap-xxs"
              )}
            >
              {item.labelText}
              <input type={item.type} />
            </label>
          );
        })}
        <button
          onClick={() => {
            signIn("google");
            // router.push("/dashboard");
          }}
          className={generateClassName(styles, "btn-primary")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
