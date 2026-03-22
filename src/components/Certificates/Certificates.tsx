import { useState } from 'react';
import { certificates } from '../../data/certificates';
import styles from './Certificates.module.scss';

const Certificates = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className={styles.section} id="certificates">
      <div className={styles.header}>
        <span className={styles.title}>CERTIFICATES</span>
        <span className={styles.count}>{certificates.length} certificates</span>
      </div>

      <div className={styles.grid}>
        {certificates.map(({ id, title, issuer, image }) => (
          <div
            key={id}
            className={styles.card}
            onClick={() => setActiveImage(image)}
          >
            <div className={styles.preview}>
              <img src={image} alt={title} className={styles.thumbnail} />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>View</span>
              </div>
            </div>
            <div className={styles.info}>
              <span className={styles.certTitle}>{title}</span>
              <span className={styles.issuer}>{issuer}</span>
            </div>
          </div>
        ))}
      </div>

      {activeImage && (
        <div className={styles.lightbox} onClick={() => setActiveImage(null)}>
          <button
            className={styles.lightboxClose}
            onClick={() => setActiveImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={activeImage}
            alt="Certificate"
            className={styles.lightboxImg}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
