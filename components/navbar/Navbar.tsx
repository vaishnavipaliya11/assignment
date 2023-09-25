import React from "react";
import styles from "../../styles/Navbar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { generateClassName } from "../../utils/generateClassName";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../app/hooks";
import { setLoggedOut } from "../../features/auth/authSlice";
const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={generateClassName(
        styles,
        "commonFlex jst-sp-bet navContainer"
      )}
    >
      
      {/* <button
        onClick={() => {
          // router.push("/login");
          dispatch(setLoggedOut());
        }}
      >
        <AiOutlineLogout />
      </button> */}
    </div>
  );
};

export default Navbar;
