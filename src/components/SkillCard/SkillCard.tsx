import styles from '@/components/SkillCard/SkillCard.module.css';
import { skillCards } from '@/data/resumeCards';
import Icon from '@/components/Icon/Icon';

export default function SkillCard() {
  return (
    <div className={styles.container}>
      {skillCards.map((card) => (
        <article key={card.title} className={styles.cardWrapper}>
          <h4 className={styles.title}>
            {card.title}
            <Icon icon={card.icon} size={16} className={styles.icon} />
          </h4>
          <ul className={styles.tagWrapper}>
            {card.skill.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
