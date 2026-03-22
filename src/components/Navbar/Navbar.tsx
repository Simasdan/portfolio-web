import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  onNavClick: (section: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', section: 'hero' },
  { label: 'Tech stack', section: 'tech-stack' },
  { label: 'Certificates', section: 'certificates' },
  { label: 'Projects', section: 'projects' },
];

const Navbar = ({ onNavClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onNavClick(section);
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <span className={styles.brand}>SIMDAN</span>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(({ label, section }) => (
            <li key={section}>
              <button className={styles.link} onClick={() => handleNavClick(section)}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={styles.cta}
          onClick={() => handleNavClick('contact')}
        >
          Contact me
        </button>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map(({ label, section }) => (
            <button
              key={section}
              className={styles.mobileLink}
              onClick={() => handleNavClick(section)}
            >
              {label}
            </button>
          ))}
          <button
            className={styles.mobileCta}
            onClick={() => handleNavClick('contact')}
          >
            Contact me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
