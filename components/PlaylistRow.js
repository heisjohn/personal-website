import styles from '../styles/PlaylistRow.module.css';
import { useEffect, useState } from 'react';

export default function PlaylistRow(props) {
  let audio;
  if(typeof Audio != "undefined") {
    audio = new Audio(props.audio);
    audio.volume = 0.3;
  }

  return (
    <a href={props.destination} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div className={styles.container} onMouseEnter={() => {
          if(typeof Audio != "undefined") {
            audio.play();
          }
        }}
        onMouseLeave={() => {
          if(typeof Audio != "undefined") {
            audio.pause();
            audio.currentTime = 0;
          }
        }}>
        <div className={styles.imageNameContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.image} src={props.image} alt={props.name} />
          <div>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.artist}>{props.artist}</p>
          </div>
        </div>
        <p className={styles.time}>{props.time}</p>
      </div>
    </a>
  )
}
