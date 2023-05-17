import React, { useEffect } from "react";
import styles from "./Distribution.module.css";
import pie2 from "../../assets/images/pie2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Distribution = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
  <div data-aos="fade-up"  className={styles.container}>
    <div className={styles.row}>
      <div data-aos="fade-right" className={styles.left}>
        <img className={styles.image} src={pie2} alt="" />
      </div>
      <div data-aos="fade-left" className={styles.right}>
        <p className={styles.label}>
          <span className={styles.labelTitle}>Distribution</span>
          {"\n"}
          {"\n"}
          <span className={styles.orange} />
          27% NSH Liquidity
          {"\n"}
          {"\n"}
          <span className={styles.yellow} />
          15% NUSD Liquidity
          {"\n"}
          {"\n"}
          <span className={styles.red} />
          18% Marketing
          {"\n"}
          {"\n"}
          <span className={styles.pink} /> 15% Collateral
          {"\n"}
          {"\n"}
          <span className={styles.blue} /> 5% Sale Platform Fees
          {"\n"}
          {"\n"}
          <span className={styles.purple} />
          20% Stability reserve
        </p>
      </div>
    </div>
  </div>
)
  };

export default Distribution;
