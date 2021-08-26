import PhoneLayout from '../components/PhoneLayout.js';
import styles from '../styles/Music.module.css';

const Music = () => {
  return (
    <PhoneLayout backgroundImage="linear-gradient(#333438, #121212)" content={(
      <div>
        <h1 className={styles.heading}>
          John&apos;s Music
        </h1>
      </div>
    )} />
  );
}

export default Music;