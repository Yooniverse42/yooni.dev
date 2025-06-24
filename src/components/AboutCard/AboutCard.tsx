import styles from '@/components/AboutCard/AboutCard.module.css';
import clsx from 'clsx';
import { aboutCardList } from '@/data';
import type { AboutCardKey } from '@/types';

export default function AboutCard({ icon }: { icon: AboutCardKey }) {
  const currentCard = aboutCardList[icon];

  return (
    <div className={styles.container}>
      <div className={clsx(currentCard.changeIcon && styles.iconWrapper)}>
        <img
          src={currentCard.src}
          alt={currentCard.alt}
          className={styles.icon}
          aria-hidden={true}
        />
      </div>
      <div
        className={clsx(
          styles.titleWrapper,
          currentCard.changeIcon && styles.responsiveTitle,
        )}
      >
        <h3 className={styles.title}>{currentCard.title}</h3>
        <div className={styles.descWrapper}>
          {currentCard.desc.map((description, idx) => (
            <p key={idx} className={styles.desc}>
              {description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
