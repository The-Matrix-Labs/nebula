import React, { useEffect, useState } from 'react';
import styles from './NSH.module.css';
import pie1 from '../../assets/images/pie1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NSH = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <p data-aos="fade-up" className={styles.title}>
        NSH -10 Billion
      </p>
      <div className={styles.row}>
        <div data-aos="fade-right" className={styles.left}>
          <p className={styles.labelTitle}>
            1.5B Preminted (15%)
            {'\n'}
            {'\n'}
            <span className={styles.orange} />
            &nbsp;5% Private Sale (375M) Set Price
            {'\n'}
            {'\n'}
            <span className={styles.yellow} />
            &nbsp;32% Public Sale(480M) Fair Launch
            {'\n'}
            {'\n'}
            <span className={styles.red} />
            &nbsp;20% Protocl Stability(300M)*
            {'\n'}
            {'\n'}
            <span className={styles.pink} /> &nbsp;12% Dex/Cex/Marketing (180M)
            {'\n'}
            {'\n'}
            <span className={styles.purple} />
            &nbsp;11% Liquidity (165M)
          </p>
          {windowWidth < 700 ? (
            <div data-aos="fade-left" className={styles.right}>
              <img className={styles.image} src={pie1} alt="" />
            </div>
          ) : null}
          <p className={styles.labelTitle}>
            1.6% Team (160M, zero up front, paid per block) {'\n'} 0.8% Marketing(80M, zero up front, paid per block) {'\n'} 8.5B Minted by Farming/Dex/Rebates
            {'\n'}NUSD-TBD by Minting
          </p>
        </div>
        {windowWidth > 700 ? (
          <div data-aos="fade-left" className={styles.right}>
            <img className={styles.image} src={pie1} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NSH;
