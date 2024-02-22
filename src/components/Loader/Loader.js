import React from 'react';
import styles from './Loader.module.css';
import pragatiImage from './pragati.png';

const Loader = () => {
  return (
    <>
      <div className={styles.loader_body}>
        <div className={styles.spinner_container}></div>
        <img src={pragatiImage} alt="Please-wait" className={styles.loader_plinth_img} />
      </div>
    </>
  );
};

export default Loader;
