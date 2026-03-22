import styles from './Footer.module.scss';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© 2026 SIMDAN</span>
      <button className={styles.backToTop} onClick={scrollToTop}>
        Back to top ↑
      </button>
    </footer>
  );
};

export default Footer;
