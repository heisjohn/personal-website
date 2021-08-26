import PhoneLayout from '../../components/PhoneLayout.js';
import styles from '../../styles/Music.module.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Link from "next/link";
import PlaylistRow from "../../components/PlaylistRow.js"

const Songs = () => {
  return (
    <PhoneLayout backgroundImage="linear-gradient(#333438, #121212, #121212, #121212)" content={(
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Favorite songs
        </h1>
        <p className={styles.descriptionText}>
          Hover and click!
        </p>

        <div className={styles.playlistContainer}>
          <PlaylistRow image="/songs/the-dreamer.jpg" name="The Dreamer" artist="Anderson .Paak, Talib Kweli, Timan Family Choir" time="5:40" />
          <PlaylistRow image="/songs/home.jpg" name="Home" artist="LCD Soundsystem" time="7:53" />
          <PlaylistRow image="/songs/same-drugs.jpg" name="Same Drugs" artist="Chance the Rapper" time="4:18" />
          <PlaylistRow image="/songs/cosmos.jpg" name="Cosmos" artist="Yabadum" time="3:52" />
          <PlaylistRow image="/songs/hands-down.jpg" name="Hands Down" artist="The Greeting Committee" time="4:18" />
          <PlaylistRow image="/songs/i.jpg" name="i" artist="Kendrick Lamar" time="3:52" />
        </div>

        <h1 className={styles.heading} style={{ marginTop: "1.4vh" }}>
          Recent Favorites
        </h1>

        <div className={styles.playlistContainer}>
          <PlaylistRow image="/songs/sister-cities.jpg" name="Sister Cities" artist="Hop Along" time="5:08" />
          <PlaylistRow image="/songs/silhouettes.jpg" name="Silhouettes" artist="Colony House" time="2:58" />
          <PlaylistRow image="/songs/sleeping-sickness.jpg" name="Sleeping Sickness" artist="City and Colour" time="4:08" />
          <PlaylistRow image="/songs/freakin-out.jpg" name="Freakin' Out On the Interstate" artist="Briston Maroney" time="4:12" />
          <PlaylistRow image="/songs/time-to-get-away.jpg" name="Time to Get Away" artist="LCD Soundsystem" time="4:12" />
        </div>

        <div className={styles.bottomBar}>
          <Link href="/music/albums-and-artists" passHref >
            <div className={`${styles.bottomButton} ${styles.unselected}`}>
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img src="/album.png" alt="album" className={styles.bottomIcon} />
              <p className={styles.bottomText}>Albums and Artists</p>
            </div>
          </Link>
          <div className={`${styles.bottomButton} ${styles.selected}`}>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img src="/song.png" alt="song" className={styles.bottomIcon} />
            <p className={styles.bottomText}>Songs</p>
          </div>
        </div>
      </div>
    )} />
  );
}

export default Songs;