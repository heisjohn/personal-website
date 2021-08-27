import PhoneLayout from '../components/PhoneLayout.js';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <PhoneLayout backgroundImage="radial-gradient(#35363A, #35363A)" content={(
      <div className={styles.container}>
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
             I am a Sophomore undergraduate student at the University of California, Berkeley where I am pursuing a bachelor&apos;s degree in computer science. I intend to eventually take 
             machine learning related classes. Outside of school, I work part-time as a full-stack app developer at{` `}
             <a href="https://www.doriot.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Doriot</a>, a startup based in Indiana University, where I am 
             working with a team to create an educational app about startup investing. <br/><br/>In my free time I enjoy playing chess casually (about 1900 ELO on{` `}
             <a href="https://lichess.org/" target="_blank" rel="noopener noreferrer" className={styles.link}>lichess</a>), playing video games, watching movies, 
             and discovering new music.</p>
        </div>
        <div>

        </div>
      </div>
    )} />
  );
}

export default About;