import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import coin from "../../assets/images/coin.png";
import line from "../../assets/images/line.png";
import hline from "../../assets/images/hline.png";
import NFTProfile from '../../components/NFTProfile/NFTProfile'
import NFT1 from '../../assets/images/NFT1.png'
import NFT2 from '../../assets/images/NFT2.png'
import NFT3 from '../../assets/images/NFT3.png'
import NSH from '../../components/NSH/NSH'
import Distribution from "../../components/Distribution/Distribution";
import NFTInfo from "../../components/NFTInfo/NFTInfo";
import TeamProfile from "../../components/TeamProfile/TeamProfile";
import Team1 from '../../assets/images/Team1.png'
import Team2 from '../../assets/images/Team2.png'
import Team3 from '../../assets/images/Team3.png'
import partner1 from '../../assets/images/partner1.png'
import partner2 from '../../assets/images/partner2.png'

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
          <p className={styles.aboutHead}>
            <img className={styles.aboutLine} src={line} />
            About Us
          </p>
          <p className={styles.aboutInfo}>
            Introducing Nebula Finance, a new hybrid stablecoin solution
            blending the advantages of both algorithmic and collateralized
            stablecoin models. Utilizing a two-token system - Nebula Cash (NUSD)
            as the stablecoin, and Nebula Shares (NSH) the Share token - our
            protocol introduces dynamic fee distribution and tax allocations
            that respond to market conditions, ensuring stability and enticing
            user engagement.
          </p>
          <button className={styles.readMore}>Read More</button>
        </div>
        <div className={styles.right}>
          <p className={styles.howHead}>
            How we work
            <img src={line} />
          </p>
          <p className={styles.aboutInfo}>
            We are an algo-based stable coin protocol that utilizes a 2 token
            system, with a road to full collateralization built in. Comprised of
            a complex system of price phases, stabilization methods, multiple
            taxes and incentives, it's a massive step forward in the quest for a
            viable algo based stable coin.
          </p>
          <p className={styles.aboutInfo}>
            We've seen two token systems with bonding that work for a while,
            only to fall apart when greed kicks in.
          </p>
          <div className={styles.howRow}>
            <button className={styles.howbtn2}>Download PDF</button>
            <button className={styles.howreadMore}>Read More</button>
          </div>
        </div>
      </section>
      <section className={styles.token}>
        <div className={styles.nftTitle}>
          <p>
            NFT collection - Nebluoids {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <div className={styles.nftProfiles}>
          <NFTProfile src={NFT1}/>
          <NFTProfile src={NFT2}/>
          <NFTProfile src={NFT3}/>
        </div>
        <div className={styles.nftfooter}>Minting coming soon</div>
        <div className={styles.nftTitle}>
          <p>
            Tokenomics {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <NSH/>
        <Distribution/>
        <NFTInfo/>
        <div className={styles.nftTitle}>
          <p>
            Roadmap 2023 {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <div className={styles.nftTitle}>
          <p>
            Team {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <div className={styles.teamProfiles}>
        <TeamProfile src={Team1} name={'Nova mind'} info={'CTO and developer with many tokens and complex protocols launches under his belt, he is excited for the new challenge.'}/>
        <TeamProfile src={Team2} name={'Astro Cowboy'} info={'Professional Degen and hype master ring leader, always pushing for something new and exciting in the space.'}/>
        <TeamProfile src={Team3} name={' Nebulous One'} info={'An experienced project runner and professional degenerate. Having spent years developing complex DeFi ecosystems, he is excited to take a swing at one of the biggest challenges of all: Algo-stables.'}/>
        </div>
        <div className={styles.nftTitle}>
          <p>
            Partners {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <div className={styles.teamProfiles}>
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
