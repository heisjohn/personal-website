import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState("")

  const getTime = () => {
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var time = hours + ":" + minutes;
    if (time[0] === "0") {
      time = time.substring(1);
    }
    setTime(time);
  }

  useEffect(() => {
    var timer = setInterval(() => getTime(), 1000);
    return function cleanup() {
      clearInterval(timer);
    }
  })

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.outerContainer}>
        <div className={styles.topBar} />
        <div className={styles.bottomButton} />
        <div className={styles.innerContainer}>
          <div className={styles.headerContainer}>
            <p className={styles.headerText}>{time}</p>
            <div className={styles.headerRight}>
              <div className={styles.wifi} />
              <p className={styles.headerText}>19%</p>
              <div className={styles.battery} />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.bottomText}>
        Made by John He. Check out this site on <b className={styles.link}>Github</b>!
      </p>
    </div>
    
  )
}
