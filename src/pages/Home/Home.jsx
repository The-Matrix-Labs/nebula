import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import coin from '../../assets/images/coin.png';

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
    </>
  );
};

export default Home;
