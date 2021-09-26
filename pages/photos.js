import PhoneLayout from '../components/PhoneLayout.js';
import styles from '../styles/Photos.module.css';
import PictureCard from '../components/PictureCard.js';
import Head from 'next/head';

/* eslint-disable @next/next/no-img-element */

const Photos = () => {
  const posts = [{ photos: ["/photos/petrified.jpg"], description: "Petrified Forest National Park", date: "2021, SECOND YEAR OF COLLEGE", ratio: 1 },
                { photos: ["/photos/sequoia.jpg", "/photos/sequoia-2.jpg"], description: "Large trees at Sequoia National Park", date: "2021, SECOND YEAR OF COLLEGE", ratio: 1.35 },
                { photos: ["/photos/san-francisco.jpg"], description: "By the Golden Gate Bridge in San Francisco", date: "2021, SECOND YEAR OF COLLEGE", ratio: 1 },
                { photos: ["/photos/saguaro.jpg", "/photos/saguaro-3.jpg"], description: "Large cacti at Saguaro National Park", date: "2021, SECOND YEAR OF COLLEGE", ratio: 1.4 },
                { photos: ["/photos/white-sands.jpg", "/photos/white-sands-2.jpg",], description: "Sledding at White Sands National Park", date: "2021, SECOND YEAR OF COLLEGE", ratio: 1.2 },
                { photos: ["/photos/turnabout.jpg", "/photos/math-team-2.jpg"], description: "My final Turnabout and my final Math Team meet (where we placed 1st in the state!)", date: "2019, SENIOR YEAR OF HIGH SCHOOL", ratio: 0.8 },
                { photos: ["/photos/math-team.jpg"], description: "Me and Desi Nainar (#1 two person team) at the Math Team state competition", date: "2017, SOPHOMORE YEAR OF HIGH SCHOOL", ratio: 1 }]
  return (
    <PhoneLayout headerOpacity={0.5} content={(
      <>
        <Head>
          <title>John He | Photos</title>
          <meta property="og:title" content="John He | Photos" key="title" />
        </Head>
        <div className={styles.outerContainer}>
          <div className={styles.header}>
            <img src="/photos-logo.png" alt="photo" className={styles.logo} />
            <div className={styles.line} />
          </div>
          <div className={styles.main}>
            {posts.map((post, i) => {
              return (
                <PictureCard photos={post.photos} description={post.description} date={post.date} ratio={post.ratio} index={i} key={i} />
              );
            })}
          </div>
        </div>
      </>
    )} />
  );
}

export default Photos;