import React, { useEffect } from "react";
import styles from "./NFTInfo.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NFTInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.row}>
        <div data-aos="fade-right" className={styles.left}>
          <p className={styles.title}>Remaining NSH- 8.5 Billion</p>
          <ul>
            <li> Distributed Per Block as Farming rewards over 2-3 Years</li>
            <li>Minted as Rebates</li>
            <li>Minted as Bond Redemption</li>
          </ul>
        </div>
        <div data-aos="fade-left" className={styles.right}>
          <p className={styles.title}>NFTS</p>
          <ul>
            <li>50 Nebuloids at 1 Eth - added to NUSD Liquidity</li>
          </ul>
          <p className={styles.title}>NUSD Minting</p>
          <ul>
            <li>Split Collateral and NUSD Liquidity</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NFTInfo;
