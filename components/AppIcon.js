import styles from '../styles/AppIcon.module.css';
import Link from 'next/link';

//props: destinationInSite (bool), destination (string), image, name
export default function AppIcon(props) {
  if (props.destinationInSite) {
    return (
      <div className={styles.appContainer}>
        <Link href={props.destination} passHref>
          <div className={styles.appImageContainer} style={{backgroundImage: `url(${props.image || null})`}} />
        </Link>
        <h1 className={styles.appName}>{props.name}</h1>
      </div>
    )
  } else {
    return (
      <div className={styles.appContainer}>
        <a href={props.destination} target="_blank" rel="noopener noreferrer">
          <div className={styles.appImageContainer} style={{backgroundImage: `url(${props.image || null})`}} />
        </a>
        <h1 className={styles.appName}>{props.name}</h1>
      </div>
    )
  }
}