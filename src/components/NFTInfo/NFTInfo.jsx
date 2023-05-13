import React from "react";
import styles from "./NFTInfo.module.css";

const NFTInfo = () => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.left}>
        <p className={styles.title}>Remaining NSH- 8.5 Billion</p>
        <ul>
          <li> Distributed Per Block as Farming rewards over 2-3 Years</li>
          <li>Minted as Rebates</li>
          <li>Minted as Bond Redemption</li>
        </ul>
      </div>
      <div className={styles.right}>
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

export default NFTInfo;
