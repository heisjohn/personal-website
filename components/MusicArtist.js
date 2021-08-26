import styles from '../styles/MusicArtist.module.css';

export default function MusicArtist(props) {
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.image} src={props.image} alt={props.name} />
      <p className={styles.name}>{props.name}</p>
    </div>
  )
}
