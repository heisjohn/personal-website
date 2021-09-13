import styles from '../styles/PlaylistRow.module.css';
import { isMobile } from "react-device-detect";

export default function PlaylistRow(props) {

  const playAudio = () => {
    if (typeof Audio != "undefined") {
      if (!global.audio || (global.audio && global.audio.name != props.audio)) {
        global.audio = new Audio(props.audio);
        global.audio.name = props.audio;
      }
      global.audio.isPlaying = true;
      global.audio.volume = 0.25;
      global.audio.play();
    }
  }

  const playAudioMobile = () => {
    if (typeof Audio != "undefined") {
      if (global.audio) {
        global.audio.pause();
        if (global.audio.name == props.audio && global.audio.isPlaying && !global.audio.ended) {
          global.audio.isPlaying = false;
          return;
        }
      }
      playAudio();
    }
  }

  const OuterContainer = containerProps => {
    if (isMobile) {
      return (
        <div className={styles.container} onClick={playAudioMobile}>
          {containerProps.children}
        </div>
      )
    }
    return (
      <a href={props.destination} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <div className={styles.container} onMouseEnter={playAudio}
          onMouseLeave={() => {
            if(typeof Audio != "undefined") {
              global.audio.pause();
            }
          }}>
          {containerProps.children}
        </div>
      </a>
    )
  }

  return (
    <OuterContainer>
      <div className={styles.imageNameContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.image} src={props.image} alt={props.name} />
        <div>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.artist}>{props.artist}</p>
        </div>
      </div>
      <p className={styles.time}>{props.time}</p>
    </OuterContainer>
  )
}
