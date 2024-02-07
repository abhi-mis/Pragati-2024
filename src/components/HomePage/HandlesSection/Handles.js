import React from "react";
import styles from './Handles.module.css'
import Whatsapp from './Images/Whatsapp.png'
import Instagram from './Images/Instagram.png'
import Facebook from './Images/Facebook.png'


export const Handles = () => {
    return (
        <div className={`${styles.HandleContainer}`}>
            <a href="https://whatsapp.com/channel/0029VaHd6v80VycIa4NW0N32" target="_blank" rel="noopener noreferrer">
                <div className={[styles.Handles, styles.Youtube].join(' ')}>
                    <img src={Whatsapp} alt='' className={`${styles.yt}`} />
                </div>
            </a>

            <a href="https://www.instagram.com/pragati.mckvie/" target="_blank" rel="noopener noreferrer">
                <div className={`${styles.Handles}`} >
                    <img src={Instagram} alt='' className={`${styles.insta}`} />
                </div>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61555812466806&sfnsn=wiwspwa&mibextid=RUbZ1f" target="_blank" rel="noopener noreferrer">
                <div className={`${styles.Handles}`}>
                    <img src={Facebook} alt='' className={`${styles.facebook}`} />
                </div>
            </a>
        </div>
    );
}



