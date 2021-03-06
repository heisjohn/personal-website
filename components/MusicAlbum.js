import styles from '../styles/MusicAlbum.module.css';

export default function MusicAlbum(props) {
  return (
    <a href={props.destination} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div className={styles.container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.image} src={props.image} alt={props.name} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.artist}>{props.artist}</p>
      </div>
    </a>
  )
}
