import styles from '../styles/Photos.module.css';
import { useState } from 'react';
import carouselStyles from '../styles/Carousel.module.css';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

/* eslint-disable @next/next/no-img-element */

export default function PictureCard(props) {
  const [liked, setLiked] = useState(false);

  const heartId = "fadeHeart" + props.index;

  const switchLiked = () => {
    setLiked(!liked);
  }
  const like = async () => {
    setLiked(true);

    var heart = document.getElementById(heartId);
    console.log(heartId);
    setTimeout(() => {
      heart.style.opacity = 0;
    }, 1000);
    heart.style.opacity = 0.8;
  }

  const getPhotos = photos => {
    if (photos.length == 1) {
      return (
        <div style={{ position: "relative" }} onDoubleClick={like}>
          <div className={styles.fadeHeartContainer}>
            <img src="/fade-heart.png" alt="heart" id={heartId} className={`${styles.fadeHeart} ${styles.unselectable}`} />
          </div>
          <img src={photos[0]} alt="photo" className={styles.image} />
        </div>
      );
    }
    return (
      <CarouselProvider
        naturalSlideWidth={480}
        naturalSlideHeight={480 * props.ratio}
        totalSlides={photos.length}
        visibleSlides={1}
        className={styles.carouselContainer}
      >
        <div className={styles.fadeHeartContainer}>
          <img src="/fade-heart.png" alt="heart" id={heartId} className={styles.fadeHeart} onDoubleClick={like} />
        </div>
        <Slider>
          {photos.map((photo, i) => {
            return (
              <Slide index={i} key={i}>
                <div className={carouselStyles.photosSlide} style={{ height: `${43 * props.ratio}vh`}} onDoubleClick={like}>
                  <img src={photo} alt="photo" className={styles.image} />
                </div>
              </Slide>
            );
          })}
        </Slider>
        <div className={styles.dots}>
          {photos.map((_, i) => {
            return (
              <>
                <Dot className={`clear_styles carousel__dot`} slide={i} key={i} />
                <style jsx global>{`
                  .clear_styles {
                    border-color: transparent; 
                    background-color: transparent;
                    width: 0;
                    height: 0;
                    border-radius: 0;
                    border-width: 0;
                    padding: 0;
                  }
                  .carousel__dot {
                    height: 0.6vh;
                    width: 0.6vh;
                    border-radius: 0.3vh;
                    margin-left: 0.2vh;
                    margin-right: 0.2vh;
                    background-color: #A8A8A8;
                  }
                  .carousel__dot--selected {
                    background-color: #0095F6;
                  }
                `}</style>
              </>
            );
          })}
        </div>
      </CarouselProvider>
    );
  }
  const getHeart = () => {
    if (liked) {
      return <img src="/liked.png" alt="heart" className={styles.heartIcon} onClick={switchLiked} />
    }
    return <img src="/not-liked.png" alt="heart" className={styles.heartIcon} onClick={switchLiked} />
  }
  return (
    <div className={styles.imageCard} >
      <div className={styles.line} />
      <div className={styles.imageHeaderContainer}>
        <div className={styles.imageHeaderIcon} />
        <div className={styles.imageHeader}>
          he.is.john
        </div>
      </div>
      {getPhotos(props.photos)}
      <div className={styles.descriptionContainer}>
        {getHeart()}
        <p className={styles.description}>
          <b>he.is.john</b>{" "}
          {props.description}
        </p>
        <p className={styles.date}>
          {props.date}
        </p>
      </div>
    </div>
  )
}
