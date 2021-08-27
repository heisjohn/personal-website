import styles from '../styles/AppIcon.module.css';
import Link from 'next/link';

//props: destinationInSite (bool), destination (string), image, name
export default function AppIcon(props) {
  const getImage = () => {
    if (props.destinationInSite) {
      return (
        <Link href={props.destination} passHref>
          <div className={styles.appImageContainer} style={{backgroundImage: `url(${props.image || null})`}} />
        </Link>
      )
    }
    return (
      <a href={props.destination} target="_blank" rel="noopener noreferrer">
        <div className={styles.appImageContainer} style={{backgroundImage: `url(${props.image || null})`}} />
      </a>
    )
  }

  return (
    <div className={styles.appContainer}>
      {getImage()}
      {props.bottom ? 
        <div className={styles.padding} /> : 
        <div className={styles.nameContainer}>
          <h1 className={styles.appName}>{props.name}</h1>
        </div>
      }
    </div>
  )
}