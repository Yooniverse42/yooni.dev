import styles from '@/components/ExperienceCard/ExperienceCard.module.css';
import clsx from 'clsx';

interface ExperienceCardProps {
  title: string;
  subTitle: string;
  date: string;
  desc?: string[];
  edu?: boolean;
}

export default function ExperienceCard({
  title,
  subTitle,
  date,
  desc,
  edu = false,
}: ExperienceCardProps) {
  const period = (date: string) => {
    const split = date.split(' ');
    const start = split[0];
    const end = split[2];
    const timeStart = start.replace('.', '-');
    const endStart = end.replace('.', '-');
    return (
      <>
        <time dateTime={timeStart}>{start}</time>
        <span> {split[1]} </span>
        <time dateTime={endStart}>{end}</time>
      </>
    );
  };

  return edu ? (
    <li className={styles.eduContainer}>
      <header className={styles.eduHeader}>
        <h5 className={styles.eduWrapper}>
          <p className={clsx(styles.title, styles.eduTitle)}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
        </h5>
        <p className={styles.period}>{period(date)}</p>
      </header>
    </li>
  ) : (
    <li className={styles.container}>
      <header className={clsx(styles.header, styles.cardHeader)}>
        <h5 className={styles.headingWrapper}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
        </h5>
        <p className={styles.period}>{period(date)}</p>
      </header>
      {desc?.map((data, idx) => (
        <p key={idx} className={styles.desc}>
          {data}
        </p>
      ))}
    </li>
  );
}
