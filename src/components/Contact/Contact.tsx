import styles from './Contact.module.scss';

const CONTACT_ITEMS = [
  { label: 'EMAIL', value: 's.danielius8@gmail.com', href: 'mailto:s.danielius8@gmail.com' },
  { label: 'PHONE', value: '+370 635 42429', href: 'tel:+37063542429' },
  { label: 'LOCATION', value: 'Lithuania', href: null },
  { label: 'AVAILABILITY', value: 'Open to opportunities', href: null, accent: true },
];

const Contact = () => {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.left}>
        <h2 className={styles.heading}>
          Let's build<br />
          something<br />
          <span className={styles.accent}>great.</span>
        </h2>
        <a href="mailto:s.danielius8@gmail.com" className={styles.cta}>
          Get in touch
        </a>
      </div>

      <div className={styles.right}>
        {CONTACT_ITEMS.map(({ label, value, href, accent }) => (
          <div key={label} className={styles.item}>
            <span className={styles.label}>{label}</span>
            {href ? (
              <a href={href} className={styles.value}>
                {value}
              </a>
            ) : (
              <span className={`${styles.value} ${accent ? styles.valueAccent : ''}`}>
                {value}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
