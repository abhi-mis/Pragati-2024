import React from 'react';
import EventListDetails from "./eventListItem";
import EventData1 from './eventslistday1.json';
import EventData2 from './eventslistday2.json';
import EventData3 from './eventslistday3.json';
import styles from './eventList.module.css';

const EventList = ({ day }) => {
    let DayData 
    switch (day) {
        case 1:
            DayData=EventData1
            break;
        case 2:
            DayData=EventData2
            break;
        case 3:
            DayData=EventData3
            break;
        default:
            DayData={}
    }
    
    return DayData.events && DayData.events.length > 0 && (
        <div className={`${styles.timeline_container}`}>
            <h1 className='lg:px-12 lg:pt-12 px-12 pb-4 font-bold lg:text-[36px] text-2xl leading-10'>{DayData.date}</h1>
            {DayData.events.map((event, index) => (
                <EventListDetails key={index} event={event} date={DayData.date} />
            ))}
        </div>
    );
};

export default EventList;
