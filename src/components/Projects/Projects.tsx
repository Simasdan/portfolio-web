import { useState, useEffect } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';
import ProjectDrawer from './ProjectDrawer';
import styles from './Projects.module.scss';

const MOBILE_BREAKPOINT = 600;

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpen = (project: Project) => {
    setActiveProject(project);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <span className={styles.title}>PROJECTS</span>
        <span className={styles.hint}>
          {isMobile ? 'tap to explore' : 'hover to flip · click to explore'}
        </span>
      </div>

      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={handleOpen}
            isMobile={isMobile}
          />
        ))}
      </div>

      <ProjectDrawer project={activeProject} onClose={handleClose} />
    </section>
  );
};

export default Projects;
