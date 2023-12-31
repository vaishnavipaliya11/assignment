import React from "react";
import { crousalImages } from "../../constants";
import { useEffect, useState } from "react";
import { generateClassName } from "../../utils/generateClassName";
import styles from "../../styles/Navbar.module.css";
import { useAppSelector } from "../../app/hooks";

const Crousal = () => {
  const {crousalImg}= useAppSelector(store => store.dashboard)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index, looping back to 0 when reaching the end
      setCurrentIndex((currentIndex + 1) % crousalImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className={generateClassName(styles, "carousel img-max-width")}>
      <img
       src={crousalImg[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
    </div>
  );
};

export default Crousal;
