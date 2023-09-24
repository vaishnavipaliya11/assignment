import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styles from "../../styles/Navbar.module.css";

export default function Dashboard() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      Dashboard
    </div>
  );
}
