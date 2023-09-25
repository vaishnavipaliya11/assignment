import React from "react";
import styles from "../../styles/Navbar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { generateClassName } from "../../utils/generateClassName";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div
      className={generateClassName(
        styles,
        "commonFlex jst-sp-bet navContainer"
      )}
    >
      Navbar
      <button
        onClick={() => {
          signOut();
          router.push("/login")
        }}
      >
        <AiOutlineLogout />
      </button>
    </div>
  );
};

export default Navbar;
