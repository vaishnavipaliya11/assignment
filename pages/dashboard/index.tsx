import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "../../styles/Navbar.module.css";
import Card from "../../components/card/Card";
import Crousal from "../../components/crousal/Crousal";
import { generateClassName } from "../../utils/generateClassName";
import ChartComponent from "../../components/chart/ChartComponent";
import { chartData } from "../../constants";
import { getCrouselImg } from "../../utils/getCrouselImg";
import { extractImageUrls } from "../../utils/extractData";
import { useDispatch } from "react-redux";
import { setCarousalImg } from "../../features/dashboard/dashboardSlice";

export default function Dashboard({ carousels }: any) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      const data = await getCrouselImg();
      const crousalImgData = extractImageUrls(data);
      dispatch(setCarousalImg(crousalImgData));
    })();
  }, []);

  console.log(carousels, "carousels");

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={generateClassName(styles, "dashboard-container")}>
        <Card />
        <div className={generateClassName(styles, "container a-center")}>
          <Crousal />
          <div
            className={generateClassName(
              styles,
              "chart-container img-max-width"
            )}
          >
            <ChartComponent data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
