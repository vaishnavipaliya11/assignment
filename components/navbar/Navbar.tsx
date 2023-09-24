import React from "react";
import styles from "../../styles/Navbar.module.css";
import {AiOutlineLogout} from "react-icons/ai"
import { generateClassName } from "../../utils/generateClassName";
const Navbar = () => {

  return (
    <div className={generateClassName(styles, "commonFlex jst-sp-bet navContainer")}>
      Navbar
      <button>
        <AiOutlineLogout />
      </button>
    </div>
  );
};

export default Navbar;
