import React from 'react';
import styles from './TeamProfile.module.css';
import Team1 from '../../assets/images/Team1.png';
import Team2 from '../../assets/images/Team2.png';
import Team3 from '../../assets/images/Team3.png';

const TeamProfile = ({ src, name, info }) => (
  <div className={styles.container}>
    <img src={src} />
    <p className={styles.name}>{name}</p>
    <p className={styles.name}>FOUNDER</p>
    <p className={styles.info}>{info}</p>
  </div>
);

export default TeamProfile;
