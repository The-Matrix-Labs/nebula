import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import Tab from '../Tab/Tab';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const navOptions = (
    <>
      <li>Home</li>
      <li onClick={() => handleNavigate('/about')}>About Us</li>
      <li onClick={() => handleNavigate('/token')}>Tokenomics</li>
      <li onClick={() => handleNavigate('/roadmap')}>Roadmaps</li>
      <li onClick={() => handleNavigate('/teams')}>Teams</li>
      <li onClick={() => handleNavigate('/partners')}>Partners</li>
      <li onClick={()=>handleNavigate('/contact')}> 
      <Tab label={'Contact Us'} onClick={()=>handleNavigate('/contact')}/>
        {/* <Select text={'Ethereum'} image={ether} arrowVisible={true} /> */}
      </li>
    </>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <img src={logo} alt="logo" className={styles.logo} />
          </li>
        </ul>
        <ul>{navOptions}</ul>

        <ul id={styles.menu} onClick={() => setOpen((prev) => !prev)}>
          {open ? <RxCross2 size={20} /> : <GiHamburgerMenu size={20} />}
        </ul>
      </nav>

      {open && (
        <div id={styles.drawerContainer} className={styles.hide}>
          {navOptions}
        </div>
      )}
    </>
  );
};

export default Navbar;