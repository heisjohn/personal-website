import styles from '../styles/PhoneLayout.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PhoneLayout(props) {
  const [time, setTime] = useState("")

  const getTime = () => {
    var date = new Date();
    var hours = date.getHours();
    hours = hours % 12 || 12;
    var hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var time = hours + ":" + minutes;
    if (time[0] === "0") {
      time = time.substring(1);
    }
    setTime(time);
  }

  useEffect(() => {
    getTime();
  });

  useEffect(() => {
    var timer = setInterval(() => getTime(), 1000);
    return function cleanup() {
      clearInterval(timer);
    }
  })

  if (props.off) {
    return (
      <div className={styles.backgroundContainer}>
        <div className={styles.outerContainer}>
          <div className={styles.topBar} />
          <div className={styles.bottomButton}>
            <div className={styles.square} />
          </div>
          <div className={styles.offContainer}>
            <Link href={"/home"} passHref>
              <div className={styles.imageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.image} src="/power.png" alt="power" />
                <h1 className={styles.clickme}>Click me!</h1>
              </div>
            </Link>
          </div>
        </div>
        <p className={styles.bottomText}>
          Made by John He. Check out this site on <a href="https://github.com/heisjohn/personal-website/" target="_blank" rel="noopener noreferrer" className={styles.link}>Github</a>!
        </p>
      </div>
    )
  }

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.outerContainer}>
        <div className={styles.topBar} />
        <Link href="/home" passHref>
          <div className={styles.bottomButton}>
            <div className={styles.square} />
          </div>
        </Link>
        <div className={styles.innerContainer}>
          <div className={styles.headerContainer} style={{ backgroundColor: `rgba(0, 0, 0, ${props.headerOpacity})`}}>
            <p className={styles.headerText}>{time}</p>
            <div className={styles.headerRight}>
              <div className={styles.wifi} />
              <p className={styles.headerText}>19%</p>
              <div className={styles.battery} />
            </div>
          </div>
          {props.content}
        </div>
      </div>
      <p className={styles.bottomText}>
        Made by John He. Check out this site on <a href="https://github.com/heisjohn/personal-website/" target="_blank" rel="noopener noreferrer" className={styles.link}>Github</a>!
      </p>
    </div>
  )
}
