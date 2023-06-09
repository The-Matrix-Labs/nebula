import React, { useRef, useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import hamburger from '../../assets/images/hamburger.png';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import Tab from '../Tab/Tab';

const Navbar = ({ home, about, token, road, team, partners }) => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  const navOptions = (
    <>
      <li
        onClick={() => {
          scrollToSection(home.current);
        }}
      >
        Home
      </li>
      <li
        onClick={() => {
          scrollToSection(about.current);
        }}
      >
        About Us
      </li>
      <li
        onClick={() => {
          scrollToSection(token.current);
        }}
      >
        Tokenomics
      </li>
      <li
        onClick={() => {
          scrollToSection(road.current);
        }}
      >
        Roadmap
      </li>
      <li
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
      >
        Partners
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'mailto:Team@nebulafinance.app ';
        }}
      >
        <Tab label={'Contact Us'} />
      </li>
    </>
  );

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
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
          <ul>{navOptions}</ul>

          <ul id={styles.menu} onClick={() => setOpen((prev) => !prev)}>
            {open ? <RxCross2 color="white" size={40} /> : <img src={hamburger} />}
          </ul>
        </nav>
      </div>

      {open && (
        <div id={styles.drawerContainer} className={styles.hide}>
          {navOptions}
        </div>
      )}
    </>
  );
};

export default Navbar;
