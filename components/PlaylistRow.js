import styles from '../styles/PlaylistRow.module.css';

export default function PlaylistRow(props) {
  return (
    <div className={styles.container}>
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
  )
}
