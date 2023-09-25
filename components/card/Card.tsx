import React from "react";
import { generateClassName } from "../../utils/generateClassName";
import styles from "../../styles/Navbar.module.css";
import { useSession } from "next-auth/react";
import { useAppSelector } from "../../app/hooks";

const Card = () => {
  const {loggedUser}= useAppSelector(store => store.auth)
  console.log(loggedUser,"loggedUser");
  
  return (
    <div className={generateClassName(styles, "commonCol  jst-sp-bet a-center")}>
      <div className={generateClassName(styles, "user-card img-border")}>
        <img
          className={generateClassName(styles, "user-image")}
          src={loggedUser?.image}
          alt="User Image"
        />
        <div className={generateClassName(styles, "user-name")}>{loggedUser?.name}</div>
        <div className={generateClassName(styles, "user-number")}>
          Email:{loggedUser?.email}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
