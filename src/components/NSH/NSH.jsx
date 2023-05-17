import React , { useEffect }  from "react";
import styles from "./NSH.module.css";
import pie1 from "../../assets/images/pie1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NSH  = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return(
  <div className={styles.container}>
    <p data-aos="fade-up" className={styles.title}>NSH -10 Billion</p>
    <div className={styles.row}>
      <div data-aos="fade-right" className={styles.left}>
        <p className={styles.labelTitle}>
          1.5B Preminted (15%)
          {"\n"}
          {"\n"}
          <span className={styles.orange} />
          5% Private Sale (375M) Set Price
          {"\n"}
          {"\n"}
          <span className={styles.yellow} />
          32% Public Sale(480M) Fair Launch
          {"\n"}
          {"\n"}
          <span className={styles.red} />
          20% Protocl Stability(300M)*
          {"\n"}
          {"\n"}
          <span className={styles.pink} /> 12% Dex/Cex/Marketing (180M)
          {"\n"}
          {"\n"}
          <span className={styles.purple} />
          11% Liquidity (165M)
        </p>
        <p className={styles.labelTitle}>
          1.6% Team (160M, zero up front, paid per block) {'\n'} 0.8% Marketing(80M,
          zero up front, paid per block) {'\n'} 8.5B Minted by Farming/Dex/Rebates
          {'\n'}NUSD-TBD by Minting
        </p>
      </div>
      <div data-aos="fade-left" className={styles.right}>
        <img className={styles.image} src={pie1} alt="" />
      </div>
    </div>
  </div>
  )
          };

export default NSH;
