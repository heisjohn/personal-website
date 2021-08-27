import PhoneLayout from '../components/PhoneLayout.js';
import AppIcon from '../components/AppIcon.js';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <PhoneLayout backgroundImage="url(/background.png)" content={(
      <>
        <div className={styles.appContainer}>
          <div>
            <div className={styles.appRow}>
              <AppIcon destination={"/about"} name="About Me" destinationInSite={true} image="/icons/me.png" />
              <AppIcon destination={"/resume.pdf"} name="Resume" destinationInSite={false} image="/icons/resume.png" />
              <AppIcon destination={"https://www.linkedin.com/in/he-john/"} name="LinkedIn" destinationInSite={false} image="/icons/linkedin.png" />
              <AppIcon destination={"https://github.com/heisjohn/personal-website/"} name="Github" destinationInSite={false} image="/icons/github.png" />
            </div>
            <div className={styles.appRow}>
              <AppIcon destination={"/photos"} name="Photos" destinationInSite={true} image="/icons/gallery.png" />
              <AppIcon destination={"/music/albums-and-artists"} name="Music" destinationInSite={true} image="/icons/music.png" />
              <AppIcon destination={"/movies"} name="Movies" destinationInSite={true} image="/icons/movies.png" />
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.appRow}>
            <AppIcon destination={"/resume.pdf"} name="" destinationInSite={false} image="/icons/resume.png" bottom />
            <AppIcon destination={"/about"} name="" destinationInSite={true} image="/icons/me.png" bottom />
            <AppIcon destination={"https://www.linkedin.com/in/he-john/"} name="" destinationInSite={false} image="/icons/linkedin.png" bottom />
          </div>
        </div>
      </>
    )} />
  );
}

export default Home;