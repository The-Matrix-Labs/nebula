import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/footer-logo.png";
import mail from "../../assets/images/media/mail.png";
import twitter from "../../assets/images/media/twitter.png";
import moonvector from "../../assets/images/media/moonvector.png";
import medium from "../../assets/images/media/meta.png";
import telegram from "../../assets/images/media/telegram.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineMedium } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { SiGitbook } from 'react-icons/si';


const Footer = ({ home, about, token, road, team, partners }) => {
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer  className={styles.footer}>
      <hr className={styles.line_footer}></hr>
      <ul >
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
            style={{ listStyleType: "none", fontSize:"20px", lineHeight:'36px' }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scrollToSection(about.current);
            }}
            style={{ listStyleType: "none", fontSize:"20px", lineHeight:'36px' }}
          >
            About Us
          </li>
          <li
            onClick={() => {
              scrollToSection(token.current);
            }}
            style={{ listStyleType: "none", fontSize:"20px", lineHeight:'36px' }}
          >
            Tokenomics
          </li>
        </ul>
        <ul className={styles.col}>
          <li
            onClick={() => {
              scrollToSection(road.current);
            }}
            style={{ listStyleType: "none", fontSize:"20px", lineHeight:'36px' }}
          >
            Roadmaps
          </li>
          <li
            style={{ listStyleType: "none", fontSize:"20px", lineHeight:'36px' }}
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
            style={{ listStyleType: "none", fontSize:"20px", lineHeight:'36px' }}
          >
            Partners
          </li>
        </ul>
      </div>
      <ul  className={styles.social}>
        <li >
          <AiOutlineMedium
            className={styles.icon_social}

            onClick={(e) => {
              e.preventDefault();
              window.open(
                " https://medium.com/@team_46479",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            alt="medium"
          />
          <FaTelegramPlane
           className={styles.icon_social}

            onClick={(e) => {
              e.preventDefault();
              window.open(
                " https://t.me/NebulaFinance",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            alt="telegram"
          />
          <AiOutlineTwitter
            className={styles.icon_social}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                " https://twitter.com/nebulafinance__?s=21",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            alt="twitter"
          />
          <AiOutlineMail
                      className={styles.icon_social}

            onClick={(e) => {
              e.preventDefault();
              window.location.href = "mailto:Team@nebulafinance.app ";
            }}
            alt="mail"
          />
          <SiGitbook
            className={styles.icon_social}

            onClick={(e) => {
              e.preventDefault();
              window.open(
                " https://nebulafinance.gitbook.io",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            alt="moonvector"
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
