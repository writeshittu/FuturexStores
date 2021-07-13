import React from "react";
import styles from "./TrialCss.module.css";

const TrialCard = () => {
  return (
    <div className={styles.cont}>
      <p>test test test</p>
      <p>test test test</p>
      <p>test test test</p>
      <p className={styles.text}>test test test</p>
      <button className={styles.button}>click me man</button>
      <div className={styles.foots}>
        <span id={styles.footItem}>I'm item</span>
        <span className={styles.footItem}>I'm item 2</span>
      </div>
    </div>
  );
};

export default TrialCard;
