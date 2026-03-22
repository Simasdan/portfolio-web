import { useEffect, useRef, useState } from 'react';
import styles from './Hero.module.scss';
import profilePhoto from '../../assets/images/profilio.jpg';

const TYPED_PART1 = 'Simonas\nDaniel';
const TYPED_PART2 = 'ius\n— Dev.';
const FULL_TEXT = TYPED_PART1 + TYPED_PART2;

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const Hero = () => {
  const [typedCount, setTypedCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        setTypedCount(indexRef.current);
        if (indexRef.current >= FULL_TEXT.length) clearInterval(interval);
      }, 70);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (typedCount < FULL_TEXT.length) return;
    const duration = 800;
    const steps = 20;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setProjectCount(Math.round((8 * step) / steps));
      setYearCount(Math.round((2 * step) / steps));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [typedCount]);

  const renderName = () => {
    const typed = FULL_TEXT.slice(0, typedCount);
    const done = typedCount >= FULL_TEXT.length;

    if (typedCount <= TYPED_PART1.length) {
      return (
        <>
          {typed.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
          <span className={styles.cursor} />
        </>
      );
    }

    const accentPart = typed.slice(TYPED_PART1.length);
    return (
      <>
        {TYPED_PART1.split('\n').map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
        <span className={styles.accent}>
          {accentPart.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </span>
        {!done && <span className={styles.cursor} />}
      </>
    );
  };

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Available for work
        </div>

        <h1 className={styles.name}>{renderName()}</h1>

        <div className={styles.bottom}>
          <p className={styles.bio}>
            Full-stack web developer building pixel-perfect products with React,
            TypeScript &amp; .NET. Based in Lithuania.
          </p>
          <div className={styles.socials}>
            <a
              href="https://github.com/Simasdan/portfolio-projects"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/simonas-danielius-75582a229/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.photoArea}>
          <div className={styles.photoRing}>
            <img src={profilePhoto} alt="Simonas Danielius" className={styles.photo} />
          </div>
          <div className={styles.accentBar} />
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>{projectCount}+</span>
            <span className={styles.statLabel}>Projects shipped</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>{yearCount}+</span>
            <span className={styles.statLabel}>Years building</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
