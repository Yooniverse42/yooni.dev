import { certifications } from '@/data/resumeCards';
import styles from '@/components/CertificationCard/CertificationCard.module.css';
import clsx from 'clsx';

export default function CertificationCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={styles.container}>
      {certifications.map((card) => (
        <article className={clsx(styles.wrapper, 'flexCenter', className)}>
          <h4 className={styles.name}>{card.name}</h4>
          <p className={styles.certIssuer}>{card.certIssuer}</p>
          <p className={styles.certDate}>{card.certDate}</p>
        </article>
      ))}
    </div>
  );
}
