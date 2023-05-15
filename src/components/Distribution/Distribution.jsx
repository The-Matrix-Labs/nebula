import React from 'react';
import styles from './Distribution.module.css';
import pie2 from '../../assets/images/pie2.png'

const Distribution = () => (
    <div className={styles.container}>
        <div className={styles.row}>
        <div className={styles.left}>
    <img src={pie2} alt="" /></div>
        <div className={styles.right}>
        <p className={styles.label}><span className={styles.labelTitle}>Distribution</span>
        {'\n'}{'\n'}<span className={styles.orange}/>27% NSH Liquidity
        {'\n'}{'\n'}<span className={styles.yellow}/>15% NUSD Liquidity
        {'\n'}{'\n'}<span className={styles.red}/>18% Marketing
        {'\n'}{'\n'}<span className={styles.pink}/> 15% Collateral
        {'\n'}{'\n'}<span className={styles.blue}/> 5% Sale Platform Fees 
        {'\n'}{'\n'}<span className={styles.purple}/>20% Stability reserve
        </p>
</div>

        </div>
    </div>
  );
  
  export default Distribution;