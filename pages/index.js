import PhoneLayout from '../components/PhoneLayout.js';
import AppIcon from '../components/AppIcon.js';
import styles from '../styles/Home.module.css';

const Page = () => {
  return (
    <PhoneLayout backgroundImage="/background.png" content={(
      <>
        <div className={styles.appContainer}>
          <div>
            <div className={styles.appRow}>
              <AppIcon destination={"http://google.com/"} name="About Me" destinationInSite={true} image="/me.png" />
              <AppIcon destination={"/resume.pdf"} name="Resume" destinationInSite={false} image="/resume.png" />
              <AppIcon destination={"http://google.com/"} name="LinkedIn" destinationInSite={false} image="/linkedin.png" />
              <AppIcon destination={"https://github.com/heisjohn/personal-website/"} name="Github" destinationInSite={false} image="/github.png" />
            </div>
            <div className={styles.appRow}>
              <AppIcon destination={"http://google.com/"} name="Photos" destinationInSite={true} image="/gallery.png" />
              <AppIcon destination={"http://google.com/"} name="Music" destinationInSite={true} image="/music.png" />
              <AppIcon destination={"http://google.com/"} name="Movies" destinationInSite={true} image="/movies.png" />
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.appRow}>
            <AppIcon destination={"http://google.com/"} name="" destinationInSite={true} image="/me.png" />
            <AppIcon destination={"/resume.pdf"} name="" destinationInSite={false} image="/resume.png" />
            <AppIcon destination={"http://google.com/"} name="" destinationInSite={false} image="/linkedin.png" />
          </div>
        </div>
      </>
    )} />
  );
}

export default Page;