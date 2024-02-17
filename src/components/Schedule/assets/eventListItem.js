import React from 'react';
import styles from './eventList.module.css';

const EventListDetails = ({ event }) => {
    return (
            <div className={`${styles.timelineItem} lg:max-w-[1220px] md:max-w-[725px] max-w-[375px]`}>
                <div className={`${styles.timelineitem_content}`}>
                    <h4 className=' font-semibold lg:text-[20px] text-md leading-7 uppercase'>{event.time} - {event.subhead}</h4>
                    {event.text && <p className='lg:text-[18px] text-sm leading-6 lg:leading-7 pt-2'>{event.text }</p>}
                    <ul className='pt-3'>
                        {event.list && event.list.map((item, index) => (
                            <li key={index} className={`${styles.itemlist} flex flex-row items-center gap-2 font-semibold lg:text-[18px] text-sm font-sans`}>
                                <div className=' w-1 h-1 rounded-full overflow-hidden bg-white'></div>
                                {typeof item === 'string' ? item : <a href={item.route} className=' underline lg:no-underline hover:underline underline-offset-4 py-1 cursor-pointer'>{item.event}</a>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`${styles.circle}`}>
                    <div className={`${styles.innerCircle}`}></div>
                </div>
            </div>
    );
};

export default EventListDetails;
