import PhoneLayout from '../components/PhoneLayout.js';
import styles from '../styles/Movies.module.css';
import carouselStyles from '../styles/Carousel.module.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useState } from 'react';
import Head from 'next/head';

/* eslint-disable @next/next/no-img-element */

const Movies = () => {
  const movies = [{ image: "/movie-posters/gone-girl.jpg", name: "Gone Girl", trailer: "https://www.youtube.com/embed/2-_-1nJf8Vg"},
                  { image: "/movie-posters/memento.jpg", name: "Memento", trailer: "https://www.youtube.com/embed/4CV41hoyS8A" },
                  { image: "/movie-posters/three-billboards.jpg", name: "Three Billboards Outside Ebbing, Missouri", trailer: "https://www.youtube.com/embed/Jit3YhGx5pU" },
                  { image: "/movie-posters/miracle.jpg", name: "Miracle in Cell No.7", trailer: "https://www.youtube.com/embed/rAsBlmSIksk" },
                  { image: "/movie-posters/district-9.jpg", name: "District 9", trailer: "https://www.youtube.com/embed/DyLUwOcR5pk" },
                  { image: "/movie-posters/pancreas.jpg", name: "I Want to Eat Your Pancreas", trailer: "https://www.youtube.com/embed/MmoBvmJA9XI" },
                  { image: "/movie-posters/training-day.jpg", name: "Training Day", trailer: "https://www.youtube.com/embed/DXPJqRtkDP0" },
                  { image: "/movie-posters/28-days-later.jpg", name: "28 Days Later", trailer: "https://www.youtube.com/embed/FcDhdb6J3rM" },
                  { image: "/movie-posters/requiem.jpg", name: "Requiem for a Dream", trailer: "https://www.youtube.com/embed/QBwzN4v1vA0" }];
  const [trailer, setTrailer] = useState(movies[0].trailer);
  return (
    <PhoneLayout headerOpacity={0} content={(
      <>
        <Head>
          <title>John He | Movies</title>
          <meta property="og:title" content="John He | Movies" key="title" />
        </Head>
        <div className={styles.outerContainer}>
          <div className={styles.header}>
            <img className={styles.image} src="/movies-title.png" alt="movies" />
          </div>
          <iframe className={styles.trailer}
            src={trailer}>
          </iframe>
          <h1 className={styles.title}>
            Favorites
          </h1>
          <div className={styles.carouselContainer}>
            <CarouselProvider
              naturalSlideWidth={480}
              naturalSlideHeight={720}
              totalSlides={9}
              visibleSlides={3}
              infinite
              className={styles.carousel}
            >
              <Slider>
                {movies.map((movie, i) => {
                  return (
                    <Slide index={i} key={i}>
                      <img className={styles.poster} src={movie.image} alt={movie.name} onClick={() => {setTrailer(movie.trailer)}}/>
                    </Slide>
                  );
                })}
              </Slider>
              <ButtonBack className={carouselStyles.hiddenButton}>
                <div className={`${carouselStyles.arrowContainer} ${carouselStyles.left} ${carouselStyles.moviesLeft}`}>
                  <img src="/left-arrow.png" alt="left" className={carouselStyles.arrow} />
                </div>
              </ButtonBack>
              <ButtonNext className={carouselStyles.hiddenButton}>
                <div className={`${carouselStyles.arrowContainer} ${carouselStyles.right} ${carouselStyles.moviesRight}`}>
                  <img src="/right-arrow.png" alt="right" className={carouselStyles.arrow} />
                </div>
              </ButtonNext>
            </CarouselProvider>
          </div>
        </div>  
      </>
    )} />
  );
}

export default Movies;