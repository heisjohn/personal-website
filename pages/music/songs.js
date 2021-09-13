import PhoneLayout from '../../components/PhoneLayout.js';
import styles from '../../styles/Music.module.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Link from "next/link";
import PlaylistRow from "../../components/PlaylistRow.js"
import Head from 'next/head';

const Songs = () => {
  const favorites = [{ image: "/songs/the-dreamer.jpg", 
                       name: "The Dreamer", 
                       artist: "Anderson .Paak, Talib Kweli, Timan Family Choir", 
                       time: "5:40", 
                       audio: "/music-clips/the-dreamer.mp3", 
                       destination: "https://www.youtube.com/watch?v=Jv95aptVSUk&ab_channel=AndersonPaak" },
                     { image: "/songs/home.jpg",
                       name: "Home",
                       artist: "LCD Soundsystem",
                       time: "7:53",
                       audio: "/music-clips/home.mp3",
                       destination: "https://www.youtube.com/watch?v=53yEyj0mjfo&ab_channel=funwunce" },
                     { image: "/songs/same-drugs.jpg",
                       name: "Same Drugs",
                       artist: "Chance the Rapper",
                       time: "4:18",
                       audio: "/music-clips/same-drugs.mp3",
                       destination: "https://www.youtube.com/watch?v=4AxJXWs3mnw&ab_channel=ChanceTheRapper-Topic" },
                     { image: "/songs/this-must-be-the-place.jpg",
                       name: "This Must Be the Place (Naive Melody)",
                       artist: "Talking Heads",
                       time: "4:56",
                       audio: "/music-clips/this-must-be-the-place.mp3",
                       destination: "https://www.youtube.com/watch?v=fsccjsW8bSY&ab_channel=TalkingHeads-Topic" },
                     { image: "/songs/hands-down.jpg",
                       name: "Hands Down",
                       artist: "The Greeting Committee",
                       time: "4:18",
                       audio: "/music-clips/hands-down.mp3",
                       destination: "https://www.youtube.com/watch?v=rN2qXjvEMcM&ab_channel=TheGCBandVEVO" },
                     { image: "/songs/i.jpg",
                       name: "i",
                       artist: "Kendrick Lamar",
                       time: "3:52",
                       audio: "/music-clips/i.mp3",
                       destination: "https://www.youtube.com/watch?v=8aShfolR6w8&ab_channel=KendrickLamarVEVO" },
                     { image: "/songs/peter-pan.jpg",
                       name: "Peter Pan",
                       artist: "Arcade Fire",
                       time: "2:49",
                       audio: "/music-clips/peter-pan.mp3",
                       destination: "https://www.youtube.com/watch?v=PAzNt2RDiv0&ab_channel=ArcadeFireVEVO" }]
  const recent = [{ image: "/songs/let-me-down-easy.jpg",
                    name: "Let Me Down Easy",
                    artist: "Gang of Youths",
                    time: "5:19",
                    audio: "/music-clips/let-me-down-easy.mp3",
                    destination: "https://www.youtube.com/watch?v=eeBf79q90js&ab_channel=gangofyouthsVEVO" },
                  { image: "/songs/cosmos.jpg",
                    name: "Cosmos",
                    artist: "Yabadum",
                    time: "3:52",
                    audio: "/music-clips/cosmos.mp3",
                    destination: "https://www.youtube.com/watch?v=GNAJOQpxiIo&ab_channel=Yabadum-Topic" },
                  { image: "/songs/come-to-life.jpg",
                    name: "Come to Life",
                    artist: "Kanye West",
                    time: "5:10",
                    audio: "/music-clips/come-to-life.mp3",
                    destination: "https://www.youtube.com/watch?v=yblfMrUeiP4&ab_channel=KanyeWest" },
                  { image: "/songs/freakin-out.jpg",
                    name: "Freakin' Out On the Interstate",
                    artist: "Briston Maroney",
                    time: "4:12",
                    audio: "/music-clips/freakin-out.mp3",
                    destination: "https://www.youtube.com/watch?v=__2Pui0YN_M&ab_channel=BristonMaroney-Topic" },
                  { image: "/songs/time-to-get-away.jpg",
                    name: "Time to Get Away",
                    artist: "LCD Soundsystem",
                    time: "4:12",
                    audio: "/music-clips/time-to-get-away.mp3",
                    destination: "https://www.youtube.com/watch?v=K1SKj0jV-6M&ab_channel=LCDSoundsystem-Topic" },
                  { image: "/songs/sister-cities.jpg",
                    name: "Sister Cities",
                    artist: "Hop Along",
                    time: "5:08",
                    audio: "/music-clips/sister-cities.mp3",
                    destination: "https://www.youtube.com/watch?v=SHs_5z9ikiw&ab_channel=SaddleCreek" },
                  { image: "/songs/sleeping-sickness.jpg",
                    name: "Sleeping Sickness",
                    artist: "City and Colour",
                    time: "4:08",
                    audio: "/music-clips/sleeping-sickness.mp3",
                    destination: "https://www.youtube.com/watch?v=4ZKCkuIWZRg&ab_channel=CityAndColour-Topic" }]

  return (
    <PhoneLayout headerOpacity={0.30} content={(
      <div className={styles.outerContainer}>
        <div className={styles.scrollContainer}>
          <div className={styles.container}>
            <Head>
              <title>John He | Music</title>
              <meta property="og:title" content="John He | Music" key="title" />
            </Head>
            <h1 className={styles.heading}>
              Favorite songs
            </h1>
            <p className={styles.descriptionText}>
              Hover and click!
            </p>

            <div className={styles.playlistContainer}>
              {favorites.map((song, i) => {
                return (
                  <PlaylistRow key={i} image={song.image} name={song.name} artist={song.artist} time={song.time} audio={song.audio} destination={song.destination} />
                );
              })}
            </div>

            <h1 className={styles.heading} style={{ marginTop: "1.4vh" }}>
              Recent Favorites
            </h1>

            <div className={styles.playlistContainer}>
              {recent.map((song, i) => {
                return (
                  <PlaylistRow key={i} image={song.image} name={song.name} artist={song.artist} time={song.time} audio={song.audio} destination={song.destination} />
                );
              })}
            </div>
          </div>
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