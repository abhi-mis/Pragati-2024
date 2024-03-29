import styles from "./Filter.module.css";
import React from 'react';
import Card from "../Card/Card";
import { useState } from "react";
import { AnimatePresence } from 'framer-motion'; // Update this import statement
import { clubs, events } from "../../data";

function Filter(props) {
  const [tag, setTag] = useState("Astronomy");

  return (
    <div className={styles.outer}>
      <div className={styles.tags}>
        {clubs.map((club) => {
          return (
            <button onMouseEnter={()=>{props.btnEnter();}} onMouseLeave={()=>{props.textLeave();}}
              className={`${styles.tag} ${tag === club ? styles.active : null}`}
              onClick={() => setTag(club)}
            >
              {club}
            </button>
          );
        })}
      </div>
      
      <div className={styles.cards}>
        {events
          .filter((event) => event.club === tag)
          .map((filteredEvent, index) => (
            <AnimatePresence key={filteredEvent.id} mode="wait" >
              <Card
                index={index}
                auth={props.auth}
                key={filteredEvent.id}
                id={filteredEvent.id}
                name={filteredEvent.name}
                club={filteredEvent.club}
                participation={filteredEvent.participation}
                imgName={filteredEvent.imgName}
                btnEnter={props.btnEnter}
                textLeave={props.textLeave}
              />
            </AnimatePresence>
          ))}
      </div>
    </div>
  );
}

export default Filter;
