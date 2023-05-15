import React from "react";
import styles from "./Tab.module.css";

const Tab = ({ label, handleClick }) => (
  <button className={styles.btn} onClick={handleClick}>
    {label}
  </button>
);

export default Tab;
