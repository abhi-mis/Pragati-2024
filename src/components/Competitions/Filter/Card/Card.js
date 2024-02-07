import styles from "./Card.module.css";
import React from "react";
import { motion } from 'framer-motion';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";
import _ from 'lodash';

function Card(props) {
  const navigate = useNavigate();

  // Throttle the click events
  const throttledHandleRegister = _.throttle((e, name, key) => {
    const path = (props.auth === "false") ? "/login" : `/${name}`;
    navigate(path);
  }, 1000);

  const throttledHandleClick = _.throttle((e, name, key) => {
    navigate(`/${name}`);
  }, 1000);

  return (
    <motion.div
      key={props.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.card}
    >
      <div className={styles.imgContainer}>
        <LazyLoadImage 
          src={props.imgName === "" ? "./images/coming-soon.jpg" : props.imgName}
          alt=""
          effect="blur"
          placeholderSrc="./Images/dark-bg-preloader.jpg"
          height="100%"
          width="100%"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.name} onMouseEnter={() => {props.btnEnter();}} onMouseLeave={() => {props.textLeave();}}>
          {props.name}
        </div>
        <div className={styles.tag}>
          <div className={styles.teamTag}>{props.participation}</div>
          <div className={`${styles.teamTag} ${styles.clubName}`}>{props.club}</div>
        </div>
        <div className={styles.btn}>
          
            <button
  className={styles.regbtn}
  onClick={(e) => throttledHandleRegister(e, props.name.toLowerCase().replaceAll(" ", "_"), props.id)}
  onMouseEnter={() => {props.btnEnter();}}
  onMouseLeave={() => {props.textLeave();}}
>
  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">Register</a>
</button>

           
          <button
            className={styles.expbtn}
            onClick={(e) => throttledHandleClick(e, props.name.toLowerCase().replaceAll(" ", "_"), props.id)}
            onMouseEnter={() => {props.btnEnter();}}
            onMouseLeave={() => {props.textLeave();}}
          >
            Explore
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
