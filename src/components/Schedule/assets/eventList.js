import React from 'react';
import EventListDetails from "./eventListItem";
import EventData from './eventslist.json';
import styles from './eventList.module.css';

const EventList = () => {
    return EventData.events && EventData.events.length > 0 && (
        <div className={`${styles.timeline_container}`}>
            <h1 className='lg:px-12 lg:pt-12 px-12 pb-4 font-bold lg:text-[36px] text-2xl leading-10'>{EventData.date}</h1>
            {EventData.events.map((event, index) => (
                <EventListDetails key={index} event={event} date={EventData.date} />
            ))}
        </div>
    );
};

export default EventList;
