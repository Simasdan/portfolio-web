import { useEffect } from 'react';
import { Project } from '../../types';
import styles from './ProjectDrawer.module.scss';

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDrawer = ({ project, onClose }: ProjectDrawerProps) => {
  const isOpen = project !== null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={onClose}
      />

      <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        {project && (
          <>
            <div className={styles.header}>
              <div className={styles.headerTop}>
                <button className={styles.closeBtn} onClick={onClose}>
                  ← close
                </button>
                <span className={styles.tag}>PROJECT {project.num}</span>
              </div>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.stack}>
                Stack:{' '}
                <span>{project.techStack.join(' · ')}</span>
              </p>
            </div>

            <div className={styles.body}>
              <p className={styles.descLabel}>ABOUT</p>
              <p className={styles.desc}>{project.description}</p>
            </div>

            <div className={styles.footer}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} ${styles.linkLive}`}
              >
                Live preview
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} ${styles.linkCode}`}
              >
                View code
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default ProjectDrawer;
