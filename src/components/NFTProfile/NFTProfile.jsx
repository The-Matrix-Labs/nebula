import React from 'react';
import styles from './NFTProfile.module.css';
import NFT1 from '../../assets/images/NFT1.png'
import NFT2 from '../../assets/images/NFT2.png'
import NFT3 from '../../assets/images/NFT3.png'

const NFTProfile = ({ src }) => (
    <div className={styles.container}>
        <img src={src}/>
    </div>
  );
  
  export default NFTProfile;