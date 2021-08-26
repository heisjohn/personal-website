import PhoneLayout from '../components/PhoneLayout.js';
import styles from '../styles/Photos.module.css';
import carouselStyles from '../styles/Carousel.module.css';
import { useState } from 'react';

const Photos = () => {
  const photos = ["/photos/math-team.jpg", "/photos/turnabout.jpg", "/photos/rei-tan.jpg", "/photos/white-sands.jpg", "/photos/white-sands-2.jpg", "/photos/saguaro.jpg", "/photos/saguaro-2.jpg", "/photos/saguaro-3.jpg"];
  const descriptions = ["Me and Desi Nainar (#1 two person team) at the Math Team state competition, Sophomore year of high school",
                        "Turnabout, Senior year of high school",
                        "Me and Rei Tan at a party, Senior year of high school",
                        "White Sands National Park, Sophomore year of college",
                        "White Sands National Park, Sophomore year of college",
                        "Saguaro National Park, Sophomore year of college",
                        "Saguaro National Park, Sophomore year of college",
                        "Saguaro National Park, Sophomore year of college"]
  const [index, setIndex] = useState(photos.length - 1);

  const goLeft = () => {
    if (index === 0) {
      setIndex(photos.length);
    } else {
      setIndex(index - 1);
    }
  }

  const goRight = () => {
    setIndex(index + 1);
  }

  const i = index % photos.length;
  
  return (
    <PhoneLayout backgroundImage="radial-gradient(#333438, #202125)" content={(
      <>
        <div className={styles.header}>
          <h1 className={styles.title}>Photos</h1>
        </div>
        <div className={styles.carouselContainer}>
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos[i]} alt={descriptions[i]} className={styles.image} /> 
          <div className={`${carouselStyles.arrowContainer} ${carouselStyles.left}`} onClick={goRight}>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img src="/left-arrow.png" alt="left" className={carouselStyles.arrow} />
          </div>
          <div className={`${carouselStyles.arrowContainer} ${carouselStyles.right}`} onClick={goLeft}>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img src="/right-arrow.png" alt="right" className={carouselStyles.arrow} />
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <p1 className={styles.caption}>{descriptions[i]}</p1>
        </div>
      </>
    )} />
  );
}

export default Photos;