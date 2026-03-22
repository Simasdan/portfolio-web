import { techStack } from '../../data/techStack';
import styles from './TechStack.module.scss';

const TechStack = () => {
  return (
    <section className={styles.section} id="tech-stack">
      <div className={styles.header}>
        <span className={styles.title}>TECH STACK</span>
        <span className={styles.count}>{techStack.length} technologies</span>
      </div>

      <ul className={styles.grid}>
        {techStack.map(({ name, category }) => (
          <li key={name} className={styles.item}>
            <span className={styles.name}>{name}</span>
            <span className={styles.category}>{category}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStack;
