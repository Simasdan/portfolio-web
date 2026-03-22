import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TechStack from './components/TechStack/TechStack';
import Certificates from './components/Certificates/Certificates';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

const App = () => {
  const handleNavClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      <main>
        <div className={styles.container}>
          <div id="hero">
            <Hero />
          </div>
          <TechStack />
          <Certificates />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
