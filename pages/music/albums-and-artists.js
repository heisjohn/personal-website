import PhoneLayout from '../../components/PhoneLayout.js';
import styles from '../../styles/Music.module.css';
import MusicArtist from '../../components/MusicArtist.js';
import MusicAlbum from '../../components/MusicAlbum.js';
import carouselStyles from '../../styles/Carousel.module.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Link from 'next/link';

const AlbumsAndArtists = () => {
  const artists = [{'image': "/artists/james-murphy.jpg", 'name': "LCD Soundsystem"},
                   {'image': "/artists/anderson.jpg", 'name': "Anderson .Paak"},
                   {'image': "/artists/talking-heads.jpg", 'name': "Talking Heads"},
                   {'image': "/artists/kendrick.jpg", 'name': "Kendrick Lamar"},
                   {'image': "/artists/arcade-fire.jpg", 'name': "Arcade Fire"}]
  const albums = [{'image': "/albums/malibu.jpg", 'name': "Malibu", 'artist': "Anderson .Paak"},
                  {'image': "/albums/remain-in-light.jpg", 'name': "Remain in Light", 'artist': "Talking Heads"},
                  {'image': "/albums/careful-kid.jpg", 'name': "Careful Kid", 'artist': "Yabadum"},
                  {'image': "/albums/discovery.jpg", 'name': "Discovery", 'artist': "Daft Punk"}]
  return (
    <PhoneLayout backgroundImage="linear-gradient(#333438, #121212)" content={(
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Favorite artists
        </h1>
        <div className={styles.carouselContainer}>
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={200}
            totalSlides={5}
            visibleSlides={2}
          >
            <Slider >
              {artists.map((artist, i) => {
                return (
                  <Slide index={i} key={i}>
                    <MusicArtist image={artist.image} name={artist.name} />
                  </Slide>
                );
              })}
            </Slider>
            <ButtonBack className={carouselStyles.hiddenButton}>
              <div className={`${carouselStyles.arrowContainer} ${carouselStyles.left} ${carouselStyles.musicLeft}`}>
                {/*eslint-disable-next-line @next/next/no-img-element */}
                <img src="/left-arrow.png" alt="left" className={carouselStyles.arrow} />
              </div>
            </ButtonBack>
            <ButtonNext className={carouselStyles.hiddenButton}>
              <div className={`${carouselStyles.arrowContainer} ${carouselStyles.right} ${carouselStyles.musicRight}`}>
                {/*eslint-disable-next-line @next/next/no-img-element */}
                <img src="/right-arrow.png" alt="right" className={carouselStyles.arrow} />
              </div>
            </ButtonNext>
          </CarouselProvider>
        </div>
        <h1 className={styles.heading}>
          Favorite albums
        </h1>
        <div className={styles.carouselContainer}>
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={216}
            totalSlides={4}
            visibleSlides={2}
          >
            <Slider className={styles.albumSlider}>
              {albums.map((album, i) => {
                return (
                  <Slide index={i} key={i}>
                    <MusicAlbum image={album.image} name={album.name} artist={album.artist} />
                  </Slide>
                );
              })}
            </Slider>
            <ButtonBack className={carouselStyles.hiddenButton}>
              <div className={`${carouselStyles.arrowContainer} ${carouselStyles.left} ${carouselStyles.musicLeft}`}>
                {/*eslint-disable-next-line @next/next/no-img-element */}
                <img src="/left-arrow.png" alt="left" className={carouselStyles.arrow} />
              </div>
            </ButtonBack>
            <ButtonNext className={carouselStyles.hiddenButton}>
              <div className={`${carouselStyles.arrowContainer} ${carouselStyles.right} ${carouselStyles.musicRight}`}>
                {/*eslint-disable-next-line @next/next/no-img-element */}
                <img src="/right-arrow.png" alt="right" className={carouselStyles.arrow} />
              </div>
            </ButtonNext>
          </CarouselProvider>
        </div>
        <div className={styles.bottomBar}>
          <div className={`${styles.bottomButton} ${styles.selected}`}>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img src="/album.png" alt="album" className={styles.bottomIcon} />
            <p className={styles.bottomText}>Albums and Artists</p>
          </div>
          <Link href="/music/songs" passHref>
            <div className={`${styles.bottomButton} ${styles.unselected}`}>
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img src="/song.png" alt="song" className={styles.bottomIcon} />
              <p className={styles.bottomText}>Songs</p>
            </div>
          </Link>
        </div>
      </div>
    )} />
  );
}

export default AlbumsAndArtists;