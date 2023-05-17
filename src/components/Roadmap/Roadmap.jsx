import React , { useEffect }  from "react";
import styles from "./Roadmap.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    title: "Q2",
    list: [
      { head: "Private Sale" },
      { head: "Build" },
      { head: "Public Sale" },
      { head: "Minting" },
      { head: "Launch" },
    ],
  },
  {
    title: "Q3",
    list: [
      { head: "Progressive Collateralization" },
      { head: "DEX" },
      { head: "Listing Loans" },
      { head: "Lending" },
      { head: "Casino" },
    ],
  },
  {
    title: "Q4",
    list: [
      { head: "Cross-Chain" },
      { head: "Expansion" },
      { head: " 3rd party integration" },
      { head: "Battle testing" },
    ],
  },
];

const TimelineItem = ({ animate,data }) => {
  useEffect(() => {
    AOS.init();
  }, []);
return(
  <div data-aos={animate}  className={styles.timelineitem}>
    <div className={styles.timelineitemcontent}>
      <p className={styles.title}>{data.title}</p>
      <ul>
        {data.list.map((item) => (
          
          <li className={styles.list}>{item.head}</li>
        ))}
      </ul>
      <span className={styles.circle} />
    </div>
  </div>
)
};

const Timeline = () =>
  Data.length > 0 && (
    <div className={styles.timelinecontainer}>
      {Data.map((data, idx) => { 
        if(idx%2==0){
          return(<TimelineItem animate={'fade-left'} data={data} key={idx} />)
        } 
        else{
        return(<TimelineItem animate={'fade-right'} data={data} key={idx} />)
        }
      })}
    </div>
  );

export default Timeline;
