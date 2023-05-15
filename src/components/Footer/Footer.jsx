import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
import mail from "../../assets/images/media/mail.png";
import twitter from "../../assets/images/media/twitter.png";
import moonvector from "../../assets/images/media/moonvector.png";
import medium from "../../assets/images/media/meta.png";
import telegram from "../../assets/images/media/telegram.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <img src={logo} alt="logo" className={styles.logo} />
        </li>
      </ul>
      <div className={styles.sections}>
      <ul className={styles.col}>
        <li style={{ listStyleType: "none" }}>
          Home
        </li>
        <li style={{ listStyleType: "none" }}>
          About Us
        </li>
        <li style={{ listStyleType: "none" }}>
          Tokenomics
        </li>
      </ul>
      <ul className={styles.col}>
        <li style={{ listStyleType: "none" }}>
          Roadmaps
        </li>
        <li style={{ listStyleType: "none" }}>
          Team
        </li>
        <li style={{ listStyleType: "none" }}>
          Partners
        </li>
      </ul>
      </div>
      <ul className={styles.social}>
        <li>
          <img src={medium} alt="medium" />
          <img src={telegram} alt="telegram" />
          <img src={twitter} alt="twitter" />
          <img src={mail} alt="mail" />
          <img src={moonvector} alt="moonvector" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
