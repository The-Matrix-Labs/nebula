import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import coin from '../../assets/images/coin.png';
import line from '../../assets/images/line.png';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className={styles.home}>
        <div className={styles.first}>
          <p>
            Nebula Finance{"\n"}
            <span className={styles.grad}>Hybrid Solutions:{"\n"}</span>
            <span className={styles.second}>
              Nebula Redefines {"\n"} Stablecoins{"\n"}
            </span>
            <span className={styles.third}>
              Revolutionizing Stablecoins: Experience Adaptive {"\n"} Stability
              with Nebula Finance's Hybrid Solution
            </span>
          </p>
        </div>
        <div className={styles.button}>
          <button className={styles.btn1}>Private Sale</button>
          <button className={styles.btn2}>Public Sale</button>
        </div>
      </section>
      <section className={styles.coins}>
        <img src={coin} alt="" />
      </section>
      <section className={styles.about}>
        <div className={styles.left}>
            <p className={styles.aboutHead}><img className={styles.aboutLine} src={line}/>About Us</p>
            <p className={styles.aboutInfo}>Introducing Nebula Finance, a new hybrid stablecoin solution blending the advantages of both algorithmic and collateralized stablecoin models. Utilizing a two-token system - Nebula Cash (NUSD) as the stablecoin, and Nebula Shares (NSH) the Share token - our protocol introduces dynamic fee distribution and tax allocations that respond to market conditions, ensuring stability and enticing user engagement.</p>
            <button className={styles.readMore}>Read More</button>
        </div>
        <div className={styles.right}>
            <p className={styles.howHead}>How we work<img  src={line}/></p>
            <p className={styles.aboutInfo}>We are an algo-based stable coin protocol that utilizes a 2 token system, with a road to full collateralization built in. Comprised of a complex system of price phases, stabilization methods, multiple taxes and incentives, it's a massive step forward in the quest for a viable algo based stable coin.</p>
            <p className={styles.aboutInfo}>We've seen two token systems with bonding that work for a while, only to fall apart when greed kicks in.</p>
            <div className={styles.howRow}>
            <button className={styles.howbtn2}>Download PDF</button>
            <button className={styles.howreadMore}>Read More</button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;
