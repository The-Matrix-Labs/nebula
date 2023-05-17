import React, { useRef, useState , useEffect} from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import coin from "../../assets/images/coin.png";
import line from "../../assets/images/line.png";
import hline from "../../assets/images/hline.png";
import NFTProfile from "../../components/NFTProfile/NFTProfile";
import NFT1 from "../../assets/images/NFT1.png";
import NFT2 from "../../assets/images/NFT2.png";
import NFT3 from "../../assets/images/NFT3.png";
import NSH from "../../components/NSH/NSH";
import Distribution from "../../components/Distribution/Distribution";
import NFTInfo from "../../components/NFTInfo/NFTInfo";
import TeamProfile from "../../components/TeamProfile/TeamProfile";
import Team1 from "../../assets/images/Team1.png";
import Team2 from "../../assets/images/Team2.png";
import Team3 from "../../assets/images/Team3.png";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import Timeline from "../../components/Roadmap/Roadmap";
import Footer from "../../components/Footer/Footer";
import video from "../../assets/video/nebula.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({ home, about, token, road, team, partners }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isShowMore1, setIsShowMore1] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);
  const toggleReadMoreLess1 = () => {
    setIsShowMore1(!isShowMore1);
  };
  const toggleReadMoreLess2 = () => {
    setIsShowMore2(!isShowMore2);
  };
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar
        home={home}
        about={about}
        token={token}
        road={road}
        team={team}
        partners={partners}
      />
      <section data-aos="fade-up" className={styles.home}>
        <div  ref={home} className={styles.first}>
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
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://moonvector.io/private/nebula-finance",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className={styles.btn1}
          >
            Private Sale
          </button>
          <button onClick={setModalOpen} className={styles.btn2}>
            Public Sale
          </button>
          <Modal
            className={styles.modal}
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
          >
            PUBLIC SALE COMING SOON
          </Modal>
        </div>
      </section>
      <section   className={styles.coins}>
      <div data-aos="fade-up">
        <ReactPlayer  width="100%" height="100%" url={video} controls={true} />
        </div>
      </section>
      <section  ref={about} className={styles.about}>
        <div data-aos="fade-right" className={styles.left}>
          <p className={styles.aboutHead}>
            <img className={styles.aboutLine} src={line} />
            About Us
          </p>
          <p className={styles.aboutInfo}>
            Introducing Nebula Finance, a new hybrid stablecoin solution
            blending the advantages of both algorithmic and collateralized
            stablecoin models. a two-token sytem- Nebula Cash (NUSD) as the stablecoin, and Nebula (NSH) the reward token- our protocol introduces dynamic fee.
          </p>
          {isShowMore1 && (
            <p className={styles.aboutInfo}>
              In our quest for a collateralization ratio between 110% and 150%,
              the Nebula Cash Protocol is set to transition from an algorithmic
              stablecoin to a hybrid model. Harnessing fees, taxes, and
              seigniorage rewards, our system builds collateral and encourages
              user participation through staking, rewards, and bond issuance
              mechanisms. Our inventive approach offers a robust and adaptive
              stablecoin solution, promoting long-term stability and widespread
              adoption in the crypto ecosystem. Get ready to experience a
              revolutionary stablecoin solution that achieves the vision it set
              out to become!
            </p>
          )}
          <button onClick={toggleReadMoreLess1} className={styles.readMore}>
            {isShowMore1 ? "Read Less" : "Read More"}
          </button>
        </div>
        <div data-aos="fade-left" className={styles.right}>
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
          {isShowMore2 && (
            <p className={styles.aboutInfo}>
              Where we differ is by introducing an ecosystem of taxes and
              rebates, along with a slew of dynamic actionable phases, featuring
              variable rewards and fee distribution, that lay out a full roadmap
              to over-collateralization. What's our game plan? Bonds Seigniorage
              Rewards Dynamic Reward Distribution Dual Asset Staking Minting and
              Burning Stability Pool DEX Weighted Epoch Locks Increased Stable
              Lock Ratio Tax Backed Collateral Share Incentivized Tax Rebates 6
              Action Phase reward Structure Roadmap to Collateralization Dex
              Listing Loans And much much more....{" "}
            </p>
          )}
          <div className={styles.howRow}>
            <a
              style={{ textDecoration: "none" }}
              href={require("../../assets/file/nebula.pdf")}
              download="Nebula"
              className={styles.howbtn2}
            >
              Download PDF
            </a>
            <button
              onClick={toggleReadMoreLess2}
              className={styles.howreadMore}
            >
              {isShowMore2 ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>
      <section  className={styles.token}>
        <div data-aos="fade-up" className={styles.nftTitle}>
          <p>
            NFT collection - Nebluoids {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <div data-aos="fade-up" className={styles.nftProfiles}>
          <NFTProfile data-aos="fade-right" src={NFT1} />
          <NFTProfile data-aos="fade-up" src={NFT2} />
          <NFTProfile data-aos="fade-left" src={NFT3} />
        </div>
        <div className={styles.nftfooter}>Minting coming soon</div>
        <div data-aos="fade-up" ref={token} className={styles.nftTitle}>
          <p>
            Tokenomics {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <NSH />
        <Distribution />
        <NFTInfo />
        <div data-aos="fade-up" ref={road} className={styles.nftTitle}>
          <p>
            Roadmap 2023 {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <Timeline />
        <div data-aos="fade-up" ref={team} className={styles.nftTitle}>
          <p>
            Team {"\n"}
            <img className={styles.hlineImage} src={hline} />
          </p>
        </div>
        <div className={styles.teamProfiles}>
          <TeamProfile
            src={Team1}
            name={"Nova mind"}
            info={
              "CTO and developer with many tokens and complex protocols launches under his belt, he is excited for the new challenge."
            }
          />
          <TeamProfile
            src={Team2}
            name={"Astro Cowboy"}
            info={
              "Professional Degen and hype master ring leader, always pushing for something new and exciting in the space."
            }
          />
          <TeamProfile
            src={Team3}
            name={" Nebulous One"}
            info={
              "An experienced project runner and professional degenerate. Having spent years developing complex DeFi ecosystems, he is excited to take a swing at one of the biggest challenges of all: Algo-stables."
            }
          />
        </div>
        <div data-aos="fade-up" ref={partners} className={styles.nftTitle}>
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
      <Footer
        home={home}
        about={about}
        token={token}
        road={road}
        team={team}
        partners={partners}
      />
    </>
  );
};

export default Home;
