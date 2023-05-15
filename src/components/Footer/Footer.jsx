import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
import mail from "../../assets/images/media/mail.png";
import twitter from "../../assets/images/media/twitter.png";
import moonvector from "../../assets/images/media/moonvector.png";
import medium from "../../assets/images/media/meta.png";
import telegram from "../../assets/images/media/telegram.png";

const Footer = ({ home, about, token, road, team, partners }) => {
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <img
            onClick={() => {
              scrollToSection(home.current);
            }}
            src={logo}
            alt="logo"
            className={styles.logo}
          />
        </li>
      </ul>
      <div className={styles.sections}>
        <ul className={styles.col}>
          <li
            onClick={() => {
              scrollToSection(home.current);
            }}
            style={{ listStyleType: "none" }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection(about.current);
            }}
            style={{ listStyleType: "none" }}
          >
            About Us
          </li>
          <li
            onClick={() => {
              scrollToSection(token.current);
            }}
            style={{ listStyleType: "none" }}
          >
            Tokenomics
          </li>
        </ul>
        <ul className={styles.col}>
          <li
            onClick={() => {
              scrollToSection(road.current);
            }}
            style={{ listStyleType: "none" }}
          >
            Roadmaps
          </li>
          <li
            style={{ listStyleType: "none" }}
            onClick={() => {
              scrollToSection(team.current);
            }}
          >
            Team
          </li>
          <li
            onClick={() => {
              scrollToSection(partners.current);
            }}
            style={{ listStyleType: "none" }}
          >
            Partners
          </li>
        </ul>
      </div>
      <ul className={styles.social}>
        <li>
          <img
            onClick={(e) => {
              e.preventDefault();
              window.open(
                " https://medium.com/@team_46479",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            src={medium}
            alt="medium"
          />
          <img
            onClick={(e) => {
              e.preventDefault();
              window.open(
                " https://t.me/NebulaFinance",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            src={telegram}
            alt="telegram"
          />
          <img
            onClick={(e) => {
              e.preventDefault();
              window.open(
                " https://twitter.com/nebulafinance__?s=21",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            src={twitter}
            alt="twitter"
          />
          <img
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:Team@nebulafinance.app ";
            }}
            src={mail}
            alt="mail"
          />
          <img
            onClick={(e) => {
              e.preventDefault();
              window.open(
                " https://nebulafinance.gitbook.io",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            src={moonvector}
            alt="moonvector"
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
