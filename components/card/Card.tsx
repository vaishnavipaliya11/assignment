import React from "react";
import { generateClassName } from "../../utils/generateClassName";
import styles from "../../styles/Navbar.module.css";

const Card = () => {
  return (
    <div className={generateClassName(styles, "commonCol  jst-sp-bet a-center")}>
      <div className={generateClassName(styles, "user-card img-border")}>
        <img
          className={generateClassName(styles, "user-image")}
          src="https://avatars.dicebear.com/api/avataaars/qwerasxqergdsacssfghvsd.svg"
          alt="User Image"
        />
        <div className={generateClassName(styles, "user-name")}>John Doe</div>
        <div className={generateClassName(styles, "user-number")}>
          Phone: +1 (555) 123-4567
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
