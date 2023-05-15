import React from "react";
import styles from "./Roadmap.module.css";

const Data = [
    {
        title: 'Q2',
        list: [
            {head:'Private Sale'},
            {head:'Build'},
            {head:'Public Sale'},
            {head:'Minting'},
            {head:'Launch'}
        ],
        
    },
    {
        title: 'Q3',
        list: [
            {head:'Progressive Collateralization'},
            {head:'DEX'},
            {head:'Listing Loans'},
            {head:'Lending'},
            {head:'Casino'}
        ],
    },
    {
        title: 'Q4',
        list: [
            {head:'Cross-Chain'},
            {head:'Expansion'},
            {head:' 3rd party integration'},
            {head:'Battle testing'},
        ],
    }
];

const TimelineItem = ({ data }) => (
    <div className={styles.timelineitem}>
        <div className={styles.timelineitemcontent}>
            
            <p className={styles.title}>{data.title}</p>
            <ul>
                {data.list.map((item)=>(
                    <li className={styles.list}>{item.head}</li>
                ))}
            </ul>
            <span className={styles.circle} />
        </div>
    </div>
);

const Timeline = () =>
    Data.length > 0 && (
        <div className={styles.timelinecontainer}>
            {Data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

    export default Timeline;