import PhoneLayout from '../components/PhoneLayout.js';
import styles from '../styles/About.module.css';
import Head from 'next/head';

const About = () => {
  return (
    <PhoneLayout headerOpacity={0.4} content={(
      <div className={styles.outerContainer}>
        <div className={styles.container}>
          <Head>
            <title>John He | About</title>
            <meta property="og:title" content="John He | About" key="title" />
          </Head>
          <div className={styles.header}>
            <h1 className={styles.heading}>A</h1>
            <h1 className={styles.heading} style={{ fontVariant: 'small-caps', marginRight: "0.6vh" }}>bout</h1>
            <h1 className={styles.heading}>M</h1>
            <h1 className={styles.heading} style={{ fontVariant: 'small-caps' }}>e</h1>
          </div>
          <div className={styles.mainContainer}>
            <h1 className={styles.name}>John He</h1>
            <div className={styles.line} />
            <p className={styles.description}>Hi! I&apos;m <b>John He</b>. I was raised in Libertyville, Illinois (a northern Chicago suburb) for the first 19 years of my life
              - including my first online year of college. I attended Libertyville High School, where I took my first four computer science classes (shoutout to Ms. Elmore!). 
              I also played clarinet in the band and participated in Math Team, Coding Cats, Worldwide Youth in Science and Engineering, and Chess Club. <br/><br/> Currently, 
              I am a Junior undergraduate student at the University of California, Berkeley where I am pursuing a bachelor&apos;s degree in computer science. I intend to 
              focus on machine learning in my upper-division courses. Next summer, I will be working as a software engineering intern at Roblox. In the past, I have worked as full-stack software engineer at{` `}
              <a href="https://www.doriot.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Doriot</a>, a startup based at Indiana University, where I helped develop Fantasy Startup, 
              an educational app about startup investing. <br/><br/>In my free time I enjoy playing chess casually (nearing 2000 ELO on{` `}
              <a href="https://lichess.org/@/johnhe" target="_blank" rel="noopener noreferrer" className={styles.link}>lichess</a>), playing video games, watching movies, 
              and listening to all genres of music.</p>
            <div className={styles.infoContainer}>
              <div className={styles.centered}>
                <p className={`${styles.description} ${styles.infoTitle}`}><b>John He</b></p>
              </div>
              <div className={styles.infoLine} />
              <div className={styles.centered}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.image} src="/me-about.jpg" alt="me" />
                <p className={styles.description} style={{ marginTop: "0.2vh", marginBottom: "0.6vh" }}>Turnabout, Senior year high school</p>
              </div>
              <div className={styles.infoLine} />
              <div className={styles.infoRow}>
                <div className={styles.infoColumn}>
                  <p className={styles.infoTextLeft}><b>Born</b></p>
                </div>
                <div className={styles.infoColumn}>
                <p className={styles.infoTextRight}>September 2001 (age 20) <br /> Evanston, Illinois</p>
                </div>
              </div>
              <div className={styles.infoLine} />
              <div className={styles.infoRow}>
                <div className={styles.infoColumn}>
                  <p className={styles.infoTextLeft}><b>Education</b></p>
                </div>
                <div className={styles.infoColumn}>
                  <p className={styles.infoTextRight}>Libertyville High School<br/>University of California, Berkeley</p>
                </div>
              </div>
              <div className={styles.infoLine} />
              <div className={styles.infoRow}>
                <div className={styles.infoColumn}>
                  <p className={styles.infoTextLeft}><b>Siblings</b></p>
                </div>
                <div className={styles.infoColumn}>
                  <p className={styles.infoTextRight}><a href="https://www.linkedin.com/in/james-he/" target="_blank" rel="noopener noreferrer" className={styles.link}>James He</a></p>
                </div>
              </div>
              <div className={styles.infoLine} />
              <div className={styles.infoRow}>
                <div className={styles.infoColumn}>
                  <p className={styles.infoTextLeft}><b>Skills</b></p>
                </div>
                <div className={styles.infoColumn}>
                  <p className={styles.infoTextRight}>Python, Java, JavaScript, C, C#<br />React Native, React, Next.js<br />HTML, CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )} />
  );
}

export default About;