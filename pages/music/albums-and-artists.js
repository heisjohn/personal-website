import PhoneLayout from '../../components/PhoneLayout.js';
import styles from '../../styles/Music.module.css';
import MusicArtist from '../../components/MusicArtist.js';
import MusicAlbum from '../../components/MusicAlbum.js';
import carouselStyles from '../../styles/Carousel.module.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Link from 'next/link';
import Head from 'next/head';

const AlbumsAndArtists = () => {
  const artists = [{'image': "/artists/james-murphy.jpg", 'name': "LCD Soundsystem", 'link': 'https://www.youtube.com/watch?v=a9wnbPUgq6c&ab_channel=MaxKippax'},
                   {'image': "/artists/anderson.jpg", 'name': "Anderson .Paak", 'link': 'https://www.youtube.com/watch?v=ferZnZ0_rSM&ab_channel=NPRMusic'},
                   {'image': "/artists/talking-heads.jpg", 'name': "Talking Heads", 'link': 'https://youtu.be/bE1Ro_wPGIU?t=20'},
                   {'image': "/artists/kendrick.jpg", 'name': "Kendrick Lamar", 'link': 'https://youtu.be/WPZJbfaXy60?t=130'},
                   {'image': "/artists/kanye.jpg", 'name': "Kanye West", 'link': 'https://youtu.be/7gHisR4xmOk?t=245'},
                   {'image': "/artists/arcade-fire.jpg", 'name': "Arcade Fire", 'link': 'https://www.youtube.com/watch?v=Ie0EJPcaeSQ&ab_channel=ApartmentSessions'}]
  const albums = [{'image': "/albums/malibu.jpg", 'name': "Malibu", 'artist': "Anderson .Paak", 'link': "https://www.youtube.com/watch?v=KXdW0g6jAxE&list=PLkLZNGcjKAQ_T6e9HD9YRiUcE85vouttE&ab_channel=AndersonPaak"},
                  {'image': "/albums/remain-in-light.jpg", 'name': "Remain in Light", 'artist': "Talking Heads", 'link': "https://www.youtube.com/watch?v=w6T_X7MXg40&list=PLfimnwaZdumi5_CxCzqG3Mpv1PqHvr2VW&ab_channel=TalkingHeads-Topic"},
                  {'image': "/albums/careful-kid.jpg", 'name': "Careful Kid", 'artist': "Yabadum", 'link': "https://www.youtube.com/watch?v=VxJbIJhImTU&list=PLCLwExT8jp9MSlpUD2ps_8jYqFix1XiBX&ab_channel=owenlewis"},
                  {'image': "/albums/discovery.jpg", 'name': "Discovery", 'artist': "Daft Punk", 'link': "https://www.youtube.com/watch?v=A2VpR8HahKc&list=PLSdoVPM5WnndSQEXRz704yQkKwx76GvPV&ab_channel=DaftPunk"},
                  {'image': "/albums/late-registration.jpg", 'name': "Late Registration", 'artist': "Kanye West", 'link': "https://www.youtube.com/watch?v=R6dH8iBHzb4&list=PL8YH4mOwWryV4dtuaLQP1d4dsgW0ZmJl5&index=2&ab_channel=KanyeWest-Topic"},]
  return (
    <PhoneLayout headerOpacity={0.30} content={(
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <Head>
            <title>John He | Music</title>
            <meta property="og:title" content="John He | Music" key="title" />
          </Head>
          <h1 className={styles.heading}>
            Favorite artists
          </h1>
          <p className={styles.descriptionText}>
            And some of my favorite videos of them
          </p>
          <div className={styles.carouselContainer}>
            <CarouselProvider
              naturalSlideWidth={200}
              naturalSlideHeight={200}
              totalSlides={6}
              visibleSlides={2}
            >
              <Slider >
                {artists.map((artist, i) => {
                  return (
                    <Slide index={i} key={i}>
                      <MusicArtist image={artist.image} name={artist.name} destination={artist.link} />
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
              totalSlides={5}
              visibleSlides={2}
            >
              <Slider className={styles.albumSlider}>
                {albums.map((album, i) => {
                  return (
                    <Slide index={i} key={i}>
                      <MusicAlbum image={album.image} name={album.name} artist={album.artist} destination={album.link} />
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
          <div className={styles.bottomBar} style={{ position: "absolute", bottom: 0 }}>
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
      </div>
    )} />
  );
}

export default AlbumsAndArtists;