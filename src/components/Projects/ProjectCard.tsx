import { Project } from '../../types';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  isMobile: boolean;
}

const ProjectCard = ({ project, onOpen, isMobile }: ProjectCardProps) => {
  const handleClick = () => onOpen(project);

  if (isMobile) {
    return (
      <div className={styles.card} onClick={handleClick}>
        <div className={styles.front}>
          <div className={styles.imgArea}>
            <span className={styles.num}>{project.num}</span>
            <img src={project.image} alt={project.title} className={styles.cardImg} />
            <span className={styles.flipHint}>↺ flip</span>
            <div className={styles.imgLine} />
          </div>
          <div className={styles.body}>
            <div className={styles.bodyHeader}>
              <span className={styles.name}>{project.title}</span>
              <span className={styles.arrow}>↗</span>
            </div>
            <span className={styles.stack}>
              {project.techStack.join(' · ')}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.flipWrap}
      onClick={handleClick}
    >
      <div className={styles.flipInner}>
        <div className={styles.front}>
          <div className={styles.imgArea}>
            <span className={styles.num}>{project.num}</span>
            <img src={project.image} alt={project.title} className={styles.cardImg} />
            <span className={styles.flipHint}>↺ flip</span>
            <div className={styles.imgLine} />
          </div>
          <div className={styles.body}>
            <div className={styles.bodyHeader}>
              <span className={styles.name}>{project.title}</span>
              <span className={styles.arrow}>↗</span>
            </div>
            <span className={styles.stack}>
              {project.techStack.join(' · ')}
            </span>
          </div>
        </div>

        <div className={styles.back}>
          <span className={styles.backIcon}>→</span>
          <span className={styles.backLabel}>opening details</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
